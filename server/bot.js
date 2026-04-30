/**
 * 数脉微信 ClawBot — iLink 协议机器人
 *
 * 功能：
 *   1. 扫码登录获取 bot_token
 *   2. 长轮询接收学生微信消息
 *   3. 学生绑定（发送"绑定+手机号"）
 *   4. 指令分发（/help /今日任务 /错题 /学情）
 *   5. 自由提问 → DeepSeek AI 对话
 *   6. 定时推送（每日任务 / 学习小结 / 遗忘提醒）
 *
 * 启动：node bot.js
 */

import 'dotenv/config';
import pool from './db.js';
import cron from 'node-cron';
import OpenAI from 'openai';
import { buildChatPrompt } from './prompts/tutor.js';
import { generateAllDailyTasks, generateWeeklyReport, getSprintPhase } from './services/cron-tasks.js';

// ─── 配置 ────────────────────────────────────────
const ILINK_BASE = 'https://ilinkai.weixin.qq.com';
let botToken = process.env.WECHAT_BOT_TOKEN || '';
let getUpdatesBuf = '';

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

// ─── iLink API 封装 ──────────────────────────────
function randomUin() {
  return Buffer.from(String(Math.floor(Math.random() * 4294967295))).toString('base64');
}

async function ilink(path, body = {}) {
  const res = await fetch(`${ILINK_BASE}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `ilink_bot_token ${botToken}`,
      'X-WECHAT-UIN': randomUin(),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`iLink ${path} → ${res.status}`);
  return res.json();
}

// ─── 登录（获取QR码，需人工扫码）────────────────
async function login() {
  console.log('\n🔑 获取微信 ClawBot 登录二维码...');
  const data = await fetch(`${ILINK_BASE}/ilink/bot/get_bot_qrcode?bot_type=3`).then(r => r.json());

  if (data.qrcode_img_content) {
    // base64 图片，保存到文件方便扫码
    const fs = await import('fs');
    const imgBuf = Buffer.from(data.qrcode_img_content, 'base64');
    fs.writeFileSync('qrcode.png', imgBuf);
    console.log('📱 请扫描 qrcode.png 登录微信 ClawBot');
  }
  console.log(`   QR code ID: ${data.qrcode}`);

  // 轮询等待扫码
  while (true) {
    await sleep(2000);
    const status = await fetch(
      `${ILINK_BASE}/ilink/bot/get_qrcode_status?qrcode=${data.qrcode}`
    ).then(r => r.json());

    if (status.status === 'confirmed') {
      botToken = status.bot_token;
      console.log('✅ ClawBot 登录成功！');
      console.log(`   Token: ${botToken.slice(0, 20)}...`);
      return;
    }
    if (status.status === 'expired') {
      console.log('⚠ 二维码过期，重新获取...');
      return login();
    }
    process.stdout.write('.');
  }
}

// ─── 消息轮询 ────────────────────────────────────
async function pollMessages() {
  console.log('📡 开始消息轮询...');

  while (true) {
    try {
      const data = await ilink('ilink/bot/getupdates', {
        get_updates_buf: getUpdatesBuf,
      });
      getUpdatesBuf = data.get_updates_buf ?? getUpdatesBuf;

      for (const msg of data.msgs ?? []) {
        // 只处理用户主动消息 (message_type === 1)
        if (msg.message_type !== 1) continue;

        const fromUser = msg.from_user_id;
        const contextToken = msg.context_token;

        // 提取消息内容（文本、图片、文件、语音）
        const item = msg.item_list?.[0];
        const text = item?.text_item?.text || '';
        const image = item?.image_item;  // 图片消息
        const file = item?.file_item;    // 文件/PDF消息
        const voice = item?.voice_item;  // W1.4 语音消息

        // 语音 → AMR→Whisper→文字
        if (voice) {
          console.log(`\n🎙 [${fromUser}]: 收到语音消息`);
          handleVoiceMessage(fromUser, voice, contextToken).catch(err => {
            console.error(`❌ 处理语音失败: ${err.message}`);
          });
          continue;
        }

        // 图片/PDF → 试卷分析
        if (image || file) {
          console.log(`\n📸 [${fromUser}]: 收到${image?'图片':'文件'}消息`);
          handleImageMessage(fromUser, image, file, contextToken).catch(err => {
            console.error(`❌ 处理图片失败: ${err.message}`);
          });
          continue;
        }

        console.log(`\n💬 [${fromUser}]: ${text.slice(0, 50)}`);

        // 异步处理，不阻塞轮询
        handleMessage(fromUser, text.trim(), contextToken).catch(err => {
          console.error(`❌ 处理消息失败: ${err.message}`);
        });
      }
    } catch (err) {
      console.error(`⚠ 轮询异常: ${err.message}`);
      await sleep(5000);
    }
  }
}

// ─── 消息处理 ────────────────────────────────────
async function handleMessage(fromUser, text, contextToken) {
  // 1. 查绑定
  const user = await findUserByWechat(fromUser);

  // 2. 未绑定 → 检查是否为绑定指令
  if (!user) {
    if (text.startsWith('绑定')) {
      const phone = text.replace(/^绑定\s*/, '').trim();
      if (/^1\d{10}$/.test(phone)) {
        const bound = await bindUser(fromUser, phone);
        if (bound) {
          await reply(fromUser, contextToken,
            `✅ 绑定成功！${bound.nickname}同学你好~\n\n我是数脉学长🎓，你的数学AI助手。\n\n📌 发送数学题目，我来帮你讲解\n📌 发送"今日任务"获取每日练习\n📌 发送"错题"查看错题本\n📌 发送"学情"查看学习报告\n📌 发送"帮助"查看更多指令`
          );
        } else {
          await reply(fromUser, contextToken, '⚠ 该手机号未注册，请先在 shumai-2026.netlify.app 注册账号');
        }
      } else {
        await reply(fromUser, contextToken, '📱 绑定格式：绑定 13800138000\n请发送"绑定"+ 空格 + 你注册时的手机号');
      }
    } else {
      await reply(fromUser, contextToken,
        '👋 你好！我是数脉学长，你的数学AI助手。\n\n📱 请先绑定账号：\n1️⃣ 在 shumai-2026.netlify.app 注册\n2️⃣ 回复：绑定 你的手机号\n\n例如：绑定 13800138000'
      );
    }
    return;
  }

  // 3. 已绑定 → 指令路由
  const cmd = text.toLowerCase();

  if (cmd === '帮助' || cmd === '/help' || cmd === 'help') {
    await reply(fromUser, contextToken,
      `🎓 数脉学长指令列表：\n\n📌 直接发数学题 → AI讲解\n🎙 发送语音 → 自动识别转文字\n� 发送图片/PDF → 试卷分析\n�📌 "今日任务" → 获取每日练习\n📌 "错题" → 查看错题本\n📌 "学情" → 学习进度报告\n📌 "帮助" → 本菜单`
    );
    return;
  }

  if (cmd === '今日任务' || cmd === '/task') {
    const report = await getDailyTask(user);
    await reply(fromUser, contextToken, report);
    return;
  }

  if (cmd === '错题' || cmd === '/wrong') {
    const report = await getWrongReport(user);
    await reply(fromUser, contextToken, report);
    return;
  }

  if (cmd === '学情' || cmd === '/stats') {
    const report = await getStatsReport(user);
    await reply(fromUser, contextToken, report);
    return;
  }

  // 4. 自由提问 → AI 对话
  await handleAIChat(user, fromUser, text, contextToken);
}

// ─── W1.4 语音消息识别（AMR → ffmpeg → MP3 → Whisper） ────
async function handleVoiceMessage(fromUser, voice, contextToken) {
  const user = await findUserByWechat(fromUser);
  if (!user) {
    await reply(fromUser, contextToken,
      '🎙 收到语音消息！\n\n📱 请先绑定账号才能使用语音功能：\n1️⃣ 在 shumai-2026.netlify.app 注册\n2️⃣ 回复：绑定 你的手机号'
    );
    return;
  }

  await reply(fromUser, contextToken, '🎙 正在识别语音，请稍候...');

  const { tmpdir } = await import('os');
  const { join } = await import('path');
  const { writeFileSync, unlinkSync, createReadStream } = await import('fs');
  const { execSync } = await import('child_process');

  const tmpId = `${Date.now()}_${fromUser.slice(-6)}`;
  const amrPath = join(tmpdir(), `shumai_${tmpId}.amr`);
  const mp3Path = join(tmpdir(), `shumai_${tmpId}.mp3`);

  try {
    // 1. 获取 AMR 音频 base64
    const amrBase64 = voice.voice_content || voice.file_content || '';
    if (!amrBase64) {
      await reply(fromUser, contextToken, '⚠ 无法读取语音内容，请重试或直接发文字');
      return;
    }

    // 2. 写入临时 AMR 文件
    writeFileSync(amrPath, Buffer.from(amrBase64, 'base64'));

    // 3. AMR → MP3（需服务器安装 ffmpeg）
    execSync(
      `ffmpeg -i ${amrPath} -ar 16000 -ac 1 -b:a 64k ${mp3Path} -y -loglevel error`,
      { timeout: 15000 }
    );

    // 4. OpenAI Whisper 语音转文字
    const whisperClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    });
    const transcription = await whisperClient.audio.transcriptions.create({
      file: createReadStream(mp3Path),
      model: 'whisper-1',
      language: 'zh',
    });
    const text = (transcription.text || '').trim();

    // 5. 清理临时文件
    try { unlinkSync(amrPath); } catch {}
    try { unlinkSync(mp3Path); } catch {}

    if (!text) {
      await reply(fromUser, contextToken,
        '⚠ 未能识别语音内容，请说清楚后重试，或直接发文字提问'
      );
      return;
    }

    // 6. 回显识别结果，转入正常对话流程
    await reply(fromUser, contextToken, `🎙 识别为：「${text}」`);
    await handleMessage(fromUser, text, contextToken);

  } catch (err) {
    console.error('❌ 语音识别失败:', err.message);
    try { unlinkSync(amrPath); } catch {}
    try { unlinkSync(mp3Path); } catch {}

    const isNoFfmpeg = err.message.includes('ffmpeg');
    await reply(fromUser, contextToken,
      isNoFfmpeg
        ? '⚠ 服务器暂未安装语音转换工具，请直接发文字提问'
        : '⚠ 语音识别失败，请直接发文字提问\n\n💡 例如："已知x²-5x+6=0，求解"'
    );
  }
}

// ─── 图片/PDF 试卷分析 ────────────────────────────
async function handleImageMessage(fromUser, image, file, contextToken) {
  // 1. 查绑定
  const user = await findUserByWechat(fromUser);
  if (!user) {
    await reply(fromUser, contextToken,
      '📸 收到你的图片/文件！\n\n📱 请先绑定账号才能分析试卷：\n1️⃣ 在 shumai-2026.netlify.app 注册\n2️⃣ 回复：绑定 你的手机号'
    );
    return;
  }

  // 2. 发送处理中提示
  await reply(fromUser, contextToken, '⏳ 正在识别分析，请稍候...');

  try {
    // 3. 准备图片数据（base64）
    let imageBase64 = null;
    if (image?.image_content) {
      imageBase64 = image.image_content;  // iLink 直接返回 base64
    } else if (file?.file_content) {
      // PDF 或其他文件，尝试作为图片处理
      imageBase64 = file.file_content;
    }

    if (!imageBase64) {
      await reply(fromUser, contextToken, '⚠ 无法读取图片内容，请重试');
      return;
    }

    // 4. 调用 AI 分析试卷/作业
    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是中考数学试卷分析助手。用户上传了一张作业/试卷图片。

请分析：
1. 识别所有数学题目（题型、难度）
2. 匹配涉及的知识点（从194个中考知识点中）
3. 预估每道题的分值和得分建议
4. 给出整体薄弱点分析

请以简洁的文本格式返回，适合微信阅读。`,
        },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
            { type: 'text', text: '请分析这张数学试卷/作业' },
          ],
        },
      ],
      max_tokens: 1500,
      temperature: 0.3,
    });

    const analysis = completion.choices[0]?.message?.content || '分析失败';

    // 5. 发送分析结果
    await reply(fromUser, contextToken,
      `📋 试卷分析完成！\n\n${analysis.slice(0, 800)}\n\n${analysis.length > 800 ? '...(内容已截断，详细分析请登录网页版查看)' : ''}\n\n💡 提示：可回复"错题"查看需重点关注的内容`
    );

    // 6. 记录分析日志（可选）
    await pool.query(
      `INSERT INTO chat_history (user_id, role, content, context)
       VALUES ($1, 'assistant', $2, $3)`,
      [user.id, '微信试卷分析', JSON.stringify({ type: 'paper_analyze_wechat', image_size: imageBase64.length })]
    );

  } catch (err) {
    console.error('❌ 试卷分析失败:', err.message);
    await reply(fromUser, contextToken,
      '⚠ 分析失败，可能原因：\n1. 图片不清晰\n2. 当前AI服务繁忙\n\n建议：\n• 重新拍摄更清晰的照片\n• 或使用网页版 shumai-2026.netlify.app 的"试卷分析"功能'
    );
  }
}

// ─── 发送回复 ────────────────────────────────────
async function reply(toUser, contextToken, text) {
  try {
    await ilink('ilink/bot/sendmessage', {
      msg: {
        to_user_id: toUser,
        message_type: 2,
        message_state: 2,
        context_token: contextToken,
        item_list: [{
          type: 1,
          text_item: { text },
        }],
      },
    });
    console.log(`  📤 回复 [${toUser}]: ${text.slice(0, 40)}...`);
  } catch (err) {
    console.error(`  ❌ 回复失败: ${err.message}`);
  }
}

// ─── 用户绑定 ────────────────────────────────────
async function findUserByWechat(wechatUid) {
  const res = await pool.query('SELECT * FROM users WHERE wechat_uid = $1', [wechatUid]);
  return res.rows[0] || null;
}

async function bindUser(wechatUid, phone) {
  const res = await pool.query(
    'UPDATE users SET wechat_uid = $1, updated_at = NOW() WHERE phone = $2 AND wechat_uid IS NULL RETURNING id, phone, nickname, grade',
    [wechatUid, phone]
  );
  return res.rows[0] || null;
}

// ─── AI 对话 ─────────────────────────────────────
async function handleAIChat(user, fromUser, text, contextToken) {
  try {
    // 获取最近5轮对话历史
    const histRes = await pool.query(
      'SELECT role, content FROM chat_history WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10',
      [user.id]
    );
    const history = histRes.rows.reverse();

    // 获取学情上下文
    const progRes = await pool.query(
      'SELECT topic_id, mastered FROM progress WHERE user_id = $1',
      [user.id]
    );
    const masteredTopics = progRes.rows.filter(p => p.mastered).map(p => p.topic_id);
    const weakTopics = progRes.rows.filter(p => !p.mastered).map(p => p.topic_id);

    // 错题统计
    const wrongRes = await pool.query(
      'SELECT COUNT(*) as cnt FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE',
      [user.id]
    );
    const wrongCount = wrongRes.rows[0]?.cnt || 0;

    const systemPrompt = buildChatPrompt({
      nickname: user.nickname,
      grade: user.grade,
      masteredTopics,
      weakTopics,
      wrongCount,
    });

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(h => ({ role: h.role, content: h.content })),
      { role: 'user', content: text },
    ];

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiReply = completion.choices[0]?.message?.content || '抱歉，我没有理解你的问题，可以换个方式问我吗？';

    // 保存对话历史
    await pool.query(
      'INSERT INTO chat_history (user_id, role, content) VALUES ($1, $2, $3)',
      [user.id, 'user', text]
    );
    await pool.query(
      'INSERT INTO chat_history (user_id, role, content) VALUES ($1, $2, $3)',
      [user.id, 'assistant', aiReply]
    );

    await reply(fromUser, contextToken, aiReply);
  } catch (err) {
    console.error(`❌ AI 对话失败: ${err.message}`);
    await reply(fromUser, contextToken, '⚠ AI暂时不在线，请稍后再试~');
  }
}

// ─── 功能报告 ────────────────────────────────────
async function getDailyTask(user) {
  const progRes = await pool.query(
    'SELECT topic_id, mastered FROM progress WHERE user_id = $1', [user.id]
  );
  const mastered = progRes.rows.filter(p => p.mastered).length;
  const total = 194;
  const pct = Math.round(mastered / total * 100);

  return `📋 今日任务 | ${user.nickname || '同学'}\n\n📊 知识点进度：${mastered}/${total}（${pct}%）\n\n🎯 今日计划：\n① 复习1个薄弱知识点\n② 完成2道基础题\n③ 挑战1道真题\n\n💪 坚持就是胜利！在H5上完成后会自动同步~`;
}

async function getWrongReport(user) {
  const res = await pool.query(
    'SELECT question_id, question_type, wrong_count FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE ORDER BY wrong_count DESC LIMIT 5',
    [user.id]
  );
  if (res.rows.length === 0) return '🎉 你的错题本空空如也，太棒了！继续保持~';

  const lines = res.rows.map((r, i) =>
    `${i + 1}. ${r.question_type === 'exam' ? '真题' : '基础'}#${r.question_id}（错${r.wrong_count}次）`
  );
  return `📋 错题本 | 未解决 ${res.rows.length} 道\n\n${lines.join('\n')}\n\n📌 去H5上复习这些错题吧！`;
}

async function getStatsReport(user) {
  const progRes = await pool.query(
    'SELECT COUNT(*) FILTER(WHERE mastered) as m, COUNT(*) as t FROM progress WHERE user_id = $1',
    [user.id]
  );
  const wrongRes = await pool.query(
    'SELECT COUNT(*) as cnt FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE',
    [user.id]
  );
  const checkinRes = await pool.query(
    'SELECT COUNT(*) as days FROM checkins WHERE user_id = $1',
    [user.id]
  );

  const m = progRes.rows[0]?.m || 0;
  const t = progRes.rows[0]?.t || 0;
  const wrong = wrongRes.rows[0]?.cnt || 0;
  const days = checkinRes.rows[0]?.days || 0;

  return `📊 学情报告 | ${user.nickname || '同学'}\n\n📚 知识点：${m}/${t} 已掌握\n❌ 错题：${wrong} 道未解决\n📅 打卡：${days} 天\n\n${m >= 100 ? '🌟 过半了！冲刺阶段加油！' : '💪 稳扎稳打，基础最重要！'}`;
}

// ─── 定时任务配置（从数据库读取，支持管理端修改） ───
const activeCrons = new Map(); // key -> ScheduledTask

// 任务执行器映射
const CRON_EXECUTORS = {
  cron_daily_generate: async () => {
    console.log('⏰ T1.1 生成每日任务...');
    await generateAllDailyTasks();
  },
  cron_morning_push: async () => {
    console.log('⏰ 推送今日任务...');
    await pushToAllUsers(async (user) => {
      const task = await getDailyTask(user);
      const sprint = getSprintPhase(user.exam_date);
      if (sprint && sprint.phase !== 'done') {
        return `${task}\n\n🔥 距考试还有 ${sprint.daysLeft} 天\n当前：${sprint.label}（${sprint.focus}）\n📝 ${sprint.dailyPlan.desc}`;
      }
      return task;
    });
  },
  cron_evening_push: async () => {
    console.log('⏰ T1.3 推送学习小结...');
    await pushToAllUsers(async (user) => {
      return `🌙 今日小结 | ${user.nickname || '同学'}\n\n记得复习今天学的内容哦！早睡早起，明天继续加油 💪`;
    });
  },
  cron_weekly_report: async () => {
    console.log('⏰ T1.2 推送周报...');
    await pushToAllUsers(async (user) => {
      const report = await generateWeeklyReport(user.id);
      return report.text;
    });
  },
};

// 从数据库加载定时任务配置并注册
async function setupCronJobs() {
  // 默认配置（数据库不可用时的兜底）
  const defaults = [
    { key: 'cron_daily_generate', value: { cron: '0 1 * * *', enabled: true } },
    { key: 'cron_morning_push', value: { cron: '0 7 * * *', enabled: true } },
    { key: 'cron_evening_push', value: { cron: '0 21 * * *', enabled: true } },
    { key: 'cron_weekly_report', value: { cron: '0 8 * * 1', enabled: true } },
  ];

  let configs = defaults;
  try {
    const res = await pool.query("SELECT key, value FROM system_config WHERE category = 'cron'");
    if (res.rows.length > 0) configs = res.rows;
  } catch (err) {
    console.warn('⚠ 无法读取数据库定时配置，使用默认值:', err.message);
  }

  // 停止所有旧任务
  for (const [k, task] of activeCrons) {
    task.stop();
  }
  activeCrons.clear();

  // 注册新任务
  for (const cfg of configs) {
    const val = typeof cfg.value === 'string' ? JSON.parse(cfg.value) : cfg.value;
    const executor = CRON_EXECUTORS[cfg.key];
    if (!executor) continue;

    if (val.enabled === false) {
      console.log(`  ⏸ ${cfg.key} — 已禁用`);
      continue;
    }

    try {
      const task = cron.schedule(val.cron, async () => {
        try { await executor(); } catch (e) { console.error(`❌ ${cfg.key}:`, e.message); }
      }, { timezone: 'Asia/Shanghai' });
      activeCrons.set(cfg.key, task);
      console.log(`  ✓ ${cfg.key} — ${val.cron}${val.desc ? ' (' + val.desc + ')' : ''}`);
    } catch (e) {
      console.error(`  ❌ ${cfg.key} cron表达式无效 "${val.cron}":`, e.message);
    }
  }

  console.log(`⏰ ${activeCrons.size} 个定时任务已注册`);
}

// 全局触发器（供管理端 API 手动触发）
global.__cronTrigger = async (taskKey) => {
  const executor = CRON_EXECUTORS[taskKey];
  if (!executor) throw new Error(`未知任务: ${taskKey}`);
  await executor();
};

// 全局重载器（管理端修改配置后调用）
global.__cronReload = setupCronJobs;

async function pushToAllUsers(msgFn) {
  try {
    const res = await pool.query('SELECT * FROM users WHERE wechat_uid IS NOT NULL');
    for (const user of res.rows) {
      try {
        const text = await msgFn(user);
        // 推送消息（无 context_token，用空字符串）
        await ilink('ilink/bot/sendmessage', {
          msg: {
            to_user_id: user.wechat_uid,
            message_type: 2,
            message_state: 2,
            context_token: '',
            item_list: [{ type: 1, text_item: { text } }],
          },
        });
        await sleep(500); // 限速
      } catch (err) {
        console.error(`  推送失败 [${user.phone}]: ${err.message}`);
      }
    }
  } catch (err) {
    console.error(`  批量推送失败: ${err.message}`);
  }
}

// ─── 工具 ────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── 启动 ────────────────────────────────────────
async function main() {
  console.log('🤖 数脉学长 ClawBot 启动中...\n');

  // 如果有保存的 token，跳过登录
  if (botToken) {
    console.log('✓ 使用已保存的 bot_token');
  } else {
    await login();
  }

  // 设置定时任务
  setupCronJobs();

  // 开始消息轮询
  await pollMessages();
}

main().catch(err => {
  console.error('💥 Bot 启动失败:', err);
  process.exit(1);
});
