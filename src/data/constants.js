// 数脉设计系统常量
// 自动从 shumai-v7-1.jsx 拆分生成

const C = {
  bg: "#040810", s1: "#080f1a", s2: "#0d1825", s3: "#152035",
  border: "#1a2d44", border2: "#223650",
  fg: "#dce8f8", text: "#dce8f8", muted: "#4a6882", dim: "#162030",
  alg: "#3a9eff", geo: "#1ed9a0", sta: "#f5a623",
  ok: "#22c55e", red: "#f04f70", gold: "#fbbf24",
  purple: "#a78bfa", cyan: "#22d3ee",
  // Module colors
  m1: "#3a9eff",   // 基础知识
  m2: "#1ed9a0",   // 基础习题
  m3: "#f5a623",   // 题组训练
  m4: "#f04f70",   // 压轴题组
  method: "#a78bfa", // 解题方法
};

/* ════════════════════════════════════════════════════════════
   23 SOLVING METHODS
════════════════════════════════════════════════════════════ */
const METHODS = [
  // ── 代数类 ──────────────────────────────────────────────
  { id:"m01", name:"配方法",      cat:"代数",
    desc:"通过配完全平方式变换方程或表达式形式，用于解二次方程、求顶点和最值。",
    topics:["quad_eq","quad_fn","quad_fn_app"],
    example:"x²-4x+1=0 → (x-2)²=3，顶点(-b/2a, c-b²/4a)" },

  { id:"m02", name:"换元法",      cat:"代数",
    desc:"引入新变量替换复杂表达式，简化计算结构。",
    topics:["quad_eq","fraction","fraction_eq_app"],
    example:"令t=x²将四次方程化为二次；令t=1/x化分式方程" },

  { id:"m03", name:"构造法",      cat:"综合",
    desc:"构造满足条件的辅助图形或方程，创造性地建立解题模型。",
    topics:["circle_basic","similar","pythagorean","right_tri_proof"],
    example:"构造直角三角形证勾股定理；构造辅助圆证切线" },

  { id:"m04", name:"面积法",      cat:"几何",
    desc:"将几何量用面积关系表达，转化难以直接计算的线段或角度问题。",
    topics:["similar","quadrilateral","trapezoid","midline","arc_area"],
    example:"等面积法：S△ABC=S△ABD+S△ACD，求内切圆半径" },

  { id:"m05", name:"待定系数法",  cat:"代数",
    desc:"设定函数解析式中未知系数，代入已知点联立方程求解。",
    topics:["linear_fn","quad_fn","inverse_fn","fn_concept"],
    example:"设y=ax²+bx+c，代三点坐标列方程组求a,b,c" },

  { id:"m06", name:"因式分解法",  cat:"代数",
    desc:"将多项式分解为因式之积，用于解方程、化简和求根。",
    topics:["factoring","quad_eq","poly","power_rules","radical"],
    example:"x²-5x+6=(x-2)(x-3)=0 → x=2或x=3" },

  { id:"m11", name:"判别式法",    cat:"代数",
    desc:"用Δ=b²-4ac判断一元二次方程根的情况，解决参数范围问题。",
    topics:["quad_eq","quad_fn","quad_eq_app"],
    example:"Δ>0两不等实根，Δ=0重根，Δ<0无实根" },

  { id:"m12", name:"求根公式法",  cat:"代数",
    desc:"直接用x=(-b±√Δ)/2a求一元二次方程的根，适合系数不整齐时。",
    topics:["quad_eq","quad_eq_app"],
    example:"x²-3x+1=0 → x=(3±√5)/2" },

  { id:"m14", name:"非负数法",    cat:"代数",
    desc:"利用a²≥0、|a|≥0等非负性，建立等式或不等关系求最值。",
    topics:["inequality","quad_fn","reals","abs_value","radical"],
    example:"a²+b²≥0，等号当a=b=0；|x|≥0，等号当x=0" },

  { id:"m24", name:"验根法",      cat:"代数",
    desc:"方程求解后代回原式检验，排除增根（使分母为0的解）或不符合实际的解。",
    topics:["fraction","fraction_eq_app","quad_eq_app"],
    example:"分式方程解出x后，代入各分母验证是否为0；应用题验证是否符合实际" },

  { id:"m25", name:"根式化简法",  cat:"代数",
    desc:"通过提取完全平方因子、分母有理化等步骤将根式化为最简形式。",
    topics:["radical","reals","pythagorean"],
    example:"√12=2√3；1/√3=√3/3（分母有理化）；√(a²)=|a|" },

  // ── 逻辑类 ──────────────────────────────────────────────
  { id:"m07", name:"分析法",      cat:"逻辑",
    desc:"从结论出发，逐步寻找使结论成立的充分条件（执果索因）。",
    topics:["congruent","similar","circle_angle","perp_bisector","proof_logic"],
    example:"要证PA=PB，需证P在AB垂直平分线上，需证PA²=PB²…" },

  { id:"m08", name:"综合法",      cat:"逻辑",
    desc:"从已知条件出发，逐步推导得出结论（由因到果）。",
    topics:["congruent","isosceles","parallel_proof","angle_bisector","quadrilateral"],
    example:"已知AB=DC，∠B=∠D → 由SAS得△ABE≅△DCF → AE=CF" },

  { id:"m09", name:"归纳法",      cat:"逻辑",
    desc:"从特殊情况归纳出一般规律，找出数列或图形的通项公式。",
    topics:["stat_chart","mean_median","frequency","data_collect","algebra_expr"],
    example:"观察1,4,9,16…归纳第n项=n²；频率稳定性的实验验证" },

  { id:"m10", name:"反证法",      cat:"逻辑",
    desc:"假设结论不成立，推导出矛盾，从而证明结论成立。",
    topics:["reals","proof_logic","parallel_lines"],
    example:"假设√2是有理数p/q（最简分数），则p²=2q²，推出矛盾" },

  // ── 几何类 ──────────────────────────────────────────────
  { id:"m15", name:"辅助线法",    cat:"几何",
    desc:"添加恰当的辅助线（平行线、垂线、连心线等），创造全等或相似条件。",
    topics:["congruent","similar","quadrilateral","circle_angle","isosceles","trapezoid"],
    example:"等腰三角形作顶角平分线（三线合一）；梯形平移一腰" },

  { id:"m16", name:"坐标法",      cat:"几何",
    desc:"建立坐标系，用坐标表示几何量，将几何问题转化为代数计算。",
    topics:["coords","linear_fn","quad_fn","rotation","translation","trig_app"],
    example:"以直角顶点为原点建系，用两点距离公式求边长" },

  { id:"m26", name:"角度追踪法",  cat:"几何",
    desc:"利用角的等量关系（对顶角/平行线/圆周角等）逐步推算未知角度。",
    topics:["angle_relations","parallel_lines","circle_angle","polygon_angle","tri_basic"],
    example:"平行线同位角→内错角→三角形内角和→外角定理，逐步求∠x" },

  { id:"m27", name:"三视图法",    cat:"几何",
    desc:"通过正/侧/俯视图还原几何体，或由几何体画出三视图。",
    topics:["three_views","solid_geo","solid_vol"],
    example:"由三视图还原：正视图矩形+侧视图三角形+俯视图矩形→三棱柱" },

  // ── 综合类 ──────────────────────────────────────────────
  { id:"m13", name:"特殊化法",    cat:"综合",
    desc:"取特殊值或特殊情况验证猜想，找规律或快速排除选项。",
    topics:["linear_fn","quad_fn","number_line","sci_notation","approx_num"],
    example:"令x=0或x=1代入检验；取n=1,2,3归纳通项" },

  { id:"m17", name:"图表法",      cat:"综合",
    desc:"用图形或表格直观表示数量关系，辅助分析和解题。",
    topics:["stat_chart","mean_median","frequency","prob_method","variable_intro"],
    example:"用树状图列举概率；用频率分布直方图分析数据分布" },

  { id:"m28", name:"频率估概率法", cat:"综合",
    desc:"通过大量重复试验，用频率近似估计随机事件的概率。",
    topics:["prob","prob_method","frequency","stat_prob_app"],
    example:"投硬币1000次，正面出现492次，估计P(正面)≈0.492≈0.5" },

  // ── 思想类 ──────────────────────────────────────────────
  { id:"m18", name:"转化思想",    cat:"思想",
    desc:"将未知问题转化为已知问题，将复杂问题转化为简单问题。",
    topics:["similar","coords","solid_vol","arc_area","symmetry_axis"],
    example:"四边形面积→三角形面积之和；圆锥侧面→扇形面积" },

  { id:"m19", name:"分类讨论",    cat:"思想",
    desc:"按不同情况分类，分别讨论各种情况并综合结论。",
    topics:["linear_fn","quad_fn","inequality","abs_value","quad_eq_app"],
    example:"绝对值方程分正负讨论；二次函数顶点在区间内外分情况求最值" },

  { id:"m20", name:"方程思想",    cat:"思想",
    desc:"将实际问题抽象为方程（组），通过解方程得到答案。",
    topics:["linear_eq","equations","quad_eq","eq_app","fraction_eq_app","inequality_app"],
    example:"设路程为s，速度×时间=路程，列方程s/v₁+s/v₂=t" },

  { id:"m21", name:"函数思想",    cat:"思想",
    desc:"用函数观点分析变量间的对应关系，建立函数模型求解。",
    topics:["linear_fn","quad_fn","inverse_fn","fn_concept","quad_fn_app","inverse_fn_app"],
    example:"将面积S表示为边长x的函数S(x)，求顶点得最大面积" },

  { id:"m22", name:"数形结合",    cat:"思想",
    desc:"将代数与几何互相转化，用图形直观说明代数关系。",
    topics:["coords","linear_fn","quad_fn","number_line","inequality"],
    example:"用函数图像判断方程根个数；数轴表示不等式解集" },

  { id:"m23", name:"整体思想",    cat:"思想",
    desc:"将复杂表达式作为整体处理，避免繁琐展开，提高计算效率。",
    topics:["poly","factoring","equations","radical","power_rules"],
    example:"(x+y)²-2(x+y)+1视(x+y)为t，化为t²-2t+1=(t-1)²" },

  { id:"m29", name:"建模思想",    cat:"思想",
    desc:"将实际问题抽象为数学模型（方程/函数/不等式），解决后还原实际意义。",
    topics:["eq_app","quad_eq_app","quad_fn_app","fraction_eq_app","inequality_app","trig_app"],
    example:"增长率问题→x(1+r)²=y；最大利润→建二次函数求顶点" },

  { id:"m30", name:"期望值法",    cat:"思想",
    desc:"计算随机变量的期望值（平均收益），用于比较方案优劣的决策问题。",
    topics:["prob","prob_method","stat_prob_app"],
    example:"E=x₁P₁+x₂P₂+…，期望值大的方案更优" },
];

export { C, METHODS };
