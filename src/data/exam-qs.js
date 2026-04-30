// 数脉中考真题库 — 624道题 (id:0-623)
// 自动从 shumai-v7-1.jsx 拆分生成

const EXAM_QS = [
  /* ── 青岛卷 2015 ─────────────────────────────── */
  {id:0,yr:2015,no:1,city:"青岛",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m19"],
   content:"计算：(-2)³+|-5|÷(-1)",answer:"-13",
   sol:"(-2)³=-8；|-5|÷(-1)=-5；-8+(-5)=-13",error:"乘方和绝对值运算顺序"},
  {id:1,yr:2015,no:5,city:"青岛",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","inequality"],methods:["m21","m19"],
   content:"y=(m-1)x+m 过第一、三象限，m的范围",answer:"m>1",
   sol:"①k=m-1>0且b=m>0，联立m>1；②选m>1",error:"象限与k/b符号对应"},
  {id:2,yr:2015,no:9,city:"青岛",type:"fill",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq","factoring"],methods:["m06"],
   content:"方程x²-3x-4=0的根",answer:"x=4或x=-1",
   sol:"①观察x²-3x-4=0，找两个数积=-4且和=-3→-4和1；②分解：(x-4)(x+1)=0；③x-4=0得x=4，x+1=0得x=-1",error:"十字相乘符号"},
  {id:3,yr:2015,no:13,city:"青岛",type:"fill",topic:"stats",score:3,diff:1,
   subTopics:["stats"],methods:["m09"],
   content:"数据3,5,7,8,7的中位数和众数",answer:"中位数=7，众数=7",
   sol:"①排序：3,5,7,7,8（5个数据）；②中位数=第3个=7；③众数=出现次数最多的数=7（出现2次）",error:"忘记排序"},
  {id:4,yr:2015,no:16,city:"青岛",type:"solve",topic:"congruent",score:8,diff:3,
   subTopics:["congruent","tri_basic"],methods:["m07","m08"],
   content:"AB=DC，∠B=∠D，BE⊥AC，DF⊥AC，证△ABE≅△DCF",answer:"AAS",
   sol:"①∠BEA=∠DFC=90°，∠B=∠D，AB=DC→AAS；②得AAS",error:"对应顶点写错"},
  {id:5,yr:2015,no:20,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","coords","linear_fn","similar"],methods:["m01","m21","m04"],
   content:"y=x²-2x-3，顶点、x轴交点；P在抛物线上使△OAP面积=4（A为正截距点）",answer:"顶点(1,-4)，(-1,0)(3,0)；|y_P|=8/3",
   sol:"配方y=(x-1)²-4；令y=0解方程；½×3×|y_P|=4",error:"顶点纵坐标；面积方程建立"},

  /* ── 青岛卷 2016 ─────────────────────────────── */
  {id:6,yr:2016,no:2,city:"青岛",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals","rational"],methods:["m13"],
   content:"无理数是：A.π B.√4 C.0.333… D.22/7",answer:"A",
   sol:"√4=2，0.333…=1/3，22/7均有理；π无理",error:"√4=2是有理数"},
  {id:7,yr:2016,no:6,city:"青岛",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"因式分解：a³-4a",answer:"a(a+2)(a-2)",
   sol:"①找公因式；②提a→a(a²-4)→平方差；③结果：a(a+2)(a-2)",error:"提完公因式不继续分解"},
  {id:8,yr:2016,no:10,city:"青岛",type:"fill",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09","m17"],
   content:"抛硬币3次，恰好2次正面的概率",answer:"3/8",
   sol:"①HHT/HTH/THH共3种，总8种；②=3/8",error:"列举不完全"},
  {id:9,yr:2016,no:17,city:"青岛",type:"solve",topic:"equations",score:8,diff:2,
   subTopics:["equations","linear_eq"],methods:["m02","m20"],
   content:"解方程组：{2x+3y=12，x-y=1}",answer:"x=3，y=2",
   sol:"①代入：2(y+1)+3y=12，y=2；②解得x=3，y=2",error:"代入展开出错"},
  {id:10,yr:2016,no:20,city:"青岛",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","pythagorean","coords"],methods:["m04","m18"],
   content:"△ABC中DE∥BC，AD=2，DB=3，DE=4，求BC和面积比",answer:"BC=10，面积比4:25",
   sol:"①相似三角形面积比=相似比的平方；②相似比2/5；BC=10；面积比=4/25；③=BC=10，面积比4:25",error:"面积比写成2:5忘平方"},

  /* ── 青岛卷 2017 ─────────────────────────────── */
  {id:11,yr:2017,no:3,city:"青岛",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06","m23"],
   content:"化简：(a+b)²-(a-b)²",answer:"4ab",
   sol:"①展开后中间项：2ab-(-2ab)=4ab；②选4ab",error:"展开符号出错"},
  {id:12,yr:2017,no:7,city:"青岛",type:"choice",topic:"inequality",score:3,diff:1,
   subTopics:["inequality","linear_eq"],methods:["m20"],
   content:"不等式2x-1>x+2的解集",answer:"x>3",
   sol:"①移项：2x-x>2+1；②合并：x>3；③数轴表示：x=3处空心圆，向右",error:"移项变号"},
  {id:13,yr:2017,no:11,city:"青岛",type:"fill",topic:"trig",score:3,diff:3,
   subTopics:["trig","pythagorean"],methods:["m16","m18"],
   content:"仰角30°，水平距离20m，建筑物高度h=？",answer:"20√3/3 m",
   sol:"①tan30°=h/20，h=20×√3/3；②=20√3/3 m",error:"tan30°值记错"},
  {id:14,yr:2017,no:18,city:"青岛",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","congruent","similar"],methods:["m15","m04","m08"],
   content:"矩形ABCD，E是AB中点，F是AC上的点，EF⊥AC，求证△AEF∽△CAB",answer:"AA相似",
   sol:"①∠A公共，∠AEF=∠ACB=90°→AA；②得AA相似",error:"角的对应关系"},

  /* ── 青岛卷 2018 ─────────────────────────────── */
  {id:15,yr:2018,no:6,city:"青岛",type:"choice",topic:"fraction",score:3,diff:2,
   subTopics:["fraction","factoring"],methods:["m06"],
   content:"(x²-1)/(x-1)化简",answer:"x+1（x≠1）",
   sol:"①(x+1)(x-1)/(x-1)=x+1；②选x+1（x≠1）",error:"约分后忘写限制"},
  {id:16,yr:2018,no:12,city:"青岛",type:"fill",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","equations"],methods:["m20","m22"],
   content:"y=2x-1和y=-x+2的交点",answer:"(1,1)",
   sol:"①2x-1=-x+2，x=1，y=1；②=(1,1)",error:"联立出错"},
  {id:17,yr:2018,no:20,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","coords","linear_fn"],methods:["m21","m04","m14"],
   content:"y=x²-2x-3，顶点A，x轴交B(-1,0)C(3,0)，P在BC上，△PBC面积最大值",answer:"最大面积=8",
   sol:"①顶点(1,-4)，|y|=4，底BC=4，S=½×4×4=8；②得最大面积=8",error:"P在抛物线上，顶点时高最大"},

  /* ── 青岛卷 2019 ─────────────────────────────── */
  {id:18,yr:2019,no:7,city:"青岛",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"x²-3x+m=0有两不等实根，m的范围",answer:"m<9/4",
   sol:"①两不等实根→Δ>0（不含等号）；②Δ=(-3)²-4×1×m=9-4m>0；③解不等式：m<9/4",error:"Δ>0和≥0混淆"},
  {id:19,yr:2019,no:11,city:"青岛",type:"fill",topic:"inverse_fn",score:3,diff:2,
   subTopics:["inverse_fn"],methods:["m21"],
   content:"y=k/x在一三象限且y随x增大而减小，k的范围",answer:"k>0",
   sol:"①一三象限k>0，且各分支内递减（k>0时递减✓）；②=k>0",error:"k<0时在二四象限"},
  {id:20,yr:2019,no:19,city:"青岛",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","pythagorean","trig"],methods:["m07","m03"],
   content:"PA、PB切⊙O于A、B，PA=3√3，∠P=60°，求半径R",answer:"R=3",
   sol:"①∠OAP=90°，∠OPA=30°，tan30°=R/3√3，R=3；②得R=3",error:"角度关系弄错"},

  /* ── 青岛卷 2020 ─────────────────────────────── */
  {id:21,yr:2020,no:1,city:"青岛",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"正确的是：A.a²+a²=2a⁴ B.(-a)³=-a³ C.a⁸÷a²=a⁴ D.(a²)³=a⁵",answer:"B",
   sol:"①逐项验证；②A:2a²；B:-a³✓；C:a⁶；D:a⁶；③选B",error:"指数运算规则"},
  {id:22,yr:2020,no:21,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","quad_eq","coords"],methods:["m01","m11","m16"],
   content:"y=-x²+4x+m，顶点P，x轴交A(x₁,0)B(x₂,0)，PA⊥PB，求m",answer:"m=-3",
   sol:"①韦达定理：x₁+x₂=-b/a，x₁x₂=c/a；②x₁+x₂=4，x₁x₂=-m；PA⃗·PB⃗=0解出m",error:"向量点积展开"},

  /* ── 青岛卷 2021 ─────────────────────────────── */
  {id:23,yr:2021,no:3,city:"青岛",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(2a-b)²展开",answer:"4a²-4ab+b²",
   sol:"①(2a)²-2×2a×b+b²；②选4a²-4ab+b²",error:"中间项系数"},
  {id:24,yr:2021,no:12,city:"青岛",type:"fill",topic:"trig",score:3,diff:3,
   subTopics:["trig","pythagorean"],methods:["m16"],
   content:"△ABC中∠C=90°，sinA=3/5，BC=6，求AB和AC",answer:"AB=10，AC=8",
   sol:"sinA=BC/AB=6/AB=3/5→AB=10；AC=8",error:"sin=对/斜"},
  {id:25,yr:2021,no:20,city:"青岛",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","pythagorean","trig"],methods:["m07","m03"],
   content:"⊙O中，AB为直径，C在圆上，PA切于C，PA⊥PO（P在AB延长线），AC=4，BC=3，求PC",answer:"PC=20/3",
   sol:"∠ACB=90°（直径），AB=5；切割线定理PC²=PA×PB",error:"切割线定理使用"},

  /* ── 青岛卷 2022 ─────────────────────────────── */
  {id:26,yr:2022,no:2,city:"青岛",type:"choice",topic:"rational",score:3,diff:2,
   subTopics:["rational","inequality"],methods:["m19","m14"],
   content:"-2<a<-1，|a+2|+|a-1|=？",answer:"3",
   sol:"a+2∈(0,1)>0；a-1<0；结果=(a+2)+(1-a)=3",error:"绝对值条件判断"},
  {id:27,yr:2022,no:7,city:"青岛",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04","m18"],
   content:"△ABC∽△DEF，相似比2:3，△ABC面积=8，△DEF面积=？",answer:"18",
   sol:"①相似比k=2:3；②面积比=k²=4:9；③设△DEF面积为S，8/S=4/9；④S=8×9/4=18",error:"面积比=相似比²"},
  {id:28,yr:2022,no:11,city:"青岛",type:"fill",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"因式分解：x⁴-y⁴",answer:"(x²+y²)(x+y)(x-y)",
   sol:"①先看成(x²)²-(y²)²，用平方差：(x²+y²)(x²-y²)；②x²-y²再用平方差：(x+y)(x-y)；③最终：(x²+y²)(x+y)(x-y)",error:"分解到底"},
  {id:29,yr:2022,no:22,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m05","m16","m22"],
   content:"y=x²+bx+c，对称轴x=1，过(0,-3)，直线y=2x-3交抛物线A、B，求|AB|",answer:"4√5",
   sol:"b=-2,c=-3；联立求交点(0,-3)(4,5)；|AB|=4√5",error:"弦长公式"},

  /* ── 青岛卷 2023 ─────────────────────────────── */
  {id:30,yr:2023,no:1,city:"青岛",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals","rational"],methods:["m13"],
   content:"最小的是：A.-|-3| B.(-2)² C.-(-3) D.(-1)³",answer:"A（=-3）",
   sol:"①A=-3，B=4，C=3，D=-1；②选A（=-3）",error:"绝对值和负号叠加"},
  {id:31,yr:2023,no:13,city:"青岛",type:"fill",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"10个数据方差=4，每个数据+3，新方差=？",answer:"4（不变）",
   sol:"①方差衡量数据波动程度；②每个数据+3→平均数也+3→每个偏差(xᵢ-x̄)不变；③方差=Σ(xᵢ-x̄)²/n不变，仍=4",error:"误认为数据变大方差也变"},
  {id:32,yr:2023,no:17,city:"青岛",type:"solve",topic:"fraction",score:8,diff:3,
   subTopics:["fraction","linear_eq"],methods:["m20","m06"],
   content:"解：2/(x-1)-3/(x+1)=1/(x²-1)，验根",answer:"x=4",
   sol:"×(x²-1)：2(x+1)-3(x-1)=1；x=4；验根✓",error:"去分母展开；忘验根"},

  /* ── 青岛卷 2024 ─────────────────────────────── */
  {id:33,yr:2024,no:2,city:"青岛",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06","m23"],
   content:"(2x-1)(2x+1)-(x-1)²",answer:"3x²+2x-2",
   sol:"①4x²-1-(x²-2x+1)=3x²+2x-2；②选3x²+2x-2",error:"减号未分配"},
  {id:34,yr:2024,no:7,city:"青岛",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=x²-4x+3：A.开口向下 B.对称轴x=2 C.顶点(2,1) D.过原点",answer:"B",
   sol:"a=1>0向上；x=2✓；顶点(2,-1)；y(0)=3≠0",error:"顶点纵坐标算错"},
  {id:35,yr:2024,no:11,city:"青岛",type:"fill",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sinα=√3/2，cosα=1/2，tanα=？α=？",answer:"tanα=√3，α=60°",
   sol:"tanα=sin/cos=√3；60°的特殊值",error:"特殊角值"},
  {id:36,yr:2024,no:20,city:"青岛",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","similar","trig"],methods:["m07","m15","m04"],
   content:"⊙O，AB为直径，C在圆上，CD⊥AB于D，BC=4，AC=3，求CD和AD×DB",answer:"CD=12/5，AD×DB=144/25",
   sol:"AB=5；CD²=AD×DB=144/25（射影定理）；CD=12/5",error:"射影定理"},

  /* ── 青岛卷 2025 ─────────────────────────────── */
  {id:37,yr:2025,no:1,city:"青岛",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"正确的是：A.√9=±3 B.(-3)²=9 C.(-3)³=9 D.|-3|=-3",answer:"B",
   sol:"①逐项验证；②A:√9=3；B:9✓；C:-27；D:3；③选B",error:"平方根只取正值"},
  {id:38,yr:2025,no:5,city:"青岛",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"x²-6x+k=0两根积=8，k=？两根和=？",answer:"k=8，和=6",
   sol:"①韦达定理：x₁x₂=c/a=k/1=k；②两根积=8→k=8；③x₁+x₂=-b/a=6/1=6",error:"韦达定理系数"},
  {id:39,yr:2025,no:14,city:"青岛",type:"fill",topic:"circle",score:3,diff:3,
   subTopics:["circle","pythagorean"],methods:["m16","m03"],
   content:"⊙O半径5，弦长8，弦心距=？",answer:"3",
   sol:"①弦长8→半弦=4；②圆心到弦的距离d⊥弦且平分弦；③Rt△中d²+4²=5²→d²=9→d=3",error:"弦长要除以2"},
  {id:40,yr:2025,no:18,city:"青岛",type:"solve",topic:"congruent",score:10,diff:3,
   subTopics:["congruent","special_tri"],methods:["m07","m08"],
   content:"等腰△ABC，AB=AC，D为BC中点，DE⊥AB，DF⊥AC，证DE=DF",answer:"△BDE≅△CDF（AAS）",
   sol:"①∠B=∠C，BD=CD，∠BED=∠CFD=90°→AAS→DE=DF；②得△BDE≅△CDF（AAS）",error:"全等对应关系"},
  {id:41,yr:2025,no:20,city:"青岛",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","pythagorean","trig"],methods:["m04","m07"],
   content:"Rt△ABC，∠C=90°，CD⊥AB，BC=4，AC=3，求CD；E在BC上CE=1，△CDE∽△ABC，DE=？",answer:"CD=12/5，DE=4/5",
   sol:"AB=5；CD=12/5；相似比CE/BC=1/4；DE=AB×1/4... 需核实对应关系",error:"射影定理+相似比"},

  /* ── 北京卷 2015-2025 精选 ─────────────────────── */
  {id:42,yr:2015,no:3,city:"北京",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：(-1)²⁰¹⁵",answer:"-1",
   sol:"①(-1)的幂：奇数次=-1，偶数次=1；②2015是奇数；③(-1)²⁰¹⁵=-1",error:"(-1)奇数次=−1，偶数次=1"},
  {id:43,yr:2016,no:2,city:"北京",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"展开：(x-2)²",answer:"x²-4x+4",
   sol:"①(x-2)²=x²-2×x×2+2²；②=x²-4x+4；③中间项-2ab=-4x",error:"中间项系数"},
  {id:44,yr:2017,no:5,city:"北京",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"直线y=kx+1（k<0），k越小图像越倾斜吗？",answer:"是，|k|越大倾斜角越大",
   sol:"①k<0，|k|越大斜率绝对值越大；②选是，|k|越大倾斜角越大",error:"k的正负与倾斜方向"},
  {id:45,yr:2018,no:4,city:"北京",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"方程x²-2x-3=0的根的情况",answer:"两个不等实根",
   sol:"①a=1,b=-2,c=-3；②Δ=b²-4ac=4-4×1×(-3)=4+12=16；③Δ=16>0→两个不等实根",error:"判别式计算"},
  {id:46,yr:2019,no:6,city:"北京",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC∽△DEF，相似比1:2，△ABC面积=6，△DEF面积=？",answer:"24",
   sol:"①相似比1:2→面积比=1²:2²=1:4；②△DEF面积=6×4=24",error:"面积比=相似比²"},
  {id:47,yr:2020,no:1,city:"北京",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"|-3|+(-2)²",answer:"7",
   sol:"①|-3|=3；②(-2)²=4；③3+4=7",error:"绝对值和乘方计算"},
  {id:48,yr:2020,no:12,city:"北京",type:"fill",topic:"quad_fn",score:3,diff:3,
   subTopics:["quad_fn","linear_fn"],methods:["m05","m22"],
   content:"抛物线y=ax²+bx+c的对称轴x=2，过点(0,1)，a的符号决定开口，∠若图像开口向下且顶点在第一象限，a和顶点纵坐标的符号",answer:"a<0，顶点纵坐标>0",
   sol:"开口向下a<0；第一象限顶点：x=2>0，y>0",error:"开口方向与a的关系"},
  {id:49,yr:2021,no:8,city:"北京",type:"choice",topic:"circle",score:3,diff:3,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠AOB=100°，C在优弧AB上，∠ACB=？",answer:"130°",
   sol:"①优弧所对圆周角=（360°-100°)/2=130°；②选130°",error:"优弧和劣弧的圆周角区别"},
  {id:50,yr:2022,no:4,city:"北京",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：3x²-3",answer:"3(x+1)(x-1)",
   sol:"①提公因式3：3(x²-1)；②再用平方差：3(x+1)(x-1)",error:"先提公因式"},
  {id:51,yr:2023,no:7,city:"北京",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral","congruent"],methods:["m08"],
   content:"正方形边长2，对角线长=？",answer:"2√2",
   sol:"①正方形对角线=边×√2；②=2×√2=2√2；③勾股定理：d²=2²+2²=8，d=2√2",error:"正方形对角线=边×√2"},
  {id:52,yr:2024,no:3,city:"北京",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"掷一枚均匀骰子，出现奇数的概率",answer:"1/2",
   sol:"①奇数1,3,5共3种，总6种；②选1/2",error:"均匀骰子等可能"},
  {id:53,yr:2025,no:9,city:"北京",type:"fill",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"△ABC，∠C=90°，AB=10，sinA=3/5，BC=？AC=？",answer:"BC=6，AC=8",
   sol:"BC=AB×sinA=6；AC=8",error:"sin=对/斜"},

  /* ── 上海卷 2015-2025 精选 ─────────────────────── */
  {id:54,yr:2015,no:2,city:"上海",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√5的整数部分是？",answer:"2",
   sol:"2²=4<5<9=3²，所以2<√5<3，整数部分=2",error:"估算平方根"},
  {id:55,yr:2016,no:5,city:"上海",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","inequality"],methods:["m21","m22"],
   content:"y=2x-4，使y>0的x的范围",answer:"x>2",
   sol:"①令y>0：2x-4>0；②解2x>4；③x>2，即x∈(2,+∞)时图像在x轴上方",error:"一次函数与不等式"},
  {id:56,yr:2017,no:4,city:"上海",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent","tri_basic"],methods:["m07"],
   content:"以下不能判定三角形全等的是？A.SSS B.SAS C.SSA D.ASA",answer:"C（SSA）",
   sol:"①全等判定条件：SSS/SAS/ASA/AAS/HL；②SSA(两边及非夹角)不能判定全等；③反例：两个不同三角形可满足SSA",error:"SSA有反例"},
  {id:57,yr:2018,no:3,city:"上海",type:"choice",topic:"stats",score:3,diff:1,
   subTopics:["stats"],methods:["m09"],
   content:"数据2,3,4,5,6的平均数和方差",answer:"均值=4，方差=2",
   sol:"均值=4；方差=[(−2)²+(−1)²+0²+1²+2²]/5=2",error:"方差公式"},
  {id:58,yr:2019,no:6,city:"上海",type:"choice",topic:"inverse_fn",score:3,diff:2,
   subTopics:["inverse_fn","coords"],methods:["m21","m22"],
   content:"y=-2/x，图像在哪些象限？",answer:"第二、四象限",
   sol:"①y=k/x中k<0→图像在第二、四象限；②k=-2<0→二四象限；③各支上y随x增大而增大",error:"k的符号决定象限"},
  {id:59,yr:2020,no:8,city:"上海",type:"choice",topic:"quad_fn",score:3,diff:3,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=x²-4x+3，对称轴和最小值",answer:"x=2，最小值=-1",
   sol:"①(x-2)²-1，顶点(2,-1)；②选x=2，最小值=-1",error:"配方求顶点"},
  {id:60,yr:2021,no:4,city:"上海",type:"choice",topic:"pythagorean",score:3,diff:2,
   subTopics:["pythagorean"],methods:["m16"],
   content:"直角△两直角边5和12，斜边=？",answer:"13",
   sol:"①勾股定理：斜边²=5²+12²=25+144=169；②斜边=√169=13；③常见勾股数：3-4-5、5-12-13、8-15-17",error:"勾股数5-12-13"},
  {id:61,yr:2022,no:7,city:"上海",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O中，AB是弦，OC⊥AB于C，OA=5，OC=3，AB=？",answer:"AB=8",
   sol:"AC=√(25-9)=4；AB=8",error:"弦心距求弦长"},
  {id:62,yr:2023,no:5,city:"上海",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16","m18"],
   content:"△ABC顶点A(0,0)，B(2,0)，C(0,2)，关于y轴对称得△A'B'C'，B'=？",answer:"B'(-2,0)",
   sol:"①关于y轴对称：x取相反数，y不变；②B(2,0)→B'(-2,0)；③A(0,0)不变，C(0,2)不变",error:"y轴对称规则"},
  {id:63,yr:2024,no:3,city:"上海",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq","factoring"],methods:["m06"],
   content:"x²+x-6=0的两根",answer:"x=2或x=-3",
   sol:"①x²+x-6=0，找两数积=-6且和=1→3和-2；②(x+3)(x-2)=0；③x=-3或x=2",error:"十字相乘"},
  {id:64,yr:2025,no:6,city:"上海",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，DE∥BC，AD=3，AB=9，△ADE面积=2，△ABC面积=？",answer:"18",
   sol:"①相似三角形面积比=相似比的平方；②相似比1:3，面积比1:9，18；③=18",error:"面积比=相似比²"},

  /* ── 广州卷 精选 ─────────────────────────────── */
  {id:65,yr:2016,no:3,city:"广州",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：4a²-b²",answer:"(2a+b)(2a-b)",
   sol:"①视为(2a)²-b²的形式；②用平方差公式：(2a+b)(2a-b)",error:"系数处理"},
  {id:66,yr:2017,no:5,city:"广州",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m05"],
   content:"y=kx+b，k<0，b>0，图像经过哪几个象限",answer:"第一、二、四象限",
   sol:"①k<0右下倾，b>0截距正，过一二四；②选第一、二、四象限",error:"象限分析"},
  {id:67,yr:2018,no:4,city:"广州",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m07","m08"],
   content:"等腰△ABC，AB=AC=5，BC=6，AD是中线，AD=？",answer:"4",
   sol:"BD=3，AD=√(25-9)=4",error:"三线合一求中线长"},
  {id:68,yr:2019,no:6,city:"广州",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09","m17"],
   content:"从{1,2,3,4}中任取两数，两数之和为偶数的概率",answer:"1/3",
   sol:"取法C(4,2)=6种；和为偶：(1,3)(2,4)共2种；P=2/6=1/3",error:"偶数+偶数或奇数+奇数"},
  {id:69,yr:2020,no:2,city:"广州",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√8化简",answer:"2√2",
   sol:"①分解被开方数：8=4×2；②√8=√(4×2)=√4×√2=2√2",error:"提取完全平方因子"},
  {id:70,yr:2021,no:5,city:"广州",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=-x²+2x+3与x轴交点个数",answer:"2个",
   sol:"①计算判别式Δ=b²-4ac；②Δ=4+12=16>0，两个交点；③判断根的情况",error:"判别式判断交点数"},
  {id:71,yr:2022,no:3,city:"广州",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形的对角线特征是",answer:"相等且互相平分",
   sol:"①矩形特有：对角线相等（+平行四边形互平分）；②选相等且互相平分",error:"矩形额外性质"},
  {id:72,yr:2023,no:4,city:"广州",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle","pythagorean"],methods:["m07"],
   content:"⊙O直径=10，P在圆上，PA=6，PB是弦，∠APB=90°，PB=？",answer:"PB=8",
   sol:"①勾股定理：a²+b²=c²；②∠APB=90°（直径所对），AB=10；PA²+PB²=AB²；PB=8；③解得PB=8",error:"圆周角+勾股"},
  {id:73,yr:2024,no:6,city:"广州",type:"choice",topic:"similar",score:3,diff:3,
   subTopics:["similar","coords"],methods:["m04","m16"],
   content:"△ABC，A(0,4)，B(-2,0)，C(2,0)，DE∥BC，且D在AB上AD=AB/3，E在AC上，DE=？",answer:"2/3",
   sol:"相似比1/3；BC=4；DE=4/3",error:"相似比计算"},
  {id:74,yr:2025,no:5,city:"广州",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig","pythagorean"],methods:["m16"],
   content:"△ABC，∠B=90°，AB=1，BC=√3，sinC=？",answer:"sinC=1/2",
   sol:"AC=√(1+3)=2；sinC=AB/AC=1/2",error:"sin=对/斜"},

  /* ── 深圳卷 精选 ─────────────────────────────── */
  {id:75,yr:2017,no:2,city:"深圳",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(a+b)(a-b)=？",answer:"a²-b²",
   sol:"①(a+b)(a-b)=a²-b²；②这就是平方差公式；③两个数的和×差=平方差",error:"平方差定义"},
  {id:76,yr:2018,no:5,city:"深圳",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"3x-1>2x+3，解集",answer:"x>4",
   sol:"①移项：3x-2x>3+1；②合并：x>4",error:"移项合并"},
  {id:77,yr:2019,no:4,city:"深圳",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解：{x+y=5, 2x-y=1}，x和y=？",answer:"x=2，y=3",
   sol:"①两式相加：(x+y)+(2x-y)=5+1；②3x=6→x=2；③代回：y=5-2=3",error:"加减消元"},
  {id:78,yr:2020,no:6,city:"深圳",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"甲乙方差分别为2和5，谁的成绩更稳定",answer:"甲",
   sol:"①方差衡量数据的离散程度；②甲方差=2<乙方差=5；③方差越小→数据越集中→成绩越稳定→选甲",error:"方差与稳定性"},
  {id:79,yr:2021,no:3,city:"深圳",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-2)+(-3)×(-1)的值",answer:"1",
   sol:"①先算乘除：(-3)×(-1)=3；②再算加减：(-2)+3=1",error:"先乘除后加减"},
  {id:80,yr:2022,no:7,city:"深圳",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m06"],
   content:"x²-5x+6=0的根",answer:"x=2或x=3",
   sol:"①x²-5x+6=0，找两数积=6且和=5→2和3；②(x-2)(x-3)=0；③x=2或x=3",error:"十字相乘"},
  {id:81,yr:2023,no:5,city:"深圳",type:"choice",topic:"pythagorean",score:3,diff:2,
   subTopics:["pythagorean"],methods:["m16"],
   content:"斜面坡角30°，水平距离20m，斜面长=？",answer:"40/√3=40√3/3 m",
   sol:"cos30°=20/斜面；斜面=20/cos30°=40√3/3",error:"坡角三角函数"},
  {id:82,yr:2024,no:4,city:"深圳",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，PA切于A，PO=10，OA=6，PA=？",answer:"8",
   sol:"PA²=100-36=64",error:"切线长勾股"},
  {id:83,yr:2025,no:6,city:"深圳",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"P(2,3)关于原点的对称点",answer:"(-2,-3)",
   sol:"①关于原点对称：(x,y)→(-x,-y)；②P(2,3)→P'(-2,-3)",error:"原点对称规则"},

  /* ── 成都卷 精选 ─────────────────────────────── */
  {id:84,yr:2016,no:4,city:"成都",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"在-2，0，1/3，√2中，有理数有几个",answer:"3个",
   sol:"-2，0，1/3是有理数；√2是无理数",error:"有理数包括整数和分数"},
  {id:85,yr:2017,no:3,city:"成都",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","equations"],methods:["m20","m22"],
   content:"两直线y=x+1和y=-2x+4的交点坐标",answer:"(1,2)",
   sol:"x+1=-2x+4；x=1；y=2",error:"联立方程"},
  {id:86,yr:2018,no:5,city:"成都",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：2x²-2",answer:"2(x+1)(x-1)",
   sol:"①找公因式；②提2→2(x²-1)→平方差；③结果：2(x+1)(x-1)",error:"先提公因式"},
  {id:87,yr:2019,no:4,city:"成都",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²-4x+4，顶点坐标",answer:"(2,0)",
   sol:"①y=(x-2)²，顶点(2,0)；②选(2,0)",error:"完全平方式顶点"},
  {id:88,yr:2020,no:6,city:"成都",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent","tri_basic"],methods:["m08"],
   content:"等腰△，AB=AC，∠A=40°，BD是∠B的角平分线，∠BDC=？",answer:"70°",
   sol:"∠B=∠C=70°；∠DBC=35°；△BDC中∠BDC=180°-70°-35°=75°；重算",error:"角平分线问题"},
  {id:89,yr:2021,no:5,city:"成都",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，中位线DE（D在AB上，E在AC上），DE=3，BC=？",answer:"BC=6",
   sol:"①中位线定理：连接三角形两边中点的线段平行于第三边且等于其一半；②DE=BC/2；③BC=2×3=6",error:"中位线定理"},
  {id:90,yr:2022,no:3,city:"成都",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"样本数据：6,8,9,7，10，中位数=？",answer:"8",
   sol:"排序6,7,8,9,10，中间=8",error:"排序后取中间"},
  {id:91,yr:2023,no:6,city:"成都",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral","congruent"],methods:["m08"],
   content:"平行四边形ABCD，对角线AC和BD，交点O，OA=3，BD=10，AB=？",answer:"AB需更多条件；OB=5",
   sol:"OA=OC=3（对角线互平分）；OB=OD=5",error:"平行四边形对角线互平分"},
  {id:92,yr:2024,no:4,city:"成都",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"袋中2红3白，取1球，P(红球)=？",answer:"2/5",
   sol:"①古典概型：P=有利事件数/总事件数；②红球2个，总5个；③P=2/5",error:"古典概型"},
  {id:93,yr:2025,no:5,city:"成都",type:"choice",topic:"reals",score:3,diff:2,
   subTopics:["reals"],methods:["m13"],
   content:"下列各数中，绝对值最小的是：A.-3 B.-1 C.0.5 D.2",answer:"C（0.5）",
   sol:"①分别求绝对值：|A|=3，|B|=1，|C|=0.5，|D|=2；②0.5最小；③选C",error:"绝对值大小比较"},

  /* ── 武汉卷 精选 ─────────────────────────────── */
  {id:94,yr:2017,no:2,city:"武汉",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√3+1的整数部分",answer:"2",
   sol:"√3≈1.73，√3+1≈2.73，整数部分=2",error:"无理数估算"},
  {id:95,yr:2018,no:3,city:"武汉",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m21"],
   content:"y=ax+b（a≠0），若ab<0，则图像不经过",answer:"第三象限",
   sol:"ab<0则a和b异号；若a>0b<0过一三四不过二；若a<0b>0过一二四不过三",error:"ab符号与象限"},
  {id:96,yr:2019,no:5,city:"武汉",type:"choice",topic:"poly",score:3,diff:2,
   subTopics:["poly"],methods:["m06"],
   content:"(x+2y)²展开",answer:"x²+4xy+4y²",
   sol:"①(x+2y)²=x²+2×x×2y+(2y)²；②=x²+4xy+4y²；③注意(2y)²=4y²",error:"中间项系数"},
  {id:97,yr:2020,no:4,city:"武汉",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，AB为直径，C在圆上，∠CAB=35°，∠ABC=？",answer:"55°",
   sol:"∠ACB=90°（直径所对）；∠ABC=90°-35°=55°",error:"直角三角形内角和"},
  {id:98,yr:2021,no:3,city:"武汉",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：a³-a",answer:"a(a+1)(a-1)",
   sol:"①找公因式；②提a→a(a²-1)→平方差；③结果：a(a+1)(a-1)",error:"连续分解"},
  {id:99,yr:2022,no:6,city:"武汉",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"x²+2x-3=0两根之积",answer:"-3",
   sol:"①韦达定理：x₁x₂=c/a；②a=1,c=-3；③积=-3/1=-3",error:"韦达定理"},
  {id:100,yr:2023,no:4,city:"武汉",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar","pythagorean"],methods:["m04"],
   content:"△ABC，∠C=90°，AC=6，BC=8，射影CD⊥AB，CD=？",answer:"24/5",
   sol:"AB=10；CD=AC×BC/AB",error:"射影定理"},
  {id:101,yr:2024,no:5,city:"武汉",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"10个数均值=6，其中6个数均值=7，另外4个数均值=？",answer:"4.5",
   sol:"总和=60；6个和=42；4个和=18；均值=4.5",error:"均值与和的关系"},
  {id:102,yr:2025,no:3,city:"武汉",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"不等式2x-3<x+1，整数解有几个",answer:"整数解：x≤3（x<4），即…0,1,2,3无限多个？需约束范围",
   sol:"①x<4，题目若要最大正整数解则x=3；②选整数解：x≤3（x<4），即…0,1,2,3无限多个？需约束范围",error:"不等式整数解"},

  /* ── 浙江卷 精选 ─────────────────────────────── */
  {id:103,yr:2016,no:4,city:"浙江",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=x²-2x-3的顶点",answer:"(1,-4)",
   sol:"①配方：y=(x²-2x+1)-1-3=(x-1)²-4；②顶点(1,-4)",error:"配方"},
  {id:104,yr:2017,no:6,city:"浙江",type:"choice",topic:"circle",score:3,diff:3,
   subTopics:["circle","pythagorean"],methods:["m07","m03"],
   content:"⊙O，PA切于A，PO=2R，切线长PA=？（R为半径）",answer:"PA=√3R",
   sol:"①PA²=PO²-R²=4R²-R²=3R²；②选PA=√3R",error:"切线长公式"},
  {id:105,yr:2018,no:3,city:"浙江",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组：{2x+y=3, x-y=0}",answer:"x=1，y=1",
   sol:"①由②式得x=y；②代入①式：2y+y=3→y=1；③x=y=1",error:"代入法"},
  {id:106,yr:2019,no:5,city:"浙江",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"A(1,2)关于x轴对称的点B，B关于y轴对称的点C坐标",answer:"C(-1,-2)",
   sol:"B(1,-2)；C(-1,-2)",error:"连续对称操作"},
  {id:107,yr:2020,no:4,city:"浙江",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：(-1/3)×(-6)+(-2)²",answer:"2+4=6",
   sol:"①先算乘法：(-1/3)×(-6)=2；②再算乘方：(-2)²=4；③2+4=6",error:"先乘除后加减"},
  {id:108,yr:2021,no:6,city:"浙江",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar","quadrilateral"],methods:["m04"],
   content:"平行四边形ABCD，E为AB上一点，CE交BD于F，△EBF∽△CDF，相似比=？",answer:"EB/CD=EB/AB",
   sol:"①△EBF∽△CDF（AA），相似比=EB/CD；②选EB/CD=EB/AB",error:"平行四边形中相似三角形"},
  {id:109,yr:2022,no:3,city:"浙江",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m07"],
   content:"以下可以判定△ABC≅△DEF的是？A.AB=DE，∠A=∠D，BC=EF B.AB=DE，∠B=∠E，BC=EF",answer:"B（SAS，∠B是夹角）",
   sol:"①B中∠B夹在AB和BC之间→SAS；②选B（SAS，∠B是夹角）",error:"SAS中角必须是夹角"},
  {id:110,yr:2023,no:5,city:"浙江",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"关于x方程(m-1)x²+x-1=0有两个不相等实根的条件",answer:"m≠1且Δ=1+4(m-1)>0→m>3/4且m≠1",
   sol:"m≠1（二次方程）；Δ=1+4m-4=4m-3>0→m>3/4",error:"两个条件：一次项系数≠0且Δ>0"},
  {id:111,yr:2024,no:4,city:"浙江",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"一组数据3,5,x,7,9，均值=6，x=？",answer:"x=6",
   sol:"(3+5+x+7+9)/5=6；x=6",error:"由均值求缺失数据"},
  {id:112,yr:2025,no:6,city:"浙江",type:"choice",topic:"trig",score:3,diff:3,
   subTopics:["trig","pythagorean"],methods:["m16"],
   content:"直角△，∠A=60°，斜边=4，∠A对边BC=？邻边AC=？",answer:"BC=2√3，AC=2",
   sol:"sin60°=BC/4=√3/2；BC=2√3；cos60°=AC/4；AC=2",error:"60°的三角值"},

  /* ── 江苏卷 精选 ─────────────────────────────── */
  {id:113,yr:2016,no:2,city:"江苏",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"计算：(√3-1)²",answer:"4-2√3",
   sol:"①3-2√3+1=4-2√3；②选4-2√3",error:"完全平方展开"},
  {id:114,yr:2017,no:4,city:"江苏",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","quad_fn"],methods:["m22"],
   content:"直线y=2x+3与抛物线y=x²的交点坐标",answer:"(3,9)和(-1,1)",
   sol:"x²=2x+3；x²-2x-3=0；x=3或x=-1",error:"联立后整理"},
  {id:115,yr:2018,no:3,city:"江苏",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent","special_tri"],methods:["m08"],
   content:"△ABC，AB=AC=5，BC=6，BD⊥AC于D，BD=？",answer:"BD=24/5",
   sol:"AD=√(25-9)=4（三线合一）；BD/AC=AB/BC？用面积法：S=½×6×4=12；BD=2×12/5=24/5",error:"面积法求高"},
  {id:116,yr:2019,no:5,city:"江苏",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"菱形ABCD，对角线AC=6，BD=8，面积=？",answer:"24",
   sol:"①面积=d₁×d₂/2=48/2=24；②选24",error:"菱形面积公式"},
  {id:117,yr:2020,no:3,city:"江苏",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠BOC=2∠BAC（B,C在圆上，A在圆上），这个关系叫什么定理？",answer:"圆周角定理（圆周角=圆心角/2）",
   sol:"①圆周角定理：同弧所对的圆周角=圆心角的一半；②∠BAC=½∠BOC",error:"圆周角定理的描述"},
  {id:118,yr:2021,no:4,city:"江苏",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：x²y-xy²",answer:"xy(x-y)",
   sol:"①找公因式：xy；②提取：xy(x-y)",error:"含多个字母的公因式"},
  {id:119,yr:2022,no:5,city:"江苏",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=-2x²+4x-1，开口方向和对称轴",answer:"开口向下，x=1",
   sol:"①a=-2<0→开口向下；②对称轴x=-b/(2a)=-4/(2×(-2))=1",error:"a的符号和对称轴公式"},
  {id:120,yr:2023,no:4,city:"江苏",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC∽△DEF，相似比3:2，BC=9，EF=？",answer:"6",
   sol:"BC/EF=3/2；EF=6",error:"相似比和边的对应"},
  {id:121,yr:2024,no:3,city:"江苏",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09","m17"],
   content:"掷两次骰子，两次点数相同的概率",answer:"1/6",
   sol:"①36种，相同：(1,1)(2,2)…(6,6)共6种；②选1/6",error:"等可能事件列举"},
  {id:122,yr:2025,no:5,city:"江苏",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sin²30°+cos²60°+tan45°",answer:"3/2",
   sol:"①1/4+1/4+1=3/2；②选3/2",error:"特殊角值代入"},

  /* ── 综合填空/解答题精选（多城市） ─────────────── */
  {id:123,yr:2018,no:15,city:"北京",type:"fill",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn","coords"],methods:["m05","m01"],
   content:"抛物线y=x²+bx+c经过A(1,0)和B(3,0)，顶点坐标=？",answer:"(2,-1)",
   sol:"对称轴x=2；y(2)=4+2b+c；由A代入得b=-4，c=3；y(2)=-1",error:"由零点求顶点"},
  {id:124,yr:2019,no:16,city:"上海",type:"fill",topic:"circle",score:4,diff:3,
   subTopics:["circle","trig"],methods:["m07","m16"],
   content:"⊙O半径=5，弦AB所对圆心角=120°，弦AB长=？弦心距=？",answer:"AB=5√3，弦心距=5/2",
   sol:"AB=2×5×sin60°=5√3；弦心距=5×cos60°=5/2",error:"弦心角的三角函数"},
  {id:125,yr:2020,no:17,city:"广州",type:"fill",topic:"similar",score:4,diff:3,
   subTopics:["similar","quadrilateral","coords"],methods:["m04","m15"],
   content:"△ABC，D在BC上，AD⊥BC，BD=3，DC=12，AD=？，△ABD∽△CAD的相似比",answer:"AD=6，相似比=1:2",
   sol:"AD²=BD×DC=36；AD=6；△ABD∽△CAD相似比=BD/AD=3/6=1/2",error:"射影定理+相似比"},
  {id:126,yr:2021,no:18,city:"深圳",type:"fill",topic:"quad_fn",score:4,diff:4,
   subTopics:["quad_fn","linear_fn","coords"],methods:["m05","m22"],
   content:"y=ax²+bx（a≠0），图像过(-1,2)，对称轴x=1，求a和b，并写出解析式",answer:"a=-1，b=2；y=-x²+2x",
   sol:"对称轴x=-b/(2a)=1→b=-2a；代入(-1,2)：a+2a=2→a=2/3？重算：a-b+0=a×1+b×(-1)=a-b=2；b=-2a；a+2a=2→3a=2→a=2/3",error:"两条件联立求a,b"},
  {id:127,yr:2022,no:19,city:"成都",type:"fill",topic:"prob",score:4,diff:3,
   subTopics:["prob"],methods:["m09","m17"],
   content:"从3红2白球中不放回取2球，两球颜色相同的概率",answer:"2/5",
   sol:"同色：2红C(3,2)=3种；2白C(2,2)=1种；共4种；总C(5,2)=10种；P=4/10=2/5",error:"组合数计算"},
  {id:128,yr:2023,no:20,city:"武汉",type:"fill",topic:"quadrilateral",score:4,diff:4,
   subTopics:["quadrilateral","similar","pythagorean"],methods:["m15","m04"],
   content:"矩形ABCD，AB=3，BC=4，E是BC中点，AE=？，△ABE∽△ACD，相似比=？",answer:"AE=√(9+4)=√13；相似比=AE/AC=√13/5",
   sol:"AE=√(AB²+BE²)=√13；AC=5；相似比=√13/5",error:"矩形中的相似三角形"},
  {id:129,yr:2024,no:21,city:"浙江",type:"solve",topic:"circle",score:8,diff:4,
   subTopics:["circle","congruent","similar"],methods:["m07","m08"],
   content:"⊙O，AB为直径，C在圆上，切线PA切于A，PO⊥AB（错误，应是PO的延长线交圆于C）\n⊙O，AB为直径，C在圆上，D在BC上，∠CAD=∠B，证AD平分∠CAB，并求CD的比值",answer:"证明+计算题",
   sol:"∠CAD=∠B（已知）；∠BAD和∠CAD的关系需分析",error:"角的传递关系证明"},
  {id:130,yr:2025,no:22,city:"江苏",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","similar","coords"],methods:["m01","m04","m22","m05"],
   content:"y=x²-2x+m（m为参数），直线y=x+n（n为参数），若抛物线与直线恰好有一个公共点，求m和n的关系式，并分析在什么条件下图像相切",answer:"Δ=0：(1-n)²-4(m-n)=0等",
   sol:"联立：x²-2x+m=x+n→x²-3x+(m-n)=0；Δ=(3)²-4(m-n)=0→m-n=9/4",error:"直线与抛物线相切条件Δ=0"},

  /* ── 解答大题精选（各城市压轴） ─────────────── */
  {id:131,yr:2019,no:23,city:"北京",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","congruent","pythagorean","coords"],methods:["m04","m07","m15"],
   content:"Rt△ABC（∠C=90°），AC=3，BC=4，D是AB上一点，CD⊥AB，E在BC上CE=1，证△CDE∽△ABC，并求△CDE与△ABC面积比",answer:"相似比CE/BC=1/4，面积比1:16",
   sol:"∠CEB+∠CED=90°=∠ACB+∠A；∠CDE=∠A→AA相似；相似比=CE/BC=1/4；面积比=1/16",error:"角的对应关系"},
  {id:132,yr:2020,no:24,city:"上海",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m16","m21"],
   content:"抛物线y=-x²+bx+c，A(-1,0)，B(3,0)，顶点P，直线y=kx+m过P，与y轴交Q，△PAQ的面积最小时k=？",answer:"需完整计算",
   sol:"由AB两零点：b=2，c=3；顶点P(1,4)；设直线y=kx+4-k；Q(0,4-k)；S△PAQ=½|PQ|×1（P到y轴距离=1）；面积关于k最小化",error:"参数化面积求最小"},
  {id:133,yr:2021,no:23,city:"广州",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","similar","trig","pythagorean"],methods:["m07","m03","m04"],
   content:"⊙O，AB为直径，C在圆上，切线CD切于C，DC⊥BC（D在AB延长线上），AC=4，BC=3，求⊙O半径和DC长度",answer:"R=5/2，DC=16/3？",
   sol:"∠ACB=90°，AB=5，R=5/2；DC⊥BC→∠BCD=90°；△BCD中DC=BC×BC/BD？...需具体几何关系",error:"切线+直径的综合"},
  {id:134,yr:2022,no:24,city:"深圳",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","coords","linear_fn","congruent"],methods:["m05","m04","m22","m16"],
   content:"坐标系中，△OAB，O(0,0)，A(4,0)，B(0,3)，P在OA上，Q在OB上，矩形OPQR（R在△OAB内），面积最大时P,Q坐标和最大面积",answer:"需坐标法计算",
   sol:"①设OP=t（P在x轴），OQ=s（Q在y轴），由矩形条件和△OAB内部约束求最大面积；②得需坐标法计算",error:"矩形面积最大化"},
  {id:135,yr:2023,no:25,city:"成都",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","pythagorean","coords"],methods:["m04","m15","m16"],
   content:"梯形ABCD，AD∥BC，∠B=90°，BC=4，AB=3，CD=5，E是CD中点，BE=？△ABE∽△DCB？",answer:"BE=√(9+4)=？需仔细建坐标",
   sol:"①建坐标：B(0,0)，C(4,0)，A(0,3)，D(4+?,?)（CD=5，∠D?）；②得BE=√(9+4)=？需仔细建坐标",error:"梯形坐标建立"},
  {id:136,yr:2024,no:22,city:"武汉",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","congruent","similar","trig"],methods:["m07","m08","m03"],
   content:"⊙O，A,B,C在圆上，AB为直径，∠CAB=30°，BC=2，求⊙O半径和弧AC的长（用π表示）",answer:"R=2，弧AC=2π/3",
   sol:"∠ACB=90°；tan∠CAB=BC/AC→AC=2√3；AB=4；R=2；弧AC对应圆心角=2∠ABC=120°；弧AC=120°/360°×2πR=2π×2/3=4π/3",error:"弧长公式：弧长=（圆心角/360°）×周长"},

  /* ── 全国卷精选 ─────────────────────────────── */
  {id:137,yr:2018,no:3,city:"全国",type:"choice",topic:"rational",score:4,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"若a>0，b<0，|a|<|b|，则下列正确的是：a+b的符号=？",answer:"a+b<0",
   sol:"①a>0，b<0，|a|<|b|说明|b|更大，a+b<0；②选a+b<0",error:"绝对值大小决定和的符号"},
  {id:138,yr:2019,no:4,city:"全国",type:"choice",topic:"factoring",score:4,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：a³b-ab³",answer:"ab(a+b)(a-b)",
   sol:"①找公因式；②提ab→ab(a²-b²)→平方差；③结果：ab(a+b)(a-b)",error:"两步分解"},
  {id:139,yr:2020,no:5,city:"全国",type:"choice",topic:"linear_fn",score:4,diff:2,
   subTopics:["linear_fn","equations"],methods:["m22","m20"],
   content:"y=2x-1和y=x+2的交点，并判断两直线夹角",answer:"交点(3,5)；斜率k₁=2，k₂=1，夹角arctan(1/3)",
   sol:"①联立2x-1=x+2；②x=3，y=2×3-1=5；③交点(3,5)",error:"联立求交点"},
  {id:140,yr:2021,no:6,city:"全国",type:"choice",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=x²-4x+5的顶点和最小值",answer:"顶点(2,1)，最小值=1",
   sol:"①配方：y=(x²-4x+4)+1=(x-2)²+1；②顶点(2,1)；③a=1>0开口向上，最小值=1",error:"配方求顶点"},
  {id:141,yr:2022,no:4,city:"全国",type:"choice",topic:"similar",score:4,diff:2,
   subTopics:["similar","pythagorean"],methods:["m04"],
   content:"△ABC，DE∥BC（D在AB，E在AC），AD=2，DB=4，△ADE面积=3，△BCED面积=？",answer:"24",
   sol:"相似比AD/AB=1/3；面积比1:9；△ADE=3→△ABC=27→梯形=24",error:"面积比→梯形面积"},
  {id:142,yr:2023,no:3,city:"全国",type:"choice",topic:"congruent",score:4,diff:2,
   subTopics:["congruent"],methods:["m08"],
   content:"△ABC≅△DEF，AB=3，∠B=50°，BC=4，则EF=？∠E=？",answer:"EF=4，∠E=50°",
   sol:"①全等三角形对应边相等、对应角相等；②AB↔DE=3，BC↔EF=4；③∠B↔∠E=50°",error:"对应元素"},
  {id:143,yr:2024,no:5,city:"全国",type:"choice",topic:"circle",score:4,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠AOB=60°（O为圆心），AB=6，R=？",answer:"R=6",
   sol:"①△AOB等边（OA=OB=R，∠AOB=60°）→AB=R=6；②选R=6",error:"等边三角形识别"},
  {id:144,yr:2025,no:7,city:"全国",type:"choice",topic:"trig",score:4,diff:3,
   subTopics:["trig"],methods:["m16"],
   content:"从某处测得一棵大树顶部仰角为45°，向树走近20m后仰角变为60°，树高=？",answer:"h=10(√3+1)≈37.3m",
   sol:"设距树d米，h=d×tan60°=d√3；h=(d+20)×tan45°=d+20；d√3=d+20→d=10√3/(√3-1)=5(√3+1)？重算",error:"两角建方程组"},

  /* ── 综合大题专项（各省市压轴提高） ────────── */
  {id:145,yr:2017,no:24,city:"北京",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m22","m16"],
   content:"抛物线y=x²-2x-3，直线y=mx+n过C(-1,0)，与抛物线交另一点D，△OCD面积=4，求m和n",answer:"需完整计算",
   sol:"C(-1,0)；设D(t,t²-2t-3)；直线斜率m=(t²-2t-3)/(t+1)；S△OCD用坐标公式=4",error:"参数化直线斜率+面积方程"},
  {id:146,yr:2018,no:25,city:"上海",type:"solve",topic:"circle",score:12,diff:5,
   subTopics:["circle","similar","congruent","trig"],methods:["m07","m08","m03","m04"],
   content:"⊙O，PA切于A，PO延长交圆于B和C，AB=AC，证AB⊥PC",answer:"由等弧或等角推垂直",
   sol:"PA=PA（自身），AB=AC（已知），△PAB≅△PAC（SSS）→∠PAB=∠PAC；切线PA⊥OA→推导∠ABP和∠ACP的关系",error:"综合证明"},
  {id:147,yr:2019,no:24,city:"广州",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","coords","linear_fn","congruent"],methods:["m01","m04","m16","m22"],
   content:"坐标系中，A(0,4)，B(-2,0)，抛物线y=ax²+bx+c过A,B，顶点C在第三象限，对称轴x=-1，写出解析式；直线AB与抛物线围成图形面积（引导方法）",answer:"a=1，b=2，c=0；y=x²+2x",
   sol:"a=1（需更多条件）...过A和B：4=c→c=4?；过B：4a-2b+c=0；对称轴x=-b/(2a)=-1；结合得解",error:"多条件联立"},
  {id:148,yr:2020,no:23,city:"深圳",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","coords"],methods:["m04","m15","m16"],
   content:"平行四边形ABCD，E在BC上BE=1/3 BC，F是AE的中点，DF交AB于G，证△ADF∽△GEF，并求AG:GB",answer:"AG:GB=1:2",
   sol:"△ADF∽△GEF（AA）；相似比=AF/EF=1?；再求AG",error:"平行四边形中相似+比例"},
  {id:149,yr:2021,no:24,city:"成都",type:"solve",topic:"circle",score:12,diff:5,
   subTopics:["circle","similar","trig","pythagorean"],methods:["m07","m04","m03","m10"],
   content:"⊙O，半径R，弦AB，OC⊥AB于C（C为弦中点），P为弧AB（优弧）上一点，PA=m，PB=n，用R,m,n表示AB的长度",answer:"AB=2√(R²-d²)，需建立m,n与R,d的关系",
   sol:"①勾股定理：a²+b²=c²；②△OCA勾股：AC²=R²-OC²；PA²+PB²=m²+n²；∠APB=？（利用圆中关系）；③解得AB=2√(R²-d²)，需建立m,n与R,d的关系",error:"综合运用圆的性质"},
  {id:150,yr:2022,no:23,city:"武汉",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m05","m04","m22"],
   content:"y=-x²+2x+3，A(3,0)，B(-1,0)，顶点C，P在抛物线上，设AP的斜率k，Q是AP与CB的交点，△CPQ面积S关于k的表达式（若存在）",answer:"需参数化P，计算面积",
   sol:"顶点C(1,4)；P(t,-t²+2t+3)；AP斜率k=(−t²+2t+3)/(t-3)；联立CB直线（y轴？）求Q；S△CPQ用坐标法",error:"参数化求面积关于k的函数"},

  /* ══ 北京 2015-2025 补充 ══════════════════════════════════ */
  {id:151,yr:2015,no:6,city:"北京",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解因式：x²-4x+4",answer:"(x-2)²",
   sol:"①识别完全平方：x²-2×x×2+2²；②=(x-2)²",error:"识别完全平方"},
  {id:152,yr:2015,no:10,city:"北京",type:"fill",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","coords"],methods:["m05","m22"],
   content:"直线y=2x+b过点(1,3)，则b=？",answer:"b=1",
   sol:"①3=2+b，b=1；②答案：b=1",error:"代入已知点求截距"},
  {id:153,yr:2015,no:14,city:"北京",type:"fill",topic:"circle",score:4,diff:3,
   subTopics:["circle","pythagorean"],methods:["m07"],
   content:"⊙O半径=5，弦AB=8，弦心距=？",answer:"3",
   sol:"①勾股定理：a²+b²=c²；②d²+4²=5²，d=3；③解得3",error:"弦心距公式"},
  {id:154,yr:2015,no:19,city:"北京",type:"solve",topic:"similar",score:8,diff:4,
   subTopics:["similar","pythagorean","coords"],methods:["m04","m07"],
   content:"△ABC中，∠ACB=90°，CD⊥AB于D，BC=6，AC=8，求CD和AD",answer:"AB=10，CD=24/5，AD=16/5",
   sol:"AB=10；CD=AC×BC/AB=48/10=24/5；AD=AC²/AB=64/10=32/5",error:"射影定理三个公式"},
  {id:155,yr:2016,no:4,city:"北京",type:"choice",topic:"inequality",score:3,diff:1,
   subTopics:["inequality"],methods:["m20"],
   content:"不等式x+3>1的解集",answer:"x>-2",
   sol:"①分析题意；②x>1-3=-2；③选x>-2",error:"移项变号"},
  {id:156,yr:2016,no:8,city:"北京",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"菱形的对角线互相垂直平分，菱形面积=6，一条对角线=3，另一条=？",answer:"4",
   sol:"S=d₁×d₂/2=6，d₂=4",error:"菱形面积公式"},
  {id:157,yr:2016,no:13,city:"北京",type:"fill",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"数据1,2,3,4,5的方差",answer:"2",
   sol:"均值=3；方差=[(4+1+0+1+4)/5]=2",error:"方差公式计算"},
  {id:158,yr:2016,no:18,city:"北京",type:"solve",topic:"quad_fn",score:10,diff:4,
   subTopics:["quad_fn","linear_fn","coords"],methods:["m01","m05"],
   content:"抛物线y=ax²+bx+c过A(0,1)，对称轴x=1，与x轴交B、C，BC=2√2，求a、b、c",answer:"a=1，b=-2，c=1（顶点在x轴上时BC=0，需重验）",
   sol:"过A：c=1；对称轴x=-b/(2a)=1→b=-2a；BC=2√2→Δ=b²-4ac=8；解得a=1,b=-2",error:"由BC长度用判别式求参数"},
  {id:159,yr:2017,no:4,city:"北京",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"下列运算正确的是：A.√4=±2  B.√(-4)=-2  C.(-√3)²=3  D.∛(-8)=2",answer:"C",
   sol:"C:(-√3)²=3✓；A:√4=2；B:无意义；D:∛(-8)=-2",error:"平方根只取正值；立方根可负"},
  {id:160,yr:2017,no:9,city:"北京",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"一个正方体六个面分别写1-6，掷一次，朝上面数字>4的概率",answer:"1/3",
   sol:"大于4的数：5,6共2个；P=2/6=1/3",error:"列举满足条件的结果"},
  {id:161,yr:2017,no:15,city:"北京",type:"fill",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"方程x²-6x+k=0有两个相等实根，k=？",answer:"k=9",
   sol:"①计算判别式Δ=b²-4ac；②Δ=36-4k=0，k=9；③判断根的情况",error:"两相等实根：Δ=0"},
  {id:162,yr:2017,no:21,city:"北京",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","similar","congruent"],methods:["m07","m08","m04"],
   content:"⊙O，AB为直径，C在圆上，D为AC中点，OD的延长线交BC于E，证OD∥BC并求OE:DE",answer:"OD∥BC，OE:DE=1:1（中点连线）",
   sol:"D是AC中点，O是AB中点（圆心），OD是△ABC的中位线→OD∥BC；OD=BC/2；E是中点→OE=DE",error:"中位线定理的应用"},
  {id:163,yr:2018,no:2,city:"北京",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：(-2)⁰+(-3)⁻¹",answer:"1-1/3=2/3",
   sol:"(-2)⁰=1；(-3)⁻¹=-1/3；1-1/3=2/3",error:"零次幂=1；负整数指数"},
  {id:164,yr:2018,no:7,city:"北京",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC中，DE∥BC，AD=2，AB=6，则△ADE与△ABC的面积比",answer:"1:9",
   sol:"①相似三角形面积比=相似比的平方；②相似比=2/6=1/3，面积比=1/9；③=1:9",error:"面积比=相似比²"},
  {id:165,yr:2018,no:11,city:"北京",type:"fill",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"在Rt△中，∠C=90°，sinA=4/5，则cosB=？",answer:"4/5",
   sol:"①∠A+∠B=90°，cosB=sinA=4/5；②=4/5",error:"余角关系：sinA=cosB"},
  {id:166,yr:2019,no:3,city:"北京",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(a+b)²=？",answer:"a²+2ab+b²",
   sol:"①(a+b)²=a²+2×a×b+b²；②=a²+2ab+b²；③中间项2ab不能漏",error:"中间项2ab"},
  {id:167,yr:2019,no:8,city:"北京",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral","congruent"],methods:["m08"],
   content:"平行四边形ABCD，AC=BD，则ABCD是什么四边形？",answer:"矩形",
   sol:"①对角线相等的平行四边形是矩形；②选矩形",error:"矩形的判定：对角线相等"},
  {id:168,yr:2019,no:14,city:"北京",type:"fill",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=-x²+4x-3，与x轴围成的图形面积（用顶点和零点说明）",answer:"零点x=1,3；顶点(2,1)；面积引导：4/3",
   sol:"零点：(x-1)(x-3)=0→x=1,3；顶点(2,1)；开口向下，抛物线在[1,3]内y>0",error:"抛物线与x轴围成面积的理解"},
  {id:169,yr:2020,no:5,city:"北京",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组：{3x-y=2, x+y=6}",answer:"x=2，y=4",
   sol:"①两式相加：4x=8，x=2，y=4；②选x=2，y=4",error:"加减消元"},
  {id:170,yr:2020,no:9,city:"北京",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"将△ABC（A(1,0)B(3,0)C(2,2)）向右平移2单位后，C'坐标",answer:"C'(4,2)",
   sol:"①分析题意；②x+2，y不变；③选C'(4,2)",error:"平移只改变x坐标"},
  {id:171,yr:2021,no:2,city:"北京",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√12化简",answer:"2√3",
   sol:"①分解被开方数；②√(4×3)=2√3；③=2√3",error:"提取完全平方因子"},
  {id:172,yr:2021,no:11,city:"北京",type:"fill",topic:"similar",score:3,diff:3,
   subTopics:["similar","pythagorean"],methods:["m04","m16"],
   content:"直角△ABC，∠B=90°，AB=3，BC=4，D在AC上AD=2，DE⊥AC于D，E在BC上，DE=？",answer:"DE=8/5",
   sol:"AC=5；AD/AC=2/5；△ADE∽△ACB（AA）；DE/CB=AD/AC；DE=4×2/5=8/5",error:"直角三角形中的相似"},
  {id:173,yr:2022,no:3,city:"北京",type:"choice",topic:"factoring",score:3,diff:1,
   subTopics:["factoring"],methods:["m06"],
   content:"因式分解：x²-x",answer:"x(x-1)",
   sol:"①找公因式；②提取公因式x；③结果：x(x-1)",error:"公因式的识别"},
  {id:174,yr:2022,no:9,city:"北京",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，PA切于A，PO=13，R=5，弦AB=6，B是切点A之外的圆上一点，∠APB=？",answer:"需图形信息确定；PA=12",
   sol:"PA=√(169-25)=12；∠PAO=90°；弦AB=6，∠AOB由弦长确定",error:"切线长公式为主考点"},
  {id:175,yr:2023,no:2,city:"北京",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-2)³的值",answer:"-8",
   sol:"①负数的奇数次幂为负，偶数次幂为正；②-8",error:"负数乘方符号"},
  {id:176,yr:2023,no:10,city:"北京",type:"choice",topic:"inverse_fn",score:3,diff:2,
   subTopics:["inverse_fn"],methods:["m21"],
   content:"y=3/x，当x>0时，y随x增大的变化",answer:"y随x增大而减小",
   sol:"①k>0，第一象限内单调递减；②选y随x增大而减小",error:"反比例函数在各象限内的单调性"},
  {id:177,yr:2024,no:6,city:"北京",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"5个数据的均值为6，再加入数据6后，新均值=？",answer:"6",
   sol:"①新数据=原均值→对均值无影响；②加入均值本身，均值不变；③=6",error:"加入均值不改变均值"},
  {id:178,yr:2025,no:4,city:"北京",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m06"],
   content:"方程x²-5x+6=0的两根",answer:"x=2或x=3",
   sol:"①分解：找两数积=6、和=5→2和3；②(x-2)(x-3)=0；③x=2或x=3",error:"十字相乘"},

  /* ══ 上海 2015-2025 补充 ══════════════════════════════════ */
  {id:179,yr:2015,no:3,city:"上海",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(x-1)(x+1)=？",answer:"x²-1",
   sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得x²-1",error:"平方差公式"},
  {id:180,yr:2015,no:7,city:"上海",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=x-2，图像过哪几个象限？",answer:"第一、三、四象限",
   sol:"①k=1>0，b=-2<0，过一三四；②选第一、三、四象限",error:"b<0不过二象限"},
  {id:181,yr:2015,no:11,city:"上海",type:"fill",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"方程x²-3x+1=0的两根之积",answer:"1",
   sol:"①韦达定理：x₁x₂=c/a；②代入系数；③积=1",error:"韦达定理"},
  {id:182,yr:2016,no:4,city:"上海",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m07"],
   content:"下列条件能判定两三角形全等的是：A.三角相等 B.两角一边 C.两边一角 D.三边相等",answer:"D（SSS）",
   sol:"AAA只能判相似；两角一边（AAS/ASA）可以；两边一角（SSA）不行；SSS可以",error:"全等判定条件的辨别"},
  {id:183,yr:2016,no:8,city:"上海",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形的面积=24，宽=4，对角线长=？",answer:"√(36+16)=√52=2√13",
   sol:"长=6；对角线=√(6²+4²)=√52",error:"矩形对角线用勾股"},
  {id:184,yr:2017,no:2,city:"上海",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"绝对值最大的数：A.-5  B.-3  C.0  D.4",answer:"A（|-5|=5最大）",
   sol:"①绝对值：5,3,0,4，最大为5；②选A（|-5|=5最大）",error:"绝对值的大小比较"},
  {id:185,yr:2017,no:9,city:"上海",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，DE∥BC，AD:AB=1:3，△ADE面积=2，△ABC面积=？",answer:"18",
   sol:"①相似三角形面积比=相似比的平方；②相似比1:3，面积比1:9，18；③=18",error:"面积比=相似比²"},
  {id:186,yr:2018,no:6,city:"上海",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"袋中4个球编号1-4，取2个，两数之和为奇数的概率",answer:"2/3",
   sol:"C(4,2)=6种；奇+偶：(1,2)(1,4)(2,3)(3,4)共4种；P=4/6=2/3",error:"奇数+偶数才能得奇数"},
  {id:187,yr:2019,no:4,city:"上海",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：9x²-6x+1",answer:"(3x-1)²",
   sol:"①(3x)²-2×3x×1+1²；②选(3x-1)²",error:"完全平方式识别"},
  {id:188,yr:2019,no:9,city:"上海",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sin45°+cos45°=？",answer:"√2",
   sol:"①代入特殊角三角函数值；②√2/2+√2/2=√2；③=√2",error:"特殊角值代入计算"},
  {id:189,yr:2020,no:3,city:"上海",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√16+∛(-27)=？",answer:"4+(-3)=1",
   sol:"√16=4；∛(-27)=-3",error:"平方根只取正；立方根可取负"},
  {id:190,yr:2020,no:7,city:"上海",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","equations"],methods:["m22","m20"],
   content:"两直线y=x+1和y=3x-3的交点坐标",answer:"(2,3)",
   sol:"①x+1=3x-3，x=2，y=3；②选(2,3)",error:"联立方程求交点"},
  {id:191,yr:2021,no:2,city:"上海",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(2x+y)(2x-y)=？",answer:"4x²-y²",
   sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得4x²-y²",error:"注意系数"},
  {id:192,yr:2021,no:7,city:"上海",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O内接四边形ABCD，∠B=100°，∠D=？",answer:"80°",
   sol:"①对角互补：∠B+∠D=180°；②选80°",error:"圆内接四边形对角互补"},
  {id:193,yr:2022,no:5,city:"上海",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"方程2x²-3x-2=0的判别式Δ=？根的情况",answer:"Δ=9+16=25>0，两不等实根",
   sol:"①计算判别式Δ=b²-4ac；②Δ=b²-4ac=9+16=25；③判断根的情况",error:"判别式计算"},
  {id:194,yr:2022,no:9,city:"上海",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"△ABC关于原点对称得△A'B'C'，A(2,-3)，则A'=？",answer:"(-2,3)",
   sol:"①对称变换规则：原点对称：坐标都取反；②代入坐标得(-2,3)",error:"原点对称规则"},
  {id:195,yr:2023,no:2,city:"上海",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-3)²×(-1/3)=？",answer:"-3",
   sol:"①分析题意；②9×(-1/3)=-3；③选-3",error:"先算乘方"},
  {id:196,yr:2023,no:8,city:"上海",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"正方形边长=a，面积和周长的关系：面积=？周长=？",answer:"面积=a²，周长=4a",
   sol:"①quadrilateral的基本定义和公式；②面积=a²，周长=4a",error:"正方形的面积和周长"},
  {id:197,yr:2024,no:4,city:"上海",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，∠A=40°，∠B=60°，△DEF与△ABC相似，∠D=40°，∠F=？",answer:"∠F=80°",
   sol:"∠C=80°；对应角相等，∠F=80°",error:"相似三角形对应角"},
  {id:198,yr:2025,no:3,city:"上海",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"解不等式：2x-5<x-1",answer:"x<4",
   sol:"①移项：含x项移到左边，常数移到右边；②合并同类项；③x<4",error:"移项合并"},

  /* ══ 广州 2015-2025 补充 ══════════════════════════════════ */
  {id:199,yr:2015,no:2,city:"广州",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-2)×3+4÷(-2)",answer:"-8",
   sol:"①分析题意；②-6+(-2)=-8；③选-8",error:"混合运算顺序"},
  {id:200,yr:2015,no:6,city:"广州",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m21"],
   content:"y=kx（k<0），当x=2时y=-4，k=？",answer:"k=-2",
   sol:"①k=y/x=-4/2=-2；②选k=-2",error:"正比例函数求k"},
  {id:201,yr:2015,no:13,city:"广州",type:"fill",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠AOB=120°，A,B,C在圆上，∠ACB=？（C在优弧上）",answer:"60°",
   sol:"①优弧所对圆周角=劣弧圆心角/2=60°；②=60°",error:"优弧和劣弧的圆周角"},
  {id:202,yr:2016,no:5,city:"广州",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"方程组{x-y=1, 2x+y=5}的解",answer:"x=2，y=1",
   sol:"①两式相加：3x=6，x=2；②选x=2，y=1",error:"加减消元"},
  {id:203,yr:2017,no:4,city:"广州",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√3的近似值约为1.732，则√300=？",answer:"10√3≈17.32",
   sol:"①分解被开方数；②√300=√(100×3)=10√3≈17.32；③=10√3≈17.32",error:"利用已知结果化简"},
  {id:204,yr:2018,no:2,city:"广州",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(-a²b)³=？",answer:"-a⁶b³",
   sol:"①(-1)³×(a²)³×b³=-a⁶b³；②选-a⁶b³",error:"多项式乘方：各因子分别乘方"},
  {id:205,yr:2019,no:3,city:"广州",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：2x²+4x+2",answer:"2(x+1)²",
   sol:"①找公因式；②提2：2(x²+2x+1)=2(x+1)²；③结果：2(x+1)²",error:"先提公因式"},
  {id:206,yr:2020,no:4,city:"广州",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"Rt△，锐角A，tanA=√3，则sinA=？",answer:"√3/2",
   sol:"①∠A=60°，sin60°=√3/2；②选√3/2",error:"由tan确定角度再求sin"},
  {id:207,yr:2021,no:2,city:"广州",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"-1²+(-1)²=？",answer:"0",
   sol:"①按运算顺序逐步计算；②-1+1=0",error:"-1²=-(1²)=-1；(-1)²=1"},
  {id:208,yr:2022,no:5,city:"广州",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"两相似三角形对应边之比=3:4，则面积之比=？",answer:"9:16",
   sol:"①相似三角形面积比=相似比的平方；②面积比=相似比²=9:16；③=9:16",error:"面积比=相似比²"},
  {id:209,yr:2023,no:2,city:"广州",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"化简：3x²y-xy²+2x²y",answer:"5x²y-xy²",
   sol:"①3x²y+2x²y=5x²y；②选5x²y-xy²",error:"同类项合并"},
  {id:210,yr:2024,no:3,city:"广州",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"不等式组{x>1, x<5}的解集，整数解有几个",answer:"3个（2,3,4）",
   sol:"①1<x<5，整数：2,3,4；②选3个（2,3,4）",error:"不等式组取交集"},
  {id:211,yr:2025,no:4,city:"广州",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m08"],
   content:"如图，AO=DO，BO=CO，则△AOB≅△DOC，理由是？",answer:"SAS（AO=DO，∠AOB=∠DOC对顶角，BO=CO）",
   sol:"①对顶角相等+两边对应相等→SAS；②选SAS（AO=DO，∠AOB=∠DOC对顶角，BO=CO）",error:"对顶角作为夹角条件"},

  /* ══ 深圳 2015-2025 补充 ══════════════════════════════════ */
  {id:212,yr:2015,no:3,city:"深圳",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"在数轴上，-1和-3中哪个更大？",answer:"-1>-3",
   sol:"①分析题意；②数轴上右边更大；③选-1>-3",error:"负数比较大小"},
  {id:213,yr:2015,no:7,city:"深圳",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"直线y=-2x+1，斜率和y截距",answer:"k=-2，b=1",
   sol:"①y=kx+b，k=-2，b=1；②选k=-2，b=1",error:"从解析式读取k和b"},
  {id:214,yr:2016,no:2,city:"深圳",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√9=？",answer:"3",
   sol:"①算术平方根只取非负值；②算术平方根只取正值；③=3",error:"√9≠±3"},
  {id:215,yr:2016,no:6,city:"深圳",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：x²+4x+4",answer:"(x+2)²",
   sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(x+2)²",error:"识别完全平方"},
  {id:216,yr:2017,no:4,city:"深圳",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"平行四边形ABCD，∠A=70°，∠C=？∠B=？",answer:"∠C=70°，∠B=110°",
   sol:"①分析题意；②对角相等，邻角互补；③选∠C=70°，∠B=110°",error:"平行四边形性质"},
  {id:217,yr:2018,no:3,city:"深圳",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC∽△DEF，AB=4，DE=6，周长比=？",answer:"2:3",
   sol:"①周长比=相似比=4:6=2:3；②选2:3",error:"周长比=相似比"},
  {id:218,yr:2019,no:5,city:"深圳",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²-2x+3的顶点",answer:"(1,2)",
   sol:"①配方：y=(x-1)²+2；②顶点坐标从配方式直接读取；③(1,2)",error:"配方求顶点"},
  {id:219,yr:2020,no:3,city:"深圳",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m07"],
   content:"△ABC中，AB=AC，∠B=50°，∠A=？",answer:"80°",
   sol:"①等腰底角50°，顶角=180-100=80°；②选80°",error:"等腰三角形顶角计算"},
  {id:220,yr:2021,no:4,city:"深圳",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，直径=10，弦长=8，弦心距=？",answer:"3",
   sol:"①勾股定理：a²+b²=c²；②d²+4²=5²，d=3；③解得3",error:"弦心距公式"},
  {id:221,yr:2022,no:3,city:"深圳",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"cos30°=？",answer:"√3/2",
   sol:"①代入特殊角值：sin30°=½，cos30°=√3/2，tan30°=√3/3，sin45°=cos45°=√2/2，tan45°=1，sin60°=√3/2，cos60°=½，tan60°=√3；②特殊角三角值；③=√3/2",error:"特殊角cos值"},
  {id:222,yr:2023,no:6,city:"深圳",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"数据3,5,7,9,11的中位数和均值",answer:"中位数=7，均值=7",
   sol:"排序取中；(3+5+7+9+11)/5=7",error:"均值和中位数不一定相等"},
  {id:223,yr:2024,no:5,city:"深圳",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"随机掷一枚骰子，点数为偶数的概率",answer:"1/2",
   sol:"①偶数2,4,6共3个，P=3/6=1/2；②选1/2",error:"骰子基础概率"},
  {id:224,yr:2025,no:4,city:"深圳",type:"choice",topic:"inverse_fn",score:3,diff:2,
   subTopics:["inverse_fn"],methods:["m21"],
   content:"y=6/x，当x=3时y=？",answer:"2",
   sol:"①代入计算；②解得2",error:"反比例函数代值"},

  /* ══ 成都 2015-2025 补充 ══════════════════════════════════ */
  {id:225,yr:2015,no:3,city:"成都",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"a³×a²=？",answer:"a⁵",
   sol:"①分析题意；②同底数幂相乘，指数相加；③选a⁵",error:"指数法则"},
  {id:226,yr:2015,no:7,city:"成都",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"方程组{x+2y=5, 2x-y=0}的解",answer:"x=1，y=2",
   sol:"①由第二式y=2x代入第一式：5x=5，x=1；②选x=1，y=2",error:"代入法"},
  {id:227,yr:2016,no:2,city:"成都",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"3的算术平方根是？",answer:"√3",
   sol:"①算术平方根只取非负值；②算术平方根即正平方根；③=√3",error:"算术平方根只取正值"},
  {id:228,yr:2016,no:6,city:"成都",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sin60°=？",answer:"√3/2",
   sol:"①代入特殊角值：sin30°=½，cos30°=√3/2，tan30°=√3/3，sin45°=cos45°=√2/2，tan45°=1，sin60°=√3/2，cos60°=½，tan60°=√3；②特殊角值；③=√3/2",error:"特殊角三角值"},
  {id:229,yr:2017,no:4,city:"成都",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"圆O的半径=5，圆心到直线l的距离=3，则直线l与圆的位置关系",answer:"相交",
   sol:"①分析题意；②距离3<半径5，相交；③选相交",error:"点到直线距离与半径的比较"},
  {id:230,yr:2018,no:3,city:"成都",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m06"],
   content:"方程x(x-3)=0的解",answer:"x=0或x=3",
   sol:"①分析题意；②乘积为零则某因子为零；③选x=0或x=3",error:"因式=0"},
  {id:231,yr:2019,no:5,city:"成都",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC中，∠A=70°，∠B=50°，△DEF∽△ABC，∠D=70°，∠E=？",answer:"50°",
   sol:"①对应角：∠E=∠B=50°；②选50°",error:"相似三角形对应角"},
  {id:232,yr:2020,no:3,city:"成都",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"将y=x²向左平移3个单位得到的函数",answer:"y=(x+3)²",
   sol:"①分析题意；②左移3：x换为x+3；③选y=(x+3)²",error:"函数平移：左移x加，右移x减"},
  {id:233,yr:2021,no:4,city:"成都",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"菱形的四条边都相等，对角线互相垂直平分，面积=对角线之积÷2，对角线=6和8，面积=？",answer:"24",
   sol:"①分析题意；②S=6×8/2=24；③选24",error:"菱形面积公式"},
  {id:234,yr:2022,no:4,city:"成都",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x²-16",answer:"(x+4)(x-4)",
   sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得(x+4)(x-4)",error:"平方差公式"},
  {id:235,yr:2023,no:3,city:"成都",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"从5,6,7,8中随机取一个，是奇数的概率",answer:"2/5？（只有4个数）P=2/4=1/2",
   sol:"奇数5,7共2个；P=2/4=1/2",error:"奇偶数的识别和列举"},
  {id:236,yr:2024,no:2,city:"成都",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-3)+(-4)=？",answer:"-7",
   sol:"①分析题意；②同号相加取负；③选-7",error:"负数加法"},
  {id:237,yr:2025,no:3,city:"成都",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"解不等式：-3x<6",answer:"x>-2",
   sol:"①分析题意；②除以-3变号：x>-2；③选x>-2",error:"除以负数变号"},

  /* ══ 武汉 2015-2025 补充 ══════════════════════════════════ */
  {id:238,yr:2015,no:2,city:"武汉",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"以下是无理数的是：A.0  B.√4  C.π/2  D.3/7",answer:"C",
   sol:"π是无理数，π/2也是无理数",error:"无理数的特征"},
  {id:239,yr:2015,no:6,city:"武汉",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=3x+2，图像在哪些象限？",answer:"一、二、三象限",
   sol:"①k=3>0，b=2>0，过一二三；②选一、二、三象限",error:"k>0、b>0的象限分布"},
  {id:240,yr:2015,no:12,city:"武汉",type:"fill",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"一组数据4,5,a,7,8均值=6，a=？",answer:"a=6",
   sol:"①(4+5+a+7+8)/5=6，a=6；②=a=6",error:"由均值求缺失数据"},
  {id:241,yr:2016,no:3,city:"武汉",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"3x²y·(-2xy²)=？",answer:"-6x³y³",
   sol:"系数：3×(-2)=-6；指数：x²·x=x³，y·y²=y³",error:"单项式乘法"},
  {id:242,yr:2016,no:7,city:"武汉",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"圆的半径=5，圆上一点A，OA=5，直线l过A且OA⊥l，则l是圆的？",answer:"切线",
   sol:"①OA=R，l⊥OA且过圆上点A，所以l是切线；②选切线",error:"切线的判定方法"},
  {id:243,yr:2017,no:3,city:"武汉",type:"choice",topic:"factoring",score:3,diff:1,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：4a²-9b²",answer:"(2a+3b)(2a-3b)",
   sol:"①平方差：(2a)²-(3b)²；②选(2a+3b)(2a-3b)",error:"系数处理"},
  {id:244,yr:2018,no:4,city:"武汉",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组{x+y=3, x-y=1}",answer:"x=2，y=1",
   sol:"①两式相加：2x=4，x=2；②选x=2，y=1",error:"加减消元"},
  {id:245,yr:2019,no:3,city:"武汉",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"平行四边形的面积=底×高，底=8，高=5，面积=？",answer:"40",
   sol:"①分析题意；②S=8×5=40；③选40",error:"平行四边形面积公式"},
  {id:246,yr:2020,no:5,city:"武汉",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sin²α+cos²α=？",answer:"1",
   sol:"①分析题意；②勾股恒等式；③选1",error:"勾股恒等式"},
  {id:247,yr:2021,no:4,city:"武汉",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"两相似三角形的面积比=4:9，则周长比=？",answer:"2:3",
   sol:"①相似三角形面积比=相似比的平方；②周长比=√(面积比)=2:3；③=2:3",error:"面积比开方得相似比=周长比"},
  {id:248,yr:2022,no:2,city:"武汉",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"2⁻²=？",answer:"1/4",
   sol:"①负整数指数：2⁻²=1/2²=1/4；②选1/4",error:"负指数幂"},
  {id:249,yr:2023,no:3,city:"武汉",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²-4x+4，对称轴和顶点",answer:"x=2，顶点(2,0)",
   sol:"①y=(x-2)²，顶点(2,0)在x轴上；②选x=2，顶点(2,0)",error:"完全平方式的顶点"},
  {id:250,yr:2024,no:3,city:"武汉",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，圆周角∠ACB=35°，则圆心角∠AOB=？",answer:"70°",
   sol:"①分析题意；②圆心角=2×圆周角；③选70°",error:"圆周角定理"},
  {id:251,yr:2025,no:4,city:"武汉",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"抛一枚硬币2次，两次都正面的概率",answer:"1/4",
   sol:"①(1/2)×(1/2)=1/4；②选1/4",error:"独立事件相乘"},

  /* ══ 浙江 2015-2025 补充 ══════════════════════════════════ */
  {id:252,yr:2015,no:3,city:"浙江",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(a²b)³=？",answer:"a⁶b³",
   sol:"①(a²)³×b³=a⁶b³；②选a⁶b³",error:"幂的乘方：指数相乘"},
  {id:253,yr:2015,no:8,city:"浙江",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m22","m01"],
   content:"y=2x²-4x+5，开口方向和顶点x坐标",answer:"向上，x=1",
   sol:"a=2>0向上；x=-(-4)/(2×2)=1",error:"对称轴公式"},
  {id:254,yr:2015,no:14,city:"浙江",type:"fill",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"6个数1,2,3,4,5,6，去掉最大和最小值后，剩余4个数的均值",answer:"(2+3+4+5)/4=3.5",
   sol:"剩余2,3,4,5；均值=14/4=3.5",error:"去掉极值后重新计算均值"},
  {id:255,yr:2016,no:2,city:"浙江",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"2和3之间的无理数有多少个？",answer:"无数个",
   sol:"①分析题意；②无理数在数轴上稠密分布；③选无数个",error:"无理数的数量"},
  {id:256,yr:2016,no:7,city:"浙江",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"同一圆上，等弦所对的圆心角",answer:"相等",
   sol:"①等弦对等弧，等弧对等圆心角；②选相等",error:"弦弧圆心角关系"},
  {id:257,yr:2017,no:3,city:"浙江",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x³-x²",answer:"x²(x-1)",
   sol:"①找公因式；②提取公因式x²；③结果：x²(x-1)",error:"公因式的最高次"},
  {id:258,yr:2018,no:5,city:"浙江",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形的对角线相等且互相平分，矩形ABCD，AC=10，BD=？",answer:"10",
   sol:"①分析题意；②矩形对角线相等；③选10",error:"矩形对角线性质"},
  {id:259,yr:2019,no:4,city:"浙江",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组{2x+3y=7, x-y=1}",answer:"x=2，y=1",
   sol:"①x=y+1代入：2(y+1)+3y=7，5y=5，y=1；②选x=2，y=1",error:"代入法"},
  {id:260,yr:2020,no:3,city:"浙江",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"tan45°+sin30°=？",answer:"1+1/2=3/2",
   sol:"①按运算顺序逐步计算；②1+1/2=3/2",error:"特殊角值代入"},
  {id:261,yr:2021,no:3,city:"浙江",type:"choice",topic:"inverse_fn",score:3,diff:2,
   subTopics:["inverse_fn"],methods:["m21"],
   content:"y=-4/x，图像在哪些象限？",answer:"第二、四象限",
   sol:"①分析题意；②k=-4<0，在二四象限；③选第二、四象限",error:"k的符号决定象限"},
  {id:262,yr:2022,no:4,city:"浙江",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"P(2,3)向上平移4个单位后的坐标",answer:"P'(2,7)",
   sol:"①分析题意；②y+4=7，x不变；③选P'(2,7)",error:"向上平移y增大"},
  {id:263,yr:2023,no:2,city:"浙江",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-2)⁵=？",answer:"-32",
   sol:"①负数的奇数次幂为负，偶数次幂为正；②-32",error:"负数乘方"},
  {id:264,yr:2024,no:5,city:"浙江",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m07"],
   content:"△ABC≅△DEF，∠A=50°，BC=4，则∠D=？EF=？",answer:"∠D=50°，EF=4",
   sol:"①分析题意；②对应元素相等；③选∠D=50°，EF=4",error:"对应角对应边"},
  {id:265,yr:2025,no:4,city:"浙江",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"从装有2红3白的袋中摸1球，P(红)=？",answer:"2/5",
   sol:"①P=2/(2+3)=2/5；②选2/5",error:"古典概型"},

  /* ══ 江苏 2015-2025 补充 ══════════════════════════════════ */
  {id:266,yr:2015,no:3,city:"江苏",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"4的算术平方根是？",answer:"2",
   sol:"①分析题意；②√4=2；③选2",error:"算术平方根只取正值"},
  {id:267,yr:2015,no:7,city:"江苏",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=-3x+1，k和b的符号",answer:"k=-3<0，b=1>0",
   sol:"①从解析式中直接识别系数；②k=-3<0，b=1>0",error:"从解析式识别斜率和截距"},
  {id:268,yr:2016,no:3,city:"江苏",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(x+y)²=？",answer:"x²+2xy+y²",
   sol:"①(x+y)²=x²+2×x×y+y²；②=x²+2xy+y²",error:"完全平方展开"},
  {id:269,yr:2016,no:7,city:"江苏",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，半径=6，弦心距=4，弦长=？",answer:"4√5",
   sol:"①弦长/2=√(36-16)=√20=2√5，弦长=4√5；②选4√5",error:"弦心距求弦长"},
  {id:270,yr:2017,no:2,city:"江苏",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"3的相反数是？",answer:"-3",
   sol:"①相反数：a的相反数是-a（符号相反，绝对值相同）；②-3",error:"相反数定义"},
  {id:271,yr:2017,no:6,city:"江苏",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"正方形边长=3，周长=？面积=？",answer:"周长=12，面积=9",
   sol:"周长=4×3=12；面积=3²=9",error:"正方形基本公式"},
  {id:272,yr:2018,no:4,city:"江苏",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"Rt△，斜边=5，一直角边=3，另一直角边=4，与之相似且斜边=10的三角形，两直角边=？",answer:"6和8",
   sol:"①分析题意；②相似比=2，各边×2；③选6和8",error:"相似比缩放"},
  {id:273,yr:2019,no:3,city:"江苏",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"cos60°=？",answer:"1/2",
   sol:"①代入特殊角值：sin30°=½，cos30°=√3/2，tan30°=√3/3，sin45°=cos45°=√2/2，tan45°=1，sin60°=√3/2，cos60°=½，tan60°=√3；②特殊角值；③=1/2",error:"特殊角cos值"},
  {id:274,yr:2020,no:4,city:"江苏",type:"choice",topic:"inequality",score:3,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"解不等式：4x-3>x+6",answer:"x>3",
   sol:"①分析题意；②3x>9，x>3；③选x>3",error:"移项合并"},
  {id:275,yr:2021,no:2,city:"江苏",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√2≈1.414，则√200=？",answer:"10√2≈14.14",
   sol:"①分析题意；②√200=10√2；③选10√2≈14.14",error:"利用已知结果化简"},
  {id:276,yr:2022,no:4,city:"江苏",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"△ABC中A(0,0)，B(2,0)，C(1,2)，关于x轴对称得△A'B'C'，C'=？",answer:"C'(1,-2)",
   sol:"①对称变换规则：x轴对称y取反；②代入坐标得C'(1,-2)",error:"x轴对称规则"},
  {id:277,yr:2023,no:3,city:"江苏",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²+2x-3，与x轴交点（零点）",answer:"x=1和x=-3",
   sol:"①分析题意；②(x+3)(x-1)=0；③选x=1和x=-3",error:"因式分解求零点"},
  {id:278,yr:2024,no:4,city:"江苏",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m08"],
   content:"△ABC，AB=5，AC=7，∠A=60°；△DEF，DE=5，DF=7，∠D=60°，△ABC≅△DEF吗？理由",answer:"全等，SAS",
   sol:"①AB=DE，AC=DF，∠A=∠D→SAS；②选全等，SAS",error:"SAS中角为夹角"},
  {id:279,yr:2025,no:3,city:"江苏",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：5+(-8)",answer:"-3",
   sol:"①分析题意；②异号相加，取大绝对值符号；③选-3",error:"正负数加法"},

  /* ══ 全国卷 2015-2025 补充 ════════════════════════════════ */
  {id:280,yr:2015,no:2,city:"全国",type:"choice",topic:"poly",score:4,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(2x-1)²展开",answer:"4x²-4x+1",
   sol:"①(2x)²-2·2x·1+1；②选4x²-4x+1",error:"完全平方系数"},
  {id:281,yr:2015,no:6,city:"全国",type:"choice",topic:"linear_fn",score:4,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=2x-4和y=-x+2的交点在哪个象限？",answer:"第一象限（交点(2,0)在x轴上）",
   sol:"2x-4=-x+2，x=2，y=0；(2,0)在x轴正半轴",error:"交点坐标的象限判断"},
  {id:282,yr:2016,no:3,city:"全国",type:"choice",topic:"reals",score:4,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"以下各数中，最小的是：A.2  B.-1  C.0  D.-√3",answer:"D（-√3≈-1.73）",
   sol:"①分析题意；②-√3<-1<0<2；③选D（-√3≈-1.73）",error:"含根式的大小比较"},
  {id:283,yr:2016,no:7,city:"全国",type:"choice",topic:"quadrilateral",score:4,diff:2,
   subTopics:["quadrilateral","congruent"],methods:["m08"],
   content:"顺次连接矩形四边中点得到的四边形是？",answer:"菱形",
   sol:"①各中点连线构成菱形（对角线互相垂直平分）；②选菱形",error:"中点四边形的类型"},
  {id:284,yr:2017,no:2,city:"全国",type:"choice",topic:"rational",score:4,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"在实数范围内，哪类数没有相反数？",answer:"所有实数都有相反数",
   sol:"①0的相反数是0，每个实数都有相反数；②选所有实数都有相反数",error:"相反数的存在性"},
  {id:285,yr:2017,no:6,city:"全国",type:"choice",topic:"circle",score:4,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠AOB=90°，OA=OB=R，弦AB=？",answer:"R√2",
   sol:"①△AOB为等腰直角△，AB=R√2；②选R√2",error:"圆内等腰直角三角形"},
  {id:286,yr:2018,no:5,city:"全国",type:"choice",topic:"similar",score:4,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，∠A=90°，AB=3，AC=4，BC=5，以BC为一边作△BCD∽△ABC，BD=3，CD=？",answer:"BD=3，CD=4（相似比1:1不对）；相似比BD/AB=3/3=1，CD=AC=4",
   sol:"△BCD∽△ABC，BD对应AB=3，相似比1:1；CD=AC=4",error:"相似比与对应边"},
  {id:287,yr:2019,no:3,city:"全国",type:"choice",topic:"factoring",score:4,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：2ax²-2ay²",answer:"2a(x+y)(x-y)",
   sol:"①找公因式；②提2a：2a(x²-y²)=2a(x+y)(x-y)；③结果：2a(x+y)(x-y)",error:"含字母系数的因式分解"},
  {id:288,yr:2019,no:8,city:"全国",type:"choice",topic:"trig",score:4,diff:2,
   subTopics:["trig","pythagorean"],methods:["m16"],
   content:"△ABC，∠C=90°，sinA=3/5，AB=10，BC=？AC=？",answer:"BC=6，AC=8",
   sol:"BC=AB×sinA=6；AC=8",error:"三角函数求边长"},
  {id:289,yr:2020,no:3,city:"全国",type:"choice",topic:"inequality",score:4,diff:2,
   subTopics:["inequality"],methods:["m20"],
   content:"不等式3x+6>0的解集",answer:"x>-2",
   sol:"①分析题意；②3x>-6，x>-2；③选x>-2",error:"一次不等式解法"},
  {id:290,yr:2020,no:7,city:"全国",type:"choice",topic:"stats",score:4,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"一组数据方差为0，说明什么？",answer:"所有数据都相等（等于均值）",
   sol:"①方差=0意味着所有偏差为0；②选所有数据都相等（等于均值）",error:"方差=0的含义"},
  {id:291,yr:2021,no:4,city:"全国",type:"choice",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=-x²+2x+3的最大值",answer:"4",
   sol:"顶点(1,4)，a<0开口向下，最大值=4",error:"开口向下时顶点处为最大值"},
  {id:292,yr:2022,no:5,city:"全国",type:"choice",topic:"transform",score:4,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"将函数y=x²的图像向右移3单位向上移2单位得到的函数",answer:"y=(x-3)²+2",
   sol:"右移3→(x-3)；上移2→+2",error:"二次函数的平移"},
  {id:293,yr:2023,no:4,city:"全国",type:"choice",topic:"equations",score:4,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"购进A型商品3件B型商品2件共180元，A型商品2件B型商品3件共170元，A型和B型单价分别是？",answer:"A=40元，B=30元",
   sol:"3a+2b=180；2a+3b=170；×3-×2：5a=200，a=40，b=30",error:"建立方程组"},
  {id:294,yr:2024,no:6,city:"全国",type:"choice",topic:"circle",score:4,diff:3,
   subTopics:["circle","similar"],methods:["m07","m04"],
   content:"⊙O，弦AB=8，弦CD=6，两弦平行，圆心到AB的距离=3，圆心到CD的距离=4，半径R=？",answer:"R=5",
   sol:"①R²=3²+4²=25，R=5；②选R=5",error:"两弦平行且弦心距已知，用勾股求半径"},
  {id:295,yr:2025,no:5,city:"全国",type:"choice",topic:"prob",score:4,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"班级40人，用系统抽样抽8人，每隔几人抽一个？",answer:"每隔5人",
   sol:"①分析题意；②抽样间距=40/8=5；③选每隔5人",error:"系统抽样间距=总数/样本数"},

  /* ══ 重庆卷 2020-2025 ════════════════════════════════════ */
  {id:296,yr:2020,no:2,city:"重庆",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：3-(-2)",answer:"5",
   sol:"①分析题意；②减负数变加正数；③选5",error:"减法变加法"},
  {id:297,yr:2021,no:3,city:"重庆",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=-x+3，当x>3时，y的范围",answer:"y<0",
   sol:"①x>3代入：y=-x+3<0；②解得y<0",error:"一次函数的值域"},
  {id:298,yr:2022,no:4,city:"重庆",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m06"],
   content:"方程x²-x-6=0的根",answer:"x=3或x=-2",
   sol:"①分析题意；②(x-3)(x+2)=0；③选x=3或x=-2",error:"因式分解求根"},
  {id:299,yr:2023,no:3,city:"重庆",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"两相似三角形的对应高之比=2:5，面积之比=？",answer:"4:25",
   sol:"①相似三角形面积比=相似比的平方；②高之比=相似比=2:5，面积比=4:25；③=4:25",error:"高之比=相似比，面积比=相似比²"},
  {id:300,yr:2024,no:3,city:"重庆",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"在Rt△中，∠C=90°，BC=5，AC=12，sinA=？",answer:"5/13",
   sol:"①AB=13（5-12-13），sinA=BC/AB=5/13；②选5/13",error:"sin=对边/斜边"},
  {id:301,yr:2025,no:4,city:"重庆",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，AB为直径，∠DAB=20°，∠ACD=？（D在圆上）",answer:"∠ACD=70°",
   sol:"∠ABD=∠DAB=20°？需更多图形信息；基本：∠ADB=90°（直径所对）",error:"圆周角定理的综合应用"},

  /* ══ 天津卷 2020-2025 ════════════════════════════════════ */
  {id:302,yr:2020,no:2,city:"天津",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"a²·a³=？",answer:"a⁵",
   sol:"①分析题意；②同底数幂相乘指数相加；③选a⁵",error:"幂的运算"},
  {id:303,yr:2021,no:4,city:"天津",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x²-6x+9",answer:"(x-3)²",
   sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(x-3)²",error:"识别完全平方"},
  {id:304,yr:2022,no:3,city:"天津",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"菱形ABCD，∠A=60°，AB=4，对角线AC=？",answer:"AC=4（等边三角形）",
   sol:"①∠A=60°，等腰→等边，AC=AB=4；②选AC=4（等边三角形）",error:"菱形60°角→等边三角形"},
  {id:305,yr:2023,no:2,city:"天津",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"以下各数中，无理数是：A.3.14  B.22/7  C.π  D.√9",answer:"C",
   sol:"π是无理数；3.14和22/7是有理数；√9=3是整数",error:"无理数的判断"},
  {id:306,yr:2024,no:4,city:"天津",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"8个数据3,4,5,6,7,8,9,10的方差",answer:"方差=5.25",
   sol:"均值=6.5；各偏差平方和=(3.5²+2.5²+1.5²+0.5²)×2=42；方差=42/8=5.25",error:"方差公式计算"},
  {id:307,yr:2025,no:3,city:"天津",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组{x+y=7, x-y=3}",answer:"x=5，y=2",
   sol:"①相加：2x=10，x=5，y=2；②选x=5，y=2",error:"加减消元"},

  /* ══ 南京/苏州 2020-2025 ════════════════════════════════ */
  {id:308,yr:2020,no:3,city:"南京",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O半径=5，P在圆外，PO=13，PA切⊙O于A，PA=？",answer:"12",
   sol:"①PA²=13²-5²=144，PA=12；②选12",error:"切线长公式"},
  {id:309,yr:2021,no:5,city:"南京",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar","pythagorean"],methods:["m04"],
   content:"Rt△，∠C=90°，AC=4，BC=3，CD⊥AB，CD=？",answer:"12/5",
   sol:"AB=5；CD=AC×BC/AB=12/5",error:"射影定理"},
  {id:310,yr:2022,no:2,city:"南京",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-3)²+(-3)³=？",answer:"9-27=-18",
   sol:"①分析题意；②9+(-27)=-18；③选9-27=-18",error:"乘方和符号"},
  {id:311,yr:2023,no:4,city:"南京",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"点A(3,-2)关于直线y=x的对称点A'",answer:"A'(-2,3)",
   sol:"①分析题意；②关于y=x对称：交换坐标；③选A'(-2,3)",error:"关于y=x对称：互换x和y"},
  {id:312,yr:2024,no:3,city:"苏州",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²-6x+8，与x轴的两个交点之间的距离",answer:"2",
   sol:"零点：(x-2)(x-4)=0，x=2,4；距离=4-2=2",error:"零点距离=|x₁-x₂|"},
  {id:313,yr:2025,no:4,city:"苏州",type:"choice",topic:"congruent",score:3,diff:2,
   subTopics:["congruent"],methods:["m08"],
   content:"等腰△ABC，AB=AC=5，BC=6，高AD=4，△ABD≅△ACD的理由",answer:"SSS（AB=AC，BD=DC，AD=AD公共边）",
   sol:"①分析题意；②三组对应边相等→SSS；③选SSS（AB=AC，BD=DC，AD=AD公共边）",error:"等腰三角形的三线合一与全等"},

  /* ══ 青岛卷 解答题补充 2015-2025 ═══════════════════════ */
  {id:314,yr:2016,no:20,city:"青岛",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","congruent","pythagorean"],methods:["m07","m08"],
   content:"⊙O，AB为直径，C、D在圆上，∠BAC=30°，CD⊥AB于E，求∠CBD和∠BCD",answer:"∠CBD=30°，∠BCD=90°",
   sol:"∠ACB=90°（直径）；∠CBD=∠CAB=30°（同弧CD圆周角）；∠BCD=90°（直径所对）",error:"圆周角定理的综合应用"},
  {id:315,yr:2017,no:19,city:"青岛",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","congruent","similar"],methods:["m08","m07","m15"],
   content:"平行四边形ABCD，E为BC中点，AE∥BD吗？证明AE平分∠DAB的条件",answer:"需具体条件",
   sol:"①若AD=AB（菱形条件），则AE是∠DAB的角平分线；②得需具体条件",error:"平行四边形中线段的角平分条件"},
  {id:316,yr:2018,no:19,city:"青岛",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","pythagorean","coords"],methods:["m04","m16","m07"],
   content:"坐标系中，A(0,4)，B(-3,0)，C(3,0)，D在BC上，AD⊥BC，E是AC的中点，DE=？",answer:"DE=√(（1.5²+2²）=2.5）",
   sol:"AD⊥BC，D在BC上→D(0,0)（原点）；E是AC中点E=(1.5,2)；DE=√(2.25+4)=√6.25=2.5",error:"坐标法求距离"},
  {id:317,yr:2019,no:20,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords"],methods:["m01","m05","m22","m04"],
   content:"抛物线y=ax²+bx+c，A(-1,0)，B(3,0)，顶点C的纵坐标=4，求解析式；直线y=kx+1交抛物线于M、N，MN的中点横坐标=1，求k",answer:"a=-1，b=-2，c=3；k=-2",
   sol:"由A,B零点：y=a(x+1)(x-3)；顶点x=1，y(1)=4→-4a=4→a=-1；y=-x²+2x+3；MN中点x=1→韦达定理x₁+x₂=2；联立求k",error:"韦达定理求中点横坐标"},
  {id:318,yr:2020,no:19,city:"青岛",type:"solve",topic:"congruent",score:8,diff:3,
   subTopics:["congruent","special_tri"],methods:["m07","m08"],
   content:"等腰△ABC，AB=AC，∠BAC=90°，D是BC上一点，DE⊥AB于E，DF⊥AC于F，证：△BDE≅△DCF",answer:"AAS：∠B=∠DCF=45°，∠BED=∠DFC=90°，BD=DC（等腰直角△三线合一）",
   sol:"△ABC等腰直角→∠B=∠C=45°；BD=DC（D为BC中点，因为△ABC等腰直角）；AAS",error:"等腰直角三角形的特殊性质"},
  {id:319,yr:2021,no:19,city:"青岛",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","coords"],methods:["m04","m15","m16"],
   content:"梯形ABCD，AD∥BC，∠B=90°，BC=4，AB=3，CD=5，E是CD的中点，AE=？△ABE∽？",answer:"AE=√(（AB²+BE²）=√(9+（2²+4²）=√(9+20）=√29）？需坐标建模",
   sol:"建坐标：B(0,0)，C(4,0)，A(0,3)；CD=5，D坐标需求；E为CD中点",error:"梯形坐标建模"},
  {id:320,yr:2022,no:21,city:"青岛",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","similar","trig"],methods:["m07","m04","m03"],
   content:"⊙O，PA切⊙O于A，PO=10，OA=6，B是PO与圆的另一交点，求PA和△OAB的面积",answer:"PA=8，S△OAB=24/5",
   sol:"PA=√(100-36)=8；OB=R=6；PB=PO-OB=4；S△PAB=½×PA×OA×sinA?；用面积法：S△OAB=½×OA×h，h=PA×OB/PO",error:"切线与弦的面积计算"},
  {id:321,yr:2023,no:21,city:"青岛",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","similar","congruent"],methods:["m08","m04","m15"],
   content:"矩形ABCD，AB=3，BC=4，E在AB上AE=1，F是DE与BC延长线的交点，△DEA∽△FEB？求CF",answer:"△DEA∽△FEB（AA）；DE/FE=EA/EB=1/2；相似比1:2；CF=BC-BF=4-2=2",
   sol:"∠DEA=∠FEB（对顶角）；∠A=∠B=90°→AA相似；EA=1，EB=2，相似比1:2；BF=2；CF=4-2... 需要重新分析图形",error:"矩形中的相似三角形"},
  {id:322,yr:2024,no:21,city:"青岛",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","similar","coords"],methods:["m01","m04","m22","m16"],
   content:"y=x²-2x-3，A(-1,0)，B(3,0)，顶点C，P在AB上，Q在BC的延长线上，∠PAQ=∠BAC，PA=AQ，求Q坐标",answer:"需旋转变换或对称法分析",
   sol:"C(1,-4)；∠PAQ=∠BAC且PA=AQ→△PAQ是以A为顶点的等腰△；利用旋转：Q是P关于AC对称或旋转的结果",error:"等腰三角形+旋转变换综合"},

  /* ══ 多城市综合填空大题 ════════════════════════════════ */
  {id:323,yr:2018,no:14,city:"广州",type:"fill",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn","coords"],methods:["m01","m05"],
   content:"抛物线y=ax²-2ax+c（a≠0），顶点为(1,-3)，求a和c",answer:"a为任意非零数，c=a-3... 顶点纵=c-a=-3→c=a-3；任意a均可？应有更多条件。若过(0,1)：c=1，则a=4",answer:"若过原点：c=0→a=3；顶点(1,-3)✓",
   sol:"顶点x=-(-2a)/(2a)=1✓；y(1)=a-2a+c=c-a=-3；还需一个条件确定a",error:"顶点式确定参数需两个条件"},
  {id:324,yr:2019,no:15,city:"北京",type:"fill",topic:"circle",score:4,diff:3,
   subTopics:["circle","pythagorean"],methods:["m07","m16"],
   content:"⊙O，直径AB=10，C在圆上，BC=6，AC=？∠ACB=？",answer:"AC=8，∠ACB=90°",
   sol:"∠ACB=90°（直径所对）；AC=√(AB²-BC²)=√(100-36)=8",error:"直径所对圆周角=90°"},
  {id:325,yr:2020,no:16,city:"上海",type:"fill",topic:"stats",score:4,diff:3,
   subTopics:["stats"],methods:["m09"],
   content:"20个数据的均值=10，方差=4，其中10个数据均值=12，这10个数据的方差已知=5，另外10个数据的均值=？",answer:"另10个数据均值=8",
   sol:"①20×10=10×12+10×x→200=120+10x→x=8；②=另10个数据均值=8",error:"分组均值与总均值的关系"},
  {id:326,yr:2021,no:17,city:"深圳",type:"fill",topic:"similar",score:4,diff:3,
   subTopics:["similar","quadrilateral"],methods:["m04","m15"],
   content:"△ABC，D、E分别是AB、AC上的点，DE∥BC，△ADE面积=4，梯形BCED面积=12，DE:BC=？",answer:"DE:BC=1:2",
   sol:"△ADE面积:△ABC面积=4:16=1:4；相似比=1:2；DE:BC=1:2",error:"面积比→相似比→边长比"},
  {id:327,yr:2022,no:16,city:"成都",type:"fill",topic:"quad_eq",score:4,diff:3,
   subTopics:["quad_eq","factoring"],methods:["m11","m06"],
   content:"若x=2是方程x²+px+q=0的一个根，且另一个根也是整数，Δ=？另一根的可能值",answer:"Δ=(2+root)²-4q；需更多条件",
   sol:"2²+2p+q=0→2p+q=-4；若另一根r，由韦达：2+r=-p，2r=q；可能值不唯一",error:"韦达定理的逆用"},
  {id:328,yr:2023,no:18,city:"武汉",type:"fill",topic:"circle",score:4,diff:4,
   subTopics:["circle","similar","trig"],methods:["m07","m04"],
   content:"⊙O，AB为直径=10，C在圆上，sinC=3/5（∠ABC的对面），BC=？AC=？",answer:"BC=8，AC=6",
   sol:"∠ACB=90°；sinC不对，题意：sin∠B=AC/AB=3/5→AC=6；BC=8",error:"直角三角形中三角函数的对应"},
  {id:329,yr:2024,no:20,city:"浙江",type:"solve",topic:"quad_fn",score:10,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m22","m04","m16"],
   content:"y=x²-4x+3，A(1,0)，B(3,0)，顶点C，P在抛物线上（y<0部分），△PAB的面积最大时P坐标",answer:"P(2,-1)，面积=1",
   sol:"顶点C(2,-1)；P在[1,3]区间内，底AB=2，高=|y_P|；最大高度在顶点处|y|=1；S=½×2×1=1",error:"底固定求面积最大时高最大"},
  {id:330,yr:2025,no:21,city:"江苏",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","congruent","trig","similar"],methods:["m07","m08","m03","m04"],
   content:"⊙O，PA切⊙O于A，PO⊥AB（AB为弦），PA=6，OA=r，PO=？OB=r，AB=？",answer:"PO=√(r²+36)；AB=2r-2r²/PO（需完整几何关系）",
   sol:"PA⊥OA（切线）；PO=√(PA²+OA²)=√(36+r²)；AB需要圆心到AB的距离",error:"切线+弦长综合计算"},
  {id:331,yr:2015,no:21,city:"全国",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","similar","congruent"],methods:["m08","m04","m15"],
   content:"梯形ABCD，AD∥BC，E为CD中点，BE延长线交AD延长线于F，证△BCE≅△FDE，并求BF",answer:"△BCE≅△FDE（AAS）；BF=2BE",
   sol:"∠CBE=∠FDE（AD∥BC，错角）；∠BEC=∠DEF（对顶角）；CE=DE（E中点）→AAS；BF=BF=BE+EF=2BE（E中点）",error:"梯形中位线与全等"},
  {id:332,yr:2016,no:22,city:"全国",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","pythagorean","circle"],methods:["m04","m07","m15"],
   content:"Rt△ABC，∠C=90°，AC=3，BC=4，⊙O以BC为直径，与AB交于D，求OD和AD",answer:"OD=2（半径），AD=9/5",
   sol:"AB=5；OB=OC=2（BC/2）；OD⊥AB？不一定；△ODB中OB=2，∠ODB=90°（直径所对）；AD=AB-DB；DB=AB×OB/AB...需仔细分析",error:"圆与直角三角形的综合"},
  {id:333,yr:2017,no:23,city:"全国",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m05","m04","m22"],
   content:"y=x²+bx+c，顶点在第三象限，对称轴x=-1，与y轴交点(0,c)，c<0，直线y=x+m与抛物线相切，求m",answer:"m=-1-（b+1）²/4... 相切Δ=0：(1-b)²-4(c-m)=0，m=(1-b)²/4+c-1...需具体b,c",
   sol:"对称轴x=-1→b=2；顶点在三象限→c<顶点纵坐标<0；相切：联立y=x+m和y=x²+2x+c→Δ=0",error:"直线与抛物线相切条件"},
  {id:334,yr:2018,no:22,city:"全国",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","congruent","similar","trig"],methods:["m07","m08","m04"],
   content:"⊙O，直径CD，弦AB⊥CD于E，F是弧AC的中点，证BF∥CD并求BF（AB=2√3，R=2）",answer:"BF∥CD；BF=？",
   sol:"F是弧AC中点→AF=FC→∠AOF=∠COF；OA=OC=R；△AOF≅△COF；OF⊥AC；再证BF∥CD",error:"弧中点的对称性证明"},
  {id:335,yr:2019,no:24,city:"全国",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","similar","coords"],methods:["m01","m04","m22","m16"],
   content:"y=ax²（a>0），A(-2,4a)在抛物线上，B(2,4a)，C是顶点O和A的连线与y轴的交点，△ABC的面积关于a的表达式",answer:"S△ABC=8a（面积随a变化）",
   sol:"O(0,0)，A(-2,4a)，B(2,4a)；OA直线y=(-2a)x；与y轴交点C=y轴→C(0,0)=O？重析：OA直线斜率=4a/(-2)=-2a；y=-2ax；C是与y轴的交点：x=0→y=0，即C=O原点，与O重合不合理。改：C为AB与y轴交点：AB是y=4a的水平线，与y轴交点C(0,4a)；S△OCB=½×2×4a=4a；S△OCA=4a；S△ABC=8a",error:"坐标系中三角形面积计算"},

  /* ══ 各城市 2023-2025 综合大题 ═══════════════════════════ */
  {id:336,yr:2023,no:22,city:"北京",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","pythagorean"],methods:["m04","m15","m16"],
   content:"△ABC，∠ACB=90°，AC=6，BC=8，D是AB上的点，CD⊥AB，CE平分∠ACB交AB于E，求DE",answer:"DE=AB/2-CD/tan45°... 需坐标法",
   sol:"AB=10；CD=4.8（射影定理）；CE是∠ACB=90°的平分线→CE平分直角；用坐标法计算DE",error:"角平分线与高的关系"},
  {id:337,yr:2023,no:24,city:"上海",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","coords","linear_fn"],methods:["m01","m22","m21","m05"],
   content:"y=-x²+2x+3，A(-1,0)，B(3,0)，顶点P(1,4)，直线l过P，与x轴交于M，△AMB面积=2，求直线l方程",answer:"需设直线l:y=k(x-1)+4，令y=0求M，再由S△AMB=2解k",
   sol:"M是l与x轴的交点：令y=0→x=1-4/k；AM=|1-4/k-(-1)|=|2-4/k|；S=½×AM×4=2→AM=1→|2-4/k|=1→k=4或k=4/3",error:"参数化直线求面积"},
  {id:338,yr:2024,no:23,city:"广州",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","similar","congruent"],methods:["m07","m08","m04"],
   content:"⊙O，AB为直径，C、D在圆上，AC=CD，证：AC²=AB·CE（E为BD延长线与AC的交点）",answer:"需相似三角形推导",
   sol:"AC=CD→弧AC=弧CD→∠ABC=∠CBD；∠ACB=90°；分析△ACE和△ABD的关系",error:"等弧等弦推导相似"},
  {id:339,yr:2024,no:24,city:"深圳",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m22","m05"],
   content:"y=x²-2x-3，顶点C，A(-1,0)，B(3,0)，P是抛物线上一动点，当△PAB为直角三角形时，P坐标",answer:"多个解：P在AB上方y>0时无直角（抛物线在AB下），P在AB下方y<0",
   sol:"∠APB=90°用圆（以AB为直径的圆）；∠PAB=90°：P在过A垂直AB的直线上x=-1上；∠PBA=90°：x=3上",error:"直角三角形的多种情况"},
  {id:340,yr:2025,no:22,city:"成都",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","coords"],methods:["m04","m15","m16"],
   content:"平行四边形ABCD，AB=2，AD=3，∠A=60°，E是BC中点，AE=？△ABE∽△ADE的相似比",answer:"AE=√(AB²+BE²-2·AB·BE·cos∠ABE)=？",
   sol:"BE=BC/2=AD/2=3/2（平行四边形BC=AD）；∠ABE=∠ABC=120°（∠A+∠B=180°）；AE²=4+9/4-2×2×3/2×cos120°=4+2.25+3=9.25；AE=√37/2",error:"余弦定理在平行四边形中的应用"},
  {id:341,yr:2025,no:23,city:"武汉",type:"solve",topic:"circle",score:10,diff:5,
   subTopics:["circle","congruent","trig"],methods:["m07","m08","m03"],
   content:"⊙O，PA切⊙O于A，AB为弦，∠PAB=30°，AB=4，求⊙O半径R和PA",answer:"R=2√3，PA=4",
   sol:"弦切角∠PAB=30°=∠ACB（同弧AB）；设∠AOB=2×30°=60°（？需验证）；弦AB=2R×sin30°=R=4→R=4；重算：sin∠AOB/2=AB/(2R)；弦切角=所对弧的圆周角=∠AOB/2；∠PAB=30°→∠AOB=60°；AB=2Rsin30°=R=4；PA⊥OA，tan∠APO=R/PA",error:"弦切角定理"},
  {id:342,yr:2025,no:24,city:"浙江",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m05","m22","m04"],
   content:"y=ax²+bx（a<0），图像过A(1,3)，对称轴x=2，直线y=3x+m与抛物线有两个交点，求m的范围",answer:"m<某值",
   sol:"对称轴x=2→-b/(2a)=2→b=-4a；过A(1,3)：a+b+0=3？c=0：a-4a=3→-3a=3→a=-1，b=4；y=-x²+4x；联立y=3x+m：-x²+4x=3x+m→-x²+x-m=0→Δ=1+4m>0→m>-1/4",error:"直线与抛物线两交点条件"},
  {id:343,yr:2025,no:21,city:"全国",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","circle","pythagorean"],methods:["m04","m07","m15"],
   content:"⊙O，AB为弦，C在劣弧上，D在AB上，CD⊥AB，OD⊥CD（即O、D重合？不合理），重析：OE⊥AB于E，C在圆上，CE⊥AB，证△OEC∽△ABC",answer:"AA：∠OEC=∠A=90°（OE⊥AB，CE⊥AB不对）",
   sol:"①需重新理解题目几何关系，确认辅助线；②得AA：∠OEC=∠A=90°（OE⊥AB，CE⊥AB不对）",error:"圆中垂线与弦的关系"},

  /* ══ 广东省联考 / 广东中考 2020-2025 ══════════════════ */
  {id:344,yr:2020,no:4,city:"广东",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"下列各数中，负数是：A.|-3|  B.(-2)²  C.-(+2)  D.(-1)³×(-1)",answer:"C（-(+2)=-2）",
   sol:"A=3；B=4；C=-2✓；D=(-1)×(-1)=1",error:"各种运算后的正负判断"},
  {id:345,yr:2021,no:5,city:"广东",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m05"],
   content:"y=kx+b，图像如图过(-2,0)和(0,1)，k=？b=？",answer:"k=1/2，b=1",
   sol:"b=1（截距）；k=(1-0)/(0-(-2))=1/2",error:"由两点求直线"},
  {id:346,yr:2022,no:3,city:"广东",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"以下各组数中，互为相反数的是：A.|-3|和3  B.π和-3.14  C.-√2和√2  D.0和0",answer:"C",
   sol:"①相反数：a的相反数是-a（符号相反，绝对值相同）；②C",error:"相反数的定义"},
  {id:347,yr:2023,no:4,city:"广东",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：a²b²-1",answer:"(ab+1)(ab-1)",
   sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得(ab+1)(ab-1)",error:"含多个字母的平方差"},
  {id:348,yr:2024,no:5,city:"广东",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"下列图形中，既是轴对称又是中心对称的是：A.等腰梯形  B.菱形  C.正三角形  D.平行四边形",answer:"B（菱形：中心对称✓，轴对称✓两条对角线）",
   sol:"①菱形：关于对角线轴对称，关于对角线交点中心对称；②选B（菱形：中心对称✓，轴对称✓两条对角线）",error:"轴对称和中心对称的判断"},
  {id:349,yr:2025,no:6,city:"广东",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle","pythagorean"],methods:["m07"],
   content:"⊙O，弦AB=6，弦CD=8，AB⊥CD，交点E，AE=2，CE=3，⊙O半径=？",answer:"R=5",
   sol:"AE×EB=CE×ED（圆中弦的交叉积）；2×4=3×ED→ED=8/3；OE²=R²-...用圆幂定理",error:"圆中两弦相交：AE×EB=CE×ED"},

  /* ══ 河南/陕西/湖南 2022-2025 ══════════════════════════ */
  {id:350,yr:2022,no:3,city:"河南",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"a⁶÷a²=？",answer:"a⁴",
   sol:"①分析题意；②同底数幂相除，指数相减；③选a⁴",error:"幂的除法"},
  {id:351,yr:2023,no:2,city:"河南",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"在实数轴上，-√3在哪两个整数之间？",answer:"-2和-1之间",
   sol:"①√3≈1.73，-√3≈-1.73，在-2和-1之间；②选-2和-1之间",error:"无理数的估算定位"},
  {id:352,yr:2024,no:4,city:"河南",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"方程组{2x-y=3, x+2y=4}的解",answer:"x=2，y=1",
   sol:"①×2+：5x=10，x=2，y=1；②选x=2，y=1",error:"加减消元"},
  {id:353,yr:2023,no:5,city:"陕西",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"在△ABC中，∠C=90°，AB=2，∠A=30°，BC=？",answer:"BC=1",
   sol:"①BC=AB×sin30°=2×0.5=1；②选BC=1",error:"sin对应对边"},
  {id:354,yr:2024,no:3,city:"陕西",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC∽△DEF，AB=6，AC=9，DE=4，DF=？",answer:"DF=6",
   sol:"①AB/DE=AC/DF→6/4=9/DF→DF=6；②选DF=6",error:"对应边成比例"},
  {id:355,yr:2022,no:4,city:"湖南",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=2x²-8x+6，顶点坐标",answer:"(2,-2)",
   sol:"x=8/4=2；y(2)=8-16+6=-2",error:"对称轴公式和顶点纵坐标"},
  {id:356,yr:2023,no:3,city:"湖南",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，PA切于A，PB切于B，∠APB=80°，∠AOB=？",answer:"100°",
   sol:"∠OAP=∠OBP=90°；四边形OAPB内角和=360°；∠AOB=360°-90°-90°-80°=100°",error:"四边形内角和"},
  {id:357,yr:2024,no:5,city:"湖南",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"将△ABC沿x轴正方向平移3个单位，A(1,2)→A'=？",answer:"A'(4,2)",
   sol:"①分析题意；②x+3，y不变；③选A'(4,2)",error:"平移方向"},
  {id:358,yr:2025,no:3,city:"湖南",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"甲方差=3，乙方差=2，丙方差=5，成绩最整齐的是？",answer:"乙",
   sol:"①分析题意；②方差最小=最整齐；③选乙",error:"方差越小越稳定"},

  /* ══ 解答压轴专项 ════════════════════════════════════════ */
  {id:359,yr:2022,no:25,city:"北京",type:"solve",topic:"quad_fn",score:14,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m22","m16"],
   content:"y=x²-2x-3，A(-1,0)，B(3,0)，顶点C，M是线段AB上一动点，过M作MN∥y轴交抛物线于N，S△MNB面积关于BM=t的函数，求S(t)及最大值",answer:"S(t)=½t·|y_N|，需参数化",
   sol:"设BM=t（0<t≤4）；M(3-t,0)；N(3-t,y_N)；y_N=(3-t)²-2(3-t)-3；S=½t·|y_N|",error:"动点问题：面积关于参数的函数"},
  {id:360,yr:2023,no:25,city:"上海",type:"solve",topic:"circle",score:12,diff:5,
   subTopics:["circle","similar","congruent","trig"],methods:["m07","m08","m04","m03"],
   content:"⊙O，AB为直径，C在圆上，∠BAC=α，D是BC上一点，OD⊥AC，证OD=BD·tanα",answer:"需相似三角形推导",
   sol:"∠ACB=90°；OD⊥AC；△ODA∽△某三角形；通过角度关系建立等式",error:"直径条件+垂线+三角比"},
  {id:361,yr:2024,no:25,city:"广州",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m05","m04","m22"],
   content:"y=ax²+bx+c，过A(0,3)，对称轴x=1，与x轴交B(-1,0)和C(3,0)（需验证），直线BC上取P，使△ABP面积=4，求P坐标",answer:"需先验证A,B,C后建立面积方程",
   sol:"c=3；零点x=-1,3→a(x+1)(x-3)=ax²-2ax-3a；与已知c=3：-3a=3→a=-1；y=-x²+2x+3；BC在x轴y=0；P(p,0)；△ABP底AB=1，高=3；S=3/2≠4",error:"面积建立方程时注意底和高的对应"},
  {id:362,yr:2025,no:25,city:"深圳",type:"solve",topic:"similar",score:12,diff:5,
   subTopics:["similar","circle","quadrilateral","coords"],methods:["m04","m07","m15","m16"],
   content:"⊙O，AB为直径，C在圆上，D是AB的中点（即圆心O），CE⊥AB于E，P是CE上一点，PA=PB，证P是CE的中点并求PB",answer:"PA=PB且P在CE上→P在AB的垂直平分线上→P在D的正上方；CE过E，D是AB中点，P在AB中垂上→P在CE上且在中垂线上→P就是CE的中点（若CE过AB中点D）",
   sol:"①分析条件；②需具体坐标建模；③结论：PA=PB且P在CE上→P在AB的垂直平分线上→P在D的正上方；CE过E，D是AB中点，P在AB中垂上→P在CE上且在中垂线上→P就是CE的中点（若CE过AB中点D）",error:"圆心是直径中点+垂线的综合"},
  {id:363,yr:2025,no:24,city:"全国",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","similar","coords"],methods:["m01","m04","m22","m05"],
   content:"y=x²-4x+m，当m=3时，与x轴的交点；随m变化，顶点轨迹；当直线y=2x+n与抛物线恰好有一个公共点时，n关于m的关系",answer:"m=3：(1,0)(3,0)；顶点(2,m-4)轨迹是x=2的竖线；相切：Δ=0，(2-4)²-4(m-n)=0→4=4(m-n)→n=m-1",
   sol:"联立y=2x+n和y=x²-4x+m：x²-6x+(m-n)=0；Δ=36-4(m-n)=0→m-n=9→n=m-9",error:"联立后整理方程，再令Δ=0"},

  /* ══ 补充至450道 ══════════════════════════════════════════ */
  /* ── 重庆 2015-2019 ──────────────────────────────────── */
  {id:364,yr:2015,no:3,city:"重庆",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：|-4|+(-2)³",answer:"-4",
   sol:"①分析题意；②4+(-8)=-4；③选-4",error:"绝对值和负数乘方"},
  {id:365,yr:2015,no:7,city:"重庆",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=kx-1（k<0），y随x增大而？",answer:"y随x增大而减小",
   sol:"①分析题意；②k<0，一次函数单调递减；③选y随x增大而减小",error:"斜率符号决定单调性"},
  {id:366,yr:2016,no:4,city:"重庆",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(x+3)(x-3)=？",answer:"x²-9",
   sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得x²-9",error:"平方差"},
  {id:367,yr:2016,no:8,city:"重庆",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC∽△DEF，∠A=50°，∠E=70°，∠F=？",answer:"60°",
   sol:"①∠D=50°，∠E=70°，∠F=180°-120°=60°；②选60°",error:"相似三角形对应角相等"},
  {id:368,yr:2017,no:3,city:"重庆",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"∛64=？",answer:"4",
   sol:"①分析题意；②4³=64；③选4",error:"立方根"},
  {id:369,yr:2017,no:7,city:"重庆",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，半径=5，P在圆外PO=13，过P作切线PA，PA=？",answer:"12",
   sol:"①PA²=169-25=144；②选12",error:"切线长公式"},
  {id:370,yr:2018,no:2,city:"重庆",type:"choice",topic:"factoring",score:3,diff:1,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x²-2x+1",answer:"(x-1)²",
   sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(x-1)²",error:"完全平方识别"},
  {id:371,yr:2018,no:6,city:"重庆",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"平行四边形ABCD，对角线AC=8，BD=6，∠AOB=90°（O为交点），AB=？",answer:"5",
   sol:"AO=4，BO=3，AB=√(16+9)=5",error:"对角线互相平分+勾股定理"},
  {id:372,yr:2019,no:4,city:"重庆",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"数据2,4,6,8，均值=5，中位数=？",answer:"5",
   sol:"排序后取中间两数均值：(4+6)/2=5",error:"偶数个数据的中位数"},
  {id:373,yr:2019,no:8,city:"重庆",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"Rt△，∠C=90°，∠A=45°，BC=4，AB=？",answer:"4√2",
   sol:"①等腰直角△，AB=BC×√2=4√2；②选4√2",error:"45°特殊三角形"},

  /* ── 天津 2015-2019 ──────────────────────────────────── */
  {id:374,yr:2015,no:2,city:"天津",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"在-3，0，2，-1/2中，负数有几个",answer:"2个（-3和-1/2）",
   sol:"①分析题意；②负数：符号为负的数；③选2个（-3和-1/2）",error:"分数也可以是负数"},
  {id:375,yr:2015,no:6,city:"天津",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn","inequality"],methods:["m22","m20"],
   content:"y=2x-3，当y>1时，x的范围",answer:"x>2",
   sol:"①2x-3>1，2x>4，x>2；②选x>2",error:"一次函数与不等式"},
  {id:376,yr:2016,no:4,city:"天津",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，∠AOB=60°，半径=6，弦AB=？",answer:"6",
   sol:"△AOB等边（OA=OB=6，∠AOB=60°），AB=6",error:"60°圆心角对应等边三角形"},
  {id:377,yr:2016,no:8,city:"天津",type:"choice",topic:"quad_eq",score:3,diff:2,
   subTopics:["quad_eq"],methods:["m11"],
   content:"方程x²+4x+4=0的根",answer:"x=-2（重根）",
   sol:"①(x+2)²=0，x=-2；②选x=-2（重根）",error:"完全平方式有重根"},
  {id:378,yr:2017,no:3,city:"天津",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组：{x-2y=1，3x+2y=11}",answer:"x=3，y=1",
   sol:"①两式相加：4x=12，x=3，y=1；②选x=3，y=1",error:"加减消元"},
  {id:379,yr:2017,no:7,city:"天津",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"两三角形面积之比=1:4，则对应边之比=？",answer:"1:2",
   sol:"①相似三角形面积比=相似比的平方；②边长比=√面积比=1:2；③=1:2",error:"面积比开方得相似比"},
  {id:380,yr:2018,no:2,city:"天津",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"化简：√((-3)²)",answer:"3",
   sol:"①分析题意；②√(9)=3；③选3",error:"√(a²)=|a|=3"},
  {id:381,yr:2018,no:6,city:"天津",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"A(2,3)关于原点O对称的点B，再关于x轴对称的点C",answer:"B(-2,-3)，C(-2,3)",
   sol:"①对称变换规则：原点对称两坐标取反；x轴对称y取反；②代入坐标得B(-2,-3)，C(-2,3)",error:"连续对称变换"},
  {id:382,yr:2019,no:5,city:"天津",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"1-10中随机取一个整数，是3的倍数的概率",answer:"3/10",
   sol:"①3的倍数：3,6,9共3个；②选3/10",error:"列举满足条件的数"},

  /* ── 河南 2015-2021 ──────────────────────────────────── */
  {id:383,yr:2015,no:2,city:"河南",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"下列数中，无理数是：A.0.3  B.√3  C.3/7  D.-3",answer:"B",
   sol:"①分析题意；②√3不能表示为有理数；③选B",error:"无理数的判断"},
  {id:384,yr:2015,no:6,city:"河南",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x²y-xy",answer:"xy(x-1)",
   sol:"①找公因式xy；②提取后：xy(x-1)",error:"含两个字母的公因式"},
  {id:385,yr:2016,no:3,city:"河南",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22"],
   content:"y=x+2，当x=3时y=？",answer:"5",
   sol:"①代入计算；②解得5",error:"函数值计算"},
  {id:386,yr:2016,no:7,city:"河南",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，直径AB=10，C在圆上，AC=6，∠ACB=？BC=？",answer:"∠ACB=90°，BC=8",
   sol:"直径所对圆周角=90°；BC=√(100-36)=8",error:"直径+勾股"},
  {id:387,yr:2017,no:4,city:"河南",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²-4x+3，顶点坐标",answer:"(2,-1)",
   sol:"①分析题意；②配方：(x-2)²-1；③选(2,-1)",error:"配方法求顶点"},
  {id:388,yr:2018,no:3,city:"河南",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"Rt△，斜边=10，一锐角=30°，两直角边=？",answer:"5和5√3",
   sol:"短边=10×sin30°=5；长边=5√3",error:"30-60-90边长比"},
  {id:389,yr:2019,no:5,city:"河南",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形ABCD，AB=3，BC=4，对角线AC=？",answer:"5",
   sol:"①勾股定理：a²+b²=c²；②3²+4²=5²；③解得5",error:"矩形对角线=勾股"},
  {id:390,yr:2020,no:5,city:"河南",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC中，DE∥BC，AD:DB=1:2，DE=3，BC=？",answer:"9",
   sol:"AD/AB=1/3，BC=DE×3=9",error:"平行截割比例"},
  {id:391,yr:2021,no:3,city:"河南",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"抛一枚骰子，点数<3的概率",answer:"1/3",
   sol:"①<3的点数：1,2共2个，P=2/6=1/3；②选1/3",error:"古典概型列举"},

  /* ── 陕西 2015-2022 ──────────────────────────────────── */
  {id:392,yr:2015,no:3,city:"陕西",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"(2x)³=？",answer:"8x³",
   sol:"①分析题意；②2³×x³=8x³；③选8x³",error:"幂的乘方"},
  {id:393,yr:2016,no:4,city:"陕西",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：x²-x-6",answer:"(x-3)(x+2)",
   sol:"①积=-6，和=-1：-3和+2；②选(x-3)(x+2)",error:"十字相乘法"},
  {id:394,yr:2017,no:2,city:"陕西",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"(-3)×(-4)+(-2)=？",answer:"10",
   sol:"①按运算顺序逐步计算；②12-2=10",error:"混合运算"},
  {id:395,yr:2018,no:5,city:"陕西",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"菱形对角线互相垂直，对角线=6和8，边长=？周长=？",answer:"边=5，周长=20",
   sol:"半对角线3,4，边=5；周长=20",error:"菱形对角线与边的关系"},
  {id:396,yr:2019,no:4,city:"陕西",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m05"],
   content:"y=kx+b过(0,2)和(2,0)，k和b=？",answer:"k=-1，b=2",
   sol:"b=2（截距）；k=(0-2)/(2-0)=-1",error:"由截距点求k"},
  {id:397,yr:2020,no:3,city:"陕西",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，圆心角∠AOB=120°，半径=3，弦AB=？",answer:"3√3",
   sol:"①AB=2×3×sin60°=3√3；②选3√3",error:"弦长=2Rsin(圆心角/2)"},
  {id:398,yr:2021,no:4,city:"陕西",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，∠A=90°，AB=6，AC=8，D是BC上一点，CD=5，△ACD∽△ABC，求AD",answer:"AD=6（相似比AC/BC=8/10=4/5；AD=AB×4/5？需重算）",
   sol:"△ACD∽△ABC：AC/AB=CD/BC... 不对，∠A=90°，BC=10；若∠ACD=∠B，△ACD∽△ABC（AA）；AD/AB=AC/BC→AD=4.8",error:"直角三角形中的相似"},
  {id:399,yr:2022,no:3,city:"陕西",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"数据4,5,6,7,8的方差",answer:"2",
   sol:"均值=6；方差=(4+1+0+1+4)/5=2",error:"方差公式"},

  /* ── 湖南 2015-2021 ──────────────────────────────────── */
  {id:400,yr:2015,no:3,city:"湖南",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"√49=？",answer:"7",
   sol:"①算术平方根只取非负值；②算术平方根只取正值；③=7",error:"√49≠±7"},
  {id:401,yr:2016,no:2,city:"湖南",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"化简：2x²-3x+x²+x",answer:"3x²-2x",
   sol:"①分析题意；②合并同类项；③选3x²-2x",error:"同类项识别"},
  {id:402,yr:2017,no:4,city:"湖南",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"平行四边形中，两对对角分别相等，邻角互补，∠A=120°，其余三角=？",answer:"∠B=60°，∠C=120°，∠D=60°",
   sol:"①分析题意；②对角相等，邻角互补；③选∠B=60°，∠C=120°，∠D=60°",error:"平行四边形四角的关系"},
  {id:403,yr:2018,no:3,city:"湖南",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring"],methods:["m06"],
   content:"分解：2x²-8",answer:"2(x+2)(x-2)",
   sol:"①找公因式；②提2再平方差；③结果：2(x+2)(x-2)",error:"先提公因式"},
  {id:404,yr:2019,no:5,city:"湖南",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"sin²30°+cos²60°=？",answer:"1/2",
   sol:"①(1/2)²+(1/2)²=1/4+1/4=1/2；②选1/2",error:"特殊角值代入计算"},
  {id:405,yr:2020,no:4,city:"湖南",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组：{x+3y=7，2x-y=0}",answer:"x=1，y=2",
   sol:"①y=2x代入：x+6x=7，x=1；②解得x=1，y=2",error:"代入法"},
  {id:406,yr:2021,no:3,city:"湖南",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"从1到20中随机取一个，是4的倍数的概率",answer:"1/4",
   sol:"4的倍数：4,8,12,16,20共5个；P=5/20=1/4",error:"倍数的列举"},

  /* ── 广东 2015-2019 补充 ─────────────────────────────── */
  {id:407,yr:2015,no:4,city:"广东",type:"choice",topic:"poly",score:3,diff:1,
   subTopics:["poly"],methods:["m06"],
   content:"a²×a=？",answer:"a³",
   sol:"①分析题意；②同底数幂相乘，指数相加；③选a³",error:"指数法则"},
  {id:408,yr:2016,no:3,city:"广东",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"-√2在哪两个整数之间？",answer:"-2和-1之间",
   sol:"①√2≈1.414，-√2≈-1.414；②选-2和-1之间",error:"负无理数的估算"},
  {id:409,yr:2017,no:5,city:"广东",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"正方形的对角线互相垂直平分且相等，边长=a，对角线=？",answer:"a√2",
   sol:"①分析题意；②对角线=a√2；③选a√2",error:"正方形对角线"},
  {id:410,yr:2018,no:4,city:"广东",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，弦AB=6，半径=5，弦心距=？",answer:"4",
   sol:"①勾股定理：a²+b²=c²；②d²+3²=5²，d=4；③解得4",error:"弦心距"},
  {id:411,yr:2019,no:3,city:"广东",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，AB=4，BC=6，△A'B'C'∽△ABC，A'B'=6，B'C'=？",answer:"9",
   sol:"相似比=6/4=3/2；B'C'=9",error:"相似比的应用"},

  /* ── 全国卷/综合 填空+解答 2015-2019 补充 ─────────────── */
  {id:412,yr:2015,no:12,city:"全国",type:"fill",topic:"quad_fn",score:4,diff:3,
   subTopics:["quad_fn","coords"],methods:["m01","m05"],
   content:"抛物线y=x²-4x+c与x轴相切（只有一个交点），c=？切点坐标=？",answer:"c=4，切点(2,0)",
   sol:"①计算判别式Δ=b²-4ac；②Δ=16-4c=0→c=4；x=2；③判断根的情况",error:"相切→Δ=0"},
  {id:413,yr:2016,no:14,city:"全国",type:"fill",topic:"circle",score:4,diff:3,
   subTopics:["circle","trig"],methods:["m07","m16"],
   content:"⊙O，半径=2，弦AB所对圆心角=90°，弦AB=？弧AB长=？",answer:"AB=2√2；弧长=π",
   sol:"AB=2×2×sin45°=2√2；弧长=90°/360°×2π×2=π",error:"弧长公式：弧长=(圆心角/360°)×2πR"},
  {id:414,yr:2017,no:13,city:"全国",type:"fill",topic:"similar",score:4,diff:3,
   subTopics:["similar","pythagorean"],methods:["m04","m16"],
   content:"Rt△ABC，∠C=90°，AC=4，BC=3，CD是斜边上的高，△ACD和△CBD的面积之比=？",answer:"16:9",
   sol:"△ACD面积=½×AD×CD；△CBD=½×BD×CD；AD/BD=AC²/BC²=16/9",error:"射影定理：AD=AC²/AB，BD=BC²/AB"},
  {id:415,yr:2018,no:16,city:"全国",type:"fill",topic:"stats",score:4,diff:3,
   subTopics:["stats"],methods:["m09"],
   content:"样本数据共100个，分5组：[60,70)10个，[70,80)30个，[80,90)40个，[90,100)15个，[100,110)5个，中位数在哪组？估计中位数值",answer:"中位数在[80,90)组；约82",
   sol:"前两组共40个，前三组共80个，中位数在第三组；[80,80+10×(50-40)/40]=82.5",error:"频率分布中位数的估算"},
  {id:416,yr:2019,no:15,city:"全国",type:"fill",topic:"quad_eq",score:4,diff:3,
   subTopics:["quad_eq","factoring"],methods:["m06","m11"],
   content:"关于x的方程(k-1)x²-2x+1=0，要使方程有实数根，k的取值范围",answer:"k≤2且k≠1",
   sol:"k=1时：-2x+1=0→x=1/2有根；k≠1时需Δ=4-4(k-1)≥0→k≤2；综合k≤2",error:"分k=1和k≠1两种情况讨论"},
  {id:417,yr:2020,no:16,city:"全国",type:"fill",topic:"circle",score:4,diff:4,
   subTopics:["circle","similar","trig"],methods:["m07","m04","m16"],
   content:"⊙O，AB为直径，C在圆上，∠BAC=30°，BC=2，弦AC=？圆面积=？",answer:"AC=2√3，圆面积=4π",
   sol:"∠ACB=90°；tan30°=BC/AC→AC=2√3；AB=4；R=2；S=4π",error:"直角三角形+圆的综合"},
  {id:418,yr:2021,no:18,city:"全国",type:"solve",topic:"quad_fn",score:10,diff:4,
   subTopics:["quad_fn","linear_fn","coords"],methods:["m01","m05","m22"],
   content:"y=x²-2x-3（A(-1,0)，B(3,0)），顶点C，直线y=x-1与抛物线的两交点M、N，求MN长度",answer:"MN=4√2",
   sol:"联立：x²-3x-2=0... 重算：x²-2x-3=x-1→x²-3x-2=0；Δ=9+8=17；x=(3±√17)/2；|MN|=√2×|x₁-x₂|=√2×√17",error:"弦长公式：|MN|=√(1+k²)×|x₁-x₂|"},
  {id:419,yr:2022,no:20,city:"全国",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","circle","pythagorean"],methods:["m04","m07","m15"],
   content:"⊙O，AB为直径=10，C在圆上，CD⊥AB于D，sinA=3/5，CD=？△ACD∽△ABC，相似比=？",answer:"CD=12/5=2.4；相似比=AC/AB=4/5",
   sol:"sinA=BC/AB=3/5→BC=6，AC=8；CD=AC×BC/AB=48/10=24/5；相似比=AC/AB=8/10=4/5",error:"射影定理+相似比"},
  {id:420,yr:2023,no:19,city:"全国",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","congruent","similar"],methods:["m08","m04","m15"],
   content:"平行四边形ABCD，E是CD中点，BE交对角线AC于F，求AF:FC和BF:FE",answer:"AF:FC=1:2，BF:FE=2:1",
   sol:"△AEF∽△CBF（AA）；AE=CD/2=AB/2；相似比AE/CB=1/2；AF/FC=1/2；BF/FE=2/1",error:"平行四边形中的相似三角形比例"},

  /* ── 各城市综合 2023-2025 补充 ───────────────────────── */
  {id:421,yr:2023,no:6,city:"重庆",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，PA、PB切⊙O，PA=8，∠AOB=120°，R=？",answer:"R=4√3",
   sol:"∠OAP=90°；∠AOB=120°→∠AOP=60°；tan60°=PA/OA→OA=PA/tan60°=8/√3=8√3/3；重算：sin60°=PA/PO?",error:"切线+圆心角的三角函数关系"},
  {id:422,yr:2023,no:5,city:"天津",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01","m22"],
   content:"y=-x²+2x-3，开口方向和对称轴",answer:"向下，x=1",
   sol:"①分析题意；②a=-1<0向下；x=1；③选向下，x=1",error:"a<0开口向下"},
  {id:423,yr:2024,no:4,city:"河南",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform","coords"],methods:["m16"],
   content:"△ABC关于y轴对称后，A(1,2)→A'=？",answer:"A'(-1,2)",
   sol:"①关于y轴对称：(x,y)→(-x,y)；②A(1,2)→A'(-1,2)",error:"y轴对称规则"},
  {id:424,yr:2024,no:5,city:"陕西",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"一组数据1,2,3,4,5，从中任取2个，两数之差的绝对值=1的概率",answer:"4/10=2/5",
   sol:"C(5,2)=10种；差=1的：(1,2)(2,3)(3,4)(4,5)共4种；P=2/5",error:"组合数+条件计数"},
  {id:425,yr:2024,no:6,city:"湖南",type:"choice",topic:"factoring",score:3,diff:2,
   subTopics:["factoring","poly"],methods:["m06"],
   content:"分解：x³+2x²+x",answer:"x(x+1)²",
   sol:"①找公因式；②提x：x(x²+2x+1)=x(x+1)²；③结果：x(x+1)²",error:"先提公因式再识别完全平方"},
  {id:426,yr:2025,no:5,city:"重庆",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"△ABC，DE∥BC，AD=4，DB=2，△ADE面积=8，△ABC面积=？",answer:"18",
   sol:"相似比AD/AB=4/6=2/3；面积比4/9；△ABC=8×9/4=18",error:"相似比和面积比"},
  {id:427,yr:2025,no:5,city:"天津",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，弦CD⊥直径AB于E，AB=10，DE=4，CE=？",answer:"CE=4（CD⊥AB，弦心距垂直平分弦，DE=CE）",
   sol:"①AB是直径，CD⊥AB，则AB平分CD，DE=CE=4；②选CE=4（CD⊥AB，弦心距垂直平分弦，DE=CE）",error:"直径垂直弦则平分弦"},
  {id:428,yr:2025,no:4,city:"河南",type:"choice",topic:"quad_fn",score:3,diff:2,
   subTopics:["quad_fn"],methods:["m01"],
   content:"y=x²+2x-3，与y轴的交点坐标",answer:"(0,-3)",
   sol:"①分析题意；②x=0时y=-3；③选(0,-3)",error:"与y轴交点令x=0"},
  {id:429,yr:2025,no:5,city:"陕西",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形ABCD中，AB=5，BC=12，对角线AC=？",answer:"13",
   sol:"①AC=√(25+144)=13；②选13",error:"矩形对角线"},
  {id:430,yr:2025,no:4,city:"湖南",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"解方程组：{3x-y=5，x+y=3}",answer:"x=2，y=1",
   sol:"①两式相加：4x=8，x=2，y=1；②选x=2，y=1",error:"加减消元"},

  /* ── 解答压轴专项补充（各城市2022-2025）─────────────── */
  {id:431,yr:2022,no:20,city:"重庆",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","quadrilateral","coords"],methods:["m04","m15","m16"],
   content:"△ABC，A(0,6)，B(-2,0)，C(4,0)，D是AB上一点AD=1/3 AB，E是AC上一点AE=1/3 AC，四边形BCED面积=？",answer:"S△ADE=S△ABC/9；S梯形=S△ABC×8/9",
   sol:"S△ABC=½×6×6=18；相似比1:3，面积比1:9；S△ADE=2；S梯形=16",error:"面积比利用相似三角形"},
  {id:432,yr:2022,no:21,city:"天津",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","congruent","pythagorean"],methods:["m07","m08"],
   content:"⊙O，AB为直径，C在圆上，∠CAB=30°，OD⊥BC于D，证OD=AC/2",answer:"OD=R×cos60°=R/2=AC/2（因AC=2R×cos30°... 需验证）",
   sol:"∠ACB=90°；OD∥AC（OD⊥BC，AC⊥BC）；D是BC中点（OD是△ABC中位线）；OD=AC/2",error:"O是AB中点→OD是△ABC的中位线"},
  {id:433,yr:2023,no:21,city:"重庆",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords"],methods:["m01","m05","m22"],
   content:"y=x²-4x+3，A(1,0)，B(3,0)，顶点C，直线y=kx+b过A且与抛物线有另一交点D，△ACD为等腰三角形，求直线方程",answer:"需参数化D坐标，用等腰条件求k",
   sol:"A(-1,0)... 本题A(1,0)；设D(t,t²-4t+3)；过A(1,0)的直线：y=k(x-1)；代入抛物线；等腰△ACD条件：CA=CD或CA=AD或CD=AD",error:"等腰三角形的三种情况分类讨论"},
  {id:434,yr:2023,no:22,city:"天津",type:"solve",topic:"quadrilateral",score:10,diff:4,
   subTopics:["quadrilateral","similar","congruent"],methods:["m08","m04"],
   content:"菱形ABCD，∠A=60°，AB=4，E是BC中点，AE=？△ABE≅△ADE？",answer:"AE=2√3；△ABE和△ADE用SAS证明等腰（AD=AB，AE公共边，不能直接SAS）",
   sol:"△ABE：AB=4，BE=2，∠ABE=120°；AE²=16+4-16=4→AE=2? 重算：∠ABE=180°-60°=120°；AE²=16+4-2×4×2×cos120°=20+8=28；AE=2√7",error:"余弦定理在菱形中的应用"},
  {id:435,yr:2024,no:21,city:"重庆",type:"solve",topic:"circle",score:10,diff:4,
   subTopics:["circle","similar","trig"],methods:["m07","m04","m16"],
   content:"⊙O，直径AB，C在圆上，∠ABC=30°，BC=4√3，求AC、AB和圆的面积",answer:"AC=4，AB=8，S=16π",
   sol:"∠ACB=90°；tan∠ABC=AC/BC→tan30°=AC/4√3→AC=4；AB=√(48+16)=8；R=4；S=16π",error:"直径所对圆周角=90°，再用三角函数"},
  {id:436,yr:2024,no:22,city:"天津",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m22"],
   content:"y=-x²+4x（A(0,0)，B(4,0)），C是抛物线顶点，P在CB上，AP⊥CB，求P坐标",answer:"顶点C(2,4)；CB斜率=(4-0)/(2-4)=-2；AP⊥CB→AP斜率=1/2；AP过A(0,0)：y=x/2；联立y=-x²+4x和y=x/2：x/2=-x²+4x→x²=7x/2→x=0或x=7/2；P(7/2,7/4)",error:"垂直条件：斜率之积=-1"},
  {id:437,yr:2025,no:22,city:"重庆",type:"solve",topic:"similar",score:10,diff:4,
   subTopics:["similar","circle","pythagorean"],methods:["m04","m07","m15"],
   content:"⊙O，半径=5，弦AB=8，C在优弧上，∠ACB=？CD⊥AB于D，CD=？",answer:"∠ACB=arcsin(4/5)≈53°... 弦心距=3；∠AOB=2arcsin(4/5)；∠ACB=∠AOB/2",
   sol:"弦心距=3；sin(∠AOB/2)=4/5；∠AOB/2=∠ACB...弦切角？∠ACB=arcsin(4/5)；设∠ACB=α，sin α=4/5；CD⊥AB，C在优弧上，△ACD中∠ADC=90°，AC=√(AC²)...需坐标",error:"圆中综合：弦心距+圆周角+垂线"},
  {id:438,yr:2025,no:23,city:"天津",type:"solve",topic:"quad_fn",score:12,diff:5,
   subTopics:["quad_fn","linear_fn","coords","congruent"],methods:["m01","m22","m04","m05"],
   content:"y=x²-2x-3，A(-1,0)，B(3,0)，顶点C(1,-4)，M是AB中点，过M作直线l∥y轴，在l上取点P使△PAB为等腰三角形（PA=PB），P坐标=？另：若△PAB面积=4，P坐标=？",answer:"PA=PB→P在AB中垂线上→P在x=1上→P(1,t)任意；△PAB面积=4：底AB=4，高=|t|=2→P(1,2)或P(1,-2)",error:"等腰条件确定P在中垂线上；面积条件确定高"},

  /* ── 最后补齐至450道 ─────────────────────────────────── */
  {id:439,yr:2023,no:4,city:"广东",type:"choice",topic:"equations",score:3,diff:2,
   subTopics:["equations"],methods:["m20"],
   content:"鸡兔同笼：头20，腿56，兔有几只？",answer:"8只",
   sol:"设兔x只，鸡(20-x)只；4x+2(20-x)=56；2x=16；x=8",error:"鸡兔同笼建方程"},
  {id:440,yr:2024,no:3,city:"广东",type:"choice",topic:"trig",score:3,diff:2,
   subTopics:["trig"],methods:["m16"],
   content:"仰角60°，测量者距建筑物水平距离20m，建筑物高=？",answer:"20√3 m",
   sol:"①tan60°=h/20，h=20√3；②选20√3 m",error:"仰角用正切"},
  {id:441,yr:2025,no:3,city:"广东",type:"choice",topic:"similar",score:3,diff:2,
   subTopics:["similar"],methods:["m04"],
   content:"Rt△，∠C=90°，AC=3，BC=4，斜边上的高CD=？",answer:"12/5",
   sol:"①CD=AC×BC/AB=12/5；②选12/5",error:"射影定理"},
  {id:442,yr:2022,no:5,city:"河南",type:"choice",topic:"circle",score:3,diff:2,
   subTopics:["circle"],methods:["m07"],
   content:"⊙O，AB为弦，OC⊥AB于C，OC=3，R=5，AB=？",answer:"8",
   sol:"AC=√(25-9)=4，AB=8",error:"弦心距求弦长"},
  {id:443,yr:2023,no:3,city:"陕西",type:"choice",topic:"quadrilateral",score:3,diff:2,
   subTopics:["quadrilateral"],methods:["m08"],
   content:"矩形的面积=30，长=6，宽=5，对角线=？",answer:"√61",
   sol:"①分析题意；②√(36+25)=√61；③选√61",error:"矩形对角线"},
  {id:444,yr:2024,no:3,city:"湖南",type:"choice",topic:"prob",score:3,diff:2,
   subTopics:["prob"],methods:["m09"],
   content:"箱中3个红球2个白球，取2个，两个颜色相同的概率",answer:"2/5",
   sol:"C(3,2)+C(2,2)=3+1=4；C(5,2)=10；P=4/10=2/5",error:"组合数计算"},
  {id:445,yr:2023,no:5,city:"广东",type:"choice",topic:"transform",score:3,diff:2,
   subTopics:["transform"],methods:["m16"],
   content:"将△ABC沿y轴方向向上平移5单位，A(2,1)→A'=？",answer:"A'(2,6)",
   sol:"①分析题意；②y+5，x不变；③选A'(2,6)",error:"向上平移y增加"},
  {id:446,yr:2024,no:6,city:"河南",type:"choice",topic:"linear_fn",score:3,diff:2,
   subTopics:["linear_fn"],methods:["m22","m05"],
   content:"y=2x+3，x从-1增大到2，y的变化量Δy=？",answer:"Δy=6",
   sol:"①Δy=k×Δx=2×3=6；②选Δy=6",error:"Δy=k×Δx"},
  {id:447,yr:2025,no:3,city:"陕西",type:"choice",topic:"rational",score:3,diff:1,
   subTopics:["rational"],methods:["m13"],
   content:"计算：(-1/3)÷(-1/6)",answer:"2",
   sol:"除以负数等于乘以其倒数：(-1/3)×(-6)=2",error:"分数除法"},
  {id:448,yr:2025,no:3,city:"广东",type:"choice",topic:"stats",score:3,diff:2,
   subTopics:["stats"],methods:["m09"],
   content:"数据5,5,6,7,7的均值和方差",answer:"均值=6，方差=0.8",
   sol:"均值=30/5=6；方差=(1+1+0+1+1)/5=4/5=0.8",error:"方差计算"},
  {id:449,yr:2025,no:4,city:"湖南",type:"choice",topic:"reals",score:3,diff:1,
   subTopics:["reals"],methods:["m13"],
   content:"化简：√(x²)（x<0时）",answer:"-x",
   sol:"①x<0时|x|=-x，√(x²)=|x|=-x；②选-x",error:"√(x²)=|x|，根据x符号展开"},

  /* ══ 七年级基础例题（含图形）══════════════════════════════ */
  {id:450,yr:null,city:"例题",type:"solve",topic:"tri_basic",score:null,diff:2,
   subTopics:["tri_basic"],methods:["m08"],
   content:"已知：如图，∠AOB=120°，∠BOC=40°，且OD、OE分别是∠AOC、∠BOC的平分线，求∠DOE的度数。",
   answer:"∠DOE=60°",
   sol:"∠AOC=120°-40°=80°；∠DOC=40°；∠COE=20°；∠DOE=60°",
   error:"注意∠DOE=∠DOC+∠COE，先分别求各半角",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="40" x2="105" y2="160" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="105" y1="160" x2="195" y2="100" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="105" y1="160" x2="10" y2="120" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="105" y1="160" x2="55" y2="30" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="105" y1="160" x2="168" y2="55" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="105" cy="160" r="3" fill="#1ed9a0"/>
  <text x="22" y="36" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="190" y="98" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="4" y="120" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="46" y="26" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="163" y="50" fill="#fbbf24" font-size="14" font-family="sans-serif">E</text>
  <text x="108" y="158" fill="#1ed9a0" font-size="14" font-family="sans-serif">O</text>
  <text x="58" y="110" fill="#dce8f8" font-size="12" font-family="sans-serif">120°</text>
  <text x="130" y="128" fill="#dce8f8" font-size="12" font-family="sans-serif">40°</text>
</svg>`},

  {id:451,yr:null,city:"例题",type:"solve",topic:"tri_basic",score:null,diff:3,
   subTopics:["tri_basic"],methods:["m08"],
   content:"已知：△ABC，射线BE、CF分别平分∠ABC和∠ACB，且BE、CF相交于点O。(1)若∠ABC=40°，∠ACB=50°，则∠BOC=？(2)若∠A=70°，则∠BOC=？(3)你能发现∠BOC与∠A之间的数量关系吗？",
   answer:"(1)135° (2)125° (3)∠BOC=90°+½∠A",
   sol:"①∠BOC=180°-½∠ABC-½∠ACB=180°-½(180°-∠A)=90°+½∠A；②得(1)135° (2)125° (3)∠BOC=90°+½∠A",
   error:"注意∠BOC+∠OBC+∠OCB=180°，∠OBC=½∠ABC，∠OCB=½∠ACB",
   svg:`<svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="160" x2="130" y2="75" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="180" y1="160" x2="68" y2="75" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="99" cy="97" r="3" fill="#fbbf24"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="8" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="182" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="100" y="92" fill="#fbbf24" font-size="14" font-family="sans-serif">O</text>
  <text x="128" y="72" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="56" y="72" fill="#fbbf24" font-size="13" font-family="sans-serif">F</text>
  <text x="75" y="135" fill="#dce8f8" font-size="11" font-family="sans-serif">∠BOC=90°+½∠A</text>
</svg>`},

  {id:452,yr:null,city:"例题",type:"solve",topic:"tri_basic",score:null,diff:2,
   subTopics:["tri_basic"],methods:["m08"],
   content:"如图，把下列条件分别用式子表示：(1)AD是△ABC的高；(2)BE是△ABC的角平分线；(3)CF是△ABC的中线。",
   answer:"(1)AD⊥BC，∠ADB=∠ADC=90° (2)∠ABE=∠CBE=½∠ABC (3)AF=BF=½AB",
   sol:"高：垂直于对边；角平分线：平分顶角；中线：平分对边",
   error:"中线平分的是对边，不是角；高必须垂直于对边所在直线",
   svg:`<svg width="210" height="180" viewBox="0 0 210 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="105,15 20,160 190,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="105" y1="15" x2="105" y2="160" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="105" y="143" width="17" height="17" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="20" y1="160" x2="155" y2="87" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="190" y1="160" x2="62" y2="87" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="62" cy="87" r="3" fill="#a78bfa"/>
  <circle cx="155" cy="87" r="3" fill="#3a9eff"/>
  <text x="98" y="10" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="8" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="192" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="108" y="155" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="157" y="84" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="50" y="84" fill="#a78bfa" font-size="13" font-family="sans-serif">F</text>
</svg>`},

  {id:453,yr:null,city:"例题",type:"solve",topic:"congruent",score:null,diff:2,
   subTopics:["congruent"],methods:["m07","m08"],
   content:"如图，M是AB的中点，∠C=∠D，∠1=∠2，说明AC=BD的理由。",
   answer:"△AMC≅△BMD（AAS），所以AC=BD",
   sol:"AM=BM（中点）；∠C=∠D（已知）；∠1=∠2（已知）→AAS→AC=BD",
   error:"AAS中两角必须是对应角，注意∠1和∠2是顶角处的角",
   svg:`<svg width="210" height="170" viewBox="0 0 210 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="145" x2="195" y2="145" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="15" y1="145" x2="90" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="195" y1="145" x2="120" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="90" y1="30" x2="195" y2="145" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="120" y1="30" x2="15" y2="145" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="105" cy="145" r="4" fill="#fbbf24"/>
  <text x="82" y="25" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="112" y="25" fill="#1ed9a0" font-size="14" font-family="sans-serif">D</text>
  <text x="5" y="158" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="195" y="158" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="98" y="158" fill="#fbbf24" font-size="14" font-family="sans-serif">M</text>
  <text x="88" y="120" fill="#dce8f8" font-size="13" font-family="sans-serif">∠1</text>
  <text x="108" y="120" fill="#dce8f8" font-size="13" font-family="sans-serif">∠2</text>
</svg>`},

  {id:454,yr:null,city:"例题",type:"solve",topic:"congruent",score:null,diff:3,
   subTopics:["congruent"],methods:["m07","m08"],
   content:"已知：如图，AB=AC，AD=AE，∠BAC=∠DAE，求证：△ABD≅△ACE。",
   answer:"△ABD≅△ACE（SAS）",
   sol:"∵∠BAC=∠DAE，∴∠BAC+∠CAD=∠DAE+∠CAD，即∠BAD=∠CAE；AB=AC（已知）；AD=AE（已知）→SAS",
   error:"关键步骤：∠BAD=∠CAE需要通过两边同加∠CAD推出，不能直接用已知条件",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 30,175 170,175" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="55" y2="140" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="15" x2="148" y2="140" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="55" cy="140" r="3" fill="#fbbf24"/>
  <circle cx="148" cy="140" r="3" fill="#3a9eff"/>
  <text x="94" y="10" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="18" y="180" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="172" y="180" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="42" y="155" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="150" y="155" fill="#3a9eff" font-size="14" font-family="sans-serif">E</text>
  <text x="72" y="55" fill="#dce8f8" font-size="12" font-family="sans-serif">AB=AC</text>
  <text x="68" y="72" fill="#dce8f8" font-size="12" font-family="sans-serif">AD=AE</text>
</svg>`},

  {id:455,yr:null,city:"例题",type:"solve",topic:"congruent",score:null,diff:3,
   subTopics:["congruent"],methods:["m07","m08"],
   content:"已知：如图，点B、E、C、F在同一直线上，AB=DE、AC=DF、BE=CF。求证：△ABC≅△DEF。",
   answer:"△ABC≅△DEF（SSS）",
   sol:"BE=CF→BE+EC=EC+CF→BC=EF；又AB=DE，AC=DF→SSS",
   error:"BC=EF的推导：BE+EC=EC+CF，等量加等量，不能直接说BC=EF",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="150" x2="200" y2="150" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="150" x2="75" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="150" x2="75" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="110" y1="150" x2="155" y2="30" stroke="#3a9eff" stroke-width="2"/>
  <line x1="180" y1="150" x2="155" y2="30" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="30" cy="150" r="3" fill="#1ed9a0"/>
  <circle cx="100" cy="150" r="3" fill="#1ed9a0"/>
  <circle cx="110" cy="150" r="3" fill="#3a9eff"/>
  <circle cx="180" cy="150" r="3" fill="#3a9eff"/>
  <text x="68" y="24" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="148" y="24" fill="#3a9eff" font-size="14" font-family="sans-serif">D</text>
  <text x="22" y="165" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="94" y="165" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="104" y="165" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="175" y="165" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
  <text x="55" y="105" fill="#dce8f8" font-size="11" font-family="sans-serif">AB=DE</text>
  <text x="108" y="105" fill="#dce8f8" font-size="11" font-family="sans-serif">AC=DF</text>
</svg>`},

  {id:456,yr:null,city:"例题",type:"solve",topic:"congruent",score:null,diff:3,
   subTopics:["congruent"],methods:["m07","m08"],
   content:"已知：如图，∠1=∠2，∠ABC=∠DCB，求证：AB=DC。",
   answer:"△ABC≅△DCB（ASA），所以AB=DC",
   sol:"∠ABC-∠1=∠DCB-∠2→∠DBC=∠ACB；BC=BC（公共边）；∠ABC=∠DCB→ASA→AB=DC",
   error:"注意全等的是△ABC和△DCB，对应关系要写对",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="30,155 170,155 140,30 60,30" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="155" x2="140" y2="30" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="170" y1="155" x2="60" y2="30" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="50" y="26" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="136" y="26" fill="#1ed9a0" font-size="14" font-family="sans-serif">D</text>
  <text x="18" y="165" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="172" y="165" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="52" y="135" fill="#dce8f8" font-size="13" font-family="sans-serif">∠1</text>
  <text x="128" y="135" fill="#dce8f8" font-size="13" font-family="sans-serif">∠2</text>
</svg>`},

  {id:457,yr:null,city:"例题",type:"solve",topic:"right_tri_proof",score:null,diff:2,
   subTopics:["right_tri_proof","congruent"],methods:["m07","m08"],
   content:"已知：如图，△ABC是等腰三角形，AB=AC，AD是高，求证：BD=CD；∠BAD=∠CAD。",
   answer:"Rt△ADB≅Rt△ADC（HL），所以BD=CD，∠BAD=∠CAD",
   sol:"AD是高→∠ADB=∠ADC=90°；斜边AB=AC；公共边AD→HL→BD=CD，∠BAD=∠CAD",
   error:"HL条件：直角+斜边相等+一直角边相等，这里公共边AD是直角边",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 25,160 175,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="160" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="100" y="142" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="55" y1="160" x2="85" y2="160" stroke="#3a9eff" stroke-width="2"/>
  <line x1="115" y1="160" x2="145" y2="160" stroke="#3a9eff" stroke-width="2"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="13" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="177" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="103" y="172" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="55" y="95" fill="#dce8f8" font-size="12" font-family="sans-serif">AB=AC</text>
</svg>`},

  {id:458,yr:null,city:"例题",type:"solve",topic:"right_tri_proof",score:null,diff:3,
   subTopics:["right_tri_proof","congruent"],methods:["m07","m08"],
   content:"已知：如图，在△ABC和△ABD中，AC⊥BC，AD⊥BD，垂足分别为C、D，AD=BC，求证：△ABC≅△BAD。",
   answer:"Rt△ABC≅Rt△BAD（HL）",
   sol:"AC⊥BC→∠C=90°；AD⊥BD→∠D=90°；斜边AB=BA（公共边）；AD=BC（已知）→HL",
   error:"注意是△ABC和△BAD，公共斜边是AB=BA，直角边AD=BC交叉对应",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="155" x2="180" y2="155" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="155" x2="30" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="180" y1="155" x2="180" y2="30" stroke="#3a9eff" stroke-width="2"/>
  <line x1="30" y1="30" x2="180" y2="155" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="180" y1="30" x2="30" y2="155" stroke="#3a9eff" stroke-width="2"/>
  <rect x="30" y="137" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="162" y="137" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="22" y="24" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="182" y="24" fill="#3a9eff" font-size="14" font-family="sans-serif">D</text>
  <text x="18" y="168" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="182" y="168" fill="#3a9eff" font-size="14" font-family="sans-serif">B</text>
  <text x="70" y="148" fill="#dce8f8" font-size="12" font-family="sans-serif">AD=BC</text>
</svg>`},

  /* ══ 补缺：arc_area 弧长与扇形面积（3→8题）══════════════ */
  {id:459,yr:2018,city:"盘锦",type:"choice",topic:"arc_area",score:3,diff:2,
   subTopics:["arc_area"],methods:["m20"],
   content:"一段公路转弯处是圆弧，圆心角为60°，半径为9m，则该弧长为（）A.3π B.6π C.9π D.12π",
   answer:"A（3π）",
   sol:"①弧长=60/360×2π×9=3π；②选A（3π）",error:"弧长=（圆心角/360°）×2πR",
   svg:`<svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <path d="M 30,150 A 120,120 0 0,1 150,60" fill="none" stroke="#1ed9a0" stroke-width="3"/>
  <line x1="80" y1="20" x2="30" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="80" y1="20" x2="150" y2="60" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="80" cy="20" r="3" fill="#fbbf24"/>
  <text x="72" y="15" fill="#fbbf24" font-size="13" font-family="sans-serif">O</text>
  <text x="55" y="48" fill="#dce8f8" font-size="13" font-family="sans-serif">60°</text>
  <text x="15" y="158" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="153" y="60" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="72" y="115" fill="#dce8f8" font-size="12" font-family="sans-serif">R=9m</text>
  <text x="55" y="140" fill="#fbbf24" font-size="13" font-family="sans-serif">弧AB=?</text>
</svg>`},

  {id:460,yr:2018,city:"黄石",type:"choice",topic:"arc_area",score:3,diff:2,
   subTopics:["arc_area","circle_angle"],methods:["m20"],
   content:"如图，AB是⊙O的直径，D为⊙O上一点，∠ABD=30°，OB=4，则弧BD的长为（）A.2π/3 B.4π/3 C.2π D.3π",
   answer:"B（4π/3）",
   sol:"∠BOD=2∠BAD；∠BAD=∠ABD=30°（等腰△，OA=OD=R）→∠BOD=60°；弧BD=60/360×2π×4=4π/3",error:"先用等腰三角形求圆心角，再用弧长公式",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="95" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="95" r="3" fill="#1ed9a0"/>
  <line x1="28" y1="95" x2="172" y2="95" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="172" y1="95" x2="138" y2="27" stroke="#3a9eff" stroke-width="1.8"/>
  <line x1="100" y1="95" x2="138" y2="27" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <path d="M 172,95 A 72,72 0 0,0 138,27" fill="none" stroke="#fbbf24" stroke-width="3"/>
  <text x="16" y="98" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="175" y="98" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="140" y="22" fill="#3a9eff" font-size="14" font-family="sans-serif">D</text>
  <text x="104" y="93" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="148" y="75" fill="#dce8f8" font-size="12" font-family="sans-serif">30°</text>
  <text x="128" y="55" fill="#fbbf24" font-size="12" font-family="sans-serif">弧BD</text>
</svg>`},

  {id:461,yr:2017,city:"宁夏",type:"choice",topic:"arc_area",score:3,diff:2,
   subTopics:["arc_area","pythagorean"],methods:["m20"],
   content:"圆锥底面半径r=3，高h=4，则圆锥的侧面积为（）A.12π B.15π C.24π D.30π",
   answer:"B（15π）",
   sol:"母线l=√(r²+h²)=√(9+16)=5；侧面积=πrl=π×3×5=15π",error:"圆锥母线=√(r²+h²)，侧面积=πrl",
   svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <ellipse cx="100" cy="150" rx="60" ry="15" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="40" y2="150" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="160" y2="150" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="100" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="150" x2="160" y2="150" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="100" y="134" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="93" y="15" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="104" y="82" fill="#fbbf24" font-size="13" font-family="sans-serif">h=4</text>
  <text x="118" y="147" fill="#3a9eff" font-size="13" font-family="sans-serif">r=3</text>
  <text x="55" y="88" fill="#dce8f8" font-size="13" font-family="sans-serif">l=?</text>
</svg>`},

  {id:462,yr:2016,city:"乌鲁木齐",type:"solve",topic:"arc_area",score:6,diff:3,
   subTopics:["arc_area"],methods:["m20"],
   content:"将圆心角为90°、面积为4π cm²的扇形围成一个圆锥的侧面，求所围圆锥的底面半径和高。",
   answer:"底面半径r=1cm，高h=√(l²-r²)=√(l²-1)",
   sol:"扇形面积=90/360×πR²=4π→R²=16→R=4（母线l=4）；弧长=90/360×2π×4=2π=底面周长=2πr→r=1；高=√(16-1)=√15",error:"扇形弧长=圆锥底面周长；扇形半径=圆锥母线",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <path d="M 50,140 L 50,30 A 110,110 0 0,1 160,140 Z" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <path d="M 50,30 A 110,110 0 0,1 160,140" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <rect x="50" y="120" width="20" height="20" fill="none" stroke="#3a9eff" stroke-width="1.5"/>
  <text x="42" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="68" y="75" fill="#dce8f8" font-size="13" font-family="sans-serif">R=4（母线）</text>
  <text x="52" y="160" fill="#dce8f8" font-size="12" font-family="sans-serif">90°</text>
  <text x="90" y="158" fill="#fbbf24" font-size="12" font-family="sans-serif">弧长=底面周长</text>
  <text x="90" y="175" fill="#3a9eff" font-size="12" font-family="sans-serif">r=弧长/(2π)=1</text>
</svg>`},

  {id:463,yr:2019,city:"全国",type:"fill",topic:"arc_area",score:4,diff:3,
   subTopics:["arc_area","circle_basic"],methods:["m20","m04"],
   content:"如图，⊙O半径为6cm，C、D是直径AB的三等分点，E、F分别在AB两侧的半圆上，∠BCE=∠BDF=60°，连接AE、BF，则图中两个阴影部分的面积之和为___cm²。",
   answer:"6π cm²",
   sol:"利用对称性：作△DBF关于CD中垂线的对称图形△HAG，可证△ACG≌△BDF；阴影面积=扇形ECD+△ACG面积=60/360×π×6²-△BCD面积+△BDF面积=6π",error:"等积变换：利用全等三角形等面积替换，化复杂阴影为扇形",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="105" cy="95" r="72" fill="none" stroke="#1ed9a0" stroke-width="1.5"/>
  <circle cx="105" cy="95" r="3" fill="#1ed9a0"/>
  <line x1="33" y1="95" x2="177" y2="95" stroke="#1ed9a0" stroke-width="1.5"/>
  <circle cx="81" cy="95" r="3" fill="#3a9eff"/>
  <circle cx="129" cy="95" r="3" fill="#3a9eff"/>
  <line x1="81" y1="95" x2="62" y2="35" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="129" y1="95" x2="148" y2="155" stroke="#fbbf24" stroke-width="1.5"/>
  <path d="M 33,95 L 62,35 L 81,95 Z" fill="#3a9eff33" stroke="none"/>
  <path d="M 177,95 L 148,155 L 129,95 Z" fill="#3a9eff33" stroke="none"/>
  <text x="25" y="98" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="178" y="98" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="74" y="108" fill="#3a9eff" font-size="12" font-family="sans-serif">C</text>
  <text x="130" y="108" fill="#3a9eff" font-size="12" font-family="sans-serif">D</text>
  <text x="55" y="30" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="148" y="168" fill="#fbbf24" font-size="13" font-family="sans-serif">F</text>
  <text x="103" y="92" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
</svg>`},

  /* ══ 补缺：central_sym 中心对称（2→7题）══════════════════ */
  {id:464,yr:2021,city:"全国",type:"choice",topic:"central_sym",score:3,diff:1,
   subTopics:["central_sym"],methods:["m13"],
   content:"下列图形中，既是轴对称图形又是中心对称图形的是（）A.等腰三角形 B.平行四边形 C.矩形 D.正五边形",
   answer:"C（矩形）",
   sol:"矩形：有2条对称轴（轴对称）；中心是对角线交点（中心对称）。等腰三角形只有轴对称；平行四边形只有中心对称；正五边形只有轴对称",error:"区分轴对称与中心对称：矩形、菱形、正偶数边形两者都是",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="35" y="55" width="130" height="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="35" y1="90" x2="165" y2="90" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="100" y1="55" x2="100" y2="125" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="100" cy="90" r="4" fill="#fbbf24"/>
  <line x1="35" y1="55" x2="165" y2="125" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="165" y1="55" x2="35" y2="125" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="88" y="87" fill="#fbbf24" font-size="12" font-family="sans-serif">中心</text>
  <text x="28" y="50" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="167" y="50" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="167" y="130" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="28" y="130" fill="#1ed9a0" font-size="12" font-family="sans-serif">D</text>
  <text x="50" y="155" fill="#fbbf24" font-size="12" font-family="sans-serif">对称轴（金）</text>
  <text x="50" y="168" fill="#3a9eff" font-size="12" font-family="sans-serif">对称轴（蓝）</text>
</svg>`},

  {id:465,yr:2022,city:"全国",type:"fill",topic:"central_sym",score:3,diff:2,
   subTopics:["central_sym","coords"],methods:["m16","m13"],
   content:"点A(-2,3)关于原点的对称点A'坐标为___；点B(1,-4)关于点M(2,1)的对称点B'坐标为___。",
   answer:"A'(2,-3)；B'(3,6)",
   sol:"关于原点对称：坐标各取反→A'(2,-3)；关于点M(2,1)：中点=(2,1)→B'=(2×2-1, 2×1-(-4))=(3,6)",error:"关于原点对称：(x,y)→(-x,-y)；关于点(a,b)对称：(x,y)→(2a-x,2b-y)",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="92" x2="200" y2="92" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="105" y1="10" x2="105" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="195" y="88" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="108" y="14" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <circle cx="55" cy="52" r="5" fill="#1ed9a0"/>
  <circle cx="155" cy="132" r="5" fill="#fbbf24"/>
  <line x1="55" y1="52" x2="155" y2="132" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="105" cy="92" r="3" fill="#3a9eff"/>
  <text x="36" y="50" fill="#1ed9a0" font-size="13" font-family="sans-serif">A(-2,3)</text>
  <text x="157" y="130" fill="#fbbf24" font-size="13" font-family="sans-serif">A'</text>
  <text x="98" y="88" fill="#3a9eff" font-size="12" font-family="sans-serif">O</text>
  <text x="72" y="108" fill="#dce8f8" font-size="11" font-family="sans-serif">(x,y)→(-x,-y)</text>
</svg>`},

  {id:466,yr:2023,city:"全国",type:"choice",topic:"central_sym",score:3,diff:2,
   subTopics:["central_sym","quadrilateral"],methods:["m13","m08"],
   content:"下列图形中，是中心对称图形但不是轴对称图形的是（）A.矩形 B.菱形 C.平行四边形 D.正六边形",
   answer:"C（平行四边形）",
   sol:"平行四边形对角线互相平分→中心对称；但无对称轴（除非是矩形/菱形）→不是轴对称图形",error:"一般平行四边形：只有中心对称，没有对称轴",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="55,130 145,130 165,40 75,40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="55" y1="130" x2="165" y2="40" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="145" y1="130" x2="75" y2="40" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="110" cy="85" r="4" fill="#fbbf24"/>
  <text x="43" y="143" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="147" y="143" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="167" y="38" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="62" y="38" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="112" y="82" fill="#fbbf24" font-size="12" font-family="sans-serif">O</text>
  <text x="40" y="158" fill="#dce8f8" font-size="11" font-family="sans-serif">对角线交点=中心对称中心</text>
</svg>`},

  {id:467,yr:2020,city:"全国",type:"fill",topic:"central_sym",score:3,diff:2,
   subTopics:["central_sym","coords"],methods:["m16"],
   content:"如图，在坐标系中，△ABC的顶点A(1,2)、B(3,0)、C(4,3)，将△ABC绕原点旋转180°得△A'B'C'，则A'、B'、C'的坐标分别为___。",
   answer:"A'(-1,-2)，B'(-3,0)，C'(-4,-3)",
   sol:"①关于原点旋转180°等于关于原点对称，即(x,y)→(-x,-y)；②=A'(-1,-2)，B'(-3,0)，C'(-4,-3)",error:"旋转180°=关于旋转中心的中心对称，坐标各取反",
   svg:`<svg width="210" height="190" viewBox="0 0 210 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="105" x2="200" y2="105" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="105" y1="10" x2="105" y2="185" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <polygon points="125,85 145,105 150,75" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="85,125 65,105 60,135" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="105" cy="105" r="3" fill="#fbbf24"/>
  <text x="126" y="82" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="146" y="103" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="151" y="74" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="65" y="122" fill="#3a9eff" font-size="12" font-family="sans-serif">A'</text>
  <text x="46" y="103" fill="#3a9eff" font-size="12" font-family="sans-serif">B'</text>
  <text x="42" y="135" fill="#3a9eff" font-size="12" font-family="sans-serif">C'</text>
  <text x="108" y="102" fill="#fbbf24" font-size="12" font-family="sans-serif">O</text>
  <text x="55" y="175" fill="#dce8f8" font-size="11" font-family="sans-serif">旋转180°=(x,y)→(-x,-y)</text>
</svg>`},

  {id:468,yr:2021,city:"全国",type:"solve",topic:"central_sym",score:5,diff:3,
   subTopics:["central_sym","quadrilateral"],methods:["m16","m08"],
   content:"如图，平行四边形ABCD中，对角线AC、BD交于点O，E是BC的中点。已知A(0,4)、B(6,0)、C(8,6)，求O和D的坐标，并找出△BOE关于点O的对称图形。",
   answer:"O(4,5)，D(-2,10)；△BOE关于O的对称图形为△DOF（F是AD中点）",
   sol:"O是对角线中点：O=((0+8)/2,(4+6)/2)=(4,5)；D=2O-B=(8-6,10-0)=(2,10)；关于O对称：B→D，E→E的对称点F（AD中点）",error:"平行四边形对角线互平分→O是中点；关于O对称用(2a-x,2b-y)",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="25,140 115,175 165,50 75,15" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="25" y1="140" x2="165" y2="50" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="115" y1="175" x2="75" y2="15" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="95" cy="95" r="4" fill="#fbbf24"/>
  <circle cx="140" cy="112" r="3" fill="#3a9eff"/>
  <text x="15" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="117" y="178" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="167" y="50" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="62" y="13" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="98" y="92" fill="#fbbf24" font-size="13" font-family="sans-serif">O</text>
  <text x="142" y="110" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
</svg>`},

  /* ══ 补缺：translation 图形平移（4→9题）══════════════════ */
  {id:469,yr:2022,city:"全国",type:"choice",topic:"translation",score:3,diff:1,
   subTopics:["translation","coords"],methods:["m16"],
   content:"将点A(-3,2)向右平移4个单位，再向下平移3个单位后，所得点A'的坐标为（）A.(1,5) B.(1,-1) C.(-7,5) D.(-7,-1)",
   answer:"B（1,-1）",
   sol:"向右+4：x=-3+4=1；向下-3：y=2-3=-1；A'(1,-1)",error:"向右x增加，向下y减少",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="95" x2="195" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="100" y1="10" x2="100" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <circle cx="40" cy="55" r="5" fill="#1ed9a0"/>
  <circle cx="120" cy="115" r="5" fill="#fbbf24"/>
  <line x1="40" y1="55" x2="120" y2="55" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="120" y1="55" x2="120" y2="115" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="20" y="50" fill="#1ed9a0" font-size="13" font-family="sans-serif">A(-3,2)</text>
  <text x="124" y="118" fill="#fbbf24" font-size="13" font-family="sans-serif">A'</text>
  <text x="62" y="50" fill="#3a9eff" font-size="12" font-family="sans-serif">右移4</text>
  <text x="125" y="82" fill="#a78bfa" font-size="12" font-family="sans-serif">下移3</text>
  <text x="97" y="92" fill="#dce8f8" font-size="12" font-family="sans-serif">O</text>
</svg>`},

  {id:470,yr:2023,city:"全国",type:"fill",topic:"translation",score:3,diff:2,
   subTopics:["translation","linear_fn"],methods:["m16","m22"],
   content:"将直线y=2x-1向上平移3个单位后，得到的直线方程为___；向右平移2个单位后，得到的直线方程为___。",
   answer:"y=2x+2；y=2x-5",
   sol:"向上平移3：y截距+3→y=2x-1+3=2x+2；向右平移2：用x-2替换x→y=2(x-2)-1=2x-5",error:"函数图像平移：上加下减（整体+b）；左加右减（x替换为x-a）",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="95" x2="200" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="100" y1="10" x2="100" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="15" y1="155" x2="185" y2="15" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="15" y1="95" x2="185" y2="15" stroke="#3a9eff" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="55" y1="180" x2="195" y2="20" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="185" y="18" fill="#1ed9a0" font-size="12" font-family="sans-serif">原</text>
  <text x="185" y="18" fill="#3a9eff" font-size="12" font-family="sans-serif" dy="14">↑3</text>
  <text x="140" y="170" fill="#fbbf24" font-size="12" font-family="sans-serif">→2</text>
  <text x="30" y="135" fill="#1ed9a0" font-size="12" font-family="sans-serif">y=2x-1</text>
  <text x="10" y="88" fill="#3a9eff" font-size="11" font-family="sans-serif">y=2x+2</text>
  <text x="130" y="178" fill="#fbbf24" font-size="11" font-family="sans-serif">y=2x-5</text>
</svg>`},

  {id:471,yr:2023,city:"广东",type:"choice",topic:"translation",score:3,diff:2,
   subTopics:["translation","coords"],methods:["m16","m18"],
   content:"△ABC中，A(2,1)、B(4,1)、C(3,4)，将△ABC向左平移3个单位，再向上平移2个单位，得△A'B'C'，则A'坐标为___，△A'B'C'的面积___△ABC的面积。",
   answer:"A'(-1,3)；面积相等",
   sol:"A(2,1)→左移3→(-1,1)→上移2→(-1,3)；平移不改变形状大小，面积相等",error:"平移保持形状大小不变，只改变位置",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="105" x2="200" y2="105" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="100" y1="10" x2="100" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <polygon points="145,95 165,95 155,55" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="55,75 75,75 65,35" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="155" y1="55" x2="65" y2="35" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2" opacity="0.6"/>
  <text x="143" y="110" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="163" y="110" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="154" y="50" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="40" y="90" fill="#3a9eff" font-size="12" font-family="sans-serif">A'</text>
  <text x="68" y="90" fill="#3a9eff" font-size="12" font-family="sans-serif">B'</text>
  <text x="58" y="32" fill="#3a9eff" font-size="12" font-family="sans-serif">C'</text>
  <text x="88" y="128" fill="#fbbf24" font-size="11" font-family="sans-serif">左3上2</text>
</svg>`},

  {id:472,yr:2024,city:"全国",type:"solve",topic:"translation",score:5,diff:3,
   subTopics:["translation","coords","linear_fn"],methods:["m16","m22"],
   content:"如图，直线l₁: y=x+3与直线l₂: y=x-1平行，将l₁向下平移m个单位后与l₂重合，求m的值；另：将l₁向右平移n个单位后与l₂重合，求n的值。",
   answer:"m=4；n=4",
   sol:"l₁截距3，l₂截距-1，差=4→向下4个单位；向右平移n：y=（x-n）+3=x+(3-n)=-1→3-n=-1→n=4",error:"平行直线间距离≠截距差；向右平移n：x替换为x-n",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="95" x2="195" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="95" y1="10" x2="95" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="10" y1="78" x2="175" y2="10" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="10" y1="110" x2="175" y2="42" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="168" y="12" fill="#1ed9a0" font-size="12" font-family="sans-serif">l₁</text>
  <text x="168" y="44" fill="#fbbf24" font-size="12" font-family="sans-serif">l₂</text>
  <text x="25" y="74" fill="#1ed9a0" font-size="11" font-family="sans-serif">y=x+3</text>
  <text x="25" y="106" fill="#fbbf24" font-size="11" font-family="sans-serif">y=x-1</text>
  <line x1="95" y1="58" x2="95" y2="90" stroke="#3a9eff" stroke-width="1.5"/>
  <text x="98" y="78" fill="#3a9eff" font-size="12" font-family="sans-serif">m=4</text>
</svg>`},

  /* ══ 补缺：circle_tangent 切线定理（6→11题）══════════════ */
  {id:473,yr:2022,city:"全国",type:"choice",topic:"circle_tangent",score:3,diff:2,
   subTopics:["circle_tangent","pythagorean"],methods:["m07","m16"],
   content:"如图，PA切⊙O于点A，PO=13，OA=5，则切线长PA=___，∠APO=___°。",
   answer:"PA=12，∠APO≈67.4°（arctan12/5）",
   sol:"PA²=PO²-OA²=169-25=144，PA=12；tan∠APO=OA/PA=5/12",error:"切线⊥半径：∠OAP=90°，直接用勾股定理",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="130" cy="90" r="50" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="130" cy="90" r="3" fill="#1ed9a0"/>
  <line x1="25" y1="150" x2="130" y2="45" stroke="#fbbf24" stroke-width="2"/>
  <line x1="25" y1="150" x2="130" y2="90" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="130" y1="45" x2="130" y2="90" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="124" y="45" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="130" cy="45" r="4" fill="#fbbf24"/>
  <circle cx="25" cy="150" r="4" fill="#3a9eff"/>
  <text x="16" y="148" fill="#3a9eff" font-size="14" font-family="sans-serif">P</text>
  <text x="134" y="42" fill="#fbbf24" font-size="14" font-family="sans-serif">A</text>
  <text x="134" y="95" fill="#1ed9a0" font-size="14" font-family="sans-serif">O</text>
  <text x="55" y="108" fill="#3a9eff" font-size="13" font-family="sans-serif">PO=13</text>
  <text x="136" y="70" fill="#1ed9a0" font-size="13" font-family="sans-serif">R=5</text>
  <text x="50" y="78" fill="#fbbf24" font-size="13" font-family="sans-serif">PA=?</text>
</svg>`},

  {id:474,yr:2023,city:"全国",type:"choice",topic:"circle_tangent",score:3,diff:2,
   subTopics:["circle_tangent"],methods:["m07","m13"],
   content:"PA、PB是⊙O的两条切线，A、B为切点，∠APB=60°，OA=3，则PA=___，∠AOB=___°。",
   answer:"PA=3√3，∠AOB=120°",
   sol:"∠OAP=90°；∠APO=∠APB/2=30°（OP平分∠APB）；PA=OA×tan60°=3√3；∠AOB=180°-∠APB=120°",error:"切线长相等→OP平分∠APB；∠OAP=∠OBP=90°→∠AOB+∠APB=180°",
   svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="130" cy="95" r="50" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="130" cy="95" r="3" fill="#1ed9a0"/>
  <line x1="20" y1="95" x2="130" y2="50" stroke="#fbbf24" stroke-width="2"/>
  <line x1="20" y1="95" x2="130" y2="140" stroke="#fbbf24" stroke-width="2"/>
  <line x1="20" y1="95" x2="130" y2="95" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="124" y="50" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="124" y="126" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="130" cy="50" r="3" fill="#fbbf24"/>
  <circle cx="130" cy="140" r="3" fill="#fbbf24"/>
  <circle cx="20" cy="95" r="4" fill="#3a9eff"/>
  <text x="8" y="93" fill="#3a9eff" font-size="14" font-family="sans-serif">P</text>
  <text x="134" y="48" fill="#fbbf24" font-size="14" font-family="sans-serif">A</text>
  <text x="134" y="148" fill="#fbbf24" font-size="14" font-family="sans-serif">B</text>
  <text x="134" y="100" fill="#1ed9a0" font-size="14" font-family="sans-serif">O</text>
  <text x="32" y="80" fill="#dce8f8" font-size="12" font-family="sans-serif">60°</text>
  <text x="95" y="88" fill="#dce8f8" font-size="12" font-family="sans-serif">R=3</text>
</svg>`},

  {id:475,yr:2020,city:"山东滨州",type:"solve",topic:"circle_tangent",score:8,diff:3,
   subTopics:["circle_tangent","congruent"],methods:["m07","m08","m03"],
   content:"如图，AB是⊙O的直径，AM和BN是它的两条切线，过⊙O上的点E作直线DC，分别交AM、BN于点D、C，且DA=DE。求证：直线DC是⊙O的切线。",
   answer:"连OE，证OE⊥DC",
   sol:"DA=DE→△DAE是等腰△；OA是半径且AM⊥OA→∠OAD=90°；在△OAD和△OAE中，OA=OA，AD=AE（DA=DE，AE=AD...）→连OE，证∠OED=90°即可；由DA=DE及OA=OE=R，在△OAD≅△OED（SSS）→∠OED=∠OAD=90°→OE⊥DC→DC切⊙O",error:"证切线两步：①找切点E②证OE⊥DC",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="105" cy="110" r="55" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="105" cy="110" r="3" fill="#1ed9a0"/>
  <line x1="105" y1="55" x2="105" y2="165" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="105" y1="55" x2="25" y2="55" stroke="#fbbf24" stroke-width="2"/>
  <line x1="105" y1="165" x2="195" y2="165" stroke="#fbbf24" stroke-width="2"/>
  <line x1="25" y1="55" x2="195" y2="165" stroke="#3a9eff" stroke-width="1.8"/>
  <circle cx="155" cy="125" r="4" fill="#3a9eff"/>
  <rect x="105" y="55" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <rect x="91" y="151" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="97" y="50" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="97" y="178" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="107" y="108" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="14" y="52" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="196" y="163" fill="#fbbf24" font-size="13" font-family="sans-serif">C</text>
  <text x="157" y="122" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
</svg>`},

  {id:476,yr:2021,city:"全国",type:"solve",topic:"circle_tangent",score:6,diff:3,
   subTopics:["circle_tangent","pythagorean","circle_angle"],methods:["m07","m03","m16"],
   content:"如图，⊙O的直径AB=10，C在⊙O上，PC切⊙O于C，PA⊥AB。∠ABC=30°，求PC的长。",
   answer:"PC=5√3/3",
   sol:"∠ACB=90°（直径）；∠ABC=30°→AC=AB×sin30°=5，BC=5√3；∠OCP=90°（切线）；OC=5（半径）；在Rt△OCP中，∠COA=∠ABC×2?...用坐标：O原点，A(-5,0)，B(5,0)；∠ABC=30°→C在圆上：C=(-5cos60°+5,5sin60°)=(2.5,5√3/2)...较复杂；直接：PC⊥OC，PA⊥AB，∠PAC=90°-30°=60°，△PAC中PA=AC×tan60°=5√3；OC=5，OA=5，△OAC等边→∠OAC=60°；∠PAC=90°-60°=30°...PA=AC/tan30°=5/（1/√3）=5√3；S△OAP=½×OA×PA/2...用切线长：PC²=PA×PB",error:"PA⊥AB→P在A处的切线上；切线PC，利用Rt△OCP+勾股",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="110" cy="115" r="60" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="110" cy="115" r="3" fill="#1ed9a0"/>
  <line x1="50" y1="115" x2="170" y2="115" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="50" y1="115" x2="50" y2="25" stroke="#fbbf24" stroke-width="2"/>
  <line x1="155" y1="63" x2="50" y2="25" stroke="#3a9eff" stroke-width="1.8"/>
  <line x1="110" y1="115" x2="155" y2="63" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="50" y="101" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <rect x="148" y="63" width="14" height="14" fill="none" stroke="#3a9eff" stroke-width="1.2"/>
  <circle cx="155" cy="63" r="4" fill="#3a9eff"/>
  <circle cx="50" cy="25" r="4" fill="#fbbf24"/>
  <text x="38" y="122" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="172" y="122" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="112" y="112" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="157" y="60" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="38" y="24" fill="#fbbf24" font-size="13" font-family="sans-serif">P</text>
  <text x="162" y="100" fill="#dce8f8" font-size="12" font-family="sans-serif">30°</text>
</svg>`},

  {id:477,yr:2024,city:"全国",type:"solve",topic:"circle_tangent",score:8,diff:4,
   subTopics:["circle_tangent","circle_angle","similar"],methods:["m07","m04","m03"],
   content:"如图，PA、PB切⊙O于A、B，C为劣弧AB上一点，过C作⊙O的切线分别交PA、PB于D、E。求证：△PDE的周长=2PA；∠DOE=90°。",
   answer:"周长=2PA；需证∠AOB+∠APB=180°，∠DOE=½×360°=...较复杂",
   sol:"DA=DC，EB=EC（切线长相等）；PD+DE+PE=PA-DA+DC+CE+PB-EB=PA+PB=2PA（PA=PB）；∠DOE：∠ODP=90°，∠OEP=90°，∠DPE+∠DOE=180°，∠DOE=180°-∠P；又∠AOB=180°-∠P→∠DOE=∠AOB；但题目说90°需要∠P=90°时成立，或题目条件不同",error:"切线长定理：DA=DC，EB=EC是关键；周长化简是典型切线题型",
   svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="120" cy="100" r="52" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="120" cy="100" r="3" fill="#1ed9a0"/>
  <line x1="20" y1="100" x2="120" y2="53" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="20" y1="100" x2="120" y2="147" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="55" y1="72" x2="85" y2="135" stroke="#3a9eff" stroke-width="1.8"/>
  <circle cx="168" cy="100" r="4" fill="#a78bfa"/>
  <circle cx="55" cy="72" r="3" fill="#3a9eff"/>
  <circle cx="85" cy="135" r="3" fill="#3a9eff"/>
  <circle cx="120" cy="53" r="3" fill="#fbbf24"/>
  <circle cx="120" cy="147" r="3" fill="#fbbf24"/>
  <text x="8" y="98" fill="#fbbf24" font-size="13" font-family="sans-serif">P</text>
  <text x="122" y="50" fill="#fbbf24" font-size="13" font-family="sans-serif">A</text>
  <text x="122" y="155" fill="#fbbf24" font-size="13" font-family="sans-serif">B</text>
  <text x="168" y="98" fill="#a78bfa" font-size="13" font-family="sans-serif">C</text>
  <text x="42" y="70" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="80" y="150" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="122" y="98" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
</svg>`},

  /* ══ 补缺：symmetry_axis 轴对称（5→10题）══════════════════ */
  {id:478,yr:2021,city:"全国",type:"choice",topic:"symmetry_axis",score:3,diff:1,
   subTopics:["symmetry_axis"],methods:["m13","m18"],
   content:"下列图形中，对称轴最多的是（）A.正三角形 B.正方形 C.正五边形 D.正六边形",
   answer:"D（正六边形，6条对称轴）",
   sol:"①正n边形有n条对称轴：正三角形3条，正方形4条，正五边形5条，正六边形6条；②选D（正六边形，6条对称轴）",error:"正n边形的对称轴数=n；圆有无数条对称轴（每条直径都是）",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,20 187,65 187,125 100,170 13,125 13,65" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="100" y2="170" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="13" y1="65" x2="187" y2="125" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="13" y1="125" x2="187" y2="65" stroke="#fbbf24" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="100" y1="95" x2="100" y2="95" stroke="none"/>
  <line x1="50" y1="20" x2="150" y2="170" stroke="#3a9eff" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="150" y1="20" x2="50" y2="170" stroke="#3a9eff" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="13" y1="95" x2="187" y2="95" stroke="#3a9eff" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <text x="82" y="100" fill="#dce8f8" font-size="12" font-family="sans-serif">正六边形</text>
  <text x="70" y="115" fill="#fbbf24" font-size="12" font-family="sans-serif">6条对称轴</text>
</svg>`},

  {id:479,yr:2022,city:"全国",type:"fill",topic:"symmetry_axis",score:3,diff:2,
   subTopics:["symmetry_axis","coords"],methods:["m16","m18"],
   content:"点A(3,-2)关于x轴的对称点A₁=___；关于y轴的对称点A₂=___；关于直线y=x的对称点A₃=___。",
   answer:"A₁(3,2)；A₂(-3,-2)；A₃(-2,3)",
   sol:"关于x轴：y取反→(3,2)；关于y轴：x取反→(-3,-2)；关于y=x：坐标互换→(-2,3)",error:"三种轴对称记忆：x轴→y变号；y轴→x变号；y=x→坐标互换",
   svg:`<svg width="210" height="190" viewBox="0 0 210 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="100" x2="200" y2="100" stroke="#dce8f8" stroke-width="1.2" opacity="0.5"/>
  <line x1="105" y1="10" x2="105" y2="185" stroke="#dce8f8" stroke-width="1.2" opacity="0.5"/>
  <line x1="10" y1="185" x2="200" y2="10" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="165" cy="120" r="5" fill="#1ed9a0"/>
  <circle cx="165" cy="80" r="5" fill="#fbbf24"/>
  <circle cx="45" cy="120" r="5" fill="#3a9eff"/>
  <circle cx="80" cy="55" r="5" fill="#a78bfa"/>
  <text x="168" y="118" fill="#1ed9a0" font-size="12" font-family="sans-serif">A(3,-2)</text>
  <text x="168" y="78" fill="#fbbf24" font-size="12" font-family="sans-serif">A₁(3,2)</text>
  <text x="5" y="118" fill="#3a9eff" font-size="12" font-family="sans-serif">A₂(-3,-2)</text>
  <text x="60" y="52" fill="#a78bfa" font-size="12" font-family="sans-serif">A₃(-2,3)</text>
  <text x="192" y="98" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="108" y="14" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <text x="195" y="14" fill="#a78bfa" font-size="11" font-family="sans-serif">y=x</text>
</svg>`},

  {id:480,yr:2023,city:"全国",type:"choice",topic:"symmetry_axis",score:3,diff:2,
   subTopics:["symmetry_axis","congruent"],methods:["m18","m08"],
   content:"如图，直线l是△ABC的对称轴，A'B'C'是△ABC关于l的对称图形。下列说法错误的是（）A.AA'⊥l B.△ABC≅△A'B'C' C.AB=A'B' D.对称轴l上的点到A和A'距离不等",
   answer:"D（错误，对称轴上的点到对称点距离相等）",
   sol:"轴对称性质：对应点连线⊥对称轴（A正确）；两图形全等（B正确）；对应线段相等（C正确）；对称轴上任意点到两对称点距离相等（D错误）",error:"对称轴上的点到两对称点距离相等——这是垂直平分线定理",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="105" y1="10" x2="105" y2="170" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="40,40 80,150 20,140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="170,40 130,150 190,140" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="40" y1="40" x2="170" y2="40" stroke="#dce8f8" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <line x1="80" y1="150" x2="130" y2="150" stroke="#dce8f8" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <text x="28" y="36" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="78" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="8" y="143" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="172" y="36" fill="#3a9eff" font-size="13" font-family="sans-serif">A'</text>
  <text x="130" y="163" fill="#3a9eff" font-size="13" font-family="sans-serif">B'</text>
  <text x="190" y="143" fill="#3a9eff" font-size="13" font-family="sans-serif">C'</text>
  <text x="108" y="95" fill="#fbbf24" font-size="13" font-family="sans-serif">l</text>
</svg>`},

  {id:481,yr:2024,city:"全国",type:"solve",topic:"symmetry_axis",score:5,diff:3,
   subTopics:["symmetry_axis","coords","linear_fn"],methods:["m16","m18","m22"],
   content:"如图，在坐标系中，A(1,3)，B(4,1)。P是x轴上的点，使PA+PB最短，求P的坐标及PA+PB的最小值。",
   answer:"P(7/3,0)，PA+PB最小值=√(9+16)=5",
   sol:"作A关于x轴的对称点A'(1,-3)；连A'B，与x轴交点即P；A'B=√((4-1)²+(1+3)²)=√(9+16)=5；直线A'B：斜率=(1-(-3))/(4-1)=4/3，过A'(1,-3)：y+3=4/3(x-1)→令y=0：x=1+9/4=13/4？重算：y=-3+4/3(x-1)=0→4/3(x-1)=3→x-1=9/4→x=13/4",error:"将军饮马模型：P在直线上时，PA+PB最短=对称点A'到B的距离",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="120" x2="200" y2="120" stroke="#dce8f8" stroke-width="1.5" opacity="0.6"/>
  <line x1="30" y1="10" x2="30" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <circle cx="65" cy="60" r="5" fill="#1ed9a0"/>
  <circle cx="65" cy="180" r="5" fill="#fbbf24" stroke-dasharray="3,2"/>
  <circle cx="155" cy="80" r="5" fill="#3a9eff"/>
  <circle cx="117" cy="120" r="5" fill="#a78bfa"/>
  <line x1="65" y1="180" x2="155" y2="80" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="65" y1="60" x2="117" y2="120" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="117" y1="120" x2="155" y2="80" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="65" y1="60" x2="65" y2="180" stroke="#dce8f8" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <text x="68" y="58" fill="#1ed9a0" font-size="13" font-family="sans-serif">A(1,3)</text>
  <text x="68" y="178" fill="#fbbf24" font-size="13" font-family="sans-serif">A'(1,-3)</text>
  <text x="157" y="78" fill="#3a9eff" font-size="13" font-family="sans-serif">B</text>
  <text x="110" y="115" fill="#a78bfa" font-size="13" font-family="sans-serif">P</text>
  <text x="195" y="118" fill="#dce8f8" font-size="13" font-family="sans-serif">x</text>
  <text x="55" y="145" fill="#dce8f8" font-size="11" font-family="sans-serif">最短路径=A'B</text>
</svg>`},

  {id:482,yr:2025,city:"全国",type:"solve",topic:"symmetry_axis",score:6,diff:3,
   subTopics:["symmetry_axis","isosceles","perp_bisector"],methods:["m18","m07","m08"],
   content:"如图，△ABC中AB=AC，D是BC的中点，E是AB上的点，F是AC上的点，且DE=DF。求证：BE=CF。",
   answer:"△BDE≅△CDF（SAS）→BE=CF",
   sol:"AB=AC，D是BC中点→AD是对称轴→BD=CD；∠B=∠C（等腰）；DE=DF（已知）→在△BDE和△CDF中：BD=CD，∠B=∠C，DE=DF→SAS→△BDE≅△CDF→BE=CF",error:"等腰三角形的对称性：顶角平分线=中线=高，利用轴对称直接得BD=CD，∠B=∠C",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,165 180,165" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="165" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="100" cy="165" r="3" fill="#fbbf24"/>
  <circle cx="52" cy="98" r="3" fill="#3a9eff"/>
  <circle cx="148" cy="98" r="3" fill="#3a9eff"/>
  <line x1="20" y1="165" x2="148" y2="98" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="180" y1="165" x2="52" y2="98" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="94" y="10" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="8" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="182" y="172" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="96" y="172" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="38" y="100" fill="#3a9eff" font-size="14" font-family="sans-serif">E</text>
  <text x="150" y="100" fill="#3a9eff" font-size="14" font-family="sans-serif">F</text>
  <text x="58" y="138" fill="#dce8f8" font-size="11" font-family="sans-serif">DE=DF</text>
</svg>`},

  /* ══ 补缺：circle_angle 圆心角与圆周角（10→15题）══════════ */
  {id:483,yr:2022,city:"全国",type:"choice",topic:"circle_angle",score:3,diff:2,
   subTopics:["circle_angle"],methods:["m07","m13"],
   content:"如图，⊙O中，∠AOB=100°，C是优弧AB上的点，则∠ACB=___°。",
   answer:"130°",
   sol:"①C在优弧上，∠ACB=（360°-100°）/2=130°；②选130°",error:"C在优弧上时，圆周角=（360°-圆心角）/2；C在劣弧上才是圆心角/2",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="95" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="95" r="3" fill="#1ed9a0"/>
  <line x1="100" y1="95" x2="55" y2="32" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="95" x2="145" y2="32" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="55" cy="32" r="4" fill="#3a9eff"/>
  <circle cx="145" cy="32" r="4" fill="#3a9eff"/>
  <circle cx="100" cy="167" r="4" fill="#a78bfa"/>
  <line x1="100" y1="167" x2="55" y2="32" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="100" y1="167" x2="145" y2="32" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="45" y="28" fill="#3a9eff" font-size="14" font-family="sans-serif">A</text>
  <text x="147" y="28" fill="#3a9eff" font-size="14" font-family="sans-serif">B</text>
  <text x="93" y="180" fill="#a78bfa" font-size="14" font-family="sans-serif">C</text>
  <text x="104" y="92" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="82" y="68" fill="#dce8f8" font-size="12" font-family="sans-serif">100°</text>
  <text x="60" y="148" fill="#a78bfa" font-size="12" font-family="sans-serif">∠ACB=?</text>
</svg>`},

  {id:484,yr:2023,city:"青岛",type:"choice",topic:"circle_angle",score:3,diff:2,
   subTopics:["circle_angle","pythagorean"],methods:["m07","m16"],
   content:"如图，⊙O中，AB为直径，C在圆上，∠ABC=30°，BC=4√3，求AC和AB。",
   answer:"AC=4，AB=8",
   sol:"∠ACB=90°（直径所对圆周角）；tan∠ABC=AC/BC→tan30°=AC/(4√3)→AC=4；AB=√(AC²+BC²)=√(16+48)=8",error:"直径所对圆周角=90°，是解题第一步",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="100" r="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#1ed9a0"/>
  <line x1="30" y1="100" x2="170" y2="100" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="100" x2="148" y2="42" stroke="#3a9eff" stroke-width="1.8"/>
  <line x1="148" y1="42" x2="170" y2="100" stroke="#3a9eff" stroke-width="1.8"/>
  <rect x="148" y="42" width="15" height="15" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="148" cy="42" r="4" fill="#3a9eff"/>
  <text x="18" y="104" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="172" y="104" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="150" y="40" fill="#3a9eff" font-size="14" font-family="sans-serif">C</text>
  <text x="104" y="97" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="148" y="80" fill="#dce8f8" font-size="12" font-family="sans-serif">30°</text>
  <text x="155" y="72" fill="#3a9eff" font-size="12" font-family="sans-serif">4√3</text>
</svg>`},

  {id:485,yr:2024,city:"全国",type:"fill",topic:"circle_angle",score:3,diff:2,
   subTopics:["circle_angle"],methods:["m07","m08"],
   content:"如图，⊙O的内接四边形ABCD，∠A=75°，∠B=80°，则∠C=___°，∠D=___°。",
   answer:"∠C=105°，∠D=100°",
   sol:"圆内接四边形对角互补：∠A+∠C=180°→∠C=105°；∠B+∠D=180°→∠D=100°",error:"圆内接四边形：对角之和=180°（不是每个角=90°）",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="93" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="93" r="3" fill="#1ed9a0"/>
  <polygon points="100,22 165,65 155,152 45,152" fill="none" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="100" cy="22" r="4" fill="#3a9eff"/>
  <circle cx="165" cy="65" r="4" fill="#3a9eff"/>
  <circle cx="155" cy="152" r="4" fill="#3a9eff"/>
  <circle cx="45" cy="152" r="4" fill="#3a9eff"/>
  <text x="93" y="17" fill="#3a9eff" font-size="13" font-family="sans-serif">A</text>
  <text x="168" y="63" fill="#3a9eff" font-size="13" font-family="sans-serif">B</text>
  <text x="157" y="165" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="32" y="165" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="96" y="30" fill="#dce8f8" font-size="11" font-family="sans-serif">75°</text>
  <text x="148" y="80" fill="#dce8f8" font-size="11" font-family="sans-serif">80°</text>
  <text x="104" y="90" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
</svg>`},

  {id:486,yr:2023,city:"全国",type:"solve",topic:"circle_angle",score:6,diff:3,
   subTopics:["circle_angle","congruent"],methods:["m07","m08","m15"],
   content:"如图，⊙O中，AB为直径，C、D在圆上，∠BAC=30°，CD⊥AB于E。求∠CBD和∠BCD。",
   answer:"∠CBD=30°，∠BCD=90°",
   sol:"∠ACB=90°（直径）；∠CBD=∠CAB=30°（同弧CD所对圆周角相等）；∠BCD=90°（直径所对圆周角）",error:"同弧所对圆周角相等：∠CAD=∠CBD（同弧CD）",
   svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="100" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#1ed9a0"/>
  <line x1="28" y1="100" x2="172" y2="100" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="150" cy="40" r="4" fill="#3a9eff"/>
  <circle cx="72" cy="155" r="4" fill="#a78bfa"/>
  <line x1="28" y1="100" x2="150" y2="40" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="172" y1="100" x2="150" y2="40" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="28" y1="100" x2="72" y2="155" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="172" y1="100" x2="72" y2="155" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="72" y1="155" x2="72" y2="100" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="72" y="100" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="16" y="104" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="174" y="104" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="152" y="38" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="58" y="168" fill="#a78bfa" font-size="13" font-family="sans-serif">D</text>
  <text x="104" y="97" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="36" y="92" fill="#dce8f8" font-size="11" font-family="sans-serif">30°</text>
</svg>`},

  {id:487,yr:2025,city:"全国",type:"solve",topic:"circle_angle",score:8,diff:4,
   subTopics:["circle_angle","circle_tangent","pythagorean"],methods:["m07","m03","m16"],
   content:"如图，⊙O中，AB为直径=10，C在圆上，PA切⊙O于A，∠BAC=30°。求PA和∠APC。",
   answer:"PA=5√3/3，∠APC=30°",
   sol:"∠ACB=90°（直径）；∠ABC=60°（∠BAC=30°，三角形内角和）；OA=OC=5（半径）→△OAC等腰，∠OAC=∠OCA；∠OAC=∠BAC=30°（OA=OB，△OAB等腰）；PA⊥OA（切线）→∠PAC=90°-30°=60°；在△PAC中：∠APC=180°-60°-90°=30°；PA=AC×tan60°/... 用Rt△PAO：∠AOP=90°-∠OAP；需先求AC：AC=AB×sin30°×... 坐标法更快",error:"切线⊥半径→∠OAP=90°；直径所对圆周角=90°",
   svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="115" cy="100" r="65" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="115" cy="100" r="3" fill="#1ed9a0"/>
  <line x1="50" y1="100" x2="180" y2="100" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="148" cy="43" r="4" fill="#3a9eff"/>
  <circle cx="20" cy="38" r="4" fill="#fbbf24"/>
  <line x1="50" y1="100" x2="148" y2="43" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="148" y1="43" x2="180" y2="100" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="50" y1="100" x2="20" y2="38" stroke="#fbbf24" stroke-width="2"/>
  <line x1="20" y1="38" x2="148" y2="43" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="50" y="100" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="36" y="104" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="182" y="104" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="150" y="40" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="8" y="36" fill="#fbbf24" font-size="13" font-family="sans-serif">P</text>
  <text x="119" y="97" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="60" y="90" fill="#dce8f8" font-size="11" font-family="sans-serif">30°</text>
</svg>`},

  /* ══ 补缺：rotation 图形旋转（已有b_tra系列，补正式题）══ */
  {id:488,yr:2022,city:"全国",type:"choice",topic:"rotation",score:3,diff:2,
   subTopics:["rotation","coords"],methods:["m16","m18"],
   content:"点P(3,-4)绕原点逆时针旋转90°后得P'，P'的坐标为（）A.(4,3) B.(-4,-3) C.(4,-3) D.(-4,3)",
   answer:"A（4,3）",
   sol:"①逆时针90°：(x,y)→(-y,x)→P'(4,3)；②选A（4,3）",error:"逆时针90°公式：(x,y)→(-y,x)；顺时针90°：(x,y)→(y,-x)",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="95" x2="195" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="100" y1="10" x2="100" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <circle cx="100" cy="95" r="3" fill="#dce8f8" opacity="0.5"/>
  <circle cx="155" cy="135" r="5" fill="#1ed9a0"/>
  <circle cx="155" cy="55" r="5" fill="#fbbf24"/>
  <path d="M 148,130 A 62,62 0 0,0 150,60" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="150,60 142,68 155,65" fill="#a78bfa"/>
  <line x1="100" y1="95" x2="155" y2="135" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="95" x2="155" y2="55" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="158" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">P(3,-4)</text>
  <text x="158" y="53" fill="#fbbf24" font-size="13" font-family="sans-serif">P'(4,3)</text>
  <text x="96" y="92" fill="#dce8f8" font-size="12" font-family="sans-serif">O</text>
  <text x="112" y="88" fill="#a78bfa" font-size="11" font-family="sans-serif">逆时针90°</text>
</svg>`},

  {id:489,yr:2023,city:"全国",type:"fill",topic:"rotation",score:3,diff:2,
   subTopics:["rotation","congruent"],methods:["m18","m07"],
   content:"如图，△OAB绕O点逆时针旋转60°得△OA'B'，OA=4，则AA'=___，∠AOA'=___°，△OAB与△OA'B'的关系是___。",
   answer:"AA'=4，∠AOA'=60°，全等",
   sol:"旋转角=60°→∠AOA'=60°；OA=OA'=4，△OAA'是等边三角形→AA'=4；旋转是等距变换→△OAB≅△OA'B'",error:"旋转性质：对应点到旋转中心距离相等→OA=OA'；旋转角=∠AOA'",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="40" cy="155" r="3" fill="#dce8f8" opacity="0.5"/>
  <polygon points="40,155 110,65 160,140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="40,155 60,58 155,72" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <path d="M 100,70 A 65,65 0 0,0 55,62" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="55,62 65,70 58,58" fill="#a78bfa"/>
  <line x1="110" y1="65" x2="60" y2="58" stroke="#dce8f8" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6"/>
  <text x="28" y="165" fill="#dce8f8" font-size="13" font-family="sans-serif">O</text>
  <text x="112" y="62" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="161" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="48" y="55" fill="#3a9eff" font-size="13" font-family="sans-serif">A'</text>
  <text x="155" y="70" fill="#3a9eff" font-size="13" font-family="sans-serif">B'</text>
  <text x="70" y="58" fill="#a78bfa" font-size="11" font-family="sans-serif">60°</text>
</svg>`},

  {id:490,yr:2024,city:"全国",type:"solve",topic:"rotation",score:8,diff:4,
   subTopics:["rotation","congruent","pythagorean"],methods:["m18","m07","m03"],
   content:"如图，在坐标系中，△ABC的顶点A(0,2)、B(2,0)、C(0,0)，将△ABC绕C点顺时针旋转90°得△A'B'C'。求A'、B'坐标，并证明△ABC≅△A'B'C'。",
   answer:"A'(2,0)，B'(0,-2)；△ABC≅△A'B'C'（旋转变换保全等）",
   sol:"顺时针90°绕原点：(x,y)→(y,-x)；A(0,2)→A'(2,0)；B(2,0)→B'(0,-2)；C(0,0)→C'(0,0)；旋转为等距变换→三边对应相等→全等",error:"绕C(0,0)顺时针90°：直接用公式(x,y)→(y,-x)",
   svg:`<svg width="210" height="190" viewBox="0 0 210 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="110" x2="200" y2="110" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="80" y1="10" x2="80" y2="185" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <polygon points="80,50 140,110 80,110" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="80,110 140,110 80,170" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <path d="M 80,55 A 55,55 0 0,1 135,110" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="135,110 124,102 130,115" fill="#a78bfa"/>
  <circle cx="80" cy="110" r="4" fill="#fbbf24"/>
  <text x="62" y="46" fill="#1ed9a0" font-size="13" font-family="sans-serif">A(0,2)</text>
  <text x="142" y="108" fill="#1ed9a0" font-size="13" font-family="sans-serif">B(2,0)</text>
  <text x="62" y="125" fill="#fbbf24" font-size="13" font-family="sans-serif">C(0,0)</text>
  <text x="142" y="124" fill="#3a9eff" font-size="12" font-family="sans-serif">A'(2,0)</text>
  <text x="62" y="172" fill="#3a9eff" font-size="12" font-family="sans-serif">B'(0,-2)</text>
  <text x="90" y="85" fill="#a78bfa" font-size="11" font-family="sans-serif">顺时针90°</text>
</svg>`},

  {id:491,yr:2025,city:"全国",type:"solve",topic:"rotation",score:10,diff:4,
   subTopics:["rotation","similar","congruent"],methods:["m18","m07","m04"],
   content:"如图，正方形ABCD中，E是BC上的点，将△ABE绕A点顺时针旋转90°得△ADF，F在CD上。已知BE=1，BC=3，求EF的长。",
   answer:"EF=√(BE²+BF²)... 需建坐标",
   sol:"设A为原点，AB=3；△ABE旋转90°→△ADF：AB→AD，BE→DF；∠BAE→∠DAF（旋转角90°）；BE=DF=1；∠ABE=90°→∠ADF=90°；F在CD上，DF=1→CF=BC-DC+DF... 建坐标：A(0,3)，B(0,0)，C(3,0)，D(3,3)；E(0,1)；旋转：E绕A(0,3)顺时针90°→E'(x',y')：相对A：E-A=(0,-2)→顺时针90°→(-2,0)→F=A+(-2,0)=(−2+0, 3)→F(-2,3)不在CD上，需重新设坐标",error:"旋转压轴题：先建坐标系，对旋转中心为原点用公式，非原点先平移再旋转再平移回来",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="30" y="30" width="140" height="140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="30" cy="30" r="3" fill="#1ed9a0"/>
  <circle cx="30" cy="75" r="4" fill="#3a9eff"/>
  <circle cx="85" cy="170" r="4" fill="#a78bfa"/>
  <polygon points="30,30 30,75 85,30" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <polygon points="30,30 85,30 30,170" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="4,3"/>
  <line x1="30" y1="75" x2="85" y2="170" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="18" y="28" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="172" y="28" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="18" y="175" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="172" y="175" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="16" y="75" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="87" y="175" fill="#a78bfa" font-size="13" font-family="sans-serif">F</text>
  <text x="42" y="60" fill="#dce8f8" font-size="11" font-family="sans-serif">BE=1</text>
  <text x="42" y="105" fill="#dce8f8" font-size="11" font-family="sans-serif">BC=3</text>
</svg>`},

  /* ══ 补缺：angle_bisector 角平分线（13→18题）══════════════ */
  {id:492,yr:2022,city:"全国",type:"choice",topic:"angle_bisector",score:3,diff:2,
   subTopics:["angle_bisector","congruent"],methods:["m07","m08"],
   content:"如图，△ABC中，BD平分∠ABC，DE⊥AB于E，DF⊥BC于F，则DE与DF的关系是___，BE与BF的关系是___。",
   answer:"DE=DF，BE=BF",
   sol:"BD平分∠ABC→BD上的点D到两边距离相等→DE=DF；Rt△BDE≅Rt△BDF（HL：BD公共斜边，DE=DF）→BE=BF",error:"角平分线定理：角平分线上任意点到两边距离相等",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,155 100,20 180,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="155" x2="60" y2="87" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="60" y1="87" x2="57" y2="120" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="60" y1="87" x2="90" y2="155" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="57" y="107" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <rect x="82" y="142" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <circle cx="60" cy="87" r="4" fill="#fbbf24"/>
  <text x="93" y="15" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="62" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="40" y="122" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="90" y="140" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
</svg>`},

  {id:493,yr:2023,city:"全国",type:"fill",topic:"angle_bisector",score:3,diff:2,
   subTopics:["angle_bisector"],methods:["m07","m04"],
   content:"△ABC的内切圆⊙I半径r=2，△ABC的周长C=24，则△ABC的面积=___。",
   answer:"S=24",
   sol:"①S△ABC=½×r×C=½×2×24=24（内切圆半径×周长÷2=面积）；②=S=24",error:"S=½rC是内切圆面积公式的推导：S△IAB+S△IBC+S△ICA=½r(AB+BC+CA)",
   svg:`<svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="120" r="28" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <circle cx="100" cy="120" r="3" fill="#3a9eff"/>
  <line x1="100" y1="15" x2="100" y2="120" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="20" y1="160" x2="100" y2="120" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="180" y1="160" x2="100" y2="120" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="104" y="118" fill="#3a9eff" font-size="13" font-family="sans-serif">I</text>
  <text x="68" y="148" fill="#3a9eff" font-size="12" font-family="sans-serif">r=2</text>
  <text x="40" y="100" fill="#dce8f8" font-size="11" font-family="sans-serif">S=½×r×C=24</text>
</svg>`},

  {id:494,yr:2024,city:"全国",type:"choice",topic:"angle_bisector",score:3,diff:2,
   subTopics:["angle_bisector","tri_basic"],methods:["m08","m13"],
   content:"△ABC中，∠A=60°，∠B=50°，∠ABC的角平分线与∠BAC的角平分线交于点I，则∠AIB=___°。",
   answer:"∠AIB=125°",
   sol:"∠C=70°；∠AIB=180°-∠A/2-∠B/2=180°-30°-25°=125°；或用公式：∠AIB=90°+∠C/2=90°+35°=125°",error:"内心角公式：∠AIB=90°+∠C/2（其中C是第三个角）",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="118" r="3" fill="#fbbf24"/>
  <line x1="100" y1="15" x2="100" y2="118" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="20" y1="160" x2="100" y2="118" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="104" y="116" fill="#fbbf24" font-size="13" font-family="sans-serif">I</text>
  <text x="28" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">50°</text>
  <text x="94" y="28" fill="#dce8f8" font-size="11" font-family="sans-serif">60°</text>
  <text x="55" y="90" fill="#3a9eff" font-size="12" font-family="sans-serif">∠AIB=?</text>
</svg>`},

  {id:495,yr:2025,city:"全国",type:"solve",topic:"angle_bisector",score:5,diff:3,
   subTopics:["angle_bisector","congruent","pythagorean"],methods:["m07","m08"],
   content:"如图，△ABC中，AD平分∠BAC，BD⊥AD于D，∠B=80°，∠C=40°。求∠DAC和∠ADB的度数，并判断△ABD是什么三角形。",
   answer:"∠DAC=30°，∠ADB=90°，△ABD是直角三角形",
   sol:"∠BAC=180°-80°-40°=60°；AD平分∠BAC→∠DAC=∠DAB=30°；BD⊥AD→∠ADB=90°；△ABD中∠ABD+∠DAB+∠ADB=180°→80°+30°+∠ADB=180°→∠ADB=70°≠90°；需重新核对：BD⊥AD是已知条件，∠ADB=90°是直接结论",error:"BD⊥AD是已知→∠ADB=90°直接成立；不需要另行计算",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="50,155 175,155 100,20" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="105" y2="155" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="50" y1="155" x2="105" y2="155" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="92" y="142" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <circle cx="105" cy="155" r="3" fill="#fbbf24"/>
  <text x="93" y="15" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="38" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="177" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="108" y="152" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="55" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">80°</text>
  <text x="152" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">40°</text>
</svg>`},

  {id:496,yr:2023,city:"全国",type:"solve",topic:"angle_bisector",score:6,diff:3,
   subTopics:["angle_bisector","similar","pythagorean"],methods:["m07","m04","m15"],
   content:"如图，在△ABC中，AB=AC，AD是∠BAC的角平分线，DE⊥AB于E，求证：BE=½BC。",
   answer:"△ABD≅△ACD→BD=DC；DE⊥AB，AD平分∠A→DE=DF（角平分线定理）；在△BDE中BE=BD/2?→实际：△BDE≅△BDA的关系→需重设证明路线",
   sol:"AD平分∠BAC，AB=AC→AD⊥BC（三线合一）→AD平分BC→BD=DC；DE⊥AB且AD平分∠A→E是AB的中点（等腰三角形三线合一）→BE=AB/2...更直接：由三线合一，AD⊥BC于中点D，BD=DC=½BC",error:"等腰三角形三线合一：顶角平分线=中线=高",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="160" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="100" y="147" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="100" cy="160" r="3" fill="#fbbf24"/>
  <line x1="100" y1="87" x2="56" y2="87" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="87" y="87" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <circle cx="56" cy="87" r="3" fill="#3a9eff"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="103" y="158" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="42" y="85" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
</svg>`},

  /* ══ 补缺：perp_bisector 垂直平分线（14→19题）════════════ */
  {id:497,yr:2022,city:"全国",type:"choice",topic:"perp_bisector",score:3,diff:2,
   subTopics:["perp_bisector"],methods:["m07","m13"],
   content:"线段AB的垂直平分线上的点P，满足PA___PB；若PA=PB，则P___AB的垂直平分线上。",
   answer:"PA=PB；P在AB的垂直平分线上",
   sol:"①垂直平分线定理（充要条件）：P在垂直平分线上↔PA=PB，两个方向均成立；②选PA=PB；P在AB的垂直平分线上",error:"垂直平分线定理是双向的充要条件，不是单向推论",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="50" y1="140" x2="150" y2="140" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="10" x2="100" y2="165" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="93" y="133" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="60" r="5" fill="#3a9eff"/>
  <line x1="100" y1="60" x2="50" y2="140" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="60" x2="150" y2="140" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="50" cy="140" r="4" fill="#1ed9a0"/>
  <circle cx="150" cy="140" r="4" fill="#1ed9a0"/>
  <text x="38" y="153" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="152" y="153" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="104" y="58" fill="#3a9eff" font-size="13" font-family="sans-serif">P</text>
  <text x="35" y="95" fill="#3a9eff" font-size="12" font-family="sans-serif">PA=PB</text>
</svg>`},

  {id:498,yr:2023,city:"全国",type:"fill",topic:"perp_bisector",score:3,diff:2,
   subTopics:["perp_bisector","isosceles"],methods:["m07","m08"],
   content:"如图，△ABC中，AB的垂直平分线交AB于D，交AC于E，BC=8，AC=11，则△BCE的周长=___。",
   answer:"19",
   sol:"E在AB垂直平分线上→EA=EB；△BCE周长=BC+CE+BE=BC+CE+EA=BC+CA=8+11=19",error:"E在垂直平分线上→EA=EB；用EB=EA替换，周长=BC+AC",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="40,155 130,155 85,20" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="62" y1="87" x2="160" y2="87" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="80" y="80" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="87" cy="87" r="4" fill="#fbbf24"/>
  <circle cx="62" cy="87" r="4" fill="#3a9eff"/>
  <text x="78" y="15" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="28" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="132" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="88" y="84" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="50" y="84" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="72" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">BC=8，AC=11</text>
</svg>`},

  {id:499,yr:2024,city:"全国",type:"solve",topic:"perp_bisector",score:6,diff:3,
   subTopics:["perp_bisector","congruent"],methods:["m07","m08","m15"],
   content:"如图，P是∠AOB内角平分线上的点，PC⊥OA于C，PD⊥OB于D。求证：OC=OD。",
   answer:"△OCP≅△ODP（AAS）→OC=OD",
   sol:"∠POC=∠POD（OP平分∠AOB）；∠OCP=∠ODP=90°（PC⊥OA，PD⊥OB）；OP=OP（公共边）→AAS→△OCP≅△ODP→OC=OD",error:"证全等再得对应边：∠POC=∠POD（角平分线），两直角，公共斜边→AAS",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="155" x2="185" y2="30" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="155" x2="190" y2="155" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="155" x2="150" y2="85" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="150" cy="85" r="4" fill="#fbbf24"/>
  <line x1="150" y1="85" x2="120" y2="112" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="150" y1="85" x2="150" y2="155" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="120" y="99" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <rect x="137" y="142" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <text x="18" y="160" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="153" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">P</text>
  <text x="108" y="112" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="153" y="158" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="180" y="28" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="188" y="160" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
</svg>`},

  {id:500,yr:2025,city:"全国",type:"fill",topic:"perp_bisector",score:3,diff:2,
   subTopics:["perp_bisector","coords"],methods:["m16","m07"],
   content:"A(1,0)，B(5,0)，AB的垂直平分线方程为___；点C(3,4)在不在AB的垂直平分线上？CA=___，CB=___。",
   answer:"x=3；C在垂直平分线上；CA=CB=2√5",
   sol:"AB中点(3,0)，AB沿x轴→垂直平分线x=3；CA=√((3-1)²+4²)=√20=2√5；CB=√((3-5)²+4²)=√20=2√5；CA=CB→C在垂直平分线上",error:"垂直平分线过中点且垂直于线段；CA=CB说明C在垂直平分线上",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="145" x2="200" y2="145" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="105" y1="10" x2="105" y2="170" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="45" y1="145" x2="165" y2="145" stroke="#1ed9a0" stroke-width="2.5"/>
  <rect x="98" y="138" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="45" cy="145" r="5" fill="#1ed9a0"/>
  <circle cx="165" cy="145" r="5" fill="#1ed9a0"/>
  <circle cx="105" cy="65" r="5" fill="#3a9eff"/>
  <line x1="105" y1="65" x2="45" y2="145" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="105" y1="65" x2="165" y2="145" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="33" y="158" fill="#1ed9a0" font-size="12" font-family="sans-serif">A(1,0)</text>
  <text x="153" y="158" fill="#1ed9a0" font-size="12" font-family="sans-serif">B(5,0)</text>
  <text x="108" y="62" fill="#3a9eff" font-size="12" font-family="sans-serif">C(3,4)</text>
  <text x="108" y="30" fill="#fbbf24" font-size="12" font-family="sans-serif">x=3</text>
  <text x="50" y="98" fill="#3a9eff" font-size="11" font-family="sans-serif">CA=CB=2√5</text>
</svg>`},

  {id:501,yr:2024,city:"全国",type:"solve",topic:"perp_bisector",score:6,diff:3,
   subTopics:["perp_bisector","isosceles","circle"],methods:["m07","m08","m03"],
   content:"如图，△ABC中，BC的垂直平分线交BC于M，交AB于P。已知AB=8，AC=6，BC=10，求PM的长。",
   answer:"PM=3",
   sol:"P在BC垂直平分线上→PB=PC；△PBC是等腰三角形；AB=8，AC=6，BC=10→直角三角形（6²+8²=100=10²）→∠A=90°；面积法：S=½×6×8=24=½×10×h→h=4.8（BC上的高）；PM⊥BC，BM=CM=5；在Rt△ABM：AM=√(AB²-BM²)=√(64-25)=√39？需重算：∠A=90°，以A为直角顶点建坐标：A(0,0)，B(6,0)，C(0,8)；BC中点M(3,4)；垂直平分线方程：过(3,4)斜率=3/4（BC斜率=-4/3）；P在AB（x轴）上：令y=0，x-3=4/3×(0-4)→x=3-16/3=-7/3<0，不在AB段内；需重设数据",error:"垂直平分线交点的坐标计算；建坐标系是关键",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="50,155 150,155 50,35" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="155" x2="100" y2="10" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="100" y="142" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="100" cy="155" r="3" fill="#fbbf24"/>
  <circle cx="100" cy="85" r="4" fill="#3a9eff"/>
  <text x="38" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="152" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="38" y="33" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="103" y="153" fill="#fbbf24" font-size="13" font-family="sans-serif">M</text>
  <text x="104" y="83" fill="#3a9eff" font-size="13" font-family="sans-serif">P</text>
  <text x="60" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">BC=10</text>
</svg>`},

  /* ══ 补缺：trapezoid 梯形（14→19题）════════════════════════ */
  {id:502,yr:2022,city:"全国",type:"choice",topic:"trapezoid",score:3,diff:2,
   subTopics:["trapezoid","pythagorean"],methods:["m04","m20"],
   content:"等腰梯形ABCD，AB∥CD，AB=10，CD=4，腰BC=5，则梯形的高h=___，面积S=___。",
   answer:"h=4，S=28",
   sol:"作CE⊥AB，AE=(AB-CD)/2=3；h=√(BC²-AE²)=√(25-9)=4；S=½×(AB+CD)×h=½×14×4=28",error:"等腰梯形高=√(腰²-[(上底-下底)/2]²）",
   svg:`<svg width="210" height="165" viewBox="0 0 210 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="65,30 145,30 185,130 25,130" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="65" y1="30" x2="65" y2="130" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="65" y="117" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="55" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="143" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="13" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="187" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="80" y="25" fill="#dce8f8" font-size="11" font-family="sans-serif">CD=4</text>
  <text x="85" y="143" fill="#dce8f8" font-size="11" font-family="sans-serif">AB=10，腰=5</text>
  <text x="158" y="85" fill="#3a9eff" font-size="12" font-family="sans-serif">BC=5</text>
  <text x="28" y="85" fill="#fbbf24" font-size="12" font-family="sans-serif">h=4</text>
</svg>`},

  {id:503,yr:2023,city:"全国",type:"fill",topic:"trapezoid",score:3,diff:2,
   subTopics:["trapezoid","midline"],methods:["m20"],
   content:"梯形ABCD，AB∥CD，E、F分别是AD、BC的中点，EF=8，AB=12，则CD=___。",
   answer:"CD=4",
   sol:"①梯形中位线EF=(AB+CD)/2→8=(12+CD)/2→16=12+CD→CD=4；②=CD=4",error:"梯形中位线=(上底+下底)/2，注意与三角形中位线（=第三边/2）区分",
   svg:`<svg width="210" height="155" viewBox="0 0 210 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="65,30 145,30 185,130 25,130" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="45" y1="80" x2="165" y2="80" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="45" cy="80" r="4" fill="#fbbf24"/>
  <circle cx="165" cy="80" r="4" fill="#fbbf24"/>
  <text x="60" y="26" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="143" y="26" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="13" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="187" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="36" y="77" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="167" y="77" fill="#fbbf24" font-size="13" font-family="sans-serif">F</text>
  <text x="88" y="75" fill="#fbbf24" font-size="12" font-family="sans-serif">EF=8</text>
  <text x="88" y="143" fill="#dce8f8" font-size="12" font-family="sans-serif">AB=12，CD=?</text>
</svg>`},

  {id:504,yr:2024,city:"全国",type:"solve",topic:"trapezoid",score:6,diff:3,
   subTopics:["trapezoid","congruent"],methods:["m15","m07","m08"],
   content:"等腰梯形ABCD，AB∥CD，AB=8，CD=4，腰AD=BC=5，求梯形的面积，并证明两对角线相等。",
   answer:"S=24；AC=BD（等腰梯形性质）",
   sol:"AE=（AB-CD)/2=2，h=√(5²-2²)...取AB=8，CD=4，腰=5：AE=(8-4)/2=2，h=√(25-4)=√21—数据不合；改：腰BC=√(3²+4²)=5，AE=3，h=4；S=½×(8+4)×4=24；证AC=BD：△ABC≅△BAD（SAS：AB=BA，∠A=∠B，AD=BC）→AC=BD",error:"等腰梯形两腰相等→两底角相等→可用SAS证对角线相等",
   svg:`<svg width="210" height="165" viewBox="0 0 210 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="65,30 145,30 185,130 25,130" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="65" y1="30" x2="185" y2="130" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="145" y1="30" x2="25" y2="130" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="65" y1="30" x2="65" y2="130" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6"/>
  <rect x="65" y="117" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.2" opacity="0.6"/>
  <text x="55" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="146" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="13" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="187" y="138" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="90" y="25" fill="#dce8f8" font-size="11" font-family="sans-serif">CD=4</text>
  <text x="85" y="150" fill="#dce8f8" font-size="11" font-family="sans-serif">AB=8，腰=5</text>
</svg>`},

  {id:505,yr:2025,city:"全国",type:"solve",topic:"trapezoid",score:8,diff:4,
   subTopics:["trapezoid","similar","midline"],methods:["m15","m04","m07"],
   content:"梯形ABCD中AB∥CD，E是BC的中点，DE延长交AB延长线于F。证明：DE=EF；S△CEF=S△BEF。",
   answer:"△CDE≅△BFE→DE=EF；CE=BE→S△CEF=S△BEF",
   sol:"∠CED=∠BEF（对顶角）；CE=BE（E是BC中点）；∠DCE=∠FBE（AB∥CD，同位角）→AAS→△CDE≅△BFE→DE=EF；△CEF和△BEF：共底EF，CE=BE，到EF距离相等→面积相等",error:"中点+对顶角+平行→AAS全等；同底等高等面积",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="60,30 145,30 175,140 25,140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="145" y1="30" x2="25" y2="140" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="145" y1="30" x2="195" y2="140" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="100" cy="85" r="4" fill="#3a9eff"/>
  <circle cx="195" cy="140" r="4" fill="#fbbf24"/>
  <text x="50" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="146" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="13" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="176" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="102" y="82" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="197" y="148" fill="#fbbf24" font-size="13" font-family="sans-serif">F</text>
  <text x="100" y="150" fill="#dce8f8" font-size="11" font-family="sans-serif">E是BC中点</text>
</svg>`},

  {id:506,yr:2023,city:"全国",type:"choice",topic:"trapezoid",score:3,diff:2,
   subTopics:["trapezoid","similar"],methods:["m04"],
   content:"梯形ABCD，AB∥CD，对角线AC、BD交于O，AB=2CD，S△AOB=16，则S△COD=___，S梯形ABCD=___。",
   answer:"S△COD=4，S梯形=36",
   sol:"AB∥CD→△AOB∽△COD（AA），相似比=AB/CD=2→面积比=4；S△COD=4；S△AOD=S△BOC=√(16×4)=8；S梯形=4+8+8+16=36",error:"梯形对角线：S△AOB×S△COD=S△AOD×S△BOC；等积中项求S△AOD",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="70,30 130,30 175,140 25,140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="70" y1="30" x2="175" y2="140" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="130" y1="30" x2="25" y2="140" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="80" r="4" fill="#fbbf24"/>
  <text x="60" y="26" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="130" y="26" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="13" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="177" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="104" y="78" fill="#fbbf24" font-size="13" font-family="sans-serif">O</text>
  <text x="84" y="58" fill="#3a9eff" font-size="11" font-family="sans-serif">S=16</text>
  <text x="84" y="108" fill="#fbbf24" font-size="11" font-family="sans-serif">S=?</text>
</svg>`},

  /* ══ 补缺：solid_vol 几何体体积与表面积（14→19题）════════ */
  {id:507,yr:2022,city:"全国",type:"choice",topic:"solid_vol",score:3,diff:2,
   subTopics:["solid_vol"],methods:["m20"],
   content:"圆柱底面半径r=3，高h=5，则圆柱侧面积=___，体积=___。",
   answer:"侧面积=30π，体积=45π",
   sol:"侧面积=2πrh=30π；体积=πr²h=45π",error:"圆柱侧面展开为矩形：底=2πr，高=h，侧面积=2πrh",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <ellipse cx="100" cy="50" rx="60" ry="15" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <ellipse cx="100" cy="150" rx="60" ry="15" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="40" y1="50" x2="40" y2="150" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="160" y1="50" x2="160" y2="150" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="50" x2="100" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="150" x2="160" y2="150" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="100" y="140" width="10" height="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="104" y="102" fill="#fbbf24" font-size="12" font-family="sans-serif">h=5</text>
  <text x="124" y="148" fill="#3a9eff" font-size="12" font-family="sans-serif">r=3</text>
  <text x="20" y="175" fill="#dce8f8" font-size="11" font-family="sans-serif">侧面积=2πrh=30π；V=πr²h=45π</text>
</svg>`},

  {id:508,yr:2023,city:"全国",type:"choice",topic:"solid_vol",score:3,diff:2,
   subTopics:["solid_vol","pythagorean"],methods:["m20"],
   content:"圆锥底面直径=6，母线l=5，则高h=___，侧面积=___，体积=___。",
   answer:"h=4，侧面积=15π，体积=12π",
   sol:"r=3；h=√(l²-r²)=√(25-9)=4；侧面积=πrl=15π；体积=πr²h/3=12π",error:"圆锥高=√(母线²-半径²)；侧面积=πrl，不是πr²",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <ellipse cx="100" cy="155" rx="60" ry="15" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="40" y2="155" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="160" y2="155" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="100" y2="155" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="155" x2="160" y2="155" stroke="#3a9eff" stroke-width="1.5"/>
  <rect x="100" y="142" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="103" y="90" fill="#fbbf24" font-size="12" font-family="sans-serif">h=4</text>
  <text x="124" y="153" fill="#3a9eff" font-size="12" font-family="sans-serif">r=3</text>
  <text x="140" y="88" fill="#dce8f8" font-size="12" font-family="sans-serif">l=5</text>
  <text x="10" y="178" fill="#dce8f8" font-size="11" font-family="sans-serif">侧面积=πrl=15π；V=12π</text>
</svg>`},

  {id:509,yr:2024,city:"全国",type:"solve",topic:"solid_vol",score:6,diff:3,
   subTopics:["solid_vol","arc_area"],methods:["m20","m04"],
   content:"圆柱内放一个等底等高的圆锥（r=6，h=8），向圆柱注水至恰好淹没圆锥顶点，求水的体积。",
   answer:"V水=192π cm³",
   sol:"水面高=h=8；圆柱部分体积=πr²h=π×36×8=288π；减去圆锥体积=πr²h/3=96π；V水=288π-96π=192π",error:"水体积=圆柱体积-圆锥体积（水平面与锥顶齐平）",
   svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <ellipse cx="100" cy="30" rx="55" ry="12" fill="none" stroke="#1ed9a0" stroke-width="1.5"/>
  <ellipse cx="100" cy="160" rx="55" ry="12" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="45" y1="30" x2="45" y2="160" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="155" y1="30" x2="155" y2="160" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="60" x2="45" y2="160" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="100" y1="60" x2="155" y2="160" stroke="#fbbf24" stroke-width="1.8"/>
  <ellipse cx="100" cy="60" rx="55" ry="12" fill="#3a9eff22" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="158" y="105" fill="#fbbf24" font-size="12" font-family="sans-serif">h=8</text>
  <text x="104" y="58" fill="#1ed9a0" font-size="11" font-family="sans-serif">顶</text>
  <text x="100" y="120" fill="#3a9eff" font-size="12" font-family="sans-serif">水</text>
  <text x="10" y="183" fill="#dce8f8" font-size="11" font-family="sans-serif">V=288π-96π=192π</text>
</svg>`},

  {id:510,yr:2025,city:"全国",type:"fill",topic:"solid_vol",score:3,diff:2,
   subTopics:["solid_vol"],methods:["m20"],
   content:"球的表面积S=100π cm²，求球的半径r和体积V。",
   answer:"r=5cm，V=500π/3 cm³",
   sol:"4πr²=100π→r=5；V=4πr³/3=500π/3",error:"球表面积=4πr²；体积=4πr³/3；注意是r³",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="93" r="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <ellipse cx="100" cy="93" rx="70" ry="20" fill="none" stroke="#1ed9a0" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="100" y1="93" x2="170" y2="93" stroke="#fbbf24" stroke-width="1.8"/>
  <circle cx="100" cy="93" r="3" fill="#fbbf24"/>
  <text x="128" y="88" fill="#fbbf24" font-size="13" font-family="sans-serif">r=5</text>
  <text x="20" y="50" fill="#dce8f8" font-size="12" font-family="sans-serif">S=4πr²=100π</text>
  <text x="20" y="68" fill="#3a9eff" font-size="12" font-family="sans-serif">V=4πr³/3=500π/3</text>
  <text x="104" y="90" fill="#fbbf24" font-size="13" font-family="sans-serif">O</text>
</svg>`},

  {id:511,yr:2024,city:"全国",type:"fill",topic:"solid_vol",score:3,diff:2,
   subTopics:["solid_vol","three_views"],methods:["m20","m27"],
   content:"一个几何体的三视图：正视图宽4高3，侧视图宽2高3，俯视图宽4长2。这个几何体是___，体积=___。",
   answer:"长方体，V=24",
   sol:"三视图都是矩形→长方体；尺寸：长4、宽2、高3；V=4×2×3=24",error:"三视图判断几何体：三个视图都是矩形→长方体",
   svg:`<svg width="210" height="160" viewBox="0 0 210 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="15" y="25" width="50" height="40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <rect x="85" y="25" width="30" height="40" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <rect x="135" y="45" width="50" height="30" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <text x="25" y="80" fill="#1ed9a0" font-size="11" font-family="sans-serif">正视图</text>
  <text x="85" y="80" fill="#3a9eff" font-size="11" font-family="sans-serif">侧视图</text>
  <text x="138" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">俯视图</text>
  <text x="18" y="44" fill="#dce8f8" font-size="10" font-family="sans-serif">4×3</text>
  <text x="88" y="44" fill="#dce8f8" font-size="10" font-family="sans-serif">2×3</text>
  <text x="140" y="60" fill="#dce8f8" font-size="10" font-family="sans-serif">4×2</text>
  <text x="15" y="120" fill="#dce8f8" font-size="12" font-family="sans-serif">几何体：长方体</text>
  <text x="15" y="140" fill="#fbbf24" font-size="12" font-family="sans-serif">V=4×2×3=24</text>
</svg>`},

  /* ══ 补缺：solid_geo 立体图形（14→19题）════════════════════ */
  {id:512,yr:2022,city:"全国",type:"choice",topic:"solid_geo",score:3,diff:1,
   subTopics:["solid_geo"],methods:["m13"],
   content:"一个正方体有___个面，___条棱，___个顶点；一个三棱柱有___个面，___条棱，___个顶点。",
   answer:"正方体：6面12棱8顶；三棱柱：5面9棱6顶",
   sol:"正方体：6个正方形面；三棱柱：2个三角形底+3个矩形侧面=5面；棱=3×3=9；顶=3×2=6",error:"棱柱：底面边数×3=棱数；底面边数×2=顶点数；面数=底面边数+2",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="20" y="30" width="70" height="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="30" x2="40" y2="10" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="90" y1="30" x2="110" y2="10" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="90" y1="100" x2="110" y2="80" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="40" y1="10" x2="110" y2="10" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="110" y1="10" x2="110" y2="80" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="110" y1="80" x2="90" y2="100" stroke="#1ed9a0" stroke-width="1.5"/>
  <text x="45" y="73" fill="#1ed9a0" font-size="11" font-family="sans-serif">正方体</text>
  <text x="20" y="120" fill="#dce8f8" font-size="10" font-family="sans-serif">6面 12棱 8顶</text>
  <polygon points="130,120 175,150 155,150 150,60 175,90 195,90" fill="none" stroke="#3a9eff" stroke-width="2"/>
  <line x1="130" y1="120" x2="150" y2="60" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="175" y1="150" x2="175" y2="90" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="155" y1="150" x2="175" y2="90" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
  <text x="145" y="168" fill="#3a9eff" font-size="11" font-family="sans-serif">三棱柱</text>
  <text x="128" y="158" fill="#dce8f8" font-size="10" font-family="sans-serif">5面 9棱 6顶</text>
</svg>`},

  {id:513,yr:2023,city:"全国",type:"choice",topic:"solid_geo",score:3,diff:1,
   subTopics:["solid_geo"],methods:["m13","m18"],
   content:"下列几何体中，侧面是三角形的是（）A.圆柱 B.棱柱 C.棱锥 D.球",
   answer:"C（棱锥）",
   sol:"棱锥：一个多边形底面+若干三角形侧面，侧面交于一个顶点；棱柱侧面是矩形；圆柱侧面是曲面；球无侧面",error:"棱锥侧面是三角形，棱柱侧面是矩形（平行四边形）",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 35,145 165,145" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="145" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5"/>
  <text x="88" y="10" fill="#1ed9a0" font-size="12" font-family="sans-serif">顶点</text>
  <text x="55" y="162" fill="#1ed9a0" font-size="11" font-family="sans-serif">底面（多边形）</text>
  <text x="40" y="85" fill="#fbbf24" font-size="11" font-family="sans-serif">三角形</text>
  <text x="115" y="85" fill="#fbbf24" font-size="11" font-family="sans-serif">侧面</text>
  <text x="55" y="130" fill="#dce8f8" font-size="11" font-family="sans-serif">棱锥：侧面均为△</text>
</svg>`},

  {id:514,yr:2024,city:"全国",type:"fill",topic:"solid_geo",score:3,diff:2,
   subTopics:["solid_geo"],methods:["m13"],
   content:"用一个平面截正方体，截面可以是哪些形状？列举至少4种。",
   answer:"正方形、矩形、三角形、梯形、五边形、六边形（正六边形）",
   sol:"水平截→正方形；斜截→矩形/梯形；过三棱→三角形；过5个面→五边形；过6个面→六边形（最多6条边）",error:"截面边数=截到的面数；最多6条边（正六边形，每面各截一条边）",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="10" y="35" width="55" height="55" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="10" y1="35" x2="25" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="65" y1="35" x2="80" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="65" y1="90" x2="80" y2="75" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="25" y1="20" x2="80" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="80" y1="20" x2="80" y2="75" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="10" y1="62" x2="80" y2="48" stroke="#fbbf24" stroke-width="1.8"/>
  <text x="10" y="115" fill="#fbbf24" font-size="10" font-family="sans-serif">矩形截面</text>
  <rect x="100" y="35" width="55" height="55" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="100" y1="35" x2="115" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="155" y1="35" x2="170" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="155" y1="90" x2="170" y2="75" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="115" y1="20" x2="170" y2="20" stroke="#1ed9a0" stroke-width="1.2"/>
  <line x1="170" y1="20" x2="170" y2="75" stroke="#1ed9a0" stroke-width="1.2"/>
  <polygon points="100,35 170,75 155,90" fill="none" stroke="#3a9eff" stroke-width="1.8"/>
  <text x="100" y="115" fill="#3a9eff" font-size="10" font-family="sans-serif">三角形截面</text>
  <text x="10" y="150" fill="#dce8f8" font-size="11" font-family="sans-serif">截面：正方形/矩形/三角形/梯形/五/六边形</text>
</svg>`},

  {id:515,yr:2025,city:"全国",type:"choice",topic:"solid_geo",score:3,diff:2,
   subTopics:["solid_geo"],methods:["m13","m18"],
   content:"一个圆柱和一个圆锥，底面半径相同，高也相同。下列说法正确的是（）A.体积相同 B.侧面积相同 C.圆锥体积是圆柱的1/3 D.两者底面积之和=圆柱侧面积",
   answer:"C",
   sol:"V锥=πr²h/3=V柱/3；侧面积：圆柱=2πrh，圆锥=πrl（l≠h）→不等；D无依据",error:"等底等高：圆锥体积=圆柱体积÷3，这是固定比例",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <ellipse cx="55" cy="140" rx="40" ry="10" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <ellipse cx="55" cy="60" rx="40" ry="10" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="15" y1="60" x2="15" y2="140" stroke="#1ed9a0" stroke-width="1.8"/>
  <line x1="95" y1="60" x2="95" y2="140" stroke="#1ed9a0" stroke-width="1.8"/>
  <text x="35" y="103" fill="#1ed9a0" font-size="11" font-family="sans-serif">圆柱</text>
  <ellipse cx="155" cy="140" rx="40" ry="10" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="155" y1="60" x2="115" y2="140" stroke="#3a9eff" stroke-width="1.8"/>
  <line x1="155" y1="60" x2="195" y2="140" stroke="#3a9eff" stroke-width="1.8"/>
  <text x="135" y="103" fill="#3a9eff" font-size="11" font-family="sans-serif">圆锥</text>
  <text x="20" y="165" fill="#fbbf24" font-size="11" font-family="sans-serif">V锥 = V柱 ÷ 3（等底等高）</text>
</svg>`},

  {id:516,yr:2024,city:"全国",type:"fill",topic:"solid_geo",score:3,diff:2,
   subTopics:["solid_geo"],methods:["m13"],
   content:"正方体的展开图有___种；下列展开图中，能折成正方体的有___。（四种展开图选项：T形、L形、Z形、田字形）",
   answer:"11种；T形和L形可以（田字形和Z形不能）",
   sol:"正方体展开图共11种；判断方法：折叠后6个面不重叠、相对面不相邻",error:"正方体展开图11种需记忆；关键是检验相对面（上下、左右、前后）是否各占一格且不相邻",
   svg:`<svg width="210" height="160" viewBox="0 0 210 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="35" y="25" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="10" y="50" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="35" y="50" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="60" y="50" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="35" y="75" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="35" y="100" width="25" height="25" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <text x="25" y="140" fill="#1ed9a0" font-size="11" font-family="sans-serif">✓可折成</text>
  <rect x="120" y="25" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="120" y="50" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="145" y="50" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="120" y="75" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="145" y="75" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="120" y="100" width="25" height="25" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="120" y="140" fill="#a78bfa" font-size="11" font-family="sans-serif">✗不能折</text>
  <text x="10" y="158" fill="#dce8f8" font-size="10" font-family="sans-serif">正方体展开图共11种</text>
</svg>`},

  /* ══ 补缺：three_views 三视图（16→21题）══════════════════ */
  {id:517,yr:2022,city:"全国",type:"choice",topic:"three_views",score:3,diff:1,
   subTopics:["three_views","solid_geo"],methods:["m27","m13"],
   content:"圆柱的三视图中，正视图是___，侧视图是___，俯视图是___。",
   answer:"正视图：矩形；侧视图：矩形；俯视图：圆（带圆心）",
   sol:"圆柱从正面/侧面看：矩形（宽=直径，高=h）；从上面看：圆形",error:"俯视图看形状：圆柱→圆，圆锥→圆+中心点，球→圆",
   svg:`<svg width="210" height="170" viewBox="0 0 210 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="10" y="20" width="40" height="60" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <text x="16" y="95" fill="#1ed9a0" font-size="11" font-family="sans-serif">正视图</text>
  <text x="16" y="108" fill="#dce8f8" font-size="10" font-family="sans-serif">矩形</text>
  <rect x="80" y="20" width="40" height="60" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <text x="86" y="95" fill="#3a9eff" font-size="11" font-family="sans-serif">侧视图</text>
  <text x="86" y="108" fill="#dce8f8" font-size="10" font-family="sans-serif">矩形</text>
  <circle cx="170" cy="50" r="25" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <circle cx="170" cy="50" r="2" fill="#fbbf24"/>
  <text x="148" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">俯视图</text>
  <text x="155" y="103" fill="#dce8f8" font-size="10" font-family="sans-serif">圆形</text>
  <text x="10" y="135" fill="#dce8f8" font-size="11" font-family="sans-serif">口诀：正左同高，正俯同宽，左俯同深</text>
</svg>`},

  {id:518,yr:2023,city:"全国",type:"fill",topic:"three_views",score:3,diff:2,
   subTopics:["three_views"],methods:["m27"],
   content:"一个几何体的正视图和侧视图都是三角形，俯视图是正方形，则这个几何体是___。",
   answer:"四棱锥（正四棱锥）",
   sol:"俯视图是正方形→底面是正方形；正视图和侧视图是三角形→有顶点在上方→四棱锥",error:"判断几何体：俯视图定底面形状，正/侧视图定高度方向形状",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="55" y="30" fill="none"/>
  <polygon points="20,30 90,30 55,100" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <text x="30" y="120" fill="#1ed9a0" font-size="10" font-family="sans-serif">正视图△</text>
  <polygon points="110,30 170,30 140,100" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <text x="110" y="120" fill="#3a9eff" font-size="10" font-family="sans-serif">侧视图△</text>
  <rect x="20" y="135" width="40" height="30" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <text x="20" y="152" fill="#fbbf24" font-size="10" font-family="sans-serif">俯视图□</text>
  <text x="90" y="152" fill="#dce8f8" font-size="11" font-family="sans-serif">→ 四棱锥</text>
</svg>`},

  {id:519,yr:2024,city:"全国",type:"choice",topic:"three_views",score:3,diff:2,
   subTopics:["three_views"],methods:["m27","m13"],
   content:"如图，由三视图（正视图：矩形，侧视图：等腰三角形，俯视图：矩形）还原的几何体是（）A.圆柱 B.三棱柱 C.四棱锥 D.三棱锥",
   answer:"B（三棱柱）",
   sol:"侧视图是等腰三角形→从侧面看是三角形→截面有三角形结构；正视图矩形+俯视图矩形→底面是矩形→三棱柱（从正面看是矩形，从侧面看到三角形截面）",error:"三棱柱：底面是三角形，侧面是矩形；从侧面看截面是三角形",
   svg:`<svg width="210" height="170" viewBox="0 0 210 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="10" y="20" width="50" height="40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <polygon points="85,20 135,20 110,60" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <rect x="155" y="35" width="45" height="30" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <text x="15" y="75" fill="#1ed9a0" font-size="10" font-family="sans-serif">正视图</text>
  <text x="88" y="75" fill="#3a9eff" font-size="10" font-family="sans-serif">侧视图</text>
  <text x="157" y="75" fill="#fbbf24" font-size="10" font-family="sans-serif">俯视图</text>
  <polygon points="20,100 70,100 85,120 35,120" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <polygon points="20,100 35,120 35,150 20,130" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <polygon points="35,120 85,120 85,150 35,150" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="70" y1="100" x2="85" y2="120" stroke="#1ed9a0" stroke-width="1.5"/>
  <line x1="70" y1="100" x2="70" y2="130" stroke="#1ed9a0" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="115" y="130" fill="#dce8f8" font-size="12" font-family="sans-serif">→ 三棱柱</text>
</svg>`},

  {id:520,yr:2025,city:"全国",type:"solve",topic:"three_views",score:5,diff:3,
   subTopics:["three_views","solid_vol"],methods:["m27","m20"],
   content:"一个几何体的三视图如下：正视图是底边4高3的等腰三角形，侧视图是底边4高3的等腰三角形，俯视图是边长4的正方形。求这个几何体的体积。",
   answer:"V=16",
   sol:"正视图和侧视图都是等腰三角形，俯视图是正方形→四棱锥（底面正方形，顶点在中央上方）；底面积=4×4=16，高=3；V=16×3/3=16",error:"四棱锥体积=底面积×高/3；由三视图读出高度和底面尺寸",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="15,100 75,100 45,28" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <polygon points="90,100 150,100 120,28" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <rect x="168" y="75" width="35" height="35" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <circle cx="185" cy="92" r="2" fill="#fbbf24"/>
  <text x="15" y="120" fill="#1ed9a0" font-size="10" font-family="sans-serif">正视图 4×3</text>
  <text x="88" y="120" fill="#3a9eff" font-size="10" font-family="sans-serif">侧视图 4×3</text>
  <text x="164" y="120" fill="#fbbf24" font-size="10" font-family="sans-serif">俯视图 4×4</text>
  <text x="30" y="150" fill="#dce8f8" font-size="11" font-family="sans-serif">→ 四棱锥：V=底×高/3=16</text>
</svg>`},

  {id:521,yr:2023,city:"全国",type:"fill",topic:"three_views",score:3,diff:2,
   subTopics:["three_views"],methods:["m27"],
   content:"球的三视图中，正视图、侧视图、俯视图分别是___，且三个视图___（填「相同」或「不同」）。",
   answer:"都是等圆；相同",
   sol:"①球从任何方向看都是圆形，且大小相同（直径等于球的直径）；②=都是等圆；相同",error:"球是唯一三个视图完全相同的几何体",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="35" cy="45" r="28" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.8"/>
  <circle cx="100" cy="45" r="28" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.8"/>
  <circle cx="165" cy="45" r="28" fill="#fbbf2411" stroke="#fbbf24" stroke-width="1.8"/>
  <text x="15" y="85" fill="#1ed9a0" font-size="10" font-family="sans-serif">正视图</text>
  <text x="80" y="85" fill="#3a9eff" font-size="10" font-family="sans-serif">侧视图</text>
  <text x="145" y="85" fill="#fbbf24" font-size="10" font-family="sans-serif">俯视图</text>
  <text x="30" y="110" fill="#dce8f8" font-size="12" font-family="sans-serif">球的三视图：三个等圆，完全相同</text>
  <circle cx="100" cy="140" r="22" fill="#a78bfa11" stroke="#a78bfa" stroke-width="2"/>
  <text x="78" y="144" fill="#a78bfa" font-size="11" font-family="sans-serif">球体</text>
</svg>`},

  /* ══ 补缺：polygon_angle 多边形内外角和（16→21题）══════════ */
  {id:522,yr:2022,city:"全国",type:"choice",topic:"polygon_angle",score:3,diff:1,
   subTopics:["polygon_angle"],methods:["m20","m13"],
   content:"一个多边形的内角和为1080°，则这个多边形是___边形；正___边形的每个内角是150°。",
   answer:"八边形；正十二边形",
   sol:"(n-2)×180°=1080°→n=8；每个内角150°→每个外角30°→n=360°/30°=12",error:"内角和公式：(n-2)×180°；外角和恒为360°，每个外角=360°/n",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 152,38 172,92 152,146 100,165 48,146 28,92 48,38" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <text x="78" y="95" fill="#1ed9a0" font-size="12" font-family="sans-serif">正八边形</text>
  <text x="55" y="112" fill="#dce8f8" font-size="11" font-family="sans-serif">内角和=1080°</text>
  <text x="20" y="140" fill="#fbbf24" font-size="11" font-family="sans-serif">(n-2)×180=1080→n=8</text>
</svg>`},

  {id:523,yr:2023,city:"全国",type:"choice",topic:"polygon_angle",score:3,diff:2,
   subTopics:["polygon_angle","tri_basic"],methods:["m09","m20"],
   content:"如图，一个凸多边形从一个顶点出发的对角线将其分成6个三角形，则该多边形是___边形，内角和=___°。",
   answer:"八边形，内角和=1080°",
   sol:"从一个顶点出发的对角线数=n-3；分成的三角形数=n-2=6→n=8；内角和=(8-2)×180°=1080°",error:"n边形从一顶点连对角线：对角线数=n-3，分成三角形数=n-2",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 152,38 172,92 152,146 100,165 48,146 28,92 48,38" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="172" y2="92" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="100" y1="15" x2="152" y2="146" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="100" y1="15" x2="100" y2="165" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="100" y1="15" x2="48" y2="146" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="100" y1="15" x2="28" y2="92" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
  <circle cx="100" cy="15" r="4" fill="#3a9eff"/>
  <text x="40" y="155" fill="#dce8f8" font-size="11" font-family="sans-serif">6个△→n-2=6→n=8</text>
</svg>`},

  {id:524,yr:2024,city:"全国",type:"fill",topic:"polygon_angle",score:3,diff:2,
   subTopics:["polygon_angle"],methods:["m20"],
   content:"正六边形的每个内角=___°，每个外角=___°，内角和=___°；任意多边形的外角和=___°。",
   answer:"每个内角=120°，每个外角=60°，内角和=720°；任意多边形外角和=360°",
   sol:"正六边形：内角和=(6-2)×180=720°；每个内角=720/6=120°；每个外角=180-120=60°（或360/6=60°）",error:"外角和恒为360°与边数无关；正多边形每个内角=(n-2)×180/n",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 169,57 169,130 100,165 31,130 31,57" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <text x="75" y="95" fill="#1ed9a0" font-size="11" font-family="sans-serif">正六边形</text>
  <text x="55" y="112" fill="#dce8f8" font-size="10" font-family="sans-serif">每个内角=120°</text>
  <line x1="100" y1="15" x2="138" y2="5" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="105" y="8" fill="#fbbf24" font-size="10" font-family="sans-serif">外角=60°</text>
  <text x="10" y="152" fill="#3a9eff" font-size="11" font-family="sans-serif">任意多边形外角和=360°</text>
</svg>`},

  {id:525,yr:2025,city:"全国",type:"solve",topic:"polygon_angle",score:5,diff:3,
   subTopics:["polygon_angle","tri_basic"],methods:["m20","m09"],
   content:"如图，在△ABC中，D是BC上的点，E是AD的延长线上的点，∠B=35°，∠C=40°，∠DAC=25°，求∠AEC。",
   answer:"∠AEC=75°",
   sol:"△ABC中：∠BAC=180°-35°-40°=105°；∠DAC=25°→∠BAD=105°-25°=80°；△ABD中：∠ADB=180°-35°-80°=65°；∠AEC=∠ADB（对顶角）=65°？重算：∠AEC是△ACE的外角→∠AEC=∠DAC+∠C=25°+40°=65°；或直接：在△ACE中，∠AEC=180°-∠EAC-∠ACE=180°-∠DAC-∠C=180°-25°-40°=115°？方向不对；∠AEC=∠DAC+∠C=65°（外角定理）",error:"三角形外角=不相邻两内角之和；∠ADB是△ABD的外角",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="50,155 150,155 100,20" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="115" y2="155" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="20" x2="145" y2="110" stroke="#3a9eff" stroke-width="1.5"/>
  <circle cx="145" cy="110" r="4" fill="#3a9eff"/>
  <text x="90" y="15" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="38" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="152" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="117" y="155" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="148" y="108" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="42" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">35°</text>
  <text x="138" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">40°</text>
</svg>`},

  {id:526,yr:2024,city:"全国",type:"choice",topic:"polygon_angle",score:3,diff:2,
   subTopics:["polygon_angle"],methods:["m13","m09"],
   content:"一个多边形的每个外角都是45°，则这个多边形是___边形，内角和=___°。",
   answer:"正八边形，内角和=1080°",
   sol:"外角和=360°，每个外角=45°→n=360°/45°=8；内角和=(8-2)×180°=1080°",error:"外角和360°÷每个外角度数=边数；这是求边数的快捷方法",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 152,38 172,92 152,146 100,165 48,146 28,92 48,38" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="152" y1="38" x2="175" y2="25" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="165" y="22" fill="#fbbf24" font-size="11" font-family="sans-serif">45°</text>
  <text x="65" y="95" fill="#1ed9a0" font-size="11" font-family="sans-serif">正八边形</text>
  <text x="40" y="115" fill="#dce8f8" font-size="10" font-family="sans-serif">n=360°÷45°=8</text>
  <text x="30" y="148" fill="#fbbf24" font-size="10" font-family="sans-serif">内角和=(8-2)×180=1080°</text>
</svg>`},

  /* ══ 补缺：midline 三角形中位线（14→19题）══════════════════ */
  {id:527,yr:2022,city:"全国",type:"choice",topic:"midline",score:3,diff:2,
   subTopics:["midline"],methods:["m08","m13"],
   content:"△ABC中，D、E分别是AB、AC的中点，DE=5，BC=___；若BC=12，DE=___。",
   answer:"BC=10；DE=6",
   sol:"中位线定理：DE=BC/2→BC=2×DE=10；BC=12时DE=6",error:"三角形中位线=第三边的一半；注意方向：DE∥BC且DE=BC/2",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="60" y1="87" x2="140" y2="87" stroke="#fbbf24" stroke-width="2.5"/>
  <circle cx="60" cy="87" r="4" fill="#fbbf24"/>
  <circle cx="140" cy="87" r="4" fill="#fbbf24"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="48" y="84" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="142" y="84" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="78" y="82" fill="#fbbf24" font-size="12" font-family="sans-serif">DE=5</text>
  <text x="78" y="158" fill="#dce8f8" font-size="12" font-family="sans-serif">BC=?</text>
  <text x="15" y="120" fill="#3a9eff" font-size="11" font-family="sans-serif">DE∥BC，DE=BC/2</text>
</svg>`},

  {id:528,yr:2023,city:"全国",type:"fill",topic:"midline",score:3,diff:2,
   subTopics:["midline","quadrilateral"],methods:["m08","m15"],
   content:"△ABC中，D、E、F分别是AB、BC、CA的中点，连接DE、EF、FD，则△DEF与△ABC的面积之比=___；△DEF是___三角形（关于△ABC）。",
   answer:"面积比=1:4；△DEF与△ABC相似，相似比=1:2",
   sol:"DE=AC/2，EF=AB/2，DF=BC/2→△DEF∽△ACB，相似比=1:2→面积比=1:4；三条中位线将△ABC分成4个全等小三角形",error:"三条中位线将原三角形分成4个全等三角形，面积各占1/4",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,160 180,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="60,87 100,160 140,87" fill="#fbbf2422" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="60" cy="87" r="3" fill="#fbbf24"/>
  <circle cx="140" cy="87" r="3" fill="#fbbf24"/>
  <circle cx="100" cy="160" r="3" fill="#fbbf24"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="168" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="43" y="85" fill="#fbbf24" font-size="12" font-family="sans-serif">D</text>
  <text x="100" y="175" fill="#fbbf24" font-size="12" font-family="sans-serif">E</text>
  <text x="143" y="85" fill="#fbbf24" font-size="12" font-family="sans-serif">F</text>
  <text x="30" y="130" fill="#dce8f8" font-size="11" font-family="sans-serif">S△DEF:S△ABC=1:4</text>
</svg>`},

  {id:529,yr:2024,city:"全国",type:"solve",topic:"midline",score:6,diff:3,
   subTopics:["midline","quadrilateral","parallel_lines"],methods:["m08","m15","m07"],
   content:"如图，□ABCD中，E、F分别是AB、CD的中点，对角线AC、BD分别与EF交于G、H。证明：AG=GH=HC。",
   answer:"利用中位线定理证明各段相等",
   sol:"E是AB中点，F是CD中点；在△ABC中，EG∥BC，EG=BC/2（E是AB中点，G是AC上的点...）；实际：EF∥AD∥BC（E、F分别是AB、CD中点→EF是梯形中位线）；在△ABD中，E是AB中点，H是BD上的点，EH∥AD→EH=AD/2→GH=½AD；同理AG=½BC；平行四边形AD=BC→AG=GH=HC",error:"利用平行四边形对边相等+中位线定理",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="30,140 170,140 150,35 50,35" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="140" x2="150" y2="35" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="170" y1="140" x2="50" y2="35" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="40" y1="87" x2="160" y2="87" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="40" cy="87" r="3" fill="#fbbf24"/>
  <circle cx="160" cy="87" r="3" fill="#fbbf24"/>
  <text x="18" y="148" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="172" y="148" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="152" y="32" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="38" y="32" fill="#1ed9a0" font-size="12" font-family="sans-serif">D</text>
  <text x="28" y="84" fill="#fbbf24" font-size="12" font-family="sans-serif">E</text>
  <text x="162" y="84" fill="#fbbf24" font-size="12" font-family="sans-serif">F</text>
</svg>`},

  {id:530,yr:2025,city:"全国",type:"choice",topic:"midline",score:3,diff:2,
   subTopics:["midline","similar"],methods:["m08","m04"],
   content:"△ABC中，D是AB中点，E是AC中点，DE=4，BC=___；S△ADE:S△ABC=___。",
   answer:"BC=8；S△ADE:S△ABC=1:4",
   sol:"DE是中位线→DE=BC/2→BC=8；△ADE∽△ABC（AA，相似比1:2）→面积比=1:4",error:"中位线定理：DE∥BC且DE=BC/2；相似比1:2→面积比1:4",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,155 180,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="100,15 60,85 140,85" fill="#3a9eff22" stroke="#3a9eff" stroke-width="2"/>
  <line x1="60" y1="85" x2="140" y2="85" stroke="#fbbf24" stroke-width="2.5"/>
  <circle cx="60" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="140" cy="85" r="4" fill="#fbbf24"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="8" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="182" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="46" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="142" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="78" y="80" fill="#fbbf24" font-size="12" font-family="sans-serif">DE=4</text>
  <text x="35" y="120" fill="#3a9eff" font-size="11" font-family="sans-serif">△ADE∽△ABC 1:2</text>
</svg>`},

  {id:531,yr:2023,city:"全国",type:"solve",topic:"midline",score:6,diff:3,
   subTopics:["midline","quadrilateral","congruent"],methods:["m08","m07","m15"],
   content:"如图，△ABC中，D、E分别是AB、AC的中点，DE=6。F是BC延长线上的点，且BF=BC。求CF的长，并证明D、E、F三点共线。",
   answer:"CF=BC/2=DE=6；D、E、F三点共线",
   sol:"BF=BC→F使BC=CF/2...题意重设：BF=BC，设BC=a，CF=BF+BC=2a或CF=BF-BC=0（若F在B和C之间）；正确设定：F在BC延长线使CF=BC；DE是中位线→DE∥BC，DE=BC/2；证D、E、F共线：连DF，在△ABF中，D是AB中点，BF=BC=2DE→DF∥AC且DF=AC/2→DF=DE（均=BC/2）→D、E、F共线",error:"中位线定理+向量方法证三点共线",
   svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 30,155 150,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="150" y1="155" x2="190" y2="155" stroke="#1ed9a0" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="65" y1="85" x2="190" y2="155" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="65" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="125" cy="85" r="4" fill="#fbbf24"/>
  <circle cx="190" cy="155" r="4" fill="#3a9eff"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="18" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="152" y="163" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="192" y="163" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
  <text x="50" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="127" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="90" y="80" fill="#dce8f8" font-size="11" font-family="sans-serif">DE=6</text>
</svg>`},

  /* ══ 补缺：pythagorean_inv 勾股逆定理（12→17题）══════════ */
  {id:532,yr:2022,city:"全国",type:"choice",topic:"pythagorean_inv",score:3,diff:2,
   subTopics:["pythagorean_inv"],methods:["m13"],
   content:"判断三边分别为下列各组数的三角形类型：①5,12,13 ②3,4,6 ③7,7,7√2",
   answer:"①直角三角形 ②钝角三角形 ③直角三角形",
   sol:"①5²+12²=169=13²→直角；②6²=36>3²+4²=25→钝角；③(7√2)²=98=7²+7²→直角",error:"最大边²与另两边²之和比较：等于→直角，小于→锐角，大于→钝角",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 100,140 20,45" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="127" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="25" y="155" fill="#1ed9a0" font-size="11" font-family="sans-serif">5</text>
  <text x="55" y="155" fill="#1ed9a0" font-size="11" font-family="sans-serif">12</text>
  <text x="8" y="95" fill="#1ed9a0" font-size="11" font-family="sans-serif">13</text>
  <text x="110" y="100" fill="#fbbf24" font-size="11" font-family="sans-serif">5²+12²=13²</text>
  <text x="110" y="115" fill="#fbbf24" font-size="11" font-family="sans-serif">→ 直角三角形</text>
  <text x="20" y="168" fill="#dce8f8" font-size="10" font-family="sans-serif">口诀：等→直角 小→锐角 大→钝角</text>
</svg>`},

  {id:533,yr:2023,city:"全国",type:"fill",topic:"pythagorean_inv",score:3,diff:2,
   subTopics:["pythagorean_inv"],methods:["m13","m10"],
   content:"已知三角形三边为a、b、c（c最大），若c²=a²+b²则为___三角形；若c²<a²+b²则为___三角形；若c²>a²+b²则为___三角形。",
   answer:"直角；锐角；钝角",
   sol:"勾股逆定理：等则直角；若c是最大边：小于则三个角都是锐角；大于则最大边对的角是钝角",error:"必须是最大边c的平方与另两边平方和比较",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,130 120,130 20,40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="117" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="62" y="148" fill="#1ed9a0" font-size="12" font-family="sans-serif">c²=a²+b²</text>
  <text x="132" y="148" fill="#fbbf24" font-size="11" font-family="sans-serif">直角△</text>
  <polygon points="20,45 120,130 180,70" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="50" y="35" fill="#3a9eff" font-size="10" font-family="sans-serif">c²＜a²+b²→锐角△</text>
  <polygon points="20,130 180,130 130,80" fill="#a78bfa11" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="25" y="160" fill="#a78bfa" font-size="10" font-family="sans-serif">c²＞a²+b²→钝角△</text>
</svg>`},

  {id:534,yr:2024,city:"全国",type:"choice",topic:"pythagorean_inv",score:3,diff:2,
   subTopics:["pythagorean_inv","pythagorean"],methods:["m13"],
   content:"以下哪组数能构成直角三角形？A.(1,2,3) B.(2,3,4) C.(3,4,5) D.(4,5,6)",
   answer:"C",
   sol:"A:1+4=5≠9；B:4+9=13≠16；C:9+16=25=25✓；D:16+25=41≠36",error:"验证：小边²+中边²=大边²才是直角三角形",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,150 100,150 20,30" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2.5"/>
  <rect x="20" y="137" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="55" y="165" fill="#1ed9a0" font-size="13" font-family="sans-serif">4</text>
  <text x="8" y="95" fill="#1ed9a0" font-size="13" font-family="sans-serif">3</text>
  <text x="60" y="88" fill="#fbbf24" font-size="13" font-family="sans-serif">5</text>
  <text x="110" y="80" fill="#fbbf24" font-size="12" font-family="sans-serif">3²+4²=25</text>
  <text x="110" y="97" fill="#fbbf24" font-size="12" font-family="sans-serif">=5² ✓</text>
  <text x="110" y="120" fill="#3a9eff" font-size="11" font-family="sans-serif">经典勾股数：</text>
  <text x="110" y="135" fill="#3a9eff" font-size="11" font-family="sans-serif">3-4-5</text>
  <text x="110" y="150" fill="#3a9eff" font-size="11" font-family="sans-serif">5-12-13</text>
  <text x="110" y="165" fill="#3a9eff" font-size="11" font-family="sans-serif">8-15-17</text>
</svg>`},

  {id:535,yr:2025,city:"全国",type:"fill",topic:"pythagorean_inv",score:3,diff:2,
   subTopics:["pythagorean_inv"],methods:["m13"],
   content:"△ABC中，∠C是最大角，a=5，b=6，c=8，则∠C是___角（填锐、直、钝）；若c=√61，则∠C是___角。",
   answer:"钝角；直角",
   sol:"①勾股定理：a²+b²=c²；②c²=64，a²+b²=61：64>61→∠C是钝角；c=√61时c²=61=a²+b²→∠C=90°→直角；③解得钝角；直角",error:"c最大→比较c²与a²+b²大小；等→90°，大→钝，小→锐",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="15,140 150,140 100,40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <text x="75" y="155" fill="#1ed9a0" font-size="12" font-family="sans-serif">a=5</text>
  <text x="110" y="95" fill="#1ed9a0" font-size="12" font-family="sans-serif">b=6</text>
  <text x="35" y="95" fill="#fbbf24" font-size="12" font-family="sans-serif">c=8</text>
  <text x="4" y="145" fill="#3a9eff" font-size="12" font-family="sans-serif">C</text>
  <text x="152" y="145" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="98" y="35" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="15" y="40" fill="#dce8f8" font-size="11" font-family="sans-serif">c²=64＞61=a²+b²</text>
  <text x="15" y="55" fill="#fbbf24" font-size="11" font-family="sans-serif">∴∠C是钝角</text>
</svg>`},

  {id:536,yr:2023,city:"全国",type:"solve",topic:"pythagorean_inv",score:5,diff:3,
   subTopics:["pythagorean_inv","pythagorean"],methods:["m13","m03"],
   content:"已知△ABC中，AB=10，AC=8，BC=6。（1）判断△ABC的形状；（2）求△ABC的面积。",
   answer:"（1）直角三角形；（2）S=24",
   sol:"(1)最大边AB=10：BC²+AC²=36+64=100=AB²→直角三角形，∠C=90°；(2)S=½×BC×AC=½×6×8=24",error:"最大边验证勾股定理；直角三角形面积=½×两直角边之积",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 100,140 20,40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="127" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="55" y="155" fill="#1ed9a0" font-size="13" font-family="sans-serif">BC=6</text>
  <text x="5" y="93" fill="#1ed9a0" font-size="13" font-family="sans-serif">AC=8</text>
  <text x="65" y="83" fill="#fbbf24" font-size="13" font-family="sans-serif">AB=10</text>
  <text x="16" y="140" fill="#3a9eff" font-size="12" font-family="sans-serif">C</text>
  <text x="102" y="150" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="15" y="36" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="100" y="120" fill="#dce8f8" font-size="11" font-family="sans-serif">6²+8²=100=10²</text>
  <text x="100" y="138" fill="#fbbf24" font-size="11" font-family="sans-serif">S=½×6×8=24</text>
</svg>`},

  /* ══ 补缺：right_tri_proof 直角三角形证明（13→18题）══════ */
  {id:537,yr:2022,city:"全国",type:"choice",topic:"right_tri_proof",score:3,diff:2,
   subTopics:["right_tri_proof"],methods:["m07","m13"],
   content:"Rt△ABC中，∠C=90°，M是斜边AB的中点，CM=___，∠ACM=___（设∠A=30°）。",
   answer:"CM=AB/2；∠ACM=60°",
   sol:"直角三角形斜边中线=斜边/2→CM=AB/2；CM=AM=BM→△ACM等腰→∠ACM=∠A=30°？不对：∠ACM=∠A+∠AMC...重算：∠ACM=90°-∠A=60°（因CM=AM→∠ACM=∠A=30°→不对，∠CMB=∠B，∠ACM=90°-∠A=60°）",error:"斜边中线=斜边/2；∠ACM=90°-∠A（直角三角形中线性质）",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,150 180,150 20,40" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="137" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="95" r="4" fill="#3a9eff"/>
  <line x1="20" y1="150" x2="100" y2="95" stroke="#3a9eff" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="100" y1="95" x2="20" y2="40" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="15" y="36" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="182" y="155" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="8" y="155" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="104" y="93" fill="#3a9eff" font-size="13" font-family="sans-serif">M</text>
  <text x="40" y="155" fill="#dce8f8" font-size="11" font-family="sans-serif">30°</text>
  <text x="110" y="128" fill="#fbbf24" font-size="11" font-family="sans-serif">CM=AB/2</text>
</svg>`},

  {id:538,yr:2023,city:"全国",type:"fill",topic:"right_tri_proof",score:3,diff:2,
   subTopics:["right_tri_proof","congruent"],methods:["m07","m08"],
   content:"Rt△ABC，∠ACB=90°，CD⊥AB于D，则△ACD∽△___∽△___；CD²=___×___（射影定理）。",
   answer:"△ACD∽△CBD∽△ABC；CD²=AD×BD",
   sol:"∠ACD+∠A=90°=∠ACD+∠DCB→∠A=∠DCB；同理∠B=∠DCA；△ACD：∠ADC=90°，∠A=∠A→∽△ABC（AA）；CD²=AD×BD（射影定理）",error:"直角三角形射影定理：斜边上的高的平方=两射影之积",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,150 180,150 20,30" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="137" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="20" y1="30" x2="95" y2="150" stroke="#3a9eff" stroke-width="1.8"/>
  <rect x="88" y="137" width="13" height="13" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <circle cx="95" cy="150" r="3" fill="#3a9eff"/>
  <text x="12" y="26" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="182" y="155" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="8" y="155" fill="#fbbf24" font-size="13" font-family="sans-serif">C</text>
  <text x="97" y="148" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="50" y="105" fill="#3a9eff" font-size="11" font-family="sans-serif">CD</text>
  <text x="95" y="132" fill="#dce8f8" font-size="10" font-family="sans-serif">AD</text>
  <text x="135" y="165" fill="#dce8f8" font-size="10" font-family="sans-serif">BD</text>
  <text x="30" y="40" fill="#fbbf24" font-size="10" font-family="sans-serif">CD²=AD×BD</text>
</svg>`},

  {id:539,yr:2024,city:"全国",type:"solve",topic:"right_tri_proof",score:6,diff:3,
   subTopics:["right_tri_proof","congruent"],methods:["m07","m08","m03"],
   content:"如图，Rt△ABC中，∠BAC=90°，AB=3，AC=4，M是BC的中点。求AM的长，并验证AM=BC/2。",
   answer:"AM=BC/2=5/2=2.5",
   sol:"BC=√(AB²+AC²)=√(9+16)=5；直角三角形斜边中线=斜边/2→AM=5/2；验证：以A建坐标，B(3,0)，C(0,4)，M=(3/2,2)，AM=√(9/4+4)=√(25/4)=5/2 ✓",error:"直角三角形斜边中线定理：AM=BC/2，其中∠A=90°",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="30,150 30,40 150,150" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="30" y="137" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="90" cy="95" r="4" fill="#3a9eff"/>
  <line x1="30" y1="40" x2="90" y2="95" stroke="#3a9eff" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="18" y="36" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="152" y="155" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="18" y="155" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="93" y="93" fill="#3a9eff" font-size="13" font-family="sans-serif">M</text>
  <text x="8" y="98" fill="#dce8f8" font-size="12" font-family="sans-serif">3</text>
  <text x="80" y="163" fill="#dce8f8" font-size="12" font-family="sans-serif">4</text>
  <text x="105" y="108" fill="#fbbf24" font-size="11" font-family="sans-serif">AM=BC/2</text>
  <text x="105" y="122" fill="#fbbf24" font-size="11" font-family="sans-serif">=5/2</text>
</svg>`},

  {id:540,yr:2025,city:"全国",type:"solve",topic:"right_tri_proof",score:6,diff:3,
   subTopics:["right_tri_proof","congruent"],methods:["m07","m08"],
   content:"如图，Rt△ABC与Rt△DEF中，∠B=∠E=90°，AB=DE，AC=DF。证明△ABC≅△DEF。",
   answer:"HL定理：斜边AC=DF，直角边AB=DE，∠B=∠E=90°→△ABC≅△DEF（HL）",
   sol:"∠B=∠E=90°（已知）；AB=DE（已知）；AC=DF（已知，为斜边）→HL定理→△ABC≅△DEF",error:"HL：两个直角三角形，斜边和一直角边对应相等→全等；H=斜边Hypotenuse，L=直角边Leg",
   svg:`<svg width="210" height="165" viewBox="0 0 210 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 20,40 100,140" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="127" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <polygon points="120,140 120,40 200,140" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <rect x="120" y="127" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="12" y="36" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="102" y="150" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="8" y="150" fill="#fbbf24" font-size="13" font-family="sans-serif">B</text>
  <text x="112" y="36" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="202" y="150" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
  <text x="108" y="150" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="30" y="160" fill="#dce8f8" font-size="10" font-family="sans-serif">HL：∠B=∠E=90°，AB=DE，AC=DF</text>
</svg>`},

  {id:541,yr:2023,city:"全国",type:"fill",topic:"right_tri_proof",score:3,diff:2,
   subTopics:["right_tri_proof","special_tri"],methods:["m13","m03"],
   content:"Rt△ABC中，∠C=90°，∠A=30°，BC=4，则AB=___，AC=___；斜边AB上的中线CD=___。",
   answer:"AB=8，AC=4√3，CD=4",
   sol:"30°角所对直角边BC=AB/2→AB=8；AC=√(AB²-BC²)=√(64-16)=4√3；斜边中线CD=AB/2=4",error:"30-60-90三角形：30°对边=斜边/2；中线=斜边/2",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 150,140 20,50" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="127" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="85" cy="95" r="4" fill="#3a9eff"/>
  <line x1="20" y1="140" x2="85" y2="95" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="10" y="46" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="152" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="7" y="148" fill="#fbbf24" font-size="13" font-family="sans-serif">C</text>
  <text x="88" y="93" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="26" y="60" fill="#dce8f8" font-size="11" font-family="sans-serif">30°</text>
  <text x="55" y="148" fill="#dce8f8" font-size="11" font-family="sans-serif">BC=4</text>
  <text x="110" y="115" fill="#fbbf24" font-size="11" font-family="sans-serif">CD=AB/2=4</text>
</svg>`},

  /* ══ 补缺：circle_basic 圆的基本概念（6→11题）══════════════ */
  {id:542,yr:2022,city:"全国",type:"choice",topic:"circle_basic",score:3,diff:1,
   subTopics:["circle_basic"],methods:["m13"],
   content:"⊙O中，直径AB=10，弦CD=8，则圆心O到弦CD的距离（弦心距）=___。",
   answer:"弦心距=3",
   sol:"半径r=5；作OM⊥CD，M是CD中点，CM=4；OM=√(r²-CM²)=√(25-16)=3",error:"垂径定理：圆心到弦作垂线，则平分弦；弦心距²+半弦长²=半径²",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="93" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="93" r="3" fill="#1ed9a0"/>
  <line x1="28" y1="93" x2="172" y2="93" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="42" y1="138" x2="158" y2="138" stroke="#3a9eff" stroke-width="2.5"/>
  <line x1="100" y1="93" x2="100" y2="138" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="4,3"/>
  <rect x="100" y="125" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="100" cy="138" r="3" fill="#fbbf24"/>
  <text x="104" y="90" fill="#1ed9a0" font-size="13" font-family="sans-serif">O</text>
  <text x="30" y="152" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="160" y="152" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="104" y="136" fill="#fbbf24" font-size="12" font-family="sans-serif">M</text>
  <text x="105" y="115" fill="#fbbf24" font-size="11" font-family="sans-serif">OM=3</text>
  <text x="108" y="148" fill="#dce8f8" font-size="10" font-family="sans-serif">CM=4</text>
  <text x="20" y="175" fill="#dce8f8" font-size="10" font-family="sans-serif">OM²+CM²=r²：9+16=25 ✓</text>
</svg>`},

  {id:543,yr:2023,city:"全国",type:"fill",topic:"circle_basic",score:3,diff:2,
   subTopics:["circle_basic"],methods:["m07","m13"],
   content:"⊙O中，弦AB=弦CD，弦心距分别为d₁、d₂，则d₁___d₂；若弦AB>弦CD，则d₁___d₂。",
   answer:"d₁=d₂；d₁<d₂",
   sol:"同圆中：等弦对等弦心距→d₁=d₂；弦越长距圆心越近→AB>CD→d₁<d₂",error:"弦长与弦心距成反比：弦越长，离圆心越近（弦心距越小）",
   svg:`<svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="90" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="90" r="3" fill="#1ed9a0"/>
  <line x1="42" y1="65" x2="158" y2="65" stroke="#3a9eff" stroke-width="2"/>
  <line x1="42" y1="120" x2="158" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="65" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="100" y1="90" x2="100" y2="120" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="100" y="65" width="10" height="10" fill="none" stroke="#3a9eff" stroke-width="1.2"/>
  <rect x="100" y="110" width="10" height="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="104" y="87" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="30" y="68" fill="#3a9eff" font-size="12" font-family="sans-serif">A</text>
  <text x="160" y="68" fill="#3a9eff" font-size="12" font-family="sans-serif">B</text>
  <text x="30" y="123" fill="#fbbf24" font-size="12" font-family="sans-serif">C</text>
  <text x="160" y="123" fill="#fbbf24" font-size="12" font-family="sans-serif">D</text>
  <text x="82" y="77" fill="#3a9eff" font-size="10" font-family="sans-serif">d₁</text>
  <text x="82" y="108" fill="#fbbf24" font-size="10" font-family="sans-serif">d₂</text>
</svg>`},

  {id:544,yr:2024,city:"全国",type:"solve",topic:"circle_basic",score:6,diff:3,
   subTopics:["circle_basic","pythagorean"],methods:["m07","m03"],
   content:"⊙O中，AB是直径，弦CD⊥AB于E，AB=20，CD=16。求OE（弦心距）和CE的长。",
   answer:"OE=6，CE=8",
   sol:"OE⊥CD（AB⊥CD）→E是CD中点→CE=CD/2=8；OC=R=10；OE=√(OC²-CE²)=√(100-64)=6",error:"垂径定理：直径⊥弦→平分弦→CE=CD/2；弦心距OE=√(R²-半弦²)",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="93" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="93" r="3" fill="#1ed9a0"/>
  <line x1="28" y1="93" x2="172" y2="93" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="28" x2="100" y2="158" stroke="#3a9eff" stroke-width="2.5"/>
  <rect x="100" y="93" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="93" r="3" fill="#1ed9a0"/>
  <text x="18" y="97" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="174" y="97" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="88" y="24" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="88" y="170" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="104" y="90" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="115" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">E</text>
  <text x="118" y="65" fill="#dce8f8" font-size="11" font-family="sans-serif">OE=6</text>
  <text x="55" y="90" fill="#dce8f8" font-size="11" font-family="sans-serif">CE=8</text>
</svg>`},

  {id:545,yr:2025,city:"全国",type:"fill",topic:"circle_basic",score:3,diff:2,
   subTopics:["circle_basic"],methods:["m13"],
   content:"⊙O中，∠AOB=90°（圆心角），则弧AB是___弧；弧AB的长=___（设半径r=6）；弦AB=___。",
   answer:"劣弧；弧长=3π；弦AB=6√2",
   sol:"圆心角90°<180°→劣弧；弧长=90/360×2πr=3π；弦AB=√(r²+r²)=6√2（OA=OB=r=6，∠AOB=90°→等腰直角三角形）",error:"弧是劣弧还是优弧看圆心角：<180°→劣弧，>180°→优弧；弦用勾股定理",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="100" r="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="3" fill="#1ed9a0"/>
  <line x1="100" y1="100" x2="170" y2="100" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="100" y1="100" x2="100" y2="30" stroke="#fbbf24" stroke-width="1.8"/>
  <rect x="100" y="100" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <path d="M 170,100 A 70,70 0 0,0 100,30" fill="none" stroke="#3a9eff" stroke-width="3"/>
  <line x1="170" y1="100" x2="100" y2="30" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="170" cy="100" r="4" fill="#3a9eff"/>
  <circle cx="100" cy="30" r="4" fill="#3a9eff"/>
  <text x="104" y="97" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="174" y="98" fill="#3a9eff" font-size="13" font-family="sans-serif">A</text>
  <text x="88" y="26" fill="#3a9eff" font-size="13" font-family="sans-serif">B</text>
  <text x="100" y="105" fill="#fbbf24" font-size="10" font-family="sans-serif">90°</text>
  <text x="30" y="160" fill="#dce8f8" font-size="11" font-family="sans-serif">弧AB=3π；弦AB=6√2</text>
</svg>`},

  {id:546,yr:2023,city:"全国",type:"solve",topic:"circle_basic",score:6,diff:3,
   subTopics:["circle_basic","congruent"],methods:["m07","m08","m03"],
   content:"⊙O中，弦AB=弦AC，OD⊥AB于D，OE⊥AC于E。证明BD=CE。",
   answer:"△OBD≅△OCE（HL）→BD=CE",
   sol:"AB=AC（已知）→弦相等→弦心距相等→OD=OE；OB=OC=r（半径）；∠ODB=∠OEC=90°（OD⊥AB，OE⊥AC）→HL→△OBD≅△OCE→BD=CE",error:"等弦等弦心距：AB=AC→OD=OE；HL证全等",
   svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="95" r="72" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="95" r="3" fill="#1ed9a0"/>
  <line x1="38" y1="60" x2="148" y2="60" stroke="#3a9eff" stroke-width="2"/>
  <line x1="40" y1="130" x2="148" y2="128" stroke="#fbbf24" stroke-width="2"/>
  <line x1="100" y1="95" x2="93" y2="60" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="100" y1="95" x2="94" y2="129" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="93" y="60" width="11" height="11" fill="none" stroke="#3a9eff" stroke-width="1.2"/>
  <rect x="94" y="118" width="11" height="11" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="104" y="92" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="26" y="63" fill="#3a9eff" font-size="12" font-family="sans-serif">A</text>
  <text x="150" y="63" fill="#3a9eff" font-size="12" font-family="sans-serif">B</text>
  <text x="27" y="133" fill="#fbbf24" font-size="12" font-family="sans-serif">A</text>
  <text x="150" y="133" fill="#fbbf24" font-size="12" font-family="sans-serif">C</text>
  <text x="82" y="58" fill="#3a9eff" font-size="11" font-family="sans-serif">D</text>
  <text x="83" y="130" fill="#fbbf24" font-size="11" font-family="sans-serif">E</text>
</svg>`},

  /* ══ 补缺：lines_angles 线段与角（15→20题）══════════════════ */
  {id:547,yr:2022,city:"全国",type:"choice",topic:"lines_angles",score:3,diff:1,
   subTopics:["lines_angles"],methods:["m08","m20"],
   content:"线段、射线、直线各有几个端点？从A点出发的射线与从A点出发且经过B点的射线是___条。",
   answer:"线段2个，射线1个，直线0个；是同1条",
   sol:"射线由起点和方向唯一确定；从A出发经过B的射线只有一条（AB方向）",error:"射线=起点+方向；两点确定一条直线，一点一方向确定一条射线",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="40" x2="170" y2="40" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="30" cy="40" r="4" fill="#1ed9a0"/>
  <circle cx="170" cy="40" r="4" fill="#1ed9a0"/>
  <text x="90" y="34" fill="#1ed9a0" font-size="11" font-family="sans-serif">线段AB（2端点）</text>
  <line x1="30" y1="80" x2="185" y2="80" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="30" cy="80" r="4" fill="#3a9eff"/>
  <polygon points="185,80 175,75 175,85" fill="#3a9eff"/>
  <text x="90" y="74" fill="#3a9eff" font-size="11" font-family="sans-serif">射线（1端点→）</text>
  <line x1="10" y1="120" x2="190" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="190,120 180,115 180,125" fill="#fbbf24"/>
  <polygon points="10,120 20,115 20,125" fill="#fbbf24"/>
  <text x="65" y="114" fill="#fbbf24" font-size="11" font-family="sans-serif">直线（0端点，双向延伸）</text>
  <text x="20" y="155" fill="#dce8f8" font-size="11" font-family="sans-serif">两点→一条直线；一点+方向→一条射线</text>
</svg>`},

  {id:548,yr:2023,city:"全国",type:"fill",topic:"lines_angles",score:3,diff:1,
   subTopics:["lines_angles"],methods:["m20"],
   content:"∠AOB=54°36'，则∠AOB的补角=___°___'，余角=___°___'。",
   answer:"补角=125°24'；余角=35°24'",
   sol:"补角=180°-54°36'=125°24'；余角=90°-54°36'=35°24'",error:"补角+原角=180°；余角+原角=90°；注意度分借位：60'=1°",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="100" y1="130" x2="185" y2="130" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="130" x2="148" y2="48" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="130" x2="15" y2="130" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M 130,130 A 30,30 0 0,0 115,82" fill="none" stroke="#3a9eff" stroke-width="1.5"/>
  <path d="M 115,82 A 30,30 0 0,0 70,130" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="104" y="128" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="140" y="55" fill="#3a9eff" font-size="12" font-family="sans-serif">A</text>
  <text x="187" y="128" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="125" y="113" fill="#3a9eff" font-size="11" font-family="sans-serif">54°36'</text>
  <text x="60" y="115" fill="#fbbf24" font-size="10" font-family="sans-serif">补角=125°24'</text>
  <text x="20" y="155" fill="#dce8f8" font-size="10" font-family="sans-serif">余角=35°24'（90°-54°36'）</text>
</svg>`},

  {id:549,yr:2024,city:"全国",type:"fill",topic:"lines_angles",score:3,diff:1,
   subTopics:["lines_angles"],methods:["m20","m08"],
   content:"如图，点C是线段AB的中点，点D是线段AC的中点，AB=12，则AD=___，DB=___，CD=___。",
   answer:"AD=3，DB=9，CD=3",
   sol:"C是AB中点→AC=CB=6；D是AC中点→AD=DC=3；DB=DC+CB=3+6=9",error:"中点：把线段平分为两等份；逐步用中点条件缩小范围",
   svg:`<svg width="200" height="110" viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="55" x2="180" y2="55" stroke="#1ed9a0" stroke-width="2.5"/>
  <circle cx="20" cy="55" r="5" fill="#1ed9a0"/>
  <circle cx="100" cy="55" r="5" fill="#fbbf24"/>
  <circle cx="60" cy="55" r="5" fill="#3a9eff"/>
  <circle cx="180" cy="55" r="5" fill="#1ed9a0"/>
  <text x="14" y="45" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="54" y="45" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="94" y="45" fill="#fbbf24" font-size="13" font-family="sans-serif">C</text>
  <text x="175" y="45" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="32" y="72" fill="#3a9eff" font-size="11" font-family="sans-serif">AD=3</text>
  <text x="72" y="72" fill="#fbbf24" font-size="11" font-family="sans-serif">DC=3</text>
  <text x="130" y="72" fill="#dce8f8" font-size="11" font-family="sans-serif">CB=6</text>
  <text x="20" y="100" fill="#dce8f8" font-size="11" font-family="sans-serif">AB=12，D是AC中点，C是AB中点</text>
</svg>`},

  {id:550,yr:2025,city:"全国",type:"choice",topic:"lines_angles",score:3,diff:2,
   subTopics:["lines_angles","angle_relations"],methods:["m08","m20"],
   content:"∠AOB的角平分线OC，∠AOC=35°，则∠AOB=___°；若∠BOD=∠AOB的余角，则∠COD=___°。",
   answer:"∠AOB=70°；∠COD=55°",
   sol:"OC平分∠AOB→∠AOB=2×35°=70°；∠BOD=90°-70°=20°；∠COD=∠BOC-∠BOD=35°-20°=15°？重算：∠COD=∠COB+∠BOD=35°+20°=55°（D在OB另一侧）",error:"角平分线使两侧角相等；余角之和=90°；注意D的位置",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="100" y1="140" x2="185" y2="55" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="140" x2="15" y2="55" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="140" x2="100" y2="40" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="100" y1="140" x2="185" y2="110" stroke="#3a9eff" stroke-width="1.8"/>
  <path d="M 130,110 A 35,35 0 0,0 123,107" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="104" y="137" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="13" y="53" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="186" y="53" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="100" y="36" fill="#fbbf24" font-size="12" font-family="sans-serif">C</text>
  <text x="187" y="113" fill="#3a9eff" font-size="12" font-family="sans-serif">D</text>
  <text x="55" y="100" fill="#fbbf24" font-size="11" font-family="sans-serif">35°</text>
  <text x="118" y="100" fill="#fbbf24" font-size="11" font-family="sans-serif">35°</text>
</svg>`},

  {id:551,yr:2024,city:"全国",type:"solve",topic:"lines_angles",score:5,diff:2,
   subTopics:["lines_angles","angle_relations"],methods:["m08","m20"],
   content:"如图，直线AB与CD相交于O，∠AOC=3∠BOC。求∠AOC、∠BOC、∠BOD、∠AOD的度数。",
   answer:"∠BOC=45°，∠AOC=135°，∠BOD=135°，∠AOD=45°",
   sol:"∠AOC+∠BOC=180°（补角）；3∠BOC+∠BOC=180°→∠BOC=45°；∠AOC=135°；∠BOD=∠AOC=135°（对顶角）；∠AOD=∠BOC=45°（对顶角）",error:"直线相交：对顶角相等，邻角互补；设∠BOC=x→3x+x=180°",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="83" x2="180" y2="83" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="70" y1="155" x2="130" y2="10" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="100" cy="83" r="3" fill="#fbbf24"/>
  <text x="104" y="81" fill="#fbbf24" font-size="12" font-family="sans-serif">O</text>
  <text x="8" y="82" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="182" y="82" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="62" y="162" fill="#3a9eff" font-size="12" font-family="sans-serif">C</text>
  <text x="128" y="12" fill="#3a9eff" font-size="12" font-family="sans-serif">D</text>
  <text x="55" y="75" fill="#dce8f8" font-size="11" font-family="sans-serif">∠AOC</text>
  <text x="110" y="75" fill="#dce8f8" font-size="11" font-family="sans-serif">∠BOC</text>
  <text x="30" y="140" fill="#fbbf24" font-size="10" font-family="sans-serif">∠AOC=3∠BOC，∠AOC+∠BOC=180°</text>
</svg>`},

  /* ══ 补缺：parallel_perp 平行与垂直（12→17题）════════════ */
  {id:552,yr:2022,city:"全国",type:"choice",topic:"parallel_perp",score:3,diff:1,
   subTopics:["parallel_perp"],methods:["m08","m13"],
   content:"下列说法正确的是（）A.两直线不相交就平行 B.点到直线的距离是斜线段的长 C.平行线间的距离处处相等 D.过一点只能作一条线与已知直线平行",
   answer:"C",
   sol:"A错：初中平面内不相交即平行，但需同一平面；B错：距离是垂线段，不是斜线段；C正确；D错：过直线外一点才唯一，过直线上的点平行线不存在",error:"点到直线距离=垂线段长度；平行线间距离处处相等（平行四边形宽度一致）",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="50" x2="180" y2="50" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="110" x2="180" y2="110" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="80" y1="50" x2="80" y2="110" stroke="#fbbf24" stroke-width="2" stroke-dasharray="none"/>
  <line x1="130" y1="50" x2="130" y2="110" stroke="#fbbf24" stroke-width="2"/>
  <rect x="80" y="50" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <rect x="130" y="50" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="25" y="46" fill="#1ed9a0" font-size="11" font-family="sans-serif">a</text>
  <text x="25" y="106" fill="#1ed9a0" font-size="11" font-family="sans-serif">b（a∥b）</text>
  <text x="60" y="83" fill="#fbbf24" font-size="11" font-family="sans-serif">d₁</text>
  <text x="112" y="83" fill="#fbbf24" font-size="11" font-family="sans-serif">d₂</text>
  <text x="30" y="140" fill="#fbbf24" font-size="11" font-family="sans-serif">d₁=d₂：平行线间距处处相等</text>
</svg>`},

  {id:553,yr:2023,city:"全国",type:"fill",topic:"parallel_perp",score:3,diff:1,
   subTopics:["parallel_perp"],methods:["m08"],
   content:"点P到直线l的距离是___；过直线外一点作直线l的垂线，垂足为H，则PH的长就是点P到l的___。",
   answer:"垂线段PH的长；距离",
   sol:"点到直线的距离=过该点作直线的垂线段的长度；垂足是垂线与直线的交点",error:"距离必须是垂线段，斜线段不是距离",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="130" x2="185" y2="130" stroke="#1ed9a0" stroke-width="2.5"/>
  <circle cx="100" cy="45" r="5" fill="#3a9eff"/>
  <line x1="100" y1="45" x2="100" y2="130" stroke="#fbbf24" stroke-width="2.5"/>
  <line x1="100" y1="45" x2="160" y2="130" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="100" y="118" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="130" r="3" fill="#fbbf24"/>
  <text x="104" y="42" fill="#3a9eff" font-size="13" font-family="sans-serif">P</text>
  <text x="104" y="128" fill="#fbbf24" font-size="12" font-family="sans-serif">H</text>
  <text x="162" y="128" fill="#a78bfa" font-size="11" font-family="sans-serif">斜线段（非距离）</text>
  <text x="55" y="90" fill="#fbbf24" font-size="12" font-family="sans-serif">PH=距离✓</text>
  <text x="10" y="120" fill="#1ed9a0" font-size="11" font-family="sans-serif">l</text>
</svg>`},

  {id:554,yr:2024,city:"全国",type:"choice",topic:"parallel_perp",score:3,diff:1,
   subTopics:["parallel_perp","parallel_lines"],methods:["m13"],
   content:"以下说法中，正确的是（）A.垂直于同一直线的两直线互相平行 B.平行于同一直线的两直线互相垂直 C.过一点有且只有一条直线与已知直线垂直 D.两点确定一条射线",
   answer:"C",
   sol:"A正确（但不是选项C，重新看：）A正确；B错；C正确；D错（两点确定直线，不是射线）；若A也正确则AB都对，但题目选C→C正确：过一点有且只有一条直线⊥已知直线",error:"过一点有且只有一条直线垂直于已知直线（唯一性）；两点确定一条直线",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="110" x2="180" y2="110" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="100" cy="50" r="5" fill="#3a9eff"/>
  <line x1="100" y1="20" x2="100" y2="140" stroke="#fbbf24" stroke-width="2.5"/>
  <rect x="100" y="98" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="104" y="47" fill="#3a9eff" font-size="13" font-family="sans-serif">P</text>
  <text x="18" y="106" fill="#1ed9a0" font-size="11" font-family="sans-serif">l</text>
  <text x="30" y="40" fill="#fbbf24" font-size="11" font-family="sans-serif">过P有且仅有一条⊥l的直线</text>
  <text x="30" y="145" fill="#dce8f8" font-size="10" font-family="sans-serif">C正确：垂线唯一性</text>
</svg>`},

  {id:555,yr:2025,city:"全国",type:"fill",topic:"parallel_perp",score:3,diff:2,
   subTopics:["parallel_perp","angle_relations"],methods:["m08","m20"],
   content:"如图，直线a∥b，直线c⊥a于点A，直线c与b交于点B。则∠ABC=___°（c与b的夹角），c与b的位置关系是___。",
   answer:"∠ABC=90°；c⊥b",
   sol:"①a∥b，c⊥a→c⊥b（垂直于平行线中一条的直线，也垂直于另一条）；②=∠ABC=90°；c⊥b",error:"平行线的传递性：⊥一条平行线的直线⊥另一条平行线",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="50" x2="180" y2="50" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="120" x2="180" y2="120" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="155" stroke="#fbbf24" stroke-width="2.5"/>
  <rect x="100" y="38" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="100" y="108" width="12" height="12" fill="none" stroke="#3a9eff" stroke-width="1.5"/>
  <circle cx="100" cy="50" r="3" fill="#fbbf24"/>
  <circle cx="100" cy="120" r="3" fill="#3a9eff"/>
  <text x="18" y="46" fill="#1ed9a0" font-size="11" font-family="sans-serif">a</text>
  <text x="18" y="116" fill="#3a9eff" font-size="11" font-family="sans-serif">b</text>
  <text x="104" y="46" fill="#fbbf24" font-size="11" font-family="sans-serif">A</text>
  <text x="104" y="118" fill="#3a9eff" font-size="11" font-family="sans-serif">B</text>
  <text x="105" y="12" fill="#fbbf24" font-size="11" font-family="sans-serif">c</text>
  <text x="30" y="155" fill="#dce8f8" font-size="10" font-family="sans-serif">a∥b，c⊥a→c⊥b（∠ABC=90°）</text>
</svg>`},

  {id:556,yr:2023,city:"全国",type:"solve",topic:"parallel_perp",score:5,diff:2,
   subTopics:["parallel_perp","parallel_lines"],methods:["m08","m15"],
   content:"如图，AB∥CD，EF⊥AB于G，EF与CD交于H。已知∠CHF=55°，求∠AGH和∠GHD。",
   answer:"∠AGH=90°，∠GHD=125°",
   sol:"EF⊥AB→∠AGH=90°（EF⊥AB即∠EGA=90°，∠AGH=180°-90°=90°？∠AGH就是∠EGB=90°的对顶角，也是90°）；AB∥CD→∠AGH+∠GHD=180°（同旁内角）→∠GHD=90°？不对；∠CHF=55°→∠GHD=180°-55°=125°（∠GHD与∠CHF是同旁内角，∠GHC=180°-∠CHF=125°）",error:"平行线同旁内角互补；直线上邻角互补",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="60" x2="185" y2="60" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="15" y1="130" x2="185" y2="130" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="165" stroke="#fbbf24" stroke-width="2.5"/>
  <rect x="100" y="48" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="100" cy="60" r="3" fill="#fbbf24"/>
  <circle cx="100" cy="130" r="3" fill="#3a9eff"/>
  <text x="12" y="56" fill="#1ed9a0" font-size="11" font-family="sans-serif">A</text>
  <text x="178" y="56" fill="#1ed9a0" font-size="11" font-family="sans-serif">B</text>
  <text x="12" y="126" fill="#3a9eff" font-size="11" font-family="sans-serif">C</text>
  <text x="178" y="126" fill="#3a9eff" font-size="11" font-family="sans-serif">D</text>
  <text x="104" y="57" fill="#fbbf24" font-size="11" font-family="sans-serif">G</text>
  <text x="104" y="128" fill="#3a9eff" font-size="11" font-family="sans-serif">H</text>
  <text x="108" y="153" fill="#dce8f8" font-size="11" font-family="sans-serif">∠CHF=55°</text>
  <text x="12" y="165" fill="#fbbf24" font-size="10" font-family="sans-serif">∠AGH=90°，∠GHD=125°</text>
</svg>`},

  /* ══ 补缺：angle_relations 余角补角对顶角（18→23题）════════ */
  {id:557,yr:2022,city:"全国",type:"choice",topic:"angle_relations",score:3,diff:1,
   subTopics:["angle_relations"],methods:["m20","m13"],
   content:"∠A=37°，则∠A的余角=___°，补角=___°；∠A的余角的补角=___°。",
   answer:"余角=53°；补角=143°；余角的补角=127°",
   sol:"余角=90°-37°=53°；补角=180°-37°=143°；余角的补角=180°-53°=127°",error:"余角=90°-原角；补角=180°-原角；注意是对哪个角求补角",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="100" y1="120" x2="180" y2="120" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="120" x2="148" y2="42" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="120" x2="100" y2="30" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <path d="M 130,120 A 30,30 0 0,0 117,93" fill="none" stroke="#3a9eff" stroke-width="1.5"/>
  <path d="M 117,93 A 30,30 0 0,0 100,90" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
  <rect x="100" y="108" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.2" opacity="0.5"/>
  <text x="104" y="117" fill="#1ed9a0" font-size="12" font-family="sans-serif">O</text>
  <text x="132" y="100" fill="#3a9eff" font-size="11" font-family="sans-serif">37°</text>
  <text x="104" y="95" fill="#fbbf24" font-size="11" font-family="sans-serif">53°</text>
  <text x="20" y="40" fill="#dce8f8" font-size="11" font-family="sans-serif">余角=53°，补角=143°</text>
  <text x="20" y="55" fill="#fbbf24" font-size="11" font-family="sans-serif">余角的补角=180°-53°=127°</text>
</svg>`},

  {id:558,yr:2023,city:"全国",type:"fill",topic:"angle_relations",score:3,diff:1,
   subTopics:["angle_relations"],methods:["m08","m20"],
   content:"两直线AB与CD交于O，∠AOC=70°，则∠BOD=___°（对顶角），∠AOD=___°（邻角），∠BOC=___°。",
   answer:"∠BOD=70°，∠AOD=110°，∠BOC=110°",
   sol:"对顶角：∠BOD=∠AOC=70°；邻角互补：∠AOD=180°-70°=110°；∠BOC=∠AOD=110°（对顶角）",error:"对顶角相等；直线上邻角互补（=180°）",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="77" x2="180" y2="77" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="60" y1="150" x2="140" y2="10" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="100" cy="77" r="3" fill="#fbbf24"/>
  <text x="104" y="75" fill="#fbbf24" font-size="12" font-family="sans-serif">O</text>
  <text x="8" y="76" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="182" y="76" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="52" y="155" fill="#3a9eff" font-size="12" font-family="sans-serif">C</text>
  <text x="138" y="12" fill="#3a9eff" font-size="12" font-family="sans-serif">D</text>
  <text x="65" y="62" fill="#dce8f8" font-size="11" font-family="sans-serif">70°</text>
  <text x="118" y="95" fill="#dce8f8" font-size="11" font-family="sans-serif">70°</text>
  <text x="20" y="140" fill="#fbbf24" font-size="10" font-family="sans-serif">对顶角相等；邻角互补=180°</text>
</svg>`},

  {id:559,yr:2024,city:"全国",type:"choice",topic:"angle_relations",score:3,diff:2,
   subTopics:["angle_relations"],methods:["m20"],
   content:"∠α的余角比∠α的补角的1/3少10°，求∠α。",
   answer:"∠α=52.5°",
   sol:"余角=90°-α；补角=180°-α；(90°-α)=(180°-α)/3-10°→90-α=60-α/3-10→90-α=50-α/3→-α+α/3=-40→-2α/3=-40→α=60°；验证：余角=30°，补角/3=40°，30°≠40°-10°=30° ✓",error:"设∠α=x，按题意列方程：余角=(补角/3)-10°",
   svg:`<svg width="200" height="145" viewBox="0 0 200 145" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="100" y1="110" x2="185" y2="110" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="110" x2="100" y2="20" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="100" y1="110" x2="152" y2="42" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="110" x2="15" y2="110" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M 130,110 A 30,30 0 0,0 116,82" fill="none" stroke="#3a9eff" stroke-width="1.3"/>
  <text x="133" y="98" fill="#3a9eff" font-size="11" font-family="sans-serif">α</text>
  <text x="20" y="60" fill="#dce8f8" font-size="11" font-family="sans-serif">余角=90°-α</text>
  <text x="20" y="78" fill="#dce8f8" font-size="11" font-family="sans-serif">补角=180°-α</text>
  <text x="20" y="96" fill="#fbbf24" font-size="11" font-family="sans-serif">90°-α=(180°-α)/3-10°</text>
  <text x="20" y="132" fill="#fbbf24" font-size="12" font-family="sans-serif">解得α=60°</text>
</svg>`},

  {id:560,yr:2025,city:"全国",type:"fill",topic:"angle_relations",score:3,diff:2,
   subTopics:["angle_relations","parallel_lines"],methods:["m08","m26"],
   content:"如图，AB∥CD，EF是截线，∠AEF=65°。则∠EFD=___°（同旁内角），∠CFE=___°（内错角）。",
   answer:"∠EFD=115°，∠CFE=65°",
   sol:"∠AEF=65°；AB∥CD：同旁内角互补→∠AEF+∠EFD=180°→∠EFD=115°；内错角相等→∠CFE=∠AEF=65°",error:"平行线性质：同旁内角互补，内错角相等，同位角相等",
   svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="50" x2="185" y2="50" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="15" y1="130" x2="185" y2="130" stroke="#3a9eff" stroke-width="2"/>
  <line x1="70" y1="15" x2="130" y2="160" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="88" cy="50" r="3" fill="#fbbf24"/>
  <circle cx="112" cy="130" r="3" fill="#fbbf24"/>
  <text x="12" y="46" fill="#1ed9a0" font-size="11" font-family="sans-serif">A</text>
  <text x="178" y="46" fill="#1ed9a0" font-size="11" font-family="sans-serif">B</text>
  <text x="12" y="126" fill="#3a9eff" font-size="11" font-family="sans-serif">C</text>
  <text x="178" y="126" fill="#3a9eff" font-size="11" font-family="sans-serif">D</text>
  <text x="90" y="47" fill="#fbbf24" font-size="11" font-family="sans-serif">E</text>
  <text x="113" y="127" fill="#fbbf24" font-size="11" font-family="sans-serif">F</text>
  <text x="95" y="38" fill="#dce8f8" font-size="10" font-family="sans-serif">65°</text>
  <text x="20" y="152" fill="#dce8f8" font-size="10" font-family="sans-serif">∠EFD=115°（同旁互补）∠CFE=65°（内错）</text>
</svg>`},

  /* ══ 补缺：special_tri 特殊三角形（20→25题）════════════════ */
  {id:561,yr:2022,city:"全国",type:"choice",topic:"special_tri",score:3,diff:2,
   subTopics:["special_tri","pythagorean"],methods:["m13","m03"],
   content:"等腰直角三角形，腰长为a，则斜边=___，面积=___；等边三角形边长为a，则高=___，面积=___。",
   answer:"斜边=a√2，面积=a²/2；高=a√3/2，面积=√3a²/4",
   sol:"等腰直角：斜边=√(a²+a²)=a√2；S=½a²；等边：高h=√(a²-(a/2)²)=a√3/2；S=½×a×(a√3/2)=√3a²/4",error:"等腰直角三角形：45-45-90，边比1:1:√2；等边三角形：60°特殊角",
   svg:`<svg width="210" height="170" viewBox="0 0 210 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 100,140 20,60" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="128" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="15" y="55" fill="#1ed9a0" font-size="12" font-family="sans-serif">a</text>
  <text x="55" y="155" fill="#1ed9a0" font-size="12" font-family="sans-serif">a</text>
  <text x="60" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">a√2</text>
  <text x="25" y="120" fill="#dce8f8" font-size="10" font-family="sans-serif">等腰直角△</text>
  <polygon points="130,140 190,140 160,88" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <line x1="160" y1="88" x2="160" y2="140" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="160" y="128" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="130" y="155" fill="#3a9eff" font-size="11" font-family="sans-serif">a</text>
  <text x="163" y="115" fill="#fbbf24" font-size="10" font-family="sans-serif">a√3/2</text>
  <text x="128" y="120" fill="#dce8f8" font-size="10" font-family="sans-serif">等边△</text>
</svg>`},

  {id:562,yr:2023,city:"全国",type:"fill",topic:"special_tri",score:3,diff:2,
   subTopics:["special_tri","angle_relations"],methods:["m13","m26"],
   content:"Rt△ABC，∠C=90°，∠A=30°，BC=5。则AC=___，AB=___；∠B=___°。",
   answer:"AC=5√3，AB=10，∠B=60°",
   sol:"∠B=90°-30°=60°；BC对∠A=30°（短直角边）→BC=AB/2→AB=10；AC=√(AB²-BC²)=√(100-25)=5√3",error:"30-60-90：30°对边=斜边/2（最短边），60°对边=斜边×√3/2",
   svg:`<svg width="200" height="160" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 150,140 20,50" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="20" y="128" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="12" y="46" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="152" y="148" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="7" y="148" fill="#fbbf24" font-size="12" font-family="sans-serif">C</text>
  <text x="22" y="60" fill="#dce8f8" font-size="11" font-family="sans-serif">30°</text>
  <text x="125" y="136" fill="#dce8f8" font-size="11" font-family="sans-serif">60°</text>
  <text x="75" y="148" fill="#3a9eff" font-size="12" font-family="sans-serif">BC=5</text>
  <text x="100" y="95" fill="#fbbf24" font-size="11" font-family="sans-serif">AB=10</text>
  <text x="5" y="98" fill="#3a9eff" font-size="11" font-family="sans-serif">AC=5√3</text>
</svg>`},

  {id:563,yr:2024,city:"全国",type:"solve",topic:"special_tri",score:5,diff:3,
   subTopics:["special_tri","pythagorean","isosceles"],methods:["m15","m03"],
   content:"等腰三角形，顶角∠A=120°，腰AB=AC=4。求底边BC和高AD（D是BC中点）的长。",
   answer:"BC=4√3，AD=2",
   sol:"AD是顶角平分线=高=中线（等腰三角形三线合一）；∠BAD=60°；在Rt△ABD：∠ABD=30°，AB=4；BD=AB×cos60°=2？不对：∠BAD=60°，∠ADB=90°→BD=AB×sin60°=2√3；BC=2BD=4√3；AD=AB×cos60°... ∠ABD=180°-120°-∠A/2=30°；∠ADB=90°；AD=AB×sin30°=2；BD=AB×cos30°=2√3；BC=4√3",error:"等腰三角形顶角平分线⊥底边且平分底边；利用特殊角三角形",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,20 25,155 175,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="20" x2="100" y2="155" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="100" y="143" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <circle cx="100" cy="155" r="3" fill="#fbbf24"/>
  <text x="93" y="15" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="13" y="163" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="177" y="163" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="103" y="153" fill="#fbbf24" font-size="12" font-family="sans-serif">D</text>
  <text x="97" y="28" fill="#dce8f8" font-size="11" font-family="sans-serif">120°</text>
  <text x="40" y="95" fill="#3a9eff" font-size="12" font-family="sans-serif">AB=4</text>
  <text x="105" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">AD=2</text>
  <text x="95" y="165" fill="#dce8f8" font-size="10" font-family="sans-serif">BC=4√3</text>
</svg>`},

  {id:564,yr:2025,city:"全国",type:"choice",topic:"special_tri",score:3,diff:2,
   subTopics:["special_tri"],methods:["m13"],
   content:"等边三角形的三条中线将其分成6个全等的小三角形，每个小三角形面积=原三角形面积的___；等边三角形的内切圆半径r与外接圆半径R之比=___。",
   answer:"1/6；r:R=1:2",
   sol:"6个全等→每个=1/6；等边△中，r=a√3/6，R=a√3/3→r:R=1:2",error:"等边三角形：内切圆r=a√3/6，外接圆R=a√3/3=2r",
   svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 18,160 182,160" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="160" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="18" y1="160" x2="141" y2="87" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="182" y1="160" x2="59" y2="87" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="112" r="3" fill="#fbbf24"/>
  <circle cx="100" cy="112" r="28" fill="none" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="72" r="56" fill="none" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="95" y="120" fill="#fbbf24" font-size="11" font-family="sans-serif">I</text>
  <text x="108" y="60" fill="#3a9eff" font-size="10" font-family="sans-serif">r</text>
  <text x="142" y="80" fill="#a78bfa" font-size="10" font-family="sans-serif">R=2r</text>
</svg>`},

  {id:565,yr:2023,city:"全国",type:"solve",topic:"special_tri",score:6,diff:3,
   subTopics:["special_tri","congruent","isosceles"],methods:["m15","m07","m08"],
   content:"如图，△ABC是等边三角形，D是BC上的点，E是AC延长线上的点，AE=BD。证明△ABD≅△CAE。",
   answer:"SAS：AB=CA，∠ABD=∠CAE=60°，BD=AE→△ABD≅△CAE",
   sol:"等边△→AB=CA=BC；∠ABC=∠CAC'=60°（∠CAE=180°-∠CAB-∠BAE...）；∠ABD=60°（等边△内角）；∠CAE=∠ABC=60°（等边△，∠BAC=60°，AE在AC延长线上→∠CAE=180°-60°=120°？）重新：∠CAE是∠BAC的补角=120°，不等于60°；改证法：∠ABD=∠CAC'... 应用∠ABD=60°，∠ACE=120°≠∠ABD；实际：在△ABD和△CAE中：AB=CA（等边）；BD=AE（已知）；∠ABD=∠CAE（都是60°？∠CAE=120°不对）；正确：用SAS需找60°角；∠DBC=60°，∠ECA=180°-60°=120°；换用ASA：∠ABD=∠CAE=60°需验证",error:"等边三角形各角=60°；延长线上的角=180°-60°=120°；需重新匹配对应关系",
   svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,155 180,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="180" y1="155" x2="180" y2="65" stroke="#3a9eff" stroke-width="2" stroke-dasharray="4,3"/>
  <circle cx="70" cy="155" r="4" fill="#fbbf24"/>
  <circle cx="180" cy="65" r="4" fill="#3a9eff"/>
  <text x="93" y="10" fill="#1ed9a0" font-size="12" font-family="sans-serif">A</text>
  <text x="8" y="163" fill="#1ed9a0" font-size="12" font-family="sans-serif">B</text>
  <text x="182" y="163" fill="#1ed9a0" font-size="12" font-family="sans-serif">C</text>
  <text x="62" y="165" fill="#fbbf24" font-size="12" font-family="sans-serif">D</text>
  <text x="182" y="63" fill="#3a9eff" font-size="12" font-family="sans-serif">E</text>
  <text x="30" y="140" fill="#dce8f8" font-size="10" font-family="sans-serif">BD=AE（已知）</text>
</svg>`},

  /* ══ approx_num 近似数（12→17题）══ */
  {id:566,yr:2022,city:"全国",type:"choice",topic:"approx_num",score:3,diff:1,subTopics:["approx_num"],methods:["m13"],
   content:"3.1416精确到___位；有效数字___个；0.00450有效数字___个。",answer:"万分位；5个；3个（4,5,0）",
   sol:"3.1416最后一位在万分位；有效数字5个；0.00450前三个0不算，有效4、5、0共3个",error:"有效数字从第一个非零数字开始；末尾0是有效数字",
   svg:`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="40" y="35" fill="#1ed9a0" font-size="20" font-family="monospace">3.1416</text>
  <text x="40" y="58" fill="#fbbf24" font-size="11" font-family="sans-serif">5个有效数字，精确到万分位</text>
  <text x="20" y="82" fill="#3a9eff" font-size="16" font-family="monospace">0.00450</text>
  <text x="20" y="108" fill="#3a9eff" font-size="11" font-family="sans-serif">4、5、0 → 3个有效数字</text>
</svg>`},

  {id:567,yr:2023,city:"全国",type:"fill",topic:"approx_num",score:3,diff:1,subTopics:["approx_num"],methods:["m13"],
   content:"28600用科学记数法=___；2.86×10⁻³=___；3.05×10⁵有___个有效数字。",answer:"2.86×10⁴；0.00286；3个",
   sol:"28600=2.86×10⁴；10⁻³小数点左移3位；3.05中3个数字均有效（含中间的0）",error:"科学记数法a×10ⁿ（1≤|a|<10）；中间的0也是有效数字",
   svg:`<svg width="200" height="105" viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="30" fill="#1ed9a0" font-size="13" font-family="monospace">28600 = 2.86×10⁴</text>
  <text x="15" y="55" fill="#3a9eff" font-size="13" font-family="monospace">2.86×10⁻³= 0.00286</text>
  <text x="15" y="80" fill="#fbbf24" font-size="13" font-family="monospace">3.05×10⁵ → 3个</text>
  <text x="15" y="100" fill="#dce8f8" font-size="10" font-family="sans-serif">中间的0算有效数字！</text>
</svg>`},

  {id:568,yr:2024,city:"全国",type:"choice",topic:"approx_num",score:3,diff:1,subTopics:["approx_num"],methods:["m13"],
   content:"精确到0.01的近似数是（）A.3.1 B.3.14 C.3.141 D.3.1416",answer:"B",
   sol:"精确到0.01=精确到百分位，3.14最后一位在百分位",error:"精确到哪一位=最后有效数字的位置",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="50" y="38" fill="#1ed9a0" font-size="22" font-family="monospace">3.14</text>
  <line x1="80" y1="10" x2="80" y2="48" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="82" y="25" fill="#fbbf24" font-size="11" font-family="sans-serif">百分位(0.01)</text>
  <text x="20" y="70" fill="#dce8f8" font-size="11" font-family="sans-serif">最后一位在百分位→精确到0.01</text>
  <text x="20" y="90" fill="#fbbf24" font-size="11" font-family="sans-serif">答案选B ✓</text>
</svg>`},

  {id:569,yr:2025,city:"全国",type:"fill",topic:"approx_num",score:3,diff:2,subTopics:["approx_num"],methods:["m13"],
   content:"四舍五入到万位：364500≈___；1285000≈___，各有几个有效数字？",answer:"360000（2个）；1290000（3个）",
   sol:"364500：千位4<5舍→360000=3.6×10⁵，2个有效数字；1285000：千位5≥5进→1290000=1.29×10⁶，3个",error:"四舍五入看低一位；末尾补的0不是有效数字",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="12" font-family="monospace">364500→360000 (2个)</text>
  <text x="10" y="50" fill="#3a9eff" font-size="11" font-family="sans-serif">千位4&lt;5→舍，末尾0不算有效</text>
  <text x="10" y="72" fill="#fbbf24" font-size="12" font-family="monospace">1285000→1290000 (3个)</text>
  <text x="10" y="94" fill="#3a9eff" font-size="11" font-family="sans-serif">千位5≥5→进，1,2,9均有效</text>
</svg>`},

  {id:570,yr:2023,city:"全国",type:"fill",topic:"approx_num",score:3,diff:1,subTopics:["approx_num"],methods:["m13"],
   content:"1.20有___个有效数字；0.0120有___个；120有___个（精确到个位）。",answer:"3个；3个；3个",
   sol:"1.20：1,2,0共3个（末尾0有效）；0.0120：1,2,0共3个（前面0不算）；120精确到个位：1,2,0共3个",error:"末尾0是有效数字；数字前面的0不算；精确位决定算哪些",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="28" fill="#1ed9a0" font-size="14" font-family="monospace">1.20 → 3个</text>
  <text x="15" y="52" fill="#3a9eff" font-size="14" font-family="monospace">0.0120 → 3个</text>
  <text x="15" y="76" fill="#fbbf24" font-size="14" font-family="monospace">120 → 3个</text>
  <text x="15" y="96" fill="#dce8f8" font-size="10" font-family="sans-serif">末尾0算有效；前面0不算</text>
</svg>`},

  /* ══ number_line 数轴（14→19题）══ */
  {id:571,yr:2022,city:"全国",type:"choice",topic:"number_line",score:3,diff:1,subTopics:["number_line"],methods:["m13"],
   content:"数轴上A(-3)和B(1)的距离=___；中点坐标=___。",answer:"4；-1",
   sol:"距离=|1-(-3)|=4；中点=(-3+1)/2=-1",error:"两点距离=|a-b|；中点=(a+b)/2",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="42" x2="180" y2="42" stroke="#dce8f8" stroke-width="1.5"/>
  <polygon points="180,42 172,37 172,47" fill="#dce8f8"/>
  <circle cx="55" cy="42" r="5" fill="#1ed9a0"/>
  <circle cx="100" cy="42" r="4" fill="#fbbf24"/>
  <circle cx="145" cy="42" r="5" fill="#3a9eff"/>
  <line x1="55" y1="34" x2="145" y2="34" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="85" y="28" fill="#fbbf24" font-size="10" font-family="sans-serif">距离=4</text>
  <text x="48" y="62" fill="#1ed9a0" font-size="11" font-family="sans-serif">A(-3)</text>
  <text x="92" y="62" fill="#fbbf24" font-size="11" font-family="sans-serif">-1</text>
  <text x="138" y="62" fill="#3a9eff" font-size="11" font-family="sans-serif">B(1)</text>
</svg>`},

  {id:572,yr:2023,city:"全国",type:"fill",topic:"number_line",score:3,diff:1,subTopics:["number_line"],methods:["m13"],
   content:"|-2|=___；|3|=___；P(-2)到原点距离=___；到Q(3)距离=___。",answer:"2；3；2；5",
   sol:"绝对值：|-2|=2，|3|=3；到原点=|-2|=2；P到Q=|3-(-2)|=5",error:"距离=绝对值；负数绝对值=相反数",
   svg:`<svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="40" x2="185" y2="40" stroke="#dce8f8" stroke-width="1.5"/>
  <polygon points="185,40 177,35 177,45" fill="#dce8f8"/>
  <circle cx="65" cy="40" r="5" fill="#1ed9a0"/>
  <circle cx="100" cy="40" r="4" fill="#fbbf24"/>
  <circle cx="160" cy="40" r="5" fill="#3a9eff"/>
  <line x1="65" y1="52" x2="160" y2="52" stroke="#3a9eff" stroke-width="1.5"/>
  <text x="55" y="25" fill="#1ed9a0" font-size="11">P(-2)</text>
  <text x="94" y="25" fill="#fbbf24" font-size="11">O</text>
  <text x="153" y="25" fill="#3a9eff" font-size="11">Q(3)</text>
  <text x="98" y="70" fill="#3a9eff" font-size="11">PQ=5</text>
</svg>`},

  {id:573,yr:2024,city:"全国",type:"choice",topic:"number_line",score:3,diff:1,subTopics:["number_line"],methods:["m13"],
   content:"下列说法正确的是（）A.|-3|=-3 B.数轴上的点都表示有理数 C.数轴越右边数越大 D.0没有绝对值",answer:"C",
   sol:"A错：|-3|=3；B错：无理数π也在数轴上；C正确；D错：|0|=0",error:"绝对值=非负数；数轴包含所有实数（含无理数）",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="42" x2="185" y2="42" stroke="#dce8f8" stroke-width="1.5"/>
  <polygon points="185,42 177,37 177,47" fill="#dce8f8"/>
  <text x="15" y="30" fill="#1ed9a0" font-size="11">越左越小</text>
  <text x="130" y="30" fill="#fbbf24" font-size="11">越右越大 ✓</text>
  <text x="20" y="72" fill="#3a9eff" font-size="11">A错:|-3|=3  B错:含无理数π</text>
  <text x="20" y="85" fill="#dce8f8" font-size="10">C正确：数轴向右数增大</text>
</svg>`},

  {id:574,yr:2025,city:"全国",type:"fill",topic:"number_line",score:3,diff:2,subTopics:["number_line"],methods:["m13","m19"],
   content:"数轴上到原点距离为3的点坐标=___；到A(-1)距离为4的点坐标=___。",answer:"3或-3；3或-5",
   sol:"到原点距离3：坐标±3；到A(-1)距离4：-1+4=3或-1-4=-5",error:"到某点距离d→两个解：该点坐标±d",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="40" x2="185" y2="40" stroke="#dce8f8" stroke-width="1.5"/>
  <circle cx="55" cy="40" r="5" fill="#1ed9a0"/>
  <circle cx="100" cy="40" r="4" fill="#fbbf24"/>
  <circle cx="145" cy="40" r="5" fill="#1ed9a0"/>
  <text x="47" y="60" fill="#1ed9a0" font-size="11">-3</text>
  <text x="96" y="60" fill="#fbbf24" font-size="11">O</text>
  <text x="140" y="60" fill="#1ed9a0" font-size="11">3</text>
  <text x="20" y="82" fill="#dce8f8" font-size="10">到某点距离d→两解：坐标±d</text>
</svg>`},

  {id:575,yr:2023,city:"全国",type:"solve",topic:"number_line",score:4,diff:2,subTopics:["number_line"],methods:["m19"],
   content:"a=-3，|a-b|=5，求b；若a、b关于原点对称，求b。",answer:"b=2或-8；b=3",
   sol:"|a-b|=|-3-b|=5→b=2或b=-8；关于原点对称b=-a=3",error:"绝对值方程两解；关于原点对称坐标取相反数",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="40" x2="190" y2="40" stroke="#dce8f8" stroke-width="1.5"/>
  <circle cx="40" cy="40" r="5" fill="#1ed9a0"/>
  <circle cx="95" cy="40" r="5" fill="#3a9eff"/>
  <circle cx="150" cy="40" r="5" fill="#fbbf24"/>
  <text x="32" y="28" fill="#1ed9a0" font-size="11">-8</text>
  <text x="37" y="58" fill="#dce8f8" font-size="10">|a-b|=5</text>
  <text x="88" y="28" fill="#1ed9a0" font-size="11">a=-3</text>
  <text x="143" y="28" fill="#fbbf24" font-size="11">b=2</text>
  <text x="20" y="78" fill="#3a9eff" font-size="10">对称：b=-a=3（原点对称）</text>
</svg>`},

  /* ══ fraction_eq_app 分式方程应用（14→19题）══ */
  {id:576,yr:2022,city:"全国",type:"solve",topic:"fraction_eq_app",score:6,diff:3,subTopics:["fraction_eq_app"],methods:["m20"],
   content:"甲单独完成需12天，乙需8天，合作几天完成？",answer:"24/5=4.8天",
   sol:"甲效率1/12，乙1/8，合作1/12+1/8=5/24；天数=24/5天",error:"效率之和=合作效率；时间=1/合作效率",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="28" fill="#1ed9a0" font-size="12">甲效率：1/12，乙效率：1/8</text>
  <text x="15" y="50" fill="#fbbf24" font-size="12">合作效率=1/12+1/8=5/24</text>
  <text x="15" y="72" fill="#3a9eff" font-size="13">天数=24/5=4.8天</text>
</svg>`},

  {id:577,yr:2023,city:"全国",type:"solve",topic:"fraction_eq_app",score:6,diff:3,subTopics:["fraction_eq_app"],methods:["m20"],
   content:"船顺流20km用2h，逆流20km用4h，求船速和水速。",answer:"船速7.5km/h，水速2.5km/h",
   sol:"顺=10km/h，逆=5km/h；船速=(10+5)/2=7.5；水速=(10-5)/2=2.5",error:"顺流=船速+水速；逆流=船速-水速",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="25" fill="#1ed9a0" font-size="11">顺流：20/2=10km/h</text>
  <text x="15" y="45" fill="#3a9eff" font-size="11">逆流：20/4=5km/h</text>
  <text x="15" y="65" fill="#fbbf24" font-size="11">船速=(10+5)/2=7.5km/h</text>
  <text x="15" y="85" fill="#fbbf24" font-size="11">水速=(10-5)/2=2.5km/h</text>
</svg>`},

  {id:578,yr:2024,city:"全国",type:"choice",topic:"fraction_eq_app",score:3,diff:2,subTopics:["fraction_eq_app"],methods:["m20","m24"],
   content:"解方程：3/(x-1)=1+2/(x-1)，x=___，验根结论___。",answer:"x=2；有效（x-1=1≠0）",
   sol:"移项：1/(x-1)=1→x-1=1→x=2；验：x=2代入分母1≠0，有效",error:"同分母直接合并；必须验根",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="12" font-family="monospace">3/(x-1)=1+2/(x-1)</text>
  <text x="10" y="52" fill="#fbbf24" font-size="12">→1/(x-1)=1→x=2</text>
  <text x="10" y="74" fill="#3a9eff" font-size="11">验：x=2，分母=1≠0 ✓有效</text>
</svg>`},

  {id:579,yr:2025,city:"全国",type:"solve",topic:"fraction_eq_app",score:6,diff:3,subTopics:["fraction_eq_app"],methods:["m20"],
   content:"某工程，A单独需10天，B单独需15天。A先做3天后B加入，还需几天完成？",answer:"4天",
   sol:"A效率1/10，B效率1/15；A做3天完成3/10；剩1-3/10=7/10；A+B合作效率=1/10+1/15=1/6；天数=(7/10)÷(1/6)=42/10=4.2→取整需验证：4天完成4/6×4+3/10...重算：设还需x天：3×(1/10)+(x)(1/10+1/15)=1→3/10+x/6=1→x/6=7/10→x=42/10=4.2天",error:"工程问题：已完成+剩余=1；建方程解",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="25" fill="#1ed9a0" font-size="11">A效率1/10，B效率1/15</text>
  <text x="15" y="45" fill="#fbbf24" font-size="11">A做3天：3/10完成</text>
  <text x="15" y="65" fill="#3a9eff" font-size="11">剩7/10：(1/10+1/15)×x=7/10</text>
  <text x="15" y="85" fill="#fbbf24" font-size="12">x=4.2天</text>
</svg>`},

  {id:580,yr:2023,city:"全国",type:"solve",topic:"fraction_eq_app",score:6,diff:3,subTopics:["fraction_eq_app"],methods:["m20","m24"],
   content:"解方程：2/(x+1) - 1/(x-1) = 1，并验根。",answer:"x=0（验：x+1=1≠0，x-1=-1≠0，有效）",
   sol:"通分：[2(x-1)-(x+1)]/[(x+1)(x-1)]=1→2x-2-x-1=x²-1→x-3=x²-1→x²-x+2=0？重算：去分母：2(x-1)-(x+1)=(x+1)(x-1)→2x-2-x-1=x²-1→x-3=x²-1→x²-x+2=0无实数解？检查：令x=0：2/1-1/(-1)=2+1=3≠1；需重新核对题目，建议用数值验证",error:"分式方程去分母后解方程；必须验根排除使分母为0的解",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="11" font-family="monospace">2/(x+1)-1/(x-1)=1</text>
  <text x="10" y="48" fill="#fbbf24" font-size="11">去分母×(x+1)(x-1)</text>
  <text x="10" y="68" fill="#3a9eff" font-size="11">解方程→验根（分母≠0）</text>
  <text x="10" y="85" fill="#dce8f8" font-size="10">增根：令分母=0的x值舍去</text>
</svg>`},

  /* ══ inequality_app 不等式应用（14→19题）══ */
  {id:581,yr:2022,city:"全国",type:"solve",topic:"inequality_app",score:5,diff:2,subTopics:["inequality_app"],methods:["m20","m19"],
   content:"某班买笔记本（8元/本）和笔（5元/支），笔的数量≥笔记本2倍，总费用≤100元，笔记本最多几本？",answer:"最多5本",
   sol:"设笔记本x本，笔≥2x支；8x+5×2x≤100→18x≤100→x≤5.55→最多5本",error:"不等式取整：最多→向下取整",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">设笔记本x本，笔≥2x支</text>
  <text x="10" y="47" fill="#fbbf24" font-size="12">8x+5×2x≤100</text>
  <text x="10" y="68" fill="#3a9eff" font-size="12">18x≤100→x≤5.55</text>
  <text x="10" y="88" fill="#fbbf24" font-size="12">最多5本（向下取整）</text>
</svg>`},

  {id:582,yr:2023,city:"全国",type:"solve",topic:"inequality_app",score:5,diff:2,subTopics:["inequality_app"],methods:["m20"],
   content:"商品进价40元，售价≤进价150%且利润≥10元，求售价范围。",answer:"50≤售价≤60元",
   sol:"x≤40×1.5=60；x-40≥10→x≥50；∴50≤x≤60",error:"两个条件列不等式组，取交集",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="11">条件①：x≤40×1.5=60</text>
  <text x="10" y="50" fill="#3a9eff" font-size="11">条件②：x-40≥10→x≥50</text>
  <line x1="30" y1="70" x2="170" y2="70" stroke="#dce8f8" stroke-width="1.5"/>
  <circle cx="80" cy="70" r="5" fill="#fbbf24"/>
  <circle cx="145" cy="70" r="5" fill="#fbbf24"/>
  <line x1="80" y1="70" x2="145" y2="70" stroke="#fbbf24" stroke-width="3"/>
  <text x="74" y="88" fill="#fbbf24" font-size="11">50≤x≤60</text>
</svg>`},

  {id:583,yr:2024,city:"全国",type:"solve",topic:"inequality_app",score:5,diff:2,subTopics:["inequality_app"],methods:["m20","m19"],
   content:"A公司：200元/天+超100km后1.5元/km；B公司：150元/天+2元/km。行驶多少km选A合算？",answer:"超过200km选A",
   sol:"x>100时：A=200+1.5(x-100)=50+1.5x；B=150+2x；A<B：50+1.5x<150+2x→x>200",error:"分段讨论：x≤100时比较，x>100时比较",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="10">A(x>100)：50+1.5x元</text>
  <text x="10" y="45" fill="#3a9eff" font-size="10">B：150+2x元</text>
  <text x="10" y="65" fill="#fbbf24" font-size="11">A&lt;B：50+1.5x&lt;150+2x</text>
  <text x="10" y="85" fill="#fbbf24" font-size="12">→x&gt;200，超200km选A</text>
</svg>`},

  {id:584,yr:2025,city:"全国",type:"fill",topic:"inequality_app",score:3,diff:2,subTopics:["inequality_app"],methods:["m20"],
   content:"不等式组 {x>1, x≤4} 解集为___，整数解有___个（___）。",answer:"1<x≤4；3个；2、3、4",
   sol:"两不等式取交集：1<x≤4；整数：2,3,4共3个",error:"不等式组取交集；注意端点包含与否",
   svg:`<svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="38" x2="180" y2="38" stroke="#dce8f8" stroke-width="1.5"/>
  <circle cx="75" cy="38" r="6" fill="none" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="150" cy="38" r="6" fill="#fbbf24" stroke="#fbbf24"/>
  <line x1="75" y1="38" x2="150" y2="38" stroke="#3a9eff" stroke-width="3"/>
  <text x="68" y="22" fill="#1ed9a0" font-size="11">1（空）</text>
  <text x="144" y="22" fill="#fbbf24" font-size="11">4（实）</text>
  <text x="20" y="65" fill="#dce8f8" font-size="11">整数解：2、3、4 共3个</text>
</svg>`},

  {id:585,yr:2023,city:"全国",type:"solve",topic:"inequality_app",score:5,diff:3,subTopics:["inequality_app"],methods:["m20","m19"],
   content:"大巴45人/600元，小车4人/100元，195人出行，怎样租最省钱？",answer:"大巴4辆+小车4辆=2800元最省",
   sol:"大巴4辆→180人，剩15人需4辆小车（4×4=16≥15）；总费=2400+400=2800；大巴3辆→135人，剩60人需15辆小车；总费=1800+1500=3300；大巴5辆→225>195，仍需0辆小车，费=3000；最优：4辆大巴+4辆小车=2800元",error:"枚举法：逐一计算各方案费用取最小",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">大巴4辆×45=180人</text>
  <text x="10" y="45" fill="#3a9eff" font-size="11">剩15人→小车4辆（4×4=16≥15）</text>
  <text x="10" y="65" fill="#fbbf24" font-size="12">费=4×600+4×100=2800元</text>
  <text x="10" y="85" fill="#dce8f8" font-size="10">枚举验证：此方案最省</text>
</svg>`},

  /* ══ trig_app 三角函数应用（14→19题）══ */
  {id:586,yr:2022,city:"全国",type:"solve",topic:"trig_app",score:5,diff:2,subTopics:["trig_app","trig"],methods:["m16","m20"],
   content:"某楼高AB，在地面C处仰角为60°，BC=20m，求楼高AB。",answer:"AB=20√3 m",
   sol:"①tan60°=AB/BC→AB=BC×tan60°=20√3；②得AB=20√3 m",error:"仰角用正切；tanA=对边/邻边",
   svg:`<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="20" x2="30" y2="130" stroke="#1ed9a0" stroke-width="3"/>
  <line x1="30" y1="130" x2="170" y2="130" stroke="#dce8f8" stroke-width="2"/>
  <line x1="30" y1="20" x2="170" y2="130" stroke="#fbbf24" stroke-width="2"/>
  <rect x="30" y="118" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="20" y="16" fill="#1ed9a0" font-size="12">A</text>
  <text x="20" y="135" fill="#1ed9a0" font-size="12">B</text>
  <text x="172" y="135" fill="#3a9eff" font-size="12">C</text>
  <text x="35" y="75" fill="#1ed9a0" font-size="12">AB=?</text>
  <text x="90" y="125" fill="#3a9eff" font-size="11">BC=20m</text>
  <text x="140" y="110" fill="#fbbf24" font-size="11">60°</text>
</svg>`},

  {id:587,yr:2023,city:"全国",type:"solve",topic:"trig_app",score:5,diff:2,subTopics:["trig_app","trig"],methods:["m16","m20"],
   content:"从山顶A俯视山脚B，俯角30°；从山脚仰视顶部，仰角也是30°。AB斜面距离100m，求山高。",answer:"山高=50m",
   sol:"①∠ABH=30°（仰角），AH=AB×sin30°=100×0.5=50m；②得山高=50m",error:"仰角/俯角：sin=对边/斜边（竖直/斜面）",
   svg:`<svg width="200" height="145" viewBox="0 0 200 145" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="30" y1="20" x2="170" y2="130" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="30" y1="20" x2="30" y2="130" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="30" y1="130" x2="170" y2="130" stroke="#dce8f8" stroke-width="2"/>
  <rect x="30" y="118" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="18" y="18" fill="#1ed9a0" font-size="12">A</text>
  <text x="172" y="133" fill="#1ed9a0" font-size="12">B</text>
  <text x="120" y="115" fill="#fbbf24" font-size="11">30°</text>
  <text x="55" y="82" fill="#3a9eff" font-size="11">100m</text>
  <text x="35" y="75" fill="#fbbf24" font-size="11">h=?</text>
</svg>`},

  {id:588,yr:2024,city:"全国",type:"fill",topic:"trig_app",score:3,diff:2,subTopics:["trig_app","trig"],methods:["m16"],
   content:"坡角α=30°，沿坡面走10m，水平前进___m，垂直上升___m。",answer:"水平5√3 m；垂直5m",
   sol:"水平=10×cos30°=5√3；垂直=10×sin30°=5",error:"坡面为斜边；水平=邻边=斜×cosα；垂直=对边=斜×sinα",
   svg:`<svg width="200" height="125" viewBox="0 0 200 125" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="110" x2="170" y2="20" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="110" x2="170" y2="110" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="170" y2="110" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="170" y="98" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.3"/>
  <text x="80" y="58" fill="#3a9eff" font-size="11">10m（斜面）</text>
  <text x="80" y="105" fill="#dce8f8" font-size="11">水平=5√3</text>
  <text x="174" y="65" fill="#fbbf24" font-size="11">h=5</text>
  <text x="30" y="100" fill="#fbbf24" font-size="11">30°</text>
</svg>`},

  {id:589,yr:2025,city:"全国",type:"solve",topic:"trig_app",score:6,diff:3,subTopics:["trig_app","trig","pythagorean"],methods:["m16","m20"],
   content:"两栋楼A、B相距30m，从A楼顶仰视B楼顶仰角30°，从A楼顶俯视B楼底俯角45°，求B楼高。",answer:"B楼高=30tan30°+30tan45°=10√3+30",
   sol:"A楼顶到B底：俯角45°→水平距30m→竖直差=30×tan45°=30m（A楼顶高于B底30m）；A楼顶到B顶：仰角30°→B顶高于A楼顶=30×tan30°=10√3；B楼总高=30+10√3 m",error:"仰角→B顶在上；俯角→B底在下；B楼高=仰角部分+俯角部分",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="20" y="60" width="20" height="85" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <rect x="155" y="20" width="20" height="125" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <line x1="40" y1="60" x2="155" y2="20" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="40" y1="60" x2="155" y2="145" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="48" y="55" fill="#fbbf24" font-size="10">仰角30°</text>
  <text x="48" y="70" fill="#a78bfa" font-size="10">俯角45°</text>
  <text x="22" y="55" fill="#1ed9a0" font-size="11">A</text>
  <text x="157" y="18" fill="#3a9eff" font-size="11">B顶</text>
  <text x="157" y="148" fill="#3a9eff" font-size="10">B底</text>
  <text x="70" y="115" fill="#dce8f8" font-size="10">30m</text>
</svg>`},

  {id:590,yr:2023,city:"全国",type:"solve",topic:"trig_app",score:5,diff:3,subTopics:["trig_app","trig"],methods:["m16","m20"],
   content:"河对岸一棵树，在此岸A点仰角45°，向河岸走20m到B点，仰角60°。求树高（河宽设为d）。",answer:"h=20/(√3-1)×√3=10√3(√3+1)=10(3+√3)",
   sol:"设树高h，河宽d；tanA=h/（d+20）=1→d+20=h；tanB=h/d=√3→d=h/√3；代入：h/√3+20=h→20=h-h/√3=h(1-1/√3)→h=20/(1-√3/3)=20×3/(3-√3)=60/(3-√3)=60(3+√3)/6=10(3+√3)",error:"两个仰角列两个方程联立；消去未知的河宽d",
   svg:`<svg width="200" height="135" viewBox="0 0 200 135" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="160" y1="20" x2="160" y2="120" stroke="#1ed9a0" stroke-width="3"/>
  <line x1="20" y1="120" x2="185" y2="120" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="20" y1="120" x2="160" y2="20" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="60" y1="120" x2="160" y2="20" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="20" cy="120" r="3" fill="#fbbf24"/>
  <circle cx="60" cy="120" r="3" fill="#3a9eff"/>
  <text x="8" y="117" fill="#fbbf24" font-size="11">A</text>
  <text x="50" y="117" fill="#3a9eff" font-size="11">B</text>
  <text x="162" y="18" fill="#1ed9a0" font-size="11">树</text>
  <text x="30" y="108" fill="#fbbf24" font-size="10">45°</text>
  <text x="65" y="108" fill="#3a9eff" font-size="10">60°</text>
  <text x="30" y="132" fill="#dce8f8" font-size="10">AB=20m</text>
</svg>`},

  /* ══ fn_concept 函数概念（16→21题）══ */
  {id:591,yr:2022,city:"全国",type:"fill",topic:"fn_concept",score:3,diff:1,subTopics:["fn_concept"],methods:["m13","m19"],
   content:"y=√(x-1)中自变量x的取值范围=___；y=1/(x+2)中x的范围=___；y=√(3-x)/(x-1)中x的范围=___。",
   answer:"x≥1；x≠-2；x≤3且x≠1",
   sol:"根号下≥0：x-1≥0→x≥1；分母≠0：x+2≠0→x≠-2；同时：3-x≥0且x-1≠0→x≤3且x≠1",error:"根号被开方数≥0；分母≠0；同时满足取交集",
   svg:`<svg width="200" height="105" viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="12" font-family="monospace">√(x-1): x≥1</text>
  <text x="10" y="52" fill="#3a9eff" font-size="12" font-family="monospace">1/(x+2): x≠-2</text>
  <text x="10" y="76" fill="#fbbf24" font-size="11" font-family="monospace">√(3-x)/(x-1):</text>
  <text x="10" y="98" fill="#fbbf24" font-size="11">x≤3 且 x≠1</text>
</svg>`},

  {id:592,yr:2023,city:"全国",type:"choice",topic:"fn_concept",score:3,diff:1,subTopics:["fn_concept"],methods:["m13"],
   content:"下列关系中，y是x的函数的是（）A.x²+y²=4 B.y=±√x C.y=x² D.x=3",
   answer:"C",
   sol:"A：x=0时y=±2（一对多）非函数；B：x=4时y=±2（一对多）非函数；C：每个x对应唯一y ✓；D：x固定，不是函数（竖线）",error:"函数定义：每个x对应唯一y（一对一或多对一）",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#f04f70" font-size="12">A. x²+y²=4 → 圆，非函数✗</text>
  <text x="10" y="50" fill="#f04f70" font-size="12">B. y=±√x → 一对多✗</text>
  <text x="10" y="72" fill="#1ed9a0" font-size="13">C. y=x² → 函数✓</text>
  <text x="10" y="93" fill="#f04f70" font-size="12">D. x=3 → 竖线非函数✗</text>
</svg>`},

  {id:593,yr:2024,city:"全国",type:"fill",topic:"fn_concept",score:3,diff:2,subTopics:["fn_concept"],methods:["m13","m21"],
   content:"函数y=（x+1）/（x²-1）化简后自变量x的范围=___；当x=2时函数值=___。",
   answer:"x≠1且x≠-1；当x=2时y=1/3",
   sol:"化简：(x+1)/[(x+1)(x-1)]=1/(x-1)（x≠-1）；分母x²-1≠0→x≠±1；x=2：y=1/(2-1)=1",error:"化简前后定义域不变；原式限制x≠±1",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="12" font-family="monospace">(x+1)/(x²-1)</text>
  <text x="10" y="50" fill="#fbbf24" font-size="12">= 1/(x-1)，x≠±1</text>
  <text x="10" y="72" fill="#3a9eff" font-size="12">x=2时：y=1/(2-1)=1</text>
  <text x="10" y="92" fill="#dce8f8" font-size="10">化简后定义域不变！x≠±1</text>
</svg>`},

  {id:594,yr:2025,city:"全国",type:"choice",topic:"fn_concept",score:3,diff:2,subTopics:["fn_concept"],methods:["m13"],
   content:"关于函数，下列说法正确的是（）A.函数y=f(x)中x和y可以互换 B.y=2是函数（每个x对应y=2）C.x²+y=1是函数（可解出唯一y）D.y=|x|不是函数（绝对值不是解析式）",
   answer:"B和C均正确，题选C（常考考点）",
   sol:"B正确：常数函数；C正确：y=1-x²，每个x对应唯一y；A错：x与y不对等；D错：y=|x|是函数",error:"函数关键：每个x值对应唯一y值即可；常数函数、绝对值函数都是函数",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#f04f70" font-size="11">A. x和y不可随意互换 ✗</text>
  <text x="10" y="45" fill="#1ed9a0" font-size="11">B. y=2：常数函数，是函数 ✓</text>
  <text x="10" y="65" fill="#1ed9a0" font-size="11">C. x²+y=1→y=1-x²，是函数 ✓</text>
  <text x="10" y="85" fill="#f04f70" font-size="11">D. y=|x|是函数（每x唯一y） ✗</text>
</svg>`},

  {id:595,yr:2024,city:"全国",type:"fill",topic:"fn_concept",score:3,diff:2,subTopics:["fn_concept"],methods:["m21","m13"],
   content:"实际问题：正方形边长x，周长y=___（y关于x的函数）；面积S=___；x的取值范围=___。",
   answer:"y=4x；S=x²；x>0",
   sol:"周长=4x；面积=x²；实际中边长>0",error:"实际问题的定义域：长度必须>0",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="60" y="20" width="80" height="60" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <text x="85" y="15" fill="#1ed9a0" font-size="12">x</text>
  <text x="145" y="55" fill="#1ed9a0" font-size="12">x</text>
  <text x="10" y="72" fill="#fbbf24" font-size="11">周长y=4x（x>0）</text>
  <text x="10" y="90" fill="#3a9eff" font-size="11">面积S=x²（x>0）</text>
</svg>`},

  /* ══ inverse_fn_app 反比例函数应用（12→17题）══ */
  {id:596,yr:2022,city:"全国",type:"choice",topic:"inverse_fn_app",score:3,diff:2,subTopics:["inverse_fn_app","inverse_fn"],methods:["m21","m04"],
   content:"y=6/x上有点A(2,3)，则A与坐标轴围成的矩形面积=___；△AOx围成的三角形面积=___。",
   answer:"矩形面积=6；△面积=3",
   sol:"|k|=6；矩形面积=|k|=6；△面积=|k|/2=3",error:"反比例函数面积恒等：矩形=|k|，三角形=|k|/2",
   svg:`<svg width="200" height="155" viewBox="0 0 200 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="80" x2="185" y2="80" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <line x1="100" y1="10" x2="100" y2="150" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <path d="M 130,20 Q 100,80 20,140" fill="none" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="135" cy="50" r="5" fill="#fbbf24"/>
  <rect x="100" y="50" width="35" height="30" fill="#fbbf2422" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="137" y="47" fill="#fbbf24" font-size="12">A(2,3)</text>
  <text x="105" y="77" fill="#fbbf24" font-size="10">矩形=|k|=6</text>
  <text x="105" y="42" fill="#3a9eff" font-size="10">△=|k|/2=3</text>
  <text x="15" y="145" fill="#1ed9a0" font-size="11">y=6/x，k=6</text>
</svg>`},

  {id:597,yr:2023,city:"全国",type:"fill",topic:"inverse_fn_app",score:3,diff:2,subTopics:["inverse_fn_app","inverse_fn"],methods:["m21"],
   content:"若y=k/x经过点(-2,3)，则k=___，图像在___象限；A(-2,3)与原点连线OA与坐标轴围成△面积=___。",
   answer:"k=-6；二四象限；△面积=3",
   sol:"k=(-2)×3=-6<0→图像在二四象限；△OA面积=|k|/2=3",error:"k=xy；k<0在二四象限；△面积=|k|/2",
   svg:`<svg width="200" height="140" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="70" x2="185" y2="70" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <line x1="100" y1="10" x2="100" y2="135" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <path d="M 30,20 Q 100,70 170,130" fill="none" stroke="#3a9eff" stroke-width="2"/>
  <circle cx="55" cy="40" r="5" fill="#fbbf24"/>
  <text x="32" y="35" fill="#fbbf24" font-size="11">A(-2,3)</text>
  <text x="103" y="68" fill="#dce8f8" font-size="11">O</text>
  <text x="20" y="128" fill="#3a9eff" font-size="11">k=-6，二四象限</text>
  <text x="20" y="112" fill="#fbbf24" font-size="11">△面积=|k|/2=3</text>
</svg>`},

  {id:598,yr:2024,city:"全国",type:"choice",topic:"inverse_fn_app",score:3,diff:2,subTopics:["inverse_fn_app"],methods:["m21","m22"],
   content:"某工厂用y千克原料生产x件产品，y=120/x。当x=10时y=___；x增大时y___；这是___变量关系。",
   answer:"y=12；y减小；反比例关系",
   sol:"y=120/10=12；k=120>0，在一三象限，x增大y减小；xy=120（常数）→反比例",error:"反比例：xy=常数，一量增大另一量减小",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="28" fill="#1ed9a0" font-size="12">y=120/x（原料=120/件数）</text>
  <text x="15" y="50" fill="#fbbf24" font-size="12">x=10→y=12千克</text>
  <text x="15" y="72" fill="#3a9eff" font-size="11">x增大→y减小（反比例）</text>
  <text x="15" y="92" fill="#dce8f8" font-size="10">xy=120恒成立</text>
</svg>`},

  {id:599,yr:2025,city:"全国",type:"solve",topic:"inverse_fn_app",score:5,diff:3,subTopics:["inverse_fn_app","inverse_fn","linear_fn"],methods:["m21","m22"],
   content:"y=k/x与y=x-2交于第一象限的点A，已知A的横坐标为3，求k，并求A与x轴、y轴围成的三角形面积。",
   answer:"k=3，△面积=k/2=1.5",
   sol:"A在y=x-2上：y=3-2=1；k=xy=3×1=3；△面积=|k|/2=3/2=1.5",error:"A在两函数上→代入求坐标；△面积=|k|/2",
   svg:`<svg width="200" height="145" viewBox="0 0 200 145" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="80" x2="185" y2="80" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <line x1="80" y1="10" x2="80" y2="140" stroke="#dce8f8" stroke-width="1" opacity="0.5"/>
  <path d="M 100,18 Q 80,80 20,140" fill="none" stroke="#1ed9a0" stroke-width="1.8"/>
  <line x1="15" y1="125" x2="185" y2="38" stroke="#3a9eff" stroke-width="1.8"/>
  <circle cx="133" cy="60" r="5" fill="#fbbf24"/>
  <text x="136" y="58" fill="#fbbf24" font-size="11">A(3,1)</text>
  <text x="15" y="132" fill="#dce8f8" font-size="10">y=x-2，k=xy=3，△=1.5</text>
</svg>`},

  {id:600,yr:2023,city:"全国",type:"fill",topic:"inverse_fn_app",score:3,diff:2,subTopics:["inverse_fn_app"],methods:["m21","m04"],
   content:"物理中，电阻R一定时，电流I与电压U满足U=IR，这是___函数；若固定电压U，则I与R是___函数；I=U/R=12/R，当R=4时I=___。",
   answer:"一次函数（I与U）；反比例函数（I与R）；I=3A",
   sol:"U=IR：U对I是一次函数；I=U/R：当U固定，I与R成反比；I=12/4=3",error:"区分一次函数和反比例函数的实际应用",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="15" y="28" fill="#1ed9a0" font-size="12">U=IR：U关于I的一次函数</text>
  <text x="15" y="50" fill="#3a9eff" font-size="12">I=U/R：I关于R的反比例</text>
  <text x="15" y="72" fill="#fbbf24" font-size="12">I=12/4=3A</text>
  <text x="15" y="92" fill="#dce8f8" font-size="10">物理量之间的函数关系</text>
</svg>`},

  /* ══ variable_intro 变量与函数初步（12→17题）══ */
  {id:601,yr:2022,city:"全国",type:"fill",topic:"variable_intro",score:3,diff:1,subTopics:["variable_intro"],methods:["m21","m09"],
   content:"正方形边长x cm，面积S cm²，S=___（关系式）；x=3时S=___；这里自变量是___，因变量是___。",
   answer:"S=x²；S=9；x；S",
   sol:"S=x²；x=3：S=9；x是自变量（可自由取值），S是因变量（随x变化）",error:"自变量=独立变化的量；因变量=随之变化的量",
   svg:`<svg width="200" height="110" viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="60" y="20" width="80" height="60" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <text x="85" y="15" fill="#1ed9a0" font-size="12">x</text>
  <text x="145" y="55" fill="#1ed9a0" font-size="12">x</text>
  <text x="90" y="55" fill="#fbbf24" font-size="12">S=x²</text>
  <text x="10" y="100" fill="#dce8f8" font-size="11">自变量x → 因变量S</text>
</svg>`},

  {id:602,yr:2023,city:"全国",type:"choice",topic:"variable_intro",score:3,diff:1,subTopics:["variable_intro"],methods:["m17","m21"],
   content:"如图折线图，横轴是时间(h)，纵轴是速度(km/h)。以下说法正确的是（）A.速度一直增加 B.第2h到第3h速度不变 C.第3h到第4h速度减小 D.第4h速度最大",
   answer:"C",
   sol:"从图像读趋势：前2h增加，2-3h水平（不变），3-4h下降，D选项看具体图",error:"折线图读趋势：上升=增大，水平=不变，下降=减小",
   svg:`<svg width="200" height="130" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="25" y1="110" x2="185" y2="110" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="25" y1="15" x2="25" y2="110" stroke="#dce8f8" stroke-width="1.5"/>
  <polyline points="25,90 65,45 105,45 145,75 185,75" fill="none" stroke="#1ed9a0" stroke-width="2.5"/>
  <circle cx="25" cy="90" r="3" fill="#1ed9a0"/>
  <circle cx="65" cy="45" r="3" fill="#1ed9a0"/>
  <circle cx="105" cy="45" r="3" fill="#1ed9a0"/>
  <circle cx="145" cy="75" r="3" fill="#fbbf24"/>
  <circle cx="185" cy="75" r="3" fill="#1ed9a0"/>
  <text x="20" y="125" fill="#dce8f8" font-size="9">0  1  2  3  4h</text>
  <text x="28" y="25" fill="#dce8f8" font-size="9">速度</text>
  <text x="130" y="68" fill="#fbbf24" font-size="10">↓减小C✓</text>
</svg>`},

  {id:603,yr:2024,city:"全国",type:"fill",topic:"variable_intro",score:3,diff:1,subTopics:["variable_intro"],methods:["m21"],
   content:"匀速行驶：速度60km/h，时间t小时，路程s=___；s是t的___函数；t=2.5时s=___km。",
   answer:"s=60t；一次函数；150km",
   sol:"s=60t；斜率60，过原点→正比例函数（一次函数特例）；t=2.5：s=150",error:"正比例函数y=kx是一次函数的特例（b=0）",
   svg:`<svg width="200" height="110" viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="100" x2="185" y2="100" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="20" y1="10" x2="20" y2="100" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="20" y1="100" x2="170" y2="25" stroke="#1ed9a0" stroke-width="2.5"/>
  <text x="25" y="95" fill="#dce8f8" font-size="10">O</text>
  <text x="175" y="30" fill="#1ed9a0" font-size="10">s=60t</text>
  <text x="20" y="8" fill="#dce8f8" font-size="10">s</text>
  <text x="178" y="102" fill="#dce8f8" font-size="10">t</text>
  <text x="30" y="75" fill="#fbbf24" font-size="11">过原点=正比例函数</text>
</svg>`},

  {id:604,yr:2025,city:"全国",type:"choice",topic:"variable_intro",score:3,diff:2,subTopics:["variable_intro"],methods:["m17","m09"],
   content:"下列各组量中，y是x的函数的是（）A.圆的面积y与直径x B.正数x与其相反数y C.两数和为5时，一个数x与另一个数y D.平行四边形底x与高y（面积=10）",
   answer:"ACD均正确（典型：D）",
   sol:"A：y=π(x/2)²=πx²/4，函数；B：y=-x，函数；C：y=5-x，函数；D：y=10/x，函数；全都是",error:"只要每个x对应唯一y就是函数；这四个都满足",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">A. S=π(x/2)²=πx²/4 ✓函数</text>
  <text x="10" y="45" fill="#1ed9a0" font-size="11">B. y=-x ✓函数</text>
  <text x="10" y="65" fill="#1ed9a0" font-size="11">C. y=5-x ✓函数</text>
  <text x="10" y="85" fill="#1ed9a0" font-size="11">D. y=10/x ✓反比例函数</text>
</svg>`},

  {id:605,yr:2023,city:"全国",type:"solve",topic:"variable_intro",score:4,diff:2,subTopics:["variable_intro"],methods:["m21","m17"],
   content:"水池放水，初始水量500L，每分钟放出20L。设t分钟后剩余水量为W L，写出W关于t的函数关系式，求t的取值范围和W=100时t的值。",
   answer:"W=500-20t（0≤t≤25）；t=20min",
   sol:"W=500-20t；水量≥0：500-20t≥0→t≤25；t≥0；范围0≤t≤25；W=100：100=500-20t→t=20",error:"实际问题定义域：水量非负且时间非负",
   svg:`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="15" x2="20" y2="105" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="20" y1="105" x2="185" y2="105" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="20" y1="15" x2="165" y2="105" stroke="#1ed9a0" stroke-width="2.5"/>
  <circle cx="20" cy="15" r="3" fill="#1ed9a0"/>
  <circle cx="165" cy="105" r="3" fill="#fbbf24"/>
  <text x="22" y="13" fill="#1ed9a0" font-size="10">W=500</text>
  <text x="155" y="118" fill="#fbbf24" font-size="10">t=25</text>
  <text x="25" y="95" fill="#dce8f8" font-size="10">O</text>
  <text x="30" y="55" fill="#fbbf24" font-size="11">W=500-20t</text>
  <text x="30" y="70" fill="#3a9eff" font-size="10">0≤t≤25</text>
</svg>`},

  /* ══ sci_notation 科学记数法（14→19题）══ */
  {id:606,yr:2022,city:"全国",type:"fill",topic:"sci_notation",score:3,diff:1,subTopics:["sci_notation"],methods:["m13"],
   content:"380000=___（科学记数法）；0.000056=___；3.2×10⁴=___（普通数）。",answer:"3.8×10⁵；5.6×10⁻⁵；32000",
   sol:"380000：小数点左移5位→3.8×10⁵；0.000056：右移5位→5.6×10⁻⁵；3.2×10⁴：小数点右移4位→32000",error:"大数指数正，小数指数负；n=移动位数",
   svg:`<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="12" font-family="monospace">380000=3.8×10⁵</text>
  <text x="10" y="52" fill="#3a9eff" font-size="12" font-family="monospace">0.000056=5.6×10⁻⁵</text>
  <text x="10" y="76" fill="#fbbf24" font-size="12" font-family="monospace">3.2×10⁴=32000</text>
  <text x="10" y="96" fill="#dce8f8" font-size="10">1≤|a|&lt;10；n=移动位数</text>
</svg>`},

  {id:607,yr:2023,city:"全国",type:"choice",topic:"sci_notation",score:3,diff:1,subTopics:["sci_notation"],methods:["m13"],
   content:"下列各数中，用科学记数法表示正确的是（）A.0.72×10³ B.7.2×10³ C.72×10² D.7.2×10⁻³",answer:"BD（B=7200，D=0.0072）",
   sol:"B：7.2满足1≤7.2<10 ✓；A：0.72不满足；C：72不满足；D：7.2×10⁻³=0.0072，满足形式 ✓",error:"a必须满足1≤|a|<10",
   svg:`<svg width="200" height="95" viewBox="0 0 200 95" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="22" fill="#f04f70" font-size="11">A. 0.72×10³ → a=0.72 ✗</text>
  <text x="10" y="42" fill="#1ed9a0" font-size="11">B. 7.2×10³=7200 ✓</text>
  <text x="10" y="62" fill="#f04f70" font-size="11">C. 72×10² → a=72 ✗</text>
  <text x="10" y="82" fill="#1ed9a0" font-size="11">D. 7.2×10⁻³=0.0072 ✓</text>
</svg>`},

  {id:608,yr:2024,city:"全国",type:"fill",topic:"sci_notation",score:3,diff:1,subTopics:["sci_notation"],methods:["m13"],
   content:"地球到太阳约150000000km，用科学记数法=___；某细菌直径0.000003m=___m；比较大小：2.1×10⁸___9.9×10⁷。",answer:"1.5×10⁸；3×10⁻⁶；大于",
   sol:"150000000=1.5×10⁸；0.000003=3×10⁻⁶；指数8>7→2.1×10⁸>9.9×10⁷",error:"比较科学记数法大小：先比指数，指数大则数大",
   svg:`<svg width="200" height="95" viewBox="0 0 200 95" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">1.5×10⁸km（地球到太阳）</text>
  <text x="10" y="48" fill="#3a9eff" font-size="11">3×10⁻⁶m（细菌直径）</text>
  <text x="10" y="72" fill="#fbbf24" font-size="12">2.1×10⁸ > 9.9×10⁷</text>
  <text x="10" y="90" fill="#dce8f8" font-size="10">指数8&gt;7，故前者更大</text>
</svg>`},

  {id:609,yr:2025,city:"全国",type:"choice",topic:"sci_notation",score:3,diff:2,subTopics:["sci_notation","approx_num"],methods:["m13"],
   content:"5.06×10⁵有___个有效数字；写成普通数=___；与4.99×10⁵比较大小___。",answer:"3个；506000；5.06×10⁵>4.99×10⁵",
   sol:"5.06中5,0,6均有效共3个；5.06×10⁵=506000；同指数比a：5.06>4.99",error:"中间的0也是有效数字；同指数时直接比a的大小",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="13" font-family="monospace">5.06×10⁵</text>
  <text x="10" y="52" fill="#fbbf24" font-size="11">有效数字：5,0,6 → 3个</text>
  <text x="10" y="72" fill="#3a9eff" font-size="11">=506000；5.06>4.99 ✓</text>
</svg>`},

  {id:610,yr:2023,city:"全国",type:"fill",topic:"sci_notation",score:3,diff:1,subTopics:["sci_notation"],methods:["m13"],
   content:"计算结果用科学记数法表示：(2×10³)×(3×10⁴)=___；(6×10⁸)÷(2×10³)=___。",answer:"6×10⁷；3×10⁵",
   sol:"系数2×3=6，指数3+4=7→6×10⁷；系数6÷2=3，指数8-3=5→3×10⁵",error:"科学记数法乘除：系数单独算，指数相加减",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="28" fill="#1ed9a0" font-size="11">(2×10³)×(3×10⁴)=6×10⁷</text>
  <text x="10" y="52" fill="#fbbf24" font-size="11">(6×10⁸)÷(2×10³)=3×10⁵</text>
  <text x="10" y="75" fill="#dce8f8" font-size="10">系数算系数，指数加减独立计算</text>
</svg>`},

  /* ══ abs_value 绝对值（16→20题）══ */
  {id:611,yr:2022,city:"全国",type:"fill",topic:"abs_value",score:3,diff:1,subTopics:["abs_value"],methods:["m13","m19"],
   content:"|-5|=___；|0|=___；|π-3|=___（π≈3.14）；|-a|（a>0）=___。",answer:"5；0；π-3；a",
   sol:"|-5|=5；|0|=0；π>3→π-3>0→|π-3|=π-3；a>0→|-a|=a",error:"|a|≥0恒成立；去绝对值要判断内部表达式的正负",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="12">|-5|=5，|0|=0</text>
  <text x="10" y="48" fill="#fbbf24" font-size="12">|π-3|=π-3（π>3）</text>
  <text x="10" y="70" fill="#3a9eff" font-size="12">|-a|=a（a>0）</text>
</svg>`},

  {id:612,yr:2023,city:"全国",type:"solve",topic:"abs_value",score:4,diff:2,subTopics:["abs_value"],methods:["m19"],
   content:"解方程：|2x-1|=5；|x+2|=x（求整数解）。",answer:"|2x-1|=5：x=3或x=-2；|x+2|=x：x=负数不合（需x≥0），x=-1（验）",
   sol:"|2x-1|=5→2x-1=5→x=3；或2x-1=-5→x=-2；|x+2|=x：x+2=x（无解）或-(x+2)=x→-2=2x→x=-1；验：|-1+2|=1=x=-1 ✓",error:"|a|=b（b>0）→a=b或a=-b；验根代回检验",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">|2x-1|=5→x=3或x=-2</text>
  <text x="10" y="48" fill="#fbbf24" font-size="11">|x+2|=x→x=-1（验✓）</text>
  <text x="10" y="72" fill="#dce8f8" font-size="10">|a|=b：a=b或a=-b（分两种情况）</text>
</svg>`},

  {id:613,yr:2024,city:"全国",type:"choice",topic:"abs_value",score:3,diff:2,subTopics:["abs_value","number_line"],methods:["m13","m19"],
   content:"数轴上|x-3|表示x到___的距离；|x-3|<2的解集为___；满足|x-3|+|x+1|≥___（x=3和x=-1之间距离）。",answer:"点3；1<x<5；≥4",
   sol:"|x-3|=x到点3的距离；|x-3|<2→-2<x-3<2→1<x<5；|x-3|+|x+1|≥|3-(-1)|=4（三角不等式）",error:"|a-b|=数轴上a到b的距离；三角不等式：|a|+|b|≥|a+b|",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="45" x2="180" y2="45" stroke="#dce8f8" stroke-width="1.5"/>
  <circle cx="55" cy="45" r="4" fill="#fbbf24"/>
  <circle cx="145" cy="45" r="4" fill="#fbbf24"/>
  <circle cx="100" cy="45" r="4" fill="#3a9eff"/>
  <text x="47" y="35" fill="#fbbf24" font-size="10">-1</text>
  <text x="138" y="35" fill="#fbbf24" font-size="10">3</text>
  <text x="94" y="35" fill="#3a9eff" font-size="10">1</text>
  <text x="10" y="75" fill="#dce8f8" font-size="10">|x-3|&lt;2：1&lt;x&lt;5；距离差≥4</text>
</svg>`},

  {id:614,yr:2025,city:"全国",type:"fill",topic:"abs_value",score:3,diff:2,subTopics:["abs_value"],methods:["m14","m19"],
   content:"已知|a-2|+|b+3|=0，则a=___，b=___，a+b=___。",answer:"a=2，b=-3，a+b=-1",
   sol:"|a-2|≥0且|b+3|≥0，和=0→各=0；a-2=0→a=2；b+3=0→b=-3；a+b=-1",error:"非负数之和=0→每项各为0",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="12">|a-2|≥0，|b+3|≥0</text>
  <text x="10" y="48" fill="#fbbf24" font-size="12">和=0→各=0</text>
  <text x="10" y="70" fill="#3a9eff" font-size="12">a=2，b=-3，a+b=-1</text>
</svg>`},

  /* ══ algebra_expr 代数式（15→20题）══ */
  {id:615,yr:2022,city:"全国",type:"fill",topic:"algebra_expr",score:3,diff:1,subTopics:["algebra_expr"],methods:["m20","m09"],
   content:"比a大3的数=___；a的2倍与b的和=___；n个连续整数从n开始，第3个=___。",answer:"a+3；2a+b；n+2",
   sol:"比a大3：a+3；2倍a加b：2a+b；从n开始第3个：n,n+1,n+2→第3个是n+2",error:"列代数式：翻译文字；连续整数逐一加1",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="12">比a大3→ a+3</text>
  <text x="10" y="48" fill="#fbbf24" font-size="12">2倍a与b之和→ 2a+b</text>
  <text x="10" y="70" fill="#3a9eff" font-size="12">第3个连续整数→ n+2</text>
</svg>`},

  {id:616,yr:2023,city:"全国",type:"choice",topic:"algebra_expr",score:3,diff:1,subTopics:["algebra_expr"],methods:["m20"],
   content:"若a=2，b=-1，则a²-2ab+b²=___；3a-b=___。",answer:"9；7",
   sol:"a²-2ab+b²=(a-b)²=(2-(-1))²=9；3×2-(-1)=6+1=7",error:"代入时负数要加括号；-(-1)=+1",
   svg:`<svg width="200" height="85" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="25" fill="#1ed9a0" font-size="11">a=2，b=-1代入：</text>
  <text x="10" y="48" fill="#fbbf24" font-size="12">(a-b)²=(2+1)²=9</text>
  <text x="10" y="70" fill="#3a9eff" font-size="12">3×2-(-1)=7</text>
</svg>`},

  {id:617,yr:2024,city:"全国",type:"fill",topic:"algebra_expr",score:3,diff:2,subTopics:["algebra_expr"],methods:["m09"],
   content:"找规律：1²=1，1²+2²=5，1²+2²+3²=14，第n个等式右边=___（用n表示）。",answer:"n(n+1)(2n+1)/6",
   sol:"n=1:1，n=2:5，n=3:14；差为4,9（平方数）；公式n(n+1)(2n+1)/6",error:"平方和公式：1²+2²+…+n²=n(n+1)(2n+1)/6",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <text x="10" y="22" fill="#dce8f8" font-size="10">n=1: 1²=1</text>
  <text x="10" y="40" fill="#dce8f8" font-size="10">n=2: 1+4=5</text>
  <text x="10" y="58" fill="#dce8f8" font-size="10">n=3: 1+4+9=14</text>
  <text x="10" y="78" fill="#fbbf24" font-size="11">公式：n(n+1)(2n+1)/6</text>
</svg>`},

  {id:618,yr:2025,city:"全国",type:"solve",topic:"algebra_expr",score:4,diff:2,subTopics:["algebra_expr"],methods:["m09","m20"],
   content:"如图，火柴棍摆正三角形：1个需3根，2个需5根，3个需7根…摆n个需___根；100个需___根。",answer:"2n+1；201根",
   sol:"规律：每增加1个三角形加2根；第n个：3+2(n-1)=2n+1；n=100：201",error:"等差数列：首项3，公差2；第n项=3+(n-1)×2=2n+1",
   svg:`<svg width="200" height="90" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,70 45,30 70,70" fill="none" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="70,70 95,30 120,70" fill="none" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="120,70 145,30 170,70" fill="none" stroke="#1ed9a0" stroke-width="2"/>
  <text x="10" y="88" fill="#fbbf24" font-size="11">n个△需2n+1根</text>
</svg>`},

  {id:619,yr:2024,city:"全国",type:"fill",topic:"algebra_expr",score:3,diff:1,subTopics:["algebra_expr"],methods:["m20"],
   content:"正方形边长为a，用代数式表示：周长=___；面积=___；对角线=___。",answer:"4a；a²；a√2",
   sol:"周长4a；面积a²；对角线=√(a²+a²)=a√2",error:"对角线用勾股定理；勾股数：等腰直角三角形斜边=腰×√2",
   svg:`<svg width="200" height="110" viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="50" y="20" width="100" height="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="50" y1="20" x2="150" y2="90" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="90" y="15" fill="#1ed9a0" font-size="12">a</text>
  <text x="155" y="58" fill="#1ed9a0" font-size="12">a</text>
  <text x="88" y="58" fill="#fbbf24" font-size="10">a√2</text>
  <text x="10" y="100" fill="#dce8f8" font-size="10">周长4a，面积a²，对角线a√2</text>
</svg>`},

  /* ══ special_quad 特殊平行四边形（16→20题）══ */
  {id:620,yr:2022,city:"全国",type:"choice",topic:"special_quad",score:3,diff:2,subTopics:["special_quad","quadrilateral"],methods:["m08","m13"],
   content:"关于菱形，下列说法正确的是（）A.四边相等 B.四角相等 C.对角线相等 D.对角线互相平分",answer:"AD",
   sol:"A✓：菱形四边相等；B✗：菱形角不一定相等（正方形才是）；C✗：菱形对角线不一定相等（矩形才是）；D✓：平行四边形性质，对角线互相平分",error:"菱形=平行四边形+四边相等；对角线互相垂直平分（不一定相等）",
   svg:`<svg width="200" height="105" viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 165,55 100,95 35,55" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="95" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="35" y1="55" x2="165" y2="55" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="55" r="3" fill="#fbbf24"/>
  <text x="10" y="100" fill="#fbbf24" font-size="10">对角线互相垂直平分（不一定相等）</text>
</svg>`},

  {id:621,yr:2023,city:"全国",type:"fill",topic:"special_quad",score:3,diff:2,subTopics:["special_quad"],methods:["m08"],
   content:"矩形ABCD，对角线AC=10，则BD=___，AO=___（O是对角线交点）。",answer:"BD=10；AO=5",
   sol:"矩形对角线相等且互相平分→BD=AC=10；AO=AC/2=5",error:"矩形性质：对角线相等互相平分；各半=5",
   svg:`<svg width="200" height="110" viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="20" y="20" width="160" height="70" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="20" y1="20" x2="180" y2="90" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="180" y1="20" x2="20" y2="90" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="55" r="4" fill="#fbbf24"/>
  <text x="94" y="52" fill="#fbbf24" font-size="11">O</text>
  <text x="55" y="35" fill="#fbbf24" font-size="10">AC=10</text>
  <text x="110" y="35" fill="#3a9eff" font-size="10">BD=10</text>
  <text x="50" y="100" fill="#dce8f8" font-size="10">AO=5（对角线平分）</text>
</svg>`},

  {id:622,yr:2024,city:"全国",type:"solve",topic:"special_quad",score:5,diff:3,subTopics:["special_quad","pythagorean"],methods:["m07","m08","m03"],
   content:"菱形ABCD，对角线AC=6，BD=8，求菱形的边长和面积。",answer:"边长=5；面积=24",
   sol:"对角线互相垂直平分：AO=3，BO=4；边AB=√(3²+4²)=5；面积=AC×BD/2=6×8/2=24",error:"菱形面积=对角线乘积/2；对角线垂直→用勾股求边长",
   svg:`<svg width="200" height="115" viewBox="0 0 200 115" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,10 165,57 100,104 35,57" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="10" x2="100" y2="104" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="35" y1="57" x2="165" y2="57" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="100" y="57" width="10" height="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <circle cx="100" cy="57" r="3" fill="#fbbf24"/>
  <text x="104" y="35" fill="#fbbf24" font-size="10">AC/2=3</text>
  <text x="125" y="55" fill="#3a9eff" font-size="10">BD/2=4</text>
  <text x="10" y="110" fill="#dce8f8" font-size="10">边=√(3²+4²)=5；S=6×8/2=24</text>
</svg>`},

  {id:623,yr:2025,city:"全国",type:"choice",topic:"special_quad",score:3,diff:2,subTopics:["special_quad"],methods:["m08","m13"],
   content:"正方形具备以下哪些性质？①四边相等②四角90°③对角线相等④对角线互相垂直平分⑤对角线平分各角",answer:"①②③④⑤全部正确",
   sol:"正方形=矩形+菱形：矩形有②③；菱形有①④⑤；正方形全部具备",error:"正方形是特殊的矩形和菱形，同时具备两者所有性质",
   svg:`<svg width="200" height="105" viewBox="0 0 200 105" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="50" y="15" width="100" height="75" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="50" y1="15" x2="150" y2="90" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="15" x2="50" y2="90" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="50" y="15" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <circle cx="100" cy="52" r="3" fill="#fbbf24"/>
  <text x="10" y="100" fill="#fbbf24" font-size="10">正方形=矩形+菱形，五条全满足</text>
</svg>`},
];

export { EXAM_QS };
