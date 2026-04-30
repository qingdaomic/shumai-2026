// 数脉知识点数据 — 194个知识点
// 自动从 shumai-v7-1.jsx 拆分生成

/* ════════════════════════════════════════════════════════════
   KNOWLEDGE TOPICS — 24 核心节点（图谱坐标）
════════════════════════════════════════════════════════════ */
const TOPICS = [

  // ══════════════════════════════════════════════
  // 数与代数 · 七年级上 (7a)
  // ══════════════════════════════════════════════

  { id:"rational",
    name:"有理数",
    semester:"7a",           // 原 grade:7 ✓ 不变
    chapter:"ch_7a_2",       // 七上第二章
    domain:"algebra",
    x:90, y:165,
    fivePoints:[
      "概念：整数与分数的统称",
      "常例：2, -3, 0.5, -1/3",
      "特例：0既不正也不负",
      "反例：π不是有理数（无理数）",
      "考察：混合运算、绝对值、数轴排序"
    ],
    keys:[
      "绝对值与相反数",
      "四则混合运算顺序",
      "科学计数法",
      "负数乘方规律",
      "数轴大小比较"
    ],
    tips:"最高频错误：(-a)²=a²，(-a)³=-a³。运算顺序：先括号→乘除→加减。",
    pre:[], rel:["reals","poly","linear_eq","coords"],
    examYears:[2015,2016,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:30, freq:95, diff:2,
    methods:["m19","m13"],
    basicsCount:22, groupCount:0, finalCount:0 },

  { id:"poly",
    name:"整式运算",
    semester:"7b",           // 原 grade:7；精确到7b（七下第一章整式乘除）
    chapter:"ch_7b_1",
    domain:"algebra",
    x:265, y:90,
    fivePoints:[
      "概念：单项式与多项式",
      "常例：3x²y，2x+1",
      "特例：单项式×多项式，每项都要乘",
      "反例：(a+b)²≠a²+b²（漏中间项）",
      "考察：乘法公式展开化简"
    ],
    keys:[
      "合并同类项规则",
      "去括号（注意符号）",
      "完全平方：(a±b)²=a²±2ab+b²",
      "平方差：(a+b)(a-b)=a²-b²",
      "整式乘法分配律"
    ],
    tips:"完全平方公式中间项±2ab最容易漏！展开后必须检查项数是否正确。",
    pre:["rational"], rel:["factoring","linear_eq","power_rules"],
    examYears:[2015,2017,2021,2022,2024],
    totalScore:15, freq:65, diff:2,
    methods:["m06","m23"],
    basicsCount:20, groupCount:2, finalCount:0 },

  { id:"linear_eq",
    name:"一元一次方程",
    semester:"7a",           // 原 grade:7 ✓ 不变（七上第五章）
    chapter:"ch_7a_5",
    domain:"algebra",
    x:445, y:90,
    fivePoints:[
      "概念：含一个未知数且最高次为1",
      "常例：2x-1=3",
      "特例：含分母方程需去分母",
      "反例：x+2>3是不等式不是方程",
      "考察：行程、工程、混合等应用题"
    ],
    keys:[
      "移项（变号）",
      "去括号",
      "去分母（两边乘公分母）",
      "行程问题：速×时=路",
      "工程问题：效率×时=工作量"
    ],
    tips:"应用题三步：设未知量→找等量关系→列方程。设谁为x要选最方便的量。",
    pre:["rational","poly"], rel:["equations","inequality","linear_fn"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:33, freq:92, diff:2,
    methods:["m20","m07","m08"],
    basicsCount:28, groupCount:4, finalCount:0 },

  { id:"inequality",
    name:"不等式",
    semester:"8b",           // ⚠ 原 grade:7；2024新版不等式整体在八下第二章
    chapter:"ch_8b_2",
    domain:"algebra",
    x:620, y:90,
    fivePoints:[
      "概念：用<>≤≥表示大小关系",
      "常例：2x-1>3",
      "特例：乘以负数变号（最重要！）",
      "反例：移项不变号，乘除才变号",
      "考察：不等式组取交集，求整数解"
    ],
    keys:[
      "不等式基本性质（乘负变号）",
      "一元一次不等式解法",
      "数轴表示解集",
      "不等式组：取交集",
      "整数解的求法"
    ],
    tips:"口诀：同大取大，同小取小，大小小大取中间，大大小小空集现。乘以负数变号是送命题！",
    pre:["linear_eq"], rel:["linear_fn","inequality_app"],
    examYears:[2015,2017,2019,2021],
    totalScore:12, freq:65, diff:2,
    methods:["m19","m20","m14"],
    basicsCount:20, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 数与代数 · 八年级上 (8a)
  // ══════════════════════════════════════════════

  { id:"reals",
    name:"实数",
    semester:"8a",           // 原 grade:8 ✓ 不变（八上第二章）
    chapter:"ch_8a_2",
    domain:"algebra",
    x:90, y:295,
    fivePoints:[
      "概念：有理数与无理数的统称",
      "常例：√2, π, -√3",
      "特例：√4=2是有理数",
      "反例：0.1010010001…是无理数",
      "考察：根式化简、大小比较、估算"
    ],
    keys:[
      "无理数的识别",
      "算术平方根√a定义（a≥0）",
      "立方根的概念与计算",
      "实数大小的估算（夹逼法）",
      "√(a²)=|a|（重点！）"
    ],
    tips:"√(a²)=|a| 不是 a！化简先分解被开方数。估算时用夹逼：3²=9，4²=16，所以√12在3到4之间。",
    pre:["rational"], rel:["radical","pythagorean","quad_eq"],
    examYears:[2016,2019,2023],
    totalScore:9, freq:55, diff:2,
    methods:["m10","m14"],
    basicsCount:18, groupCount:0, finalCount:0 },

  { id:"coords",
    name:"坐标系",
    semester:"8a",           // 原 grade:8 ✓ 不变（八上第三章）
    chapter:"ch_8a_3",
    domain:"algebra",
    x:620, y:225,
    fivePoints:[
      "概念：x轴y轴确定平面位置",
      "常例：A(2,-3)在第四象限",
      "特例：轴上的点坐标有一个为0",
      "反例：(-2,3)≠(3,-2)坐标顺序不能换",
      "考察：对称点、距离、面积"
    ],
    keys:[
      "四个象限的象限号",
      "三种对称坐标：x轴(x,-y)，y轴(-x,y)，原点(-x,-y)",
      "两点距离公式",
      "中点坐标公式",
      "坐标系中求面积（割补法）"
    ],
    tips:"三种对称口诀：关于x轴→y取反；关于y轴→x取反；关于原点→都取反。",
    pre:["rational"], rel:["linear_fn","inverse_fn","quad_fn"],
    examYears:[2016,2017,2018,2019,2020],
    totalScore:15, freq:65, diff:2,
    methods:["m16","m04","m22"],
    basicsCount:20, groupCount:2, finalCount:0 },

  { id:"linear_fn",
    name:"一次函数",
    semester:"8a",           // 原 grade:8 ✓ 不变（八上第四章）
    chapter:"ch_8a_4",
    domain:"algebra",
    x:795, y:90,
    fivePoints:[
      "概念：y=kx+b（k≠0）",
      "常例：y=2x-1",
      "特例：y=kx（正比例函数，过原点）",
      "反例：y=b是常数函数，不是一次函数",
      "考察：象限、图象、与不等式结合"
    ],
    keys:[
      "k>0递增，k<0递减",
      "b是y轴截距",
      "经过象限的判断（k和b的符号）",
      "两直线交点：联立方程组",
      "函数图像与不等式解集的结合"
    ],
    tips:"判断象限：k>0经一三，k<0经二四；b>0交y轴正轴，b<0交负轴。象限问题每年必考！",
    pre:["linear_eq","coords","fn_concept"], rel:["inequality","equations","quad_fn"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:33, freq:92, diff:3,
    methods:["m22","m21","m16","m05"],
    basicsCount:25, groupCount:4, finalCount:1 },

  { id:"equations",
    name:"二元一次方程组",
    semester:"8a",           // 原 grade:8 ✓ 不变（八上第五章）
    chapter:"ch_8a_5",
    domain:"algebra",
    x:445, y:360,
    fivePoints:[
      "概念：多个方程的联立",
      "常例：{2x+y=5, x-y=1}",
      "特例：三元方程组",
      "反例：方程组的解是交点，不是线",
      "考察：代入消元 vs 加减消元的选择"
    ],
    keys:[
      "代入法（某变量系数为1时优先）",
      "加减消元法（系数整齐时优先）",
      "应用题建立方程组",
      "与函数联立求交点",
      "验算代入验证"
    ],
    tips:"加减法：将某个变量系数化成互为相反数，再相加消去。选哪种方法：看哪种算更少。",
    pre:["linear_eq"], rel:["linear_fn","coords"],
    examYears:[2016,2017,2018,2021],
    totalScore:24, freq:68, diff:3,
    methods:["m20","m02","m08"],
    basicsCount:18, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 数与代数 · 八年级下 (8b)
  // ══════════════════════════════════════════════

  { id:"factoring",
    name:"因式分解",
    semester:"8b",           // 原 grade:8 ✓ 不变（八下第四章）
    chapter:"ch_8b_4",
    domain:"algebra",
    x:265, y:225,
    fivePoints:[
      "概念：整式乘法的逆运算",
      "常例：x²-4=(x+2)(x-2)",
      "特例：x²+2x+1=(x+1)²",
      "反例：x²+4不能分解（实数范围）",
      "考察：三步法：提→公式→十字"
    ],
    keys:[
      "提取公因式（必须第一步）",
      "完全平方逆用",
      "平方差逆用",
      "十字相乘法（二次三项式）",
      "分组分解法"
    ],
    tips:"口诀：先提公因式，再看公式法，不行用十字。多步分解不能停，分到不能分为止。",
    pre:["poly"], rel:["fraction","quad_eq"],
    examYears:[2016,2017,2019,2022],
    totalScore:12, freq:70, diff:3,
    methods:["m06","m23","m13"],
    basicsCount:25, groupCount:3, finalCount:0 },

  { id:"fraction",
    name:"分式",
    semester:"8b",           // 原 grade:8 ✓ 不变（八下第五章）
    chapter:"ch_8b_5",
    domain:"algebra",
    x:265, y:360,
    fivePoints:[
      "概念：整式之比（分母含未知数）",
      "常例：(x+1)/(x-1)",
      "特例：x=1时分式无意义",
      "反例：约分后忘写限制条件",
      "考察：化简+方程，必须验根"
    ],
    keys:[
      "分式基本性质（分子分母同乘或除）",
      "约分（因式分解后约）",
      "通分（找公分母）",
      "分式四则运算",
      "分式方程：去分母→解→验根"
    ],
    tips:"分式方程100%要验根！增根使分母=0，是最常见的送分陷阱。每年必考。",
    pre:["factoring"], rel:["linear_eq","fraction_eq_app"],
    examYears:[2018,2021,2023],
    totalScore:24, freq:72, diff:3,
    methods:["m06","m20","m13"],
    basicsCount:20, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 数与代数 · 九年级上 (9a)
  // ══════════════════════════════════════════════

  { id:"quad_eq",
    name:"一元二次方程",
    semester:"9a",           // 原 grade:9 ✓ 不变（九上第二章）
    chapter:"ch_9a_2",
    domain:"algebra",
    x:445, y:225,
    fivePoints:[
      "概念：ax²+bx+c=0（a≠0）",
      "常例：x²-5x+6=0",
      "特例：x²=4（缺b项，开方法）",
      "反例：x²=0有两个相等实数根（不是无根）",
      "考察：与判别式、韦达定理、函数综合"
    ],
    keys:[
      "因式分解法",
      "配方法",
      "求根公式x=(-b±√Δ)/2a",
      "判别式Δ=b²-4ac三种情况",
      "韦达定理：x₁+x₂=-b/a，x₁x₂=c/a"
    ],
    tips:"韦达定理逆用：已知根之和与积，可直接写出方程。判别式是最常考的送分点。",
    pre:["factoring","reals"], rel:["quad_fn","equations","quad_eq_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:33, freq:95, diff:4,
    methods:["m01","m06","m11","m12","m19"],
    basicsCount:30, groupCount:5, finalCount:2 },

  { id:"inverse_fn",
    name:"反比例函数",
    semester:"9a",           // 原 grade:8；⚠ 2024新版在九上第五章，修正为9a
    chapter:"ch_9a_5",
    domain:"algebra",
    x:795, y:225,
    fivePoints:[
      "概念：y=k/x（k≠0，x≠0）",
      "常例：y=6/x",
      "特例：k>0在一三象限，k<0在二四",
      "反例：在同一象限内是递减不是单调递减",
      "考察：面积恒等定理、综合题"
    ],
    keys:[
      "k的符号决定所在象限",
      "各象限内的单调性",
      "双曲线上点P：矩形面积=|k|",
      "三角形面积=|k|/2",
      "与一次函数综合"
    ],
    tips:"双曲线面积恒等定理：P(x,y)在y=k/x上，P与坐标轴围成矩形面积=|k|，三角形=|k|/2。",
    pre:["coords","fraction"], rel:["linear_fn"],
    examYears:[2017,2019,2020,2022],
    totalScore:12, freq:60, diff:3,
    methods:["m21","m22","m04"],
    basicsCount:18, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 数与代数 · 九年级下 (9b)
  // ══════════════════════════════════════════════

  { id:"quad_fn",
    name:"二次函数",
    semester:"9b",           // 原 grade:9 ✓ 不变（九下第二章）
    chapter:"ch_9b_2",
    domain:"algebra",
    x:795, y:360,
    fivePoints:[
      "概念：y=ax²+bx+c（a≠0）",
      "常例：y=x²-4x+3",
      "特例：顶点在x轴上（Δ=0）",
      "反例：a=0时退化为一次函数",
      "考察：压轴综合，几乎必出大题"
    ],
    keys:[
      "顶点式y=a(x-h)²+k，顶点(h,k)",
      "对称轴x=-b/2a",
      "判别式决定与x轴交点个数",
      "区间内最值（比较顶点与端点）",
      "综合：直线+抛物线+面积"
    ],
    tips:"压轴三连：①待定系数法求解析式 ②联立直线求交点 ③面积最值（设点坐标求函数）。",
    pre:["quad_eq","linear_fn","coords"], rel:["quad_eq","linear_fn","quad_fn_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:132, freq:96, diff:5,
    methods:["m01","m05","m21","m22","m04","m19","m16"],
    basicsCount:28, groupCount:6, finalCount:4 },

  // ══════════════════════════════════════════════
  // 图形与几何 · 七年级下 (7b)
  // ══════════════════════════════════════════════

  { id:"tri_basic",
    name:"三角形基础",
    semester:"7b",           // 原 grade:7 ✓ 精确到7b（七下第四章）
    chapter:"ch_7b_4",
    domain:"geometry",
    x:90, y:520,
    fivePoints:[
      "概念：三角形的基本性质",
      "常例：内角和180°",
      "特例：退化三角形（三点共线）",
      "反例：三边2,3,6不能构成三角形",
      "考察：外角定理快速算角"
    ],
    keys:[
      "内角和=180°",
      "三边关系（两边之和>第三边）",
      "外角=不相邻两内角之和",
      "三条重要线（高/中线/角平分线）",
      "重心/内心/外心性质"
    ],
    tips:"外角定理是最快捷的算角工具！外角>任一不相邻内角，可直接排除选项。",
    pre:["parallel_lines"], rel:["congruent","special_tri","similar"],
    examYears:[2015,2017,2019,2021,2023],
    totalScore:15, freq:65, diff:2,
    methods:["m07","m08","m18"],
    basicsCount:15, groupCount:1, finalCount:0 },

  { id:"congruent",
    name:"全等三角形",
    semester:"7b",           // 原 grade:8；⚠ 2024新版七下第四章，修正为7b
    chapter:"ch_7b_4",
    domain:"geometry",
    x:265, y:520,
    fivePoints:[
      "概念：形状大小完全相同",
      "常例：SSS/SAS/ASA/AAS/HL",
      "特例：HL只用于直角三角形",
      "反例：SSA不能判定全等（反例存在）",
      "考察：证明+推论（CPCTC）"
    ],
    keys:[
      "SSS（三边对应相等）",
      "SAS（两边及夹角）——角必须是夹角",
      "ASA（两角及夹边）",
      "AAS（两角及对边）",
      "HL（斜边和一直角边）"
    ],
    tips:"SAS中角必须在两边之间！AAA不能判定全等（可能相似）。证明顺序：找条件→凑定理→得结论。",
    pre:["tri_basic","parallel_lines"], rel:["special_tri","isosceles","similar"],
    examYears:[2015,2018,2020,2023,2025],
    totalScore:40, freq:82, diff:3,
    methods:["m07","m08","m15"],
    basicsCount:25, groupCount:3, finalCount:1 },

  // ══════════════════════════════════════════════
  // 图形与几何 · 八年级上 (8a)
  // ══════════════════════════════════════════════

  { id:"pythagorean",
    name:"勾股定理",
    semester:"8a",           // 原 grade:8 ✓ 不变（八上第一章）
    chapter:"ch_8a_1",
    domain:"geometry",
    x:90, y:650,
    fivePoints:[
      "概念：直角三角形三边关系",
      "常例：3²+4²=5²",
      "特例：等腰直角三角形a²+a²=(√2a)²",
      "反例：a²+b²≠c²不是直角三角形",
      "考察：逆定理+勾股数+实际应用"
    ],
    keys:[
      "a²+b²=c²（c为斜边）",
      "逆定理：满足则为直角三角形",
      "勾股数组：3-4-5，5-12-13，6-8-10",
      "坐标系两点距离：d=√((x₂-x₁)²+(y₂-y₁)²)",
      "实际问题（梯子、爬坡等）"
    ],
    tips:"必背：3-4-5，5-12-13，8-15-17，7-24-25。看到含√的边长立刻联想勾股数组！",
    pre:["reals","tri_basic"], rel:["pythagorean_inv","special_tri","circle","trig"],
    examYears:[2015,2016,2018,2019,2020,2022,2024,2025],
    totalScore:48, freq:85, diff:3,
    methods:["m16","m04","m03"],
    basicsCount:22, groupCount:3, finalCount:1 },

  { id:"special_tri",
    name:"特殊三角形",
    semester:"8a",           // 原 grade:8 ✓ 精确到8a
    chapter:"ch_8a_1",
    domain:"geometry",
    x:265, y:650,
    fivePoints:[
      "概念：等腰和等边三角形的特殊性质",
      "常例：等腰△顶角平分线=中线=高",
      "特例：等边△三角均为60°",
      "反例：顶角平分线不是底角平分线",
      "考察：辅助线+特殊角度计算"
    ],
    keys:[
      "等腰三角形三线合一（顶角处）",
      "等边三角形内角均为60°",
      "30-60-90：边长比1:√3:2",
      "45-45-90：边长比1:1:√2",
      "辅助线：作高将等腰一分为二"
    ],
    tips:"等腰三角形遇难题，第一反应：作顶角平分线（同时是中线和高），利用对称性解题。",
    pre:["tri_basic"], rel:["congruent","pythagorean","isosceles"],
    examYears:[2015,2016,2017,2019,2020,2022],
    totalScore:30, freq:75, diff:3,
    methods:["m15","m03","m04"],
    basicsCount:20, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 图形与几何 · 八年级下 (8b)
  // ══════════════════════════════════════════════

  { id:"isosceles",
    name:"等腰三角形定理",
    semester:"8b",           // ⚠ 原旧版在9a；2024新版移至八下第一章
    chapter:"ch_8b_1",
    domain:"geometry",
    x:90, y:520,
    fivePoints:[
      "概念：等腰三角形两底角相等",
      "常例：AB=AC → ∠B=∠C",
      "特例：等边三角形是特殊等腰三角形",
      "反例：∠B=∠C不能推出AB=AC（需用逆定理）",
      "考察：与全等、平行四边形综合证明"
    ],
    keys:[
      "等腰三角形性质：等边对等角",
      "等腰三角形判定：等角对等边",
      "等腰三角形三线合一（顶角平分线=中线=高）",
      "等边三角形的性质与判定",
      "辅助线：作顶角平分线分成两个全等三角形"
    ],
    tips:"证明等腰三角形首选：证两角相等→等角对等边。三线合一是等腰三角形最强工具，每次遇到必想到。",
    pre:["congruent","tri_basic"], rel:["perp_bisector","angle_bisector","special_tri"],
    examYears:[2016,2018,2020,2022,2024,2025],
    totalScore:30, freq:78, diff:3,
    methods:["m07","m08","m15"],
    basicsCount:20, groupCount:3, finalCount:1 },

  { id:"quadrilateral",
    name:"平行四边形",
    semester:"8b",           // ⚠ 原 grade:8（8上）；2024新版移至八下第六章
    chapter:"ch_8b_6",
    domain:"geometry",
    x:445, y:520,
    fivePoints:[
      "概念：两组对边分别平行的四边形",
      "常例：对边相等、对角相等、对角线互平分",
      "特例：矩形/菱形/正方形是特殊平行四边形",
      "反例：对角线相等不一定是矩形（等腰梯形也是）",
      "考察：5种判定+面积公式"
    ],
    keys:[
      "平行四边形5种判定",
      "对边相等、对角相等、对角线互平分",
      "三角形中位线定理（连中点平行且等于第三边一半）",
      "多边形内角和：(n-2)×180°",
      "外角和恒为360°"
    ],
    tips:"菱形面积=d₁×d₂÷2（对角线之积除以2）。中位线定理与相似三角形深度结合，常考大题。",
    pre:["congruent","parallel_lines","isosceles"], rel:["similar","coords","special_quad"],
    examYears:[2017,2018,2019,2020,2022,2024],
    totalScore:36, freq:80, diff:4,
    methods:["m15","m04","m08","m07"],
    basicsCount:22, groupCount:3, finalCount:1 },

  { id:"similar",
    name:"相似三角形",
    semester:"8b",           // ⚠ 原 grade:9；2024新版在八下第四章，修正为8b
    chapter:"ch_8b_4",
    domain:"geometry",
    x:620, y:520,
    fivePoints:[
      "概念：形状相同，大小成比例",
      "常例：AA判定（两角相等）",
      "特例：全等是相似比为1的特例",
      "反例：面积比=相似比，错！应是平方",
      "考察：综合大题，平行线截割定理"
    ],
    keys:[
      "AA判定（两角对应相等即可）",
      "SAS/SSS判定",
      "相似比k→线段比k，面积比k²",
      "平行截割：AD/AB=AE/AC=DE/BC",
      "射影定理：CD²=AD×BD（直角三角形）"
    ],
    tips:"面积比=相似比²，这是送分点也是失分点！平行线截三角形产生相似，三比一定相等。",
    pre:["congruent","coords"], rel:["quadrilateral","trig","circle"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:110, freq:91, diff:4,
    methods:["m04","m15","m18","m07"],
    basicsCount:28, groupCount:4, finalCount:2 },

  // ── transform 拆分为4个节点（原节点已移除）────────────
  // 原 examYears:[2018,2020,2021,2023] basicsCount:18 groupCount:2
  // 按方案C分配：rotation最高频，其余按中考考频估算

  { id:"symmetry_axis",
    name:"轴对称",
    semester:"7b",           // 七下第五章（生活中的轴对称）
    chapter:"ch_7b_5",
    domain:"geometry",
    x:380, y:650,
    fivePoints:[
      "概念：沿一条直线折叠后两部分完全重合",
      "常例：等腰三角形关于顶角平分线对称",
      "特例：线段的垂直平分线是该线段的对称轴",
      "反例：平行四边形不是轴对称图形（菱形才是）",
      "考察：找对称轴、作对称图形、坐标变换"
    ],
    keys:[
      "轴对称的定义：对称轴是对称点连线的垂直平分线",
      "关于x轴对称：(x,y)→(x,-y)",
      "关于y轴对称：(x,y)→(-x,y)",
      "关于y=x对称：(x,y)→(y,x)",
      "常见轴对称图形：等腰三角形、矩形、菱形、正多边形、圆"
    ],
    tips:"作轴对称图形：对称点连线垂直于对称轴，且被对称轴平分。坐标轴对称只改变一个坐标的符号，y=x对称则互换坐标。",
    pre:["lines_angles","congruent"], rel:["translation","central_sym","quadrilateral"],
    examYears:[2018,2021],
    totalScore:6, freq:55, diff:2,
    methods:["m16","m18"],
    basicsCount:5, groupCount:0, finalCount:0 },

  { id:"translation",
    name:"图形平移",
    semester:"8b",           // 八下第三章
    chapter:"ch_8b_3",
    domain:"geometry",
    x:445, y:650,
    fivePoints:[
      "概念：沿某方向移动一定距离，形状大小不变",
      "常例：△ABC向右平移3个单位，各顶点x坐标+3",
      "特例：平移后对应线段平行且相等",
      "反例：平移改变位置，不改变形状、大小、方向",
      "考察：坐标变化规律、平移与面积结合"
    ],
    keys:[
      "平移规则：向右+a，向左-a，向上+b，向下-b",
      "坐标变换：(x,y)→(x+a, y+b)",
      "平移后：对应点连线平行且相等",
      "平移不改变图形的形状、大小、方向",
      "与函数结合：y=f(x)→y=f(x-a)+b（右移a上移b）"
    ],
    tips:"函数图像平移口诀：左加右减（x里面），上加下减（x外面）。与几何平移方向相同，但要注意是对x还是对y操作。",
    pre:["coords","congruent"], rel:["rotation","symmetry_axis","linear_fn"],
    examYears:[2020,2023],
    totalScore:6, freq:50, diff:2,
    methods:["m16","m18"],
    basicsCount:4, groupCount:1, finalCount:0 },

  { id:"rotation",
    name:"图形旋转",
    semester:"8b",           // 八下第三章
    chapter:"ch_8b_3",
    domain:"geometry",
    x:510, y:650,
    fivePoints:[
      "概念：绕定点旋转一定角度，形状大小不变",
      "常例：△AOB绕O旋转90°得△A'OB'",
      "特例：旋转中心是唯一不动的点",
      "反例：旋转后对应线段不平行（与平移的关键区别）",
      "考察：压轴大题，与坐标系、全等、相似综合"
    ],
    keys:[
      "旋转三要素：旋转中心、旋转角、旋转方向",
      "旋转性质：对应点到旋转中心距离相等，夹角=旋转角",
      "逆时针90°：(x,y)→(-y,x)",
      "顺时针90°：(x,y)→(y,-x)",
      "旋转后：OA=OA'，∠AOA'=旋转角"
    ],
    tips:"旋转压轴题解题三步：①找旋转中心（通常是题目已知点）②证对应边相等、夹角相等（即旋转角）③利用全等或相似得到结论。",
    pre:["coords","congruent"], rel:["central_sym","translation","similar"],
    examYears:[2018,2020,2021,2023],
    totalScore:20, freq:72, diff:4,
    methods:["m16","m03","m18","m07"],
    basicsCount:7, groupCount:1, finalCount:0 },

  { id:"central_sym",
    name:"中心对称",
    semester:"8b",           // 八下第三章
    chapter:"ch_8b_3",
    domain:"geometry",
    x:575, y:650,
    fivePoints:[
      "概念：绕中心点旋转180°后与原图重合",
      "常例：平行四边形是中心对称图形，对称中心是对角线交点",
      "特例：中心对称是旋转角=180°的特殊旋转",
      "反例：等腰三角形是轴对称图形，但不是中心对称图形",
      "考察：判断图形类型、对称点坐标计算"
    ],
    keys:[
      "中心对称：绕中心点旋转180°重合",
      "对称点坐标：关于原点对称(x,y)→(-x,-y)",
      "关于点(a,b)对称：(x,y)→(2a-x, 2b-y)",
      "中心对称图形：平行四边形、正偶数边形、圆",
      "与轴对称区分：轴对称折叠重合，中心对称旋转重合"
    ],
    tips:"关于点(a,b)对称的坐标公式：新坐标=(2a-x, 2b-y)。记忆方法：中点坐标等于(a,b)，反推另一点。",
    pre:["coords","rotation"], rel:["symmetry_axis","quadrilateral"],
    examYears:[2020,2021],
    totalScore:6, freq:48, diff:3,
    methods:["m16","m13"],
    basicsCount:2, groupCount:0, finalCount:0 },

  // ══════════════════════════════════════════════
  // 图形与几何 · 九年级下 (9b)
  // ══════════════════════════════════════════════

  { id:"trig",
    name:"三角函数",
    semester:"9b",           // 原 grade:9 ✓ 不变（九下第一章）
    chapter:"ch_9b_1",
    domain:"geometry",
    x:620, y:650,
    fivePoints:[
      "概念：锐角的三角比",
      "常例：sin30°=1/2",
      "特例：sin²A+cos²A=1（勾股恒等式）",
      "反例：tanA=sinA÷cosA（不是相加）",
      "考察：应用题+特殊角"
    ],
    keys:[
      "sinA=对/斜，cosA=邻/斜，tanA=对/邻",
      "30°特殊值：sin=1/2，cos=√3/2，tan=√3/3",
      "45°：sin=cos=√2/2，tan=1",
      "60°：sin=√3/2，cos=1/2，tan=√3",
      "仰角俯角：从水平线量起的角度"
    ],
    tips:"SOH-CAH-TOA口诀背特殊角！仰角是从水平向上量，俯角是向下量，必须画示意图。",
    pre:["pythagorean","similar"], rel:["circle","trig_app"],
    examYears:[2017,2019,2021,2023,2024,2025],
    totalScore:30, freq:78, diff:4,
    methods:["m16","m18","m03"],
    basicsCount:20, groupCount:2, finalCount:1 },

  // ── circle 拆分为4个节点（原节点已移除）─────────────
  // 原 examYears:[2015~2025] basicsCount:25 groupCount:4 finalCount:3
  // 方案C分配：circle_angle最高频，circle_tangent次之

  { id:"circle_basic",
    name:"圆的基本概念",
    semester:"9b",
    chapter:"ch_9b_3",
    domain:"geometry",
    x:700, y:520,
    fivePoints:[
      "概念：平面上到定点距离等于定长的点的集合",
      "常例：圆心O，半径r，直径d=2r",
      "特例：弦是两端点都在圆上的线段，直径是最长的弦",
      "反例：弧是圆的一部分，不是线段",
      "考察：圆的基本元素识别、弦心距、垂径定理"
    ],
    keys:[
      "圆的基本元素：圆心、半径、直径、弦、弧、圆心角",
      "弦心距：圆心到弦的距离（垂线段长）",
      "垂径定理：垂直于弦的直径平分弦及其弧",
      "圆的对称性：关于任意直径对称",
      "等弦与等弧：同圆中等弦对等弧，等弧对等弦"
    ],
    tips:"垂径定理是圆中最常用的基础工具：直径⊥弦 → 平分弦 + 平分两段弧。证明时优先连半径、连圆心到弦的垂线。",
    pre:["pythagorean","congruent"], rel:["circle_angle","circle_line","circle_tangent","arc_area"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:80, diff:3,
    methods:["m15","m03"],
    basicsCount:6, groupCount:0, finalCount:0 },

  { id:"circle_angle",
    name:"圆心角与圆周角",
    semester:"9b",
    chapter:"ch_9b_3",
    domain:"geometry",
    x:775, y:520,
    fivePoints:[
      "概念：圆周角是顶点在圆上、两边与圆相交的角",
      "常例：圆心角∠AOB=60°，则圆周角∠ACB=30°",
      "特例：直径所对的圆周角=90°（最常考！）",
      "反例：同弧所对圆周角相等，但不同弧的圆周角不等",
      "考察：压轴大题核心，每年必出"
    ],
    keys:[
      "圆周角定理：同弧圆周角=圆心角的一半",
      "推论：同弧（等弧）所对圆周角相等",
      "直径所对圆周角=90°（直角的充要条件）",
      "圆内接四边形：对角互补（∠A+∠C=180°）",
      "四点共圆：圆周角相等可证四点共圆"
    ],
    tips:"直径对圆周角=90°是双向的：①已知直径→圆周角=90°；②已知圆周角=90°→对边是直径。这个双向推导每年必考，要熟练掌握。",
    pre:["circle_basic","congruent"], rel:["circle_tangent","circle_line","trig"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:44, freq:91, diff:4,
    methods:["m07","m08","m15","m03"],
    basicsCount:10, groupCount:2, finalCount:1 },

  { id:"circle_tangent",
    name:"切线定理",
    semester:"9b",
    chapter:"ch_9b_3",
    domain:"geometry",
    x:850, y:520,
    fivePoints:[
      "概念：与圆只有一个公共点的直线叫切线",
      "常例：PA、PB是⊙O的切线，则PA=PB",
      "特例：切线与半径垂直（切点处）",
      "反例：过圆外一点可作两条切线，不是无数条",
      "考察：切线长定理、证明切线、弦切角"
    ],
    keys:[
      "切线判定：直线⊥半径且过端点 → 是切线",
      "切线性质：切线⊥过切点的半径",
      "切线长定理：圆外一点到两切点距离相等PA=PB",
      "弦切角=所对弧的圆周角",
      "∠OPA=∠OPB（切线长相等→OP平分∠APB）"
    ],
    tips:"证明切线两步走：①找到切点②证明该点处半径⊥直线。切线长定理常与勾股定理结合：PA²=PO²-r²（PA是切线长）。",
    pre:["circle_basic","pythagorean"], rel:["circle_angle","circle_line"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:33, freq:85, diff:4,
    methods:["m07","m03","m15","m04"],
    basicsCount:6, groupCount:1, finalCount:1 },

  { id:"arc_area",
    name:"弧长与扇形面积",
    semester:"9b",
    chapter:"ch_9b_3",
    domain:"geometry",
    x:925, y:520,
    fivePoints:[
      "概念：弧长和扇形面积与圆心角成正比",
      "常例：圆心角60°，半径r，弧长=πr/3",
      "特例：圆锥侧面展开是扇形",
      "反例：弧长不是弦长，弧长用圆心角算，弦长用三角函数",
      "考察：弧长公式、扇形面积、圆锥侧面积"
    ],
    keys:[
      "弧长公式：l = nπr/180（n为圆心角度数）",
      "扇形面积：S = nπr²/360 = lr/2",
      "圆的面积：S=πr²；周长：C=2πr",
      "圆锥侧面积：S侧=πrl（l为母线长）",
      "圆锥侧面展开图是扇形：弧长=底面周长=2πr"
    ],
    tips:"扇形面积= lr/2（弧长×半径÷2）比用角度公式更快！圆锥侧面展开：母线=扇形半径，底面周长=扇形弧长，用这两个等量关系列方程。",
    pre:["circle_basic"], rel:["trig","solid_vol"],
    examYears:[2016,2019,2020,2022,2023,2024,2025],
    totalScore:18, freq:72, diff:3,
    methods:["m20","m04","m16"],
    basicsCount:3, groupCount:1, finalCount:1 },

  // ══════════════════════════════════════════════
  // 统计与概率 · 八年级上 (8a)
  // ══════════════════════════════════════════════

  { id:"stats",
    name:"数据分析",
    semester:"8a",           // ⚠ 原 grade:8；2024新版数据分析在八上第六章，修正为8a
    chapter:"ch_8a_6",
    domain:"stats",
    x:340, y:810,
    fivePoints:[
      "概念：收集、整理、分析数据",
      "常例：平均数=(所有数据之和)÷n",
      "特例：加权平均数（权重不同）",
      "反例：众数可能有多个，中位数唯一",
      "考察：四大指标+直方图"
    ],
    keys:[
      "均值：Σxᵢ/n（加权平均注意权重）",
      "中位数：排序后取中（偶数取均值）",
      "众数：出现次数最多的数",
      "方差：s²=Σ(xᵢ-x̄)²/n（越小越稳定）",
      "频率分布直方图（面积=频率）"
    ],
    tips:"平移不改变方差！数据同乘k，方差变k²倍。方差衡量数据稳定性，是比较两组数据的关键。",
    pre:["rational"], rel:["prob","mean_median","variance"],
    examYears:[2015,2017,2019,2020,2021,2022,2023,2024],
    totalScore:24, freq:80, diff:2,
    methods:["m17","m09","m13"],
    basicsCount:20, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 统计与概率 · 九年级上 (9a)
  // ══════════════════════════════════════════════

  { id:"prob",
    name:"概率",
    semester:"9a",           // ⚠ 原 grade:9；精确到9a（九上第六章频率与概率）
    chapter:"ch_9a_6",
    domain:"stats",
    x:560, y:810,
    fivePoints:[
      "概念：随机事件发生的可能性大小",
      "常例：掷硬币P(正面)=1/2",
      "特例：必然事件P=1，不可能事件P=0",
      "反例：0<P≤1，P不会超过1",
      "考察：古典概型+列举法+互斥事件"
    ],
    keys:[
      "古典概型：P=m/n（等可能）",
      "树状图/表格列举法",
      "互斥事件：P(A+B)=P(A)+P(B)",
      "对立事件：P(A)+P(Ā)=1",
      "频率是概率的近似"
    ],
    tips:"列举必须系统：先画树状图，每条路径是一种可能。互斥才能直接相加！",
    pre:["stats","rational"], rel:["stats"],
    examYears:[2016,2018,2019,2020,2021,2022,2024],
    totalScore:21, freq:78, diff:3,
    methods:["m17","m09","m19"],
    basicsCount:18, groupCount:2, finalCount:0 },


  { id:"lines_angles",
    name:"线段与角",
    semester:"7a",
    chapter:"ch_7a_4",
    domain:"geometry",
    x:90, y:400,
    fivePoints:[
      "概念：点、线、面是几何的基本元素",
      "常例：线段AB=5cm，∠AOB=60°",
      "特例：射线只有一个端点，可无限延伸",
      "反例：直线没有端点，不能度量长度",
      "考察：线段中点、角平分线、度分秒换算"
    ],
    keys:[
      "线段、射线、直线的区别（端点个数）",
      "线段的中点：AM=MB=AB/2",
      "角的表示：∠AOB、∠α、∠1",
      "度分秒换算：1°=60'，1'=60\"",
      "角的平分线：把角分成相等的两份"
    ],
    tips:"线段中点和角平分线是几何题中最常用的'等量关系'来源，遇到证明题优先找这两个条件。",
    pre:[], rel:["parallel_perp","angle_relations","tri_basic"],
    examYears:[2015,2017,2018,2020,2022,2024],
    totalScore:12, freq:60, diff:1,
    methods:["m08","m20"],
    basicsCount:15, groupCount:1, finalCount:0 },

  { id:"parallel_perp",
    name:"平行与垂直",
    semester:"7a",
    chapter:"ch_7a_4",
    domain:"geometry",
    x:200, y:400,
    fivePoints:[
      "概念：同一平面内两直线的位置关系",
      "常例：a∥b，c⊥d",
      "特例：过直线外一点有且只有一条平行线",
      "反例：两直线不相交不一定平行（可能异面，初中不涉及）",
      "考察：平行公理、垂线段最短、点到直线距离"
    ],
    keys:[
      "平行公理：过点P有且只有一条直线平行于l",
      "垂线的画法与垂足",
      "点到直线的距离：垂线段的长度",
      "平行线间的距离处处相等",
      "两直线平行的符号表示：a∥b"
    ],
    tips:"'点到直线的距离'=垂线段长度，不是斜线段长度。这是最常见的概念混淆点。",
    pre:["lines_angles"], rel:["angle_relations","parallel_lines"],
    examYears:[2016,2018,2019,2021,2023],
    totalScore:9, freq:55, diff:1,
    methods:["m08","m13"],
    basicsCount:12, groupCount:1, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 几何基础 · 七年级下 (7b)
  // ══════════════════════════════════════════════

  { id:"angle_relations",
    name:"余角补角对顶角",
    semester:"7b",
    chapter:"ch_7b_2",
    domain:"geometry",
    x:90, y:460,
    fivePoints:[
      "概念：特殊角度关系的三个定理",
      "常例：∠A+∠B=90°→互余；∠1=∠2（对顶角）",
      "特例：同角的余角相等、同角的补角相等",
      "反例：对顶角相等，但相等的角不一定是对顶角",
      "考察：角度计算、填空选择题高频考点"
    ],
    keys:[
      "余角：两角之和=90°，互为余角",
      "补角：两角之和=180°，互为补角",
      "同角（等角）的余角相等",
      "同角（等角）的补角相等",
      "对顶角：两直线相交，对顶角相等"
    ],
    tips:"解题套路：看到两角之和=90°立刻想余角相等；=180°想补角相等；两线相交想对顶角。三句话解决90%的角度计算题。",
    pre:["lines_angles","parallel_perp"], rel:["parallel_lines","tri_basic"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:88, diff:1,
    methods:["m08","m13","m20"],
    basicsCount:18, groupCount:2, finalCount:0 },

  { id:"parallel_lines",
    name:"平行线性质与判定",
    semester:"7b",
    chapter:"ch_7b_2",
    domain:"geometry",
    x:200, y:460,
    fivePoints:[
      "概念：平行线与截线形成的角的关系",
      "常例：a∥b，同位角相等、内错角相等、同旁内角互补",
      "特例：判定定理与性质定理方向相反",
      "反例：同旁内角相等不能判定平行（应是互补）",
      "考察：几何证明的核心工具，压轴题必用"
    ],
    keys:[
      "三种角：同位角、内错角、同旁内角的识别",
      "性质定理：平行→同位角相等/内错角相等/同旁内角互补",
      "判定定理：同位角相等/内错角相等/同旁内角互补→平行",
      "推论：平行于同一直线的两直线互相平行",
      "三角形内角和定理的证明（用平行线）"
    ],
    tips:"性质和判定方向相反：性质是'已知平行求角'，判定是'已知角证平行'。做题前先判断题目问的是哪个方向！",
    pre:["angle_relations","parallel_perp"], rel:["tri_basic","congruent","proof_logic","quadrilateral"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:33, freq:92, diff:2,
    methods:["m07","m08","m15"],
    basicsCount:22, groupCount:3, finalCount:1 },

  // ══════════════════════════════════════════════
  // 新增 · 三角形证明体系 · 八年级下 (8b)
  // ══════════════════════════════════════════════

  { id:"perp_bisector",
    name:"线段垂直平分线",
    semester:"8b",
    chapter:"ch_8b_1",
    domain:"geometry",
    x:310, y:580,
    fivePoints:[
      "概念：垂直且平分一条线段的直线",
      "常例：△ABC中，BC的垂直平分线过A，则AB=AC",
      "特例：三角形三条边的垂直平分线交于外心",
      "反例：垂直平分线上的点到两端点等距，反之亦然（双向）",
      "考察：证明两线段相等、求外心、与等腰三角形综合"
    ],
    keys:[
      "性质定理：垂直平分线上的点到线段两端点距离相等",
      "逆定理：到线段两端点距离相等的点在垂直平分线上",
      "三角形外心：三边垂直平分线的交点，到三顶点等距",
      "作法：以两端点为圆心作弧，交点连线即垂直平分线",
      "常用于证明：PA=PB ↔ P在AB的垂直平分线上"
    ],
    tips:"遇到'证明两条线段相等'，第一反应：这两条线段是不是某条垂直平分线上的点到两端点的距离？是的话直接用定理，一步到位。",
    pre:["isosceles","congruent"], rel:["angle_bisector","circle","quadrilateral"],
    examYears:[2016,2018,2019,2021,2022,2023,2024,2025],
    totalScore:24, freq:72, diff:3,
    methods:["m07","m08","m15","m03"],
    basicsCount:14, groupCount:2, finalCount:1 },

  { id:"angle_bisector",
    name:"角平分线定理",
    semester:"8b",
    chapter:"ch_8b_1",
    domain:"geometry",
    x:420, y:580,
    fivePoints:[
      "概念：角平分线上的点到角两边距离相等",
      "常例：∠BAC的平分线上点P，则P到AB、AC距离相等",
      "特例：三角形三条角平分线交于内心",
      "反例：到角两边等距的点在角平分线上（逆定理同样成立）",
      "考察：证明点在角平分线上、求内心、与全等综合"
    ],
    keys:[
      "性质定理：角平分线上的点到角两边距离相等",
      "逆定理：到角两边距离相等的点在角平分线上",
      "三角形内心：三条角平分线的交点，到三边等距",
      "内心到三边的距离等于内切圆半径",
      "常用于证明：PA=PB（P在∠的平分线上，PA⊥一边，PB⊥另一边）"
    ],
    tips:"内心与外心区分：内心=角平分线交点=到三边等距；外心=垂直平分线交点=到三顶点等距。考试常考'判断哪个是内心/外心'。",
    pre:["isosceles","congruent"], rel:["perp_bisector","circle","tri_basic"],
    examYears:[2017,2019,2020,2021,2022,2023,2024,2025],
    totalScore:24, freq:70, diff:3,
    methods:["m07","m08","m15","m03"],
    basicsCount:13, groupCount:2, finalCount:1 },

  // ══════════════════════════════════════════════
  // 新增 · 证明体系 · 八年级上 (8a)
  // ══════════════════════════════════════════════

  { id:"proof_logic",
    name:"命题与证明",
    semester:"8a",
    chapter:"ch_8a_7",
    domain:"geometry",
    x:90, y:580,
    fivePoints:[
      "概念：命题是判断一件事情的语句",
      "常例：'两直线平行，同位角相等'是真命题",
      "特例：假命题只需一个反例即可推翻",
      "反例：'对角线相等的四边形是矩形'——等腰梯形就是反例",
      "考察：判断命题真假、写逆命题、规范证明格式"
    ],
    keys:[
      "命题的构成：条件（已知）+ 结论（求证）",
      "真命题与假命题：假命题只需举一个反例",
      "逆命题：交换条件与结论（逆命题不一定是真命题）",
      "证明的基本格式：已知→求证→证明（分步骤写）",
      "定义、定理、推论的区别"
    ],
    tips:"写逆命题只是交换'条件'和'结论'，不改变真假！真命题的逆命题不一定是真的。举反例推翻假命题是常考选择题。",
    pre:["parallel_lines","congruent"], rel:["parallel_proof","isosceles","perp_bisector"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:70, diff:2,
    methods:["m08","m10","m13"],
    basicsCount:16, groupCount:1, finalCount:0 },

  { id:"parallel_proof",
    name:"平行线与三角形内角和证明",
    semester:"8a",
    chapter:"ch_8a_7",
    domain:"geometry",
    x:200, y:580,
    fivePoints:[
      "概念：用平行线证明三角形内角和=180°",
      "常例：过顶点作平行线，将三个角拼成平角",
      "特例：三角形外角=不相邻两内角之和",
      "反例：多边形内角和公式(n-2)×180°，n=3时才是180°",
      "考察：内角和定理的应用、外角定理、多边形内角和"
    ],
    keys:[
      "三角形内角和定理：∠A+∠B+∠C=180°（用平行线证明）",
      "三角形外角定理：外角=不相邻两内角之和",
      "外角推论：三角形外角大于任何一个不相邻内角",
      "多边形内角和：(n-2)×180°",
      "多边形外角和：恒为360°（与边数无关）"
    ],
    tips:"外角定理是快速算角的神器：不用列方程，直接'外角=两个不相邻内角之和'。多边形内角和公式从三角形推导：n边形可分成(n-2)个三角形。",
    pre:["proof_logic","parallel_lines","tri_basic"], rel:["congruent","quadrilateral","polygon_angle"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:80, diff:2,
    methods:["m07","m08","m03"],
    basicsCount:18, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 几何补充节点
  // ══════════════════════════════════════════════

  { id:"solid_geo",
    name:"立体图形",
    semester:"7a",
    chapter:"ch_7a_1",
    domain:"geometry",
    x:310, y:400,
    fivePoints:[
      "概念：三维空间中的几何体",
      "常例：正方体6个面、12条棱、8个顶点",
      "特例：球没有顶点和棱",
      "反例：棱柱的侧面是矩形，棱锥的侧面是三角形",
      "考察：展开图识别、截面形状、三视图"
    ],
    keys:[
      "棱柱：两底面平行且全等，侧面是矩形",
      "棱锥：一个底面，侧面是三角形，交于顶点",
      "圆柱/圆锥/球的基本特征",
      "展开图：正方体展开图有11种",
      "截面：用平面截几何体所得的平面图形"
    ],
    tips:"展开图折叠题：找相对面（正方体中相对的两面不相邻）。截面题：水平截圆锥得圆，过顶点截得等腰三角形。",
    pre:[], rel:["three_views","arc_area","solid_vol"],
    examYears:[2016,2018,2019,2021,2022,2024],
    totalScore:12, freq:62, diff:2,
    methods:["m13","m18"],
    basicsCount:14, groupCount:1, finalCount:0 },

  { id:"three_views",
    name:"三视图",
    semester:"7a",
    chapter:"ch_7a_1",
    domain:"geometry",
    x:420, y:400,
    fivePoints:[
      "概念：正视图、侧视图、俯视图",
      "常例：圆柱正视图是矩形，俯视图是圆",
      "特例：球的三视图都是等圆",
      "反例：三视图确定几何体形状，但不能确定大小（需尺寸）",
      "考察：由实物画三视图，或由三视图还原实物"
    ],
    keys:[
      "正视图：从正面看（主视图）",
      "侧视图：从左面或右面看",
      "俯视图：从上面看（最常用）",
      "三视图对应关系：正视图与侧视图等高，正视图与俯视图等宽",
      "常见几何体三视图：棱柱、棱锥、圆柱、圆锥、球"
    ],
    tips:"画三视图口诀：正左同高，正俯同宽，左俯同深。遇到不规则组合体，先分解成基本几何体再分别画。",
    pre:["solid_geo"], rel:["solid_vol"],
    examYears:[2017,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:75, diff:2,
    methods:["m13","m18"],
    basicsCount:16, groupCount:1, finalCount:0 },

  { id:"polygon_angle",
    name:"多边形内外角和",
    semester:"8b",
    chapter:"ch_8b_6",
    domain:"geometry",
    x:530, y:580,
    fivePoints:[
      "概念：多边形内角和与边数的关系",
      "常例：六边形内角和=(6-2)×180°=720°",
      "特例：任意多边形外角和恒为360°",
      "反例：正多边形每个内角=(n-2)×180°/n，不是180°/n",
      "考察：已知内角和求边数，已知一内角求边数"
    ],
    keys:[
      "n边形内角和=(n-2)×180°",
      "任意多边形外角和=360°（与边数无关）",
      "正n边形每个内角=(n-2)×180°/n",
      "正n边形每个外角=360°/n",
      "由内角和反求边数：n=(内角和/180°)+2"
    ],
    tips:"外角和恒为360°是解题神器：不管几边形，所有外角加起来都是360°。知道正多边形一个外角就能求边数：n=360°÷外角度数。",
    pre:["parallel_proof","tri_basic"], rel:["quadrilateral","similar"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:78, diff:2,
    methods:["m09","m20","m13"],
    basicsCount:16, groupCount:1, finalCount:0 },

  { id:"midline",
    name:"三角形中位线",
    semester:"8b",
    chapter:"ch_8b_6",
    domain:"geometry",
    x:640, y:580,
    fivePoints:[
      "概念：连接三角形两边中点的线段",
      "常例：DE是△ABC中位线（D、E分别是AB、AC中点），则DE∥BC，DE=BC/2",
      "特例：三角形有三条中位线，围成的小三角形面积是原三角形的1/4",
      "反例：中位线平行于第三边，不是平行于两腰",
      "考察：中位线定理证明、与平行四边形结合"
    ],
    keys:[
      "中位线定理：中位线平行于第三边且等于其一半",
      "逆定理：平行且等于第三边一半的线段是中位线",
      "三条中位线将三角形分成4个全等的小三角形",
      "梯形中位线：平行两底，长度等于两底之和的一半",
      "常与平行四边形判定结合：中点连线构成平行四边形"
    ],
    tips:"中位线定理和相似是好搭档：中位线把三角形分成相似比为1:2的两个三角形。梯形中位线=（上底+下底）/2，与三角形中位线公式要区分记忆。",
    pre:["congruent","parallel_lines"], rel:["quadrilateral","similar","polygon_angle"],
    examYears:[2016,2017,2019,2020,2021,2022,2023,2024],
    totalScore:20, freq:72, diff:3,
    methods:["m07","m08","m04"],
    basicsCount:14, groupCount:2, finalCount:0 },

  { id:"pythagorean_inv",
    name:"勾股定理逆定理",
    semester:"8a",
    chapter:"ch_8a_1",
    domain:"geometry",
    x:90, y:700,
    fivePoints:[
      "概念：满足a²+b²=c²的三角形是直角三角形",
      "常例：三边为5、12、13，因5²+12²=13²，是直角三角形",
      "特例：判断直角在最大边所对的角处",
      "反例：三边为3、4、6，3²+4²=25≠36，不是直角三角形",
      "考察：判断三角形类型（锐角/直角/钝角）"
    ],
    keys:[
      "逆定理：a²+b²=c² → 直角三角形，直角在c对面",
      "判断三角形类型：c²与a²+b²比较",
      "c²=a²+b² → 直角三角形",
      "c²<a²+b² → 锐角三角形",
      "c²>a²+b² → 钝角三角形"
    ],
    tips:"三类三角形判断口诀：最大边平方 vs 另两边平方和，等于直角，小于锐角，大于钝角。常与勾股数结合出选择题。",
    pre:["pythagorean","reals"], rel:["special_tri","congruent"],
    examYears:[2015,2017,2018,2020,2021,2023,2025],
    totalScore:12, freq:65, diff:2,
    methods:["m13","m10"],
    basicsCount:12, groupCount:1, finalCount:0 },

  { id:"right_tri_proof",
    name:"直角三角形证明",
    semester:"8b",
    chapter:"ch_8b_1",
    domain:"geometry",
    x:200, y:640,
    fivePoints:[
      "概念：直角三角形的特有性质与全等判定",
      "常例：HL定理：斜边和一直角边相等→直角三角形全等",
      "特例：直角三角形斜边上的中线等于斜边的一半",
      "反例：HL只适用于直角三角形，一般三角形不能用",
      "考察：与等腰三角形、平行四边形综合证明"
    ],
    keys:[
      "HL判定：斜边（H）和一条直角边（L）对应相等→全等",
      "直角三角形斜边中线=斜边/2（中点到三顶点等距）",
      "30°角所对直角边=斜边/2",
      "直角三角形两锐角互余：∠A+∠B=90°",
      "射影定理：直角三角形斜边上的高的平方=两射影之积"
    ],
    tips:"斜边中线定理（中线=斜边/2）是直角三角形特有的，等腰三角形和一般三角形没有这个性质。遇到直角三角形的中点，立刻联想这个定理。",
    pre:["congruent","pythagorean","isosceles"], rel:["perp_bisector","similar","trig"],
    examYears:[2016,2018,2019,2020,2022,2023,2024],
    totalScore:18, freq:68, diff:3,
    methods:["m07","m08","m03"],
    basicsCount:13, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 代数初步 · 七年级上 (7a)
  // ══════════════════════════════════════════════

  { id:"number_line",
    name:"数轴",
    semester:"7a",
    chapter:"ch_7a_2",
    domain:"algebra",
    x:90, y:100,
    fivePoints:[
      "概念：规定了原点、正方向和单位长度的直线",
      "常例：-3在原点左边3个单位，2.5在右边2.5个单位",
      "特例：数轴上的点与实数一一对应",
      "反例：数轴向两端无限延伸，没有最大或最小的数",
      "考察：有理数大小比较、两点距离、对称点"
    ],
    keys:[
      "数轴三要素：原点、正方向、单位长度",
      "数轴上点的坐标：右正左负",
      "有理数大小：数轴上右边的数大于左边的数",
      "两点间距离：|a-b|（绝对值）",
      "关于原点对称的两点：坐标互为相反数"
    ],
    tips:"比较两个负数大小：数轴上越靠右越大，所以-1>-3。两点距离永远用绝对值|a-b|，不管哪个大。",
    pre:["rational"], rel:["abs_value","coords","inequality"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:12, freq:70, diff:1,
    methods:["m13","m19"],
    basicsCount:14, groupCount:0, finalCount:0 },

  { id:"abs_value",
    name:"绝对值",
    semester:"7a",
    chapter:"ch_7a_2",
    domain:"algebra",
    x:200, y:100,
    fivePoints:[
      "概念：数轴上一个数到原点的距离",
      "常例：|-3|=3，|3|=3，|0|=0",
      "特例：|a|≥0，等号当且仅当a=0时成立",
      "反例：|-a|=|a|，不是-|a|",
      "考察：绝对值化简、含绝对值的方程和不等式"
    ],
    keys:[
      "绝对值定义：|a|=a（a≥0），|a|=-a（a<0）",
      "|a|≥0对任意实数成立",
      "绝对值的几何意义：数轴上到原点的距离",
      "|a-b|表示数轴上a、b两点间的距离",
      "去绝对值：分a≥0和a<0两种情况讨论"
    ],
    tips:"去绝对值必须分情况：|2x-1|这类题，令2x-1≥0和2x-1<0分别讨论。|a|=b（b>0）等价于a=b或a=-b，这是绝对值方程的标准解法。",
    pre:["rational","number_line"], rel:["inequality","reals"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:75, diff:2,
    methods:["m19","m14","m13"],
    basicsCount:16, groupCount:1, finalCount:0 },

  { id:"algebra_expr",
    name:"代数式",
    semester:"7a",
    chapter:"ch_7a_3",
    domain:"algebra",
    x:310, y:100,
    fivePoints:[
      "概念：用字母表示数的式子",
      "常例：3a+2b，x²-1，πr²",
      "特例：单独一个字母或数字也是代数式",
      "反例：含等号或不等号的不是代数式（那是方程或不等式）",
      "考察：列代数式、代数式求值、探索规律"
    ],
    keys:[
      "代数式的书写：数字在字母前，省略乘号",
      "代数式求值：将数值代入字母计算",
      "列代数式：将文字叙述翻译成代数式",
      "代数式的值：与字母取值有关",
      "探索规律：找通项公式（常用n表示第n项）"
    ],
    tips:"代入求值时，负数必须加括号！如a=-2，则a²=(-2)²=4，不是-4。列代数式时，'比a多3'是a+3，'a的3倍少2'是3a-2，注意顺序。",
    pre:["rational"], rel:["poly","linear_eq","fn_concept"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
    totalScore:12, freq:68, diff:1,
    methods:["m20","m09","m13"],
    basicsCount:15, groupCount:1, finalCount:0 },

  { id:"sci_notation",
    name:"科学记数法",
    semester:"7a",
    chapter:"ch_7a_6",
    domain:"algebra",
    x:420, y:100,
    fivePoints:[
      "概念：a×10ⁿ的形式，1≤|a|<10",
      "常例：3.8×10⁵=380000；4.2×10⁻³=0.0042",
      "特例：n为负数时表示小于1的小数",
      "反例：38×10⁴不是科学记数法（a=38不满足条件）",
      "考察：大数/小数互换、科学记数法大小比较"
    ],
    keys:[
      "大数转换：小数点左移，n为正整数（移动位数）",
      "小数转换：小数点右移，n为负整数",
      "n的确定：原数整数部分位数减1",
      "科学记数法比较大小：先比n，n大则数大",
      "有效数字：a中所有数字都是有效数字"
    ],
    tips:"记忆口诀：大数（绝对值≥10）指数为正，小数（绝对值<1）指数为负。n=移动小数点的位数（大数左移取正，小数右移取负）。",
    pre:["rational"], rel:["approx_num","reals"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:12, freq:72, diff:1,
    methods:["m13","m19"],
    basicsCount:14, groupCount:0, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 幂的运算 · 七年级下 (7b)
  // ══════════════════════════════════════════════

  { id:"power_rules",
    name:"幂的运算法则",
    semester:"7b",
    chapter:"ch_7b_1",
    domain:"algebra",
    x:530, y:100,
    fivePoints:[
      "概念：同底数幂、幂的乘方、积的乘方的运算规律",
      "常例：a³×a²=a⁵；(a²)³=a⁶；(ab)³=a³b³",
      "特例：a⁰=1（a≠0）；a⁻¹=1/a",
      "反例：a²×b²≠(ab)⁴，底数不同不能直接合并指数",
      "考察：化简含幂的代数式，与科学记数法结合"
    ],
    keys:[
      "同底数幂相乘：aᵐ×aⁿ=aᵐ⁺ⁿ（底数不变，指数相加）",
      "幂的乘方：(aᵐ)ⁿ=aᵐⁿ（底数不变，指数相乘）",
      "积的乘方：(ab)ⁿ=aⁿbⁿ（每个因数都要乘方）",
      "同底数幂相除：aᵐ÷aⁿ=aᵐ⁻ⁿ（a≠0）",
      "零指数与负指数：a⁰=1，a⁻ⁿ=1/aⁿ（a≠0）"
    ],
    tips:"三条法则的关键词：同底相乘→指数加；乘方→指数乘；积的乘方→分配进去。最容易混的是(a²)³=a⁶（乘）和a²×a³=a⁵（加），要靠关键词区分。",
    pre:["rational","algebra_expr","poly"], rel:["poly","factoring","sci_notation"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:75, diff:2,
    methods:["m06","m23","m13"],
    basicsCount:18, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 函数概念 · 七年级下/八年级上
  // ══════════════════════════════════════════════

  { id:"variable_intro",
    name:"变量与函数初步",
    semester:"7b",
    chapter:"ch_7b_6",
    domain:"algebra",
    x:640, y:100,
    fivePoints:[
      "概念：变量是可以取不同数值的量",
      "常例：汽车行驶时间t与路程s的关系：s=60t",
      "特例：自变量变化时，因变量随之变化",
      "反例：常量不是变量（圆周率π不是变量）",
      "考察：从表格/图像/关系式中读取变量关系"
    ],
    keys:[
      "自变量：可以自由取值的变量",
      "因变量：随自变量变化而变化的量",
      "三种表示方法：表格法、关系式法、图像法",
      "从图像读信息：增减趋势、最大最小值、特殊点",
      "实际问题中识别自变量和因变量"
    ],
    tips:"三种表示方法各有优势：表格直观但不完整，关系式精确但抽象，图像形象但读数有误差。中考常考从折线图读数据，注意横纵轴的含义和单位。",
    pre:["algebra_expr","rational"], rel:["fn_concept","linear_fn","stats"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024],
    totalScore:9, freq:58, diff:1,
    methods:["m17","m21","m09"],
    basicsCount:12, groupCount:1, finalCount:0 },

  { id:"fn_concept",
    name:"函数概念",
    semester:"8a",
    chapter:"ch_8a_4",
    domain:"algebra",
    x:750, y:100,
    fivePoints:[
      "概念：一个变量的每个值对应另一个变量唯一确定的值",
      "常例：y=2x+1，每个x对应唯一的y",
      "特例：y=±√x不是函数（一个x对应两个y）",
      "反例：x=3（竖线）不是函数，不满足唯一性",
      "考察：判断是否是函数、自变量取值范围"
    ],
    keys:[
      "函数定义：x的每个值对应y的唯一值",
      "自变量取值范围：使函数有意义的x的集合",
      "分式：分母≠0；根式：被开方数≥0",
      "函数值：将x代入解析式得到的y值",
      "竖线检验：图像上每条竖线最多交一点→是函数"
    ],
    tips:"自变量范围三类限制：①分母≠0②偶次根号下≥0③实际问题的限制（如长度>0）。多个限制同时满足取交集。这是每年必考的填空题。",
    pre:["variable_intro","linear_eq","algebra_expr"], rel:["linear_fn","inverse_fn","quad_fn"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:78, diff:2,
    methods:["m21","m19","m13"],
    basicsCount:16, groupCount:1, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 应用题专题
  // ══════════════════════════════════════════════

  { id:"eq_app",
    name:"方程应用题",
    semester:"7a",
    chapter:"ch_7a_5",
    domain:"algebra",
    x:530, y:160,
    fivePoints:[
      "概念：将实际问题转化为方程模型求解",
      "常例：行程问题、工程问题、配比问题",
      "特例：追及问题：相同时间，路程差=速度差×时间",
      "反例：设未知量要选最方便的，不一定设题目问的量",
      "考察：读题建模是核心难点，计算反而简单"
    ],
    keys:[
      "行程问题：速度×时间=路程，相遇/追及分情况",
      "工程问题：效率×时间=工作量，总量设为1",
      "浓度问题：溶质=溶液×浓度，混合前后溶质守恒",
      "利润问题：利润=售价-成本，利润率=利润/成本",
      "数字问题：两位数=10×十位+个位"
    ],
    tips:"应用题万能三步：①设未知量（写单位）②找等量关系（题目中'相等'的两个量）③列方程解答验证。等量关系是关键，常见的有：路程相等、工作量相等、总价相等。",
    pre:["linear_eq"], rel:["equations","fraction_eq_app","quad_eq_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:24, freq:85, diff:3,
    methods:["m20","m17","m19"],
    basicsCount:20, groupCount:3, finalCount:0 },

  { id:"quad_eq_app",
    name:"二次方程应用题",
    semester:"9a",
    chapter:"ch_9a_2",
    domain:"algebra",
    x:640, y:160,
    fivePoints:[
      "概念：建立一元二次方程解决实际问题",
      "常例：面积问题、利润最大化、数字问题",
      "特例：解方程后必须检验是否符合实际（舍去负数解）",
      "反例：两个解都要验证实际意义，不能直接取正数",
      "考察：建模→解方程→验证→答题"
    ],
    keys:[
      "面积问题：长×宽=面积，设边长为x",
      "增长率问题：原值×(1+r)²=新值",
      "数字问题：设连续整数为n,n+1或n-1,n,n+1",
      "几何问题：勾股定理建立方程",
      "验根：代回原题检验，舍去不合实际的解"
    ],
    tips:"增长率模型是固定套路：连续增长两次→乘(1+r)²。解出来的r如果是负数，表示下降率，要结合题意判断取舍。验根不只是验方程，还要验实际意义。",
    pre:["quad_eq","eq_app"], rel:["quad_fn_app","fraction_eq_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:24, freq:82, diff:3,
    methods:["m20","m11","m19"],
    basicsCount:18, groupCount:3, finalCount:0 },

  { id:"quad_fn_app",
    name:"二次函数应用题",
    semester:"9b",
    chapter:"ch_9b_2",
    domain:"algebra",
    x:750, y:160,
    fivePoints:[
      "概念：用二次函数模型解决最值问题",
      "常例：最大利润、最大面积、最远射程",
      "特例：顶点即最值点，需判断顶点是否在定义域内",
      "反例：定义域受限时，最值可能在端点而非顶点",
      "考察：建立函数解析式→求顶点→结合实际取值"
    ],
    keys:[
      "建模：设自变量x，建立y=ax²+bx+c",
      "顶点坐标：x=-b/2a，y=（代入求）",
      "a>0时顶点为最小值，a<0时为最大值",
      "定义域限制：顶点不在范围内时取端点最值",
      "常见模型：利润=（售价-成本）×销量，面积=长×宽"
    ],
    tips:"解题四步：①设x（通常是价格或数量）②建y=f(x)（利润/面积/距离）③求顶点x=-b/2a④判断是否在实际范围内。最大面积题常用'设一边为x，另一边用x表示'来建模。",
    pre:["quad_fn","quad_eq_app"], rel:["inverse_fn"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:30, freq:88, diff:4,
    methods:["m21","m05","m01","m19"],
    basicsCount:16, groupCount:3, finalCount:2 },

  // ══════════════════════════════════════════════
  // 新增 · 分式/不等式应用 + 二次根式 · 八年级
  // ══════════════════════════════════════════════

  { id:"fraction_eq_app",
    name:"分式方程应用题",
    semester:"8b",
    chapter:"ch_8b_5",
    domain:"algebra",
    x:310, y:160,
    fivePoints:[
      "概念：实际问题建立分式方程求解",
      "常例：工程问题（合作效率）、行程问题（速度=路程/时间）",
      "特例：分式方程必须验根，增根使分母为零",
      "反例：验根不只验方程，还要验实际意义（时间不能为负）",
      "考察：建模→去分母→解方程→验根→答题"
    ],
    keys:[
      "工程问题：1/a+1/b=1/t（各自效率之和=合作效率）",
      "行程问题：路程÷速度=时间，相遇/追及建等量关系",
      "顺逆流问题：顺流速度=船速+水速，逆流=船速-水速",
      "增根判断：将可能的增根代入分母，使分母=0则舍去",
      "验根步骤：代回原方程验证，再验实际意义"
    ],
    tips:"分式方程应用题的等量关系通常是'时间相等'或'效率相等'。工程题设完工时间为x，则效率=1/x，两人合作效率=1/a+1/b，令其等于1/总时间列方程。",
    pre:["fraction","eq_app"], rel:["quad_eq_app","inequality_app"],
    examYears:[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:20, freq:78, diff:3,
    methods:["m20","m02","m19"],
    basicsCount:16, groupCount:2, finalCount:0 },

  { id:"inequality_app",
    name:"不等式应用题",
    semester:"8b",
    chapter:"ch_8b_2",
    domain:"algebra",
    x:420, y:160,
    fivePoints:[
      "概念：用不等式或不等式组解决范围、最优化问题",
      "常例：'不超过''至少''不低于'等词对应不等号",
      "特例：不等式组的解集是各不等式解集的交集",
      "反例：'不少于a'是x≥a，不是x>a",
      "考察：关键词翻译、不等式组求整数解"
    ],
    keys:[
      "关键词：不超过/至多→≤；至少/不低于→≥",
      "不等式组：同时满足多个条件，取交集",
      "数轴表示解集：空心圆=不含端点，实心圆=含端点",
      "整数解：在解集范围内列出所有整数",
      "最优化：在约束条件下求最大/最小整数值"
    ],
    tips:"'最多买几件''至少需要多少天'这类题，解完不等式后要注意取整方向：最多取不超过解的最大整数，至少取不小于解的最小整数。方向搞反是最常见错误。",
    pre:["inequality","eq_app"], rel:["linear_fn","fraction_eq_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:80, diff:3,
    methods:["m20","m19","m14"],
    basicsCount:16, groupCount:2, finalCount:0 },

  { id:"radical",
    name:"二次根式",
    semester:"8a",
    chapter:"ch_8a_2",
    domain:"algebra",
    x:200, y:220,
    fivePoints:[
      "概念：√a（a≥0）表示a的算术平方根",
      "常例：√12=2√3（提取完全平方因子）",
      "特例：√(a²)=|a|，不是a（a可能为负）",
      "反例：√4+√9≠√13，根式不能直接相加",
      "考察：化简、混合运算、分母有理化"
    ],
    keys:[
      "化简：提取被开方数中的完全平方因子",
      "√(a²)=|a|（重点，a的符号未知时不能省略绝对值）",
      "同类根式：被开方数相同才能合并（类似合并同类项）",
      "分母有理化：√a/√b=√a·√b/b",
      "乘法：√a·√b=√(ab)（a≥0，b≥0）"
    ],
    tips:"化简二次根式三步：①分解被开方数②提出完全平方因子③化简系数。记住：√(a²b)=|a|√b，当a≥0时才能去掉绝对值写成a√b。分母有理化考试常考，分母是(√a+√b)时用平方差公式。",
    pre:["reals","power_rules"], rel:["pythagorean","quad_eq","reals"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:80, diff:3,
    methods:["m06","m14","m23"],
    basicsCount:20, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 近似数/特殊四边形/梯形 (做12)
  // ══════════════════════════════════════════════

  { id:"approx_num",
    name:"近似数与有效数字",
    semester:"7b",
    chapter:"ch_7b_3",
    domain:"algebra",
    x:750, y:160,
    fivePoints:[
      "概念：用近似值代替精确值，并标明精确程度",
      "常例：3.14是π的近似值，精确到0.01",
      "特例：有效数字从左边第一个非零数字开始计数",
      "反例：0.0230有3个有效数字（2、3、0），前面的0不算",
      "考察：四舍五入、有效数字个数、精确度判断"
    ],
    keys:[
      "四舍五入：按要求保留位数，末位后一位≥5则进1",
      "精确到哪位：看保留的最后一位",
      "有效数字：从第一个非零数字到最后一个数字",
      "科学记数法中有效数字：a中所有数字都算",
      "0.00450有3个有效数字：4、5、0"
    ],
    tips:"有效数字最容易错的是末尾的0：1.20有3个有效数字（末尾0有效），0.0120也是3个（前面的0不算）。用科学记数法表示时，a部分的每个数字都是有效数字。",
    pre:["rational","sci_notation"], rel:["reals"],
    examYears:[2016,2018,2019,2021,2022,2024],
    totalScore:9, freq:55, diff:1,
    methods:["m13"],
    basicsCount:12, groupCount:0, finalCount:0 },

  { id:"special_quad",
    name:"特殊平行四边形",
    semester:"9a",
    chapter:"ch_9a_1",
    domain:"geometry",
    x:530, y:580,
    fivePoints:[
      "概念：菱形、矩形、正方形的性质与判定",
      "常例：菱形对角线互相垂直平分，矩形对角线相等",
      "特例：正方形=矩形+菱形，同时具备两者全部性质",
      "反例：对角线相等的平行四边形是矩形，不一定是正方形",
      "考察：性质与判定双向，常与坐标系、勾股定理综合"
    ],
    keys:[
      "菱形：四边相等；对角线互相垂直平分；面积=d₁d₂/2",
      "矩形：四角直角；对角线相等且互相平分",
      "正方形：菱形+矩形所有性质",
      "菱形判定：对角线互相垂直平分的平行四边形",
      "矩形判定：有一个直角的平行四边形"
    ],
    tips:"菱形面积=对角线乘积÷2，这个公式比底×高更常用（因为对角线容易从题目读出）。正方形的对角线=边长×√2，等腰直角三角形的斜边=直角边×√2，两个公式同根同源。",
    pre:["quadrilateral","isosceles"], rel:["similar","circle_basic","coords"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:24, freq:78, diff:3,
    methods:["m07","m08","m15","m04"],
    basicsCount:16, groupCount:2, finalCount:1 },

  { id:"trapezoid",
    name:"梯形",
    semester:"8b",
    chapter:"ch_8b_6",
    domain:"geometry",
    x:640, y:640,
    fivePoints:[
      "概念：一组对边平行、另一组不平行的四边形",
      "常例：等腰梯形两腰相等，两底角相等",
      "特例：直角梯形有一个直角",
      "反例：平行四边形不是梯形（两组对边都平行）",
      "考察：等腰梯形性质、梯形面积、辅助线作法"
    ],
    keys:[
      "梯形面积：(上底+下底)×高÷2",
      "等腰梯形：两腰相等，两底角相等，对角线相等",
      "等腰梯形的对称轴：两底中点连线",
      "梯形中位线：平行两底，长=(上底+下底)/2",
      "辅助线：过腰端点作高，或平移一条腰"
    ],
    tips:"梯形作辅助线两招：①过上底端点作高（形成矩形+三角形）②平移一条腰（形成平行四边形+三角形）。等腰梯形遇到难题，补成矩形或平行四边形往往能一步解决。",
    pre:["quadrilateral","parallel_lines"], rel:["midline","similar","special_quad"],
    examYears:[2016,2018,2019,2020,2021,2022,2023,2024],
    totalScore:18, freq:68, diff:3,
    methods:["m15","m04","m03"],
    basicsCount:14, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 统计领域扩充
  // ══════════════════════════════════════════════

  { id:"stat_chart",
    name:"统计图",
    semester:"7a",
    chapter:"ch_7a_6",
    domain:"stats",
    x:200, y:810,
    fivePoints:[
      "概念：用图形直观表示数据的工具",
      "常例：条形图比较大小，折线图看趋势，扇形图看比例",
      "特例：频率分布直方图中，纵轴是频率/组距",
      "反例：扇形图各部分百分比之和必须=100%",
      "考察：读图取数据、判断图型选择、计算缺失数据"
    ],
    keys:[
      "条形图：适合比较各类别数量大小",
      "折线图：适合反映数据随时间的变化趋势",
      "扇形图：适合反映各部分占总体的比例",
      "频率分布直方图：纵轴=频率/组距，每格面积=频率",
      "选图原则：比大小用条形，看趋势用折线，看占比用扇形"
    ],
    tips:"频率分布直方图最容易错：纵轴不是频率，而是频率/组距。每个矩形的面积才是频率，所有矩形面积之和=1。读数时：频率=纵轴值×组距。",
    pre:["rational"], rel:["mean_median","frequency","stats","possibility"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:12, freq:72, diff:1,
    methods:["m17","m09","m13"],
    basicsCount:14, groupCount:1, finalCount:0 },

  { id:"mean_median",
    name:"均值中位数众数",
    semester:"8a",
    chapter:"ch_8a_6",
    domain:"stats",
    x:340, y:870,
    fivePoints:[
      "概念：描述数据集中趋势的三个统计量",
      "常例：数据1,2,3,4,10：均值=4，中位数=3，众数=无",
      "特例：偶数个数据的中位数取中间两数的平均值",
      "反例：均值受极端值影响大，中位数不受影响",
      "考察：计算三量、比较优劣、加权平均数"
    ],
    keys:[
      "均值：所有数据之和÷数据个数",
      "加权平均数：Σ(数据×权重)÷Σ权重",
      "中位数：排序后最中间的数（奇数个取中间，偶数个取两中间的均值）",
      "众数：出现次数最多的数（可以有多个或没有）",
      "三者关系：极端值存在时，中位数比均值更能代表整体水平"
    ],
    tips:"加权平均数是高频考点：成绩×学分/总学分。中位数排序后找位置：n个数据，中位数在第(n+1)/2个（奇数）或第n/2和n/2+1个的均值（偶数）。",
    pre:["rational","stat_chart"], rel:["variance","stats","prob"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:82, diff:2,
    methods:["m09","m17","m13"],
    basicsCount:18, groupCount:2, finalCount:0 },

  { id:"variance",
    name:"方差与数据波动",
    semester:"8b",
    chapter:"ch_8b_5",
    domain:"stats",
    x:460, y:870,
    fivePoints:[
      "概念：衡量数据离散程度（稳定性）的统计量",
      "常例：两组数据均值相同，方差小的更稳定",
      "特例：方差=0时所有数据相同",
      "反例：方差越大表示数据越分散，不是越好",
      "考察：计算方差、比较稳定性、标准差=√方差"
    ],
    keys:[
      "方差公式：s²=[(x₁-x̄)²+(x₂-x̄)²+…+(xn-x̄)²]/n",
      "计算步骤：①求均值x̄ ②求每个数与均值之差 ③平方 ④求平均",
      "标准差：s=√s²（与原数据单位相同）",
      "数据平移不改变方差：每个数加同一常数，方差不变",
      "数据同乘k，方差变为k²倍"
    ],
    tips:"方差计算口诀：求均值→求偏差→偏差平方→求平均。简便算法：先将所有数据减去一个常数（通常是均值附近的整数）再算，结果不变，计算更简单。",
    pre:["mean_median"], rel:["stats","frequency"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:75, diff:3,
    methods:["m09","m17","m23"],
    basicsCount:14, groupCount:2, finalCount:0 },

  { id:"frequency",
    name:"频数与频率",
    semester:"8b",
    chapter:"ch_8b_5",
    domain:"stats",
    x:580, y:870,
    fivePoints:[
      "概念：频数是出现次数，频率是出现次数与总数之比",
      "常例：100次实验中出现35次，频数=35，频率=0.35",
      "特例：所有组的频率之和=1",
      "反例：频率不是概率，但大量实验后频率接近概率",
      "考察：频率分布直方图读写、样本估总体"
    ],
    keys:[
      "频数：某数据出现的次数",
      "频率=频数/总数，取值在[0,1]",
      "频率分布直方图：横轴分组，纵轴频率/组距",
      "各组频率之和=1，各组频数之和=总数",
      "用样本频率估计总体概率（大数定律基础）"
    ],
    tips:"频率直方图中读某组频率：纵轴值（频率/组距）×组距=该组频率。所有矩形面积和=1，可用来验算或求缺失数据。",
    pre:["stat_chart","mean_median"], rel:["variance","prob","data_collect"],
    examYears:[2016,2017,2019,2020,2021,2022,2023,2024,2025],
    totalScore:12, freq:70, diff:2,
    methods:["m09","m17","m13"],
    basicsCount:12, groupCount:1, finalCount:0 },

  { id:"data_collect",
    name:"数据收集与整理",
    semester:"8b",
    chapter:"ch_8b_5",
    domain:"stats",
    x:700, y:870,
    fivePoints:[
      "概念：统计调查的方法与数据整理的过程",
      "常例：全面调查（普查）vs 抽样调查（样本推总体）",
      "特例：破坏性检验必须用抽样调查",
      "反例：样本必须有代表性，不能只调查特定群体",
      "考察：判断调查方式、样本代表性评价、用样本估总体"
    ],
    keys:[
      "普查：对全体对象调查，准确但成本高",
      "抽样调查：从总体中取样本，以样本估总体",
      "随机抽样：每个个体被抽到的概率相等",
      "样本容量：样本中个体的数量",
      "用样本估总体：频率/统计量→总体概率/参数"
    ],
    tips:"判断用普查还是抽样：数量少且重要（如航天员选拔）→普查；数量大或有破坏性（如灯泡寿命）→抽样。样本要有代表性，不能有系统偏差。",
    pre:["stat_chart","rational"], rel:["frequency","prob","stats"],
    examYears:[2016,2018,2019,2020,2021,2022,2023,2024],
    totalScore:9, freq:62, diff:1,
    methods:["m09","m17","m13"],
    basicsCount:12, groupCount:1, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 概率子节点
  // ══════════════════════════════════════════════

  { id:"possibility",
    name:"可能性初步",
    semester:"7a",
    chapter:"ch_7a_7",
    domain:"stats",
    x:820, y:810,
    fivePoints:[
      "概念：事件发生的不确定性与可能性大小",
      "常例：抛硬币正面朝上是不确定事件",
      "特例：必然事件（一定发生）和不可能事件（一定不发生）",
      "反例：可能性大不代表一定发生，只是发生的机会更多",
      "考察：判断事件类型、比较可能性大小"
    ],
    keys:[
      "确定事件：必然事件（P=1）和不可能事件（P=0）",
      "随机事件：可能发生也可能不发生（0<P<1）",
      "可能性大小：等可能情况下，有利结果越多可能性越大",
      "生活中的随机现象：天气、抽签、骰子",
      "可能性比较：列举所有等可能结果，计数比较"
    ],
    tips:"初步阶段不需要计算概率公式，重点是理解：必然/不可能/随机的区别，以及'等可能'前提下用有利结果数/总结果数来比较大小。",
    pre:["rational"], rel:["prob","stat_chart"],
    examYears:[2015,2016,2017,2018,2019,2020],
    totalScore:6, freq:50, diff:1,
    methods:["m09","m13"],
    basicsCount:10, groupCount:0, finalCount:0 },

  { id:"prob_method",
    name:"概率计算方法",
    semester:"9a",
    chapter:"ch_9a_6",
    domain:"stats",
    x:560, y:930,
    fivePoints:[
      "概念：系统列举所有等可能结果计算概率",
      "常例：掷两颗骰子，用表格列出36种等可能结果",
      "特例：树状图适合多步骤实验，表格适合两个独立实验",
      "反例：列举必须不重不漏，随意列举会导致概率错误",
      "考察：树状图/表格列举、互斥事件、对立事件"
    ],
    keys:[
      "古典概型：P(A)=有利结果数/总结果数（等可能前提）",
      "树状图：多步骤实验逐层展开，每条路径是一个结果",
      "表格法：两个独立实验所有组合列成表格",
      "互斥事件：不能同时发生，P(A或B)=P(A)+P(B)",
      "对立事件：P(A)+P(Ā)=1，常用来间接求概率"
    ],
    tips:"对立事件是解题捷径：求'至少有一个'的概率，用1减去'一个都没有'的概率，往往比直接算简单得多。树状图画完后数末端节点总数=总结果数。",
    pre:["prob","data_collect"], rel:["stat_prob_app","frequency"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:78, diff:3,
    methods:["m09","m19","m17"],
    basicsCount:16, groupCount:2, finalCount:0 },

  { id:"stat_prob_app",
    name:"统计概率综合应用",
    semester:"9b",
    chapter:"ch_9b_4",
    domain:"stats",
    x:700, y:930,
    fivePoints:[
      "概念：综合运用统计与概率知识解决实际问题",
      "常例：根据频率直方图估计概率，用样本统计量估总体",
      "特例：频率稳定性：试验次数越多，频率越接近概率",
      "反例：小样本的频率不稳定，不能直接作为概率",
      "考察：读图→计算频率→估计概率→作出判断"
    ],
    keys:[
      "用频率估概率：大量重复试验，频率→概率",
      "样本统计量估总体：样本均值估总体均值",
      "决策问题：根据期望值或概率大小作出合理选择",
      "期望值：E=x₁P₁+x₂P₂+…（各结果×概率之和）",
      "综合题型：统计图+概率计算+实际决策"
    ],
    tips:"期望值（平均收益）公式：E=Σ(结果×概率)。决策题套路：分别算两种方案的期望收益，期望值大的方案更优。这是近年中考新题型，要熟悉模板。",
    pre:["prob_method","frequency","mean_median"], rel:["stats","prob"],
    examYears:[2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:12, freq:65, diff:3,
    methods:["m09","m17","m19"],
    basicsCount:10, groupCount:2, finalCount:0 },

  // ══════════════════════════════════════════════
  // 新增 · 应用与收尾节点 (做15 · 最终批次)
  // ══════════════════════════════════════════════

  { id:"trig_app",
    name:"三角函数应用",
    semester:"9b",
    chapter:"ch_9b_1",
    domain:"geometry",
    x:620, y:710,
    fivePoints:[
      "概念：用三角函数解决测量、高度、距离类实际问题",
      "常例：已知仰角30°和距离，求建筑物高度",
      "特例：仰角从水平向上量，俯角从水平向下量",
      "反例：坡角与坡度不同：坡度=tanα，坡角=α",
      "考察：仰俯角问题、坡度问题、旗杆影子问题"
    ],
    keys:[
      "仰角：观测者仰视目标时，视线与水平线的夹角",
      "俯角：观测者俯视目标时，视线与水平线的夹角",
      "建模步骤：画示意图→标角度→设未知量→列三角函数方程",
      "坡度i=tanα（垂直高度/水平距离）",
      "两次观测法：从A、B两点分别测仰角，联立求高度"
    ],
    tips:"解题必须先画图！仰角俯角题画出直角三角形后，认准：对边（竖直）、邻边（水平）、斜边，再套sinA=对/斜，cosA=邻/斜，tanA=对/邻。两次观测题用tan列两个方程联立。",
    pre:["trig","similar"], rel:["pythagorean","coords"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:18, freq:80, diff:3,
    methods:["m16","m20","m03"],
    basicsCount:14, groupCount:2, finalCount:1 },

  { id:"inverse_fn_app",
    name:"反比例函数应用",
    semester:"9a",
    chapter:"ch_9a_5",
    domain:"algebra",
    x:795, y:290,
    fivePoints:[
      "概念：用反比例函数解决实际中的反比关系问题",
      "常例：速度与时间（路程一定）、压强与面积（压力一定）",
      "特例：双曲线上任意点与坐标轴围成的矩形面积=|k|",
      "反例：k>0图像在一三象限，k<0在二四，不能搞反",
      "考察：面积恒等定理、与一次函数交点综合"
    ],
    keys:[
      "反比例关系：xy=k（k为常数），一量增大另一量减小",
      "面积恒等定理：y=k/x上点P(a,b)，矩形面积=|k|，△面积=|k|/2",
      "k的符号：由实际情境中两量的正负决定",
      "与一次函数联立：求交点坐标（代入消元）",
      "图像特征：双曲线，关于原点中心对称"
    ],
    tips:"面积恒等定理考法：双曲线上点P，OP与坐标轴围成三角形面积=|k|/2，与坐标轴围成矩形面积=|k|。这两个结论背下来直接用，不用每次重新推导。",
    pre:["inverse_fn","eq_app"], rel:["linear_fn","coords"],
    examYears:[2017,2019,2020,2021,2022,2023,2024],
    totalScore:15, freq:65, diff:3,
    methods:["m21","m04","m22"],
    basicsCount:12, groupCount:2, finalCount:0 },

  { id:"solid_vol",
    name:"几何体体积与表面积",
    semester:"9a",
    chapter:"ch_9a_4",
    domain:"geometry",
    x:750, y:580,
    fivePoints:[
      "概念：常见几何体的体积和表面积公式",
      "常例：圆柱体积=πr²h，圆锥体积=πr²h/3",
      "特例：圆锥体积=圆柱体积的1/3（等底等高时）",
      "反例：球的表面积=4πr²，不是πr²（π r²是圆面积）",
      "考察：公式应用、组合体、实际问题"
    ],
    keys:[
      "棱柱/圆柱体积：V=底面积×高",
      "棱锥/圆锥体积：V=底面积×高/3",
      "球体积：V=4πr³/3；球表面积：S=4πr²",
      "圆柱侧面积：S=2πrh；全面积：S=2πr²+2πrh",
      "圆锥侧面积：S=πrl（l为母线），全面积=πr²+πrl"
    ],
    tips:"圆锥和圆柱：等底等高时，圆锥体积=圆柱体积÷3。组合体题：把复杂几何体拆分成基本几何体，分别算再加减。球的公式中r是半径，直径d=2r，代入前要注意转换。",
    pre:["solid_geo","arc_area","pythagorean"], rel:["three_views","trig_app","circle_basic"],
    examYears:[2015,2017,2018,2019,2020,2021,2022,2023,2024,2025],
    totalScore:15, freq:70, diff:3,
    methods:["m20","m04","m18"],
    basicsCount:14, groupCount:2, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充知识点 · 七年级上册 (7a) — 有理数运算细分
  // ════════════════════════════════════════════════

  { id:"rational_add", name:"有理数的加法", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:130,y:130, fivePoints:["概念：同号取同号加绝对值","常例：(-3)+(-5)=-8","特例：互为相反数之和为0","反例：(-3)+5≠-8","考察：异号相加取绝对值大的符号"],
    keys:["同号两数相加：取相同符号，绝对值相加","异号两数相加：取绝对值大的符号，绝对值相减","互为相反数的和为0","加法交换律与结合律"],
    tips:"异号相加口诀：大减小，符号跟着大的跑。", pre:["rational","abs_value"], rel:["rational_sub","rational_mixed"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m19"], basicsCount:8, groupCount:0, finalCount:0 },

  { id:"rational_sub", name:"有理数的减法", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:170,y:130, fivePoints:["概念：减去一个数等于加上它的相反数","常例：5-(-3)=5+3=8","特例：0减任何数等于其相反数","反例：-3-5≠-(-3-5)","考察：转化为加法再计算"],
    keys:["a-b=a+(-b)","减法转加法是核心","注意双重负号变正","有理数加减统一为加法运算"],
    tips:"减法不存在，只有加法！先把减法变加法，再按加法法则算。", pre:["rational_add","abs_value"], rel:["rational_mixed"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m19"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"rational_mixed", name:"有理数加减混合运算", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:210,y:130, fivePoints:["概念：多个有理数的加减运算","常例：-3+5-(-2)=-3+5+2=4","特例：连续减法全部转加法","反例：忘记去括号变号","考察：结合律凑整简化计算"],
    keys:["统一转化为加法","利用交换律、结合律凑整","先算正数和、负数和，再合并","注意运算顺序"],
    tips:"加减混合的最优策略：全变加法→正负分组→分别求和→最终合并。", pre:["rational_add","rational_sub"], rel:["rational_mul"],
    examYears:[], totalScore:3, freq:50, diff:1, methods:["m19"], basicsCount:8, groupCount:0, finalCount:0 },

  { id:"rational_mul", name:"有理数的乘法", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:130,y:170, fivePoints:["概念：确定符号再算绝对值","常例：(-2)×(-3)=6","特例：任何数乘0等于0","反例：负负不是得负","考察：多个数连乘数负号个数"],
    keys:["同号得正，异号得负","绝对值相乘","多个数相乘：数负因子个数，偶正奇负","任何数乘0=0"],
    tips:"连乘看负号：数负号个数，偶数个→正，奇数个→负。有0直接为0。", pre:["rational","abs_value"], rel:["rational_div","rational_power"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m19"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"rational_div", name:"有理数的除法", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:170,y:170, fivePoints:["概念：除以一个数等于乘以它的倒数","常例：(-6)÷(-2)=3","特例：0不能做除数","反例：÷(-2)≠÷2","考察：转化为乘法再计算"],
    keys:["a÷b=a×(1/b)，b≠0","符号规则同乘法","0不能做除数","除法转乘法是核心"],
    tips:"除法不存在，只有乘法！a÷b=a×(1/b)。", pre:["rational_mul"], rel:["rational_power"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m19"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"rational_power", name:"有理数的乘方", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:210,y:170, fivePoints:["概念：n个相同因数的乘积","常例：(-2)³=-8","特例：(-a)²=a²（偶次方为正）","反例：-2²=-4≠(-2)²=4","考察：底数、指数、幂的区分"],
    keys:["aⁿ=a×a×…×a（n个a）","正数的任何次方为正","负数奇次方为负，偶次方为正","-aⁿ与(-a)ⁿ的区别"],
    tips:"-2²=-4，(-2)²=4，括号决定底数！这是考试最常见陷阱。", pre:["rational_mul"], rel:["power_rules","sci_notation"],
    examYears:[2016,2019,2022], totalScore:6, freq:65, diff:1, methods:["m19"], basicsCount:8, groupCount:0, finalCount:0 },

  { id:"rational_calc", name:"有理数混合运算", semester:"7a", chapter:"ch_7a_2", domain:"algebra",
    x:170,y:210, fivePoints:["概念：含加减乘除乘方的综合运算","常例：(-2)²+3×(-1)-6÷(-2)","特例：先乘方→再乘除→最后加减","反例：忘记先算乘方","考察：运算顺序、符号判断"],
    keys:["运算顺序：括号→乘方→乘除→加减","同级运算从左到右","分数运算统一通分","巧算：凑整、提公因数"],
    tips:"运算顺序口诀：先括号，再乘方，然后乘除，最后加减。每步都要注意符号！", pre:["rational_power","rational_mixed"], rel:["poly"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], totalScore:9, freq:90, diff:2, methods:["m19","m13"], basicsCount:10, groupCount:1, finalCount:0 },

  // ── 七上：字母表示数细分 ──
  { id:"combine_like", name:"合并同类项", semester:"7a", chapter:"ch_7a_3", domain:"algebra",
    x:290,y:90, fivePoints:["概念：字母和指数完全相同的项","常例：3x²y+5x²y=8x²y","特例：常数项都是同类项","反例：3xy²与3x²y不是同类项","考察：系数相加减，字母指数不变"],
    keys:["同类项：字母相同，各字母指数相同","合并时系数相加减","字母部分不变","注意正负号"],
    tips:"找同类项看字母和指数，不看系数不看顺序。", pre:["algebra_expr"], rel:["poly"],
    examYears:[], totalScore:3, freq:55, diff:1, methods:["m13"], basicsCount:8, groupCount:0, finalCount:0 },

  { id:"remove_brackets", name:"去括号与添括号", semester:"7a", chapter:"ch_7a_3", domain:"algebra",
    x:330,y:90, fivePoints:["概念：括号前正号不变号，负号全变号","常例：-(a-b)=-a+b","特例：多层括号从内到外去","反例：-(a+b)≠-a+b","考察：符号变化是失分重灾区"],
    keys:["正号去括号：各项符号不变","负号去括号：各项符号全变","添括号是去括号的逆运算","多层括号由内到外"],
    tips:"去括号口诀：正号括号直接脱，负号括号全变号。", pre:["algebra_expr"], rel:["combine_like","poly"],
    examYears:[], totalScore:3, freq:50, diff:1, methods:["m13"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"explore_pattern", name:"探索规律", semester:"7a", chapter:"ch_7a_3", domain:"algebra",
    x:370,y:90, fivePoints:["概念：从特殊数据中发现一般规律","常例：1+3=4=2²，1+3+5=9=3²","特例：数列规律、图形规律","反例：仅靠几个例子不能证明结论成立","考察：归纳猜想，用代数式表达"],
    keys:["观察：找数据或图形的变化规律","猜想：用含n的代数式表示","验证：代入特殊值检验","表达：用代数式写出一般结论"],
    tips:"探索规律题三步走：找规律→用字母表示→验证。常见规律：等差、等比、平方关系。", pre:["algebra_expr","variable_intro"], rel:["linear_eq"],
    examYears:[2017,2019,2021,2023], totalScore:9, freq:60, diff:2, methods:["m09","m13"], basicsCount:8, groupCount:1, finalCount:0 },

  // ── 七上：平面图形细分 ──
  { id:"segment_compare", name:"比较线段的长短", semester:"7a", chapter:"ch_7a_4", domain:"geometry",
    x:130,y:430, fivePoints:["概念：叠合法、度量法比较","常例：线段AB=5cm","特例：线段中点：AM=MB=AB/2","反例：线段有两个端点，不是直线","考察：线段中点、线段和差"],
    keys:["线段大小比较：叠合法和度量法","线段中点：等分线段的点","线段的和与差","两点之间线段最短"],
    tips:"'两点之间线段最短'是中考高频选择题考点。", pre:["lines_angles"], rel:["parallel_perp","tri_basic"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m08"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"angle_measure", name:"角的度量与表示", semester:"7a", chapter:"ch_7a_4", domain:"geometry",
    x:170,y:430, fivePoints:["概念：角是由两条射线组成的图形","常例：∠AOB=60°","特例：平角=180°，周角=360°","反例：两条射线共线不一定是平角","考察：度分秒换算"],
    keys:["角的表示：∠AOB、∠α、∠1","度分秒：1°=60'，1'=60\"","平角180°，周角360°，直角90°","量角器的使用"],
    tips:"度分秒换算：1°=60分=3600秒。做题先统一单位！", pre:["lines_angles"], rel:["angle_relations"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m08"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"angle_compare", name:"角的比较", semester:"7a", chapter:"ch_7a_4", domain:"geometry",
    x:210,y:430, fivePoints:["概念：叠合法和度量法比较角的大小","常例：角平分线把角分成相等的两份","特例：三角形的角平分线","反例：角平分线是射线不是线段","考察：角平分线定义与应用"],
    keys:["角平分线的定义","∠AOC=∠BOC=∠AOB/2","角的和与差","互余互补的判断"],
    tips:"角平分线是最常用的'等量关系'来源，遇到证明题优先找它。", pre:["angle_measure"], rel:["angle_relations","angle_bisector"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m08"], basicsCount:6, groupCount:0, finalCount:0 },

  // ── 七上：一元一次方程细分 ──
  { id:"eq_concept", name:"一元一次方程的定义", semester:"7a", chapter:"ch_7a_5", domain:"algebra",
    x:410,y:55, fivePoints:["概念：含一个未知数且最高次为1的方程","常例：2x-1=3","特例：ax=b中a≠0时才是一次方程","反例：x²+1=0不是一次方程","考察：识别一元一次方程"],
    keys:["方程的定义：含未知数的等式","一元：一个未知数","一次：最高次数为1","标准形式：ax+b=0（a≠0）"],
    tips:"判断是否为一元一次方程：①是等式 ②含未知数 ③最高次为1 ④分母无未知数。", pre:["algebra_expr"], rel:["linear_eq"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m20"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"eq_solve", name:"解一元一次方程", semester:"7a", chapter:"ch_7a_5", domain:"algebra",
    x:450,y:55, fivePoints:["概念：利用等式性质求未知数的值","常例：2x+3=7 → x=2","特例：含分母方程需去分母","反例：移项不变号（应该变号）","考察：去分母→去括号→移项→合并→系数化1"],
    keys:["去分母：两边同乘最简公分母","去括号：注意符号","移项：变号","合并同类项","系数化为1"],
    tips:"解方程五步：去分母→去括号→移项→合并→系数化1。每步都要检查符号！", pre:["eq_concept","remove_brackets"], rel:["linear_eq","eq_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], totalScore:9, freq:85, diff:2, methods:["m20"], basicsCount:12, groupCount:1, finalCount:0 },

  // ── 七上：统计图细分 ──
  { id:"bar_line_chart", name:"条形图与折线图", semester:"7a", chapter:"ch_7a_6", domain:"stats",
    x:380,y:780, fivePoints:["概念：用图形展示数据分布和趋势","常例：条形图比较大小，折线图看趋势","特例：复式条形图比较两组数据","反例：条形图不能看趋势","考察：读图、画图、选择合适的图"],
    keys:["条形图：比较各类数据大小","折线图：反映数据变化趋势","扇形图：各部分占总体的比例","复式统计图的读取"],
    tips:"选图口诀：比大小用条形，看趋势用折线，看占比用扇形。", pre:["stat_chart"], rel:["stats","frequency"],
    examYears:[], totalScore:3, freq:50, diff:1, methods:["m17"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"pie_chart", name:"扇形统计图", semester:"7a", chapter:"ch_7a_6", domain:"stats",
    x:420,y:780, fivePoints:["概念：用扇形面积表示各部分占总体的百分比","常例：某品牌市场份额扇形图","特例：所有扇形的百分比之和=100%","反例：不能直接从扇形图读出具体数值","考察：计算百分比、圆心角"],
    keys:["圆心角=百分比×360°","各部分百分比之和=100%","从扇形图提取信息","扇形图与条形图的转换"],
    tips:"圆心角=百分比×360°，这个公式是做扇形统计图题的核心。", pre:["stat_chart"], rel:["stats","arc_area"],
    examYears:[], totalScore:3, freq:50, diff:1, methods:["m17"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"event_type", name:"事件的分类", semester:"7a", chapter:"ch_7a_7", domain:"stats",
    x:460,y:780, fivePoints:["概念：按发生的确定性分类","常例：掷骰子出现7点是不可能事件","特例：必然事件概率为1","反例：随机事件不是不可能事件","考察：判断事件类型"],
    keys:["必然事件：一定会发生","不可能事件：一定不会发生","随机事件：可能发生也可能不发生","0≤P≤1"],
    tips:"判断事件类型：看能不能100%确定结果。能→必然/不可能，不能→随机。", pre:["possibility"], rel:["prob"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m17"], basicsCount:4, groupCount:0, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充知识点 · 七年级下册 (7b)
  // ════════════════════════════════════════════════

  { id:"mono_poly", name:"单项式与多项式", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:230,y:55, fivePoints:["概念：数字和字母的积叫单项式","常例：3x²y是单项式，2x+1是多项式","特例：单独的数字是单项式","反例：1/x不是整式","考察：次数和系数的求法"],
    keys:["单项式：数与字母的积","多项式：几个单项式的和","单项式的次数=各字母指数之和","多项式的次数=最高次项的次数"],
    tips:"单项式次数看指数之和（包括隐含的1次），多项式次数看最高项。", pre:["algebra_expr"], rel:["poly","power_rules"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m13"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"poly_add_sub", name:"整式的加减", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:270,y:55, fivePoints:["概念：去括号后合并同类项","常例：(2x+1)-(x-3)=x+4","特例：多重括号逐层去","反例：减号后括号内忘变号","考察：去括号+合并同类项"],
    keys:["去括号","合并同类项","注意减号后全变号","结果按降幂排列"],
    tips:"整式加减的核心就两步：去括号+合并同类项。", pre:["combine_like","remove_brackets"], rel:["poly"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m13"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"poly_mul", name:"整式的乘法", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:310,y:55, fivePoints:["概念：单项式×多项式、多项式×多项式","常例：2x(x+3)=2x²+6x","特例：多项式×多项式逐项相乘","反例：只乘第一项忘乘其他项","考察：分配律的应用"],
    keys:["单×多：每项都要乘","多×多：每项与每项相乘","结果合并同类项","注意指数相加"],
    tips:"多项式乘法口诀：逐项相乘不遗漏，合并同类项别忘。", pre:["power_rules","mono_poly"], rel:["poly","factoring"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m06"], basicsCount:8, groupCount:0, finalCount:0 },

  { id:"poly_div", name:"整式的除法", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:350,y:55, fivePoints:["概念：整式除以单项式，逐项相除","常例：(6x²-4x)÷2x=3x-2","特例：只能除以单项式","反例：多项式÷多项式需用其他方法","考察：系数相除、指数相减"],
    keys:["多项式÷单项式：每项分别除","系数相除","同底数幂相除：指数相减","结果检查"],
    tips:"多项式除以单项式：每一项都要除，指数相减不是相除！", pre:["power_rules","poly_mul"], rel:["factoring"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m06"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"sq_diff_formula", name:"平方差公式", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:250,y:95, fivePoints:["概念：(a+b)(a-b)=a²-b²","常例：(x+3)(x-3)=x²-9","特例：(2x+y)(2x-y)=4x²-y²","反例：(a+b)(a+b)≠a²-b²","考察：正用（展开）和逆用（因式分解）"],
    keys:["公式：(a+b)(a-b)=a²-b²","识别a和b","正用：展开","逆用：分解"],
    tips:"平方差公式关键：两项完全相同只差符号！先找'相同部分'（a）和'不同部分'（b）。", pre:["poly_mul"], rel:["poly","factoring"],
    examYears:[2017,2019,2022], totalScore:6, freq:60, diff:2, methods:["m06"], basicsCount:8, groupCount:1, finalCount:0 },

  { id:"perfect_sq_formula", name:"完全平方公式", semester:"7b", chapter:"ch_7b_1", domain:"algebra",
    x:290,y:95, fivePoints:["概念：(a±b)²=a²±2ab+b²","常例：(x+3)²=x²+6x+9","特例：(a-b)²=a²-2ab+b²","反例：(a+b)²≠a²+b²（漏中间项）","考察：正用、逆用、变形"],
    keys:["(a+b)²=a²+2ab+b²","(a-b)²=a²-2ab+b²","中间项±2ab最关键","逆用：a²+2ab+b²=(a+b)²"],
    tips:"完全平方公式最易错：漏掉中间项2ab！展开后必须检查是否有三项。", pre:["poly_mul"], rel:["poly","factoring"],
    examYears:[2016,2018,2021,2024], totalScore:9, freq:65, diff:2, methods:["m06"], basicsCount:10, groupCount:1, finalCount:0 },

  // ── 七下：平行线细分 ──
  { id:"vertical_angle", name:"对顶角", semester:"7b", chapter:"ch_7b_2", domain:"geometry",
    x:170,y:490, fivePoints:["概念：两直线相交形成的不相邻的两个角","常例：∠1与∠3是对顶角则∠1=∠3","特例：两条直线相交形成两对对顶角","反例：相邻的角不是对顶角","考察：角度计算"],
    keys:["对顶角相等","两直线相交形成4个角","对顶角的识别","与邻补角的区分"],
    tips:"对顶角：两条线相交，对面的角相等。配合邻补角（互补）一起使用。", pre:["angle_measure"], rel:["angle_relations","parallel_lines"],
    examYears:[], totalScore:3, freq:55, diff:1, methods:["m08"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"three_angle_types", name:"三线八角", semester:"7b", chapter:"ch_7b_2", domain:"geometry",
    x:210,y:490, fivePoints:["概念：两直线被第三条线所截形成的角","常例：同位角、内错角、同旁内角","特例：平行时三种角有特殊关系","反例：不在截线同侧的不是同位角","考察：识别三种角的位置关系"],
    keys:["同位角：同侧同方向","内错角：异侧之间","同旁内角：同侧之间","F型→同位角，Z型→内错角，U型→同旁内角"],
    tips:"记忆口诀：F型找同位角，Z型找内错角，U型找同旁内角。", pre:["angle_relations"], rel:["parallel_lines"],
    examYears:[], totalScore:3, freq:60, diff:1, methods:["m08"], basicsCount:6, groupCount:0, finalCount:0 },

  { id:"ruler_compass", name:"尺规作图", semester:"7b", chapter:"ch_7b_2", domain:"geometry",
    x:250,y:490, fivePoints:["概念：只用直尺和圆规的作图","常例：作一条线段等于已知线段","特例：五种基本作图","反例：不能用刻度量取长度","考察：作线段、角、垂直平分线等"],
    keys:["作等长线段","作等角","作角平分线","作线段垂直平分线","作过一点的垂线"],
    tips:"尺规作图考试中常与证明结合，作完图要说明作法和证明。", pre:["lines_angles","angle_measure"], rel:["perp_bisector","angle_bisector"],
    examYears:[], totalScore:3, freq:35, diff:2, methods:["m08"], basicsCount:4, groupCount:0, finalCount:0 },

  // ── 七下：全等细分 ──
  { id:"congruent_sss", name:"SSS全等判定", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:290,y:535, fivePoints:["概念：三边对应相等→全等","常例：AB=DE, BC=EF, AC=DF → △ABC≅△DEF","特例：等边三角形只需三边相等","反例：三边不是按对应关系配对","考察：找对应边"],
    keys:["三边对应相等","注意对应关系","找边的方法：公共边、已知条件、中点"],
    tips:"SSS最简单但要确保是'对应边'！按顶点对应关系写。", pre:["congruent"], rel:["congruent_sas"],
    examYears:[], totalScore:3, freq:50, diff:2, methods:["m07","m15"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"congruent_sas", name:"SAS全等判定", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:330,y:535, fivePoints:["概念：两边及夹角对应相等→全等","常例：AB=DE, ∠A=∠D, AC=DF → △ABC≅△DEF","特例：角必须是两边的夹角","反例：SSA不能判定全等","考察：找夹角"],
    keys:["两边及其夹角","角必须在两边之间","SSA不能判定全等","最常用的判定方法之一"],
    tips:"SAS中'角'必须是两边的夹角！SSA是错的，这是最常见陷阱。", pre:["congruent"], rel:["congruent_sss","congruent_asa"],
    examYears:[], totalScore:3, freq:60, diff:2, methods:["m07","m15"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"congruent_asa", name:"ASA与AAS全等判定", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:370,y:535, fivePoints:["概念：ASA两角及夹边/AAS两角及对边→全等","常例：∠A=∠D, AB=DE, ∠B=∠E → △ABC≅△DEF","特例：AAS也可以判定全等","反例：AAA不能判定全等（可能相似）","考察：找角和边的对应"],
    keys:["ASA：两角及其夹边","AAS：两角及其中一角的对边","先证两角相等再找对应边","AAA不能判全等"],
    tips:"有两个角相等时，第三个角也相等（180°-两角），所以ASA和AAS本质一样。", pre:["congruent"], rel:["congruent_sas"],
    examYears:[], totalScore:3, freq:60, diff:2, methods:["m07","m15"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"congruent_hl", name:"HL全等判定", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:410,y:535, fivePoints:["概念：直角三角形斜边和一直角边对应相等→全等","常例：Rt△ABC和Rt△DEF，AB=DE（斜边），BC=EF（直角边）","特例：只适用于直角三角形","反例：非直角三角形不能用HL","考察：需先确认是直角三角形"],
    keys:["只适用于直角三角形","H=斜边（Hypotenuse），L=直角边（Leg）","先确认直角再用HL","常与勾股定理结合"],
    tips:"HL专属直角三角形！用之前必须先证明或确认有直角。", pre:["congruent"], rel:["right_tri_proof","pythagorean"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m07","m15"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"congruent_app", name:"全等三角形的应用", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:350,y:560, fivePoints:["概念：利用全等证明线段或角相等","常例：证明AB=CD→找包含它们的三角形→证全等","特例：CPCTC（全等三角形对应部分相等）","反例：对应关系写错","考察：构造全等、辅助线"],
    keys:["CPCTC：对应边相等、对应角相等","证明思路：找→凑→证→推","常见辅助线：延长、作平行、连接","旋转构造全等"],
    tips:"全等证明三步：①找两个三角形②凑齐判定条件③得到对应部分相等。", pre:["congruent_sas","congruent_asa","congruent_sss"], rel:["isosceles","quadrilateral"],
    examYears:[2015,2018,2020,2023,2025], totalScore:12, freq:80, diff:3, methods:["m07","m08","m15"], basicsCount:10, groupCount:2, finalCount:1 },

  // ── 七下：轴对称细分 ──
  { id:"sym_property", name:"轴对称的性质", semester:"7b", chapter:"ch_7b_5", domain:"geometry",
    x:400,y:660, fivePoints:["概念：对称点连线被对称轴垂直平分","常例：A和A'关于l对称，则l⊥AA'且l平分AA'","特例：对称轴上的点到对称点距离相等","反例：不在对称轴上的点移动距离不等","考察：求对称点坐标"],
    keys:["对称点连线⊥对称轴","对称轴平分对称点连线","对称图形上对应线段相等","坐标系中的对称规律"],
    tips:"关于x轴对称→y变号，关于y轴→x变号，关于原点→都变号。", pre:["symmetry_axis"], rel:["coords","translation"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m16"], basicsCount:4, groupCount:0, finalCount:0 },

  { id:"sym_shortest_path", name:"轴对称的应用", semester:"7b", chapter:"ch_7b_5", domain:"geometry",
    x:440,y:660, fivePoints:["概念：利用对称求最短路径","常例：河边取水问题","特例：将军饮马问题","反例：不取对称点直接连线不是最短","考察：作对称点→连线→交点即为最优点"],
    keys:["最短路径：作对称点→连线→交点","将军饮马问题","角平分线上的点到角两边距离相等","三角形内角平分线性质"],
    tips:"最短路径问题的核心：利用轴对称把折线变直线，直线最短！", pre:["symmetry_axis","sym_property"], rel:["trig_app"],
    examYears:[2019,2021,2023], totalScore:9, freq:55, diff:3, methods:["m16","m04"], basicsCount:6, groupCount:1, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充 · 八年级上册 (8a) 细分
  // ════════════════════════════════════════════════
  { id:"pyth_app", name:"勾股定理的应用", semester:"8a", chapter:"ch_8a_1", domain:"geometry",
    x:130,y:680, fivePoints:["概念：利用勾股定理解实际问题","常例：梯子滑动问题","特例：折叠中的勾股","反例：忘记判断斜边","考察：建模+计算"],
    keys:["建直角三角形模型","确定斜边和直角边","实际问题抽象化","与坐标系结合"],
    tips:"勾股应用先画图→找直角→标边→列方程。", pre:["pythagorean"], rel:["pythagorean_inv","trig"],
    examYears:[2016,2019,2022,2024], totalScore:12, freq:75, diff:3, methods:["m16","m04"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"pyth_triples", name:"常用勾股数组", semester:"8a", chapter:"ch_8a_1", domain:"geometry",
    x:170,y:680, fivePoints:["概念：满足a²+b²=c²的正整数组","常例：3-4-5","特例：倍数也是勾股数","反例：2-3-4不是","考察：快速识别"],
    keys:["3-4-5及其倍数","5-12-13","8-15-17","7-24-25"],
    tips:"看到3,4,5的倍数立刻想勾股定理！", pre:["pythagorean"], rel:["pythagorean_inv"],
    examYears:[], totalScore:3, freq:60, diff:1, methods:["m19"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"irrational_concept", name:"无理数的概念", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:55,y:260, fivePoints:["概念：无限不循环小数","常例：√2, π","特例：√4=2是有理数","反例：0.333…是有理数","考察：判断"],
    keys:["无理数=无限不循环小数","π是无理数","开不尽的根号是无理数","有限/循环小数是有理数"],
    tips:"判断无理数：带根号且开不尽、π相关、无限不循环。", pre:["rational"], rel:["reals","radical"],
    examYears:[], totalScore:3, freq:50, diff:1, methods:["m13"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"square_root", name:"平方根与算术平方根", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:95,y:260, fivePoints:["概念：x²=a的解叫a的平方根","常例：9的平方根±3","特例：0的平方根是0","反例：负数没有平方根","考察：区分±"],
    keys:["平方根±√a（两个）","算术平方根√a≥0","√(a²)=|a|","负数没有实数平方根"],
    tips:"平方根两个（±），算术平方根只取非负。√(a²)=|a|不是a！", pre:["rational"], rel:["reals","radical"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m10"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"cube_root", name:"立方根", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:135,y:260, fivePoints:["概念：x³=a的解","常例：∛8=2","特例：∛(-8)=-2","反例：负数也有立方根","考察：计算"],
    keys:["∛a记法","任何实数有唯一立方根","负数立方根为负","∛(a³)=a"],
    tips:"立方根与平方根区别：负数有立方根但没有平方根！", pre:["rational_power"], rel:["reals"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m10"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"real_estimate", name:"实数的估算", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:175,y:260, fivePoints:["概念：夹逼法估计无理数","常例：3²=9<12<16=4²→3<√12<4","特例：精确到十分位","反例：不能直接四舍五入","考察：数轴定位"],
    keys:["夹逼法","精确估算缩小范围","比较大小用平方","数轴上表示"],
    tips:"估算口诀：平方夹逼定范围。", pre:["reals","square_root"], rel:["number_line"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m10","m14"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"radical_simplify", name:"二次根式化简", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:55,y:300, fivePoints:["概念：移出完全平方因子","常例：√12=2√3","特例：√(a²b)=|a|√b","反例：√(a+b)≠√a+√b","考察：最简根式"],
    keys:["被开方数无完全平方因子","分母无根号","√(a²)=|a|","最简根式三条件"],
    tips:"化简三步：分解→移出完全平方→分母有理化。", pre:["radical","square_root"], rel:["factoring"],
    examYears:[2018,2021,2024], totalScore:6, freq:65, diff:2, methods:["m10","m06"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"radical_calc", name:"二次根式的运算", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:95,y:300, fivePoints:["概念：根式加减乘除","常例：√2+3√2=4√2","特例：√a·√b=√(ab)","反例：√a+√b≠√(a+b)","考察：化简合并"],
    keys:["加减合并同类根式","乘法√a·√b=√(ab)","除法√a/√b=√(a/b)","分母有理化"],
    tips:"根式加减先化最简再合并。乘除直接运算。", pre:["radical_simplify"], rel:["quad_eq"],
    examYears:[2017,2020,2023], totalScore:6, freq:60, diff:2, methods:["m10","m06"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"abs_sqrt", name:"√(a²)=|a|", semester:"8a", chapter:"ch_8a_2", domain:"algebra",
    x:135,y:300, fivePoints:["概念：算术平方根结果非负","常例：√((-3)²)=3","特例：a≥0时=a","反例：√(a²)≠a当a<0","考察：含字母化简"],
    keys:["√(a²)=|a|核心","a≥0→a, a<0→-a","分类讨论","与绝对值结合"],
    tips:"每年必考！遇到就想绝对值，分类讨论。", pre:["abs_value","square_root"], rel:["radical_simplify"],
    examYears:[2016,2019,2022,2025], totalScore:6, freq:70, diff:2, methods:["m10","m14"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"coord_quadrant", name:"坐标与象限", semester:"8a", chapter:"ch_8a_3", domain:"algebra",
    x:580,y:190, fivePoints:["概念：坐标系分四个象限","常例：(2,-3)第四象限","特例：轴上不属于任何象限","反例：(-2,3)不在第四","考察：判断象限"],
    keys:["一(+,+) 二(-,+) 三(-,-) 四(+,-)","轴上无象限","原点(0,0)"],
    tips:"象限口诀：一全正，二x负，三全负，四y负。", pre:["coords"], rel:["linear_fn"],
    examYears:[], totalScore:3, freq:55, diff:1, methods:["m16"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"coord_symmetry", name:"对称点坐标", semester:"8a", chapter:"ch_8a_3", domain:"algebra",
    x:620,y:190, fivePoints:["概念：关于坐标轴/原点对称","常例：(2,3)关于x轴→(2,-3)","特例：关于原点都变号","反例：y轴是x变号","考察：三种对称"],
    keys:["关于x轴：y变号","关于y轴：x变号","关于原点：都变号","关于y=x：互换"],
    tips:"x轴变y，y轴变x，原点都变。", pre:["coords"], rel:["symmetry_axis","translation"],
    examYears:[2017,2020,2023], totalScore:6, freq:60, diff:2, methods:["m16"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"distance_formula", name:"两点距离公式", semester:"8a", chapter:"ch_8a_3", domain:"algebra",
    x:660,y:190, fivePoints:["概念：坐标系两点间距离","常例：A(1,2)B(4,6)→d=5","特例：同轴简化","反例：忘记开方","考察：勾股联系"],
    keys:["d=√((x₂-x₁)²+(y₂-y₁)²)","本质是勾股定理","中点坐标公式","同轴简化"],
    tips:"两点距离=勾股在坐标系中的应用。", pre:["coords","pythagorean"], rel:["linear_fn","circle_basic"],
    examYears:[2018,2021,2024], totalScore:6, freq:60, diff:2, methods:["m16","m04"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"fn_represent", name:"函数的表示法", semester:"8a", chapter:"ch_8a_4", domain:"algebra",
    x:760,y:55, fivePoints:["概念：列表、图象、解析式","常例：y=2x+1的图象","特例：分段函数","反例：一个x对应多个y不是函数","考察：转换"],
    keys:["解析式法","列表法","图象法","三种可互相转换"],
    tips:"函数三种语言要能自由转换。", pre:["fn_concept"], rel:["linear_fn"],
    examYears:[], totalScore:3, freq:50, diff:2, methods:["m21"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"proportional_fn", name:"正比例函数", semester:"8a", chapter:"ch_8a_4", domain:"algebra",
    x:800,y:55, fivePoints:["概念：y=kx（k≠0）过原点","常例：y=2x","特例：k>0一三象限","反例：y=2x+1不是","考察：图象k的意义"],
    keys:["y=kx（k≠0）","过原点","k>0上升，k<0下降","|k|越大越陡"],
    tips:"正比例函数是一次函数的特例（b=0）。", pre:["fn_concept","coords"], rel:["linear_fn"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m22","m21"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"linear_fn_graph", name:"一次函数的图象", semester:"8a", chapter:"ch_8a_4", domain:"algebra",
    x:840,y:55, fivePoints:["概念：y=kx+b是直线","常例：k和b决定位置","特例：k>0上升k<0下降","反例：k=0不是一次函数","考察：由k,b判断象限"],
    keys:["k正上升负下降","b正交y正轴负交负轴","象限判断","平移关系"],
    tips:"k正经一三，k负经二四；b正过一二，b负过三四。", pre:["linear_fn","proportional_fn"], rel:["equations"],
    examYears:[2015,2017,2019,2021,2023], totalScore:9, freq:80, diff:2, methods:["m22","m21"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"linear_fn_expr", name:"确定一次函数表达式", semester:"8a", chapter:"ch_8a_4", domain:"algebra",
    x:880,y:55, fivePoints:["概念：待定系数法","常例：过(1,3)(2,5)求y","特例：平行→k相同","反例：一个点不够","考察：两点定直线"],
    keys:["两点确定直线","代入坐标解方程组","待定系数法","平行k相等"],
    tips:"设y=kx+b→代两点→解k,b。", pre:["linear_fn","equations"], rel:["quad_fn"],
    examYears:[2016,2018,2020,2022,2024], totalScore:9, freq:75, diff:2, methods:["m01","m22"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"linear_fn_app", name:"一次函数的应用", semester:"8a", chapter:"ch_8a_4", domain:"algebra",
    x:920,y:55, fivePoints:["概念：利用图象解决实际问题","常例：行程图象","特例：分段函数","反例：交点不一定有意义","考察：读图+建模"],
    keys:["交点=方程组的解","上方→y>0","面积计算","分段函数"],
    tips:"函数图象三板斧：交点→解方程组，上下方→解不等式，围面积→求三角形。", pre:["linear_fn_graph","inequality"], rel:["quad_fn"],
    examYears:[2015,2017,2019,2021,2023,2025], totalScore:12, freq:80, diff:3, methods:["m22","m05","m21"], basicsCount:8, groupCount:1, finalCount:1 },
  { id:"eq_substitution", name:"代入消元法", semester:"8a", chapter:"ch_8a_5", domain:"algebra",
    x:410,y:325, fivePoints:["概念：用一个方程表示一个未知数代入另一个","常例：y=2x-1代入x+y=5","特例：系数为1时最方便","反例：代入后忘化简","考察：选变量"],
    keys:["选系数简单的变量","用一个方程表示","代入另一个","解出后回代"],
    tips:"代入法优先选系数为1或-1的变量。", pre:["equations","linear_eq"], rel:["eq_addition"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m20","m02"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"eq_addition", name:"加减消元法", semester:"8a", chapter:"ch_8a_5", domain:"algebra",
    x:450,y:325, fivePoints:["概念：方程相加或相减消去未知数","常例：2x+y=5与x-y=1→3x=6","特例：系数先统一","反例：加减后符号错","考察：配系数"],
    keys:["系数同→相减","系数反→相加","系数不同先乘倍数","选易统一的变量"],
    tips:"同号相减，异号相加。系数不齐先配平。", pre:["equations","linear_eq"], rel:["eq_substitution"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m20","m02"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"eq_system_app", name:"方程组的应用", semester:"8a", chapter:"ch_8a_5", domain:"algebra",
    x:490,y:325, fivePoints:["概念：利用方程组解实际问题","常例：鸡兔同笼","特例：需三个方程","反例：等量关系找错","考察：两个等量关系"],
    keys:["设两个未知数","找两个等量关系","列方程组","验证实际意义"],
    tips:"方程组应用：设几个未知数就找几个等量关系。", pre:["equations","eq_app"], rel:["linear_fn"],
    examYears:[2016,2018,2020,2022], totalScore:9, freq:65, diff:3, methods:["m20","m08"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"eq_fn_intersection", name:"方程与函数交点", semester:"8a", chapter:"ch_8a_5", domain:"algebra",
    x:530,y:325, fivePoints:["概念：联立方程=求图象交点","常例：y=2x+1与y=-x+4交点","特例：平行线无交点","反例：图象交点≠方程的解","考察：数形结合"],
    keys:["联立函数表达式","解方程组得交点","几何意义","无解=平行"],
    tips:"方程组的解=两直线交点坐标。数形结合核心！", pre:["equations","linear_fn"], rel:["quad_fn"],
    examYears:[2017,2019,2021,2023], totalScore:6, freq:65, diff:3, methods:["m22","m02"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"weighted_mean", name:"加权平均数", semester:"8a", chapter:"ch_8a_6", domain:"stats",
    x:500,y:810, fivePoints:["概念：考虑权重的平均数","常例：期中30%+期末70%","特例：等权=算术平均","反例：不考虑权重","考察：权重计算"],
    keys:["加权平均=Σ(xᵢ×wᵢ)/Σwᵢ","权重意义","频率分布中的加权","与算术平均的区别"],
    tips:"加权平均：数据×权重之和÷权重之和。", pre:["stats","mean_median"], rel:["variance"],
    examYears:[2017,2020,2023], totalScore:6, freq:65, diff:2, methods:["m17"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"data_representative", name:"数据代表值的选择", semester:"8a", chapter:"ch_8a_6", domain:"stats",
    x:540,y:810, fivePoints:["概念：选合适统计量","常例：有极端值用中位数","特例：都有优缺点","反例：众数不一定居中","考察：比较优劣"],
    keys:["平均数受极端值影响","中位数不受极端值影响","众数看最普遍","选择依据"],
    tips:"有极端值→中位数；要考虑每个数据→平均数；看最普遍→众数。", pre:["mean_median"], rel:["variance"],
    examYears:[2018,2021,2024], totalScore:6, freq:60, diff:2, methods:["m17"], basicsCount:6, groupCount:0, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充 · 八年级下册 (8b) 细分
  // ════════════════════════════════════════════════
  { id:"iso_property", name:"等腰三角形的性质", semester:"8b", chapter:"ch_8b_1", domain:"geometry",
    x:55,y:490, fivePoints:["概念：等边对等角","常例：AB=AC→∠B=∠C","特例：等边三角形三角60°","反例：底角相等不直接推等腰","考察：求角求边"],
    keys:["等边对等角","三线合一","等边三角形三角=60°","底角互余→顶角=90°"],
    tips:"等腰性质：等边对等角+三线合一。", pre:["isosceles"], rel:["iso_judge"],
    examYears:[], totalScore:6, freq:65, diff:2, methods:["m07","m15"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"iso_judge", name:"等腰三角形的判定", semester:"8b", chapter:"ch_8b_1", domain:"geometry",
    x:95,y:490, fivePoints:["概念：等角对等边","常例：∠B=∠C→AB=AC","特例：60°+等腰→等边","反例：性质和判定方向相反","考察：证明等腰"],
    keys:["等角对等边","60°+等腰→等边","三角相等→等边","反证法"],
    tips:"证等腰首选：证两角相等→等角对等边。", pre:["isosceles"], rel:["iso_property","congruent"],
    examYears:[], totalScore:6, freq:60, diff:3, methods:["m07","m15"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"equilateral_tri", name:"等边三角形", semester:"8b", chapter:"ch_8b_1", domain:"geometry",
    x:135,y:490, fivePoints:["概念：三边相等","常例：三角均60°","特例：特殊等腰三角形","反例：等腰不一定等边","考察：性质与判定"],
    keys:["三边相等↔三角均60°","判定：两角=60°即可","高=√3/2×边长","常作高构造30-60-90"],
    tips:"等边三角形高=√3/2×边长。60°是标志角。", pre:["isosceles","iso_property"], rel:["special_tri"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m07","m15"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"counter_proof", name:"反证法", semester:"8b", chapter:"ch_8b_1", domain:"geometry",
    x:175,y:490, fivePoints:["概念：假设结论不成立导出矛盾","常例：证√2是无理数","特例：直接证困难时用","反例：不是所有题都适合","考察：逻辑推理"],
    keys:["假设→推导→矛盾→结论","假设结论的反面","推出与已知矛盾","原结论成立"],
    tips:"反证法三步：①假设不成立②推出矛盾③所以成立。", pre:["proof_logic"], rel:["iso_judge"],
    examYears:[], totalScore:3, freq:35, diff:3, methods:["m08"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"ineq_property", name:"不等式的基本性质", semester:"8b", chapter:"ch_8b_2", domain:"algebra",
    x:585,y:55, fivePoints:["概念：不等式运算规则","常例：两边加同数不变号","特例：乘负数要变号","反例：乘0不行","考察：变号条件"],
    keys:["同加减不变号","同乘正不变号","同乘负要变号","性质3易错"],
    tips:"乘负变号！这是送命题。", pre:["inequality"], rel:["ineq_solve"],
    examYears:[], totalScore:3, freq:55, diff:1, methods:["m19"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"ineq_solve", name:"一元一次不等式的解法", semester:"8b", chapter:"ch_8b_2", domain:"algebra",
    x:625,y:55, fivePoints:["概念：求使不等式成立的范围","常例：2x-3>5→x>4","特例：乘负数变号","反例：忘记变号","考察：解集表示"],
    keys:["解法同方程但乘除负数变号","数轴表示","实心/空心点","≤实心<空心"],
    tips:"解不等式=解方程，唯一不同：乘除负数变号！", pre:["ineq_property","linear_eq"], rel:["ineq_group"],
    examYears:[2016,2018,2020,2022], totalScore:6, freq:65, diff:2, methods:["m20","m19"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"ineq_group", name:"一元一次不等式组", semester:"8b", chapter:"ch_8b_2", domain:"algebra",
    x:665,y:55, fivePoints:["概念：两个不等式的公共解集","常例：{x>2,x<5}→2<x<5","特例：无公共解→空集","反例：同大取大不是取小","考察：取交集"],
    keys:["同大取大","同小取小","大小小大取中间","大大小小空集"],
    tips:"口诀：同大取大，同小取小，大小小大取中间，大大小小空集现。", pre:["ineq_solve"], rel:["inequality_app"],
    examYears:[2017,2019,2021,2023], totalScore:6, freq:65, diff:2, methods:["m20","m14"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"ineq_fn", name:"不等式与一次函数", semester:"8b", chapter:"ch_8b_2", domain:"algebra",
    x:705,y:55, fivePoints:["概念：图象解不等式","常例：y=2x-1>0→x>1/2","特例：两函数比大小看上下","反例：上方不等于≥0","考察：数形结合"],
    keys:["y>0→x轴上方","y₁>y₂→第一条在上","交点=等号成立","不等式解集=x区间"],
    tips:"图象解不等式：上面的大。", pre:["linear_fn","inequality"], rel:["quad_fn"],
    examYears:[2018,2020,2022,2024], totalScore:6, freq:65, diff:3, methods:["m22","m05"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"rotation_coord", name:"旋转的坐标变换", semester:"8b", chapter:"ch_8b_3", domain:"geometry",
    x:540,y:660, fivePoints:["概念：坐标系中旋转规律","常例：逆时针90°(x,y)→(-y,x)","特例：180°=中心对称","反例：顺逆方向相反","考察：坐标变换"],
    keys:["逆90°：(x,y)→(-y,x)","顺90°：(x,y)→(y,-x)","180°：(x,y)→(-x,-y)","形状大小不变"],
    tips:"逆90→(-y,x)，顺90→(y,-x)，180→(-x,-y)。", pre:["rotation","coords"], rel:["central_sym"],
    examYears:[], totalScore:3, freq:45, diff:3, methods:["m16"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"factor_gcf", name:"提取公因式法", semester:"8b", chapter:"ch_8b_4", domain:"algebra",
    x:230,y:190, fivePoints:["概念：公因式提到括号外","常例：2ax+4ay=2a(x+2y)","特例：系数GCD×字母最低次","反例：漏提多提","考察：找最大公因式"],
    keys:["系数取GCD","字母取最低次","提后括号内无公因式","因式分解第一步"],
    tips:"提公因式是因式分解第一步！", pre:["factoring"], rel:["factor_formula"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m06"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"factor_formula", name:"公式法分解", semester:"8b", chapter:"ch_8b_4", domain:"algebra",
    x:270,y:190, fivePoints:["概念：逆用乘法公式","常例：a²-b²=(a+b)(a-b)","特例：完全平方","反例：a²+b²不能","考察：识别结构"],
    keys:["平方差","完全平方","先提再用公式","多次分解"],
    tips:"分解顺序：先提公因式→再看公式→不行用十字。", pre:["factoring","sq_diff_formula","perfect_sq_formula"], rel:["factor_cross"],
    examYears:[2016,2019,2022], totalScore:6, freq:60, diff:2, methods:["m06","m23"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"factor_cross", name:"十字相乘法", semester:"8b", chapter:"ch_8b_4", domain:"algebra",
    x:310,y:190, fivePoints:["概念：分解二次三项式","常例：x²+5x+6=(x+2)(x+3)","特例：首项系数≠1时复杂","反例：不是都能整数分解","考察：找积与和"],
    keys:["pq=c且p+q=b","(x+p)(x+q)","交叉相乘验证","Δ<0不能分解"],
    tips:"十字相乘：乘积=常数项，和=一次项系数。", pre:["factoring"], rel:["quad_eq"],
    examYears:[2017,2020,2023], totalScore:6, freq:55, diff:3, methods:["m06","m23"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"factor_group", name:"分组分解法", semester:"8b", chapter:"ch_8b_4", domain:"algebra",
    x:350,y:190, fivePoints:["概念：多项分组再分解","常例：ax+ay+bx+by=(a+b)(x+y)","特例：两两分组","反例：分组不当","考察：巧妙分组"],
    keys:["四项→两两分组","提公因式后再提","方式不唯一"],
    tips:"分组分解：拆成两组，每组提公因式后再提一次。", pre:["factor_gcf"], rel:["factoring"],
    examYears:[], totalScore:3, freq:40, diff:3, methods:["m06"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"fraction_concept", name:"分式的概念与性质", semester:"8b", chapter:"ch_8b_5", domain:"algebra",
    x:230,y:325, fivePoints:["概念：分母含未知数","常例：(x+1)/(x-1)","特例：分母=0无意义","反例：2/3是分数不是分式","考察：有意义条件"],
    keys:["有意义：分母≠0","基本性质：同乘同除","约分","值为0：分子=0且分母≠0"],
    tips:"有意义→分母≠0；=0→分子=0且分母≠0。", pre:["fraction"], rel:["fraction_calc"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m13"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"fraction_calc", name:"分式的四则运算", semester:"8b", chapter:"ch_8b_5", domain:"algebra",
    x:270,y:325, fivePoints:["概念：分式加减乘除","常例：1/x+1/y=(x+y)/xy","特例：异分母先通分","反例：约分前先因式分解","考察：通分约分"],
    keys:["乘：分子×分子，分母×分母","除：乘倒数","加减：先通分","结果化最简"],
    tips:"乘除直接算，加减先通分。结果必须最简！", pre:["fraction","factoring"], rel:["fraction_eq"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m06","m13"], basicsCount:8, groupCount:0, finalCount:0 },
  { id:"fraction_eq", name:"分式方程的解法", semester:"8b", chapter:"ch_8b_5", domain:"algebra",
    x:310,y:325, fivePoints:["概念：含分式的方程","常例：1/x+1/(x+1)=1","特例：可能产生增根","反例：忘记验根","考察：去分母→解→验根"],
    keys:["去分母：乘最简公分母","转整式方程","解方程","必须验根"],
    tips:"分式方程100%要验根！代回原分母检查≠0。", pre:["fraction","linear_eq"], rel:["fraction_eq_app"],
    examYears:[2016,2019,2022,2025], totalScore:9, freq:70, diff:3, methods:["m20","m06"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"ratio_proportion", name:"线段的比与比例", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:580,y:485, fivePoints:["概念：两线段长度比值","常例：AB:CD=2:3","特例：比例中项","反例：比的顺序不能换","考察：比例基本性质"],
    keys:["ad=bc","比例中项b²=ac","合比等比性质","与实际长度无关"],
    tips:"内项之积=外项之积，解比例核心。", pre:["similar"], rel:["golden_ratio"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m04"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"golden_ratio", name:"黄金分割", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:620,y:485, fivePoints:["概念：比值(√5-1)/2≈0.618","常例：人体比例","特例：正五角星","反例：不是1:2","考察：概念"],
    keys:["≈0.618","较长:全=较短:较长","正五角星","审美比例"],
    tips:"黄金分割比≈0.618。", pre:["similar","ratio_proportion"], rel:[],
    examYears:[], totalScore:3, freq:30, diff:2, methods:["m04"], basicsCount:2, groupCount:0, finalCount:0 },
  { id:"similar_judge", name:"相似三角形的判定", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:660,y:485, fivePoints:["概念：三种判定方法","常例：AA最常用","特例：全等是相似比1","反例：两边比例夹角不等不行","考察：找条件"],
    keys:["AA：两角相等","SAS：两边比例+夹角","SSS：三边比例","平行截割产生相似"],
    tips:"AA最好用：找两对相等角就够。平行→相似是最常见模型。", pre:["similar"], rel:["similar_property"],
    examYears:[], totalScore:6, freq:75, diff:3, methods:["m04","m15"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"similar_property", name:"相似三角形的性质", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:700,y:485, fivePoints:["概念：相似比决定各种比","常例：k=2:3→面积比4:9","特例：对应角相等","反例：面积比≠相似比","考察：面积比"],
    keys:["对应角相等","边比=k","周长比=k","面积比=k²"],
    tips:"面积比=相似比²！最高频失分点。", pre:["similar"], rel:["similar_judge"],
    examYears:[], totalScore:6, freq:70, diff:3, methods:["m04"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"parallel_cut", name:"平行线截割定理", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:740,y:485, fivePoints:["概念：平行线截两直线成比例","常例：DE∥BC→AD/AB=AE/AC","特例：中位线是特例","反例：非平行不成比例","考察：比例线段"],
    keys:["AD/AB=AE/AC=DE/BC","A型和X型模型","比例链式传递","与中位线的关系"],
    tips:"A型（同侧）和X型（两侧）两种截割模型。", pre:["similar","parallel_lines"], rel:["midline"],
    examYears:[2015,2017,2019,2021,2023], totalScore:9, freq:75, diff:3, methods:["m04","m15"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"similar_transform", name:"位似变换", semester:"8b", chapter:"ch_8b_7", domain:"geometry",
    x:780,y:485, fivePoints:["概念：以某点为中心放大缩小","常例：原点为中心放大2倍","特例：坐标乘k","反例：形状不变大小变","考察：坐标变换"],
    keys:["位似中心","位似比","(x,y)→(kx,ky)","形状不变"],
    tips:"位似变换：坐标都乘以相同比值k。", pre:["similar","coords"], rel:[],
    examYears:[], totalScore:3, freq:35, diff:2, methods:["m16"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"census_sample", name:"普查与抽样调查", semester:"8b", chapter:"ch_8b_8", domain:"stats",
    x:460,y:840, fivePoints:["概念：数据收集两种方式","常例：人口普查、抽检","特例：破坏性必须抽样","反例：抽样不完全准确","考察：选调查方式"],
    keys:["普查：逐一调查","抽样：部分推整体","总体个体样本","代表性"],
    tips:"破坏性/量大→抽样。精确/量小→普查。", pre:["data_collect"], rel:["frequency"],
    examYears:[], totalScore:3, freq:45, diff:1, methods:["m17"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"std_deviation", name:"标准差", semester:"8b", chapter:"ch_8b_8", domain:"stats",
    x:500,y:840, fivePoints:["概念：方差的平方根","常例：方差=4→标准差=2","特例：单位同原数据","反例：方差≠标准差","考察：波动"],
    keys:["标准差=√方差","方差=Σ(xᵢ-x̄)²/n","越小越稳定","比方差直观"],
    tips:"标准差=√方差，单位一致，比方差常用。", pre:["variance"], rel:["stats"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m17"], basicsCount:4, groupCount:0, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充 · 九年级上册 (9a) 细分
  // ════════════════════════════════════════════════
  { id:"quad_special", name:"特殊平行四边形综合", semester:"9a", chapter:"ch_9a_1", domain:"geometry",
    x:480,y:490, fivePoints:["概念：矩形菱形正方形关系","常例：正方形=矩形∩菱形","特例：正方形有所有性质","反例：对角线相等不一定矩形","考察：关系与判定"],
    keys:["矩形：四角直角","菱形：四边相等","正方形：矩形+菱形","最少条件判定"],
    tips:"正方形=矩形+菱形，所有性质都有。", pre:["quadrilateral","special_quad"], rel:["trapezoid"],
    examYears:[], totalScore:6, freq:60, diff:3, methods:["m07","m15"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"tessellation", name:"镶嵌与密铺", semester:"9a", chapter:"ch_9a_1", domain:"geometry",
    x:520,y:490, fivePoints:["概念：无缝隙无重叠铺满平面","常例：正三四六可密铺","特例：正五不行","反例：正八不行","考察：内角与360°"],
    keys:["顶点角度和=360°","正三(60°×6)","正四(90°×4)","正六(120°×3)"],
    tips:"能否密铺看内角整除360°。", pre:["polygon_angle"], rel:[],
    examYears:[], totalScore:3, freq:35, diff:2, methods:["m09"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"quad_eq_def", name:"一元二次方程的定义", semester:"9a", chapter:"ch_9a_2", domain:"algebra",
    x:410,y:190, fivePoints:["概念：ax²+bx+c=0（a≠0）","常例：x²-3x+2=0","特例：b=0或c=0","反例：a=0不是二次","考察：识别化简"],
    keys:["标准形式ax²+bx+c=0","a≠0前提","a,b,c识别","化标准形式"],
    tips:"先化标准形式再做题！a≠0是前提。", pre:["quad_eq"], rel:["quad_eq_solve"],
    examYears:[], totalScore:3, freq:50, diff:2, methods:["m20"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"quad_eq_solve", name:"一元二次方程的解法", semester:"9a", chapter:"ch_9a_2", domain:"algebra",
    x:450,y:190, fivePoints:["概念：四种解法","常例：x²-4=0开方法","特例：配方法推公式","反例：Δ<0无实根","考察：选最优解法"],
    keys:["开方法","配方法","公式法x=(-b±√Δ)/2a","因式分解法"],
    tips:"优先：能分解→分解法；缺b→开方法；其他→公式法。", pre:["quad_eq","factoring"], rel:["quad_eq_discriminant"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], totalScore:12, freq:90, diff:3, methods:["m01","m06","m11","m12"], basicsCount:12, groupCount:2, finalCount:0 },
  { id:"quad_eq_discriminant", name:"判别式", semester:"9a", chapter:"ch_9a_2", domain:"algebra",
    x:490,y:190, fivePoints:["概念：Δ=b²-4ac决定根","常例：Δ>0两不等实根","特例：Δ=0重根","反例：Δ<0无实根","考察：根的个数"],
    keys:["Δ>0两不等根","Δ=0重根","Δ<0无实根","含参数列Δ不等式"],
    tips:"判别式送分点！Δ=b²-4ac三种情况必背。", pre:["quad_eq_solve"], rel:["quad_eq_vieta","quad_fn"],
    examYears:[2016,2018,2020,2022,2024], totalScore:9, freq:85, diff:3, methods:["m11","m19"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"quad_eq_vieta", name:"韦达定理", semester:"9a", chapter:"ch_9a_2", domain:"algebra",
    x:530,y:190, fivePoints:["概念：根与系数关系","常例：x₁+x₂=-b/a，x₁x₂=c/a","特例：已知两根反求方程","反例：Δ≥0才能用","考察：对称式"],
    keys:["x₁+x₂=-b/a","x₁x₂=c/a","逆用：和s积p→x²-sx+p=0","x₁²+x₂²=(x₁+x₂)²-2x₁x₂"],
    tips:"逆用：已知和s积p→方程x²-sx+p=0。", pre:["quad_eq_solve","quad_eq_discriminant"], rel:["quad_fn"],
    examYears:[2017,2019,2021,2023,2025], totalScore:9, freq:80, diff:3, methods:["m11","m12","m19"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"classical_prob", name:"古典概型", semester:"9a", chapter:"ch_9a_6", domain:"stats",
    x:520,y:780, fivePoints:["概念：等可能事件","常例：掷骰子1/6","特例：必须等可能","反例：不等可能不能用","考察：P=m/n"],
    keys:["P=有利/总数","必须等可能","互斥事件","完备事件组"],
    tips:"古典概型两条件：有限+等可能。", pre:["prob"], rel:["tree_diagram"],
    examYears:[], totalScore:3, freq:60, diff:2, methods:["m17","m09"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"tree_diagram", name:"列举法", semester:"9a", chapter:"ch_9a_6", domain:"stats",
    x:560,y:780, fivePoints:["概念：树状图或列表列出所有可能","常例：两硬币正正正反反正反反","特例：有序无序区别","反例：遗漏可能","考察：系统列举"],
    keys:["树状图","列表法","先后顺序","有放回vs无放回"],
    tips:"列举必须系统：先固定一个再变另一个。", pre:["prob","classical_prob"], rel:["prob_method"],
    examYears:[2016,2018,2020,2022,2024], totalScore:6, freq:70, diff:2, methods:["m17","m09"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"prob_fair", name:"概率的应用", semester:"9a", chapter:"ch_9a_6", domain:"stats",
    x:600,y:780, fivePoints:["概念：概率解决实际问题","常例：游戏公平性","特例：保险彩票","反例：概率大不一定发生","考察：建模"],
    keys:["公平性：各方概率相等","方案比较","概率决策","频率→概率"],
    tips:"判断公平：算各方概率，相等则公平。", pre:["prob","tree_diagram"], rel:["stat_prob_app"],
    examYears:[2017,2019,2021,2023], totalScore:6, freq:55, diff:3, methods:["m17","m09"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"projection_parallel", name:"平行投影", semester:"9a", chapter:"ch_9a_4", domain:"geometry",
    x:710,y:550, fivePoints:["概念：平行光产生的影子","常例：太阳光影子","特例：影长与物高成正比","反例：不同高度影不等","考察：影长计算"],
    keys:["太阳光→平行投影","物高/影长=常数","相似模型","时刻影响方向"],
    tips:"同一时刻物高/影长=常数，用相似求解。", pre:["solid_vol","similar"], rel:["projection_center"],
    examYears:[], totalScore:3, freq:40, diff:2, methods:["m04"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"projection_center", name:"中心投影", semester:"9a", chapter:"ch_9a_4", domain:"geometry",
    x:750,y:550, fivePoints:["概念：点光源的影子","常例：灯光影子","特例：越近越大","反例：非平行光","考察：相似求影长"],
    keys:["灯光→中心投影","近光源影大","相似三角形","光源物体影子关系"],
    tips:"中心投影用相似三角形计算。", pre:["similar","solid_vol"], rel:["projection_parallel"],
    examYears:[], totalScore:3, freq:35, diff:2, methods:["m04"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"inverse_fn_graph", name:"反比例函数图象与性质", semester:"9a", chapter:"ch_9a_5", domain:"algebra",
    x:830,y:190, fivePoints:["概念：双曲线特征","常例：y=6/x一三象限","特例：关于原点对称","反例：各象限内递减(k>0)","考察：象限渐近性"],
    keys:["k>0一三象限","k<0二四象限","同象限y随x增大减小(k>0)","无限接近坐标轴"],
    tips:"k的符号定象限，同象限内y随x递减(k>0)。", pre:["inverse_fn"], rel:["inverse_fn_area"],
    examYears:[], totalScore:3, freq:55, diff:2, methods:["m22","m21"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"inverse_fn_area", name:"反比例函数面积恒等", semester:"9a", chapter:"ch_9a_5", domain:"algebra",
    x:870,y:190, fivePoints:["概念：矩形面积=|k|","常例：y=6/x上P围矩形=6","特例：三角形=|k|/2","反例：面积不随P变","考察：面积恒定"],
    keys:["矩形=|xy|=|k|","三角形=|k|/2","不变性","与一次函数综合"],
    tips:"最重要性质：|xy|=|k|→矩形面积恒定。", pre:["inverse_fn","inverse_fn_graph"], rel:["linear_fn"],
    examYears:[2017,2019,2021,2023], totalScore:6, freq:60, diff:3, methods:["m22","m04"], basicsCount:6, groupCount:1, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充 · 九年级下册 (9b) 细分
  // ════════════════════════════════════════════════
  { id:"trig_def", name:"锐角三角函数定义", semester:"9b", chapter:"ch_9b_1", domain:"geometry",
    x:580,y:615, fivePoints:["概念：直角三角形边比","常例：sinA=对/斜","特例：互余角关系","反例：tanA≠sinA+cosA","考察：定义与计算"],
    keys:["sinA=对/斜","cosA=邻/斜","tanA=对/邻","sinA=cos(90°-A)"],
    tips:"SOH-CAH-TOA。", pre:["trig","pythagorean"], rel:["trig_special"],
    examYears:[], totalScore:3, freq:60, diff:3, methods:["m16"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"trig_special", name:"特殊角三角函数值", semester:"9b", chapter:"ch_9b_1", domain:"geometry",
    x:620,y:615, fivePoints:["概念：30°45°60°值","常例：sin30°=1/2","特例：tan45°=1","反例：sin60°≠1/2","考察：记忆应用"],
    keys:["sin30°=1/2,cos30°=√3/2,tan30°=√3/3","sin45°=cos45°=√2/2,tan45°=1","sin60°=√3/2,cos60°=1/2,tan60°=√3"],
    tips:"sin值：1/2→√2/2→√3/2（递增）。cos反之。", pre:["trig_def"], rel:["trig_app"],
    examYears:[], totalScore:3, freq:65, diff:2, methods:["m19"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"solve_rt_tri", name:"解直角三角形", semester:"9b", chapter:"ch_9b_1", domain:"geometry",
    x:660,y:615, fivePoints:["概念：已知部分边角求其余","常例：已知一角一边","特例：两边也可","反例：必须有直角","考察：综合运用"],
    keys:["两角互余","勾股定理","三角函数","从已知出发推导"],
    tips:"先用三角函数找边→再用勾股求第三边。", pre:["trig_def","trig_special","pythagorean"], rel:["trig_app"],
    examYears:[2017,2019,2021,2023], totalScore:9, freq:70, diff:3, methods:["m16","m03"], basicsCount:8, groupCount:1, finalCount:0 },
  { id:"quad_fn_basic", name:"y=ax²的图象", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:755,y:325, fivePoints:["概念：最简二次函数","常例：y=x²上开口","特例：y=-x²下开口","反例：a=0不是","考察：a的符号"],
    keys:["a>0上开口","a<0下开口","顶点原点","关于y轴对称"],
    tips:"a正→上，负→下，|a|大→窄。", pre:["quad_fn"], rel:["quad_fn_vertex"],
    examYears:[], totalScore:3, freq:50, diff:3, methods:["m22","m21"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"quad_fn_vertex", name:"顶点式与平移", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:795,y:325, fivePoints:["概念：y=a(x-h)²+k顶点(h,k)","常例：y=2(x-1)²+3顶点(1,3)","特例：h=0关于y轴对称","反例：(x-h)中h前减号","考察：配方"],
    keys:["顶点(h,k)","对称轴x=h","左加右减上加下减","配方法化顶点式"],
    tips:"配方化顶点式：顶点(-b/2a,(4ac-b²)/4a)。", pre:["quad_fn_basic"], rel:["quad_fn_property"],
    examYears:[], totalScore:6, freq:65, diff:3, methods:["m01","m22"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"quad_fn_property", name:"二次函数的性质", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:835,y:325, fivePoints:["概念：开口对称轴顶点单调性","常例：y=x²-4x+3对称轴x=2","特例：对称轴两侧对称","反例：最值取决于开口","考察：综合运用"],
    keys:["对称轴x=-b/2a","a>0最小值a<0最大值","最值=顶点纵坐标","对称轴左右单调相反"],
    tips:"a定开口→最值类型，-b/2a定对称轴→单调区间。", pre:["quad_fn_vertex"], rel:["quad_fn_expr"],
    examYears:[2015,2017,2019,2021,2023], totalScore:12, freq:85, diff:4, methods:["m22","m21","m05"], basicsCount:8, groupCount:1, finalCount:1 },
  { id:"quad_fn_expr", name:"求二次函数解析式", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:875,y:325, fivePoints:["概念：待定系数法三种形式","常例：知顶点用顶点式","特例：过原点c=0","反例：选错形式","考察：选最优形式"],
    keys:["一般式：知三点","顶点式：知顶点+一点","交点式：知两根+一点","选形式→代点→解"],
    tips:"知顶点→顶点式，知两根→交点式，其他→一般式。", pre:["quad_fn_property"], rel:["quad_fn_max"],
    examYears:[2016,2018,2020,2022,2024], totalScore:12, freq:85, diff:4, methods:["m01","m22"], basicsCount:8, groupCount:2, finalCount:1 },
  { id:"quad_fn_max", name:"二次函数最值", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:915,y:325, fivePoints:["概念：利用顶点或端点求最值","常例：最大利润最大面积","特例：有定义域看端点","反例：对称轴不在区间内","考察：建模+求最值"],
    keys:["开区间最值在顶点","闭区间比较端点和顶点","建模设变量列函数","注意定义域限制"],
    tips:"最值问题：先看对称轴在不在定义域内。在→顶点，不在→端点。", pre:["quad_fn_property"], rel:["quad_fn_app"],
    examYears:[2016,2018,2020,2022,2024], totalScore:12, freq:80, diff:4, methods:["m22","m05","m04"], basicsCount:8, groupCount:2, finalCount:1 },
  { id:"quad_fn_eq", name:"二次函数与方程", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:955,y:325, fivePoints:["概念：Δ决定交点个数","常例：Δ>0→两个交点","特例：Δ=0→抛物线切x轴","反例：Δ<0不是无图象","考察：数形结合"],
    keys:["y=0→解方程→x轴交点","Δ>0两交点","Δ=0一交点（切）","Δ<0无交点"],
    tips:"二次函数与x轴交点=方程ax²+bx+c=0的解。Δ决定交点数。", pre:["quad_fn_property","quad_eq_discriminant"], rel:["quad_fn_app"],
    examYears:[2015,2017,2019,2021,2023,2025], totalScore:9, freq:80, diff:4, methods:["m22","m11"], basicsCount:6, groupCount:1, finalCount:1 },
  { id:"quad_fn_synthesis", name:"二次函数综合题", semester:"9b", chapter:"ch_9b_2", domain:"algebra",
    x:955,y:365, fivePoints:["概念：直线+抛物线+面积","常例：求动点使面积最大","特例：存在性问题","反例：忘记定义域限制","考察：压轴综合"],
    keys:["直线与抛物线联立","面积表达式","动点问题","存在性与探索性问题"],
    tips:"二次函数压轴：①求解析式②求交点③求最值/存在性。分步拿分。", pre:["quad_fn_expr","quad_fn_max","similar"], rel:["quad_fn_app"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], totalScore:18, freq:95, diff:5, methods:["m22","m04","m05","m01"], basicsCount:6, groupCount:2, finalCount:3 },
  { id:"circle_symmetry", name:"圆的对称性", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:735,y:490, fivePoints:["概念：圆关于任意直径对称","常例：垂径定理基础","特例：弧也有对称性","反例：弦不一定过圆心","考察：利用对称性证明"],
    keys:["关于任意直径对称","对称弧相等","利用对称性作辅助线","与垂径定理的关系"],
    tips:"圆的对称性是垂径定理的根基。", pre:["circle_basic"], rel:["circle_angle"],
    examYears:[], totalScore:3, freq:50, diff:2, methods:["m15","m16"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"chord_relation", name:"弦弧圆心角关系", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:770,y:490, fivePoints:["概念：等弦对等弧对等圆心角","常例：AB=CD→弧AB=弧CD","特例：直径是最长弦","反例：不同圆中不成立","考察：等量关系推导"],
    keys:["同圆中：等弦↔等弧↔等圆心角","弦心距相等↔弦相等","垂径定理的推论","大弦近圆心"],
    tips:"同圆中弦=弧=圆心角三等价，这是圆中证等量的核心。", pre:["circle_basic"], rel:["circle_angle"],
    examYears:[], totalScore:3, freq:55, diff:3, methods:["m15"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"inscribed_angle_90", name:"直径所对圆周角", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:810,y:490, fivePoints:["概念：直径所对圆周角=90°","常例：AB是直径→∠ACB=90°","特例：逆定理也成立","反例：非直径的弦不一定","考察：双向推导"],
    keys:["直径→圆周角=90°","圆周角=90°→对边是直径","双向推导每年必考","构造直径是常用辅助线"],
    tips:"最高频考点！正向：直径→90°；逆向：90°→直径。每年必考。", pre:["circle_angle"], rel:["circle_tangent"],
    examYears:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], totalScore:15, freq:92, diff:3, methods:["m15","m07"], basicsCount:6, groupCount:1, finalCount:1 },
  { id:"inscribed_quad", name:"圆内接四边形", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:850,y:490, fivePoints:["概念：四顶点在圆上的四边形","常例：∠A+∠C=180°","特例：矩形是圆内接四边形","反例：平行四边形不一定","考察：对角互补"],
    keys:["对角互补∠A+∠C=180°","外角=内对角","四点共圆的判定","与圆周角结合"],
    tips:"圆内接四边形：对角互补。用于证四点共圆或求角。", pre:["circle_angle"], rel:["quadrilateral"],
    examYears:[2018,2020,2022,2024], totalScore:6, freq:55, diff:3, methods:["m15","m07"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"circle_determine", name:"确定圆的条件", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:890,y:490, fivePoints:["概念：三点定圆","常例：三角形外接圆","特例：外心=垂直平分线交点","反例：三点共线无法定圆","考察：外心"],
    keys:["不共线三点确定一个圆","外接圆的圆心=外心","外心到三顶点等距","垂直平分线交点"],
    tips:"三点定圆=找外心=三边垂直平分线的交点。", pre:["circle_basic","perp_bisector"], rel:["circle_tangent"],
    examYears:[], totalScore:3, freq:45, diff:3, methods:["m15"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"line_circle_pos", name:"直线与圆的位置关系", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:930,y:490, fivePoints:["概念：相交相切相离三种","常例：d<r相交，d=r相切，d>r相离","特例：切线只有一个公共点","反例：一个交点不一定相切","考察：d与r的关系"],
    keys:["d<r→相交（两点）","d=r→相切（一点）","d>r→相离（零点）","d=圆心到直线的距离"],
    tips:"判断位置关系：算圆心到直线的距离d，比较d和r。", pre:["circle_basic"], rel:["circle_tangent"],
    examYears:[], totalScore:3, freq:60, diff:2, methods:["m15","m04"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"tangent_judge", name:"切线的判定", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:970,y:490, fivePoints:["概念：过切点半径⊥直线","常例：OA⊥l且A在⊙O上→l是切线","特例：两步证切线","反例：⊥半径但不过端点","考察：证明切线"],
    keys:["判定：直线⊥过切点的半径","证明两步：①找切点②证⊥","过圆外一点两切线","弦切角"],
    tips:"证切线两步：①找切点②证该点处半径⊥直线。", pre:["circle_tangent","line_circle_pos"], rel:["tangent_length"],
    examYears:[], totalScore:6, freq:70, diff:3, methods:["m07","m03","m15"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"tangent_length", name:"切线长定理", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:1010,y:490, fivePoints:["概念：外点到两切点等距","常例：PA=PB","特例：OP平分∠APB","反例：弦长≠切线长","考察：与勾股结合"],
    keys:["PA=PB","OP平分∠APB","PA²=PO²-r²","与勾股定理结合"],
    tips:"切线长定理+勾股定理：PA²=PO²-r²是经典组合。", pre:["circle_tangent","pythagorean"], rel:["tangent_judge"],
    examYears:[2016,2019,2022,2025], totalScore:6, freq:65, diff:3, methods:["m07","m04"], basicsCount:6, groupCount:1, finalCount:0 },
  { id:"circle_circle_pos", name:"圆与圆的位置关系", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:1050,y:490, fivePoints:["概念：五种位置关系","常例：d>R+r外离","特例：内切d=R-r","反例：d=0不是外切","考察：d与R,r的关系"],
    keys:["外离d>R+r","外切d=R+r","相交R-r<d<R+r","内切d=R-r","内含d<R-r"],
    tips:"两圆位置：比较圆心距d与R+r和|R-r|。", pre:["circle_basic"], rel:["line_circle_pos"],
    examYears:[], totalScore:3, freq:45, diff:3, methods:["m15","m04"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"cone_surface", name:"圆锥侧面积", semester:"9b", chapter:"ch_9b_3", domain:"geometry",
    x:960,y:530, fivePoints:["概念：S=πrl","常例：r=3,l=5→S=15π","特例：侧面展开为扇形","反例：l是母线不是高","考察：展开图"],
    keys:["S侧=πrl","全面积=πr²+πrl","侧面展开是扇形","弧长=底面周长=2πr"],
    tips:"圆锥侧面展开：母线=扇形半径，底面周长=弧长。", pre:["arc_area"], rel:["solid_vol"],
    examYears:[], totalScore:3, freq:50, diff:3, methods:["m20","m04"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"stat_prob_synthesis", name:"统计与概率综合", semester:"9b", chapter:"ch_9b_4", domain:"stats",
    x:640,y:810, fivePoints:["概念：统计图+概率计算结合","常例：从统计图读取数据后算概率","特例：频率估计概率","反例：图中数据直接当概率","考察：读图+建模+概率"],
    keys:["从统计图提取数据","利用数据计算概率","频率作概率估计","综合应用"],
    tips:"统计概率综合：先读图取数据→再算概率。", pre:["stat_prob_app","prob_method"], rel:["stats"],
    examYears:[2016,2018,2020,2022,2024], totalScore:9, freq:60, diff:3, methods:["m17","m09"], basicsCount:6, groupCount:1, finalCount:0 },

  // ════════════════════════════════════════════════
  // 补充 · 最后7个缺失知识点（达到194）
  // ════════════════════════════════════════════════
  { id:"tri_interior_angle", name:"三角形内角和", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:90,y:550, fivePoints:["概念：三角形三内角之和=180°","常例：60°+70°+50°=180°","特例：等边三角形三角均60°","反例：四边形内角和≠180°","考察：求角"],
    keys:["内角和=180°","已知两角求第三角","与外角定理结合","多边形内角和(n-2)×180°"],
    tips:"三角形内角和=180°是最基本的角度工具。", pre:["tri_basic"], rel:["polygon_angle"],
    examYears:[], totalScore:3, freq:65, diff:1, methods:["m08"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"tri_exterior_angle", name:"三角形外角", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:130,y:550, fivePoints:["概念：外角=不相邻两内角之和","常例：∠ACD=∠A+∠B","特例：外角>任一不相邻内角","反例：外角不是180°-邻角（那是邻补角）","考察：快速算角"],
    keys:["外角=不相邻两内角之和","外角>任一不相邻内角","外角和=360°","快捷计算工具"],
    tips:"外角定理是最快算角工具！不用内角和直接得答案。", pre:["tri_interior_angle"], rel:["parallel_lines"],
    examYears:[], totalScore:3, freq:60, diff:1, methods:["m08"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"tri_sides", name:"三角形三边关系", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:170,y:550, fivePoints:["概念：两边之和>第三边","常例：2,3,4可以构成三角形","特例：两边之差<第三边","反例：1,2,4不能构成三角形","考察：判断能否构成三角形"],
    keys:["两边之和>第三边","两边之差<第三边","快捷判断：最长边<其余两边之和","求第三边范围"],
    tips:"判断三边能否构成三角形：只需看最长边<其余两边之和。", pre:["tri_basic"], rel:["pythagorean"],
    examYears:[], totalScore:3, freq:55, diff:1, methods:["m14"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"tri_special_lines", name:"三角形的高中线角平分线", semester:"7b", chapter:"ch_7b_4", domain:"geometry",
    x:210,y:550, fivePoints:["概念：三条重要线段","常例：高⊥对边，中线平分对边","特例：等腰三角形三线合一","反例：钝角三角形高在外面","考察：画高中线角平分线"],
    keys:["高：顶点到对边的垂线段","中线：顶点到对边中点","角平分线：平分角","重心/内心/外心"],
    tips:"三线：高⊥对边，中线连中点，角平分线分角。等腰三合一。", pre:["tri_basic"], rel:["congruent","isosceles"],
    examYears:[], totalScore:3, freq:45, diff:2, methods:["m08"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"expand_fold", name:"展开与折叠", semester:"7a", chapter:"ch_7a_4", domain:"geometry",
    x:250,y:430, fivePoints:["概念：立体图形的展开图","常例：正方体的11种展开图","特例：圆柱展开得矩形","反例：不是所有展开图都能折回","考察：判断展开图是否正确"],
    keys:["正方体展开图：1-4-1或2-3-1等","相对面的判断","圆柱圆锥展开","从展开图折叠回立体"],
    tips:"正方体展开图口诀：1-4-1和2-3-1和2-2-2和3-3。", pre:["solid_geo"], rel:["three_views"],
    examYears:[], totalScore:3, freq:50, diff:2, methods:["m09"], basicsCount:6, groupCount:0, finalCount:0 },
  { id:"data_life_app", name:"数据在生活中的应用", semester:"7a", chapter:"ch_7a_6", domain:"stats",
    x:500,y:780, fivePoints:["概念：用数据描述和分析现实","常例：天气预报、考试成绩分析","特例：数据能说谎（选择性展示）","反例：少量数据不能代表整体","考察：读图理解"],
    keys:["数据的收集与整理","统计图的选择","数据的描述","数据分析的局限性"],
    tips:"看统计图先看标题、单位、刻度，再看数据。", pre:["stat_chart"], rel:["stats"],
    examYears:[], totalScore:3, freq:40, diff:1, methods:["m17"], basicsCount:4, groupCount:0, finalCount:0 },
  { id:"quad_eq_real_app", name:"一元二次方程实际应用", semester:"9a", chapter:"ch_9a_2", domain:"algebra",
    x:570,y:190, fivePoints:["概念：利用二次方程解实际问题","常例：面积问题、利润问题","特例：两个根要检验实际意义","反例：负数解可能无意义","考察：建模+列方程+验根"],
    keys:["增长率问题：x(1+p)²","面积问题：设边长列方程","利润最大化","两根取舍看实际意义"],
    tips:"增长率公式：x(1+p)ⁿ。两个根一定要代回实际问题检查意义！", pre:["quad_eq","quad_eq_solve"], rel:["quad_eq_app"],
    examYears:[2015,2017,2019,2021,2023,2025], totalScore:12, freq:75, diff:3, methods:["m20","m08"], basicsCount:8, groupCount:1, finalCount:0 },

];

export { TOPICS };
