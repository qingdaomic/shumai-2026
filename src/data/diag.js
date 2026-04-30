// 数脉快速诊断题
// 自动从 shumai-v7-1.jsx 拆分生成

/* ════════════════════════════════════════════════════════════
   QUICK DIAGNOSTIC — 首次使用 10 题摸底测试
   覆盖：代数 4 题 + 几何 4 题 + 统计 2 题，难度 1-3
════════════════════════════════════════════════════════════ */
const QUICK_DIAG_QS = [
  // ── 七年级（minGrade:7）──────────────────────
  {id:"qd1",topic:"rational",domain:"algebra",diff:1,minGrade:7,
   content:"计算：(-2)³ + |-5| ÷ (-1) =",
   options:["-13","-3","3","13"],correct:0},
  {id:"qd2",topic:"poly",domain:"algebra",diff:1,minGrade:7,
   content:"化简：(a+b)² - (a-b)² =",
   options:["2ab","4ab","2a²+2b²","0"],correct:1},
  {id:"qd11",topic:"linear_eq",domain:"algebra",diff:1,minGrade:7,
   content:"解方程：2x + 3 = 7，则 x =",
   options:["1","2","3","5"],correct:1},
  {id:"qd12",topic:"tri_basic",domain:"geometry",diff:1,minGrade:7,
   content:"三角形三个内角之和等于",
   options:["90°","120°","180°","360°"],correct:2},
  {id:"qd5",topic:"congruent",domain:"geometry",diff:2,minGrade:7,
   content:"判定两个三角形全等，下列条件中不充分的是",
   options:["SAS（边角边）","AAS（角角边）","AAA（三个角对应相等）","SSS（三边对应相等）"],correct:2},
  {id:"qd13",topic:"segment_angle",domain:"geometry",diff:1,minGrade:7,
   content:"两条直线相交，一组对顶角的度数之和为 100°，则每个对顶角为",
   options:["40°","50°","80°","100°"],correct:1},
  // ── 八年级新增（minGrade:8）──────────────────
  {id:"qd4",topic:"linear_fn",domain:"algebra",diff:2,minGrade:8,
   content:"一次函数 y=kx+2 过点 (1,4)，则 k =",
   options:["-2","4","2","6"],correct:2},
  {id:"qd6",topic:"pythagorean",domain:"geometry",diff:1,minGrade:8,
   content:"直角三角形两直角边分别为 3 和 4，斜边长为",
   options:["7","5","6","√7"],correct:1},
  {id:"qd14",topic:"factoring",domain:"algebra",diff:2,minGrade:8,
   content:"因式分解：a² - 4 =",
   options:["(a-2)²","(a+2)²","(a+2)(a-2)","a(a-4)"],correct:2},
  {id:"qd7",topic:"similar",domain:"geometry",diff:3,minGrade:8,
   content:"△ABC∽△DEF，相似比 2:3，若 AB=6，则 DE =",
   options:["4","12","8","9"],correct:3},
  {id:"qd9",topic:"stats",domain:"stats",diff:1,minGrade:8,
   content:"数据 3, 5, 7, 8, 7 的众数和中位数分别是",
   options:["7 和 5","5 和 7","7 和 7","8 和 7"],correct:2},
  // ── 九年级新增（minGrade:9）──────────────────
  {id:"qd3",topic:"quad_eq",domain:"algebra",diff:2,minGrade:9,
   content:"方程 x²-3x-4=0 的两根为",
   options:["x=4 或 x=-1","x=3 或 x=-4","x=1 或 x=4","x=-3 或 x=4"],correct:0},
  {id:"qd8",topic:"circle",domain:"geometry",diff:2,minGrade:9,
   content:"⊙O 半径 r=5，圆心到弦 AB 的距离 d=3，则弦 AB 长为",
   options:["6","8","10","4"],correct:1},
  {id:"qd10",topic:"prob",domain:"stats",diff:2,minGrade:9,
   content:"同时掷两个骰子，点数之和为 7 的概率是",
   options:["1/12","5/36","7/36","1/6"],correct:3},
  {id:"qd15",topic:"trig",domain:"geometry",diff:2,minGrade:9,
   content:"在 Rt△ABC 中，∠C=90°，若 sinA=3/5，则 cosA =",
   options:["3/5","4/5","3/4","5/3"],correct:1},
];

export { QUICK_DIAG_QS };
