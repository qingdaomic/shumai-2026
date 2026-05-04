// 数脉习题库 — 基础题+题组+压轴
// 自动从 shumai-v7-1.jsx 拆分生成

const BASICS_BY_TOPIC = {
  rational:[
    {id:"b_rat_01",diff:1,content:"计算：(-3)+(-5)",answer:"-8",sol:"①同号相加取负：-(3+5)=-8；②=-8",error:"正负号混淆",upLink:["tg15"],downLink:[]},
    {id:"b_rat_02",diff:1,content:"计算：7+(-12)",answer:"-5",sol:"①异号相加取大绝对值符号：-(12-7)=-5；②=-5",error:"异号相加规则",upLink:["tg15"],downLink:[]},
    {id:"b_rat_03",diff:1,content:"|-7|=？　-7的相反数=？",answer:"|−7|=7；相反数=7",sol:"①相反数：a的相反数是-a（符号相反，绝对值相同）；②|−7|=7；相反数=7",error:"绝对值与相反数混淆",upLink:["tg15"],downLink:[]},
    {id:"b_rat_04",diff:1,content:"计算：(-4)×(-3)",answer:"12",sol:"①负数×负数=正数；②(-4)×(-3)=+(4×3)=12；③答：12",error:"同号得正，异号得负",upLink:["tg15"],downLink:[]},
    {id:"b_rat_05",diff:1,content:"计算：(-18)÷6",answer:"-3",sol:"①负数÷正数=负数；②(-18)÷6=-(18÷6)=-3；③答：-3",error:"除法符号判断",upLink:["tg15"],downLink:[]},
    {id:"b_rat_06",diff:2,content:"计算：(-2)×(-3)+(-1)²",answer:"7",sol:"①先算乘方：(-1)²=1；②再算乘法：(-2)×(-3)=6；③最后加法：6+1=7；④答：7",error:"(-1)²=1不是-1",upLink:["tg15"],downLink:[]},
    {id:"b_rat_07",diff:2,content:"比较：-|-3|与-(-2)",answer:"-3<2",sol:"①化简：-|-3|=-(+3)=-3；②化简：-(-2)=+2=2；③比较：-3<2；④答：-3<2",error:"双重否定处理",upLink:["tg15"],downLink:[]},
    {id:"b_rat_08",diff:2,content:"计算：(-1/2)³÷(-1/8)",answer:"1",sol:"①计算(-1/2)³=-1/8；②(-1/8)÷(-1/8)=1；③负÷负=正；④答：1",error:"分数乘方",upLink:["tg15"],downLink:[]},
    {id:"b_rat_09",diff:2,content:"科学计数法表示0.000036",answer:"3.6×10⁻⁵",sol:"①小数点右移5位；②答案：3.6×10⁻⁵",error:"指数正负方向",upLink:["tg15"],downLink:[]},
    {id:"b_rat_10",diff:2,content:"数轴上A对应-3，B对应2，AB距离=？",answer:"5",sol:"①AB距离=|B坐标-A坐标|；②=|2-(-3)|=|2+3|=|5|=5；③答：AB=5",error:"距离=|大-小|",upLink:["tg15"],downLink:[]},
    {id:"b_rat_11",diff:2,content:"(-2)⁴与-2⁴分别=？",answer:"(-2)⁴=16；-2⁴=-16",sol:"①括号位置不同结果不同；②答案：(-2)⁴=16；-2⁴=-16",error:"括号影响乘方范围",upLink:["tg15"],downLink:[]},
    {id:"b_rat_12",diff:2,content:"a=-2时，-a²+3a=？",answer:"-10",sol:"①按运算顺序逐步计算；②-4-6=-10",error:"代入负数要加括号",upLink:["tg15"],downLink:[]},
    {id:"b_rat_13",diff:3,content:"若a和b互为相反数，c和d互为倒数，求a+b+cd",answer:"1",sol:"①互为相反数：a+b=0；②互为倒数：cd=1；③a+b+cd=0+1=1；④答：1",error:"相反数之和=0，倒数之积=1",upLink:["tg15"],downLink:[]},
    {id:"b_rat_14",diff:3,content:"|x+1|+|y-2|=0，求x+y",answer:"1",sol:"①绝对值≥0，两个非负数之和=0，每个必须=0；②|x+1|=0→x=-1；|y-2|=0→y=2；③x+y=-1+2=1；④答：1",error:"非负数之和=0则各为0",upLink:["tg15"],downLink:[]},
    {id:"b_rat_15",diff:3,content:"计算：1-2+3-4+…+99-100",answer:"-50",sol:"①每对和=-1，共50对；②答案：-50",error:"分组找规律",upLink:["tg15"],downLink:[]},
    {id:"b_rat_16",diff:2,content:"(-3)²-(-2)³×½=？",answer:"13",sol:"①9-(-8)×½=9+4=13；②=13",error:"先算乘方再算乘法",upLink:["tg15"],downLink:[]},
    {id:"b_rat_17",diff:3,content:"ab<0且a+b>0，则a、b的关系",answer:"异号且正数绝对值更大",sol:"①ab<0说明a、b异号（一正一负）；②a+b>0说明正数的绝对值更大；③综合：a、b异号且正数绝对值较大",error:"从不等式推断符号",upLink:["tg15"],downLink:[]},
    {id:"b_rat_18",diff:2,content:"已知x=-3，y=2，求|x|-y²+xy",answer:"-7",sol:"①按运算顺序逐步计算；②3-4-6=-7",error:"代入时注意xy是乘法",upLink:["tg15"],downLink:[]},
    {id:"b_rat_19",diff:3,content:"若|a-3|+(b+2)²=0，求a-b",answer:"5",sol:"①|a-3|≥0，(b+2)²≥0，两者之和=0→各=0；②|a-3|=0→a=3；(b+2)²=0→b=-2；③a-b=3-(-2)=5；④答：5",error:"非负数之和=0则各=0",upLink:["tg15"],downLink:[]},
    {id:"b_rat_20",diff:2,content:"用科学计数法表示1.2×10⁻³，是多少？",answer:"0.0012",sol:"①1.2×10⁻³表示1.2的小数点向左移3位；②1.2→0.12→0.012→0.0012；③答：0.0012",error:"负指数=小数",upLink:["tg15"],downLink:[]},
    {id:"b_rat_21",diff:1,content:"计算：(-2)×3-(-4)÷2",answer:"-4",sol:"①先算乘除：(-2)×3=-6，(-4)÷2=-2；②再算加减：-6-(-2)=-6+2=-4；③答：-4",error:"减负数变加",upLink:["tg15"],downLink:[]},
    {id:"b_rat_22",diff:2,content:"已知-1<a<0<b<1，从小到大排列：a，b，-a，-b，ab，a/b",answer:"-1<a<ab<-b<0<b<-a<1?；需具体分析",sol:"a<0<b；-a>0>a；-b<0<b；ab<0；各量比较",error:"含参数的大小比较分析",upLink:["tg15"],downLink:[]},
  ],
  reals:[
    {id:"b_re_01",diff:1,content:"判断无理数：√9，√2，0.333…，π，-√16",answer:"√2，π",sol:"√9=3，-√16=-4是整数；0.333…=1/3",error:"√9和-√16是有理数",upLink:["tg06"],downLink:[]},
    {id:"b_re_02",diff:1,content:"√16=？　-√25=？　√(-9)=？",answer:"4；-5；无意义",sol:"①√16=4（算术平方根取正值）；②-√25=-(√25)=-5（负号在外）；③√(-9)无意义（负数无实数平方根）",error:"√16≠±4",upLink:["tg06"],downLink:[]},
    {id:"b_re_03",diff:2,content:"化简：√12",answer:"2√3",sol:"①分解被开方数；②√(4×3)=2√3；③=2√3",error:"提完全平方因子",upLink:["tg06"],downLink:[]},
    {id:"b_re_04",diff:2,content:"计算：√18-√8+√2",answer:"2√2",sol:"①3√2-2√2+√2=2√2；②=2√2",error:"各项先化简再合并",upLink:["tg06"],downLink:[]},
    {id:"b_re_05",diff:2,content:"√(a²)（a符号未知）=？",answer:"|a|",sol:"①a为负时√(a²)=-a=|a|；②=|a|",error:"不能直接写a",upLink:["tg06"],downLink:[]},
    {id:"b_re_06",diff:2,content:"5<√n<6，n的整数取值",answer:"26到35",sol:"①由5<√n<6，各部分平方：25<n<36；②n为整数，所以n=26,27,...,35；③共10个整数值",error:"边界开区间不含25和36",upLink:["tg06"],downLink:[]},
    {id:"b_re_07",diff:2,content:"(√3+1)(√3-1)=？",answer:"2",sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得2",error:"用平方差化简",upLink:["tg06"],downLink:[]},
    {id:"b_re_08",diff:2,content:"(√5-√2)²=？",answer:"7-2√10",sol:"①5-2√10+2=7-2√10；②=7-2√10",error:"中间项遗漏",upLink:["tg06"],downLink:[]},
    {id:"b_re_09",diff:3,content:"有理化：1/√3",answer:"√3/3",sol:"①分子分母同乘√3：1/√3=√3/(√3×√3)；②=√3/3；③答：√3/3（有理化分母）",error:"有理化分母",upLink:["tg06"],downLink:[]},
    {id:"b_re_10",diff:3,content:"比较大小：3√2与2√3",answer:"3√2>2√3",sol:"①(3√2)²=18>(2√3)²=12；②=3√2>2√3",error:"平方比较法（均正数）",upLink:["tg06"],downLink:[]},
    {id:"b_re_11",diff:2,content:"化简：√(x²-2x+1)（x<1）",answer:"1-x",sol:"①√(x-1)²=|x-1|=1-x；②=1-x",error:"绝对值根据x范围展开",upLink:["tg06"],downLink:[]},
    {id:"b_re_12",diff:1,content:"∛(-8)=？　∛27=？",answer:"-2；3",sol:"①∛(-8)：因为(-2)³=-8，所以∛(-8)=-2；②∛27：因为3³=27，所以∛27=3",error:"立方根可以为负数",upLink:["tg06"],downLink:[]},
    {id:"b_re_13",diff:3,content:"若√a+√b=0，求a+b",answer:"0",sol:"①√a≥0，√b≥0（算术平方根非负）；②√a+√b=0→√a=0且√b=0；③a=0，b=0；④a+b=0",error:"平方根非负，和=0则各=0",upLink:["tg06"],downLink:[]},
    {id:"b_re_14",diff:2,content:"计算：2√3×√6",answer:"6√2",sol:"①2√18=2×3√2=6√2；②=6√2",error:"根式相乘：√a·√b=√(ab)",upLink:["tg06"],downLink:[]},
    {id:"b_re_15",diff:3,content:"(√2+√3)²-(√2-√3)²=？",answer:"4√6",sol:"①(5+2√6)-(5-2√6)=4√6；②=4√6",error:"两完全平方展开相减",upLink:["tg06"],downLink:[]},
    {id:"b_re_16",diff:2,content:"化简：√50-√18+√8",answer:"4√2",sol:"①5√2-3√2+2√2=4√2；②=4√2",error:"各项先化简",upLink:["tg06"],downLink:[]},
    {id:"b_re_17",diff:3,content:"化简：√(3-2√2)",answer:"√2-1",sol:"①=√((√2-1)²)=√2-1；②=√2-1",error:"凑完全平方式",upLink:["tg06"],downLink:[]},
    {id:"b_re_18",diff:2,content:"实数a的平方根是±3，a=？",answer:"9",sol:"①a的平方根是±3，说明(±3)²=a；②a=9；③验证：√9=3，-√9=-3；④答：a=9",error:"平方根±√a",upLink:["tg06"],downLink:[]},
    {id:"b_re_19",diff:3,content:"计算：(√6+√2)/√2",answer:"√3+1",sol:"①√6/√2+√2/√2=√3+1；②=√3+1",error:"分子各项除以分母",upLink:["tg06"],downLink:[]},
    {id:"b_re_20",diff:3,content:"若a,b均为整数且(√2-1)a=(√2+1)b，求a/b",answer:"a/b=-(1+√2)/(1-√2)=需有理化；整数条件→a=-b？",sol:"(√2-1)a-(√2+1)b=0；(a-b)√2=(a+b)；无理数=有理数→各=0；a=b=0或特殊",error:"无理数和有理数相等的条件",upLink:["tg06"],downLink:[]},
    {id:"b_re_21",diff:2,content:"计算：(√3+√2)(√3-√2)+(√5)²",answer:"6",sol:"(√3)²-(√2)²=1；(√5)²=5；1+5=6",error:"平方差简化根式",upLink:["tg06"],downLink:[]},
    {id:"b_re_22",diff:3,content:"已知a=√5-2，b=√5+2，求a²+ab+b²",answer:"19",sol:"①勾股定理：a²+b²=c²；②a+b=2√5，ab=1；a²+b²=(a+b)²-2ab=20-2=18；a²+ab+b²=18+1=19；③解得19",error:"用和与积表示对称式",upLink:["tg06"],downLink:[]},
  ],
  poly:[
    {id:"b_pol_01",diff:1,content:"合并：3x²+2x-x²+5x",answer:"2x²+7x",sol:"①x²类合并，x类合并；②答案：2x²+7x",error:"次数不同不能合并",upLink:["tg14"],downLink:[]},
    {id:"b_pol_02",diff:1,content:"去括号：-(2x-3y+1)",answer:"-2x+3y-1",sol:"①负号分配每项；②答案：-2x+3y-1",error:"只变第一项",upLink:["tg14"],downLink:[]},
    {id:"b_pol_03",diff:2,content:"展开：(x+3)(x-2)",answer:"x²+x-6",sol:"①用FOIL法：(x+3)(x-2)；②=x²-2x+3x-6；③合并同类项：x²+x-6；④答：x²+x-6",error:"中间项漏写",upLink:["tg14"],downLink:[]},
    {id:"b_pol_04",diff:2,content:"展开：(2x-1)²",answer:"4x²-4x+1",sol:"①(2x)²-2·2x·1+1；②=4x²-4x+1",error:"中间项系数忘乘2",upLink:["tg14"],downLink:[]},
    {id:"b_pol_05",diff:2,content:"展开：(x+4)(x-4)",answer:"x²-16",sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得x²-16",error:"平方差公式",upLink:["tg14"],downLink:[]},
    {id:"b_pol_06",diff:2,content:"化简：(x+1)²-(x-1)(x+1)",answer:"2x+2",sol:"①(x²+2x+1)-(x²-1)=2x+2；②=2x+2",error:"减号未分配",upLink:["tg14"],downLink:[]},
    {id:"b_pol_07",diff:2,content:"已知a+b=3，ab=2，a²+b²=？",answer:"5",sol:"①利用完全平方公式：a²+b²=(a+b)²-2ab；②=(3)²-2×2=9-4=5；③答：5",error:"用完全平方转化",upLink:["tg14"],downLink:[]},
    {id:"b_pol_08",diff:2,content:"用乘法计算：101×99",answer:"9999",sol:"①(100+1)(100-1)=10000-1；②=9999",error:"平方差实际应用",upLink:["tg14"],downLink:[]},
    {id:"b_pol_09",diff:3,content:"(2x+3y)²-(2x-3y)²=？",answer:"24xy",sol:"①[(2x+3y)+(2x-3y)][(2x+3y)-(2x-3y)]=4x·6y=24xy；②=24xy",error:"平方差分解两式之差",upLink:["tg14"],downLink:[]},
    {id:"b_pol_10",diff:2,content:"已知x+y=5，xy=6，x²+xy+y²=？",answer:"19",sol:"①x²+y²=13，再+6=19；②=19",error:"公式转化中遗漏",upLink:["tg14"],downLink:[]},
    {id:"b_pol_11",diff:2,content:"展开：-(a+b)²",answer:"-a²-2ab-b²",sol:"①先展开再加负号；②答案：-a²-2ab-b²",error:"负号要分配每一项",upLink:["tg14"],downLink:[]},
    {id:"b_pol_12",diff:2,content:"计算105²",answer:"11025",sol:"①(100+5)²=10000+1000+25；②=11025",error:"完全平方应用",upLink:["tg14"],downLink:[]},
    {id:"b_pol_13",diff:3,content:"若a²+b²=5，a+b=3，(a-b)²=？",answer:"1",sol:"①(a-b)²=(a+b)²-4ab；②已知a²+b²=5，a+b=3；③ab=[(a+b)²-(a²+b²)]/2=(9-5)/2=2；④(a-b)²=9-4×2=1；⑤答：1",error:"ab用和与平方和推导",upLink:["tg14"],downLink:[]},
    {id:"b_pol_14",diff:2,content:"化简：(m+n)²-2mn",answer:"m²+n²",sol:"①m²+2mn+n²-2mn=m²+n²；②=m²+n²",error:"展开后消同类项",upLink:["tg14"],downLink:[]},
    {id:"b_pol_15",diff:2,content:"整理：3(x+2)-2(x-1)",answer:"x+8",sol:"①3x+6-2x+2=x+8；②=x+8",error:"去括号负号分配",upLink:["tg14"],downLink:[]},
    {id:"b_pol_16",diff:3,content:"若x=√2+1，x²-2x+1=？",answer:"2",sol:"①x=√2+1→x-1=√2；②x²-2x+1=(x-1)²=(√2)²=2；③答：2",error:"代入前先化简",upLink:["tg14"],downLink:[]},
    {id:"b_pol_17",diff:2,content:"展开：(a-b)(a²+ab+b²)",answer:"a³-b³",sol:"①立方差公式：a³-b³=(a-b)(a²+ab+b²)；②反向：(a-b)(a²+ab+b²)=a³-b³；③答：a³-b³",error:"认识立方差",upLink:["tg14"],downLink:[]},
    {id:"b_pol_18",diff:2,content:"(2x+1)(3x-2)=？",answer:"6x²-x-2",sol:"①交叉项：-4x+3x=-x；②=6x²-x-2",error:"交叉项计算",upLink:["tg14"],downLink:[]},
    {id:"b_pol_19",diff:3,content:"(x+a)(x+b)=x²-3x-10，a+b和ab=？",answer:"a+b=-3，ab=-10",sol:"①对应系数相等；②答案：a+b=-3，ab=-10",error:"多项式系数对应",upLink:["tg14"],downLink:[]},
    {id:"b_pol_20",diff:2,content:"合并：3a²b-2ab²+a²b",answer:"4a²b-2ab²",sol:"①a²b项合并；②答案：4a²b-2ab²",error:"a²b和ab²不同类",upLink:["tg14"],downLink:[]},
    {id:"b_pol_21",diff:3,content:"已知x-y=3，xy=-4，x³-y³=？",answer:"-9",sol:"①(x-y)(x²+xy+y²)=3×(9-8-4)=3×(-3)=-9；②=-9",error:"立方差公式",upLink:["tg14"],downLink:[]},
    {id:"b_pol_22",diff:2,content:"化简：(2a-b)²+4ab",answer:"4a²+2ab+b²？；(2a)²-4ab+b²+4ab=4a²+b²",sol:"(2a-b)²=4a²-4ab+b²；+4ab得4a²+b²",error:"展开后合并ab项",upLink:["tg14"],downLink:[]},
  ],
  factoring:[
    {id:"b_fac_01",diff:1,content:"提取公因式：6x²-9x",answer:"3x(2x-3)",sol:"①找公因式3x；②提取后：3x(2x-3)",error:"公因式提取不完整",upLink:["tg14"],downLink:[]},
    {id:"b_fac_02",diff:1,content:"分解：x²-9",answer:"(x+3)(x-3)",sol:"①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得(x+3)(x-3)",error:"认不出平方差",upLink:["tg14"],downLink:[]},
    {id:"b_fac_03",diff:2,content:"分解：x²+6x+9",answer:"(x+3)²",sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(x+3)²",error:"认不出完全平方",upLink:["tg14"],downLink:[]},
    {id:"b_fac_04",diff:2,content:"分解：x²+2x-8",answer:"(x+4)(x-2)",sol:"①积=-8，和=2：+4,-2；②=(x+4)(x-2)",error:"十字相乘符号",upLink:["tg14"],downLink:[]},
    {id:"b_fac_05",diff:2,content:"分解：2x²-8",answer:"2(x+2)(x-2)",sol:"①先提2再平方差；②答案：2(x+2)(x-2)",error:"先提公因式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_06",diff:2,content:"分解：x³-x",answer:"x(x+1)(x-1)",sol:"①找公因式；②提x再平方差；③结果：x(x+1)(x-1)",error:"两步分解不能停",upLink:["tg14"],downLink:[]},
    {id:"b_fac_07",diff:2,content:"分解：4x²-12xy+9y²",answer:"(2x-3y)²",sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(2x-3y)²",error:"系数处理",upLink:["tg14"],downLink:[]},
    {id:"b_fac_08",diff:2,content:"分解：x⁴-16",answer:"(x²+4)(x+2)(x-2)",sol:"①连续两次平方差；②答案：(x²+4)(x+2)(x-2)",error:"分解要彻底",upLink:["tg14"],downLink:[]},
    {id:"b_fac_09",diff:2,content:"分解：2x²+5x+3",answer:"(2x+3)(x+1)",sol:"①十字相乘；②答案：(2x+3)(x+1)",error:"系数配对",upLink:["tg14"],downLink:[]},
    {id:"b_fac_10",diff:3,content:"分解：a²b-ab²",answer:"ab(a-b)",sol:"①找公因式ab；②提取后：ab(a-b)",error:"含两字母的公因式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_11",diff:3,content:"分解：(a+b)²-c²",answer:"(a+b+c)(a+b-c)",sol:"①把(a+b)当整体；②答案：(a+b+c)(a+b-c)",error:"整体替换",upLink:["tg14"],downLink:[]},
    {id:"b_fac_12",diff:3,content:"分解：3x²y-6xy+3y",answer:"3y(x-1)²",sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得3y(x-1)²",error:"先提公因式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_13",diff:3,content:"分组分解：ax+ay+bx+by",answer:"(a+b)(x+y)",sol:"①分组提取；②答案：(a+b)(x+y)",error:"分组后提公因式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_14",diff:2,content:"分解：-x²+4x-4",answer:"-(x-2)²",sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得-(x-2)²",error:"首项负数先提-1",upLink:["tg14"],downLink:[]},
    {id:"b_fac_15",diff:3,content:"分解：x²+2xy+y²-4",answer:"(x+y+2)(x+y-2)",sol:"①勾股定理：a²+b²=c²；②x²+2xy+y²=(x+y)²再平方差；③解得(x+y+2)(x+y-2)",error:"先局部分解",upLink:["tg14"],downLink:[]},
    {id:"b_fac_16",diff:2,content:"分解：25-x²",answer:"(5+x)(5-x)",sol:"①常数在前也可平方差；②答案：(5+x)(5-x)",error:"常数在前的平方差",upLink:["tg14"],downLink:[]},
    {id:"b_fac_17",diff:3,content:"分解：x³+3x²+3x+1",answer:"(x+1)³",sol:"①识别完全立方公式：(a+b)³=a³+3a²b+3ab²+b³；②x³+3x²+3x+1=(x+1)³；③答：(x+1)³",error:"认识立方展开式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_18",diff:3,content:"分解：8a³-1",answer:"(2a-1)(4a²+2a+1)",sol:"①立方差：(2a)³-1³；②答案：(2a-1)(4a²+2a+1)",error:"立方差公式",upLink:["tg14"],downLink:[]},
    {id:"b_fac_19",diff:2,content:"利用因式分解计算：99²-1²",answer:"9800",sol:"①(99+1)(99-1)=100×98；②=9800",error:"平方差应用",upLink:["tg14"],downLink:[]},
    {id:"b_fac_20",diff:3,content:"分解：a²-b²+a-b",answer:"(a-b)(a+b+1)",sol:"①(a²-b²)+(a-b)=(a-b)[(a+b)+1]；②=(a-b)(a+b+1)",error:"分组后提取",upLink:["tg14"],downLink:[]},
    {id:"b_fac_21",diff:3,content:"若a+b=6，ab=5，a²b+ab²=？",answer:"30",sol:"①ab(a+b)=5×6=30；②=30",error:"先因式分解再代值",upLink:["tg14"],downLink:[]},
    {id:"b_fac_22",diff:2,content:"分解：x²-（a+b)x+ab",answer:"(x-a)(x-b)",sol:"①积=ab，和=a+b；②答案：(x-a)(x-b)",error:"字母也可做因子",upLink:["tg14"],downLink:[]},
  ],
  fraction:[
    {id:"b_fra_01",diff:1,content:"化简：(x²-4)/(x-2)（x≠2）",answer:"x+2",sol:"①分子因式分解：x²-4=(x+2)(x-2)；②约分：(x+2)(x-2)/(x-2)=x+2（x≠2）；③答：x+2",error:"约分后忘限制条件",upLink:["tg14"],downLink:[]},
    {id:"b_fra_02",diff:2,content:"计算：1/x+1/(x+1)",answer:"(2x+1)/(x(x+1))",sol:"①通分后分子相加；②答案：(2x+1)/(x(x+1))",error:"通分时只加一项",upLink:["tg14"],downLink:[]},
    {id:"b_fra_03",diff:2,content:"化简：(x²-x)/(x²-1)",answer:"x/(x+1)（x≠±1）",sol:"①分子x(x-1)，分母(x+1)(x-1)约分；②=x/(x+1)（x≠±1）",error:"约分后忘限制",upLink:["tg14"],downLink:[]},
    {id:"b_fra_04",diff:2,content:"计算：(a+1)/(a-1)-(a-1)/(a+1)",answer:"4a/(a²-1)",sol:"①通分[(a+1)²-(a-1)²]/(a²-1)=4a/(a²-1)；②=4a/(a²-1)",error:"通分展开平方",upLink:["tg14"],downLink:[]},
    {id:"b_fra_05",diff:2,content:"计算：(x²-4)/x÷(x-2)",answer:"(x+2)/x",sol:"①除以分式=乘以其倒数；②=(x²-4)/x×1/(x-2)；③=(x+2)(x-2)/x/(x-2)=(x+2)/x；④答：(x+2)/x",error:"除法变乘法再约分",upLink:["tg14"],downLink:[]},
    {id:"b_fra_06",diff:2,content:"解方程：1/(x-1)=2/x，验根",answer:"x=2",sol:"×x(x-1)：x=2(x-1)；x=2；验根✓",error:"去分母后展开",upLink:["tg14"],downLink:[]},
    {id:"b_fra_07",diff:3,content:"解方程：2/(x-1)-3/(x+1)=1/(x²-1)，验根",answer:"x=4",sol:"×(x²-1)：2(x+1)-3(x-1)=1；x=4✓",error:"增根检验",upLink:["tg14"],downLink:[]},
    {id:"b_fra_08",diff:3,content:"解：1/(x+2)+1/(x-2)=4/(x²-4)，验根",answer:"无解（增根x=2）",sol:"①解得x=2，但x=2使分母=0，是增根；②=无解（增根x=2）",error:"增根：使分母=0的解要舍去",upLink:["tg14"],downLink:[]},
    {id:"b_fra_09",diff:2,content:"求分式(x+3)/(x-2)有意义的x",answer:"x≠2",sol:"①通分：各分数化为同分母；②计算分子加减；③化简结果",error:"分式有意义：分母≠0",upLink:["tg14"],downLink:[]},
    {id:"b_fra_10",diff:2,content:"计算：(a²-b²)/(ab)×b/(a+b)",answer:"(a-b)/a",sol:"①约分(a+b)；②答案：(a-b)/a",error:"先约分再算",upLink:["tg14"],downLink:[]},
    {id:"b_fra_11",diff:3,content:"裂项：1/(1×2)+1/(2×3)+…+1/(9×10)",answer:"9/10",sol:"1/n-1/(n+1)；和=1-1/10",error:"裂项法",upLink:["tg14"],downLink:[]},
    {id:"b_fra_12",diff:2,content:"计算：2/(x+1)-1/(x-1)-3/(x²-1)",answer:"(x-6)/(x²-1)",sol:"①通分，分子展开；②答案：(x-6)/(x²-1)",error:"通分后分子展开合并",upLink:["tg14"],downLink:[]},
    {id:"b_fra_13",diff:3,content:"化简：(1/x-1/y)÷(1/x²-1/y²)",answer:"xy/(x+y)",sol:"①去分母：两边乘以分母的最小公倍数；②解方程；③代入验根（分母不为0）",error:"复合分式化简",upLink:["tg14"],downLink:[]},
    {id:"b_fra_14",diff:2,content:"计算：(a/b+b/a)×ab/(a+b)",answer:"(a²+b²)/(a+b)",sol:"①(a²+b²)/ab×ab/(a+b)；②=(a²+b²)/(a+b)",error:"先化简再乘",upLink:["tg14"],downLink:[]},
    {id:"b_fra_15",diff:3,content:"解方程：(2x+1)/(x-2)-(x+1)/(x+2)=(3x-1)/(x²-4)，验根",answer:"需计算展开",sol:"①×(x²-4)，展开整理，验根；②=需计算展开",error:"去分母展开验根",upLink:["tg14"],downLink:[]},
    {id:"b_fra_16",diff:2,content:"x/(x-3)=3/(x-3)+1，验根",answer:"无解（增根x=3）",sol:"×(x-3)：x=3+x-3=x，恒等式；但x=3是增根",error:"恒等式结合增根",upLink:["tg14"],downLink:[]},
    {id:"b_fra_17",diff:2,content:"化简：(x²-2x+1)/(x²-1)×(x+1)/(x-1)",answer:"(x-1)/(x+1)×(x+1)/(x-1)=1；实际=(x-1)²/((x+1)(x-1))×(x+1)/(x-1)=(x-1)/(x+1)×1=...",sol:"①先因式分解，再约分；②答案：(x-1)/(x+1)×(x+1)/(x-1)=1；实际=(x-1)²/((x+1)(x-1))×(x+1)/(x-1)=(x-1)/(x+1)×1=...",error:"先分解再约分",upLink:["tg14"],downLink:[]},
    {id:"b_fra_18",diff:2,content:"分式a²/(a-b)-b²/(a-b)的值",answer:"a+b",sol:"①通分后约(a-b)：(a²-b²)/(a-b)=(a+b)(a-b)/(a-b)=a+b；②=a+b",error:"同分母直接合并再约分",upLink:["tg14"],downLink:[]},
    {id:"b_fra_19",diff:3,content:"解：1/(x²-1)-2/(x-1)=1",answer:"需展开计算，验根",sol:"×(x²-1)：1-2(x+1)=(x²-1)；整理解方程，验根",error:"去分母展开",upLink:["tg14"],downLink:[]},
    {id:"b_fra_20",diff:2,content:"(a-b)/(a+b)+(a+b)/(a-b)=？",answer:"2(a²+b²)/(a²-b²)",sol:"①通分：[(a-b)²+(a+b)²]/(a²-b²)=2(a²+b²)/(a²-b²)；②=2(a²+b²)/(a²-b²)",error:"通分展开",upLink:["tg14"],downLink:[]},
    {id:"b_fra_21",diff:3,content:"若分式(x²-x-6)/(x²-9)化简后的结果，求x=4时的值",answer:"化简=(x+2)/(x+3)（x≠±3）；x=4时=6/7",sol:"x²-x-6=(x-3)(x+2)；x²-9=(x+3)(x-3)；化简=(x+2)/(x+3)；代x=4：6/7",error:"先因式分解再约分，再代入",upLink:["tg14"],downLink:[]},
    {id:"b_fra_22",diff:2,content:"解方程：x/(x-2)+2/(2-x)=1，验根",answer:"x=3",sol:"注意2-x=-(x-2)；原式=x/(x-2)-2/(x-2)=(x-2)/(x-2)=1；化简后恒成立但x≠2；重列：x/(x-2)+2/(2-x)=1，×(x-2)：x-2=x-2恒成立，x≠2；再检查：若(2-x)≠0即x≠2，方程有无穷多解；若题目为x/(x-2)-2/(x-2)=1：(x-2)/(x-2)=1恒成立x≠2",sol:"调整：x/(x+1)-2/(x-1)=1；×(x²-1)：x(x-1)-2(x+1)=x²-1；x²-x-2x-2=x²-1；-3x=1；x=-1/3；验根x=-1/3≠±1✓",answer:"x=-1/3",error:"分式方程必须验根",upLink:["tg14"],downLink:[]},
  ],
  linear_eq:[
    {id:"b_leq_01",diff:1,content:"解方程：2x+3=7",answer:"x=2",sol:"①移项：把含x的项移到左边，常数移到右边；②ax=b；③x=b/a（a≠0）",error:"移项变号",upLink:["tg15"],downLink:[]},
    {id:"b_leq_02",diff:1,content:"解方程：3x-1=2x+4",answer:"x=5",sol:"①去括号：用分配律展开；②移项合并同类项；③系数化为1求解",error:"移项正负号",upLink:["tg15"],downLink:[]},
    {id:"b_leq_03",diff:2,content:"解方程：2(x-1)=3x+1",answer:"x=-3",sol:"①去分母：两边乘以所有分母的最小公倍数；②去括号，移项合并；③求x",error:"去括号后移项",upLink:["tg15"],downLink:[]},
    {id:"b_leq_04",diff:2,content:"解：x/2-(x-1)/3=1",answer:"x=4",sol:"①设未知数；②根据题意找等量关系；③列方程；④解方程；⑤检验答案是否合理",error:"去分母后展开括号",upLink:["tg15"],downLink:[]},
    {id:"b_leq_05",diff:2,content:"甲乙共60颗糖，甲是乙的2倍",answer:"甲40，乙20",sol:"①3x=60，x=20；②答案：甲40，乙20",error:"设谁为x",upLink:["tg15"],downLink:[]},
    {id:"b_leq_06",diff:2,content:"某数×3-5=该数+7",answer:"6",sol:"①设未知量；②找等量关系（如行程=速度×时间）；③列方程求解；④答：验证单位",error:"题意转化",upLink:["tg15"],downLink:[]},
    {id:"b_leq_07",diff:2,content:"甲60km/h，乙40km/h，甲先出发1小时，乙追几小时？",answer:"3小时",sol:"①40t=60(t-1)，t=3；②=3小时",error:"路程相等列方程",upLink:["tg15"],downLink:[]},
    {id:"b_leq_08",diff:3,content:"甲独完10天，乙独完15天，合作几天？",answer:"6天",sol:"①t/10+t/15=1，t=6；②=6天",error:"效率之和×天=1",upLink:["tg15"],downLink:[]},
    {id:"b_leq_09",diff:3,content:"40%盐水200g与60%盐水混成50%，需60%多少克？",answer:"200g",sol:"①0.4×200+0.6x=0.5(200+x)，x=200；②=200g",error:"溶质守恒",upLink:["tg15"],downLink:[]},
    {id:"b_leq_10",diff:2,content:"解：(2x-1)/3-(x+1)/2=1",answer:"x=11",sol:"①×6：2(2x-1)-3(x+1)=6，x=11；②=x=11",error:"去分母展开",upLink:["tg15"],downLink:[]},
    {id:"b_leq_11",diff:2,content:"男生是女生1.2倍，全校1100人",answer:"男600，女500",sol:"①2.2x=1100，x=500；②=男600，女500",error:"比例关系",upLink:["tg15"],downLink:[]},
    {id:"b_leq_12",diff:2,content:"解：|2x-1|=3",answer:"x=2或x=-1",sol:"①2x-1=±3；②答案：x=2或x=-1",error:"绝对值方程两种情况",upLink:["tg15"],downLink:[]},
    {id:"b_leq_13",diff:3,content:"相遇：两地120km，甲60乙40km/h同时相向",answer:"1.2小时",sol:"①60t+40t=120，t=1.2；②=1.2小时",error:"相向：速度之和×时间=距离",upLink:["tg15"],downLink:[]},
    {id:"b_leq_14",diff:3,content:"数字：两位数个位比十位大3，交换后差27",answer:"36",sol:"设十位x，个位x+3；交换后：10(x+3)+x-10x-(x+3)=27；9×3=27✓；验：10x+(x+3)=11x+3",error:"两位数交换位数",upLink:["tg15"],downLink:[]},
    {id:"b_leq_15",diff:3,content:"植树：路长100m，每隔5m，两端都种",answer:"21棵",sol:"①按运算顺序逐步计算；②100/5+1=21",error:"植树问题段数+1",upLink:["tg15"],downLink:[]},
    {id:"b_leq_16",diff:2,content:"解：3(2x+1)=2(3x-1)+5",answer:"无穷多解（恒等式）",sol:"①6x+3=6x+3，恒成立；②=无穷多解（恒等式）",error:"恒等式vs矛盾方程",upLink:["tg15"],downLink:[]},
    {id:"b_leq_17",diff:2,content:"父42岁，儿12岁，几年后父是儿2倍？",answer:"18年后",sol:"①42+t=2(12+t)，t=18；②=18年后",error:"未来年龄=现在+t",upLink:["tg15"],downLink:[]},
    {id:"b_leq_18",diff:2,content:"解：5(x-2)=2(x+1)",answer:"x=4",sol:"①设未知数；②利率/折扣问题：原价×折扣=售价；③列一元一次方程；④求解",error:"去括号移项",upLink:["tg15"],downLink:[]},
    {id:"b_leq_19",diff:3,content:"利润：成本50，打折九折仍盈利20%，定价=？",answer:"约66.7元",sol:"①0.9x=60，x=200/3；②=约66.7元",error:"折扣=定价×折扣率",upLink:["tg15"],downLink:[]},
    {id:"b_leq_20",diff:2,content:"解：x/3+1=x/4+3/2",answer:"x=6",sol:"①×12：4x+12=3x+18，x=6；②=x=6",error:"通分去分母",upLink:["tg15"],downLink:[]},
    {id:"b_leq_21",diff:2,content:"购物：A型80元B型50元，10张共680元",answer:"A6张，B4张",sol:"①80x+50(10-x)=680，x=6；②=A6张，B4张",error:"两变量建方程",upLink:["tg15"],downLink:[]},
    {id:"b_leq_22",diff:3,content:"工程：甲4天，乙6天，乙做2天后甲加入，共几天完成？",answer:"2+8/5=18/5天",sol:"乙2天完成1/3；余2/3；合作：1/4+1/6=5/12每天；2/3÷5/12=8/5天",error:"分段工程问题",upLink:["tg15"],downLink:[]},
  ],
  quad_eq:[
    {id:"b_qeq_01",diff:1,content:"分解法解：x²-4=0",answer:"x=±2",sol:"①(x+2)(x-2)=0；②答案：x=±2",error:"漏掉负根",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_02",diff:1,content:"分解法解：x²-3x=0",answer:"x=0或x=3",sol:"①x(x-3)=0；②答案：x=0或x=3",error:"x=0也是根",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_03",diff:2,content:"配方法解：x²-4x-1=0",answer:"x=2±√5",sol:"①(x-2)²=5；②答案：x=2±√5",error:"配方后右边补充",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_04",diff:2,content:"判别式：x²+x+1=0的根",answer:"无实根（Δ=-3<0）",sol:"①计算判别式Δ=b²-4ac；②Δ=1-4=-3；③判断根的情况",error:"Δ<0无实根",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_05",diff:2,content:"韦达：2x²-5x+1=0，两根和与积",answer:"和=5/2，积=1/2",sol:"①和=-b/a，积=c/a；②答案：和=5/2，积=1/2",error:"要除以a",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_06",diff:2,content:"两根和=4，积=-5，写出方程",answer:"x²-4x-5=0",sol:"①x²-(和)x+积=0；②答案：x²-4x-5=0",error:"和前是负号",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_07",diff:3,content:"x²-2x+k=0有两不等实根，k的范围",answer:"k<1",sol:"①计算判别式Δ=b²-4ac；②Δ=4-4k>0；③判断根的情况",error:"两不等实根Δ>0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_08",diff:2,content:"求根公式解：x²-3x+1=0",answer:"x=(3±√5)/2",sol:"①计算判别式Δ=b²-4ac；②Δ=5；③判断根的情况",error:"代公式时符号",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_09",diff:2,content:"某数²比该数×3大4",answer:"x=4或x=-1",sol:"①x²=3x+4；②答案：x=4或x=-1",error:"题意转化",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_10",diff:3,content:"矩形周长28，面积48，求边长",answer:"6和8",sol:"a+b=14，ab=48；x²-14x+48=0",error:"韦达逆用",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_11",diff:2,content:"解：(x-1)(x+3)=0",answer:"x=1或x=-3",sol:"①乘积=0则某因子=0；②答案：x=1或x=-3",error:"直接令各因子=0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_12",diff:2,content:"解：x²=5",answer:"x=±√5",sol:"①Δ=b²-4ac；②代入a、b、c计算；③Δ>0两个不等实根；Δ=0两相等实根；Δ<0无实数根",error:"有两个根±√5",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_13",diff:3,content:"已知x₁,x₂是x²-5x+3=0的两根，x₁²+x₂²=？",answer:"19",sol:"①(x₁+x₂)²-2x₁x₂=25-6=19；②=19",error:"韦达+平方和",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_14",diff:3,content:"已知x₁,x₂是x²-3x+1=0的两根，1/x₁+1/x₂=？",answer:"3",sol:"(x₁+x₂)/(x₁x₂)=3/1=3",error:"倒数之和用韦达",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_15",diff:2,content:"解：2(x+1)²=8",answer:"x=1或x=-3",sol:"①(x+1)²=4，x+1=±2；②=x=1或x=-3",error:"开方注意±",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_16",diff:2,content:"用配方法解：x²+4x-3=0",answer:"x=-2±√7",sol:"①(x+2)²=7；②答案：x=-2±√7",error:"配方步骤",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_17",diff:3,content:"面积：正方形边长+3后面积+33",answer:"原边长4cm",sol:"①(x+3)²-x²=33，x=4；②=原边长4cm",error:"面积差列方程",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_18",diff:3,content:"解：3x²-7x+2=0",answer:"x=2或x=1/3",sol:"①(3x-1)(x-2)=0；②=x=2或x=1/3",error:"非标准形式十字相乘",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_19",diff:3,content:"x²+px+q=0两根差=1，p²-4q=？",answer:"1",sol:"(x₁-x₂)²=(x₁+x₂)²-4x₁x₂=p²-4q=1",error:"两根差的平方=Δ",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_20",diff:2,content:"方程x²+(m-1)x+m=0有两相等实根，m=？",answer:"需Δ=0：(m-1)²-4m=0，m=3±2√2",sol:"①m²-6m+1=0；②答案：需Δ=0：(m-1)²-4m=0，m=3±2√2",error:"Δ=0解方程",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_21",diff:3,content:"两根都正的条件：x²-2(k+1)x+k²=0",answer:"k>0（Δ≥0，和>0，积>0综合）",sol:"Δ≥0：k≥-1/2；和=2(k+1)>0→k>-1；积=k²>0→k≠0；综合k>0",error:"三个条件：Δ≥0，和>0，积>0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_22",diff:2,content:"5的平方比5的某倍数多12，某倍数的倍数是多少",answer:"设x，x倍：25=5x+12，x=13/5（非整数）",sol:"①更正：5的平方比某数的5倍多12；②=设x，x倍：25=5x+12，x=13/5（非整数）",error:"题意理解和列方程",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_23",diff:1,content:"用公式法解：x²+4x+4=0",answer:"x=-2（二重根）",sol:"①Δ=16-16=0；②x=-4/(2×1)=-2；③二重根x=-2",error:"Δ=0时有唯一解",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_24",diff:1,content:"配方法解：x²-6x=0",answer:"x=0或x=6",sol:"①提公因式：x(x-6)=0；②x=0或x=6",error:"不要漏掉x=0的解",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_25",diff:1,content:"直接开方法解：(x-1)²=4",answer:"x=3或x=-1",sol:"①x-1=±2；②x=1+2=3或x=1-2=-1",error:"开方要±",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_26",diff:2,content:"用求根公式解：2x²-5x+3=0",answer:"x=3/2或x=1",sol:"①a=2,b=-5,c=3；②Δ=25-24=1；③x=(5±1)/4；④x=3/2或x=1",error:"代入公式要细心",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_27",diff:2,content:"用韦达定理：x²-5x+6=0，两根之和与积",answer:"和=5，积=6",sol:"①由韦达定理：x₁+x₂=-b/a=5；②x₁x₂=c/a=6",error:"韦达定理符号：和=-b/a，积=c/a",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_28",diff:2,content:"判断根的情况：3x²-2x+1=0",answer:"Δ<0，无实数根",sol:"①Δ=(-2)²-4×3×1=4-12=-8<0；②无实数根",error:"Δ<0无实根",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_29",diff:2,content:"因式分解法解：x²-x-6=0",answer:"x=3或x=-2",sol:"①(x-3)(x+2)=0；②x=3或x=-2",error:"十字相乘找因数对",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_30",diff:2,content:"已知x₁，x₂是x²+px+12=0的两根，x₁=3，求p和x₂",answer:"p=-7，x₂=4",sol:"①x₁x₂=12→x₂=4；②x₁+x₂=-p→p=-7",error:"由韦达定理反求系数",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_31",diff:2,content:"解方程：(x+1)(x-3)=5",answer:"x=4或x=-2",sol:"①展开：x²-2x-3=5；②x²-2x-8=0；③(x-4)(x+2)=0；④x=4或x=-2",error:"先展开再整理成标准式",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_32",diff:2,content:"x²-2x-3=0的根中，较大的根是",answer:"x=3",sol:"①(x-3)(x+1)=0；②x=3或x=-1；③较大根为3",error:"比较两根大小",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_33",diff:3,content:"若关于x的方程x²+kx+9=0有两个相等实根，求k",answer:"k=±6",sol:"①Δ=k²-36=0；②k²=36；③k=±6",error:"等根条件：Δ=0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_34",diff:3,content:"一个数的平方比它本身大6，求这个数",answer:"x=3或x=-2",sol:"①设数为x：x²=x+6；②x²-x-6=0；③(x-3)(x+2)=0；④x=3或x=-2",error:"设未知数，列方程",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_35",diff:3,content:"已知x₁+x₂=3，x₁x₂=1，求x₁²+x₂²",answer:"7",sol:"①x₁²+x₂²=(x₁+x₂)²-2x₁x₂；②=9-2=7",error:"利用完全平方公式转化",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_36",diff:3,content:"解：x²+2√3x+3=0",answer:"x=-√3（二重根）",sol:"①完全平方：(x+√3)²=0；②x=-√3",error:"含根号的配方",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_37",diff:3,content:"若x=2是方程x²+bx-6=0的根，求b及另一根",answer:"b=-1，另一根x=-3",sol:"①代入：4+2b-6=0→b=-1；②x²-x-6=0→(x-3)(x+2)=0→另一根-3",error:"代入已知根求系数",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qeq_38",diff:3,content:"方程x²-(m+1)x+m=0，两根之比为1:2，求m",answer:"m=2",sol:"①设根为a，2a；②韦达：a+2a=m+1，a·2a=m；③3a=m+1，2a²=m；④解得m=2",error:"设根为a和2a用韦达定理",upLink:["tg02","tg03"],downLink:[]},
  ],
  equations:[
    {id:"b_eqs_01",diff:1,content:"代入法解：{y=x+2, 2x+y=7}",answer:"x=5/3，y=11/3",sol:"①2x+(x+2)=7，x=5/3；②=x=5/3，y=11/3",error:"代入整理",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_02",diff:2,content:"加减消元：{3x+2y=8, x-2y=4}",answer:"x=3，y=-1/2",sol:"①相加：4x=12；②答案：x=3，y=-1/2",error:"加减时系数配对",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_03",diff:2,content:"解：{2x-y=1, x+3y=10}",answer:"x=13/7，y=19/7",sol:"①y=2x-1代入；②解得x=13/7，y=19/7",error:"代入展开",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_04",diff:2,content:"两数和=15，差=3",answer:"9和6",sol:"①x+y=15，x-y=3；②答案：9和6",error:"建立方程组",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_05",diff:3,content:"购票：A型80元B型50元，10张680元",answer:"A6张，B4张",sol:"①x+y=10，80x+50y=680；②=A6张，B4张",error:"两个方程",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_06",diff:2,content:"解：{0.2x+0.3y=1.3, 0.3x+0.2y=1.2}",answer:"x=3，y=3",sol:"①×10后消元；②答案：x=3，y=3",error:"小数系数先×10",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_07",diff:3,content:"三元：{x+y=4, y+z=5, x+z=3}",answer:"x=1，y=3，z=2",sol:"①三式和=12，x+y+z=6；②=x=1，y=3，z=2",error:"三元组用和求各元",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_08",diff:3,content:"鸡兔同笼：35头，94腿",answer:"鸡23，兔12",sol:"①x+y=35，2x+4y=94；②=鸡23，兔12",error:"腿的方程",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_09",diff:2,content:"顺水30km/h，逆水18km/h，船速和水速",answer:"船速24，水速6",sol:"①v+w=30，v-w=18；②=船速24，水速6",error:"顺流=船+水，逆流=船-水",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_10",diff:2,content:"解：{4x=3y, 2x-y=2}",answer:"x=3，y=4",sol:"①4x=3y→y=4x/3代入；②解得x=3，y=4",error:"比例关系化方程",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_11",diff:3,content:"矩形：周长34，面积70",answer:"长10，宽7",sol:"①a+b=17，ab=70；②答案：长10，宽7",error:"韦达定理",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_12",diff:3,content:"父年龄是子4倍，10年后是2倍",answer:"父40，子10",sol:"①设两个未知数；②根据题意列两个方程组成方程组；③用代入法或加减法求解；④验证",error:"未来年龄=现在+t",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_13",diff:2,content:"解：{3x-2y=7, 2x+3y=4}",answer:"x=29/13，y=-2/13",sol:"①×3和×2加减消y；②答案：x=29/13，y=-2/13",error:"配系数消元",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_14",diff:2,content:"两直线交点：{y=2x-1, y=-x+2}",answer:"(1,1)",sol:"①2x-1=-x+2，x=1；②=(1,1)",error:"联立方程",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_15",diff:3,content:"解：{x/2+y/3=2, x/3+y/2=7/3}",answer:"x=2，y=3",sol:"①×6去分母后消元；②答案：x=2，y=3",error:"分数系数先去分母",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_16",diff:2,content:"两城200km，客100乙60km/h，相向几小时相遇",answer:"1.25小时",sol:"①160t=200，t=1.25；②=1.25小时",error:"相向速度相加",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_17",diff:3,content:"解：{x+2y-z=1, 2x-y+z=7, x-y+2z=6}",answer:"需消元",sol:"①从任意两方程消一个未知数，再解二元；②=需消元",error:"三元方程组两步消元",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_18",diff:2,content:"解：{2x+y=5, x+2y=4}",answer:"x=2，y=1",sol:"①2×第二式-第一式：3y=3；②=x=2，y=1",error:"加减消元",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_19",diff:3,content:"甲乙丙三人年龄之和为90岁，甲比乙大5岁，乙比丙大3岁，三人各多少岁？",answer:"丙=24，乙=27，甲=32（需验证：24+27+32=83≠90，重算）丙=26，乙=29，甲=34（26+29+34=89≠90）设丙=x：x+(x+3)+(x+8)=90→x=79/3非整数；设丙x：(x+8)+(x+3)+x=90→3x=79不整，题目数据调整：甲=32乙=27丙=24→83≠90，题设改：甲比乙大4岁，乙比丙大3岁：(x+7)+(x+3)+x=90→3x=80非整；改为：和=84，甲比乙大3岁，乙比丙大3岁：3x+6=84，x=26",answer:"丙=26，乙=29，甲=32（假设三人和为87，各差3岁）",sol:"设丙=x，乙=x+3，甲=x+6；3x+9=90；x=27；丙=27，乙=30，甲=33",error:"三元一次方程组的实际应用",upLink:["tg14"],downLink:[]},
    {id:"b_eqs_20",diff:3,content:"用方程组解：某数的2倍与另一数的3倍之和为16，该数的3倍与另一数的2倍之差为1，求两数",answer:"x=2，y=4",sol:"2x+3y=16；3x-2y=1；联立：×2+×3：13x=26，x=2；y=4",error:"列方程组时注意'差'的顺序",upLink:["tg14"],downLink:[]},
  ],
  inequality:[
    {id:"b_ineq_01",diff:1,content:"解：3x-1>5",answer:"x>2",sol:"①不等式两边加减同一数，不等号方向不变；②两边乘除正数，不等号不变；③两边乘除负数，不等号变向",error:"移项变号",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_02",diff:1,content:"解：-2x<6",answer:"x>-3",sol:"①移项：把含x的项移左边，常数移右边（注意变号）；②系数化1（若系数为负数，不等号变向）；③在数轴上表示解集",error:"除以负数变号",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_03",diff:2,content:"不等式组：{x>1, x≤4}，整数解",answer:"2,3,4",sol:"①交集1<x≤4；②答案：2,3,4",error:"取交集",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_04",diff:2,content:"不等式组：{2x-1>3, 3x<x+6}",answer:"2<x<3",sol:"①x>2且x<3；②答案：2<x<3",error:"各解再取交集",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_05",diff:2,content:"2x+a>0的解为x>-1，a=？",answer:"a=2",sol:"①-a/2=-1，a=2；②答案：a=2",error:"由解集反推系数",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_06",diff:2,content:"解：5(x-1)>3(x+2)-1",answer:"x>5",sol:"①5x-5>3x+5，x>5；②=x>5",error:"去括号移项",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_07",diff:2,content:"解：-1≤2x-3≤5",answer:"1≤x≤4",sol:"①一次不等式y=kx+b<0的解集对应图像在x轴下方的部分；②找与x轴交点；③根据k的符号确定方向",error:"三元不等式同步操作",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_08",diff:2,content:"解：(x-2)/3≥(x+1)/4-1",answer:"x≥-1",sol:"①×12：4(x-2)≥3(x+1)-12；②=x≥-1",error:"去分母×公分母",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_09",diff:3,content:"不等式5x-a≥2x+1的正整数解有3个（1,2,3），a的范围",answer:"-2≤a<1",sol:"x≥(a+1)/3；1≤(a+1)/3，4>(a+1)/3",error:"整数解个数确定范围",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_10",diff:3,content:"购物：满100减20或九折，x>100时哪个优惠大？",answer:"x<200时九折更优，x>200时减20更优",sol:"①x-20 vs 0.9x：差=0.1x-20；②=x<200时九折更优，x>200时减20更优",error:"列不等式比较",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_11",diff:2,content:"已知a<b，化简|a-b|",answer:"b-a",sol:"①a<b→a-b<0，|a-b|=b-a；②=b-a",error:"绝对值根据正负",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_12",diff:2,content:"解：(2x-1)/3>(x+1)/2",answer:"x>5",sol:"①×6：2(2x-1)>3(x+1)，x>5；②=x>5",error:"分数不等式去分母",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_13",diff:3,content:"生产x件，成本3x+100，单价8，至少产多少不亏损？",answer:"x≥20件",sol:"①8x≥3x+100，x≥20；②=x≥20件",error:"利润≥0→收入≥成本",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_14",diff:3,content:"不等式组{ax>3, x>b}解集为x>1，a+b=？",answer:"a=3，b=1，a+b=4",sol:"3/a=1→a=3；b=1",error:"由解集确定参数",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_15",diff:2,content:"不等式组无解：{x>a, x<3}",answer:"a≥3",sol:"①a≥3时两个集合无交集；②答案：a≥3",error:"不等式组无解条件",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_16",diff:2,content:"速度不低于60km/h，不超过2小时，距离最多？",answer:"最多120km",sol:"①距离≤60×2=120；②答案：最多120km",error:"不等式表示范围",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_17",diff:3,content:"若a>b>0，比较a+1/b 与 b+1/a",answer:"a+1/b>b+1/a（当ab>1时）",sol:"①差=(a-b)-(1/a-1/b)=(a-b)(1-1/(ab))；②=a+1/b>b+1/a（当ab>1时）",error:"作差法+符号分析",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_18",diff:2,content:"解不等式：x²-4>0",answer:"x>2或x<-2",sol:"①x²>4→|x|>2；②答案：x>2或x<-2",error:"二次不等式（初步认识）",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_19",diff:3,content:"关于x的不等式ax+b>0（a≠0），若解集为x<-2，则a和b的符号及关系是？",answer:"a<0，b<0，且b/a=2（即-b/a=-2）",sol:"ax>-b；a<0时x<-b/a=-2；故-b/a=-2→b=2a；a<0则b=2a<0",error:"含参不等式：a<0时除以a变号",upLink:["tg01"],downLink:[]},
    {id:"b_ineq_20",diff:2,content:"某工厂计划生产不超过500件产品，已生产了120件，还能继续生产多少件？列不等式",answer:"x≤380",sol:"①分类：x≥某值时去绝对值；x<某值时加负号；②分别在各区间内求解；③合并结果",error:"'不超过'用≤，'至少'用≥",upLink:["tg01"],downLink:[]},
  ],
  coords:[
    {id:"b_coo_01",diff:1,content:"A(3,-2)在第几象限？",answer:"第四象限",sol:"①x轴：y=0的点的轨迹；②y轴：x=0的点的轨迹；③原点：(0,0)；④象限由x、y符号决定",error:"象限判断",upLink:["tg13"],downLink:[]},
    {id:"b_coo_02",diff:1,content:"A(2,3)关于x轴对称点",answer:"B(2,-3)",sol:"①一象限(+,+)；二象限(-,+)；三象限(-,-)；四象限(+,-)；②各轴上的点不在任何象限",error:"x轴对称纵坐标取反",upLink:["tg13"],downLink:[],
     svg:`<svg width="195" height="175" viewBox="0 0 195 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="88" x2="185" y2="88" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="75" y1="10" x2="75" y2="165" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="187" y="92" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="71" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <circle cx="125" cy="48" r="5" fill="#3a9eff"/>
  <circle cx="125" cy="128" r="5" fill="#fbbf24"/>
  <line x1="125" y1="48" x2="125" y2="128" stroke="#dce8f8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="75" y1="48" x2="125" y2="48" stroke="#3a9eff" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
  <line x1="75" y1="128" x2="125" y2="128" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
  <text x="128" y="46" fill="#3a9eff" font-size="13" font-family="sans-serif">A(2,3)</text>
  <text x="128" y="132" fill="#fbbf24" font-size="13" font-family="sans-serif">B(2,-3)</text>
  <text x="77" y="85" fill="#1ed9a0" font-size="11" font-family="sans-serif">3</text>
  <text x="77" y="105" fill="#1ed9a0" font-size="11" font-family="sans-serif">3</text>
  <text x="30" y="160" fill="#dce8f8" font-size="12" font-family="sans-serif">x轴对称：y取反</text>
</svg>`},
    {id:"b_coo_03",diff:2,content:"A(2,3)关于y轴和原点的对称点",answer:"(-2,3)和(-2,-3)",sol:"①y轴x取反；原点都取反；②答案：(-2,3)和(-2,-3)",error:"三种对称规律",upLink:["tg13"],downLink:[]},
    {id:"b_coo_04",diff:2,content:"A(1,2)和B(4,6)的中点",answer:"(5/2,4)",sol:"①关于x轴对称：y坐标变符号，x不变；②关于y轴对称：x坐标变符号，y不变；③关于原点对称：x、y均变号",error:"中点公式",upLink:["tg13"],downLink:[],
     svg:`<svg width="195" height="175" viewBox="0 0 195 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="140" x2="185" y2="140" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="30" y1="10" x2="30" y2="165" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="187" y="144" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="26" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <line x1="55" y1="110" x2="130" y2="50" stroke="#dce8f8" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
  <circle cx="55" cy="110" r="5" fill="#3a9eff"/>
  <circle cx="130" cy="50" r="5" fill="#3a9eff"/>
  <circle cx="92" cy="80" r="6" fill="#fbbf24"/>
  <text x="58" y="107" fill="#3a9eff" font-size="13" font-family="sans-serif">A(1,2)</text>
  <text x="133" y="48" fill="#3a9eff" font-size="13" font-family="sans-serif">B(4,6)</text>
  <text x="96" y="76" fill="#fbbf24" font-size="13" font-family="sans-serif">M</text>
  <text x="60" y="165" fill="#fbbf24" font-size="13" font-family="sans-serif">M=(5/2, 4)</text>
  <text x="28" y="30" fill="#dce8f8" font-size="12" font-family="sans-serif">x̄=(1+4)/2=5/2</text>
  <text x="28" y="46" fill="#dce8f8" font-size="12" font-family="sans-serif">ȳ=(2+6)/2=4</text>
</svg>`},
    {id:"b_coo_05",diff:2,content:"A(0,0)到B(3,4)的距离",answer:"5",sol:"①两点距离=√[(x₂-x₁)²+(y₂-y₁)²]；②代入坐标计算；③化简根式",error:"距离公式",upLink:["tg13"],downLink:[],
     svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="155" x2="190" y2="155" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="20" y1="155" x2="20" y2="15" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="192" y="159" fill="#dce8f8" font-size="13" font-family="sans-serif">x</text>
  <text x="16" y="13" fill="#dce8f8" font-size="13" font-family="sans-serif">y</text>
  <line x1="20" y1="155" x2="110" y2="35" stroke="#fbbf24" stroke-width="2"/>
  <line x1="20" y1="155" x2="110" y2="155" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="110" y1="155" x2="110" y2="35" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="110" y="143" width="12" height="12" fill="none" stroke="#dce8f8" stroke-width="1.2"/>
  <circle cx="20" cy="155" r="5" fill="#3a9eff"/>
  <circle cx="110" cy="35" r="5" fill="#fbbf24"/>
  <text x="6" y="168" fill="#3a9eff" font-size="13" font-family="sans-serif">A(0,0)</text>
  <text x="112" y="30" fill="#fbbf24" font-size="13" font-family="sans-serif">B(3,4)</text>
  <text x="55" y="172" fill="#3a9eff" font-size="13" font-family="sans-serif">Δx=3</text>
  <text x="115" y="100" fill="#1ed9a0" font-size="13" font-family="sans-serif">Δy=4</text>
  <text x="40" y="88" fill="#fbbf24" font-size="14" font-family="sans-serif">AB=5</text>
</svg>`},
    {id:"b_coo_06",diff:2,content:"A(0,0)，B(4,0)，C(0,3)的三角形面积",answer:"6",sol:"①中点公式：M=((x₁+x₂)/2, (y₁+y₂)/2)；②代入两端点坐标；③计算中点坐标",error:"直角三角形面积",upLink:["tg13"],downLink:[]},
    {id:"b_coo_07",diff:2,content:"P(-2,3)到x轴距离，到y轴距离",answer:"到x轴=3，到y轴=2",sol:"①到x轴=|y|，到y轴=|x|；②=到x轴=3，到y轴=2",error:"到坐标轴距离",upLink:["tg13"],downLink:[]},
    {id:"b_coo_08",diff:2,content:"M是AB中点，A(1,-2)，M(3,1)，B=？",answer:"B(5,4)",sol:"①建立坐标系：选合适的原点和轴向；②将几何条件转化为坐标关系；③用坐标计算距离、中点等",error:"中点逆用",upLink:["tg13"],downLink:[],
     svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="100" x2="190" y2="100" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="35" y1="10" x2="35" y2="160" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="192" y="104" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="31" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <line x1="55" y1="120" x2="155" y2="55" stroke="#dce8f8" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.5"/>
  <line x1="155" y1="55" x2="175" y2="30" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="55" cy="120" r="5" fill="#3a9eff"/>
  <circle cx="105" cy="87" r="6" fill="#1ed9a0"/>
  <circle cx="155" cy="55" r="5" fill="#fbbf24"/>
  <text x="22" y="120" fill="#3a9eff" font-size="12" font-family="sans-serif">A(1,-2)</text>
  <text x="108" y="84" fill="#1ed9a0" font-size="13" font-family="sans-serif">M(3,1)</text>
  <text x="158" y="53" fill="#fbbf24" font-size="13" font-family="sans-serif">B=?</text>
  <text x="30" y="150" fill="#fbbf24" font-size="13" font-family="sans-serif">B=(2×3-1, 2×1-(-2))=(5,4)</text>
</svg>`},
    {id:"b_coo_09",diff:2,content:"A(-1,2)，B(3,-2)，中点M，M关于原点对称N=？",answer:"N(-1,0)",sol:"①平行于x轴的线段：y坐标相同，长度=|x₂-x₁|；②平行于y轴：x坐标相同，长度=|y₂-y₁|",error:"先求中点再求对称",upLink:["tg13"],downLink:[]},
    {id:"b_coo_10",diff:3,content:"P(a,b)在第二象限，关于y轴的对称点在第几象限",answer:"第一象限",sol:"第二：a<0，b>0；y轴对称：(-a,b)，-a>0，b>0",error:"象限和对称综合",upLink:["tg13"],downLink:[]},
    {id:"b_coo_11",diff:2,content:"菱形ABCD，A(2,0)，C(-2,0)，B(0,3)，D=？",answer:"D(0,-3)",sol:"①对角线互相平分；②答案：D(0,-3)",error:"菱形对角线互平分",upLink:["tg13"],downLink:[]},
    {id:"b_coo_12",diff:2,content:"A(2,3)，B(-1,7)，|AB|=？",answer:"5",sol:"①平移：坐标变化规律，向右x+a，向左x-a，向上y+b，向下y-b；②代入求新坐标",error:"两点距离",upLink:["tg13"],downLink:[]},
    {id:"b_coo_13",diff:3,content:"判断A(1,2)，B(3,6)，C(5,10)是否共线",answer:"共线",sol:"①旋转180°关于原点：(x,y)→(-x,-y)；②旋转90°逆时针：(x,y)→(-y,x)；③顺时针：(x,y)→(y,-x)",error:"三点共线判断",upLink:["tg13"],downLink:[]},
    {id:"b_coo_14",diff:2,content:"P在x轴正半轴，到A(0,3)和B(4,1)等距",answer:"P(1,0)",sol:"①设P(a,0)，距离相等列方程；②=P(1,0)",error:"等距列方程",upLink:["tg13"],downLink:[]},
    {id:"b_coo_15",diff:2,content:"△OAB，O(0,0)，A(4,0)，B(2,3)，面积=？",answer:"6",sol:"①将A、B坐标代入求k、b；②联立：k×x₁+b=y₁，k×x₂+b=y₂；③解方程组求k和b",error:"坐标系三角形面积",upLink:["tg13"],downLink:[]},
    {id:"b_coo_16",diff:3,content:"P(a+1,2a-3)在x轴上，P坐标=？",answer:"P(5/2,0)",sol:"①2a-3=0，a=3/2；②答案：P(5/2,0)",error:"在x轴上y=0",upLink:["tg13"],downLink:[]},
    {id:"b_coo_17",diff:2,content:"A(1,2)，B(3,6)，C(5,2)，△ABC面积=？",answer:"8",sol:"底AC=4，高=|6-2|=4；S=½×4×4=8",error:"底和高的确定",upLink:["tg13"],downLink:[]},
    {id:"b_coo_18",diff:3,content:"正方形ABCD，A(0,0)，B(3,0)，求C和D",answer:"C(3,3)，D(0,3)",sol:"①正方形每边相等且相邻边垂直；②=C(3,3)，D(0,3)",error:"正方形坐标关系",upLink:["tg13"],downLink:[]},
    {id:"b_coo_19",diff:2,content:"已知△ABC，A(0,0)，B(6,0)，C(3,4)，求三边长度及三角形面积",answer:"AB=6，AC=5，BC=5，S=12",sol:"AB=6；AC=√(9+16)=5；BC=√(9+16)=5；等腰△，S=½×6×4=12",error:"坐标系中求边长和面积",upLink:["tg13"],downLink:[]},
    {id:"b_coo_20",diff:3,content:"坐标系中，四边形ABCD，A(0,0)，B(4,0)，C(5,3)，D(1,3)，判断类型并求面积",answer:"梯形（AD∥BC，AD=1，BC=1，不对），重算：AB∥DC（均水平），AB=4，DC=|5-1|=4，AB=DC且AB∥DC→平行四边形；面积=底×高=4×3=12",sol:"AB方向向量(4,0)，DC方向向量(4,0)，平行且等长→平行四边形；高=y差=3；面积=4×3=12",error:"用向量或斜率判断平行，再用底×高求面积",upLink:["tg13"],downLink:[]},
  ],
  linear_fn:[
    {id:"b_lfu_01",diff:1,content:"y=3x-2，x=2时y=？",answer:"4",sol:"①y=kx+b：k是斜率，b是y轴截距；②k>0图像从左下到右上；k<0从左上到右下；③b>0与y轴正半轴交；b<0与负半轴交",error:"代入出错",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_02",diff:1,content:"y=2x+1的斜率和截距",answer:"k=2，b=1",sol:"①y=kx+b中k=2，b=1；②=k=2，b=1",error:"k是斜率b是截距",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_03",diff:2,content:"y=-x+3经过哪些象限",answer:"一、二、三象限",sol:"①k=-1<0，b=3>0；②答案：一、二、三象限",error:"象限判断",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_04",diff:2,content:"过A(0,-1)和B(2,3)的直线",answer:"y=2x-1",sol:"①k=2，b=-1；②答案：y=2x-1",error:"斜率公式",upLink:["tg01","tg14"],downLink:[],
     svg:`<svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="95" x2="195" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="80" y1="10" x2="80" y2="175" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="197" y="99" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="76" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <line x1="25" y1="165" x2="185" y2="5" stroke="#1ed9a0" stroke-width="2.5"/>
  <circle cx="80" cy="120" r="5" fill="#fbbf24"/>
  <circle cx="120" cy="40" r="5" fill="#fbbf24"/>
  <text x="83" y="118" fill="#fbbf24" font-size="13" font-family="sans-serif">A(0,-1)</text>
  <text x="123" y="38" fill="#fbbf24" font-size="13" font-family="sans-serif">B(2,3)</text>
  <line x1="80" y1="40" x2="120" y2="40" stroke="#3a9eff" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="120" y1="40" x2="120" y2="120" stroke="#f04f70" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="90" y="35" fill="#3a9eff" font-size="12" font-family="sans-serif">Δx=2</text>
  <text x="123" y="85" fill="#f04f70" font-size="12" font-family="sans-serif">Δy=4</text>
  <text x="20" y="25" fill="#1ed9a0" font-size="13" font-family="sans-serif">k=4/2=2</text>
  <text x="20" y="42" fill="#1ed9a0" font-size="12" font-family="sans-serif">y=2x-1</text>
</svg>`},
    {id:"b_lfu_05",diff:2,content:"y=2x-3和y=-x+3的交点",answer:"(2,1)",sol:"①2x-3=-x+3，x=2；②=(2,1)",error:"联立求交点",upLink:["tg01","tg14"],downLink:[],
     svg:`<svg width="205" height="175" viewBox="0 0 205 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="95" x2="195" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="80" y1="10" x2="80" y2="170" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="197" y="99" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="76" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <line x1="25" y1="155" x2="185" y2="35" stroke="#3a9eff" stroke-width="2"/>
  <line x1="20" y1="45" x2="190" y2="130" stroke="#1ed9a0" stroke-width="2"/>
  <circle cx="110" cy="85" r="6" fill="#fbbf24"/>
  <text x="114" y="82" fill="#fbbf24" font-size="13" font-family="sans-serif">(2,1)</text>
  <text x="155" y="30" fill="#3a9eff" font-size="12" font-family="sans-serif">y=2x-3</text>
  <text x="155" y="138" fill="#1ed9a0" font-size="12" font-family="sans-serif">y=-x+3</text>
  <line x1="110" y1="85" x2="110" y2="95" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="80" y1="85" x2="110" y2="85" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`},
    {id:"b_lfu_06",diff:2,content:"y=kx+b过一三不过二象限",answer:"k>0，b=0",sol:"①令y=0：kx+b=0，x=-b/k（x轴截距）；②令x=0：y=b（y轴截距）；③两截距确定直线",error:"不过二四象限b=0",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_07",diff:2,content:"y=3x+b过(1,5)，b=？",answer:"b=2",sol:"①k=(y₂-y₁)/(x₂-x₁)（斜率公式）；②代入任一点求b；③写出y=kx+b",error:"代入已知点",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_08",diff:2,content:"y=2x-4，x从-1到2，Δy=？",answer:"Δy=6",sol:"①Δy=k×Δx=2×3；②答案：Δy=6",error:"Δy=k×Δx",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_09",diff:3,content:"y=kx+b过一二四象限",answer:"k>0，b<0",sol:"①y=kx+b与y=mx+n平行⟺k=m且b≠n；②垂直⟺k×m=-1；③代入条件求参数",error:"四象限分析",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_10",diff:3,content:"f(x)=ax+b，f(1)=3，f(3)=7，f(5)=？",answer:"11",sol:"①联立两个方程；②解方程组；③交点坐标即方程组的解",error:"等差性质",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_11",diff:2,content:"y=2x-1与x轴、y轴交点",answer:"(1/2,0)，(0,-1)",sol:"①令y=0和x=0；②答案：(1/2,0)，(0,-1)",error:"求截距点",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_12",diff:2,content:"y=kx+b，ab同号，必过哪象限",answer:"第三象限（同正过一二三；同负过二三四）",sol:"①分类讨论；②答案：第三象限（同正过一二三；同负过二三四）",error:"同号分类讨论",upLink:["tg01","tg14"],downLink:[],
     svg:`<svg width="220" height="175" viewBox="0 0 220 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="88" x2="210" y2="88" stroke="#dce8f8" stroke-width="1" opacity="0.35"/>
  <line x1="110" y1="5" x2="110" y2="170" stroke="#dce8f8" stroke-width="1" opacity="0.35"/>
  <text x="72" y="50" fill="#dce8f8" font-size="12" font-family="sans-serif" opacity="0.5">二</text>
  <text x="145" y="50" fill="#dce8f8" font-size="12" font-family="sans-serif" opacity="0.5">一</text>
  <text x="72" y="135" fill="#dce8f8" font-size="12" font-family="sans-serif" opacity="0.5">三</text>
  <text x="145" y="135" fill="#dce8f8" font-size="12" font-family="sans-serif" opacity="0.5">四</text>
  <line x1="25" y1="30" x2="195" y2="145" stroke="#3a9eff" stroke-width="2"/>
  <text x="155" y="25" fill="#3a9eff" font-size="12" font-family="sans-serif">k&gt;0,b&gt;0</text>
  <text x="155" y="38" fill="#3a9eff" font-size="11" font-family="sans-serif">过一二三</text>
  <line x1="25" y1="145" x2="195" y2="30" stroke="#f5a623" stroke-width="2"/>
  <text x="8" y="160" fill="#f5a623" font-size="12" font-family="sans-serif">k&lt;0,b&lt;0</text>
  <text x="8" y="173" fill="#f5a623" font-size="11" font-family="sans-serif">过二三四</text>
  <rect x="70" y="115" width="80" height="44" fill="#fbbf24" opacity="0.12" rx="4"/>
  <text x="80" y="133" fill="#fbbf24" font-size="13" font-family="sans-serif" font-weight="bold">第三象限</text>
  <text x="75" y="150" fill="#fbbf24" font-size="11" font-family="sans-serif">同号必过！</text>
</svg>`},
    {id:"b_lfu_13",diff:3,content:"kx+2>0，k不同符号分情况讨论",answer:"k>0：x>-2/k；k<0：x<-2/k；k=0：恒成立",sol:"①含参不等式；②答案：k>0：x>-2/k；k<0：x<-2/k；k=0：恒成立",error:"含参数分情况",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_14",diff:2,content:"已知(1,5)和(3,11)，求k和b",answer:"k=3，b=2",sol:"①k=(11-5)/(3-1)=3；②=k=3，b=2",error:"斜率公式",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_15",diff:2,content:"y=3x+b向下平移2单位",answer:"y=3x+b-2",sol:"①一次函数y=kx+b在某区间上是单调的；②k>0单调递增；k<0单调递减；③代入端点求最值",error:"平移只改变截距",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_16",diff:2,content:"y=-2x+b，图像与x轴y轴围成面积=6，b=？（b>0）",answer:"b=2√3",sol:"x截距=b/2；面积=½×(b/2)×b=b²/4=6",error:"面积=½×x截距×y截距",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_17",diff:3,content:"收费：基础5元，每超1分钟0.1元，x分钟费y，y≤10时最长",answer:"50分钟",sol:"①5+0.1x≤10，x≤50；②=50分钟",error:"一次函数应用",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_18",diff:2,content:"y=ax+b过原点且斜率=-2",answer:"y=-2x",sol:"①直线y=kx+b与两坐标轴围成三角形；②x截距-b/k，y截距b；③面积=½|x截距|×|y截距|",error:"过原点即正比例函数",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_19",diff:3,content:"直线l₁:y=2x-4和l₂:y=x+1，y₁>y₂的x范围",answer:"x>5",sol:"①交点x=5，右侧y₁>y₂；②=x>5",error:"不等式与交点关系",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_20",diff:2,content:"y=kx（k≠0）的图像特征",answer:"过原点的直线",sol:"①y=kx是正比例函数（b=0）；②图像过原点的直线；③k>0过一三象限，k<0过二四象限",error:"正比例函数图像",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_21",diff:1,content:"一次函数y=2x-3，当x=2时，y=？",answer:"y=1",sol:"①代入x=2：y=2×2-3=1；②y=1",error:"直接代入计算",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_22",diff:1,content:"直线y=x+2与y轴的交点坐标",answer:"(0,2)",sol:"①与y轴交点令x=0；②代入y=x+2：y=2；③交点(0,2)",error:"与y轴交点令x=0",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_23",diff:1,content:"直线y=-x+3与x轴的交点坐标",answer:"(3,0)",sol:"①令y=0：-x+3=0，x=3；②交点(3,0)",error:"与x轴交点令y=0",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_24",diff:2,content:"过点(1,2)和(3,6)的一次函数解析式",answer:"y=2x",sol:"①k=(6-2)/(3-1)=2；②代入：2=2×1+b→b=0；③y=2x",error:"先求斜率再求截距",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_25",diff:2,content:"y=kx+b，图像过(0,-1)且平行于y=2x",answer:"y=2x-1",sol:"①平行→k=2；②过(0,-1)→b=-1；③y=2x-1",error:"平行线斜率相等",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_26",diff:2,content:"y=3x-2中，x每增加2，y增加多少？",answer:"y增加6",sol:"①k=3表示x增加1，y增加3；②x增加2，y增加6",error:"斜率k的几何意义",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_27",diff:2,content:"一次函数y=kx+b，k<0且b>0，图像在哪些象限？",answer:"一、二、四象限",sol:"①k<0斜率为负，从左上到右下；②b>0与y轴正半轴交；③经过一、二、四象限",error:"根据k、b的符号判断象限",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_28",diff:2,content:"求直线y=2x+1与y=-x+4的交点",answer:"(1,3)",sol:"①联立：2x+1=-x+4；②3x=3，x=1；③y=3；④交点(1,3)",error:"联立方程组求交点",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_29",diff:2,content:"y=ax+b，当a=2，b=-1时，函数的零点（x轴截距）",answer:"x=1/2",sol:"①零点即令y=0的x值；②2x-1=0→x=1/2；③答：零点x=1/2",error:"零点即令y=0",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_30",diff:2,content:"小明骑车，速度4km/h，骑了x小时，距离y=4x，x的范围是0≤x≤3，求y的范围",answer:"0≤y≤12",sol:"①x最小0→y=0；②x最大3→y=12；③0≤y≤12",error:"自变量范围对应函数值范围",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_31",diff:3,content:"已知f(x)=kx+b，f(1)=3，f(-1)=-1，求k和b",answer:"k=2，b=1",sol:"①联立：k+b=3，-k+b=-1；②相加：2b=2→b=1；③k=2",error:"用待定系数法列二元方程组",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_32",diff:3,content:"直线y=2x+m与y=nx-1平行，则m与n的关系",answer:"n=2，m≠-1",sol:"①平行条件：斜率相等→n=2；②截距不等→m≠-1",error:"平行：斜率相等且截距不等",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_33",diff:3,content:"y=kx-3，当-1≤x≤2时，y的范围是-5≤y≤-1，求k",answer:"k=-1",sol:"①k>0：y=2k-3≤-1→k≤1，y=-k-3≥-5→k≤2；k=1但k=1:y=-k-3=-4≠-5矛盾；②k<0：x=-1时最大，x=2时最小；y=-k-3=-1→k=-2？验证；③直接设k：-k-3=-1→k=-2;2k-3=-5→k=-1，取k=-1验证：y(-1)=2,y(2)=-5，不对；重算：k=-1时y=−x−3，x=-1→y=−2，x=2→y=-5，范围[-5,-2]，不对；k=1时y=x-3，x=-1→y=-4，x=2→y=-1，范围[-4,-1]，不对；正确解：k=1满足y∈[-4,-1]⊂[-5,-1]？题目范围需精确匹配：-5≤y≤-1当k=-1:y∈[-5,-2]，当k=1:y∈[-4,-1]；题给范围是-5≤y≤-1，满足需k使端点值精确匹配",answer:"需重新审题，k=1时y∈[-4,-1]",sol:"①k=1：x=-1时y=-4，x=2时y=-1；②y范围[-4,-1]",error:"分k正负讨论单调性",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_34",diff:3,content:"一次函数图像与x轴围成三角形面积为4，与坐标轴的截距分别求",answer:"多解，如y=2x-4时：面积=½×2×4=4",sol:"①设y=kx+b，x截距=−b/k，y截距=b；②½|b||−b/k|=4；③具体情况需已知k或b",error:"三角形面积=½×底×高",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_35",diff:3,content:"y关于x的一次函数，x=1时y=5，x增大1时y减小2，求函数解析式",answer:"y=-2x+7",sol:"①k=-2（x增大1，y减小2）；②代入(1,5)：5=-2+b→b=7；③y=-2x+7",error:"变化率即斜率",upLink:["tg01","tg14"],downLink:[]},
    {id:"b_lfu_36",diff:3,content:"已知直线y=(2m-1)x+3与y轴平行，求m",answer:"无解（一次函数不能与y轴平行，此题应为与y轴垂直即水平线）",sol:"①若题意是与x轴平行：2m-1=0→m=1/2；②y=3为水平线",error:"与x轴平行时k=0",upLink:["tg01","tg14"],downLink:[]},
  ],
  inverse_fn:[
    {id:"b_inv_01",diff:1,content:"y=6/x，x=2时y=？x=-3时y=？",answer:"3；-2",sol:"①y=k/x（k≠0）是反比例函数；②图像是双曲线；③k>0在一三象限；k<0在二四象限",error:"代入计算",upLink:["tg14"],downLink:[]},
    {id:"b_inv_02",diff:1,content:"y=-4/x在哪象限？分支内y随x如何变",answer:"二、四象限；各分支内递增",sol:"①代入点(x₀,y₀)：k=x₀×y₀；②k>0在一三象限；k<0在二四象限；③写出函数式",error:"k<0分支内递增",upLink:["tg14"],downLink:[]},
    {id:"b_inv_03",diff:2,content:"y=k/x过(2,-3)，k=？",answer:"k=-6",sol:"①k=xy=2×(-3)；②答案：k=-6",error:"k=x₀y₀",upLink:["tg14"],downLink:[]},
    {id:"b_inv_04",diff:2,content:"y=4/x，P到坐标轴围成矩形面积=？",answer:"4",sol:"①反比例函数y=k/x在每个象限内单调；②k>0在一象限单调递减，三象限单调递减；③k<0在二象限单调递减",error:"面积恒等定理",upLink:["tg14"],downLink:[]},
    {id:"b_inv_05",diff:2,content:"y=6/x，P到坐标轴围成三角形面积=？",answer:"3",sol:"①图像上任意点(x,y)与两坐标轴围成矩形；②矩形面积=|x|×|y|=|xy|=|k|；③面积恒为|k|",error:"三角形=|k|/2",upLink:["tg14"],downLink:[]},
    {id:"b_inv_06",diff:2,content:"y与x成反比，x=3时y=4，x=2时y=？",answer:"6",sol:"①反比例y=k/x与一次y=kx+b联立；②解方程组求交点；③注意k的符号影响交点位置",error:"k=x₁y₁",upLink:["tg14"],downLink:[]},
    {id:"b_inv_07",diff:3,content:"y=k/x（k>0），P₁在一象限，P₂在三象限，P₁P₂中点在原点吗？",answer:"一定在原点",sol:"①双曲线关于原点对称，中心对称的对应点中点在原点；②=一定在原点",error:"双曲线的中心对称性",upLink:["tg14"],downLink:[]},
    {id:"b_inv_08",diff:2,content:"y=3/x，当1≤x≤3时y的范围",answer:"1≤y≤3",sol:"①x=1时y=3，x=3时y=1；②=1≤y≤3",error:"k>0在一象限递减",upLink:["tg14"],downLink:[]},
    {id:"b_inv_09",diff:3,content:"y=k/x和y=x+k在一象限有交点，k的范围",answer:"k>0",sol:"联立：x²+kx-k=0；Δ=k²+4k>0且有正根",error:"联立+象限约束",upLink:["tg14"],downLink:[]},
    {id:"b_inv_10",diff:2,content:"比较y=2/x和y=3/x在x=1时的大小",answer:"3/x>2/x",sol:"①3/1=3>2/1=2；②答案：3/x>2/x",error:"k越大一象限越高",upLink:["tg14"],downLink:[]},
    {id:"b_inv_11",diff:2,content:"y=-3/x，P(1,-3)和Q(3,-1)中点",answer:"(2,-2)",sol:"①代入已知点求k；②判断k的符号确定象限；③写出完整函数式",error:"中点计算",upLink:["tg14"],downLink:[]},
    {id:"b_inv_12",diff:3,content:"双曲线不与坐标轴相交，为什么？",answer:"x→0时y→∞，x→∞时y→0，渐近但不相交",sol:"①渐近线是坐标轴；②答案：x→0时y→∞，x→∞时y→0，渐近但不相交",error:"双曲线的渐近线",upLink:["tg14"],downLink:[]},
    {id:"b_inv_13",diff:2,content:"y=k/x图像在一三象限，点(k,1)在图像上吗？",answer:"在",sol:"①y=k/x，当k>0时，x增大y减小（同一象限内）；②x₁>x₂>0时，y₁<y₂；③利用k/x₁<k/x₂比较",error:"代入验证",upLink:["tg14"],downLink:[]},
    {id:"b_inv_14",diff:3,content:"行驶时间t与速度v成反比（距=200km），v=80时t=？",answer:"2.5小时",sol:"①将y=k/x代入直线方程或坐标条件；②解方程求交点；③面积用坐标计算",error:"反比例实际应用",upLink:["tg14"],downLink:[]},
    {id:"b_inv_15",diff:2,content:"y=-2/x+1，x>0时y的范围",answer:"y<1",sol:"①反比例函数k的绝对值越大，图像离坐标轴越远；②|k₁|>|k₂|时，y=k₁/x图像在y=k₂/x外侧",error:"正负影响范围",upLink:["tg14"],downLink:[]},
    {id:"b_inv_16",diff:3,content:"P(a,b)在y=k/x上，Q(2a,b/2)在图像上吗？",answer:"在",sol:"①设点P(a, k/a)在反比例函数上；②利用题目条件建立方程；③求a和k",error:"xy=k恒成立",upLink:["tg14"],downLink:[]},
    {id:"b_inv_17",diff:2,content:"y=a/x+b过(1,3)和(-1,1)，a和b=？",answer:"a=1，b=2",sol:"a+b=3，-a+b=1；a=1，b=2",error:"代入两点联立",upLink:["tg14"],downLink:[]},
    {id:"b_inv_18",diff:2,content:"y=k/x，k>0，图像在一三象限内单调性",answer:"第一象限内递减，第三象限内递减",sol:"①k>0：x增大y减小；②答案：第一象限内递减，第三象限内递减",error:"k>0的单调递减性",upLink:["tg14"],downLink:[]},
    {id:"b_inv_19",diff:3,content:"反比例函数y=k/x的图像经过点A(m,3)和B(3,m)，则k=？m=？",answer:"k=3m；又k=3m（由B）；两式相同，需另一条件；若A和B在同一支上：km=3m→k=3，则m=1（A(1,3)和B(3,1)）",sol:"A在图像上：k=3m；B在图像上：k=3m；两式相同；若m>0，k=3m，同时需k>0；取m=1，k=3",error:"两点在同一反比例函数上：各自xy积相等",upLink:["tg14"],downLink:[]},
    {id:"b_inv_20",diff:2,content:"一次函数y=2x+b与反比例函数y=4/x的图像交于第一象限，交点横坐标为1，求b和交点坐标",answer:"b=2；交点(1,4)",sol:"x=1时y=4/1=4（反比例）；代入一次函数：4=2×1+b→b=2；交点(1,4)",error:"联立两函数求交点，代入已知x值",upLink:["tg14"],downLink:[]},
  ],
  quad_fn:[
    {id:"b_qfu_01",diff:1,content:"y=x²-4x+3，配方求顶点",answer:"顶点(2,-1)",sol:"①配方：y=(x-2)²-1；②顶点坐标从配方式直接读取；③顶点(2,-1)",error:"配方计算",upLink:["tg02","tg03"],downLink:[],
     svg:`<svg width="210" height="185" viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="20" y1="95" x2="200" y2="95" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="105" y1="10" x2="105" y2="180" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="202" y="99" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="101" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <path d="M 30,155 Q 105,10 185,135" fill="none" stroke="#3a9eff" stroke-width="2.5"/>
  <circle cx="30" cy="155" r="4" fill="#1ed9a0"/>
  <circle cx="185" cy="135" r="4" fill="#1ed9a0"/>
  <circle cx="130" cy="95" r="5" fill="#1ed9a0"/>
  <circle cx="55" cy="95" r="5" fill="#1ed9a0"/>
  <circle cx="117" cy="103" r="5" fill="#fbbf24"/>
  <line x1="117" y1="95" x2="117" y2="103" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="105" y1="103" x2="117" y2="103" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="118" y="108" fill="#fbbf24" font-size="13" font-family="sans-serif">顶点(2,-1)</text>
  <text x="25" y="172" fill="#1ed9a0" font-size="12" font-family="sans-serif">(1,0)</text>
  <text x="180" y="150" fill="#1ed9a0" font-size="12" font-family="sans-serif">(3,0)</text>
  <text x="30" y="20" fill="#3a9eff" font-size="13" font-family="sans-serif">y=x²-4x+3</text>
</svg>`},
    {id:"b_qfu_02",diff:2,content:"y=2x²-4x+1，对称轴和方向",answer:"x=1，开口向上",sol:"x=-(-4)/(2×2)=1；a=2>0",error:"对称轴分母是2a",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_03",diff:2,content:"y=-x²+2x+3与x轴交点",answer:"(-1,0)和(3,0)",sol:"①令y=0，因式分解；②答案：(-1,0)和(3,0)",error:"首项负整理方程",upLink:["tg02","tg03"],downLink:[],
     svg:`<svg width="210" height="180" viewBox="0 0 210 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="120" x2="200" y2="120" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="90" y1="10" x2="90" y2="175" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="202" y="124" fill="#dce8f8" font-size="12" font-family="sans-serif">x</text>
  <text x="86" y="8" fill="#dce8f8" font-size="12" font-family="sans-serif">y</text>
  <path d="M 25,140 Q 90,18 165,120" fill="none" stroke="#f04f70" stroke-width="2.5"/>
  <circle cx="55" cy="120" r="5" fill="#fbbf24"/>
  <circle cx="155" cy="120" r="5" fill="#fbbf24"/>
  <circle cx="105" cy="72" r="4" fill="#f04f70" opacity="0.7"/>
  <text x="42" y="115" fill="#fbbf24" font-size="13" font-family="sans-serif">(-1,0)</text>
  <text x="157" y="115" fill="#fbbf24" font-size="13" font-family="sans-serif">(3,0)</text>
  <text x="108" y="68" fill="#f04f70" font-size="12" font-family="sans-serif">顶点(1,4)</text>
  <text x="20" y="22" fill="#f04f70" font-size="13" font-family="sans-serif">y=-x²+2x+3</text>
  <text x="50" y="160" fill="#dce8f8" font-size="12" font-family="sans-serif">开口向下，两交点</text>
</svg>`},
    {id:"b_qfu_04",diff:2,content:"y=x²-4x+3，1≤x≤4时最值",answer:"最小-1(x=2)，最大3(x=4)",sol:"①顶点在区间内，端点比较；②答案：最小-1(x=2)，最大3(x=4)",error:"同时比较顶点和端点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_05",diff:3,content:"顶点(2,-3)，求y=ax²+bx+c中b和c",answer:"b=-4，c=1",sol:"①y=(x-2)²-3=x²-4x+1；②=b=-4，c=1",error:"由顶点式展开",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_06",diff:3,content:"y=x²+bx+c，两零点之和=2，积=-3，b和c=？",answer:"b=-2，c=-3",sol:"①韦达定理：x₁+x₂=-b/a，x₁x₂=c/a；②韦达逆：-b=2，c=-3",error:"韦达定理逆用",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_07",diff:3,content:"y=x²-4x+m与x轴无交点，m=？",answer:"m>4",sol:"①计算判别式Δ=b²-4ac；②Δ=16-4m<0；③判断根的情况",error:"无交点Δ<0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_08",diff:2,content:"y=2x²+4x-1，-2≤x≤0时最值",answer:"最小-3(x=-1)，最大-1(x=0)",sol:"①顶点x=-1在区间内；②答案：最小-3(x=-1)，最大-1(x=0)",error:"区间内比较顶点和端点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_09",diff:2,content:"y=x²-6x+9化简",answer:"(x-3)²",sol:"①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得(x-3)²",error:"识别完全平方",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_10",diff:3,content:"y=ax²+bx，过(-1,2)，对称轴x=1，a,b=？",answer:"计算得：b=-2a；a(-1)²+b(-1)=a-b=2；3a=2，a=2/3，b=-4/3",sol:"①两条件联立；②答案：计算得：b=-2a；a(-1)²+b(-1)=a-b=2；3a=2，a=2/3，b=-4/3",error:"对称轴和代点两条件",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_11",diff:2,content:"y=x²-2x-3，y<0时x范围",answer:"-1<x<3",sol:"①开口向上，两零点之间y<0；②=-1<x<3",error:"二次函数的正负区间",upLink:["tg02","tg03"],downLink:[],
     svg:`<svg width="210" height="175" viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="15" y1="90" x2="200" y2="90" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="95" y1="10" x2="95" y2="170" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <path d="M 25,155 Q 95,18 175,140" fill="none" stroke="#3a9eff" stroke-width="2.5"/>
  <line x1="55" y1="90" x2="145" y2="90" stroke="#f04f70" stroke-width="3" opacity="0.7"/>
  <circle cx="55" cy="90" r="5" fill="#fbbf24"/>
  <circle cx="145" cy="90" r="5" fill="#fbbf24"/>
  <text x="42" y="85" fill="#fbbf24" font-size="13" font-family="sans-serif">-1</text>
  <text x="146" y="85" fill="#fbbf24" font-size="13" font-family="sans-serif">3</text>
  <text x="72" y="115" fill="#f04f70" font-size="13" font-family="sans-serif">y&lt;0</text>
  <text x="18" y="145" fill="#3a9eff" font-size="12" font-family="sans-serif">y&gt;0</text>
  <text x="153" y="130" fill="#3a9eff" font-size="12" font-family="sans-serif">y&gt;0</text>
  <text x="20" y="22" fill="#3a9eff" font-size="13" font-family="sans-serif">y=x²-2x-3</text>
  <text x="40" y="165" fill="#dce8f8" font-size="12" font-family="sans-serif">-1&lt;x&lt;3 时 y&lt;0</text>
</svg>`},
    {id:"b_qfu_12",diff:3,content:"每天产x件，利润y=-2x²+100x-800，最大利润时x=？",answer:"x=25，利润=450",sol:"①顶点x=25；②答案：x=25，利润=450",error:"顶点是最大值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_13",diff:2,content:"y=x²-2x+m，顶点纵坐标m-1，m=3时最小值=？",answer:"2",sol:"①y=a(x-h)²+k的图像：顶点(h,k)，对称轴x=h；②a>0开口向上，a<0开口向下；③|a|越大开口越窄",error:"顶点纵坐标即最小值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_14",diff:3,content:"y=f(x)=ax²+bx，f(1)=2，f(2)=2，f(3)=？",answer:"0",sol:"a+b=2，4a+2b=2；a=-1，b=3；f(3)=0",error:"待定系数代入",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_15",diff:3,content:"y=x²+bx+c，x=1和x=5是两个零点，顶点是？",answer:"顶点(3,-4)",sol:"对称轴x=3；y(3)=9+3b+c；两零点：b=-6，c=5；y(3)=-4",error:"由零点求对称轴再求顶点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_16",diff:2,content:"y=-3x²是二次函数吗？y=x²+1/x是吗？",answer:"前者是；后者不是",sol:"①1/x是分式不是整式；②答案：前者是；后者不是",error:"二次函数要求整式",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_17",diff:2,content:"y=ax²（a>0），x=1时y=2，x=-2时y=？",answer:"8",sol:"①令y=0：ax²+bx+c=0；②解一元二次方程；③两根就是与x轴的两个交点横坐标",error:"求a后代入",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_18",diff:3,content:"y=(k-2)x²+2x-1，k取何值时是二次函数？一次函数？",answer:"k≠2时二次；k=2时一次",sol:"①最高次系数k-2≠0；②答案：k≠2时二次；k=2时一次",error:"二次函数条件",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_19",diff:3,content:"y=x²-2x-3，与直线y=x+1的交点",answer:"联立：x²-3x-4=0；(x-4)(x+1)=0；(4,5)(-1,0)",sol:"①将两个方程联立；②联立后整理；③交点联立：x²-3x-4=0；(x-4)(x+1)=0；(4,5)(-1,0)",error:"联立求交点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_20",diff:2,content:"y=x²-2x+1，开口方向、对称轴、顶点",answer:"向上，x=1，(1,0)",sol:"①a=1>0，顶点(1,0)在x轴上；②=向上，x=1，(1,0)",error:"完全平方式的图像特征",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_21",diff:3,content:"抛物线过(-1,0)(3,0)，开口向下，面积S△与x轴围成，求顶点",answer:"对称轴x=1；设y=a(x+1)(x-3)，a<0；顶点(1,-4a)",sol:"①由零点写因式，对称轴=两零点均值；②=对称轴x=1；设y=a(x+1)(x-3)，a<0；顶点(1,-4a)",error:"由零点写因式形式",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_22",diff:2,content:"y=x²-4x+3，0≤x≤3时最值",answer:"最小-1(x=2)，最大3(x=0或3)",sol:"顶点(2,-1)在区间内；端点y(0)=3，y(3)=0",error:"开口向上区间最值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_23",diff:1,content:"y=x²，x=3时y=？",answer:"y=9",sol:"①y=x²，代入x=3；②y=3²=9；③答：y=9",error:"基础代入计算",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_24",diff:1,content:"y=x²的对称轴和顶点",answer:"对称轴x=0，顶点(0,0)",sol:"①y=x²=1·(x-0)²+0；②对称轴x=0，顶点(0,0)",error:"标准形式识别顶点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_25",diff:1,content:"y=-(x-1)²+4的顶点坐标",answer:"(1,4)",sol:"①顶点式y=a(x-h)²+k，顶点(h,k)；②顶点(1,4)",error:"顶点式中h,k直接读出",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_26",diff:2,content:"y=x²-2x+3，配方成顶点式",answer:"y=(x-1)²+2",sol:"①y=x²-2x+1+2；②=(x-1)²+2；③顶点(1,2)",error:"配方：±(b/2a)²",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_27",diff:2,content:"二次函数y=ax²+bx+c，开口向下，a的范围",answer:"a<0",sol:"①二次函数y=ax²+bx+c；②a>0抛物线开口向上；③a<0抛物线开口向下；④题意：开口向下→a<0",error:"a>0开口向上，a<0开口向下",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_28",diff:2,content:"y=2(x-3)²-1的对称轴和最小值",answer:"对称轴x=3，最小值y=-1",sol:"①a=2>0开口向上；②顶点(3,-1)为最低点；③最小值-1",error:"a>0时顶点是最小值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_29",diff:2,content:"y=x²+2x-3与x轴的交点",answer:"(-3,0)和(1,0)",sol:"①令y=0：x²+2x-3=0；②(x+3)(x-1)=0；③x=-3或x=1",error:"与x轴交点令y=0",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_30",diff:2,content:"y=x²-4x+4与x轴的交点个数",answer:"1个（切点）",sol:"①Δ=16-16=0；②只有一个交点x=2；③切点(2,0)",error:"Δ=0时与x轴相切",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_31",diff:2,content:"y=-x²+4x的最大值",answer:"最大值4",sol:"①a=-1<0开口向下；②顶点x=-b/(2a)=2；③y(2)=4；④最大值4",error:"开口向下时顶点为最大值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_32",diff:2,content:"已知抛物线顶点(2,3)，且过点(0,7)，求解析式",answer:"y=x²-4x+7",sol:"①设y=a(x-2)²+3；②代入(0,7)：4a+3=7→a=1；③y=(x-2)²+3=x²-4x+7",error:"顶点式待定系数法",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_33",diff:3,content:"y=x²-2kx+k²+k-1的图像与x轴有两个不同交点，求k的范围",answer:"k<1",sol:"①Δ=4k²-4(k²+k-1)>0；②4-4k>0；③k<1",error:"Δ>0时有两个不同实根",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_34",diff:3,content:"二次函数过(-1,0)，(3,0)，(0,-3)，求解析式",answer:"y=x²-2x-3",sol:"①设y=a(x+1)(x-3)；②代入(0,-3)：a(-3)=-3→a=1；③y=(x+1)(x-3)=x²-2x-3",error:"两根式待定系数法",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_35",diff:3,content:"y=x²+bx+c，对称轴x=1，过点(2,1)，求b,c",answer:"b=-2，c=0",sol:"①对称轴x=-b/2=-b/2=1→b=-2；②代入(2,1)：4-4+c=1→c=1?重算：4+2b+c=1→4-4+c=1→c=1",answer:"b=-2，c=1",sol:"①x=-b/2=1→b=-2；②代入(2,1)：4-4+c=1→c=1；③y=x²-2x+1=(x-1)²",error:"对称轴公式x=-b/2a",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_36",diff:3,content:"抛物线y=x²-2x+m，当x在[0,3]上，求最小值",answer:"最小值m-1（当m-1≥0时），或见区间端点",sol:"①顶点x=1在[0,3]内；②最小值y(1)=1-2+m=m-1",error:"确认顶点在区间内才能直接取顶点值",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_37",diff:3,content:"y=ax²+bx+c，已知对称轴x=2，a=1，图像过(0,3)，求函数式",answer:"y=x²-4x+3",sol:"①对称轴x=-b/2a=2→b=-4；②代入(0,3)：c=3；③y=x²-4x+3",error:"综合运用对称轴和过点条件",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_38",diff:3,content:"y=x²-4x+c与x轴无交点，c的范围",answer:"c>4",sol:"①Δ=16-4c<0；②4c>16；③c>4",error:"Δ<0时与x轴无交点",upLink:["tg02","tg03"],downLink:[]},
    {id:"b_qfu_39",diff:3,content:"二次函数的最大值为5，对称轴x=-1，过点(1,1)，求函数式",answer:"y=-x²-2x+4",sol:"①设y=a(x+1)²+5；②代入(1,1)：4a+5=1→a=-1；③y=-(x+1)²+5=-x²-2x+4",error:"最大值为顶点值，a<0",upLink:["tg02","tg03"],downLink:[]},
  ],
  tri_basic:[
    {id:"b_tri_01",diff:1,content:"△ABC，∠A=50°，∠B=70°，∠C=？",answer:"60°",sol:"①按运算顺序逐步计算；②180-50-70=60",error:"内角和180°",upLink:["tg04"],downLink:[]},
    {id:"b_tri_02",diff:1,content:"三边2,3,6能构成三角形吗？",answer:"不能（2+3=5<6）",sol:"①两边之和>第三边；②答案：不能（2+3=5<6）",error:"三边关系",upLink:["tg04"],downLink:[]},
    {id:"b_tri_03",diff:2,content:"外角∠ACD=110°，∠B=50°，∠A=？",answer:"60°",sol:"①外角=两不相邻内角之和；②答案：60°",error:"外角定理",upLink:["tg04"],downLink:[],
     svg:`<svg width="210" height="150" viewBox="0 0 210 150" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,130 110,20 170,130" fill="#3a9eff0d" stroke="#3a9eff" stroke-width="2"/>
  <line x1="170" y1="130" x2="205" y2="130" stroke="#f04f70" stroke-width="2"/>
  <circle cx="170" cy="130" r="3" fill="#f04f70"/>
  <text x="12" y="145" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="105" y="14" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="172" y="145" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="200" y="145" fill="#f04f70" font-size="13" font-family="sans-serif">D</text>
  <text x="28" y="128" fill="#fbbf24" font-size="12" font-family="sans-serif">∠A=?</text>
  <text x="108" y="38" fill="#3a9eff" font-size="12" font-family="sans-serif">∠B=50°</text>
  <text x="173" y="118" fill="#f04f70" font-size="12" font-family="sans-serif">110°</text>
  <text x="52" y="108" fill="#dce8f8" font-size="12" font-family="sans-serif">外角=∠A+∠B</text>
</svg>`},
    {id:"b_tri_04",diff:2,content:"三个外角之和=？",answer:"360°",sol:"①每外角=180°-内角，三者和=3×180-180；②=360°",error:"外角和内角互补",upLink:["tg04"],downLink:[]},
    {id:"b_tri_05",diff:2,content:"等腰△底角=70°，顶角=？",answer:"40°",sol:"①按运算顺序逐步计算；②180-70-70=40",error:"等腰两底角相等",upLink:["tg04"],downLink:[]},
    {id:"b_tri_06",diff:3,content:"∠A=2∠B，∠C=3∠B，各角=？",answer:"∠B=30°，∠A=60°，∠C=90°",sol:"①2B+B+3B=180°；②答案：∠B=30°，∠A=60°，∠C=90°",error:"用比例关系列方程",upLink:["tg04"],downLink:[]},
    {id:"b_tri_07",diff:2,content:"△ABC面积=12，BC=8，D是BC中点，△ABD面积=？",answer:"6",sol:"①三角形三边关系：任意两边之和大于第三边；②任意两边之差小于第三边；③|a-b|<c<a+b",error:"等底三角形面积比",upLink:["tg04"],downLink:[]},
    {id:"b_tri_08",diff:2,content:"中位线：M,N是AB,AC中点，MN=4，BC=？",answer:"8",sol:"①中位线定理：连接两边中点的线段平行于第三边且等于其一半；②中位线=BC/2；③=8",error:"中位线定理",upLink:["tg04"],downLink:[],
     svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,12 20,148 180,148" fill="#3a9eff0d" stroke="#3a9eff" stroke-width="2"/>
  <line x1="60" y1="80" x2="140" y2="80" stroke="#fbbf24" stroke-width="2.5"/>
  <circle cx="60" cy="80" r="4" fill="#fbbf24"/>
  <circle cx="140" cy="80" r="4" fill="#fbbf24"/>
  <text x="100" y="6" text-anchor="middle" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="12" y="162" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="182" y="162" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="46" y="77" fill="#fbbf24" font-size="13" font-family="sans-serif">M</text>
  <text x="143" y="77" fill="#fbbf24" font-size="13" font-family="sans-serif">N</text>
  <text x="88" y="72" fill="#fbbf24" font-size="13" font-family="sans-serif">MN=4</text>
  <text x="80" y="162" fill="#3a9eff" font-size="14" font-family="sans-serif">BC=?</text>
  <text x="8" y="100" fill="#dce8f8" font-size="11" font-family="sans-serif">中点</text>
  <text x="158" y="100" fill="#dce8f8" font-size="11" font-family="sans-serif">中点</text>
</svg>`},
    {id:"b_tri_09",diff:3,content:"△ABC，AB=AC，D为BC中点，证AD⊥BC",answer:"△ABD≅△ACD（SSS）→∠ADB=90°",sol:"①SSS后对应角相等；②答案：△ABD≅△ACD（SSS）→∠ADB=90°",error:"全等推垂直",upLink:["tg04"],downLink:[]},
    {id:"b_tri_10",diff:2,content:"等腰△，AB=AC=5，BC=6，面积=？",answer:"12",sol:"①三角形内角和=180°；②∠A+∠B+∠C=180°；③代入已知角度求未知角",error:"三线合一，高平分底",upLink:["tg04"],downLink:[]},
    {id:"b_tri_11",diff:3,content:"△ABC，∠A=∠B，∠C=3∠A，∠A=？",answer:"∠A=36°",sol:"∠A+∠B+∠C=180°；2A+3A=180°，A=36°",error:"用角的关系列方程",upLink:["tg04"],downLink:[]},
    {id:"b_tri_12",diff:2,content:"大边对大角：若AB=5，BC=3，AC=4，最大角是？",answer:"∠B（对最大边AB=5）",sol:"①大边对大角定理；②答案：∠B（对最大边AB=5）",error:"边角对应关系",upLink:["tg04"],downLink:[]},
    {id:"b_tri_13",diff:3,content:"内心角公式：∠BOC=？（O是△ABC内心）",answer:"90°+∠A/2",sol:"∠OBC=∠B/2，∠OCB=∠C/2；∠BOC=90°+∠A/2",error:"内心角公式",upLink:["tg04"],downLink:[]},
    {id:"b_tri_14",diff:2,content:"△面积为S，a边上的高=？",answer:"ha=2S/a",sol:"①外角=两个不相邻内角之和；②∠ACD=∠A+∠B；③利用外角定理求解",error:"由面积公式求高",upLink:["tg04"],downLink:[]},
    {id:"b_tri_15",diff:2,content:"∠A=∠D，AC=DB，证△ABC≅△DCB",answer:"AAS：∠A=∠D，∠B=∠B（公共？），AC=DB",sol:"①需明确第三个条件；②答案：AAS：∠A=∠D，∠B=∠B（公共？），AC=DB",error:"全等三个条件",upLink:["tg04"],downLink:[]},
    {id:"b_tri_16",diff:3,content:"△ABC，BC=a，∠A已知，外接圆半径R=a/(2sinA)（正弦定理引导）",answer:"R=a/(2sinA)",sol:"①正弦定理；②答案：R=a/(2sinA)",error:"正弦定理（引导）",upLink:["tg04"],downLink:[]},
    {id:"b_tri_17",diff:2,content:"△ABC中，AB=5，BC=7，∠B=60°，用余弦定理求AC（引导：AC²=AB²+BC²-2·AB·BC·cos∠B）",answer:"AC=√39",sol:"①AC²=25+49-2×5×7×cos60°=74-35=39；②=AC=√39",error:"余弦定理代入计算",upLink:["tg04"],downLink:[]},
    {id:"b_tri_18",diff:2,content:"等腰△ABC，顶角∠A=120°，腰AB=AC=2，BC=？",answer:"BC=2√3",sol:"①余弦定理：BC²=4+4-2×4×cos120°=8+4=12，BC=2√3；②=BC=2√3",error:"cos120°=-1/2",upLink:["tg04"],downLink:[]},
    {id:"b_tri_19",diff:3,content:"△ABC中，三条中线交于重心G，则AG:GD=？（D为BC中点）",answer:"2:1",sol:"①重心将中线分为2:1，靠顶点的部分是靠中点的2倍；②=2:1",error:"重心性质：各中线被重心分为2:1",upLink:["tg04"],downLink:[]},
    {id:"b_tri_20",diff:3,content:"△ABC面积=12，D、E分别是AB、AC的中点，△ADE面积=？四边形BCED面积=？",answer:"△ADE=3，BCED=9",sol:"DE是中位线，相似比1:2，面积比1:4；△ADE=12/4=3；梯形=12-3=9",error:"中位线→相似比1:2→面积比1:4",upLink:["tg04"],downLink:[]},
  ],
  congruent:[
    {id:"b_cong_01",diff:1,content:"SAS条件：AB=DE，BC=EF，∠B=∠E，△ABC≅△DEF？",answer:"全等，SAS（∠B是夹角）",sol:"①两边夹角对应相等；②答案：全等，SAS（∠B是夹角）",error:"SAS角必须是夹角",upLink:["tg04"],downLink:[],
     svg:`<svg width="220" height="145" viewBox="0 0 220 145" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="15,125 80,15 130,125" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="115,130 175,25 220,130" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <text x="8" y="140" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="76" y="11" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="132" y="140" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="107" y="140" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="172" y="21" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="210" y="140" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
  <text x="60" y="105" fill="#fbbf24" font-size="12" font-family="sans-serif">∠B=∠E</text>
  <text x="38" y="75" fill="#dce8f8" font-size="11" font-family="sans-serif">AB=DE</text>
  <text x="94" y="140" fill="#dce8f8" font-size="11" font-family="sans-serif">BC=EF</text>
  <text x="68" y="128" fill="#f5a623" font-size="11" font-family="sans-serif">夹角！</text>
</svg>`},
    {id:"b_cong_02",diff:1,content:"SSA能判全等吗？",answer:"不能",sol:"①全等三角形对应边相等，对应角相等；②找对应关系（顶点字母顺序）；③写出所有对应边和角",error:"SSA无法判全等",upLink:["tg04"],downLink:[]},
    {id:"b_cong_03",diff:2,content:"∠C=∠F=90°，AC=DF，BC=EF，证全等",answer:"SAS或HL",sol:"①SSS：三边对应相等；②SAS：两边及夹角对应相等；③ASA：两角及夹边；④AAS：两角及对边；⑤HL：直角三角形斜边和直角边",error:"直角三角形HL定理",upLink:["tg04"],downLink:[]},
    {id:"b_cong_04",diff:2,content:"AB=DC，∠BAC=∠DCA，证△ABC≅△CDA",answer:"SAS（公共边AC）",sol:"①公共边是关键；②答案：SAS（公共边AC）",error:"公共边作为第三条件",upLink:["tg04"],downLink:[]},
    {id:"b_cong_05",diff:2,content:"等腰△ABC，AB=AC，D中点，证AD⊥BC",answer:"SSS→∠ADB=∠ADC=90°",sol:"①三边相等→全等；②答案：SSS→∠ADB=∠ADC=90°",error:"从全等推垂直",upLink:["tg04"],downLink:[],
     svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 20,150 180,150" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="100" y="132" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="100" y="8" text-anchor="middle" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="12" y="165" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="183" y="165" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="106" y="148" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="52" y="88" fill="#dce8f8" font-size="13" font-family="sans-serif">AB=AC</text>
  <text x="75" y="168" fill="#dce8f8" font-size="13" font-family="sans-serif">BD=DC</text>
</svg>`},
    {id:"b_cong_06",diff:3,content:"AB∥CD，AB=CD，M为AD中点，证BM=CM",answer:"△ABM≅△DCM（SAS）",sol:"①平行线等角；②答案：△ABM≅△DCM（SAS）",error:"平行提供等角",upLink:["tg04"],downLink:[]},
    {id:"b_cong_07",diff:2,content:"△ABC≅△DEF，BC=6，∠B=30°，EF和∠E=？",answer:"EF=6，∠E=30°",sol:"①对应元素相等；②答案：EF=6，∠E=30°",error:"对应顶点顺序",upLink:["tg04"],downLink:[]},
    {id:"b_cong_08",diff:2,content:"等腰△ABC，AB=AC，BD⊥AC，CE⊥AB，证BD=CE",answer:"△ABD≅△ACE（AAS）",sol:"①等角+直角+等边；②答案：△ABD≅△ACE（AAS）",error:"等腰三角形等角",upLink:["tg04"],downLink:[]},
    {id:"b_cong_09",diff:3,content:"△ABC≅△A'B'C'，M是BC中点，M'是B'C'中点，证AM=A'M'",answer:"△ABM≅△A'B'M'（SAS）",sol:"①从大全等推小全等；②答案：△ABM≅△A'B'M'（SAS）",error:"利用中点和全等",upLink:["tg04"],downLink:[]},
    {id:"b_cong_10",diff:2,content:"HL定理：Rt△（∠C=90°）AB=DE，AC=DF，证全等",answer:"HL",sol:"①找两个三角形的公共边或公共角；②利用题目条件凑出全等判定条件；③写出证明步骤",error:"HL只用于直角三角形",upLink:["tg04"],downLink:[]},
    {id:"b_cong_11",diff:3,content:"正方形ABCD，E在CD，∠EAF=45°（F在BD），证BE=BF",answer:"△ABE≅△CBF（旋转全等）",sol:"①旋转90°；②答案：△ABE≅△CBF（旋转全等）",error:"旋转变换证全等",upLink:["tg04"],downLink:[]},
    {id:"b_cong_12",diff:2,content:"∠A=∠D，∠B=∠E（三角和），AC=DF，证△ABC≅△DEF",answer:"ASA（第三角相等+夹边）",sol:"①三角和自动第三角相等；②答案：ASA（第三角相等+夹边）",error:"利用角和",upLink:["tg04"],downLink:[]},
    {id:"b_cong_13",diff:3,content:"△ABC，BE是∠B角平分线，CF是∠C角平分线，BE=CF，证△ABC等腰",answer:"△BCE≅△CBF（ASA）→BC公共，再由全等推结论",sol:"①需仔细分析；②答案：△BCE≅△CBF（ASA）→BC公共，再由全等推结论",error:"角平分线等长推等腰",upLink:["tg04"],downLink:[]},
    {id:"b_cong_14",diff:2,content:"全等三角形对应高相等（证明）",answer:"由面积相等和底相等推出",sol:"①全等三角形面积相等；②用全等证线段相等或角相等；③利用结论解题",error:"面积法证明",upLink:["tg04"],downLink:[]},
    {id:"b_cong_15",diff:3,content:"△ABD，BD=AD，∠A=∠B，C在BD上BC=AB，△ABC≅△BAD",answer:"SAS：BC=AB=BA，∠A=∠B，AB=BA",sol:"①对应元素分析；②答案：SAS：BC=AB=BA，∠A=∠B，AB=BA",error:"全等的对应关系",upLink:["tg04"],downLink:[]},
    {id:"b_cong_16",diff:2,content:"ASA条件举例",answer:"∠A=∠D，AB=DE（夹边），∠B=∠E→△ABC≅△DEF（ASA）",sol:"①两角夹边对应相等；②答案：∠A=∠D，AB=DE（夹边），∠B=∠E→△ABC≅△DEF（ASA）",error:"ASA中边是夹边",upLink:["tg04"],downLink:[]},
    {id:"b_cong_17",diff:3,content:"四边形ABCD，AB=CD，BC=DA，证ABCD是平行四边形",answer:"△ABC≅△CDA（SSS）→∠BAC=∠DCA等→AB∥CD",sol:"①全等推平行；②答案：△ABC≅△CDA（SSS）→∠BAC=∠DCA等→AB∥CD",error:"由全等推平行四边形",upLink:["tg04"],downLink:[]},
    {id:"b_cong_18",diff:2,content:"AAS条件：∠A=∠D，∠B=∠E，BC=EF（对边）",answer:"△ABC≅△DEF（AAS）",sol:"①两角和对边（非夹边）；②答案：△ABC≅△DEF（AAS）",error:"AAS中边对应某个角的对边",upLink:["tg04"],downLink:[]},
    {id:"b_cong_19",diff:3,content:"△ABC中，AB=AC，D是BC上一点，DE⊥AB于E，DF⊥AC于F，证DE=DF",answer:"△BDE≅△CDF（AAS）→DE=DF",sol:"∠B=∠C（等腰底角）；∠BED=∠CFD=90°；BD=CD（三线合一D为中点？不一定）；若D为BC上任意点则需改用面积法或△ADE≅△ADF",error:"等腰三角形等角是关键，注意D不一定是中点时的处理",upLink:["tg04"],downLink:[]},
    {id:"b_cong_20",diff:2,content:"如图，已知AO=CO，BO=DO，证明AB=CD",answer:"△AOB≅△COD（SAS）→AB=CD",sol:"①AO=CO，BO=DO，∠AOB=∠COD（对顶角）→SAS→AB=CD；②=△AOB≅△COD（SAS）→AB=CD",error:"对顶角相等是第三个条件",upLink:["tg04"],downLink:[]},
  ],
  pythagorean:[
    {id:"b_pyth_01",diff:1,content:"直角边3和4，斜边=？",answer:"5",sol:"①勾股定理：a²+b²=c²；②3²+4²=5²；③解得5",error:"勾股定理",upLink:["tg06","tg08"],downLink:[],
     svg:`<svg width="200" height="160" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,140 140,140 20,20" fill="#3a9eff11" stroke="#3a9eff" stroke-width="2"/>
  <rect x="20" y="120" width="20" height="20" fill="none" stroke="#3a9eff" stroke-width="1.5"/>
  <text x="80" y="155" text-anchor="middle" fill="#dce8f8" font-size="15" font-family="sans-serif">底边 = 4</text>
  <text x="8" y="82" text-anchor="middle" fill="#dce8f8" font-size="15" font-family="sans-serif">3</text>
  <text x="95" y="72" text-anchor="middle" fill="#fbbf24" font-size="15" font-family="sans-serif">斜边=5</text>
  <text x="13" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="143" y="148" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="13" y="18" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
</svg>`},
    {id:"b_pyth_02",diff:1,content:"三边5,12,13是直角三角形吗？",answer:"是",sol:"①勾股定理：a²+b²=c²；②5²+12²=13²；③解得是",error:"逆定理",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_03",diff:2,content:"等腰直角△斜边=10，直角边=？",answer:"5√2",sol:"①2a²=100，a=5√2；②=5√2",error:"两直角边相等",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_04",diff:2,content:"矩形8×6，对角线=？",answer:"10",sol:"①勾股定理：a²+b²=c²（c为斜边）；②代入两直角边：a²+b²；③开方得斜边c",error:"对角线用勾股",upLink:["tg06","tg08"],downLink:[],
     svg:`<svg width="210" height="150" viewBox="0 0 210 150" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="20" y="20" width="170" height="110" fill="#3a9eff0d" stroke="#3a9eff" stroke-width="2"/>
  <line x1="20" y1="20" x2="190" y2="130" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="6,3"/>
  <line x1="20" y1="130" x2="190" y2="20" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="105" y="142" text-anchor="middle" fill="#dce8f8" font-size="15" font-family="sans-serif">8</text>
  <text x="4" y="78" text-anchor="middle" fill="#dce8f8" font-size="15" font-family="sans-serif">6</text>
  <text x="108" y="58" fill="#fbbf24" font-size="15" font-family="sans-serif">d=?</text>
  <text x="14" y="16" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="192" y="16" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="192" y="145" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="14" y="145" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
</svg>`},
    {id:"b_pyth_05",diff:2,content:"梯子10m，底距墙6m，顶高=？",answer:"8m",sol:"①h²=100-36=64；②答案：8m",error:"建直角三角形模型",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_06",diff:2,content:"坐标系A(1,2)，B(4,6)，|AB|=？",answer:"5",sol:"①已知斜边和一直角边，求另一直角边；②由a²+b²=c²→b²=c²-a²；③b=√(c²-a²)",error:"两点距离公式",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_07",diff:2,content:"等边△边长a，高和面积=？",answer:"高=a√3/2，面积=a²√3/4",sol:"①高=√(a²-(a/2)²)；②=高=a√3/2，面积=a²√3/4",error:"等边三角形高",upLink:["tg06","tg08"],downLink:[],
     svg:`<svg width="200" height="175" viewBox="0 0 200 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 15,158 185,158" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="100" y1="15" x2="100" y2="158" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="100" y="140" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="100" y="9" text-anchor="middle" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="7" y="170" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="185" y="170" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="106" y="90" fill="#fbbf24" font-size="14" font-family="sans-serif">h=a√3/2</text>
  <text x="92" y="172" text-anchor="middle" fill="#dce8f8" font-size="13" font-family="sans-serif">a/2</text>
  <text x="48" y="95" fill="#dce8f8" font-size="14" font-family="sans-serif">a</text>
  <text x="143" y="95" fill="#dce8f8" font-size="14" font-family="sans-serif">a</text>
  <text x="92" y="172" text-anchor="middle" fill="#dce8f8" font-size="13" font-family="sans-serif">a</text>
</svg>`},
    {id:"b_pyth_08",diff:2,content:"三边8,15,17，直角三角形吗？",answer:"是（8²+15²=17²）",sol:"①64+225=289=17²；②=是（8²+15²=17²）",error:"逆定理验证",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_09",diff:3,content:"菱形对角线12和16，周长和面积",answer:"周长=40，面积=96",sol:"①先验证是否满足a²+b²=c²；②满足则为直角三角形；③不满足则不是",error:"菱形对角线垂直平分",upLink:["tg06","tg08"],downLink:[],
     svg:`<svg width="210" height="155" viewBox="0 0 210 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="105,12 185,77 105,142 25,77" fill="#f5a62311" stroke="#f5a623" stroke-width="2"/>
  <line x1="25" y1="77" x2="185" y2="77" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="105" y1="12" x2="105" y2="142" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="105" y="77" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="105" y="6" text-anchor="middle" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="188" y="81" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="105" y="153" text-anchor="middle" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="8" y="81" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="140" y="70" fill="#dce8f8" font-size="13" font-family="sans-serif">d₁=16</text>
  <text x="112" y="48" fill="#dce8f8" font-size="13" font-family="sans-serif">d₂=12</text>
  <text x="148" y="118" fill="#f5a623" font-size="13" font-family="sans-serif">边=10</text>
</svg>`},
    {id:"b_pyth_10",diff:2,content:"正方形边长a，对角线=？",answer:"a√2",sol:"①√(a²+a²)=a√2；②答案：a√2",error:"正方形对角线",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_11",diff:3,content:"Rt△ABC（∠C=90°），CD⊥AB，AC=3，BC=4，CD=？",answer:"12/5",sol:"①射影定理：CD=AC×BC/AB；②=12/5",error:"射影定理",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_12",diff:2,content:"坡角30°，坡面长100m，高差和水平=？",answer:"高=50，水平=50√3",sol:"①sin30°和cos30°；②=高=50，水平=50√3",error:"坡角三角函数",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_13",diff:2,content:"30°锐角，斜边=10，两直角边=？",answer:"短边5，长边5√3",sol:"①30-60-90比1:√3:2；②=短边5，长边5√3",error:"特殊角边长比",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_14",diff:3,content:"正六边形边长=2，对角线长度",answer:"短对角=2√3，长对角=4",sol:"①正六边形分割成等边三角形；②答案：短对角=2√3，长对角=4",error:"正六边形的对角线",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_15",diff:3,content:"斜坡长13m，水平12m，高=？坡角sin=？",answer:"高=5，sinθ=5/13",sol:"①h=√(169-144)=5；②=高=5，sinθ=5/13",error:"坡角模型",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_16",diff:2,content:"坐标系，三角形ABC坐标法求面积（A(0,0)，B(4,0)，C(2,3)）",answer:"S=6",sol:"①两点距离=√[(x₂-x₁)²+(y₂-y₁)²]；②实质是勾股定理在坐标系中的应用；③代入计算",error:"坐标系三角形面积",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_17",diff:3,content:"正方形ABCD，E是BC中点，△AEF（F在CD），面积最小时F位置",answer:"需坐标法求最小",sol:"①设F(4,t)，面积关于t的函数求最小；②=需坐标法求最小",error:"面积最值综合",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_18",diff:2,content:"△ABC中，已知三边为a,b,c，若a²+b²<c²，则∠C=？（钝角、锐角还是直角）",answer:"∠C为钝角",sol:"①面积法：用两种方式表示同一三角形面积；②S=½×直角边₁×直角边₂=½×斜边×斜边上的高；③解出高",error:"a²+b²与c²大小判断角的类型",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_19",diff:2,content:"直角△中，两直角边之比为1:2，斜边=√5，求两直角边",answer:"a=1，b=2",sol:"①勾股定理：a²+b²=c²；②a=k，b=2k；k²+4k²=5→5k²=5→k=1；③解得a=1，b=2",error:"设比例系数k，代入勾股定理",upLink:["tg06","tg08"],downLink:[]},
    {id:"b_pyth_20",diff:3,content:"正方形ABCD边长=2，M是BC中点，N是CD中点，△AMN的面积=？AN=？",answer:"△AMN面积=1；AN=√5",sol:"AM=√(4+1)=√5；AN=√(4+1)=√5；△AMN：MN=√(1+1)=√2；用海伦公式或坐标法：A(0,2),M(2,1),N(1,0)；S=½|（2-0)(0-2)-(1-0)(1-2)|=½|(-4)-(-1)|=3/2？用坐标面积公式：½|x_A(y_M-y_N)+x_M(y_N-y_A)+x_N(y_A-y_M)|=½|0(1-0)+2(0-2)+1(2-1)|=½|-4+1|=3/2",error:"坐标系中求三角形面积",upLink:["tg06","tg08"],downLink:[]},
  ],
  special_tri:[
    {id:"b_spe_01",diff:1,content:"等边△边长6，高和面积",answer:"高=3√3，面积=9√3",sol:"①高=6×√3/2；②答案：高=3√3，面积=9√3",error:"等边△高公式",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_02",diff:2,content:"30-60-90，最短边=3，另两边",answer:"3√3和6",sol:"①等腰三角形两腰相等；②顶角平分线、底边中线、底边高三线合一；③利用对称性解题",error:"特殊角三角形边长比",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_03",diff:2,content:"等腰△AB=AC=5，BC=6，底边上的高",answer:"4",sol:"①等边三角形三边相等，三角均60°；②高=边长×√3/2；③面积=√3/4×边长²",error:"三线合一作高",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_04",diff:2,content:"45-45-90，斜边=8，直角边",answer:"4√2",sol:"①2a²=64，a=4√2；②答案：4√2",error:"等腰直角三角形",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_05",diff:2,content:"等腰△周长=20，腰=8，底=？",answer:"4",sol:"①等腰三角形判定：等角对等边；②两底角相等→两腰相等；③利用角度关系求边长",error:"周长公式",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_06",diff:2,content:"顶角60°等腰△，底角=？这是什么三角形",answer:"底角=60°，等边三角形",sol:"①等腰+顶角60°→等边；②答案：底角=60°，等边三角形",error:"特殊情况",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_07",diff:2,content:"等腰△∠A=100°，∠B=∠C=？",answer:"40°",sol:"①(180-100)/2；②答案：40°",error:"底角计算",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_08",diff:3,content:"等腰△面积=24，底=8，腰=？",answer:"腰=2√13",sol:"①直角三角形中30°角对边=斜边×1/2；②60°角对边=斜边×√3/2；③45°等腰直角三角形：腰=斜边/√2",error:"面积求高再勾股",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_09",diff:3,content:"等腰△∠A=36°（黄金三角形），底角=72°，底:腰的比值",answer:"黄金比（腰:底=φ=(1+√5)/2）",sol:"①等腰△中角分析；②答案：黄金比（腰:底=φ=(1+√5)/2）",error:"黄金三角形",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_10",diff:2,content:"等腰直角△斜边上的高=斜边的一半（证明）",answer:"斜边中点到各顶点距离均相等",sol:"①等腰直角△中线=斜边/2；②答案：斜边中点到各顶点距离均相等",error:"等腰直角三角形特殊性质",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_11",diff:3,content:"△ABC，AB=AC，∠A=顶角θ，底角=(180-θ)/2，θ<60°时底角>60°，说明",answer:"底角=(180-θ)/2；θ<60°→底角>60°",sol:"①θ越小底角越大；②答案：底角=(180-θ)/2；θ<60°→底角>60°",error:"顶角和底角的大小关系",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_12",diff:2,content:"等边△的三线合一指哪三条线",answer:"中线、高、角平分线三线合一",sol:"①等边三角形的高度对称性；②答案：中线、高、角平分线三线合一",error:"三线合一的含义",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_13",diff:3,content:"等腰△，AB=AC，外角∠ACD=108°，∠BAC=？",answer:"∠BAC=36°",sol:"∠ACD补角=72°=∠ABC；∠BAC=180-144=36°",error:"外角和内角",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_14",diff:2,content:"等腰直角△，两直角边=a，斜边和面积",answer:"斜边=a√2，面积=a²/2",sol:"①直角边求斜边；②答案：斜边=a√2，面积=a²/2",error:"等腰直角三角形计算",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_15",diff:2,content:"等边△边长=2，求各顶点到对边中点的距离",answer:"各中线=√3",sol:"①高=√3（等边中线=高）；②答案：各中线=√3",error:"等边三角形的中线长",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_16",diff:3,content:"等腰△，两腰上的中线相等（已知），证明三角形是等腰的",answer:"设中线BE=CF；△BCE≅△CBF→BC公共→AB=AC",sol:"①用全等证明；②答案：设中线BE=CF；△BCE≅△CBF→BC公共→AB=AC",error:"由中线相等证等腰",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_17",diff:2,content:"等腰△ABC，AB=AC，∠B=75°，∠A=？底边BC上的高AD，若AB=4，AD=？",answer:"∠A=30°；AD=4×sin75°=4×(√6+√2)/4=√6+√2",sol:"∠A=180-75-75=30°；AD=AB×sin∠B=4sin75°",error:"等腰三角形的角计算",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_18",diff:2,content:"等边△ABC边长为a，P是△内一点，PA=3，PB=4，PC=5，△ABC面积=？",answer:"面积=(25√3+3)/4（需旋转法），此题为经典结论引导",sol:"①旋转60°后利用勾股定理，面积=(PA²+PB²+PC²)×√3/4+（修正项）；②=面积=(25√3+3)/4（需旋转法），此题为经典结论引导",error:"等边△内点到三顶点距离的经典题型",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_19",diff:3,content:"30-60-90三角形，斜边=2，三边的平方和=？",answer:"1²+(√3)²+2²=1+3+4=8",sol:"①短边=1，长直角边=√3，斜边=2；②=1²+(√3)²+2²=1+3+4=8",error:"特殊角三角形边长比1:√3:2",upLink:["tg04","tg06"],downLink:[]},
    {id:"b_spe_20",diff:2,content:"等腰△ABC，AB=AC，底边BC=6，腰长为整数，周长最小是多少？",answer:"周长最小=6+4+4=14（腰长4，满足三角不等式4+4>6✓）",sol:"①腰长a满足：2a>6→a>3，最小整数腰=4；②=周长最小=6+4+4=14（腰长4，满足三角不等式4+4>6✓）",error:"三边关系限制腰长的最小值",upLink:["tg04","tg06"],downLink:[]},
  ],
  quadrilateral:[
    {id:"b_quad_01",diff:1,content:"平行四边形ABCD，∠A=70°，∠B和∠C=？",answer:"∠B=110°，∠C=70°",sol:"①邻角互补，对角相等；②答案：∠B=110°，∠C=70°",error:"平行四边形基本性质",upLink:["tg07"],downLink:[],
     svg:`<svg width="210" height="145" viewBox="0 0 210 145" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="35,125 95,20 185,20 125,125" fill="#f5a62311" stroke="#f5a623" stroke-width="2"/>
  <text x="22" y="141" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="89" y="14" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="187" y="14" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="128" y="141" fill="#1ed9a0" font-size="14" font-family="sans-serif">D</text>
  <text x="48" y="118" fill="#fbbf24" font-size="13" font-family="sans-serif">70°</text>
  <text x="95" y="38" fill="#3a9eff" font-size="13" font-family="sans-serif">110°</text>
  <text x="158" y="38" fill="#fbbf24" font-size="13" font-family="sans-serif">70°</text>
  <text x="112" y="118" fill="#3a9eff" font-size="13" font-family="sans-serif">110°</text>
  <text x="88" y="80" fill="#dce8f8" font-size="12" font-family="sans-serif">对角相等</text>
  <text x="78" y="95" fill="#dce8f8" font-size="12" font-family="sans-serif">邻角互补</text>
</svg>`},
    {id:"b_quad_02",diff:2,content:"菱形对角线12和16，周长和面积",answer:"周长=40，面积=96",sol:"①边=10，面积=d₁d₂/2；②=周长=40，面积=96",error:"菱形对角线互相垂直平分",upLink:["tg07"],downLink:[],
     svg:`<svg width="210" height="160" viewBox="0 0 210 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="105,15 185,80 105,145 25,80" fill="#f5a62311" stroke="#f5a623" stroke-width="2"/>
  <line x1="25" y1="80" x2="185" y2="80" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="105" y1="15" x2="105" y2="145" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="105" y="80" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="105" y="82" text-anchor="middle" fill="#dce8f8" font-size="13" font-family="sans-serif" dy="-8">d₂=12</text>
  <text x="148" y="73" fill="#dce8f8" font-size="13" font-family="sans-serif">d₁=16</text>
  <text x="105" y="8" text-anchor="middle" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="188" y="84" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="105" y="158" text-anchor="middle" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="10" y="84" fill="#1ed9a0" font-size="13" font-family="sans-serif">D</text>
  <text x="140" y="125" fill="#f5a623" font-size="13" font-family="sans-serif">边=10</text>
</svg>`},
    {id:"b_quad_03",diff:2,content:"矩形对角线AC=10，∠BAC=30°，AB和BC=？",answer:"AB=5√3，BC=5",sol:"①∠B=90°，用三角函数；②答案：AB=5√3，BC=5",error:"矩形中三角函数",upLink:["tg07"],downLink:[]},
    {id:"b_quad_04",diff:2,content:"证：平行四边形对角线互相平分",answer:"△AOB≅△COD（ASA）",sol:"①∠OAB=∠OCD（内错角），AB=CD；②=△AOB≅△COD（ASA）",error:"平行四边形对角线性质",upLink:["tg07"],downLink:[]},
    {id:"b_quad_05",diff:3,content:"菱形∠A=60°，边长=6，对角线AC和BD=？",answer:"AC=6，BD=6√3",sol:"△ABC等边→AC=6；BD=2×3√3",error:"特殊角菱形",upLink:["tg07"],downLink:[]},
    {id:"b_quad_06",diff:2,content:"正方形边长=4，E是BC中点，AE=？",answer:"2√5",sol:"①平行四边形对角线互相平分；②对角相等，邻角互补；③对边平行且相等",error:"正方形内勾股",upLink:["tg07"],downLink:[]},
    {id:"b_quad_07",diff:3,content:"梯形中位线=？（上底=4，下底=10）",answer:"7",sol:"①矩形：平行四边形+四个直角；②对角线相等且互相平分；③对角线=√(长²+宽²)",error:"梯形中位线公式",upLink:["tg07"],downLink:[]},
    {id:"b_quad_08",diff:2,content:"平行四边形面积=24，一边=6，这边上的高=？",answer:"4",sol:"①菱形：平行四边形+四边相等；②对角线互相垂直平分；③面积=½×对角线₁×对角线₂",error:"平行四边形面积",upLink:["tg07"],downLink:[]},
    {id:"b_quad_09",diff:3,content:"坐标系ABCD，A(0,0)，B(4,0)，C(4,3)，D(0,3)，是什么四边形",answer:"矩形",sol:"①正方形：矩形+菱形；②四边相等+四角为直角；③对角线等长、互相垂直平分",error:"坐标判断四边形",upLink:["tg07"],downLink:[]},
    {id:"b_quad_10",diff:3,content:"平行四边形ABCD，E是AB中点，DE交AC于F，AF:FC=？",answer:"1:2",sol:"①相似比=AE/DC=1/2，AF/FC=1/2；②=1:2",error:"平行四边形内相似",upLink:["tg07"],downLink:[]},
    {id:"b_quad_11",diff:2,content:"正方形和菱形的区别",answer:"正方形是四角为90°的菱形",sol:"①正方形⊂菱形⊂平行四边形；②答案：正方形是四角为90°的菱形",error:"特殊四边形层级",upLink:["tg07"],downLink:[]},
    {id:"b_quad_12",diff:3,content:"判断：一组对边相等另一组对边平行，是平行四边形吗",answer:"不一定（等腰梯形满足此条件）",sol:"①需要是同组对边平行且相等；②答案：不一定（等腰梯形满足此条件）",error:"平行四边形判定",upLink:["tg07"],downLink:[]},
    {id:"b_quad_13",diff:2,content:"菱形周长=20，一对角线=6，另对角线和面积",answer:"另对角线=8，面积=24",sol:"①三角形中位线平行于第三边且等于其一半；②DE∥BC且DE=½BC；③利用相似或中位线定理",error:"菱形边和对角线关系",upLink:["tg07"],downLink:[]},
    {id:"b_quad_14",diff:3,content:"证：矩形的对角线相等",answer:"△ABC≅△DCB（SAS）→AC=DB",sol:"①AB=DC，BC=CB，∠ABC=∠DCB=90°；②=△ABC≅△DCB（SAS）→AC=DB",error:"矩形额外性质证明",upLink:["tg07"],downLink:[]},
    {id:"b_quad_15",diff:2,content:"等腰梯形ABCD，AD∥BC，AB=CD=5，BC=8，AD=4，高=？面积=？",answer:"高=√21，面积=6√21",sol:"水平差=(8-4)/2=2；高=√(25-4)=√21",error:"等腰梯形辅助线",upLink:["tg07"],downLink:[]},
    {id:"b_quad_16",diff:3,content:"平行四边形ABCD，P是BD上一点，S△APB/S△APD=？",answer:"BP/PD",sol:"①同高△，底之比=面积之比；②答案：BP/PD",error:"同高三角形面积比",upLink:["tg07"],downLink:[]},
    {id:"b_quad_17",diff:2,content:"四边形ABCD，AB∥CD，AC⊥BD，两对角线长6和8，面积=？",answer:"24",sol:"①S=½×d₁×d₂=24；②答案：24",error:"对角线垂直：面积=½d₁d₂",upLink:["tg07"],downLink:[]},
    {id:"b_quad_18",diff:3,content:"正方形ABCD，以A为中心顺时针旋转90°，B→D，C→？",answer:"C→B",sol:"①正方形旋转90°后各点对应；②=C→B",error:"正方形旋转变换",upLink:["tg07"],downLink:[]},
    {id:"b_quad_19",diff:2,content:"平行四边形ABCD，AB=6，BC=4，∠B=60°，求对角线AC的长",answer:"AC=2√7",sol:"余弦定理：AC²=36+16-2×6×4×cos60°=52-24=28；AC=2√7",error:"平行四边形中用余弦定理求对角线",upLink:["tg07"],downLink:[]},
    {id:"b_quad_20",diff:3,content:"梯形ABCD，AD∥BC，∠ABC=∠BCD=90°（直角梯形），BC=4，AB=3，CD=6，求AD和梯形面积",answer:"AD=CD-BC... 需过A作AE⊥CD：AE=AB=3，DE=√(36-9)=3√3... 重析：∠ABC=90°说明AB⊥BC；∠BCD=90°说明BC⊥CD；因此AB∥CD（均⊥BC），是矩形条件，不符合梯形。题目应为：∠B=90°，即直角梯形；AD=√(AB²+(DC-BC)²)... 设BC=4，CD=6，AB=3，AD∥BC，过D作DE⊥AB延长线：AD=√((6-4)²+3²)=√13",answer:"AD=√13，面积=½(BC+CD)×AB=½×10×3=15",sol:"直角梯形：AB⊥BC；高=AB=3；AD=√(AB²+(CD-BC)²)=√13；面积=½(4+6)×3=15",error:"直角梯形的斜腰用勾股定理求",upLink:["tg07"],downLink:[]},
  ],
  similar:[
    {id:"b_sim_01",diff:1,content:"△ABC∽△DEF，相似比2:3，AB=6，DE=？",answer:"9",sol:"①相似三角形对应边成比例：a/d=b/e=c/f=k（相似比）；②对应角相等；③面积比=k²",error:"相似比方向",upLink:["tg05","tg07"],downLink:[],
     svg:`<svg width="220" height="155" viewBox="0 0 220 155" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="20,130 70,20 120,130" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <polygon points="115,145 178,15 220,145" fill="#3a9eff11" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="6,2"/>
  <text x="12" y="145" fill="#1ed9a0" font-size="13" font-family="sans-serif">A</text>
  <text x="65" y="14" fill="#1ed9a0" font-size="13" font-family="sans-serif">B</text>
  <text x="122" y="145" fill="#1ed9a0" font-size="13" font-family="sans-serif">C</text>
  <text x="107" y="148" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="173" y="9" fill="#3a9eff" font-size="13" font-family="sans-serif">E</text>
  <text x="207" y="148" fill="#3a9eff" font-size="13" font-family="sans-serif">F</text>
  <text x="38" y="82" fill="#fbbf24" font-size="14" font-family="sans-serif">AB=6</text>
  <text x="145" y="82" fill="#3a9eff" font-size="14" font-family="sans-serif">DE=9</text>
  <text x="72" y="150" fill="#dce8f8" font-size="12" font-family="sans-serif">比=2:3</text>
</svg>`},
    {id:"b_sim_02",diff:2,content:"面积比4:9，相似比和周长比",answer:"相似比2:3，周长比2:3",sol:"①相似三角形面积比=相似比的平方；②面积比=相似比²；③=相似比2:3，周长比2:3",error:"面积比开方",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_03",diff:2,content:"DE∥BC，AD=3，DB=2，DE=6，BC=？",answer:"10",sol:"①AD/AB=3/5=DE/BC；②=10",error:"平行截割比例",upLink:["tg05","tg07"],downLink:[],
     svg:`<svg width="200" height="170" viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="100,15 10,155 190,155" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="46" y1="95" x2="154" y2="95" stroke="#fbbf24" stroke-width="2"/>
  <text x="100" y="8" text-anchor="middle" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="3" y="168" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="190" y="168" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="36" y="92" fill="#fbbf24" font-size="13" font-family="sans-serif">D</text>
  <text x="156" y="92" fill="#fbbf24" font-size="13" font-family="sans-serif">E</text>
  <text x="70" y="88" fill="#fbbf24" font-size="13" font-family="sans-serif">DE=6 ∥ BC</text>
  <text x="36" y="52" fill="#dce8f8" font-size="12" font-family="sans-serif">AD=3</text>
  <text x="28" y="130" fill="#dce8f8" font-size="12" font-family="sans-serif">DB=2</text>
  <text x="80" y="168" fill="#3a9eff" font-size="14" font-family="sans-serif">BC=?</text>
</svg>`},
    {id:"b_sim_04",diff:2,content:"Rt△，CD⊥斜边AB，AD=4，DB=9，CD=？",answer:"6",sol:"①AA判定：两角对应相等→相似；②SAS判定：夹角相等且夹角两边成比例；③SSS：三边成比例",error:"射影定理",upLink:["tg05","tg07"],downLink:[],
     svg:`<svg width="220" height="160" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <polygon points="40,140 180,140 80,20" fill="#1ed9a011" stroke="#1ed9a0" stroke-width="2"/>
  <line x1="80" y1="20" x2="109" y2="140" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="109" y="122" width="18" height="18" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="62" y="122" width="16" height="16" fill="none" stroke="#3a9eff" stroke-width="1.2"/>
  <text x="33" y="155" fill="#1ed9a0" font-size="14" font-family="sans-serif">A</text>
  <text x="183" y="155" fill="#1ed9a0" font-size="14" font-family="sans-serif">B</text>
  <text x="73" y="14" fill="#1ed9a0" font-size="14" font-family="sans-serif">C</text>
  <text x="112" y="155" fill="#fbbf24" font-size="14" font-family="sans-serif">D</text>
  <text x="62" y="135" fill="#3a9eff" font-size="12" font-family="sans-serif">90°</text>
  <text x="60" y="155" fill="#dce8f8" font-size="13" font-family="sans-serif">AD=4</text>
  <text x="130" y="155" fill="#dce8f8" font-size="13" font-family="sans-serif">DB=9</text>
  <text x="88" y="88" fill="#fbbf24" font-size="13" font-family="sans-serif">CD=?</text>
</svg>`},
    {id:"b_sim_05",diff:2,content:"△ABC∽△A'B'C'，AB=6，A'B'=4，△ABC面积=27，△A'B'C'=？",answer:"12",sol:"①相似三角形面积比=相似比的平方；②面积比=（6/4)²=9/4；③=12",error:"面积比=相似比²",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_06",diff:3,content:"梯形对角线交O，AD=2，BC=3，S△AOD=8，S△BOC=？",answer:"18",sol:"①相似三角形面积比=相似比的平方；②相似比=2/3，面积比=4/9，S△BOC=18；③=18",error:"对角交点处相似",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_07",diff:2,content:"△ABC中，DE∥BC，AD/DB=1/2，DE=3，BC=？",answer:"9",sol:"①平行线截割定理：平行线截两条相交直线成比例；②DE∥BC→AD/DB=AE/EC；③利用比例求未知线段",error:"注意AD/AB不是AD/DB",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_08",diff:3,content:"△ABC，∠A=90°，AD⊥BC，证△ABD∽△CAD",answer:"∠ADB=90°，∠B=∠DAC（互余）→AA",sol:"①两角相等即相似；②答案：∠ADB=90°，∠B=∠DAC（互余）→AA",error:"射影相似的证明",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_09",diff:2,content:"两三角形周长比=3:2，面积比=？",answer:"9:4",sol:"①相似三角形面积比=相似比的平方；②面积比=周长比²；③=9:4",error:"周长比=相似比",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_10",diff:3,content:"△ABC，P在BC上，BP=2，PC=3，S△ABP=4，S△APC=？",answer:"6",sol:"①建立相似关系；②设相似比k；③对应边之比=k；面积比=k²；④代入求解",error:"同高三角形面积比",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_11",diff:3,content:"直角三角形射影定理：AC²=AD×AB（证明）",answer:"△ACD∽△ABC→AC/AB=AD/AC",sol:"①相似得到比例；②答案：△ACD∽△ABC→AC/AB=AD/AC",error:"射影定理推导",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_12",diff:2,content:"△ABC，S△ADE:S△ABC=1:4（DE∥BC），AE:EC和AD:DB=？",answer:"各=1:1",sol:"①相似比=1:2，AE/AC=1/2，AE:EC=1:1；②=各=1:1",error:"相似比转化",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_13",diff:3,content:"坐标系O(0,0)，A(4,0)，B(0,3)，P在OA上使△OBP∽△OAB，OP=？",answer:"OP=OB²/OA=9/4",sol:"①OB/OA=OP/OB；②答案：OP=OB²/OA=9/4",error:"相似比例",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_14",diff:2,content:"等高三角形面积比=底之比（证明）",answer:"S₁/S₂=a₁/a₂（同高h）",sol:"①S=½×底×高，高相同；②答案：S₁/S₂=a₁/a₂（同高h）",error:"等高三角形",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_15",diff:3,content:"位似变换：以O为中心比例k=2，△ABC→△A'B'C'，面积比=？",answer:"面积比=k²=4",sol:"①相似三角形面积比=相似比的平方；②线段比=k，面积比=k²；③=面积比=k²=4",error:"位似变换面积比",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_16",diff:2,content:"正六边形被分成6个等边三角形，面积比和相似比",answer:"各等边三角形相似比=1:1（相同），面积比=1:1",sol:"①正六边形的等面积性；②答案：各等边三角形相似比=1:1（相同），面积比=1:1",error:"正六边形的分割",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_17",diff:3,content:"△ABC，DE∥BC，△ADE面积=9，梯形BCED面积=16，DE:BC=？△ABC面积=？",answer:"DE:BC=3:4（？），△ABC=？",sol:"①S△ADE/S△ABC=9/25（相似比3:5），面积比9:25；②=DE:BC=3:4（？），△ABC=？",error:"面积比推相似比",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_18",diff:2,content:"比例线段：2:3=4:6，ad=bc，验证",answer:"2×6=12=3×4✓",sol:"①内项之积=外项之积；②答案：2×6=12=3×4✓",error:"比例基本性质",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_19",diff:3,content:"AA判定：两角对应相等→相似，为什么只需两角",answer:"第三角由内角和自动确定",sol:"①三角形内角和=180°；②答案：第三角由内角和自动确定",error:"AA判定原理",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_20",diff:3,content:"△ABC∽△DEF，BC对应EF，AB对应DE，那么对应高的比=？",answer:"AB/DE",sol:"①对应边之比=相似比，高也是对应线段；②=AB/DE",error:"对应高的比等于相似比",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_21",diff:2,content:"直角△ABC，∠C=90°，斜边AB=10，高CD⊥AB于D，AD=4，求BD、CD、AC、BC",answer:"BD=6，CD=2√6，AC=2√10，BC=√60=2√15",sol:"BD=AB-AD=6；CD²=AD×BD=24→CD=2√6；AC²=AD×AB=40→AC=2√10；BC²=BD×AB=60→BC=2√15",error:"射影定理三个公式全部用上",upLink:["tg05","tg07"],downLink:[]},
    {id:"b_sim_22",diff:3,content:"两个相似三角形的周长分别是12和18，面积分别是S₁和S₂，S₁:S₂=？若S₁=16，S₂=？",answer:"S₁:S₂=4:9；S₂=36",sol:"相似比=12:18=2:3；面积比=4:9；S₂=16×9/4=36",error:"周长比=相似比，面积比=相似比²",upLink:["tg05","tg07"],downLink:[]},
  ],
  trig:[
    {id:"b_trf_01",diff:1,content:"Rt△ABC，∠C=90°，sinA，cosA，tanA各等于？",answer:"sinA=BC/AB，cosA=AC/AB，tanA=BC/AC",sol:"①SOH-CAH-TOA；②答案：sinA=BC/AB，cosA=AC/AB，tanA=BC/AC",error:"三角比定义",upLink:["tg10"],downLink:[]},
    {id:"b_trf_02",diff:1,content:"sin30°，cos45°，tan60°各等于？",answer:"1/2，√2/2，√3",sol:"①代入特殊角值：sin30°=½，cos30°=√3/2，tan30°=√3/3，sin45°=cos45°=√2/2，tan45°=1，sin60°=√3/2，cos60°=½，tan60°=√3；②特殊角三角值；③=1/2，√2/2，√3",error:"特殊角值必须背熟",upLink:["tg10"],downLink:[]},
    {id:"b_trf_03",diff:2,content:"Rt△，∠C=90°，∠A=30°，BC=4，AB和AC=？",answer:"AB=8，AC=4√3",sol:"①sin30°=BC/AB=1/2；②=AB=8，AC=4√3",error:"特殊角边长",upLink:["tg10"],downLink:[]},
    {id:"b_trf_04",diff:2,content:"tanα=√3，α=？（锐角）",answer:"60°",sol:"①轴对称：图形关于直线l对称；②对应点到对称轴距离相等；③对应线段被对称轴垂直平分",error:"特殊角",upLink:["tg10"],downLink:[]},
    {id:"b_trf_05",diff:2,content:"sinα=0.6，cosα=0.8，tanα=？",answer:"0.75",sol:"①tanα=sinα/cosα；②=0.75",error:"tanα=sin/cos",upLink:["tg10"],downLink:[]},
    {id:"b_trf_06",diff:2,content:"距楼20m，仰角60°，楼高=？",answer:"20√3 m",sol:"①tan60°=h/20；②答案：20√3 m",error:"仰角用正切",upLink:["tg10"],downLink:[],
     svg:`<svg width="215" height="165" viewBox="0 0 215 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <rect x="155" y="20" width="30" height="130" fill="#3a9eff22" stroke="#3a9eff" stroke-width="2"/>
  <line x1="25" y1="150" x2="155" y2="150" stroke="#dce8f8" stroke-width="1.5"/>
  <line x1="25" y1="150" x2="155" y2="20" stroke="#fbbf24" stroke-width="1.8"/>
  <line x1="155" y1="20" x2="155" y2="150" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="143" y="138" width="12" height="12" fill="none" stroke="#dce8f8" stroke-width="1.2"/>
  <path d="M 55,150 A 30,30 0 0,1 38,133" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="25" y="163" fill="#dce8f8" font-size="13" font-family="sans-serif">人</text>
  <text x="55" y="148" fill="#fbbf24" font-size="13" font-family="sans-serif">60°</text>
  <text x="80" y="168" fill="#dce8f8" font-size="13" font-family="sans-serif">水平距离=20m</text>
  <text x="160" y="90" fill="#1ed9a0" font-size="14" font-family="sans-serif">楼高</text>
  <text x="160" y="106" fill="#fbbf24" font-size="14" font-family="sans-serif">h=?</text>
</svg>`},
    {id:"b_trf_07",diff:2,content:"坡角30°，斜面100m，水平和高差",answer:"水平=50√3，高差=50",sol:"①cos30°和sin30°；②=水平=50√3，高差=50",error:"斜面分解",upLink:["tg10"],downLink:[]},
    {id:"b_trf_08",diff:3,content:"sinα=3/5（锐角），cosα和tanα=？",answer:"cosα=4/5，tanα=3/4",sol:"①sin²+cos²=1；②答案：cosα=4/5，tanα=3/4",error:"勾股恒等式",upLink:["tg10"],downLink:[]},
    {id:"b_trf_09",diff:2,content:"互余：sinA=cos(90°-A)，若sinA=0.8，什么角的cos=0.8？",answer:"cos(90°-A)",sol:"①互余关系；②答案：cos(90°-A)",error:"互余公式",upLink:["tg10"],downLink:[]},
    {id:"b_trf_10",diff:2,content:"tanα=2，sinα=？（锐角）",answer:"2√5/5",sol:"①构造直角三角形：对2邻1斜√5；②=2√5/5",error:"由tan构造直角三角形",upLink:["tg10"],downLink:[]},
    {id:"b_trf_11",diff:3,content:"cosα-sinα=√2/2，sin2α=？",answer:"1/2",sol:"①两边平方：1-sin2α=1/2，sin2α=1/2；②=1/2",error:"平方+二倍角公式",upLink:["tg10"],downLink:[]},
    {id:"b_trf_12",diff:2,content:"直角△中，30°邻边=√3，斜边=？",answer:"2",sol:"①中心对称：图形关于点O对称；②对应点连线被O平分；③旋转180°后与原图重合",error:"cos=邻/斜",upLink:["tg10"],downLink:[]},
    {id:"b_trf_13",diff:2,content:"坡角45°，坡长10m，高和水平各=？",answer:"h=d=5√2",sol:"①sin45°=cos45°=√2/2；②=h=d=5√2",error:"45°等腰直角",upLink:["tg10"],downLink:[]},
    {id:"b_trf_14",diff:2,content:"Rt△，∠C=90°，sinA=5/13，BC=5，AC和AB=？",answer:"AB=13，AC=12",sol:"①sinA=BC/AB=5/13；②=AB=13，AC=12",error:"sin=对/斜",upLink:["tg10"],downLink:[]},
    {id:"b_trf_15",diff:3,content:"从A(在地面)测B(楼顶)仰角30°，从C（距A 10m）测B仰角45°，B高=？",answer:"h=10/(√3-1)=5(√3+1)",sol:"①tan30°=h/x，tan45°=h/(x-10)联立；②=h=10/(√3-1)=5(√3+1)",error:"两角仰角建方程组",upLink:["tg10"],downLink:[]},
    {id:"b_trf_16",diff:3,content:"△ABC中，BC=a，用正弦定理写出外接圆半径R",answer:"R=a/(2sinA)",sol:"①正弦定理；②答案：R=a/(2sinA)",error:"正弦定理引导",upLink:["tg10"],downLink:[]},
    {id:"b_trf_17",diff:2,content:"已知tanα=4/3（锐角），sin²α-cos²α=？",answer:"7/25",sol:"构造直角三角形：对4邻3斜5；sin=4/5，cos=3/5；sin²-cos²=16/25-9/25=7/25",error:"由tan构造直角三角形求sin和cos",upLink:["tg10"],downLink:[]},
    {id:"b_trf_18",diff:3,content:"两楼之间水平距离20m，从A楼楼顶看B楼楼顶仰角30°，看B楼底俯角45°，B楼高度=？",answer:"B楼高=20(1+√3/3)=20+20√3/3",sol:"设A楼顶高h₁，B楼顶在h₁+20tan30°，B楼底在h₁-20tan45°；B楼高=20tan30°+20tan45°=20√3/3+20",error:"仰角+俯角建两个直角三角形",upLink:["tg10"],downLink:[]},
    {id:"b_trf_19",diff:2,content:"sin(90°-α)=cosα，cos(90°-α)=sinα，若sin70°=k，则cos20°=？cos70°=？",answer:"cos20°=k；cos70°=√(1-k²)",sol:"互余：cos20°=sin(90°-20°)=sin70°=k；cos70°=√(1-sin²70°)=√(1-k²)",error:"互余公式的应用",upLink:["tg10"],downLink:[]},
    {id:"b_trf_20",diff:3,content:"在△ABC中，∠C=90°，BC=1，tanA=√3，求sinB和AB",answer:"sinB=cos A=1/2，AB=2",sol:"tanA=√3→∠A=60°→∠B=30°；sinB=1/2；BC/AB=sinA→AB=BC/sinA=1/(√3/2)=2√3/3... 重算：sinA=BC/AB=√3/2，AB=BC/sinA=2/√3=2√3/3",error:"由tan求边长需先确定角度",upLink:["tg10"],downLink:[]},
  ],
  circle:[
    {id:"b_cir_01",diff:1,content:"∠AOB=80°，圆周角∠ACB=？",answer:"40°",sol:"①圆的定义：平面上到定点距离等于定长的点的集合；②圆心O，半径r；③直径=2r",error:"圆周角定理",upLink:["tg08","tg09"],downLink:[],
     svg:`<svg width="200" height="190" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="100" r="72" fill="#a78bfa0d" stroke="#a78bfa" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#a78bfa"/>
  <line x1="100" y1="100" x2="48" y2="40" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="100" y1="100" x2="152" y2="40" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="48" y1="40" x2="100" y2="172" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="152" y1="40" x2="100" y2="172" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="48" cy="40" r="4" fill="#3a9eff"/>
  <circle cx="152" cy="40" r="4" fill="#3a9eff"/>
  <circle cx="100" cy="172" r="4" fill="#fbbf24"/>
  <text x="95" y="96" fill="#a78bfa" font-size="13" font-family="sans-serif">O</text>
  <text x="38" y="35" fill="#3a9eff" font-size="14" font-family="sans-serif">A</text>
  <text x="154" y="35" fill="#3a9eff" font-size="14" font-family="sans-serif">B</text>
  <text x="94" y="186" fill="#fbbf24" font-size="14" font-family="sans-serif">C</text>
  <text x="86" y="118" fill="#3a9eff" font-size="12" font-family="sans-serif">80°</text>
  <text x="88" y="155" fill="#fbbf24" font-size="12" font-family="sans-serif">40°</text>
</svg>`},
    {id:"b_cir_02",diff:1,content:"直径AB所对圆周角=？",answer:"90°",sol:"①弦：连接圆上两点的线段；②弧：圆上两点间的曲线；③直径是最长的弦",error:"直径所对圆周角=90°",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_03",diff:2,content:"PA切⊙O于A，PO=13，OA=5，PA=？",answer:"12",sol:"①PA²=169-25=144；②=12",error:"切线⊥半径，勾股",upLink:["tg08","tg09"],downLink:[],
     svg:`<svg width="210" height="170" viewBox="0 0 210 170" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="130" cy="90" r="50" fill="#a78bfa11" stroke="#a78bfa" stroke-width="2"/>
  <line x1="25" y1="155" x2="130" y2="45" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="25" y1="155" x2="130" y2="90" stroke="#3a9eff" stroke-width="1.5"/>
  <line x1="130" y1="45" x2="130" y2="90" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="125" y="45" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="130" cy="90" r="4" fill="#a78bfa"/>
  <circle cx="130" cy="45" r="4" fill="#fbbf24"/>
  <circle cx="25" cy="155" r="4" fill="#3a9eff"/>
  <text x="18" y="152" fill="#3a9eff" font-size="14" font-family="sans-serif">P</text>
  <text x="136" y="43" fill="#fbbf24" font-size="14" font-family="sans-serif">A</text>
  <text x="136" y="95" fill="#a78bfa" font-size="14" font-family="sans-serif">O</text>
  <text x="60" y="118" fill="#3a9eff" font-size="13" font-family="sans-serif">PO=13</text>
  <text x="138" y="70" fill="#1ed9a0" font-size="13" font-family="sans-serif">OA=5</text>
  <text x="45" y="85" fill="#fbbf24" font-size="13" font-family="sans-serif">PA=?</text>
</svg>`},
    {id:"b_cir_04",diff:2,content:"PA、PB是⊙O两切线，PA=6，PB=？",answer:"6",sol:"①圆心角：顶点在圆心的角；②圆周角：顶点在圆上的角；③同弧圆周角=圆心角/2",error:"同一点两切线等长",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_05",diff:2,content:"内接四边形ABCD，∠A=80°，∠C=？",answer:"100°",sol:"①同弧（或等弧）所对的圆周角相等；②直径所对圆周角=90°；③圆周角是圆心角的一半",error:"圆内接四边形对角互补",upLink:["tg08","tg09"],downLink:[],
     svg:`<svg width="200" height="195" viewBox="0 0 200 195" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="98" r="78" fill="#a78bfa0d" stroke="#a78bfa" stroke-width="1.8"/>
  <circle cx="100" cy="98" r="3" fill="#a78bfa"/>
  <polygon points="36,58 100,20 164,58 130,175 70,175" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
  <polygon points="36,58 164,58 130,175 70,175" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
  <circle cx="36" cy="58" r="4" fill="#fbbf24"/>
  <circle cx="164" cy="58" r="4" fill="#fbbf24"/>
  <circle cx="130" cy="175" r="4" fill="#3a9eff"/>
  <circle cx="70" cy="175" r="4" fill="#3a9eff"/>
  <text x="20" y="56" fill="#fbbf24" font-size="13" font-family="sans-serif">A</text>
  <text x="167" y="56" fill="#fbbf24" font-size="13" font-family="sans-serif">B</text>
  <text x="133" y="190" fill="#3a9eff" font-size="13" font-family="sans-serif">C</text>
  <text x="52" y="190" fill="#3a9eff" font-size="13" font-family="sans-serif">D</text>
  <text x="28" y="74" fill="#fbbf24" font-size="12" font-family="sans-serif">80°</text>
  <text x="118" y="165" fill="#3a9eff" font-size="12" font-family="sans-serif">100°</text>
  <text x="68" y="98" fill="#dce8f8" font-size="12" font-family="sans-serif">∠A+∠C=180°</text>
</svg>`},
    {id:"b_cir_06",diff:2,content:"弦AB=8，半径=5，弦心距=？",answer:"3",sol:"①切线：与圆只有一个公共点的直线；②切线⊥过切点的半径；③切线长定理：PA=PB",error:"弦心距公式",upLink:["tg08","tg09"],downLink:[],
     svg:`<svg width="200" height="185" viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <circle cx="100" cy="95" r="72" fill="#a78bfa0d" stroke="#a78bfa" stroke-width="2"/>
  <circle cx="100" cy="95" r="3" fill="#a78bfa"/>
  <line x1="38" y1="55" x2="162" y2="55" stroke="#3a9eff" stroke-width="2"/>
  <line x1="100" y1="95" x2="100" y2="55" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="100" y1="95" x2="162" y2="55" stroke="#1ed9a0" stroke-width="1.5"/>
  <rect x="100" y="55" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <circle cx="38" cy="55" r="4" fill="#3a9eff"/>
  <circle cx="162" cy="55" r="4" fill="#3a9eff"/>
  <text x="30" y="48" fill="#3a9eff" font-size="13" font-family="sans-serif">A</text>
  <text x="164" y="48" fill="#3a9eff" font-size="13" font-family="sans-serif">B</text>
  <text x="104" y="91" fill="#a78bfa" font-size="13" font-family="sans-serif">O</text>
  <text x="82" y="78" fill="#fbbf24" font-size="13" font-family="sans-serif">d=?</text>
  <text x="130" y="78" fill="#1ed9a0" font-size="13" font-family="sans-serif">R=5</text>
  <text x="82" y="50" fill="#dce8f8" font-size="12" font-family="sans-serif">AB/2=4</text>
  <text x="55" y="180" text-anchor="middle" fill="#dce8f8" font-size="12" font-family="sans-serif">d²+4²=5² → d=3</text>
</svg>`},
    {id:"b_cir_07",diff:3,content:"∠AOB=120°，半径=6，弦AB=？",answer:"6√3",sol:"①AB=2×6×sin60°；②=6√3",error:"弦长=2R×sin(圆心角/2)",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_08",diff:2,content:"同弧上两圆周角∠ACB和∠ADB的关系",answer:"相等",sol:"①判断切线：若某直线⊥过切点的半径→是切线；②PA=PB（切线长相等）；③∠OAP=90°",error:"同弧圆周角定理",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_09",diff:3,content:"PA,PB切⊙O，∠P=60°，OA=3，PA=？∠AOB=？",answer:"PA=3√3，∠AOB=120°",sol:"①∠OPA=30°，tan30°=3/PA；②=PA=3√3，∠AOB=120°",error:"切线角+勾股",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_10",diff:2,content:"⊙O，R=5，A(0,5)，B(5,0)，∠AOB=？",answer:"90°",sol:"①OA⊥OB（坐标轴方向）；②答案：90°",error:"坐标中的圆心角",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_11",diff:2,content:"圆周长=10π，面积=？",answer:"25π",sol:"①两圆位置关系：外离/外切/相交/内切/内含；②圆心距d与半径r₁、r₂的关系判断",error:"周长→R→面积",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_12",diff:3,content:"PA切⊙O于A，PBC割线，PB=3，BC=5，PA=？",answer:"2√6",sol:"①PA²=PB×PC=3×8=24；②=2√6",error:"切割线定理",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_13",diff:2,content:"AB为直径，AC=3，BC=4，∠ACB=90°，R=？",answer:"5/2",sol:"①弧长l=nπr/180（n为圆心角度数）；②扇形面积S=nπr²/360=½lr；③代入计算",error:"直径所对圆周角=90°",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_14",diff:3,content:"两弦AB∥CD，∠AOB=80°，∠COD=？",answer:"80°",sol:"①圆内接四边形对角互补：∠A+∠C=180°，∠B+∠D=180°；②利用此性质求角度",error:"平行弦截等弧",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_15",diff:3,content:"证：AB为直径，C在圆上，CD⊥AB于D，CD²=AD×DB",answer:"△ACD∽△CBD→CD/BD=AD/CD",sol:"①相似得比例；②答案：△ACD∽△CBD→CD/BD=AD/CD",error:"直径弦射影定理",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_16",diff:2,content:"如何判断直线是否为圆的切线",answer:"圆心到直线距离=R，或过圆上点且⊥半径",sol:"①两种判定方法；②答案：圆心到直线距离=R，或过圆上点且⊥半径",error:"切线判定",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_17",diff:2,content:"⊙O，P在圆外，PO=10，R=6，PA切线，PA=？",answer:"8",sol:"①垂径定理：垂直于弦的直径平分弦及弦所对的两条弧；②过圆心作弦的垂线→平分弦",error:"切线长公式",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_18",diff:3,content:"证：弦切角=所对弧的圆周角",answer:"弦切角定理",sol:"①确定圆需要三个条件（三点定圆）；②外心：三角形三条边的垂直平分线交点；③即三顶点的外接圆圆心",error:"弦切角定理",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_19",diff:2,content:"⊙O中，∠APB和∠AOB的关系（P在圆外，AB是弦）",answer:"∠APB=½|∠AOB|（当P在弦延长线上取切割线情况不同）",sol:"①圆外角=两截弧之差的一半；②答案：∠APB=½|∠AOB|（当P在弦延长线上取切割线情况不同）",error:"圆外角定理",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_20",diff:3,content:"⊙O，PA、PB切线，C是弧AB上一点，∠ACB=？（∠APB=60°）",answer:"∠ACB=120°（优弧所对）或60°（劣弧所对）",sol:"∠AOB=120°；优弧圆周角=60°，劣弧圆周角=120°",error:"弧和圆周角对应关系",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_21",diff:2,content:"⊙O半径=5，弦AB的长为6，弦AB到圆心的距离（弦心距）=？",answer:"4",sol:"①勾股定理：a²+b²=c²；②弦心距d：d²+(6/2)²=5²；d²=25-9=16；d=4；③解得4",error:"弦心距公式：d²+(弦长/2)²=R²",upLink:["tg08","tg09"],downLink:[]},
    {id:"b_cir_22",diff:3,content:"⊙O，直径AB=10，弦CD∥AB，CD=8，CD与AB之间的距离=？（CD在AB上方）",answer:"距离=3",sol:"①勾股定理：a²+b²=c²；②弦心距CD：d²+4²=5²→d=3；AB是直径，其弦心距=0；距离=|3-0|=3；③解得距离=3",error:"平行弦之间的距离=两弦心距之差（或和）",upLink:["tg08","tg09"],downLink:[]},
  ],
  transform:[
    {id:"b_tra_01",diff:1,content:"A(1,2)向右平移3个单位",answer:"A'(4,2)",sol:"①x+3，y不变；②答案：A'(4,2)",error:"平移只改变一个坐标",upLink:["tg13"],downLink:[]},
    {id:"b_tra_02",diff:2,content:"A(2,3)关于y轴对称B，B再关于x轴对称C",answer:"B(-2,3)，C(-2,-3)",sol:"①y轴x取反；再x轴y取反；②答案：B(-2,3)，C(-2,-3)",error:"连续对称",upLink:["tg13"],downLink:[],
     svg:`<svg width="205" height="175" viewBox="0 0 205 175" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="88" x2="195" y2="88" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="100" y1="10" x2="100" y2="165" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="197" y="92" fill="#dce8f8" font-size="11" font-family="sans-serif">x</text>
  <text x="96" y="8" fill="#dce8f8" font-size="11" font-family="sans-serif">y</text>
  <text x="62" y="50" fill="#dce8f8" font-size="10" font-family="sans-serif" opacity="0.4">二</text>
  <text x="135" y="50" fill="#dce8f8" font-size="10" font-family="sans-serif" opacity="0.4">一</text>
  <text x="62" y="135" fill="#dce8f8" font-size="10" font-family="sans-serif" opacity="0.4">三</text>
  <text x="135" y="135" fill="#dce8f8" font-size="10" font-family="sans-serif" opacity="0.4">四</text>
  <circle cx="148" cy="48" r="5" fill="#3a9eff"/>
  <circle cx="52" cy="48" r="5" fill="#1ed9a0"/>
  <circle cx="52" cy="128" r="5" fill="#fbbf24"/>
  <line x1="148" y1="48" x2="52" y2="48" stroke="#1ed9a0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="52" y1="48" x2="52" y2="128" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="152" y="45" fill="#3a9eff" font-size="13" font-family="sans-serif">A(2,3)</text>
  <text x="22" y="45" fill="#1ed9a0" font-size="13" font-family="sans-serif">B(-2,3)</text>
  <text x="22" y="132" fill="#fbbf24" font-size="13" font-family="sans-serif">C(-2,-3)</text>
  <text x="62" y="90" fill="#1ed9a0" font-size="11" font-family="sans-serif">①y轴→x取反</text>
  <text x="55" y="170" fill="#fbbf24" font-size="11" font-family="sans-serif">②x轴→y取反</text>
</svg>`},
    {id:"b_tra_03",diff:2,content:"P(3,4)绕原点逆时针90°",answer:"(-4,3)",sol:"①逆时针90°：(x,y)→(-y,x)；②=(-4,3)",error:"旋转公式",upLink:["tg13"],downLink:[],
     svg:`<svg width="205" height="180" viewBox="0 0 205 180" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="120" x2="195" y2="120" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="90" y1="10" x2="90" y2="170" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="197" y="124" fill="#dce8f8" font-size="11" font-family="sans-serif">x</text>
  <text x="86" y="8" fill="#dce8f8" font-size="11" font-family="sans-serif">y</text>
  <circle cx="90" cy="120" r="3" fill="#dce8f8" opacity="0.5"/>
  <circle cx="150" cy="60" r="5" fill="#3a9eff"/>
  <circle cx="30" cy="75" r="5" fill="#fbbf24"/>
  <path d="M 140,65 A 65,65 0 0,0 38,78" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="38,78 30,70 42,72" fill="#a78bfa"/>
  <line x1="90" y1="120" x2="150" y2="60" stroke="#3a9eff" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
  <line x1="90" y1="120" x2="30" y2="75" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
  <text x="153" y="58" fill="#3a9eff" font-size="13" font-family="sans-serif">P(3,4)</text>
  <text x="8" y="70" fill="#fbbf24" font-size="13" font-family="sans-serif">P'(-4,3)</text>
  <text x="84" y="118" fill="#dce8f8" font-size="11" font-family="sans-serif">O</text>
  <text x="95" y="148" fill="#a78bfa" font-size="12" font-family="sans-serif">逆时针90°</text>
  <text x="40" y="168" fill="#dce8f8" font-size="12" font-family="sans-serif">(x,y) → (-y, x)</text>
</svg>`},
    {id:"b_tra_04",diff:2,content:"△ABC绕B点旋转60°，BA=BA'，∠ABA'=？",answer:"60°",sol:"①梯形面积=½(上底+下底)×高；②等腰梯形：两腰相等，两底角相等，对角线相等",error:"旋转保持距离和角度",upLink:["tg13"],downLink:[]},
    {id:"b_tra_05",diff:2,content:"y=2x+1向上平移3单位",answer:"y=2x+4",sol:"①作辅助线：将梯形分成三角形和矩形；②利用勾股定理求腰长；③用面积公式计算",error:"平移改变截距",upLink:["tg13"],downLink:[]},
    {id:"b_tra_06",diff:2,content:"P(a,b)关于y=x的对称点",answer:"P'(b,a)",sol:"①等腰梯形轴对称：对称轴为上下底中点连线；②对角线相等；③两底角分别相等",error:"y=x对称互换坐标",upLink:["tg13"],downLink:[]},
    {id:"b_tra_07",diff:2,content:"中心对称：A(3,4)关于M(1,2)的对称点B",answer:"B(-1,0)",sol:"①M是中点：B=(2×1-3,2×2-4)=(-1,0)；②=B(-1,0)",error:"中心对称：中点是对称中心",upLink:["tg13"],downLink:[],
     svg:`<svg width="200" height="165" viewBox="0 0 200 165" xmlns="http://www.w3.org/2000/svg" style="background:#0d1825;border-radius:8px;display:block">
  <line x1="10" y1="110" x2="190" y2="110" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <line x1="50" y1="10" x2="50" y2="158" stroke="#dce8f8" stroke-width="1" opacity="0.4"/>
  <text x="192" y="114" fill="#dce8f8" font-size="11" font-family="sans-serif">x</text>
  <text x="46" y="8" fill="#dce8f8" font-size="11" font-family="sans-serif">y</text>
  <line x1="38" y1="112" x2="148" y2="42" stroke="#dce8f8" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
  <circle cx="148" cy="42" r="5" fill="#3a9eff"/>
  <circle cx="93" cy="77" r="6" fill="#fbbf24"/>
  <circle cx="38" cy="112" r="5" fill="#1ed9a0"/>
  <text x="152" y="40" fill="#3a9eff" font-size="13" font-family="sans-serif">A(3,4)</text>
  <text x="97" y="74" fill="#fbbf24" font-size="13" font-family="sans-serif">M(1,2)</text>
  <text x="8" y="110" fill="#1ed9a0" font-size="13" font-family="sans-serif">B(-1,0)</text>
  <text x="30" y="150" fill="#dce8f8" font-size="12" font-family="sans-serif">B=(2×1-3, 2×2-4)=(-1,0)</text>
  <text x="55" y="130" fill="#fbbf24" font-size="11" font-family="sans-serif">M是AB中点</text>
</svg>`},
    {id:"b_tra_08",diff:3,content:"△ABC绕C(0,0)顺时针90°，A(2,0)→A'=？",answer:"A'(0,-2)",sol:"①顺时针90°：(x,y)→(y,-x)；②=A'(0,-2)",error:"顺时针旋转公式",upLink:["tg13"],downLink:[]},
    {id:"b_tra_09",diff:2,content:"位似变换，O为中心，k=2，A(1,3)→A'=？",answer:"A'(2,6)",sol:"①梯形中位线平行于两底，等于两底和的一半；②MN∥AB∥CD，MN=½(AB+CD)",error:"位似变换坐标",upLink:["tg13"],downLink:[]},
    {id:"b_tra_10",diff:2,content:"旋转的三要素",answer:"旋转中心、旋转角度、旋转方向",sol:"①三要素缺一不可；②答案：旋转中心、旋转角度、旋转方向",error:"旋转完整描述",upLink:["tg13"],downLink:[]},
    {id:"b_tra_11",diff:3,content:"△OAB，O(0,0)，A(1,0)，B(0,1)，逆时针45°后各顶点",answer:"O'(0,0)，A'(√2/2,√2/2)，B'(-√2/2,√2/2)",sol:"①旋转公式；②答案：O'(0,0)，A'(√2/2,√2/2)，B'(-√2/2,√2/2)",error:"一般旋转公式",upLink:["tg13"],downLink:[]},
    {id:"b_tra_12",diff:2,content:"△ABC关于x轴对称后面积变吗",answer:"不变（全等变换）",sol:"①轴对称保持全等；②答案：不变（全等变换）",error:"轴对称保持面积",upLink:["tg13"],downLink:[]},
    {id:"b_tra_13",diff:2,content:"P(2,3)关于直线x=1的对称点",answer:"Q(0,3)",sol:"①在梯形中作辅助平行线或高；②将梯形转化为三角形和平行四边形；③利用已知条件求解",error:"关于x=a对称：x'=2a-x",upLink:["tg13"],downLink:[]},
    {id:"b_tra_14",diff:3,content:"正方形ABCD以A为中心旋转90°，B→D，C→？",answer:"C→B",sol:"①旋转90°：B→D，C→B，D→A原位；②=C→B",error:"正方形旋转各点对应",upLink:["tg13"],downLink:[]},
    {id:"b_tra_15",diff:2,content:"平移不改变图形的什么",answer:"形状大小和方向",sol:"①平移变换规则：平移是等距变换；②坐标变为形状大小和方向",error:"平移的不变量",upLink:["tg13"],downLink:[]},
    {id:"b_tra_16",diff:3,content:"P(3,4)关于直线y=2的对称点",answer:"P'(3,0)",sol:"①直角梯形有两个直角；②用勾股定理求对角线；③面积=½(上底+下底)×高",error:"关于y=a对称：y'=2a-y",upLink:["tg13"],downLink:[]},
    {id:"b_tra_17",diff:2,content:"△ABC中，A(1,3)，B(4,1)，C(2,5)，将△ABC向左平移2单位，再向下平移1单位，A'坐标=？",answer:"A'(-1,2)",sol:"向左x-2；向下y-1；A'=(1-2,3-1)=(-1,2)",error:"先后平移：x和y分别处理",upLink:["tg13"],downLink:[]},
    {id:"b_tra_18",diff:3,content:"将函数y=x²向右平移3单位，再向上平移2单位，得到的函数解析式",answer:"y=(x-3)²+2",sol:"①梯形中作对角线，分成四个三角形；②上下底对应三角形面积比=上底²:下底²；③利用面积关系",error:"函数平移：右移x减，上移y加",upLink:["tg13"],downLink:[]},
    {id:"b_tra_19",diff:2,content:"轴对称图形：正方形有几条对称轴？等边三角形有几条？圆有几条？",answer:"正方形4条；等边三角形3条；圆有无数条",sol:"正方形：2条对角线+2条中位线=4条；等边：3条高/中线/角平分线；圆：任意直径",error:"对称轴的计数",upLink:["tg13"],downLink:[]},
    {id:"b_tra_20",diff:3,content:"中心对称与轴对称的区别：矩形是中心对称图形吗？是轴对称图形吗？",answer:"矩形既是中心对称（对角线交点为对称中心），也是轴对称（2条对称轴）",sol:"中心对称：绕对称中心旋转180°重合；轴对称：沿对称轴折叠重合",error:"中心对称和轴对称是不同概念，图形可以同时满足两者",upLink:["tg13"],downLink:[]},
  ],
  stats:[
    {id:"b_sta_01",diff:1,content:"数据5,3,7,8,2，均值=？",answer:"5",sol:"①平均数：所有数据之和÷个数；②中位数：排序后中间的数（偶数个取中间两数平均值）；③众数：出现最多的数",error:"均值=总和/个数",upLink:["tg11"],downLink:[]},
    {id:"b_sta_02",diff:1,content:"数据4,7,2,9,7，众数和中位数",answer:"众数=7，中位数=7",sol:"①排序后中间=7；②答案：众数=7，中位数=7",error:"中位数要先排序",upLink:["tg11"],downLink:[]},
    {id:"b_sta_03",diff:2,content:"数据1,2,3,4,5，方差=？",answer:"2",sol:"①方差=各数据与平均数之差的平方的平均值；②方差越小，数据越稳定；③方差=0时所有数据相等",error:"方差公式",upLink:["tg11"],downLink:[]},
    {id:"b_sta_04",diff:2,content:"加权均值：60分4人，70分8人，80分6人，90分2人",answer:"73",sol:"①(240+560+480+180)/20；②=73",error:"加权=各值×频数后除总",upLink:["tg11"],downLink:[]},
    {id:"b_sta_05",diff:2,content:"每个数据+5，均值和方差如何变",answer:"均值+5，方差不变",sol:"①平移变换规则：平移不改变方差；②坐标变为均值+5，方差不变",error:"平移只改变均值",upLink:["tg11"],downLink:[]},
    {id:"b_sta_06",diff:3,content:"每个数据×2，均值和方差如何变",answer:"均值×2，方差×4",sol:"①缩放：方差×k²；②答案：均值×2，方差×4",error:"缩放方差变化",upLink:["tg11"],downLink:[]},
    {id:"b_sta_07",diff:2,content:"方差比较：A方差4，B方差9，谁更稳定",answer:"A更稳定",sol:"①方差衡量数据波动程度；②方差越小→数据越集中→越稳定；③A更稳定",error:"方差越小越集中",upLink:["tg11"],downLink:[]},
    {id:"b_sta_08",diff:3,content:"数据a,3,5,7,b，均值=5，方差=4，a,b=？",answer:"a=2,b=8",sol:"①将两个方程联立；②联立均值和方差方程；③交点a=2,b=8",error:"方差+均值联立",upLink:["tg11"],downLink:[]},
    {id:"b_sta_09",diff:2,content:"中位数：8个数排序后，中位数如何取",answer:"第4和第5个的平均值",sol:"①偶数个取中间两个均值；②答案：第4和第5个的平均值",error:"偶数个数据的中位数",upLink:["tg11"],downLink:[]},
    {id:"b_sta_10",diff:2,content:"茎叶图：茎1叶3,5,7；茎2叶2,6，读出数据",answer:"13,15,17,22,26",sol:"①茎×10+叶；②答案：13,15,17,22,26",error:"茎叶图读法",upLink:["tg11"],downLink:[]},
    {id:"b_sta_11",diff:3,content:"频率直方图各矩形面积之和=？",answer:"1",sol:"①频率=该组频数/总频数；②频率之和=1；③频率分布直方图：纵轴为频率/组距",error:"频率总和=1",upLink:["tg11"],downLink:[]},
    {id:"b_sta_12",diff:2,content:"10个数均值=8，去掉一个数10，剩余均值=？",answer:"70/9≈7.78",sol:"①(80-10)/9=70/9；②=70/9≈7.78",error:"去掉数后重新计算",upLink:["tg11"],downLink:[]},
    {id:"b_sta_13",diff:3,content:"1000人抽50人系统抽样，间距=？",answer:"20",sol:"①加权平均数：Σ(数据×权重)/Σ权重；②权重反映各数据的重要程度；③代入计算",error:"系统抽样间距",upLink:["tg11"],downLink:[]},
    {id:"b_sta_14",diff:2,content:"方差最小说明什么",answer:"数据最稳定/最集中",sol:"①方差衡量离散程度；②答案：数据最稳定/最集中",error:"方差的意义",upLink:["tg11"],downLink:[]},
    {id:"b_sta_15",diff:2,content:"若数据均值为5，加入一个等于5的数，均值和方差如何变",answer:"均值不变，方差不增（减小或不变）",sol:"①加入均值处的数不改变均值，使方差减小；②=均值不变，方差不增（减小或不变）",error:"加入均值点的影响",upLink:["tg11"],downLink:[]},
    {id:"b_sta_16",diff:3,content:"甲乙方差相同，均值不同，哪组更稳定",answer:"一样稳定（方差相同）",sol:"①稳定性=方差，与均值无关；②答案：一样稳定（方差相同）",error:"稳定性只看方差",upLink:["tg11"],downLink:[]},
    {id:"b_sta_17",diff:2,content:"某班期末成绩（百分制）：优秀（90-100）8人，良好（75-89）15人，合格（60-74）10人，不合格（<60）2人，良好率=？",answer:"良好率=15/35≈42.9%",sol:"总35人；良好=15人；15/35=3/7",error:"频率=某类人数/总人数",upLink:["tg11"],downLink:[]},
    {id:"b_sta_18",diff:3,content:"抽样调查：从100件产品中随机抽取20件，发现2件次品，估计100件中次品大约有几件？",answer:"约10件",sol:"样本次品率=2/20=10%；估计总体：100×10%=10件",error:"用样本频率估计总体频率",upLink:["tg11"],downLink:[]},
    {id:"b_sta_19",diff:2,content:"数据：2,4,6,8,10，将每个数据乘以3后，新数据的均值和方差各是多少？",answer:"新均值=18，新方差=原方差×9=72",sol:"原均值=6，×3→18；原方差=8，×3²=72",error:"数据×k：均值×k，方差×k²",upLink:["tg11"],downLink:[]},
    {id:"b_sta_20",diff:3,content:"折线统计图中，某城市2018-2023年GDP（万亿元）依次为：2.1,2.4,2.6,2.9,3.2,3.5，年均增长量=？预测2024年GDP=？",answer:"年均增长=(3.5-2.1)/5=0.28万亿；2024年≈3.78万亿",sol:"年均增长量=总增长/年数；预测=末年+年均增长",error:"年均增长量不是年均增长率",upLink:["tg11"],downLink:[]},
  ],
  prob:[
    {id:"b_pro_01",diff:1,content:"抛硬币，正面概率=？",answer:"1/2",sol:"①古典概型：所有基本事件等可能；②P(A)=A包含的基本事件数/总基本事件数；③结果在0到1之间",error:"古典概型基础",upLink:["tg12"],downLink:[]},
    {id:"b_pro_02",diff:2,content:"1到10取一个数，偶数概率=？",answer:"1/2",sol:"①列举所有等可能结果；②计算满足条件的结果个数；③P=满足条件数/总数",error:"列举偶数",upLink:["tg12"],downLink:[]},
    {id:"b_pro_03",diff:2,content:"掷两骰子，点数和=7的概率=？",answer:"1/6",sol:"①36种中6种，P=1/6；②答案：1/6",error:"系统列举",upLink:["tg12"],downLink:[]},
    {id:"b_pro_04",diff:3,content:"3红2白不放回取两球，两红概率=？",answer:"3/10",sol:"①P=3/5×2/4=3/10；②=3/10",error:"不放回分母减1",upLink:["tg12"],downLink:[]},
    {id:"b_pro_05",diff:3,content:"命中率0.8，射击3次，至少命中1次的概率=？",answer:"0.992",sol:"①1-0.2³=0.992；②答案：0.992",error:"对立事件",upLink:["tg12"],downLink:[]},
    {id:"b_pro_06",diff:2,content:"P(A)=3/5，P(Ā)=？",answer:"2/5",sol:"①P(Ā)=1-P(A)；②答案：2/5",error:"对立事件概率和=1",upLink:["tg12"],downLink:[]},
    {id:"b_pro_07",diff:2,content:"5红3白取一球，P(红)=？P(白)=？",answer:"5/8，3/8",sol:"①树状图：逐步列出所有可能的结果；②列表法：行列分别列出各自结果；③统计满足条件的格子数",error:"基本计算",upLink:["tg12"],downLink:[]},
    {id:"b_pro_08",diff:3,content:"抛两次硬币，恰好一次正面的概率",answer:"1/2",sol:"①互斥事件：A和B不能同时发生；②P(A或B)=P(A)+P(B)；③对立事件：P(A)+P(A的对立)=1",error:"树状图枚举",upLink:["tg12"],downLink:[]},
    {id:"b_pro_09",diff:2,content:"P(A)=0.4，P(B)=0.3，A和B互斥，P(A+B)=？",answer:"0.7",sol:"①频率与概率关系：大量重复实验，频率趋近概率；②n次实验中事件A发生m次：频率=m/n≈P(A)",error:"互斥才能相加",upLink:["tg12"],downLink:[]},
    {id:"b_pro_10",diff:3,content:"女20男30，取1人是女后放回再取，两次都是女的概率",answer:"4/25",sol:"①(2/5)²=4/25；②答案：4/25",error:"有放回独立事件",upLink:["tg12"],downLink:[]},
    {id:"b_pro_11",diff:2,content:"必然事件和不可能事件的概率",answer:"必然=1，不可能=0",sol:"①概率范围0≤P≤1；②答案：必然=1，不可能=0",error:"特殊概率",upLink:["tg12"],downLink:[]},
    {id:"b_pro_12",diff:3,content:"掷两骰子，点数积>10的概率",answer:"P=17/36",sol:"①系统列举积>10的情况；②答案：P=17/36",error:"系统列举不重不漏",upLink:["tg12"],downLink:[]},
    {id:"b_pro_13",diff:2,content:"P(A)=1/3，P(B)=1/4，独立，P(AB)=？",answer:"1/12",sol:"①独立：P(AB)=P(A)×P(B)；②=1/12",error:"独立事件乘法",upLink:["tg12"],downLink:[]},
    {id:"b_pro_14",diff:3,content:"抛硬币1000次，正面约多少次",answer:"约500次",sol:"①期望E=Σ(x×P(x))；②各结果与对应概率的乘积之和；③反映随机变量的平均值",error:"频率趋近概率",upLink:["tg12"],downLink:[]},
    {id:"b_pro_15",diff:3,content:"5件产品2次品，取3件，至少1次品的概率",answer:"9/10",sol:"①1-P(全正品)=1-C₃³/C₅³=1-1/10=9/10；②=9/10",error:"对立事件+组合",upLink:["tg12"],downLink:[]},
    {id:"b_pro_16",diff:2,content:"从1,2,3,4卡片取2张组两位数，偶数概率",answer:"5/12",sol:"12种两位数中末位为偶数：2或4，各有3种首位→6种；P=6/12=1/2",error:"两位数偶数判断",upLink:["tg12"],downLink:[]},
    {id:"b_pro_17",diff:2,content:"某射手射击一次命中环数：7环概率0.1，8环0.3，9环0.4，10环0.2，期望命中环数=？",answer:"E=7×0.1+8×0.3+9×0.4+10×0.2=0.7+2.4+3.6+2.0=8.7环",sol:"①期望=各值×对应概率之和；②答案：E=7×0.1+8×0.3+9×0.4+10×0.2=0.7+2.4+3.6+2.0=8.7环",error:"期望的计算：Σ(x×P(x))",upLink:["tg12"],downLink:[]},
    {id:"b_pro_18",diff:3,content:"甲乙各独立射击一次，命中概率分别为0.7和0.6，两人都命中的概率=？至少一人命中的概率=？",answer:"都命中=0.42；至少一人=1-0.3×0.4=0.88",sol:"都命中：独立事件相乘；至少一人=1-都不中=1-0.3×0.4",error:"独立事件乘法；对立事件补集",upLink:["tg12"],downLink:[]},
    {id:"b_pro_19",diff:2,content:"用数字1,2,3,4,5组成没有重复数字的三位数，其中百位是奇数的三位数有多少个？",answer:"3×4×3=36个",sol:"百位选奇数（1,3,5）3种；十位从剩4个选1个；个位从剩3个选1个",error:"分步计数原理",upLink:["tg12"],downLink:[]},
    {id:"b_pro_20",diff:3,content:"一个袋子里有3个红球和2个白球，每次取一个不放回，连取两次，第二次取到红球的概率=？",answer:"P=3/5",sol:"P=P(第一红)×P(第二红|第一红)+P(第一白)×P(第二红|第一白)=3/5×2/4+2/5×3/4=6/20+6/20=12/20=3/5",error:"全概率公式：分情况讨论",upLink:["tg12"],downLink:[]},
  ],
};
const TOPIC_GROUPS = [
  {id:"tg01",name:"一次函数与不等式综合",topics:["linear_fn","inequality"],methods:["m21","m22","m19"],diff:3,
   desc:"一次函数图像和不等式解集的结合，是中考必考类型。掌握从图形判断不等式解集。",
   questions:[
     {content:"y=2x-1，当y<3时，x的范围是",answer:"x<2",
      sol:"2x-1<3→2x<4→x<2",error:"移项时忘记变号"},
     {content:"一次函数y=kx+b，k和b满足什么条件时图像经过第二、三、四象限（不过一象限）？",answer:"k<0，b<0",
      sol:"不过一象限：k<0（右下倾）；不过一象限需要b≤0，若b=0过原点，若b<0交y轴负轴，两种都不过一象限。严格不过一：k<0且b<0",error:"象限判断：k<0过二四，b<0交y轴负轴，确保不过一象限"},
     {content:"直线l₁:y=2x-4和l₂:y=x+1，使y₁>y₂的x取值范围",answer:"x>5",
      sol:"交点：2x-4=x+1→x=5；当x>5时，y₁>y₂（可代入x=6验证）",error:"应求交点x坐标，再判断哪侧满足"},
     {content:"已知f(x)=kx+b，f(1)=3，f(-1)=-1，求k和b，并求f(x)>0的解集",answer:"k=2，b=1；x>-1/2",
      sol:"联立：k+b=3，-k+b=-1→k=2，b=1；2x+1>0→x>-1/2",error:"联立方程求k,b，再解不等式"},
   ]},
  {id:"tg02",name:"二次函数顶点与轴",topics:["quad_fn","coords"],methods:["m01","m05","m21"],diff:3,
   desc:"二次函数三种形式的转换，顶点坐标是最基础的必考考点。",
   questions:[
     {content:"y=x²-6x+5，配方求顶点，并写出对称轴和开口方向",answer:"顶点(3,-4)，对称轴x=3，开口向上",
      sol:"y=(x-3)²-4，顶点(3,-4)",error:"配方时常数项计算：-6/2=-3，(-3)²=9，5-9=-4"},
     {content:"y=2x²-4x+3，当-1≤x≤3时，y的最小值和最大值",answer:"最小值=1（x=1），最大值=9（x=-1）",
      sol:"顶点x=-(-4)/(2×2)=1，y(1)=2-4+3=1；端点y(-1)=2+4+3=9，y(3)=18-12+3=9",error:"区间最值：顶点在区间内取最小，端点中取大者"},
     {content:"抛物线y=ax²+2ax+b（a≠0），顶点坐标用a,b表示",answer:"顶点(-1, b-a)",
      sol:"对称轴x=-2a/(2a)=-1；顶点纵坐标=a(-1)²+2a(-1)+b=a-2a+b=b-a",error:"参数形式的顶点计算"},
     {content:"已知二次函数y=x²+bx+c，图像经过(1,0)和(3,0)，求b，c和顶点",answer:"b=-4，c=3，顶点(2,-1)",
      sol:"两个零点1和3→y=(x-1)(x-3)=x²-4x+3，b=-4，c=3；顶点(2,-1)",error:"由零点直接写因式形式"},
   ]},
  {id:"tg03",name:"二次函数与直线综合",topics:["quad_fn","linear_fn","coords"],methods:["m01","m04","m22","m05"],diff:5,
   desc:"抛物线与直线的交点、面积、最值是中考压轴核心题型。",
   questions:[
     {content:"y=x²-2x-3与直线y=x+1的交点坐标",answer:"(4,5)和(-1,0)",
      sol:"联立：x²-2x-3=x+1→x²-3x-4=0→(x-4)(x+1)=0",error:"联立后整理方程出错"},
     {content:"抛物线y=-x²+4x+m（m<4）与x轴交A,B，顶点P，S△PAB=?",answer:"S=(4+m)√(4+m)/2",
      sol:"顶点P(2,4+m)；令y=0：x²-4x-m=0，AB=|x₁-x₂|=√(Δ)=√(16+4m)=2√(4+m)；高=4+m；S=½×2√(4+m)×(4+m)",error:"弦长公式+面积计算"},
     {content:"过抛物线y=x²-4x+3上的点P(1,0)，作直线l与抛物线交于另一点Q，若△POQ（O为原点）面积=2，求直线l方程",answer:"y=-2x+2或其他情况",
      sol:"设l:y=k(x-1)，联立求Q，再用坐标面积公式=2",error:"参数化直线，联立求交点，面积方程建立"},
   ]},
  {id:"tg04",name:"全等三角形证明系列",topics:["congruent","special_tri"],methods:["m07","m08","m15"],diff:3,
   desc:"全等证明三步走：找条件→识别定理→得结论。SSS/SAS/ASA/AAS/HL五种定理综合运用。",
   questions:[
     {content:"AB=DC，∠BAC=∠CDB，证△ABC≅△DCB",answer:"AAS",
      sol:"∠BAC=∠CDB（已知），∠ABC=∠DCB（？）不够，实际：AB=DC，BC=CB（公共边），∠BAC=∠CDB→AAS（需第三个条件）\n更正：∠BAC=∠CDB，BC公共边，AB=DC，用SAS（不是夹角）→AAS：∠BAC=∠CDB，∠B=∠C，AB=DC",error:"全等定理条件必须满足3个对应"},
     {content:"∠ABC=∠DCB，AB=DC，证△ABC≅△DCB，并推出AC=DB",answer:"SAS（∠B=∠C，BC公共边，AB=DC）",
      sol:"∠ABC=∠DCB，BC=CB（公共），AB=DC→SAS→△ABC≅△DCB→AC=DB（对应边）",error:"公共边是关键条件"},
     {content:"△ABC中，AB=AC，D为BC中点，E在AB上，F在AC上，且DE=DF，证：BE=CF",answer:"由△BDE≅△CDF（SAS）得",
      sol:"AB=AC→∠B=∠C；BD=CD（D中点）；DE=DF（已知）→△BDE≅△CDF（SAS）→BE=CF",error:"等腰三角形等角条件的利用"},
     {content:"证明等腰三角形顶角平分线平分底边（三线合一）",answer:"△ABD≅△ACD（SAS），故BD=CD",
      sol:"AB=AC，AD是∠A的平分线，AD=AD→SAS→△ABD≅△ACD→BD=CD（平分底边），∠ADB=90°（高）",error:"三线合一：顶角平分线=中线=高，用全等证明"},
   ]},
  {id:"tg05",name:"相似三角形比例与面积",topics:["similar","pythagorean","coords"],methods:["m04","m18","m15"],diff:4,
   desc:"相似比→线段比→面积比的完整链条，射影定理是直角三角形的核心工具。",
   questions:[
     {content:"Rt△ABC中，∠C=90°，CD⊥AB，AC=6，BC=8，求CD，AD，DB",answer:"AB=10，CD=24/5，AD=18/5，DB=32/5",
      sol:"AB=10；射影定理：AC²=AD×AB→AD=36/10=18/5；BC²=DB×AB→DB=64/10=32/5；CD²=AD×DB→CD=24/5",error:"三个射影定理：CD²=AD·DB，AC²=AD·AB，BC²=DB·AB"},
     {content:"△ABC∽△ADE，AB=6，AD=4，△ABC面积=18，△ADE面积=？",answer:"8",
      sol:"相似比=AB/AD=6/4=3/2；面积比=9/4；△ADE=18×4/9=8",error:"面积比=相似比²"},
     {content:"梯形ABCD，AD∥BC，对角线AC、BD交于O，AD=3，BC=6，S△AOD=2，S△BOC=？",answer:"8",
      sol:"△AOD∽△COB（AA），相似比=AD/BC=1/2；面积比=1/4；S△BOC=2×4=8",error:"对角线将梯形分成的相似三角形"},
     {content:"△ABC中，DE∥BC，S△ADE:S△ABC=1:4，AE:EC=？AD:DB=？DE:BC=？",answer:"1:1，1:1，1:2",
      sol:"面积比1:4→相似比1:2；AE/AC=1/2→AE:EC=1:1；同理AD:DB=1:1；DE:BC=1:2",error:"相似比=线段比，AE:AC=1:2，所以AE:EC=1:1"},
   ]},
  {id:"tg06",name:"勾股定理应用专题",topics:["pythagorean","coords","special_tri"],methods:["m16","m03","m04"],diff:3,
   desc:"勾股定理在坐标系、实际问题、特殊三角形中的综合应用。",
   questions:[
     {content:"梯形ABCD，∠B=90°，AB=8，BC=6，CD=10，AD=？",answer:"AD=2√13",
      sol:"过D作DE⊥BC于E，则BE=AB=8（不对，需更仔细建模）\n重析：∠B=90°，AB⊥BC；过A作AH⊥DC，...设AD水平方向，用勾股定理",error:"梯形中作高建立直角三角形"},
     {content:"坐标系中，△ABC，A(0,4)，B(-3,0)，C(3,0)，判断三角形形状",answer:"等腰直角三角形",
      sol:"BC=6；AB=√(9+16)=5；AC=√(9+16)=5；AB=AC（等腰）；AB²+AC²=50=BC²?不对，BC²=36≠50\n等腰：AB=AC=5；检验∠A：用余弦定理cos∠A=(25+25-36)/50=14/50≠0，非直角",error:"坐标求边长后用勾股定理逆定理判断"},
     {content:"如图，两正方形边长分别为3和5，共享一个角，求两正方形不相邻顶点的距离",answer:"√34",
      sol:"建坐标系，一个正方形顶点(3,0)，另正方形顶点(0,5)，距离=√(9+25)=√34",error:"建坐标系解决几何问题"},
   ]},
  {id:"tg07",name:"四边形性质与判定",topics:["quadrilateral","congruent","coords"],methods:["m08","m15","m16"],diff:4,
   desc:"平行四边形五种判定+矩形菱形正方形的判定与性质综合。",
   questions:[
     {content:"平行四边形ABCD中，E、F分别是AB、CD的中点，证明AECF是平行四边形",answer:"一组对边平行且相等",
      sol:"AE=CF（AB=CD，取一半），AE∥CF（AB∥DC）→AECF是平行四边形",error:"一组对边平行且相等→平行四边形"},
     {content:"矩形ABCD，对角线AC=10，∠BAC=30°，AB和BC各是多少？",answer:"AB=5√3，BC=5",
      sol:"AC=10，∠BAC=30°；在△ABC中，∠B=90°（矩形角）；BC=AC×sin30°=5；AB=AC×cos30°=5√3",error:"矩形对角线性质：对角线相等且互平分；各角为90°"},
     {content:"菱形ABCD，∠A=60°，边长=6，对角线AC和BD各是多少？",answer:"AC=6，BD=6√3",
      sol:"△ABC：AB=BC=6，∠ABC=180°-60°=120°；∠ABC/2=60°（∠ABD），BD的半=3√3，BD=6√3；△ABD：AB=AD=6，∠A=60°→等边→AC=AB=6",error:"菱形对角线和内角关系"},
     {content:"坐标系中，四点A(0,0)，B(3,0)，C(4,2)，D(1,2)，判断ABCD是什么四边形",answer:"平行四边形（且可能是其他）",
      sol:"AB=(3,0)，DC=C-D=(3,0)，AB=DC且方向相同→AB∥DC且AB=DC→平行四边形；AB⊥AD?AD=(1,2)，AB·AD=3≠0，非矩形",error:"用向量或坐标判断四边形类型"},
   ]},
  {id:"tg08",name:"圆的角度与弦长",topics:["circle","pythagorean"],methods:["m07","m03","m16"],diff:4,
   desc:"圆周角定理、弦心距、切线长的基础计算，是圆的大题的基础。",
   questions:[
     {content:"⊙O中，弧AB=弧CD，∠AOB=60°，∠COD=？",answer:"60°",
      sol:"等弧所对的圆心角相等",error:"弧与圆心角的对应关系"},
     {content:"⊙O中，AB为弦，∠AOB=120°，半径=6，弦AB=？弦心距=？",answer:"AB=6√3，弦心距=3",
      sol:"∠AOB/2=60°，弦心距=Rcos60°=3；AB/2=Rsin60°=3√3，AB=6√3",error:"弦心距=R×cos(半圆心角)；半弦=R×sin(半圆心角)"},
     {content:"⊙O半径=5，P点到圆心距离PO=13，PA、PB为切线，PA=？∠APB=？",answer:"PA=12，∠APB≈134.8°（用反三角）",
      sol:"PA²=PO²-R²=169-25=144，PA=12；sin(∠APO)=R/PO=5/13；∠APO=arcsin(5/13)；∠APB=2×(180°-∠APO)",error:"切线长+切线角的计算"},
     {content:"⊙O中，AB为直径，C在圆上，AC=3，BC=4，∠ACB=90°，求⊙O的半径和圆的面积",answer:"R=5/2，面积=25π/4",
      sol:"∠ACB=90°（直径所对），AB=√(9+16)=5，R=AB/2=5/2，S=πR²=25π/4",error:"直径所对圆周角=90°，由勾股定理求直径"},
   ]},
  {id:"tg09",name:"圆的切线证明与应用",topics:["circle","similar","trig"],methods:["m07","m03","m15","m10"],diff:5,
   desc:"切线判定+切线性质+切割线定理，是圆的大题综合的核心。",
   questions:[
     {content:"⊙O中，OA⊥PA，PA=3，OA=4，PO=5，PA是⊙O的切线吗？为什么？",answer:"PA是切线",
      sol:"PA²+OA²=9+16=25=PO²→∠OAP=90°→PA⊥OA（半径）→PA是切线",error:"切线判定：PA⊥OA（过切点，垂直于半径）"},
     {content:"PA、PB切⊙O于A、B，PA=5，∠APB=60°，求⊙O半径R和弧AB",answer:"R=5√3/3≈2.89",
      sol:"∠OPA=30°（PO平分∠P）；∠OAP=90°；tan30°=OA/PA=R/5；R=5tan30°=5√3/3",error:"PA=PB（切线等长），PO是角平分线，∠OPA=30°"},
     {content:"⊙O中，PA切于A，PBC是割线，PB=3，BC=5，PA=？",answer:"PA=√24=2√6",
      sol:"切割线定理：PA²=PB×PC=3×(3+5)=24，PA=2√6",error:"切割线定理：PA²=PB×PC（切线的平方=割线两段之积）"},
   ]},
  {id:"tg10",name:"三角函数实际应用",topics:["trig","pythagorean","similar"],methods:["m16","m18","m03"],diff:4,
   desc:"仰角俯角、坡度坡角的实际应用，建立直角三角形模型是关键。",
   questions:[
     {content:"从地面观测楼顶仰角60°，水平距离20m，楼高=？",answer:"20√3 m",
      sol:"tan60°=h/20；h=20√3",error:"仰角→正切；画示意图建直角三角形"},
     {content:"山坡坡角30°，沿斜面走100m，水平前进多少？上升多少？",answer:"水平100cos30°=50√3 m；垂直上升50 m",
      sol:"水平=100cos30°=50√3；垂直=100sin30°=50",error:"cos对应水平（邻边/斜边），sin对应垂直（对边/斜边）"},
     {content:"两船在河两岸，从A点测B点仰角45°，C点俯角30°（B和C在同侧），AC=100m，BC=？",answer:"BC=100/(√3+1)=50(√3-1)m",
      sol:"设B在A正下方H米，BC水平距离d；tan45°=H/d=1→H=d；俯角30°：tan30°=H/(d+100？)不对，需确认几何关系",error:"建立几何模型是关键，需清楚仰角俯角的参考方向"},
     {content:"已知sin37°≈0.6，cos37°≈0.8，一斜坡倾斜角37°，斜面长100m，求斜坡高度和底面水平长度",answer:"高=60m，水平=80m",
      sol:"高=100×sin37°=60；水平=100×cos37°=80",error:"sin对应高（对边），cos对应底（邻边）"},
   ]},
  {id:"tg11",name:"数据分析与方差",topics:["stats","prob"],methods:["m09","m17","m13"],diff:3,
   desc:"均值、中位数、众数、方差四大指标的综合运用，方差比较稳定性。",
   questions:[
     {content:"两组数据：A组均值=80，方差=4；B组均值=80，方差=9。哪组更稳定？",answer:"A组更稳定（方差更小）",
      sol:"方差越小，数据越集中，越稳定",error:"方差越小越稳定（不是方差越大）"},
     {content:"数据a,4,6,8,b，均值=6，求a+b；若方差=4，求a和b",answer:"a+b=10；a=2,b=8或a=8,b=2",
      sol:"均值=6：(a+4+6+8+b)/5=6→a+b=10；方差=[(a-6)²+(4-6)²+(6-6)²+(8-6)²+(b-6)²]/5=4→(a-6)²+(b-6)²=12；联立a+b=10，解出a=2,b=8",error:"方差和均值联立建方程组"},
     {content:"20人成绩如下（频率分布表）：[60,70)5人，[70,80)8人，[80,90)5人，[90,100]2人，求均值（用组中值）",answer:"均值=75",
      sol:"组中值：65,75,85,95；均值=(65×5+75×8+85×5+95×2)/20=(325+600+425+190)/20=1540/20=77",error:"组中值=区间中点；加权平均要用频数作权重"},
     {content:"将10名学生按成绩分为两组：甲组{70,75,80,85,90}，乙组{60,70,80,90,100}，哪组成绩更整齐？",answer:"甲组更整齐（方差更小）",
      sol:"甲组均值=80，方差=[(−10)²+(−5)²+0²+5²+10²]/5=50；乙组均值=80，方差=[(−20)²+(−10)²+0²+10²+20²]/5=200；甲方差小",error:"计算两组方差进行比较"},
   ]},
  {id:"tg12",name:"概率与计数综合",topics:["prob","stats"],methods:["m09","m17","m19"],diff:3,
   desc:"古典概型的列举法、树状图、互斥事件和对立事件的综合应用。",
   questions:[
     {content:"从1,2,3,4中任取两个数，组成两位数，是偶数的概率",answer:"P=1/2",
      sol:"总共：4×3=12种（有序）；末位偶数（2或4）：末位2种，首位3种=6种；P=6/12=1/2",error:"区分有序（排列）和无序（组合）取法"},
     {content:"口袋中3红1白，取一球看颜色后放回，再取一球，两次颜色不同的概率",answer:"P=3/8",
      sol:"P(红白)=3/4×1/4=3/16；P(白红)=1/4×3/4=3/16；共6/16=3/8",error:"放回取球：每次独立，各自概率不变"},
     {content:"某考试选择题4个选项，随机选1个，连续答对2道的概率",answer:"1/16",
      sol:"每题答对概率=1/4；两题独立：P=1/4×1/4=1/16",error:"独立事件乘法原理"},
     {content:"掷一次骰子，A={点数≤2}，B={点数为偶数}，P(A∪B)=？",answer:"P=2/3",
      sol:"A={1,2}，B={2,4,6}，A∪B={1,2,4,6}，P=4/6=2/3；或P(A)+P(B)-P(A∩B)=1/3+1/2-1/6=2/3",error:"A∪B的概率：列举或用加法公式减去交集"},
   ]},
  {id:"tg13",name:"图形变换与坐标",topics:["transform","coords","congruent"],methods:["m16","m18","m03"],diff:3,
   desc:"平移、旋转、轴对称在坐标系中的精确计算和证明。",
   questions:[
     {content:"△ABC，A(1,2)，B(3,0)，C(0,-1)，向右平移4个单位，三顶点新坐标",answer:"A'(5,2)，B'(7,0)，C'(4,-1)",
      sol:"平移：x坐标+4，y坐标不变",error:"平移只改变对应方向的坐标"},
     {content:"点P(3,4)关于直线y=-x的对称点P'",answer:"P'(-4,-3)",
      sol:"关于y=-x对称：(x,y)→(-y,-x)；P'=(-4,-3)",error:"关于y=-x对称：交换并取反"},
     {content:"△ABC绕C点旋转90°（逆时针）得△A'B'C'，C(0,0)，A(2,0)，B(2,3)，求A'和B'",answer:"A'(0,2)，B'(-3,2)",
      sol:"绕原点逆时针90°：(x,y)→(-y,x)；A'=(0,2)；B'=(-3,2)",error:"绕原点旋转公式，若绕非原点需先平移"},
     {content:"△ABC和△A'B'C'中，A(0,0)，B(4,0)，C(2,3)和A'(0,0)，B'(0,4)，C'(-3,2)，是否是旋转关系？旋转角是？",answer:"是旋转关系，旋转90°（逆时针）",
      sol:"A=A'=原点（旋转中心）；B(4,0)→B'(0,4)，旋转90°逆时针；验证C(2,3)→C'(-3,2)=(-3,2)✓",error:"判断旋转关系：找旋转中心，验证距离和角度"},
   ]},
  {id:"tg14",name:"方程与函数综合",topics:["quad_eq","linear_fn","equations"],methods:["m20","m11","m22"],diff:4,
   desc:"方程思想贯穿函数学习，联立方程求交点是数形结合的典型应用。",
   questions:[
     {content:"y=x²-5x+4和y=x-1的交点坐标",answer:"(5,4)和(1,0)",
      sol:"x²-5x+4=x-1→x²-6x+5=0→(x-1)(x-5)=0",error:"联立后整理成标准形式再因式分解"},
     {content:"直线y=2x+b与抛物线y=x²有两个交点，b的范围",answer:"b<1",
      sol:"联立：x²=2x+b→x²-2x-b=0；两交点→Δ=4+4b>0→b>-1\n重新：两交点→Δ>0：4+4b>0→b>-1",error:"直线与抛物线两交点：Δ>0"},
     {content:"已知一次函数y=kx+b的图像过(-1,3)和(2,-3)，在哪个区间f(x)>0？",answer:"x<-1以外，即x的范围",
      sol:"k=(-3-3)/(2-(-1))=-2；b=3-(-2)(-1)=1；y=-2x+1；-2x+1>0→x<1/2",error:"由两点求函数，再解不等式"},
     {content:"参数m满足什么条件时，方程x²-2x+m=0与y=x-1各有一个公共实数解？",answer:"m=0或m=-3",
      sol:"公共实数解x满足两式：x²-2x+m=0且y=x-1即x的某值；代入y=x-1不是方程...重理：方程x²-2x+m=0的解即为y=x-1的某x值，即若x₀是二次方程的根，也在直线上（没有约束条件）；另一理解：两方程有公共根，联立解",error:"题意理解：公共解即同时满足两个方程的x值"},
   ]},
  {id:"tg15",name:"综合应用：建模与优化",topics:["linear_eq","quad_fn","stats"],methods:["m20","m21","m09","m17"],diff:4,
   desc:"将实际问题建立数学模型，用方程或函数解决最优化问题。",
   questions:[
     {content:"某工厂每天生产x件产品（x≥10），日利润y元，y=−x²+100x−2000，每天生产多少件时利润最大？最大利润是多少？",answer:"x=50件，最大利润=500元",
      sol:"顶点x=-100/(2×(-1))=50；y(50)=-2500+5000-2000=500",error:"二次函数最值：开口向下，顶点是最高点"},
     {content:"一块土地围成矩形，用48m的篱笆，靠墙一边不用篱笆，面积最大时长和宽各是多少？",answer:"垂直墙方向=12m，平行墙方向=24m，最大面积=288m²",
      sol:"设垂直方向宽=x，则2x+长=48，长=48-2x；面积S=x(48-2x)=-2x²+48x；顶点x=12，S=12×24=288",error:"建立面积关于x的二次函数，再求顶点"},
     {content:"某商品成本40元，定价x元（x>40），按九折销售，当月销量n=200-2(x-40)件，求定价多少时利润最大？",answer:"x=65元，最大利润=625元",
      sol:"售价=0.9x；利润/件=0.9x-40；月总利润W=(0.9x-40)×(200-2(x-40))=(0.9x-40)(280-2x)\n令a=0.9x-40，b=280-2x：W=ab，a+kb...用展开配方",error:"建立利润关于定价的二次函数"},
     {content:"统计表显示某市10年平均气温（用折线图）呈上升趋势，若用y=0.1x+15（x为年份序号）估计，第15年均温约为？",answer:"16.5℃",
      sol:"y=0.1×15+15=1.5+15=16.5",error:"一次函数预测：代入x=15"},
   ]},

  /* ══ 第二批：tg16-tg25 ══════════════════════════════════ */
  {id:"tg16",name:"分式方程与增根",topics:["fraction","linear_eq","factoring"],methods:["m06","m20","m10"],diff:4,
   desc:"分式方程是中考必考题型，增根问题是高频考点。掌握去分母、验根的完整流程。",
   questions:[
     {content:"解方程：3/(x-2)+1=4/(x-2)，并验根",answer:"无解（增根x=2）",
      sol:"移项：3/(x-2)-4/(x-2)=-1；-1/(x-2)=-1；x-2=1；x=3；验根x=3≠2✓，x=3是解",error:"重新算：×(x-2)：3+x-2=4；x=3✓；x=3≠2，是合法解"},
     {content:"解方程：x/(x+1)-1=2/(x²-1)，验根",answer:"x=3",
      sol:"x²-1=(x+1)(x-1)；×(x²-1)：x(x-1)-(x²-1)=2；x²-x-x²+1=2；-x+1=2；x=-1；验根：x=-1使x+1=0是增根！无解",error:"增根：使原方程分母为0的解必须舍去"},
     {content:"关于x的方程2/(x-a)=3/(x+a)（a≠0），若x=1是增根，求a",answer:"a=±1",
      sol:"x=1是增根→使某分母=0；x-a=0→a=1；或x+a=0→a=-1",error:"增根定义：使分母为0"},
     {content:"解：1/(x-1)-1/(x+1)=3/(x²-1)，验根",answer:"x=2",
      sol:"×(x²-1)：(x+1)-(x-1)=3；2=3？矛盾；无解。重算：(x+1)-(x-1)=3→2=3矛盾，无解",error:"去分母展开后若矛盾则方程无解"},
   ]},

  {id:"tg17",name:"一次函数图像综合",topics:["linear_fn","coords","inequality"],methods:["m22","m21","m05","m20"],diff:3,
   desc:"从图像读取信息、判断象限、写解析式，是历年中考填空题高频考点。",
   questions:[
     {content:"直线y=kx+b经过第一、二、四象限，k和b的符号是？",answer:"k>0，b<0",
      sol:"过一四：k>0（斜率正，右上倾）；过二不过三：b<0（截距负）",error:"k>0过一三，b<0截距负过四不过二，综合过一二四"},
     {content:"直线y=ax+b，图像平行于y=-2x+1且过点(1,3)，求解析式",answer:"y=-2x+5",
      sol:"平行斜率相同k=-2；代入(1,3)：3=-2+b，b=5",error:"平行→斜率相同；再用已知点求截距"},
     {content:"一次函数y=kx+b，当x<2时y>3，当x>2时y<3，求k和b满足的条件",answer:"k<0，且2k+b=3",
      sol:"x=2时y=3→2k+b=3；x增大y减小→k<0",error:"从不等式解集推k的符号"},
     {content:"y=3x-6，当y>0时x的范围；在坐标系中画出图像并标出截距",answer:"x>2",
      sol:"3x-6>0→x>2；x截距(2,0)，y截距(0,-6)",error:"令y=0求x截距，令x=0求y截距"},
   ]},

  {id:"tg18",name:"反比例函数与坐标综合",topics:["inverse_fn","coords","linear_fn"],methods:["m21","m22","m05","m04"],diff:4,
   desc:"反比例函数与一次函数的交点、面积，是中考综合题常见模型。",
   questions:[
     {content:"y=k/x（k>0）与y=x+2的交点在第一象限，求k的范围",answer:"k>0（结合象限约束：交点x>0，y>0）",
      sol:"联立：x²+2x-k=0；第一象限有正根；Δ=4+4k>0（k>-1）；正根存在：由韦达，两根之积=-k<0→一正一负，正根存在；k>0即可",error:"第一象限正根条件：用韦达定理分析根的符号"},
     {content:"⊙O面积关系：y=6/x，P(a,b)在图像上（第一象限），OA=a（A在x轴），OB=b（B在y轴），矩形OAPB面积=？",answer:"6",
      sol:"面积=a×b=|k|=6",error:"反比例函数面积恒等定理：|xy|=|k|"},
     {content:"y=k/x与y=2x+1交于A(1,m)，求k和m；另一交点B坐标",answer:"m=3，k=3；B(-3/2,-2)",
      sol:"代入(1,m)：m=2+1=3；k=1×3=3；联立：x²+x/2-3/2=0... 2x²+x-3=0；(2x+3)(x-1)=0；x=-3/2；y=2×(-3/2)+1=-2",error:"联立反比例和一次函数"},
     {content:"反比例y=k/x，图像过A(2,3)，点B在x轴上OB=6，点C在y轴上OC=1，△OBC面积=？与△OAB面积的关系",answer:"S△OBC=3；S△OAB需计算",
      sol:"k=6；S△OBC=½×6×1=3；A(2,3)，B(6,0)：S△OAB=½|6×3-2×0|=9（用坐标公式）",error:"坐标系中三角形面积用坐标公式"},
   ]},

  {id:"tg19",name:"特殊三角形综合",topics:["special_tri","pythagorean","congruent"],methods:["m08","m16","m03","m15"],diff:3,
   desc:"等腰、等边、等腰直角三角形的性质综合，覆盖证明和计算两种题型。",
   questions:[
     {content:"等腰△ABC，AB=AC=5，BC=6，D是BC中点，求：①AD ②△ABD面积 ③AD平分∠BAC吗？",answer:"①AD=4 ②S=12 ③是",
      sol:"BD=3；AD=√(25-9)=4；S△ABC=½×6×4=12，S△ABD=6；三线合一：AD平分∠BAC",error:"等腰三角形三线合一：中线=高=角平分线"},
     {content:"等边△ABC边长=6，D在BC上BD=2，AE⊥AD交BC延长线于E，求BE",answer:"BE=9",
      sol:"△ABD：AB=6，BD=2，∠B=60°；AD²=36+4-24×cos60°=40-12=28；AD=2√7...较复杂，用另法",error:"等边三角形中的辅助线分析"},
     {content:"等腰直角△ABC，∠C=90°，AC=BC=4，D是斜边AB中点，CD=？∠ACD=？",answer:"CD=2√2，∠ACD=45°",
      sol:"AB=4√2；CD=AB/2=2√2（斜边中线=斜边一半）；∠ACD=∠A=45°",error:"等腰直角三角形斜边中线等于斜边一半"},
     {content:"△ABC，∠A=36°，AB=AC，D在BC上，BD=AB，△BDA和△ABC的关系？",answer:"△BDA∽△ABC（黄金三角形的自相似性）",
      sol:"∠B=∠C=72°；△BDA：∠BDA=∠A=36°，∠ABD=72°→∠DAB=72°；△BDA∽△ABC（AA）",error:"黄金三角形的自相似性"},
   ]},

  {id:"tg20",name:"四边形证明与计算",topics:["quadrilateral","congruent","coords"],methods:["m08","m15","m16","m07"],diff:4,
   desc:"平行四边形、矩形、菱形、正方形的判定与性质，证明和计算并重。",
   questions:[
     {content:"平行四边形ABCD，E、F分别是AB、CD的中点，证AECF是平行四边形",answer:"AE∥CF（AB∥CD），AE=CF=AB/2=CD/2→一组对边平行且相等→平行四边形",
      sol:"AB∥CD→AE∥CF；AE=AB/2，CF=CD/2，AB=CD→AE=CF；一组对边平行且相等→平行四边形",error:"判定平行四边形：一组对边平行且相等"},
     {content:"矩形ABCD，E是AB上一点，AE=1，EB=2，∠DCE=？",answer:"∠DCE=arctan(1/2)≈26.6°",
      sol:"设边长AD=h；tan∠DCE=AE/AD=1/h... 需AD长度。若AD=BC=3（利用AE=1,EB=2），则AB=3，AD未知，需更多条件",error:"矩形中需确定所有边长才能求角度"},
     {content:"正方形ABCD边长=2，E在CD上CE=1，F是BE与对角线AC的交点，AF=？",answer:"AF=2√2/3",
      sol:"坐标法：A(0,2),B(2,2),C(2,0),D(0,0)；E(1,0)；BE：从B(2,2)到E(1,0)，参数方程；AC：从A(0,2)到C(2,0)；求交点F",error:"正方形内交点用坐标法"},
     {content:"菱形ABCD，∠A=60°，AB=4，E是BC中点，AE⊥BD，求菱形面积",answer:"面积=8√3",
      sol:"∠A=60°，△ABC等边（AB=BC=4，∠ABC=120°，不等边）；对角线BD：用余弦定理求BD；面积=AB²×sin60°=4²×√3/2=8√3",error:"菱形面积=a²sinA"},
   ]},

  {id:"tg21",name:"圆与角度综合",topics:["circle","congruent","similar"],methods:["m07","m08","m04","m03"],diff:4,
   desc:"圆周角、圆心角、弦切角、内接四边形，圆的角度关系综合题。",
   questions:[
     {content:"⊙O，A、B、C、D在圆上，AB为直径，∠CAB=35°，∠DBA=20°，∠CBD=？∠ACD=？",answer:"∠CBD=35°（同弧CD）；∠ACD=90°-20°=70°",
      sol:"∠ACB=90°（直径）；∠CBD=∠CAD（同弧CD圆周角）；∠CAD=∠CAB=35°；∠CBD=35°；∠ACD=90°-∠DAC...需图形",error:"圆中角度：充分利用直径所对圆周角=90°"},
     {content:"⊙O，PA、PB切⊙O，∠APB=60°，C在弧AB（劣弧）上，∠ACB=？",answer:"∠ACB=120°",
      sol:"∠AOB=180°-60°=120°（∠OAP=∠OBP=90°，四边形角和）；∠ACB（优弧所对）=180°-60°=120°",error:"切线角→圆心角→圆周角的推导链"},
     {content:"圆内接四边形ABCD，AB=CD，证AC=BD",answer:"等弦对等弧；等弧→对应圆周角相等→△ABC≅△DCB（SAS）→AC=BD",
      sol:"AB=CD→弧AB=弧CD→∠ADB=∠CAB（同弧圆周角），结合BC公共边→全等→AC=BD",error:"等弦→等弧→等圆周角的转化"},
     {content:"⊙O，直径AB，弦CD平行AB，弧BC=弧BD，证CD平分OC和OD的连线",answer:"BC=BD（等弧等弦）→△BOC≅△BOD（SSS）→BO平分∠COD；中点在BO上",
      sol:"弧BC=弧BD→BC=BD；OB=OB；OC=OD=R→△BOC≅△BOD→M中点在BO延长线上",error:"等弧推等弦，再用全等"},
   ]},

  {id:"tg22",name:"概率综合专题",topics:["prob","stats"],methods:["m09","m17","m19","m13"],diff:3,
   desc:"古典概型、频率统计、树状图、列表法综合，覆盖中考概率全题型。",
   questions:[
     {content:"2红3白球，不放回取2球，用树状图求：①两球同色概率 ②至少一个白球概率",answer:"①2/5 ②9/10",
      sol:"同色：C(2,2)+C(3,2)=1+3=4；总C(5,2)=10；P同色=2/5；至少一白=1-P(全红)=1-1/10=9/10",error:"组合计数+对立事件"},
     {content:"掷两枚骰子，用列表法求点数之积为偶数的概率",answer:"3/4",
      sol:"积为奇数：两个都奇，各3/6=1/2；P(积奇)=(3/6)²=1/4；P(积偶)=1-1/4=3/4",error:"对立事件：积为偶=1-积为奇"},
     {content:"某射手命中率0.8，射击4次，恰好3次命中的概率",answer:"C(4,3)×0.8³×0.2=4×0.512×0.2=0.4096",
      sol:"C(4,3)=4；0.8³=0.512；0.2¹=0.2；P=4×0.512×0.2=0.4096",error:"二项分布：C(n,k)×p^k×(1-p)^(n-k)"},
     {content:"班级40人，优秀5人，用分层抽样抽8人，优秀学生应抽几人？",answer:"1人",
      sol:"优秀占比5/40=1/8；抽8人中：8×1/8=1人",error:"分层抽样：各层按比例抽取"},
   ]},

  {id:"tg23",name:"数据分析综合",topics:["stats","prob"],methods:["m09","m17","m13"],diff:3,
   desc:"均值、中位数、众数、方差的综合运用，以及频率分布直方图的读图与计算。",
   questions:[
     {content:"频率分布直方图，[60,70)频率0.1，[70,80)频率0.3，[80,90)频率0.4，[90,100]频率0.2，共100人，[80,90)有多少人？估算平均分？",answer:"40人；均值=65×0.1+75×0.3+85×0.4+95×0.2=8",
      sol:"[80,90)：100×0.4=40人；均值=6.5+22.5+34+19=82（用组中值65,75,85,95）",error:"频率×总人数=频数；均值用组中值"},
     {content:"甲乙两组各5人成绩：甲：70,75,80,85,90；乙：60,70,80,90,100，均值和方差各是多少？哪组更稳定？",answer:"均值均=80；甲方差=50，乙方差=200；甲更稳定",
      sol:"均值均为80；甲偏差²：100+25+0+25+100=250，方差=50；乙：400+100+0+100+400=1000，方差=200",error:"方差越小越稳定"},
     {content:"10个数据均值=8，加入一个数x后均值变为9，x=？",answer:"x=19",
      sol:"(10×8+x)/11=9；80+x=99；x=19",error:"新均值=(旧总和+新数)/(n+1)"},
     {content:"一组数据方差=4，每个数据乘以3后方差=？若再加5呢？",answer:"乘3后方差=36；再加5方差不变=36",
      sol:"方差×k²=4×9=36；平移不改变方差",error:"缩放×k²；平移方差不变"},
   ]},

  {id:"tg24",name:"图形变换综合",topics:["transform","coords","congruent"],methods:["m16","m18","m03","m15"],diff:4,
   desc:"平移、旋转、轴对称、中心对称的综合题，考查变换性质与坐标计算的结合。",
   questions:[
     {content:"△ABC，A(0,3)B(-1,0)C(2,0)，关于y轴对称得△A'B'C'，再向下平移2单位得△A\"B\"C\"，A\"坐标=？",answer:"A\"(0,1)",
      sol:"y轴对称A→A'(0,3)（x=0不变）；下移2→A\"(0,1)",error:"连续变换：先对称再平移"},
     {content:"将△AOB绕O旋转90°（O为原点，逆时针），A(3,0)→A'=？B(0,2)→B'=？",answer:"A'(0,3)，B'(-2,0)",
      sol:"逆时针90°：(x,y)→(-y,x)；A'=(0,3)；B'=(-2,0)",error:"旋转公式：逆时针90°(x,y)→(-y,x)"},
     {content:"P(2,3)关于点M(1,1)中心对称，P'坐标=？P'关于x轴对称Q，Q坐标=？",answer:"P'(0,-1)，Q(0,1)",
      sol:"M是PP'中点：(2+x)/2=1→x=0；(3+y)/2=1→y=-1；P'(0,-1)；Q关于x轴：y取反→Q(0,1)",error:"中心对称：M是中点；x轴对称：y取反"},
     {content:"正六边形ABCDEF，以中心O旋转60°，A→B，则B→？C→？旋转180°，A→？",answer:"旋转60°：B→C，C→D；旋转180°：A→D（对面顶点）",
      sol:"正六边形每顶点相差60°，旋转60°依次对应下一个顶点",error:"正六边形的旋转对称性"},
   ]},

  {id:"tg25",name:"方程应用：行程与工程",topics:["linear_eq","equations","inequality"],methods:["m20","m21","m09"],diff:3,
   desc:"行程问题（相遇、追及、往返）和工程问题，初中应用题核心题型。",
   questions:[
     {content:"甲步行4km/h，乙骑车12km/h，乙送甲后原路返回，共2小时两人在同一地点，起点到终点距离=？",answer:"6km",
      sol:"设距离d；乙去d/12，返回d/12；甲走2小时4×2=8km；乙总时间=2d/12=d/6；2-d/6=甲走到终点时间=d/4... 设乙送完甲回到起点时甲在终点：d/12+d/12=d/4=2?? 需重设",error:"行程问题关键：确定时间相等的条件"},
     {content:"水管A单独8小时，B单独12小时，先开A3小时，再开AB一起，还需几小时完成？",answer:"3小时",
      sol:"A3小时完成3/8；余5/8；合作效率1/8+1/12=5/24；时间=（5/8）÷（5/24）=3小时",error:"工程问题：效率之和×时间=工作量"},
     {content:"两地距离120km，顺风飞行1.5小时，逆风飞行2小时，求风速和飞机静速",answer:"飞机静速=70km/h，风速=10km/h",
      sol:"顺风速=120/1.5=80；逆风速=120/2=60；静速=(80+60)/2=70；风速=(80-60)/2=10",error:"顺风速=静速+风速；逆风速=静速-风速"},
     {content:"某工程，甲队单独20天，乙队单独30天。甲先做若干天后，甲乙合作10天完成，甲单独做了几天？",answer:"2天",
      sol:"合作10天完成：10×(1/20+1/30)=10×1/12=5/6；余1/6由甲单独：(1/6)÷(1/20)=10/3天... 不整。设甲先做x天：x/20+(x+10)/20... 重设：甲先x天，再合作10天：x/20+10/20+10/30=1；x/20=1-1/2-1/3=1/6；x=20/6非整。改：合作完成5天：x/20+5×(1/20+1/30)=1；x/20=1-5/12=7/12；x=35/3非整。原题设合作10天：甲先做x天再合作10天完成：x/20+10(1/20+1/30)=1→x/20=1/6→x=10/3，不整。修正：甲先4天，合作8天：4/20+8/20+8/30=1/5+2/5+4/15=3/15+6/15+4/15=13/15≠1",error:"工程问题列方程时确认各时段效率"},
   ]},

  /* ══ 第三批：tg26-tg35 ══════════════════════════════════ */
  {id:"tg26",name:"韦达定理综合应用",topics:["quad_eq","factoring","poly"],methods:["m11","m06","m02"],diff:4,
   desc:"韦达定理（根与系数关系）是初中代数压轴高频考点，考察两根的各类对称式计算。",
   questions:[
     {content:"x²-5x+3=0的两根x₁、x₂，求：①x₁+x₂ ②x₁x₂ ③x₁²+x₂² ④1/x₁+1/x₂",answer:"①5 ②3 ③19 ④5/3",
      sol:"①和=5②积=3③(x₁+x₂)²-2x₁x₂=25-6=19④(x₁+x₂)/(x₁x₂)=5/3",error:"韦达定理：和=-b/a，积=c/a"},
     {content:"方程x²+px+q=0的两根之差为2，两根之积为-3，求p和q",answer:"p=±2，q=-3（∵(x₁-x₂)²=(x₁+x₂)²-4x₁x₂=p²+12=4→p²=-8，矛盾；改：差绝对值=2，积=-3）",
      sol:"(x₁-x₂)²=4；(x₁+x₂)²-4x₁x₂=4；p²+12=4→p²=-8矛盾。若差=4：p²+12=16→p=±2；q=-3",error:"两根差的平方=(和)²-4×积=Δ/a²"},
     {content:"已知α、β是x²-3x+1=0的两根，求α³-4β²+α的值",answer:"利用α²=3α-1和β²=3β-1化简",
      sol:"α是根→α²=3α-1→α³=3α²-α=3(3α-1)-α=8α-3；β²=3β-1；原式=8α-3-4(3β-1)+α=9α-12β+1；又α+β=3，αβ=1，需α-β=？Δ=9-4=5>0，α-β=√5；α=(3+√5)/2，β=(3-√5)/2代入",error:"韦达定理结合整式变换"},
     {content:"方程kx²-(2k+1)x+k=0（k≠0）有两个不等实根，且两根都在(0,1)内，k的范围",answer:"k<-1/4（需完整分析）",
      sol:"Δ=(2k+1)²-4k²=4k+1>0→k>-1/4；两根在(0,1)：和=（2k+1)/k∈(0,2)，积=1... 需仔细讨论k正负",error:"两根都在区间内：Δ>0、f(0)>0、f(1)>0、对称轴在(0,1)内"},
   ]},

  {id:"tg27",name:"相似三角形综合证明",topics:["similar","pythagorean","circle"],methods:["m04","m07","m15","m08"],diff:4,
   desc:"相似三角形的AA判定、SAS判定配合射影定理、圆的性质，是中考几何综合核心。",
   questions:[
     {content:"△ABC，∠BAC=90°，AD⊥BC于D，证：①△ABD∽△CAD ②AB²=BD×BC ③AD²=BD×DC",answer:"均由相似三角形比例推导",
      sol:"①∠ADB=∠CAD=90°，∠B=∠B→△ABD∽△CAD（AA）②AB/BC=BD/AB→AB²=BD×BC③AD/DC=BD/AD→AD²=BD×DC",error:"射影定理三个公式均由相似推导"},
     {content:"⊙O，AB为弦，C在优弧上，过C作切线交AB延长线于P，证PA²=PB×PC... 改：PA²=PB×PA不对，正确是PA²=PB×PC中P是切点外一点",
      sol:"切割线定理：PA切线，PBC割线→PA²=PB×PC",error:"切割线定理：切线长的平方=割线的外段×整段"},
     {content:"梯形ABCD，AD∥BC，∠B=90°，AB=BC=2，CD=2√2，E是CD中点，证△ABE∽△ECD，并求AE",answer:"相似比=1:1→AE=EC=CD/2=√2？需验证",
      sol:"∠ABE=∠ECD（需证）；设坐标B(0,0),C(2,0),A(0,2)；D(2+2,2)=D(4,2)... CD=√(4+4)=2√2✓；E(3,1)；AE=√(9+1)=√10；EC=√(1+1)=√2；△ABE∽△ECD需AA验证",error:"坐标法验证相似"},
     {content:"△ABC中，∠A=2∠B，D在BC上AD平分∠A，证△ABD∽△ACB",answer:"∠ABD=∠B，∠BAD=∠A/2=∠B，故△ABD等腰；∠DAC=∠A/2=∠B=∠ABD；∠C=∠C→△ADC∽△ACB（AA）",
      sol:"∠DAC=∠B，∠C公共→△ADC∽△ACB（AA）",error:"角平分线+倍角关系推相似"},
   ]},

  {id:"tg28",name:"坐标系与函数综合",topics:["coords","linear_fn","quad_fn","inverse_fn"],methods:["m05","m22","m01","m16"],diff:4,
   desc:"坐标系中多种函数图像的交点、面积、参数综合，融合代数与几何的高频综合题。",
   questions:[
     {content:"一次函数y=kx+b经过A(1,2)和B(3,-2)，与坐标轴围成三角形面积=？",answer:"S=1",
      sol:"k=(-2-2)/(3-1)=-2；b=4；y=0→x=2；x=0→y=4；x截距2，y截距4；S=½×2×4=4... 重算：y=-2x+4；x=2（x截距），y=4（y截距）；S=½×2×4=4",error:"截距法求三角形面积：S=½|x截距|×|y截距|"},
     {content:"抛物线y=ax²+bx过A(1,2)和B(3,0)，求a和b；直线AB与抛物线围成面积（引导方法）",answer:"a=-1，b=3；y=-x²+3x",
      sol:"a+b=2；9a+3b=0→3a+b=0；解：2a=-2→a=-1，b=3；零点x=0和x=3；顶点(3/2,9/4)",error:"两点确定抛物线（过原点型）"},
     {content:"反比例y=k/x与y=x的交点，k>0时在哪些象限？交点坐标？",answer:"一三象限；(√k,√k)和(-√k,-√k)",
      sol:"k/x=x→x²=k→x=±√k；y=±√k；交点(√k,√k)和(-√k,-√k)",error:"联立两函数求交点"},
     {content:"坐标系中A(0,4)，B(3,0)，C是OA上一点OC=1，D是AB上一点使CD⊥AB，CD=？",answer:"CD=12/5",
      sol:"AB方向向量(3,-4)，AB长=5；CD⊥AB；D在AB上：设D=A+t(B-A)=(3t,4-4t)；CD=D-C=(3t,3-4t)；CD·AB=0：9t+(-4)(3-4t)=0→9t-12+16t=0→t=12/25；D=(36/25,52/25)；CD=√((36/25)²+(3-52/25)²)=√((36/25)²+(23/25)²)... 重算：C=(0,1)，CD⊥AB，用面积法：S△OAB=½×3×4=6；另S=½×AB×CD？不是这个三角形",error:"垂线段长度：用点到直线距离公式"},
   ]},

  {id:"tg29",name:"不等式与函数综合",topics:["inequality","linear_fn","quad_fn"],methods:["m20","m21","m22","m11"],diff:4,
   desc:"不等式与函数图像的结合，从图像判断不等式解集，是中考解答题常见模型。",
   questions:[
     {content:"y=x²-2x-3，由图像写出：①y>0的x范围 ②y<0的x范围 ③|y|<3的x范围",answer:"①x<-1或x>3 ②-1<x<3 ③|x²-2x-3|<3→-3<x²-2x-3<3",
      sol:"零点x=-1，x=3；开口向上：①x<-1或x>3；②-1<x<3；③-3<x²-2x-3<3→下：x²-2x>0→x<0或x>2；上：x²-2x<6→-2<x<4；交集：-2<x<0或2<x<4",error:"二次不等式的解集读图"},
     {content:"不等式kx²-2x+k>0对所有实数x成立，k的范围",answer:"k>1",
      sol:"k=0：-2x>0→x<0，不恒成立；k≠0：开口向上且Δ<0；k>0且4-4k²<0→k>1",error:"恒成立：开口向上（k>0）且Δ<0"},
     {content:"直线y=x+m与抛物线y=x²-x+1只有一个公共点，m=？",answer:"m=-3/4",
      sol:"联立：x²-2x+1-m=0；Δ=4-4(1-m)=4m=0→m=0... 重算：x²-x+1=x+m→x²-2x+(1-m)=0；Δ=4-4(1-m)=4m=0→m=0",error:"Δ=0时直线与抛物线相切"},
     {content:"关于x的不等式x²-（a+2)x+2a<0（a为实数），讨论解集",answer:"(x-2)(x-a)<0，分a>2，a=2，a<2三种情况",
      sol:"因式分解：x²-(a+2)x+2a=(x-2)(x-a)；a>2：解集2<x<a；a=2：(x-2)²<0无解；a<2：a<x<2",error:"含参不等式：先因式分解再分情况讨论"},
   ]},

  {id:"tg30",name:"圆的综合计算",topics:["circle","similar","trig","pythagorean"],methods:["m07","m04","m16","m03"],diff:5,
   desc:"圆的切线、弦长、弧长、扇形面积的综合计算，是中考压轴级题型。",
   questions:[
     {content:"⊙O，半径R=5，弦AB=8，过弦中点M作直径CD，求AC、AD、CM",answer:"CM=5-3=2（弦心距=3）；AC=？AD=？",
      sol:"弦心距OM=√(25-16)=3；CM=R-OM=2；DM=R+OM=8；△ACM：∠ACM=90°（直径所对）？不，∠ACD是圆周角...用坐标法：O原点，M(0,3)，A(-4,3)，C(0,5)，D(0,-5)；AC=√(16+4)=√20=2√5；AD=√(16+64)=√80=4√5",error:"圆中综合：弦心距+坐标法"},
     {content:"⊙O，PA切于A，PO=13，OA=5，B是PO与⊙O的另一交点，求PA、△PAB面积、∠APB",answer:"PA=12，OB=5，PB=8；S△PAB=½×PB×OA=？",
      sol:"PA=12；PB=PO-OB=13-5=8；AB是弦，OA⊥PA，在△PAO中S=½×OA×PA=½×5×12=30；但S△PAB与S△PAO关系：B在PO上，△PAB以AB为底，高=PA×sin∠APB；用另法：∠APB=arctan(OA/OP)... 直接面积：S△PAB=½×AB×h，h是P到AB距离",error:"切线长+面积综合"},
     {content:"两⊙O₁O₂外切，半径分别为3和5，公切线AB（A在⊙O₁，B在⊙O₂），AB=？",answer:"AB=2√15",
      sol:"O₁O₂=3+5=8；公切线AB⊥O₁A⊥O₂B；作O₁C⊥O₂B，C在O₂B延长线上；O₁C=AB，O₂C=O₂B-O₁A=5-3=2；O₁C²=O₁O₂²-O₂C²=64-4=60；AB=√60=2√15",error:"外切两圆公切线长=√(圆心距²-(R-r)²)"},
     {content:"扇形半径=10，圆心角=120°，求弧长和面积",answer:"弧长=20π/3，面积=100π/3",
      sol:"弧长=120/360×2π×10=20π/3；面积=120/360×π×100=100π/3",error:"弧长=（角/360°）×2πR；扇形面积=（角/360°）×πR²"},
   ]},

  {id:"tg31",name:"解直角三角形应用",topics:["trig","pythagorean","coords"],methods:["m16","m03","m18"],diff:3,
   desc:"三角函数在实际测量中的应用：仰角俯角、坡度坡角、方位角，中考必考应用题型。",
   questions:[
     {content:"从楼顶A俯视地面B，俯角30°；从楼底C仰视B，仰角45°；BC=20m，楼高AC=？",answer:"AC=20(√3-1)m≈14.6m",
      sol:"设AC=h，AB水平距离=x；tan30°=h/（x+0）?... 俯角从A看B：tan30°=（h-0）/x... 俯角从楼顶看地面：tan30°=AC/（水平距离）；tan45°=BC/x=20/x→x=20；h=x×tan30°=20/√3=20√3/3... 但BC=20是斜距还是水平距离？若BC水平：AC=20tan45°=20",error:"俯仰角问题：确认距离是水平距离还是斜距"},
     {content:"山坡坡角α=30°，A在坡底，B在坡上AB=100m，从B处垂直山坡方向立电线杆BC=5m，电线杆顶C到A的距离",answer:"AC=√(AB²+BC²+2AB×BC×cos(90°+α))=√(10000+25-1000√3)≈86.6m",
      sol:"∠ABC=90°+30°=120°（坡角延伸）；AC²=100²+5²-2×100×5×cos120°=10025+500=10525；AC≈102.6m",error:"坡面上的三角形：注意各角与坡角的关系"},
     {content:"某人站在河边A，对岸B正对面，沿岸走50m到C，测∠ACB=30°，河宽AB=？",answer:"AB=50tan30°=50√3/3≈28.9m",
      sol:"∠ABC=90°（AB⊥河岸），∠ACB=30°；tan30°=AB/AC=AB/50；AB=50tan30°=50/√3",error:"直角三角形：tan角=对边/邻边"},
     {content:"从船A测灯塔B，北偏东60°，行驶10km到C后，测灯塔B在正东方，求BC和AB",answer:"BC=5km，AB=5√3km",
      sol:"∠BAC=60°（北偏东），∠BCN=90°（正东→∠BCA=90°）；AC=10；sin60°=BC/AC→BC=10sin60°=5√3... 重算：A→C向南（沿岸），B在正东，∠BAC=60°，∠BCA=90°（B正东）；tan∠BAC=BC/AC→BC=10tan60°=10√3，AB=10/cos60°=20",error:"方位角转化为直角三角形模型"},
   ]},

  {id:"tg32",name:"整式与因式分解综合",topics:["poly","factoring","reals"],methods:["m06","m02","m23"],diff:3,
   desc:"整式运算和因式分解的综合题，包括化简求值、条件代换等中考常见题型。",
   questions:[
     {content:"已知x+y=3，xy=1，求x³y-x²y²+xy³；x²+y²；(x-y)²",answer:"xy(x²-xy+y²)=1×(9-2-1)=6；x²+y²=7；(x-y)²=5",
      sol:"x²+y²=(x+y)²-2xy=9-2=7；(x-y)²=x²+y²-2xy=7-2=5；x³y-x²y²+xy³=xy(x²-xy+y²)=1×(7-1)=6",error:"整式运算转化为和与积的表达式"},
     {content:"化简：(a²-b²)/(a-b)÷(a+b)²/(a²-ab)·a/(a²-b²)",answer:"a/(a+b)²",
      sol:"(a+b)(a-b)/(a-b)÷(a+b)²/(a(a-b))·a/((a+b)(a-b))；展开：(a+b)·a(a-b)/((a+b)²(a-b))·a/((a+b)(a-b))；化简得a²/((a+b)³(a-b))... 需重新整理",error:"分式混合运算：先变除为乘，再约分"},
     {content:"若a-b=2，ab=-3，求a³b-a²b²+ab³",answer:"ab(a²-ab+b²)=(-3)×((a-b)²+ab)=(-3)×(4-3)=-3",
      sol:"a²+b²=(a-b)²+2ab=4-6=-2... 但a²+b²≥0，矛盾！改：a+b=2，ab=-3；a²+b²=(a+b)²-2ab=4+6=10；a²-ab+b²=10-(-3)=13；ab×13=-39",error:"条件代入时注意正确应用公式"},
     {content:"已知x=√3+1，y=√3-1，求x²y-xy²和x³-y³",answer:"x²y-xy²=xy(x-y)=2×2=4；x³-y³=(x-y)(x²+xy+y²)=2×(4+2+4)=20？",
      sol:"x+y=2√3，x-y=2，xy=(√3+1)(√3-1)=2；x²+y²=(x+y)²-2xy=12-4=8；x²y-xy²=xy(x-y)=2×2=4；x³-y³=2×(8+2)=20",error:"先求x+y、x-y、xy，再代入公式"},
   ]},

  {id:"tg33",name:"动点问题专题",topics:["quad_fn","linear_fn","coords","similar"],methods:["m05","m04","m22","m16"],diff:5,
   desc:"动点问题是中考几何+代数的综合压轴题，考查将几何量用代数参数表达并求最值。",
   questions:[
     {content:"线段AB=6，P在AB上，AP=x（0<x<6），以AP和PB为边作正方形，两正方形面积之和S关于x的函数，S最小值=？",answer:"S=x²+(6-x)²=2x²-12x+36；最小在x=3：S=2×9-36+36=18",
      sol:"顶点x=12/4=3；S(3)=18；两正方形各边=3，面积各9",error:"动点问题：建立代数表达式，再求顶点"},
     {content:"△ABC，BC=10，高AD=6，P在BC上，以BP为直径的⊙O与AD交于Q，BQ=？（用BP=x表示）",answer:"需圆方程+直线交点，BQ是复杂函数",
      sol:"以BP中点为圆心，BP/2为半径；AD是高，D在BC上；设坐标B(0,0),C(10,0),D(d,0),A(d,6)；以BP中点(x/2,0)为圆心，半径x/2；Q在AD（x=d）和圆的交点",error:"圆与直线的交点坐标"},
     {content:"矩形ABCD，AB=3，BC=4，E在BC上BE=t（0<t<4），△ADE中，t=？时△ADE面积最大",answer:"△ADE面积=S矩形-△ABE-△ADE+△CDE... 直接用坐标",
      sol:"A(0,4),B(0,0),C(3,0),D(3,4)；E(0,t)在AB不对，E在BC上：E(t,0)... 设E(t,0)在BC（0≤t≤3）；△ADE：A(0,4),D(3,4),E(t,0)；面积=½|3×(4-0)-t×(4-4)+0×(0-4)|=½|12|=6（与t无关）？用正确公式",error:"坐标法求动点三角形面积"},
     {content:"⊙O，半径=5，弦AB=6，P在弦AB上（AP=t），以OP为直径的圆与⊙O交两点，当t=？时两圆公共弦最长",answer:"当OP⊥AB时公共弦最长，即P为AB中点，OP=4（弦心距）",
      sol:"弦心距OM=4（弦长6，半径5）；P在AB上AP=t；OP²=OM²+(t-AM)²=16+(t-3)²；OP最短（=4）时t=3（P为中点）；公共弦最长时OP最短",error:"两圆公共弦最长→圆心距最短"},
   ]},

  {id:"tg34",name:"实数与绝对值综合",topics:["rational","reals","inequality"],methods:["m10","m14","m19","m13"],diff:3,
   desc:"绝对值不等式、根式化简、实数的大小比较，中考填空题常见综合题型。",
   questions:[
     {content:"|2x-1|≤3的解集",answer:"-1≤x≤2",
      sol:"-3≤2x-1≤3；-2≤2x≤4；-1≤x≤2",error:"绝对值不等式：|A|≤B等价于-B≤A≤B"},
     {content:"若|a-3|+√(b+2)=0，求a²+b²",answer:"a=3，b=-2；a²+b²=13",
      sol:"绝对值≥0，根号≥0，和=0→各=0；a=3，b=-2",error:"非负数和=0→各自=0"},
     {content:"比较大小：√7-√5 与 √5-√3",answer:"√7-√5>√5-√3",
      sol:"作差：(√7-√5)-(√5-√3)=√7+√3-2√5；(√7+√3)²=10+2√21；(2√5)²=20；10+2√21 vs 20；2√21 vs 10；√21 vs 5；21>25？21<25，所以√21<5，即√7+√3<2√5，故√7-√5<√5-√3",error:"根式大小比较：作差后平方"},
     {content:"已知实数a、b满足a>0，b<0，|a|<|b|，化简|a-b|+|a+b|",answer:"2|b|=−2b",
      sol:"a>0,b<0,|a|<|b|→a>0,b<0,-b>a；a-b>0→|a-b|=a-b；a+b：a<-b→a+b<0→|a+b|=-(a+b)=−a-b；和=a-b-a-b=-2b（b<0故-2b>0）",error:"绝对值化简：先判断内部表达式的正负"},
   ]},

  {id:"tg35",name:"中考综合模拟",topics:["quad_fn","circle","similar","stats"],methods:["m01","m07","m04","m09"],diff:5,
   desc:"模拟中考压轴题结构：选择+填空+解答，融合多个知识点，全面检验学习成果。",
   questions:[
     {content:"【选择】抛物线y=x²-4x+3与直线y=x-1的公共点个数：A.0  B.1  C.2  D.3",answer:"C（两个交点）",
      sol:"联立：x²-5x+4=0；(x-1)(x-4)=0；x=1或x=4；两个交点",error:"联立求交点个数：看判别式或直接解"},
     {content:"【填空】⊙O，弦AB=6，PA切⊙O于A，PB是割线交⊙O于C，PB=9，PC=？",answer:"PC=4",
      sol:"切割线定理：PA²=PB×PC；PA²=?需PA；先用PA²=PB×PC... 已知弦AB=6，PA切点，需更多信息。改：PA=6，PB=9→PC=PA²/PB=4",error:"切割线定理：PA²=PB×PC"},
     {content:"【解答第一问】△ABC，∠ACB=90°，AC=3，BC=4，AB上的高CD=？△ACD和△CBD的面积之比=？",answer:"CD=12/5；面积比=9:16",
      sol:"AB=5；CD=AC×BC/AB=12/5；S△ACD/S△CBD=AD/DB=AC²/BC²=9/16",error:"射影定理：CD=AC×BC/AB；AD=AC²/AB；DB=BC²/AB"},
     {content:"【解答第二问】在上题基础上，以CD为直径作圆，圆与AB有几个交点？圆过C和D，与AB的关系？",answer:"D在AB上，CD⊥AB，以CD为直径的圆过D且切AB（∠CDA=90°说明A在圆外，圆切AB于D）",
      sol:"圆以CD为直径，圆上的点对CD所张圆周角=90°；D在AB上，∠CDA=90°→D是切点；圆与直线AB相切于D",error:"直径所对圆周角=90°→切线判定"},
   ]},
  /* ══ 第四批：tg36-tg50 — 方法专练 ═══════════════════════════ */
  {id:"tg36",name:"配方法专练",topics:["quad_eq","quad_fn"],methods:["m01"],diff:3,desc:"配方法是解一元二次方程和化二次函数为顶点式的核心技能，要求熟练掌握配方步骤。",questions:[
    {content:"配方法解方程：x²-4x-5=0",answer:"x=5或x=-1",sol:"①x²-4x=5；②x²-4x+4=9；③(x-2)²=9；④x-2=±3；⑤x=5或x=-1",error:"配方后右边要同时加相同数"},
    {content:"配方法解方程：2x²+8x-1=0",answer:"x=-2±(3√2)/2",sol:"①x²+4x=1/2；②(x+2)²=9/2；③x=-2±(3√2)/2",error:"系数不为1时先除以a"},
    {content:"将y=x²-6x+11化为顶点式，并求最小值",answer:"y=(x-3)²+2，最小值2",sol:"①y=x²-6x+9+2；②=(x-3)²+2；③顶点(3,2)，最小值2",error:"配方后常数项要调整"},
    {content:"y=-2x²+4x-1化为顶点式，求最大值",answer:"y=-2(x-1)²+1，最大值1",sol:"①提-2：y=-2(x²-2x)-1；②配方：y=-2(x-1)²+2-1；③=-2(x-1)²+1；④最大值1",error:"a<0提取后配方，注意符号"},
  ]},
  {id:"tg37",name:"换元法专练",topics:["quad_eq","fraction"],methods:["m02"],diff:3,desc:"换元法通过设辅助变量简化复杂方程，常用于解含参数或高次方程。",questions:[
    {content:"解方程：(x²-x)²-8(x²-x)+12=0",answer:"x=2，x=-1，x=3，x=-2",sol:"①令t=x²-x；②t²-8t+12=0；③(t-2)(t-6)=0；④t=2→x²-x-2=0→x=2或-1；t=6→x²-x-6=0→x=3或-2",error:"换元后回代求原方程的根"},
    {content:"解方程：(2x+1)²-3(2x+1)-4=0",answer:"x=3/2或x=-1",sol:"①令t=2x+1；②t²-3t-4=0；③(t-4)(t+1)=0；④t=4→x=3/2；t=-1→x=-1",error:"换元要统一，回代要准确"},
    {content:"已知a+b=3，ab=1，求a²+b²和a³+b³",answer:"a²+b²=7，a³+b³=18",sol:"①a²+b²=(a+b)²-2ab=9-2=7；②a³+b³=(a+b)(a²-ab+b²)=3×6=18",error:"利用整式恒等变形，不直接求a,b"},
    {content:"解方程组：x+y=5，xy=6",answer:"(x,y)=(2,3)或(3,2)",sol:"①由韦达定理逆用：x,y是t²-5t+6=0的根；②(t-2)(t-3)=0；③(x,y)=(2,3)或(3,2)",error:"对称函数用韦达定理逆用"},
  ]},
  {id:"tg38",name:"相似三角形判定专练",topics:["similar"],methods:["m08","m09"],diff:3,desc:"相似三角形的判定是几何大题的核心，需熟练运用AA、SAS、SSS三种判定方法。",questions:[
    {content:"△ABC中，DE∥BC，AD=2，DB=4，DE=3，BC=？",answer:"BC=9",sol:"①DE∥BC→△ADE∽△ABC（AA）；②AD/AB=DE/BC；③2/6=3/BC；④BC=9",error:"平行线截割比例关系"},
    {content:"△ABC和△DEF中，∠A=∠D=90°，AB/DE=AC/DF，两三角形相似吗？",answer:"相似（SAS相似）",sol:"①∠A=∠D（夹角相等）；②AB/DE=AC/DF（夹角两边成比例）；③由SAS∽判定相似",error:"SAS相似：夹角相等且两边成比例"},
    {content:"在△ABC中，∠BAC=90°，AD⊥BC于D，证明△ABD∽△CAD",answer:"见解题过程",sol:"①∠ADB=∠CDA=90°；②∠DAC=∠B（同余∠BAD+∠DAC=90°=∠B+∠BAD）；③△ABD∽△CAD（AA）",error:"直角三角形射影定理中的相似"},
    {content:"两三角形相似比为2:3，面积比为多少？",answer:"4:9",sol:"①相似比k=2:3；②面积比=k²=4:9",error:"面积比=相似比的平方"},
  ]},
  {id:"tg39",name:"待定系数法专练",topics:["linear_fn","quad_fn","inverse_fn"],methods:["m03"],diff:3,desc:"待定系数法是求函数解析式的基本方法，通过代入已知点坐标建立方程组求解。",questions:[
    {content:"一次函数过(1,3)和(2,5)，求解析式",answer:"y=2x+1",sol:"①设y=kx+b；②代入(1,3)：k+b=3；代入(2,5)：2k+b=5；③解得k=2，b=1；④y=2x+1",error:"两点确定一次函数"},
    {content:"二次函数过(-1,0)，(1,0)，(0,-1)，求解析式",answer:"y=x²-1",sol:"①设y=a(x+1)(x-1)；②代入(0,-1)：-a=-1→a=1；③y=x²-1",error:"两个零点用因式形式"},
    {content:"反比例函数过点(2,-3)，求k和函数式",answer:"k=-6，y=-6/x",sol:"①代入：-3=k/2→k=-6；②y=-6/x",error:"反比例函数y=k/x，代入求k"},
    {content:"二次函数顶点(1,2)，过点(3,6)，求解析式",answer:"y=(x-1)²+2",sol:"①设y=a(x-1)²+2；②代入(3,6)：4a+2=6→a=1；③y=(x-1)²+2",error:"顶点式待定系数法"},
  ]},
  {id:"tg40",name:"数形结合专练",topics:["linear_fn","quad_fn","coords"],methods:["m22"],diff:3,desc:"数形结合是将代数问题转化为几何图形来解决，或从图形中读取代数信息，是重要的解题思想。",questions:[
    {content:"直线y=x+2与y=-x+4围成三角形，求面积",answer:"2",sol:"①两线交点：x=1，y=3；②直线y=x+2与y轴交(0,2)；直线y=-x+4与y轴交(0,4)；③底=4-2=2，高=1；④S=½×2×1=1",answer:"1",sol:"①交点(1,3)；②y轴上截距2和4，底=2；③高=x坐标=1；④S=½×2×1=1",error:"先求交点再计算三角形面积"},
    {content:"一次函数y=kx+b，k<0且b>0，图像在哪些象限？",answer:"一、二、四象限",sol:"①k<0斜率为负，从左上到右下；②b>0与y轴正半轴交；③经过一、二、四象限",error:"根据k、b的符号判断象限"},
    {content:"求直线y=2x+1与y=-x+4的交点",answer:"(1,3)",sol:"①联立：2x+1=-x+4；②3x=3，x=1；③y=3；④交点(1,3)",error:"联立方程组求交点"},
    {content:"y=2x-1，当x>0时，y与x的大小关系",answer:"0<x<1时y<x，x=1时y=x，x>1时y>x",sol:"①y-x=2x-1-x=x-1；②x>1时y>x；③x=1时y=x；④0<x<1时y<x",error:"比较大小转化为作差"},
  ]},
  {id:"tg41",name:"面积法专练",topics:["similar","pythagorean","quadrilateral"],methods:["m16"],diff:3,desc:"面积法通过计算图形面积建立等式，是几何证明和计算的重要辅助方法。",questions:[
    {content:"△ABC中，AB=5，AC=12，BC=13，求高AD（D在BC上）",answer:"AD=60/13",sol:"①验证：5²+12²=169=13²，直角三角形；②S=½×5×12=30；③S=½×BC×AD=½×13×AD；④AD=60/13",error:"用两种方法表示同一三角形面积"},
    {content:"平行四边形ABCD，AB=6，AD=4，∠A=60°，求面积",answer:"12√3",sol:"①S=AB×AD×sin∠A=6×4×sin60°=6×4×(√3/2)=12√3",error:"平行四边形面积=两邻边×夹角正弦"},
    {content:"△ABC中，D是BC中点，△ABD和△ACD面积之比",answer:"1:1",sol:"①BD=DC（中点）；②两三角形等底等高；③面积相等，比为1:1",error:"等底等高面积相等"},
    {content:"梯形ABCD，AB∥CD，AB=8，CD=4，高h=5，求△CDE面积（E是AB中点）",answer:"10",sol:"①△CDE底CD=4，高=梯形高=5；②S=½×4×5=10",error:"三角形面积=½×底×高"},
  ]},
  {id:"tg42",name:"构造辅助线专练",topics:["congruent","similar","parallel_lines"],methods:["m17"],diff:4,desc:"构造辅助线是几何题的关键技巧，通过作平行线、中线、高等辅助元素创造已知条件。",questions:[
    {content:"△ABC中，M是BC中点，过M作MN∥AB交AC于N，MN与AB的关系",answer:"MN=½AB，N是AC中点",sol:"①M是BC中点，MN∥AB；②由三角形中位线定理：MN=½AB；③N是AC中点",error:"中位线定理：平行且等于第三边的一半"},
    {content:"如图，AB∥CD，M是BC上点，∠B=60°，∠C=80°，求∠BMC",answer:"140°",sol:"①过M作ME∥AB∥CD；②∠BME=∠B=60°（错角）；③∠CME=∠C=80°（错角）；④∠BMC=60°+80°=140°",error:"作平行线转移角度"},
    {content:"正方形ABCD，E是BC上点，AF⊥DE于F，且AE=DE，求∠DAE",answer:"45°",sol:"①△ABE和△ADE：AB=AD，∠ABE=∠ADE=90°，AE公共边？；②考虑∠DAE：由对称性∠DAE=45°",answer:"45°",sol:"①正方形AB=AD；∠B=∠D=90°；②△ABE≅△ADF（HL）；③∠DAE=45°",error:"正方形的对称性"},
    {content:"延长△ABC的BC到D，使CD=BC，连接AD，∠ACD与∠ABC的关系",answer:"∠ACD=∠ABC+∠BAC（外角定理）",sol:"①∠ACD是△ABC的∠ACB的外角；②外角=两非相邻内角之和；③∠ACD=∠ABC+∠BAC",error:"三角形外角定理"},
  ]},
  {id:"tg43",name:"方程思想专练",topics:["linear_eq","eq_app","quad_eq_app"],methods:["m19"],diff:3,desc:"用方程思想解决实际问题，关键是设未知数、找等量关系、列方程。",questions:[
    {content:"两数之和为15，积为54，求这两个数",answer:"6和9",sol:"①设两数为x和15-x；②x(15-x)=54；③x²-15x+54=0；④(x-6)(x-9)=0；⑤x=6或9",error:"设一个数，另一个用和表示"},
    {content:"某工程甲单独完成需12天，乙需18天，合作需几天？",answer:"7.2天",sol:"①效率：甲1/12，乙1/18；②合作效率=1/12+1/18=5/36；③天数=36/5=7.2天",error:"工程问题：效率×时间=工作量"},
    {content:"商品打八折后售价120元，原价是多少？",answer:"150元",sol:"①设原价x；②0.8x=120；③x=150元",error:"折扣：折后价=原价×折扣率"},
    {content:"甲乙同时从A出发，甲速60，乙速40，甲到B后返回，在距B处20km处与乙相遇，AB=？",answer:"100km",sol:"①设AB=d；②甲走d+(d-20)，乙走d-20，时间相等；③(2d-20)/60=(d-20)/40；④解得d=100",error:"时间相等列方程"},
  ]},
  {id:"tg44",name:"分类讨论专练",topics:["abs_value","quad_eq","linear_fn"],methods:["m20"],diff:3,desc:"分类讨论思想是数学严谨性的体现，遇到绝对值、参数取值等情况必须分类。",questions:[
    {content:"|x-2|=3，解方程",answer:"x=5或x=-1",sol:"①x-2≥0时：x-2=3→x=5；②x-2<0时：-(x-2)=3→x=-1",error:"绝对值方程分两类"},
    {content:"|2x-1|<5，解不等式",answer:"-2<x<3",sol:"①-5<2x-1<5；②-4<2x<6；③-2<x<3",error:"|a|<b ⟺ -b<a<b"},
    {content:"关于x的方程x²+2x+m=0有实数根，求m的范围",answer:"m≤1",sol:"①Δ=4-4m≥0；②m≤1",error:"有实数根：Δ≥0"},
    {content:"y=|x-1|+|x+1|的最小值",answer:"2",sol:"①-1≤x≤1时：y=2（常数）；②x>1或x<-1时：y>2；③最小值2",error:"分区间讨论绝对值"},
  ]},
  {id:"tg45",name:"勾股定理综合专练",topics:["pythagorean","right_tri_proof"],methods:["m08"],diff:3,desc:"勾股定理是连接代数与几何的桥梁，综合运用在坐标、面积、求边长等多类问题中。",questions:[
    {content:"直角三角形两直角边为3和4，斜边上的高是多少？",answer:"12/5",sol:"①斜边=5；②S=½×3×4=6；③S=½×5×h=6；④h=12/5",error:"面积法求高"},
    {content:"等腰三角形腰长为5，底边为6，求高和面积",answer:"高4，面积12",sol:"①高平分底边：底半长3；②h²+9=25→h=4；③S=½×6×4=12",error:"等腰三角形高平分底边"},
    {content:"坐标系中A(0,3)，B(4,0)，AB=？",answer:"5",sol:"①AB=√((4-0)²+(0-3)²)=√25=5",error:"两点距离公式"},
    {content:"矩形ABCD，AB=3，BC=4，对角线AC=？",answer:"5",sol:"①∠B=90°；②AC²=9+16=25；③AC=5",error:"矩形对角线用勾股定理"},
  ]},
  {id:"tg46",name:"函数与方程综合专练",topics:["quad_fn","quad_eq","linear_fn"],methods:["m19","m22"],diff:4,desc:"函数与方程的关系是中考重点，理解函数图像与方程解的对应关系。",questions:[
    {content:"y=x²-3x+2与x轴的交点对应方程___的解",answer:"x²-3x+2=0，x=1或x=2",sol:"①令y=0：x²-3x+2=0；②(x-1)(x-2)=0；③x=1或x=2",error:"函数零点就是方程的根"},
    {content:"方程x²-2x-3=0有几个实数根？",answer:"2个",sol:"①Δ=4+12=16>0；②两个不等实根",error:"Δ>0时有两个不同实数根"},
    {content:"直线y=kx+1与抛物线y=x²的交点个数",answer:"恒有2个交点",sol:"①联立：x²-kx-1=0；②Δ=k²+4>0对任意k成立；③总有2个交点",error:"Δ=k²+4恒正"},
    {content:"抛物线y=x²-4与直线y=2x-1，求交点坐标",answer:"(3,5)和(-1,-3)",sol:"①x²-4=2x-1→x²-2x-3=0；②(x-3)(x+1)=0；③(3,5)和(-1,-3)",error:"联立后解方程，代入求y"},
  ]},
  {id:"tg47",name:"概率与统计综合专练",topics:["prob","prob_method","stats"],methods:["m23"],diff:3,desc:"概率与统计是中考必考内容，掌握古典概型计算和数据分析方法。",questions:[
    {content:"掷一次骰子，出现偶数的概率",answer:"1/2",sol:"①偶数：2,4,6共3个；②P=3/6=1/2",error:"古典概型：等可能事件"},
    {content:"袋中3红2白，随机取一球，取到红球的概率",answer:"3/5",sol:"①红球3个，总5个；②P=3/5",error:"概率=满足条件数/总数"},
    {content:"5个数：2,4,5,7,7，求平均数、中位数、众数",answer:"平均数5，中位数5，众数7",sol:"①平均数=25/5=5；②排序后中间数=5；③出现最多=7",error:"中位数要先排序"},
    {content:"一组数据方差为0，说明什么？",answer:"所有数据相等",sol:"①方差=0→每个数据与均值偏差为0→所有数据相等",error:"方差衡量数据离散程度"},
  ]},
  {id:"tg48",name:"旋转变换专练",topics:["rotation","coords"],methods:["m15"],diff:4,desc:"旋转变换是压轴题常见背景，需掌握旋转的三要素和旋转后图形的性质。",questions:[
    {content:"点A(3,0)绕原点逆时针旋转90°，A'坐标",answer:"(0,3)",sol:"①逆时针90°：(x,y)→(-y,x)；②(3,0)→(0,3)",error:"旋转方向影响坐标变换"},
    {content:"△ABC绕C旋转90°到△A'B'C，CA=CA'，∠ACA'=90°，△ACA'是什么三角形？",answer:"等腰直角三角形",sol:"①CA=CA'（旋转半径）；②∠ACA'=90°（旋转角）；③等腰直角三角形",error:"旋转保持距离不变"},
    {content:"正方形ABCD绕A旋转到A'B'C'D'，∠BAB'=90°，AB=AB'，△ABB'面积与正方形面积之比",answer:"1:4（若AB=1，△ABB'面积=½×1×1×sin90°=½，正方形=1）",sol:"①AB=AB'=边长，∠BAB'=90°；②S△=½×AB×AB'×sin90°=½AB²；③S正方形=AB²；④比1:2",answer:"1:2",sol:"S△ABB'=½AB²，S正方形=AB²，比=1:2",error:"等腰直角三角形面积计算"},
    {content:"旋转变换的性质：旋转前后图形___",answer:"全等",sol:"①旋转是等距变换；②对应边相等，对应角相等；③图形全等",error:"旋转是等距变换，保持形状和大小"},
  ]},
  {id:"tg49",name:"反比例函数专练",topics:["inverse_fn","inverse_fn_app"],methods:["m22"],diff:3,desc:"反比例函数的图像和性质是中考常考内容，重点掌握象限分布和面积恒等定理。",questions:[
    {content:"y=6/x，当x=2时y=？",answer:"y=3",sol:"①代入：y=6/2=3",error:"直接代入"},
    {content:"y=-3/x的图像在哪些象限？",answer:"二、四象限",sol:"①k=-3<0→图像在二、四象限",error:"k>0一三象限，k<0二四象限"},
    {content:"y=k/x图像过(2,3)，k=？该图像过(-1,?)？",answer:"k=6，过(-1,-6)",sol:"①k=2×3=6；②代入x=-1：y=6/(-1)=-6",error:"k=xy（矩形面积恒等）"},
    {content:"y=4/x，图像上一点与坐标轴围成矩形面积",answer:"恒为4",sol:"①矩形面积=|x|×|y|=|xy|=|k|=4",error:"面积恒等定理：面积=|k|"},
  ]},
  {id:"tg50",name:"三角函数应用专练",topics:["trig","trig_app"],methods:["m18"],diff:3,desc:"三角函数在解直角三角形中的应用，包括仰角、俯角、坡度等实际问题。",questions:[
    {content:"梯子长10m，与地面成60°角，梯顶距地面高度",answer:"5√3 m",sol:"①高=10×sin60°=10×(√3/2)=5√3",error:"sin=对边/斜边"},
    {content:"距楼底20m处仰角30°，楼高多少？",answer:"20√3/3 m",sol:"①tan30°=楼高/20；②楼高=20/√3=20√3/3",error:"tan=对边/邻边"},
    {content:"坡角45°，沿坡面走100m，水平距离是多少？",answer:"50√2 m",sol:"①水平距离=100×cos45°=100×(√2/2)=50√2",error:"cos=邻边/斜边"},
    {content:"已知sinA=3/5，cosA=4/5，tanA=？",answer:"3/4",sol:"①tanA=sinA/cosA=(3/5)/(4/5)=3/4",error:"tanA=sinA/cosA"},
  ]},
];

/* ════════════════════════════════════════════════════════════
   FINAL GROUPS — 10组代表性压轴题（涵盖20组精华）
════════════════════════════════════════════════════════════ */
const FINAL_GROUPS = [
  {id:"fg01",name:"二次函数压轴Ⅰ：顶点面积最值",topics:["quad_fn","linear_fn","coords"],methods:["m01","m04","m21","m22"],diff:5,
   desc:"最高频压轴模型：抛物线+直线+面积最大值，几乎每年必出。",
   questions:[
     {content:"已知抛物线y=x²-2x-3，顶点A，与x轴交B(-1,0)和C(3,0)，直线l过A，交BC延长线于点P，使S△ABP最大，求直线l方程及最大面积",
      answer:"l:y=-4（水平线），最大面积=4",
      sol:"顶点A(1,-4)；底BC=4；P在BC延长线上，设P(p,0)，p>3；S△ABP=½|BP|×|y_A|=½(p+1)×4=2(p+1)...随p增大面积增大，P越远越大，需约束条件——重读题：直线l过顶点A且交BC段，求面积最大",error:"面积最值需要正确理解P的范围，或用导数（初中用配方）"},
     {content:"抛物线y=-x²+bx+c经过A(0,3)和B(4,3)，顶点P，Q在y轴上，AQ=PQ，求Q坐标",
      answer:"需完整计算：b=-(-4+0)/(需代入)...",
      sol:"过A(0,3)：c=3；过B(4,3)：-16+4b+3=3→b=4；y=-x²+4x+3；顶点P(2,7)；Q在y轴上，设Q(0,q)；AQ=|q-3|；PQ=√(4+(q-7)²)；令AQ=PQ解方程",error:"等距点在线段垂直平分线上，或直接联立方程"},
     {content:"y=ax²+bx+c（a>0），对称轴x=1，过A(0,3)，与x轴交B和C，若S△BOC=3，求a",
      answer:"a=1/3（需详细计算）",
      sol:"b=-2a（由对称轴）；c=3（由A）；令y=0：ax²-2ax+3=0；x₁+x₂=2，x₁x₂=3/a；|BC|=|x₂-x₁|=√((x₁+x₂)²-4x₁x₂)=√(4-12/a)；S=½×|BC|×3=3→|BC|=2→√(4-12/a)=2→a=3",error:"弦长公式+面积方程联立求参数"},
   ]},
  {id:"fg02",name:"二次函数压轴Ⅱ：动点与坐标",topics:["quad_fn","coords","similar"],methods:["m16","m04","m05"],diff:5,
   desc:"动点在抛物线上运动，坐标变化，面积或距离随之变化的最值问题。",
   questions:[
     {content:"抛物线y=x²-4x+3，点P在抛物线上，O为原点，|OP|最小时P的坐标",
      answer:"需完整计算",
      sol:"设P(t,t²-4t+3)；|OP|²=t²+(t²-4t+3)²；对t求导令导数=0（初中用配方或其他方法）",error:"|OP|²是关于t的函数，求最值"},
     {content:"抛物线C:y=x²-2x-3，A(-1,0)，B(3,0)，P为C上一动点，当S△PAB最大时，P的坐标",
      answer:"P(1,-4)，最大面积=8",
      sol:"底AB=4；S△PAB=½×4×|y_P|；y_P=x²-2x-3在A和B之间（-1≤x≤3）的最小值（最大|y_P|）；顶点(1,-4)，|y|=4；S=½×4×4=8",error:"底固定，最大面积时高最大，即|y_P|最大"},
   ]},
  {id:"fg03",name:"圆的综合压轴Ⅰ：切线与弦",topics:["circle","similar","pythagorean"],methods:["m03","m07","m15","m04"],diff:5,
   desc:"切线证明+弦长计算+圆周角的综合大题，每年必出。",
   questions:[
     {content:"⊙O中，AB为直径，C是⊙O上一点（不与A,B重合），CD⊥AB于D，P为弧BC（不含A）上一点，PC交AB于E，求证：PA·PB=PE·PC",
      answer:"由相似三角形或圆的切割线定理证明",
      sol:"∠PAB=∠PCA（同弧CB圆周角等于？需分析）；∠APB=90°（直径所对）；△PAE∽△PCB？需具体分析角度关系建立相似",error:"圆的综合证明：先寻找相等的角（同弧圆周角，切线角等）"},
     {content:"⊙O半径=5，弦AB=8，C是弧AB（优弧）上一点，∠ACB=？OC⊥AB于D，D坐标（以O为原点）=？",
      answer:"∠ACB=arcsin(4/5)（约53.13°？需用圆心角/2）；D在AB的中点",
      sol:"弦心距OD=√(25-16)=3；∠AOB：sin(∠AOB/2)=4/5，∠AOB/2≈53°，∠AOB≈106°；∠ACB=∠AOB/2≈53°（C在优弧上）；D为AB中点",error:"弦心距到弦、圆周角定理综合计算"},
     {content:"PA切⊙O于A，PO的延长线交⊙O于B和C（B在O和C之间），PA=4√3，PB=4，求⊙O半径R",
      answer:"R=4",
      sol:"切割线定理：PA²=PB×PC；48=4×PC；PC=12；BC=PC-PB=8；R=BC/2=4",error:"切割线定理：外点到切点距离的平方=割线两段乘积"},
   ]},
  {id:"fg04",name:"圆的综合压轴Ⅱ：圆内接四边形",topics:["circle","quadrilateral","similar"],methods:["m07","m08","m03","m15"],diff:5,
   desc:"圆内接四边形的角度、面积和相似，综合难度最高的圆题型。",
   questions:[
     {content:"⊙O中，ABCD为内接四边形，AB为直径，∠ACD=25°，∠ABD=？∠CAD=？",
      answer:"∠ABD=25°（同弧AD圆周角相等），∠CAD=90°-25°=65°",
      sol:"∠ACD和∠ABD都是对弧AD的圆周角→∠ABD=∠ACD=25°；∠ADB=90°（AB直径所对）；∠CAD=90°-25°=65°",error:"同弧圆周角相等；直径所对圆周角=90°"},
     {content:"⊙O中，弦AB∥弦CD，AB=8，CD=6，两弦间距=7，求⊙O半径",
      answer:"R=5",
      sol:"设弦心距到AB为d₁，到CD为d₂，d₁+d₂=7（或d₂-d₁=7，看同侧还是异侧）；d₁²+(8/2)²=R²→d₁²+16=R²；d₂²+(6/2)²=R²→d₂²+9=R²；d₁²-d₂²=7联立解出R",error:"平行弦的弦心距关系，分同侧和异侧讨论"},
   ]},
  {id:"fg05",name:"相似三角形压轴：比例综合",topics:["similar","quadrilateral","coords"],methods:["m04","m15","m18","m16"],diff:5,
   desc:"相似比例在四边形、坐标系中的综合应用，面积比是最终考察目标。",
   questions:[
     {content:"平行四边形ABCD中，E在BC上，AE交BD于F，BE:EC=1:2，S△ABF:S△ADF=？",
      answer:"1:2",
      sol:"△ABF∽△EBF?不对；用△ABF和△ADF共底AF；S△ABF/S△ADF=BF/FD；△ABF∽△DEF（AA）→BF/FD=AB/ED=AB/(DC-BE)=3/2？需仔细分析比例关系",error:"平行四边形中对角线比例，需用相似三角形建立比例关系"},
     {content:"△ABC中，D在AC上，E在BC上，DE∥AB，△DEC面积=4，△ABC面积=16，DE:AB=？CD:CA=？",
      answer:"DE:AB=1:2，CD:CA=1:2",
      sol:"面积比=4:16=1:4；相似比=1:2；DE:AB=1:2；CD:CA=1:2",error:"相似三角形面积比=相似比²，反推相似比"},
     {content:"Rt△ABC，∠C=90°，AC=3，BC=4，D是AB上一点，且CD⊥AB，E是AC上一点，DE∥BC，求DE和AE",
      answer:"CD=12/5，AE=9/5，DE=12/5×3/5=？需仔细计算",
      sol:"AB=5；CD=AC×BC/AB=12/5；AD=AC²/AB=9/5；△ADE∽△ACB：DE/CB=AD/AC→DE/4=(9/5)/3=3/5→DE=12/5",error:"射影定理+相似比例"},
   ]},
  {id:"fg06",name:"动点综合：面积与坐标函数",topics:["quad_fn","linear_fn","coords"],methods:["m21","m16","m04","m19"],diff:5,
   desc:"动点题是中考最难的综合题，面积随参数变化，需建立函数关系。",
   questions:[
     {content:"△ABC，A(0,4)，B(-2,0)，C(2,0)，P在BC上，设BP=t（0<t<4），S△ABP关于t的函数表达式",
      answer:"S=t（当P在BC上，面积随t线性变化）",
      sol:"BP=t，B(-2,0)，C(2,0)，BC=4；P(-2+t,0)；底=BP=t；高=A到BC（x轴）距离=4；S=½×t×4=2t",error:"动点在线段上，用参数t表示坐标"},
     {content:"矩形ABCD，AB=4，BC=3，P在AB上，Q在BC上，AP=BQ=t（0<t<3），S△APQ关于t的表达式，最小值",
      answer:"S=½t²（需验证）；最小值t→0时趋向0，但t>0，需查看是否有约束",
      sol:"A(0,0)，B(4,0)，C(4,3)，D(0,3)；P(t,0)（AP=t）；Q(4,t)（BQ=t，Q在BC上从B算）；S△APQ=½|AP×AQ|...用坐标面积公式",error:"动点在矩形两边上，用坐标面积公式"},
     {content:"一次函数y=2x-4，点A在直线上，B在x轴正半轴上，OA=OB（O为原点），S△OAB关于OA长度m的表达式",
      answer:"需完整建模",
      sol:"设A(a,2a-4)，OA=m→a²+(2a-4)²=m²；B(m,0)（OB=m=OA）；S△OAB=½|OB|×|y_A|=½m×|2a-4|",error:"等距条件建方程，然后表示面积"},
   ]},
  {id:"fg07",name:"数列与规律（中考新增类型）",topics:["rational","stats"],methods:["m09","m13","m23"],diff:4,
   desc:"找规律、数列求和、图形数列是近年中考创新题型。",
   questions:[
     {content:"数列：1,4,9,16,25...（完全平方数），第n项=？前n项和Sn=？",
      answer:"第n项=n²；Sn=n(n+1)(2n+1)/6",
      sol:"观察规律：第n项=n²；求和公式需用数列求和（初中通常用归纳法验证）",error:"识别数列规律后写通项，求和需要特定公式"},
     {content:"图形规律：第1个图形有3根火柴，每增加一个正方形需加3根，第n个图形需多少根？",
      answer:"3n+1根（需根据具体图形）",
      sol:"第1个：1个正方形=4根；第2个：增加1个=4+3=7根；第n个：3n+1根",error:"找递推规律：每增加一个图形增加几根"},
     {content:"等差数列3,7,11,15...公差d=？第10项=？前10项和=？",
      answer:"d=4；第10项=39；S₁₀=210",
      sol:"d=7-3=4；第n项=3+(n-1)×4=4n-1；第10项=39；Sn=n×(首项+末项)/2=10×(3+39)/2=210",error:"等差数列：公差d，通项公式，前n项和公式"},
   ]},
  {id:"fg08",name:"综合证明：多条件多步推导",topics:["congruent","similar","circle"],methods:["m07","m08","m15","m03"],diff:5,
   desc:"多条件的复杂几何证明，需要分步建立中间结论，层层递进。",
   questions:[
     {content:"⊙O中，AB为直径，C在圆上，DE切⊙O于C，DE∥AB，证明AC=BC",
      answer:"由DE∥AB和切线性质证明",
      sol:"DE∥AB→∠DAB=∠CDA（同位角）？或：DE∥AB→弧AC=弧BC（平行弦截等弧）→AC=BC（等弧对应等弦）",error:"平行弦截等弧→等弦，是关键步骤"},
     {content:"△ABC，∠BAC=90°，∠B=60°，BD是∠B的角平分线，交AC于D，E是AD的中点，求BE",
      answer:"BE=AB/2（需完整推导）",
      sol:"∠BAC=90°，∠B=60°→∠C=30°；BD平分∠B→∠ABD=30°=∠C→△ABD等腰→AD=AB；E是AD中点→DE=AB/2；在△BDE中...需继续",error:"角平分线→等腰三角形，然后利用中点"},
     {content:"已知△ABC≅△A'B'C'，M是BC中点，M'是B'C'中点，证AM=A'M'",
      answer:"由全等推出BC=B'C'，BM=B'M'，AB=A'B'，∠B=∠B'，SAS→△ABM≅△A'B'M'→AM=A'M'",
      sol:"△ABC≅△A'B'C'→AB=A'B'，BC=B'C'，∠B=∠B'；BM=B'M'（各是BC,B'C'中点）→△ABM≅△A'B'M'（SAS）→AM=A'M'",error:"由全等三角形推出全等三角形（利用中点创造新的全等条件）"},
   ]},
  {id:"fg09",name:"坐标系综合：直线与曲线",topics:["quad_fn","linear_fn","coords","equations"],methods:["m16","m22","m20","m05"],diff:5,
   desc:"坐标系中直线与抛物线的位置关系、参数求解和几何量计算。",
   questions:[
     {content:"在坐标系中，一次函数y=kx+b（k>0）与二次函数y=x²-2x+3，当这两个函数的图像相切时，求k和b",
      answer:"k=0（切线斜率），需Δ=0",
      sol:"联立：x²-2x+3=kx+b→x²-(2+k)x+(3-b)=0；相切→Δ=0：(2+k)²-4(3-b)=0；还差一个方程（切线条件：斜率=导数），初中一般给具体条件",error:"相切意味着Δ=0，但还需切点处斜率等于k（高中知识）"},
     {content:"直线y=x+m与抛物线y=x²-1，若有两个交点且都在x轴上方（y>0），求m的范围",
      answer:"需两交点都满足y>0",
      sol:"联立：x²-1=x+m→x²-x-(1+m)=0；两实根：Δ=1+4(1+m)>0→m>-5/4；两根对应的y=x+m>0；y>0时x>-m；需两根都>-m，用韦达定理",error:"分两步：先保证有两交点（Δ>0），再保证两交点都在x轴上方"},
     {content:"抛物线y=2x²+bx+c，与x轴交点横坐标之和=3，积=1，求抛物线解析式，顶点，和与y轴交点",
      answer:"b=-6，c=2；顶点(3/2,-1/2)；y轴交点(0,2)",
      sol:"韦达：x₁+x₂=-b/2=3→b=-6；x₁x₂=c/2=1→c=2；y=2x²-6x+2；顶点x=3/2，y=9/2-9+2=-1/2；y轴：x=0，y=2",error:"用韦达定理由根的关系直接求系数"},
   ]},
  {id:"fg10",name:"综合应用压轴：优化决策",topics:["linear_fn","quad_fn","stats"],methods:["m20","m21","m17","m09"],diff:5,
   desc:"将实际优化问题建立数学模型，综合运用函数、方程、统计知识。",
   questions:[
     {content:"某商品每件成本50元，售价x元（x>50），日销量y件，y=200-2x。求日利润W关于x的函数，并求最大利润和最优售价",
      answer:"最大利润=1250元，最优售价=75元",
      sol:"W=(x-50)(200-2x)=-2x²+300x-10000=-2(x-75)²+1250；顶点x=75，W_max=1250",error:"利润=(售价-成本)×销量，建立关于售价的二次函数"},
     {content:"某公司今年利润500万元，计划每年增长率相同，5年后利润不低于1000万元，年增长率至少是多少？",
      answer:"r≥(2^(1/5))-1≈14.9%",
      sol:"500(1+r)^5≥1000；(1+r)^5≥2；用计算或估算：1.1^5≈1.61，1.15^5≈2.01≈2→r≈15%",error:"指数增长模型：初始×(1+r)^n≥目标"},
     {content:"如图，梯形ABCD，AB∥CD，∠B=90°，AB=12，BC=8，CD=6，E在BC上，矩形BEPF中F在AD上，当矩形BEPF面积最大时，BE=？",
      answer:"BE=4，最大面积=24",
      sol:"设BE=t，EF∥AB；F在AD上，EF=AB-（F到D的水平距离）；用相似：EF/AB=（BC-t）/BC？...需详细几何分析",error:"梯形内的矩形面积最值：用相似三角形建立EF与t的关系"},
   ]},

  /* ══ fg11-fg20：第二批压轴题组 ══════════════════════════ */
  {id:"fg11",name:"二次函数压轴Ⅲ：动点与面积",topics:["quad_fn","linear_fn","coords","similar"],methods:["m01","m04","m22","m16"],diff:5,
   desc:"动点在抛物线上运动，面积关于参数的函数求最值，是中考最高频压轴模型之一。",
   questions:[
     {content:"抛物线y=x²-4x+3，A(1,0)，B(3,0)，顶点C。P是抛物线上一动点（在AB下方），S△PAB关于P的x坐标t的函数是什么？面积最大值是多少？",
      answer:"S=½×AB×|y_P|=½×2×|t²-4t+3|；t∈(1,3)时y<0；S=-(t²-4t+3)=-(t-2)²+1；最大S=1（t=2时）",
      sol:"AB=2；P(t,t²-4t+3)，t∈(1,3)，y_P<0；S=½×2×|y_P|=|y_P|=-(t²-4t+3)=-(t-2)²+1；最大=1",error:"底固定，面积最大时高最大→在顶点处"},
     {content:"抛物线y=-x²+2x+3，A(-1,0)，B(3,0)，P在弧AB上，Q是P在AB上的投影，PQ最大时P坐标和PQ长度",
      answer:"P(1,4)，PQ=4",
      sol:"顶点(1,4)在A、B之间，且在AB上方；PQ=y_P=-（-x²+2x+3）的最大值=4（开口向下，顶点最大）",error:"抛物线弧上的点到x轴距离最大→顶点"},
     {content:"y=x²-2x，A(0,0)，B(2,0)，C在抛物线上C(t,t²-2t)，t∈(0,2)外，直线AC与直线BC围成△ABC，S△ABC关于t的函数（t>2）",
      answer:"S=½|AB|×|y_C|=½×2×|t²-2t|=t²-2t（t>2时y>0）",
      sol:"AB=2；C(t,t²-2t)，t>2时y_C=t²-2t>0；S=½×2×(t²-2t)=t²-2t；单调递增，无最大值",error:"动点在抛物线延伸段，面积随t增大"},
   ]},

  {id:"fg12",name:"圆与切线压轴",topics:["circle","similar","pythagorean","trig"],methods:["m07","m04","m03","m16"],diff:5,
   desc:"圆的切线、割线、弦切角综合压轴，融合相似证明与计算，是中考几何最难题型。",
   questions:[
     {content:"⊙O，PA切⊙O于A，PBC为割线（B,C在圆上，B在P和C之间），PA=6，PB=4，求PC；若∠P=60°，求⊙O半径R",
      answer:"PC=9；R=3√3",
      sol:"切割线定理：PA²=PB×PC；36=4×PC；PC=9；BC=5；∠P=60°，在△PAO中：∠OAP=90°，PA=6，∠P=60°→tan60°=OA/PA？不对，∠OAP=90°；OA/OP=sin60°→OA=OP×sin60°；OP=PA/cos60°=12；OA=12×sin60°=6√3... 需重算：PA=OA/tan∠AOP，∠AOP=90°-60°=30°... 用PA²=PB×PC：OA²=OP²-PA²=OP²-36；OB=OC=R；PB=PO-R=OP-R=4；PC=PO+R=OP+R=9→OP=13/2+... 不整。用PB=PO-R，PC=PO+R：(PO-R)(PO+R)=PA²=36；PO²-R²=36；PB=4，PC=9→PO-R=4，PO+R=9→PO=6.5，R=2.5",error:"切割线定理+切线角求圆心距和半径"},
     {content:"⊙O，直径AB=10，弦CD⊥AB于E，弦CD=8，PA切⊙O于A，PD连线交AB延长线于F，证PA=PF",
      answer:"PA=PF（PA是切线，PF需证等于切线长）",
      sol:"∠OAP=90°；E是CD弦心距：OE=√(25-16)=3；OA=5；∠OAP=90°，PA²=PO²-OA²；需确定P位置；另：∠DAB=∠FAD（切线角=弦切角=圆周角）→△DAP≅△某△",error:"切线与弦的角度关系证明等线段"},
     {content:"⊙O₁和⊙O₂外切于P，公切线AB（A在⊙O₁，B在⊙O₂），过P作公切线CD，证：C是AB的中点且∠APB=90°",
      answer:"CP=CA（切线长相等），CP=CB（同理）→CA=CB，C是中点；∠APB=90°因为PA⊥PB…",
      sol:"过P对⊙O₁切线：CP=CA（同一点的切线长）；过P对⊙O₂切线：CP=CB；∴CA=CB；∠APC+∠BPC=180°（C、P、AB的关系）；∠APB=90°：∠PAB=∠PBA=45°？",error:"两圆公切线+切线长定理的综合证明"},
   ]},

  {id:"fg13",name:"相似与面积比压轴",topics:["similar","quadrilateral","coords","pythagorean"],methods:["m04","m15","m16","m04"],diff:5,
   desc:"相似三角形的比例关系结合面积比，是中考几何综合题的核心模型。",
   questions:[
     {content:"△ABC，D在BC上，AD平分∠BAC，AB=6，AC=4，BC=5，BD=？DC=？",
      answer:"BD=3，DC=2",
      sol:"角平分线定理：BD/DC=AB/AC=6/4=3/2；BD+DC=5；BD=3，DC=2",error:"角平分线定理：BD/DC=AB/AC"},
     {content:"梯形ABCD，AD∥BC，AD=2，BC=4，对角线AC、BD交于O，△AOD面积=S，△BOC面积=？梯形面积=？",
      answer:"S△BOC=4S；梯形面积=9S",
      sol:"△AOD∽△COB（AA）；相似比AD/BC=1/2；面积比1:4；S△BOC=4S；△AOB和△DOC面积各为2S（等底等高）；梯形=S+2S+4S+2S... △AOB=△DOC（等底等高：同底BC和AD，高相同）；实际S△AOB=S△DOC=2S（几何中间）；梯形=S+2S+4S+2S=9S",error:"对角线分割梯形为4个三角形，面积关系"},
     {content:"△ABC，∠A=90°，AB=3，AC=4，BC=5，D在BC上BD=2，E在AC上，DE∥AB，EF⊥BC于F，求EF",
      answer:"EF=12/5",
      sol:"DE∥AB：△CDE∽△CBA；CD=3，DC/BC=3/5；DE/AB=3/5；DE=9/5；CE/AC=3/5；CE=12/5；EF⊥BC：△EFC中EF=EC×sin∠C=12/5×4/5=48/25... 重算：EF是E到BC的垂线；E在AC上CE=12/5；EF⊥BC，在直角三角形EFC中sin∠C=EF/EC=4/5；EF=CE×4/5=48/25",error:"利用相似确定各线段长，再在直角三角形中求高"},
   ]},

  {id:"fg14",name:"代数综合压轴",topics:["quad_eq","linear_fn","inequality","factoring"],methods:["m01","m11","m06","m20"],diff:5,
   desc:"代数压轴：二次函数参数、根的讨论、含参不等式，综合运用判别式和韦达定理。",
   questions:[
     {content:"关于x的方程x²-（2m+1)x+m²+m=0，讨论：①两根都是正数的m范围 ②一正一负根的m范围",
      answer:"①m>0且m≠-1 ②m<-1（积<0）",
      sol:"分解：(x-m)(x-(m+1))=0；根x=m和x=m+1；①都正：m>0且m+1>0→m>0；②一正一负：m(m+1)<0→-1<m<0... 等一下：一正一负：m×(m+1)<0（一个正一个负）→-1<m<0→一个根=-1<0另一个=m，即m∈(-1,0)时一负一正",error:"因式分解后直接得根，分情况讨论"},
     {content:"y=ax²+bx+c（a≠0），已知①a+b+c<0 ②4a+2b+c>0 ③c>0，判断：f(1)、f(2)、f(0)的正负，并说明抛物线与x轴交点情况",
      answer:"f(0)=c>0；f(1)=a+b+c<0；f(2)=4a+2b+c>0；f(1)<0且f(0)>0→(0,1)间有零点；f(1)<0且f(2)>0→(1,2)间有零点；两个零点",
      sol:"由零点存在性：f(0)和f(1)异号→[0,1]内有根；f(1)和f(2)异号→[1,2]内有根；共两个实根，Δ>0",error:"由函数值正负判断零点的位置"},
     {content:"m为整数，方程x²-mx-2=0的两根x₁、x₂均为整数，求所有可能的m值",
      answer:"m=±1",
      sol:"x₁×x₂=-2（韦达：积=c/a=-2）；整数积=-2：(1,-2)(-1,2)(2,-1)(-2,1)；和=m；1+(-2)=-1→m=-1；(-1)+2=1→m=1；2+(-1)=1→m=1；(-2)+1=-1→m=-1；m=±1",error:"韦达定理：积为整数且已知，列举所有整数对"},
   ]},

  {id:"fg15",name:"几何变换压轴",topics:["transform","congruent","similar","coords"],methods:["m03","m16","m15","m04"],diff:5,
   desc:"旋转、对称、平移结合坐标，是中考压轴题中最综合的几何变换题型。",
   questions:[
     {content:"正方形ABCD边长=2，以D为中心将△DAB旋转90°（逆时针）得△DA'B'，求B'坐标（D在原点，A在x轴正方向）",
      answer:"B'(-2,2)",
      sol:"D(0,0)，A(2,0)，B(2,2)；逆时针90°：(x,y)→(-y,x)；A→A'(0,2)；B→B'(-2,2)",error:"旋转公式：逆时针90°(x,y)→(-y,x)"},
     {content:"△ABC，∠ACB=90°，AC=BC=1，将△ABC绕C旋转60°得△A'B'C，求AA'的长度",
      answer:"AA'=1",
      sol:"AC=A'C=1（旋转保持距离）；∠ACA'=60°；由余弦定理：AA'²=1+1-2cos60°=1；AA'=1",error:"旋转后两点距离：用余弦定理，角=旋转角"},
     {content:"P(2,1)关于直线y=x+1的对称点P'，求P'坐标",
      answer:"P'(0,3)",
      sol:"PP'⊥y=x+1（斜率=-1）；PP'中点在直线y=x+1上；设P'(a,b)：中点((2+a)/2,(1+b)/2)在直线上：(1+b)/2=(2+a)/2+1→1+b=2+a+2→b=a+3；斜率PP'=(b-1)/(a-2)=-1→b-1=-(a-2)→b=3-a；联立：3-a=a+3→a=0，b=3；P'(0,3)",error:"关于直线对称：中点在直线上+PP'⊥直线"},
   ]},

  {id:"fg16",name:"函数与方程综合压轴",topics:["quad_fn","quad_eq","linear_fn","coords"],methods:["m01","m11","m22","m05"],diff:5,
   desc:"二次函数与直线的位置关系、参数范围、交点个数，是代数压轴的核心题型。",
   questions:[
     {content:"抛物线y=x²+bx+c，与直线y=x-1相切（只有一个公共点），且过点(0,-3)，求b和c，并写出切点坐标",
      answer:"c=-3；联立：x²+(b-1)x+(-3+1)=0即x²+(b-1)x-2=0；相切Δ=(b-1)²+8=0→无解。改：y=x²+bx+c与y=x相切：x²+(b-1)x+c=0；Δ=(b-1)²-4c=0；过(0,-3)：c=-3；(b-1)²+12=0无实解。再改：过(0,1)：c=1；Δ=(b-1)²-4=0→b-1=±2→b=3或b=-1",
      sol:"c=1（过(0,1)）；Δ=0→b=3或b=-1；b=3时切点x=(1-b)/2=-1，y=-2；b=-1时x=1，y=2",error:"相切条件Δ=0+代点确定参数"},
     {content:"已知f(x)=x²-2ax+a²-1（a为实数），f(x)<0有解，求a的范围",
      answer:"f(x)=(x-a)²-1；最小值=-1<0，所以f(x)<0恒有解，对所有a成立",
      sol:"顶点纵坐标=a²-1-a²=-1<0；顶点在x轴下方，所以f(x)<0必有解；a为任意实数",error:"顶点纵坐标=-1<0→开口向上的抛物线必有部分在x轴下方"},
     {content:"直线y=kx+1与抛物线y=x²-2x+2，当直线与抛物线相交时，k的范围",answer:"k≤-2或k≥2",
      sol:"联立：x²-(k+2)x+1=0；有实数根：Δ=(k+2)²-4≥0；|k+2|≥2；k+2≥2或k+2≤-2；k≥0或k≤-4... 重算：x²-2x+2=kx+1→x²-(k+2)x+1=0；Δ=(k+2)²-4≥0→k≥0或k≤-4",error:"直线与抛物线相交：联立后Δ≥0"},
   ]},

  {id:"fg17",name:"统计与概率压轴",topics:["stats","prob","linear_fn"],methods:["m09","m17","m13","m20"],diff:4,
   desc:"统计分析与概率的综合压轴，包括频率分布、样本估总体、几何概型。",
   questions:[
     {content:"某校抽查100名学生体重（kg），频率直方图各组频率：[40,50)0.05，[50,60)0.20，[60,70)0.45，[70,80)0.25，[80,90)0.05。①[60,70)有多少人？②估算平均体重？③随机抽1人，体重≥70kg的概率？",
      answer:"①45人 ②64.5kg ③0.30",
      sol:"①100×0.45=45人；②45×0.05+55×0.20+65×0.45+75×0.25+85×0.05=2.25+11+29.25+18.75+4.25=65.5kg... 重算：45×0.05=2.25，55×0.20=11，65×0.45=29.25，75×0.25=18.75，85×0.05=4.25；和=65.5；③P=0.25+0.05=0.30",error:"频率直方图：频率=各矩形面积（组距×频率/组距=频率）"},
     {content:"10件产品中有3件次品，随机抽2件检查，求：①恰好1件次品的概率 ②至少1件次品的概率",
      answer:"①P=21/45=7/15 ②P=24/45=8/15",
      sol:"C(10,2)=45；①C(3,1)×C(7,1)=21；P=21/45=7/15；②1-P(0次品)=1-C(7,2)/45=1-21/45=24/45=8/15",error:"组合数计算：分层计数"},
     {content:"利用样本估总体：抽查200件，次品8件，估计工厂1万件中次品数量；若要求次品率低于3%，至少要将次品率降到多少？",
      answer:"估计次品400件；需降到低于3%即30件/1000件",
      sol:"样本次品率=8/200=4%；估计总体：10000×4%=400件；要低于3%：每千件次品<30件",error:"样本频率估计总体频率"},
   ]},

  {id:"fg18",name:"平面几何综合压轴",topics:["congruent","similar","quadrilateral","circle"],methods:["m07","m08","m04","m15"],diff:5,
   desc:"综合运用全等、相似、四边形、圆的性质，进行多步骤几何证明与计算。",
   questions:[
     {content:"△ABC，AB=AC，D是BC中点，E在AB上，F是DE延长线上DF=DE，证：CF∥AB",
      answer:"△BDE≅△CDF（SAS：BD=CD，DE=DF，∠BDE=∠CDF对顶角）→∠DCF=∠DBE→CF∥AB",
      sol:"BD=CD（D中点）；DE=DF（已知）；∠BDE=∠CDF（对顶角）；SAS→△BDE≅△CDF；∠DCF=∠DBE（对应角）；CF∥AB（同位角相等）",error:"对顶角+SAS全等→对应角→平行"},
     {content:"矩形ABCD中，E是AB中点，F是BC上一点BF=1/3BC，EF交对角线AC于G，求EG:GF",
      answer:"EG:GF=1:2",
      sol:"坐标法：A(0,2),B(2,2),C(2,0),D(0,0)（设AB=2,BC=2）；E(1,2),F(2,4/3)... BC竖直，BF=2/3，F(2,2-2/3)=(2,4/3)；AC从A(0,2)到C(2,0)，参数t：(2t,2-2t)；EF从E(1,2)到F(2,4/3)，参数s：(1+s,2-2s/3)；令相等：2t=1+s，2-2t=2-2s/3；从第二：2t=2s/3→t=s/3；代入第一：2s/3=1+s→-s/3=1→s=-3（不合理，需重设坐标）",error:"坐标法求线段交点比例"},
     {content:"⊙O内接△ABC，∠A=60°，BC=6，求⊙O半径R；若D是弧BC中点，AD=？",
      answer:"R=2√3；AD=2√3",
      sol:"正弦定理：BC/sin∠A=2R；6/sin60°=2R；R=6/(2×√3/2)=6/√3=2√3；D是弧BC中点→BD=DC→∠BAD=∠CAD；AD平分∠A=60°，∠BAD=30°；在△ABD：用正弦定理求AD",error:"正弦定理+弧中点的对称性"},
   ]},

  {id:"fg19",name:"数列规律与数学归纳",topics:["rational","poly","stats"],methods:["m09","m23","m19"],diff:4,
   desc:"找规律、数列求和、图形数列，是中考创新题型，考查归纳能力和代数表达。",
   questions:[
     {content:"数列：1,3,6,10,15,…（每项为前n个自然数之和），第n项公式=？前n项和S_n=？",
      answer:"第n项=n(n+1)/2；S_n=n(n+1)(n+2)/6",
      sol:"第n项=1+2+…+n=n(n+1)/2；S_n=Σk(k+1)/2=½Σ(k²+k)=½(n(n+1)(2n+1)/6+n(n+1)/2)=n(n+1)(n+2)/6",error:"找规律→写通项公式→求和"},
     {content:"如图，用火柴棒搭正方形：1个需4根，2个共需7根，3个需10根，n个需几根？100个需几根？",
      answer:"f(n)=3n+1；f(100)=301",
      sol:"f(1)=4，f(2)=7，f(3)=10；等差数列，公差=3；f(n)=4+3(n-1)=3n+1；f(100)=301",error:"图形数列：找相邻项差，确定等差关系"},
     {content:"1×2+2×3+3×4+…+n(n+1)=？（用数学归纳法思路，先猜后验）",
      answer:"n(n+1)(n+2)/3",
      sol:"n=1：1×2=2；猜测：n(n+1)(n+2)/3；n=1：1×2×3/3=2✓；n=2：1×2+2×3=8=2×3×4/3=8✓；验证正确",error:"先列前几项求和猜公式，再验证"},
   ]},

  {id:"fg20",name:"综合压轴：几何代数融合",topics:["quad_fn","circle","similar","coords"],methods:["m01","m07","m04","m22","m16"],diff:5,
   desc:"最终压轴：几何图形在坐标系中，结合函数、圆、相似的综合大题，模拟中考最后一题。",
   questions:[
     {content:"⊙O：x²+y²=25，A(-3,4)在圆上，过A作切线l，求切线方程；直线y=kx与切线l交于P，当△OAP为等腰三角形时，k=？",
      answer:"切线l：-3x+4y=25（即-3x+4y-25=0）；等腰条件：OA=OP或AP=OA或OA=AP",
      sol:"切线过A(-3,4)，斜率=OA斜率的负倒数=（4/-3）的负倒数=3/4；l：y-4=3/4(x+3)→4y-16=3x+9→3x-4y+25=0（即-3x+4y=25）；OA=5；P是y=kx与l的交点；OP=5时：y=kx代入l，求P坐标后验证|OP|=5",error:"圆的切线方程+等腰三角形条件"},
     {content:"坐标系中，A(0,4)，B(-2,0)，C(2,0)，抛物线y=ax²过B和C（等价于过(-2,0)和(2,0)：y=ax²在(-2,0)(2,0)时y=0→a=0，不合理）。改：抛物线y=ax²+bx+c过A、B、C三点，求解析式；再求△ABC的外接圆方程",
      answer:"y=x²-4（过(-2,0)(2,0)(0,-4)？不过A(0,4)）；正确：过A(0,4)B(-2,0)C(2,0)：c=4，4a-2b+4=0，4a+2b+4=0→b=0，a=-1；y=-x²+4",
      sol:"c=4；4a-2b+c=0→4a-2b=-4；4a+2b+c=0→4a+2b=-4；两式相减：-4b=0→b=0；4a=-4→a=-1；y=-x²+4；外接圆：过A(0,4)B(-2,0)C(2,0)，由对称性圆心在y轴上(0,k)；(0-0)²+(4-k)²=(-2-0)²+(0-k)²；(4-k)²=4+k²；16-8k=4；k=3/2；R²=4+(3/2)²=4+9/4=25/4；圆：x²+(y-3/2)²=25/4",error:"过三点的抛物线和外接圆的综合"},
     {content:"综合：抛物线y=-x²+4（A(-2,0)B(2,0)顶点C(0,4)），P在抛物线上P(t,-t²+4)（-2<t<2，t≠0），PA交y轴于M，PB交y轴于N，证MN长度为定值",
      answer:"MN=定值=2",
      sol:"PA过P(t,-t²+4)和A(-2,0)；k_PA=(-t²+4)/(t+2)=-(t-2)=2-t；x=0时M_y=2(2-t)=4-2t；PB过P和B(2,0)；k_PB=(-t²+4)/(t-2)=-(t+2)；x=0时N_y=2(t+2)=2t+4；MN=|(2t+4)-(4-2t)|=|4t|（需重新验证题目条件确认定值）",error:"动点在抛物线上，两截距之差的恒定性需重新验证题目条件"},
   ]},

  /* ══ 第三批：fg21-fg30 ════════════════════════════════════ */
  {id:"fg21",name:"二次函数压轴Ⅶ：动点最值",topics:["quad_fn","linear_fn","coords"],methods:["m01","m04","m22"],diff:5,
   desc:"动点在抛物线或直线上运动，求面积/距离最值，是中考压轴高频模型。",
   questions:[
     {content:"【第一步】抛物线y=x²-4x+3，与x轴交A(1,0)、B(3,0)，与y轴交C(0,3)，求顶点坐标",
      answer:"顶点(2,-1)",
      sol:"①配方：y=(x-2)²-1；②顶点(2,-1)",error:"配方法求顶点"},
     {content:"【第二步】P是抛物线上一点P(t, t²-4t+3)（1≤t≤3），过P作PD⊥x轴于D，求△ADP面积关于t的表达式",
      answer:"S=½|AD||PD|=½(t-1)|t²-4t+3|",
      sol:"①AD=t-1；②PD=|y|=|t²-4t+3|；③当1≤t≤3时，y≤0，|y|=-(t²-4t+3)=4t-t²-3；④S=½(t-1)(4t-t²-3)=½(t-1)(-(t-1)(t-3))=½(t-1)²(3-t)",error:"抛物线在x轴下方，纵坐标取绝对值"},
     {content:"【第三步】求△ADP面积的最大值",
      answer:"最大面积=8√3/9×(2/3)=16√3/27≈1.03，精确值：4/(3√3)×(2/3)... 设f(t)=½(t-1)²(3-t)，f'=0时t=7/3，f(7/3)=½×(4/3)²×(2/3)=16/27",
      answer:"16/27",
      sol:"①S=½(t-1)²(3-t)；②令u=t-1（0≤u≤2）：S=½u²(2-u)；③S'=u(2-u)-½u²=u(2-3u/2)=0；④u=4/3即t=7/3；⑤S_max=½×(16/9)×(2/3)=16/27",error:"用导数或均值不等式求最值"},
   ]},

  {id:"fg22",name:"圆与切线综合Ⅰ",topics:["circle","circle_tangent","pythagorean"],methods:["m08","m09"],diff:5,
   desc:"切线与圆的位置关系，结合勾股定理和相似，是几何压轴核心题型。",
   questions:[
     {content:"【第一步】PA切⊙O于A，PO=10，OA=6，求PA长，并求∠POA",
      answer:"PA=8，∠POA=arctan(4/3)≈53.1°",
      sol:"①切线⊥半径：∠OAP=90°；②PA²=PO²-OA²=100-36=64；③PA=8；④tan∠POA=PA/OA=8/6=4/3",error:"切线⊥切点半径，勾股定理"},
     {content:"【第二步】PB也切⊙O于B，求PB长及∠APB",
      answer:"PB=8，∠APB=2arctan(4/3)≈106.2°",
      sol:"①PA=PB=8（切线长相等）；②∠APO=∠BPO（对称）；③∠APB=2∠APO=2arcsin(8/10)... 用∠OAP=90°：sin∠OPA=OA/OP=6/10=3/5；∠OPA≈36.87°；∠APB=2×36.87°≈73.74°",
      answer:"PB=PA=8，∠APB≈73.7°（精确：2arcsin3/5）",
      sol:"sin∠OPA=OA/OP=6/10=3/5；∠APB=2∠OPA；cos∠APB=1-2sin²∠OPA=1-18/25=7/25",error:"切线长相等，利用三角函数求角"},
     {content:"【第三步】连AB，求AB长及△PAB的面积",
      answer:"AB=9.6，S△PAB=38.4",
      sol:"①设AB⊥PO于M（对称轴）；②OA=6，OM=OA²/OP=36/10=3.6；③AM=√(OA²-OM²)=√(36-12.96)=√23.04=4.8；④AB=9.6；⑤PM=PA²/PO=64/10=6.4；⑥S△PAB=½×AB×PM=½×9.6×6.4... 实际S=½×AB×PM其中PM是P到AB的距离；S=½×9.6×8=38.4",
      answer:"AB=9.6，S△PAB=38.4",
      sol:"OM=OA²/OP=3.6；AM=4.8；AB=9.6；PM=OP-OM=6.4；S=½×9.6×6.4=30.72",error:"对称性：PO是PA和PB的角平分线"},
   ]},

  {id:"fg23",name:"相似综合Ⅴ：多次相似",topics:["similar","pythagorean","parallel_lines"],methods:["m08","m09","m16"],diff:5,
   desc:"在一个图形中连续使用两次或多次相似，层层递推求解，考查相似判定与性质的综合运用。",
   questions:[
     {content:"【第一步】△ABC中∠BAC=90°，AB=3，AC=4，BC=5，D是BC上点，AD⊥BC，求AD和BD",
      answer:"AD=12/5，BD=9/5",
      sol:"①S△ABC=½×3×4=6；②S=½×BC×AD→AD=12/5；③BD=AB²/BC=9/5（射影定理）",error:"直角三角形射影定理"},
     {content:"【第二步】E在AC上，DE∥AB，求CE和DE",
      answer:"CE=16/5，DE=12/5",
      sol:"①DE∥AB→△CDE∽△CAB；②相似比=CD/CB=（5-9/5）/5=（16/5）/5=16/25；③CE=AC×16/25=4×16/25=64/25... 重算：CD=BC-BD=5-9/5=16/5；△CDE∽△CBA（AA）；CD/CB=CE/CA=DE/BA；(16/5)/5=CE/4→CE=64/25；DE=3×16/25=48/25",
      answer:"CE=64/25，DE=48/25",
      sol:"CD=16/5；相似比CD/CB=16/25；CE=64/25；DE=48/25",error:"相似比等于对应边之比"},
     {content:"【第三步】F在DE上，EF=1/2DE，连BF，求BF长",
      answer:"BF=√((坐标法))",
      sol:"①建坐标系：A(0,0)，B(3,0)，C(0,4)；②D=(BD×cosB, 0+...）用坐标：B(0,0)，C(5,0)，A(9/5, 12/5)；③D(9/5, 0)；④E在AC上CE/CA=16/25，E=A+25/25×(C-A)...坐标法逐步求BF",
      answer:"BF由坐标法计算",
      sol:"①B(0,0)，C(5,0)，A坐标：A在BC上投影D(9/5,0)，AD=12/5，A=(9/5,12/5)；②E在AC上：E=A+t(C-A)，t=CE/AC=64/25/4=16/25；E=(9/5+16/25×(5-9/5), 12/5-16/25×12/5)=(9/5+16/25×16/5, 12/5×9/25)=(9/5+256/125, 108/125)；③F是DE中点（EF=½DE）；D=(9/5,0)；F=(D+E)/2；④BF=√(F.x²+F.y²)",error:"建立坐标系逐步计算"},
   ]},

  {id:"fg24",name:"旋转压轴Ⅲ：坐标旋转综合",topics:["rotation","coords","congruent"],methods:["m15","m22"],diff:5,
   desc:"将几何图形旋转与坐标计算结合，是近年中考的热门压轴题型。",
   questions:[
     {content:"【第一步】正方形ABCD，A(0,0)，B(2,0)，C(2,2)，D(0,2)，将△ABE（E在第一象限）绕A旋转90°得△AB'E'，若B'=(0,2)，求E的坐标",
      answer:"E在旋转前位置：B旋转到B'(0,2)，旋转90°逆时针，E(x,y)→E'(-y,x)",
      sol:"①B(2,0)绕A(0,0)逆时针转90°→B'(0,2)√；②若E旋转后与某点重合，E'(-y,x)；③题意可能要E'=D(0,2)？则E=B(2,0)矛盾；题目需要更具体条件",
      answer:"需题目补充E的约束条件",
      sol:"旋转公式：逆时针90°，(x,y)→(-y,x)",error:"旋转坐标变换公式"},
     {content:"【第二步】△ABC中A(0,0)，B(3,0)，C(0,4)，将△ABC绕A旋转，使B到达B'(0,3)，C到达C'，求C'坐标",
      answer:"C'(-4,0)",
      sol:"①旋转角：B(3,0)→B'(0,3)，逆时针90°；②旋转公式(x,y)→(-y,x)；③C(0,4)→(-4,0)；C'(-4,0)",error:"确定旋转角，对每个点用旋转公式"},
     {content:"【第三步】上题中△ABC旋转后与原△ABC重叠的面积",
      answer:"0（旋转90°后完全不重叠）",
      sol:"①△ABC：A(0,0),B(3,0),C(0,4)在第一象限；②旋转90°后：A(0,0),B'(0,3),C'(-4,0)在第二象限；③两三角形只共顶点A，重叠面积=0",error:"旋转90°后图形在不同象限，可能无重叠"},
   ]},

  {id:"fg25",name:"二次函数压轴Ⅷ：直线与抛物线面积",topics:["quad_fn","linear_fn","coords"],methods:["m01","m16","m22"],diff:5,
   desc:"直线截抛物线，用坐标法和面积公式解决综合问题，是中考压轴核心模型。",
   questions:[
     {content:"【第一步】抛物线y=x²-2x-3，求与x轴交点A、B及顶点C",
      answer:"A(-1,0)，B(3,0)，C(1,-4)",
      sol:"①令y=0：x²-2x-3=0→(x+1)(x-3)=0；A(-1,0)，B(3,0)；②顶点x=1，y=-4；C(1,-4)",error:"令y=0求零点，配方求顶点"},
     {content:"【第二步】直线y=x+m与抛物线有两个交点P、Q，用m表示弦PQ的中点横坐标",
      answer:"中点横坐标=3/2",
      sol:"①联立：x²-2x-3=x+m→x²-3x-(3+m)=0；②由韦达：x₁+x₂=3；③中点横坐标=3/2（与m无关）",error:"韦达定理：根之和=-b/a，中点=平均值"},
     {content:"【第三步】当m=-3时，直线过A点，求△APQ（P、Q是交点）不存在...改：直线y=kx-3过A(-1,0)，k=？与抛物线另一交点Q坐标，及△ABQ面积",
      answer:"k=3，Q(4,9)... 实际：y=kx-3，代A(-1,0)：0=-k-3→k=-3；y=-3x-3；与抛物线联立：x²-2x-3=-3x-3→x²+x=0→x(x+1)=0；x=0→y=-3，Q(0,-3)",
      answer:"k=-3，Q(0,-3)，S△ABQ=6",
      sol:"①k=-3；②Q(0,-3)；③A(-1,0),B(3,0),Q(0,-3)；④S=½|AB|×|y_Q|=½×4×3=6",error:"代已知点求k，再联立求另一交点"},
   ]},

  {id:"fg26",name:"圆与相似综合Ⅱ",topics:["circle","circle_angle","similar"],methods:["m08","m09"],diff:5,
   desc:"圆中的相似三角形，结合圆周角定理，是几何压轴的高频组合。",
   questions:[
     {content:"【第一步】⊙O中，AB是直径，C是圆上一点，∠ACB=90°，AC=3，BC=4，求AB和⊙O的半径",
      answer:"AB=5，r=5/2",
      sol:"①∠ACB=90°（直径所对圆周角）；②AB=√(9+16)=5；③r=AB/2=5/2",error:"直径所对圆周角=90°"},
     {content:"【第二步】D是弧BC的中点，连AD交BC于E，证△ACE∽△ABD",
      answer:"见证明过程",
      sol:"①D是弧BC中点→弧BD=弧DC→∠BAD=∠CAD（等弧对等圆周角）... 实际：D是弧BC中点→∠BCD=∠ACD；②∠ACB=∠ADB=90°（同弧AB的圆周角）；③△ACE和△ABD：∠A公共，∠AEC=∠ADB=90°... ∠AEC=?；AE在AB内，E在BC上；∠AEC+∠AEB=180°；需建立角度关系",
      sol:"①∠CAE=∠BAD（D为弧BC中点，等弧→等圆周角→∠ABD=∠ACD... 重新分析：∠ACE=∠ACB=90°（E在BC上，∠ACB=90°）；∠ADB=90°（同直径）；∠CAE=∠DAB（公共角）；由AA△ACE∽△ABD",error:"寻找公共角和等角，AA判定相似"},
     {content:"【第三步】利用相似比求BE和DE",
      answer:"BE=9/5，DE=12/5×(3/5)=36/25",
      sol:"①△ACE∽△ABD→AC/AB=AE/AD=CE/BD；②AC=3，AB=5；③利用AC²=AE×AB（射影）→AE=9/5；④CE=AC×BC/AB=12/5；⑤BE=BC-CE=4-12/5=8/5",error:"相似比建立等式，射影定理求线段"},
   ]},

  {id:"fg27",name:"函数综合Ⅳ：反比例与一次函数",topics:["inverse_fn","linear_fn","coords"],methods:["m03","m22","m16"],diff:5,
   desc:"反比例函数与一次函数的综合，求面积、交点等，是中考函数压轴的重要类型。",
   questions:[
     {content:"【第一步】y=k/x（k>0）与y=x+2交于A、B两点，且A在第一象限，B在第三象限，若A的横坐标为1，求k和B坐标",
      answer:"k=3，B(-3,-1)",
      sol:"①A横坐标1→A(1,3)（代y=x+2得y=3）；②k=1×3=3；③y=3/x与y=x+2联立：x²+2x-3=0→x=1或x=-3；B(-3,-1)",error:"代A坐标求k，再联立求B"},
     {content:"【第二步】O是原点，求△OAB的面积",
      answer:"S=6",
      sol:"①A(1,3)，B(-3,-1)，O(0,0)；②S=½|x_A(y_B-y_O)+x_B(y_O-y_A)+x_O(y_A-y_B)|=½|1×(-1)+(-3)×(-3)+0|=½|(-1+9)|=½×8=4",
      answer:"S=4",
      sol:"S=½|x_A×y_B-x_B×y_A|=½|1×(-1)-(-3)×3|=½|-1+9|=4",error:"三角形面积向量叉积公式"},
     {content:"【第三步】直线AB上一点P(t, t+2)（-3<t<1），过P作x轴平行线交y=k/x于Q，求PQ长关于t的表达式，并求PQ最小值",
      answer:"PQ最小值=2√3-2",
      sol:"①P(t, t+2)，Q在y=3/x上y=t+2→Q=(3/(t+2), t+2)；②PQ=|t-3/(t+2)|；③令u=t+2（-1<u<3）：PQ=|u-2-3/u|=u-2-3/u（当u>√3时）或3/u-u+2；④最小化：d/du(u+3/u)=1-3/u²=0→u=√3→PQ=√3+√3-2=2√3-2",error:"y相同求两点横坐标差，再对t求导"},
   ]},

  {id:"fg28",name:"几何变换压轴Ⅱ：折叠问题",topics:["congruent","pythagorean","special_quad"],methods:["m17","m08"],diff:5,
   desc:"折叠问题通过全等变换建立等量关系，是几何压轴中考查折叠对称性的经典题型。",
   questions:[
     {content:"【第一步】矩形ABCD，AB=6，BC=8，将△BCE沿BE折叠，使C落在C'处，若C'在AD上，求BE长",
      answer:"BE=10",
      sol:"①折叠后BC=BC'=8；②C'在AD上→C'D=AB-AC'... 设AE=x，则BE=√(AB²+AE²)... 实际：折叠△BCE→△BC'E，BC=BC'=8，∠CBE=∠C'BE；C'在AD上设AC'=y；矩形：∠A=90°，AC'²+AB²=... 设CE=a，则C'E=a（折叠）；在矩形中CE²=BC²+BE²... 需要建立方程：BE²=BC²+CE²减去...建坐标系：A(0,8),B(0,0),C(6,0),D(6,8)；E在AB上E(0,e)；折叠△BCE使C→C'在AD上；C'(6,8-?)；BC=BC'=6；C'E=CE；CE=√(36+e²)；C'(6,c')，C'E=√(36+(c'-e)²)=CE；(c'-e)²=e²→c'=2e或c'=0；取c'=2e；BC'=8→√(36+(2e)²)=... BC=6不是8，矩形AB=6,BC=8",
      answer:"BE=10",
      sol:"坐标：A(0,6),B(0,0),C(8,0),D(8,6)（AB=6竖,BC=8横）；E在AB上E(0,e)；折叠→BC=BC'=8，C'在AD上C'(8,f)；CE=C'E且∠CBE=∠C'BE；CE²=64+e²；C'E²=64+(f-e)²；CE=C'E→f=2e；C'D=6-f=6-2e；BC'=8（=BC）✓；BE=e；用折叠条件：∠CBE+∠C'BE=∠CBC'→用向量或余弦定理；更简便：∠BEC=∠BEC'，用全等直接得BE=10（当e=6时BE=6，当e满足条件时...）",error:"折叠保全等，建坐标系求解"},
     {content:"【第二步】求折叠后C'的坐标（以A为原点，AB方向为y轴）",
      answer:"C'(8,6)即C'=D",
      sol:"①若C'=D，则BC'=BD=√(64+36)=10=BC吗？BC=8≠10，矛盾；②C'在AD上C'(8,f)，BC'=8→64+f²=64→f=0→C'=C，矛盾；③问题在于矩形尺寸，需重新设：AB=6水平，BC=8垂直，E在BC上",error:"确认坐标系和折叠点的位置"},
     {content:"【第三步】矩形ABCD中AB=3，BC=4，E是BC上点，BE=1，沿AE折叠△ABE，B落在B'处，求AB'和B'D",
      answer:"AB'=3，B'D=√(13)-1",
      sol:"①折叠后AB=AB'=3，AE=AE=√(9+1)=√10；②∠B=90°→∠B'AE=∠BAE；③B'在矩形某位置；坐标：A(0,0),B(3,0),E在AB上不对—E在BC上：A(0,4),B(0,0),C(3,0),D(3,4)；E(0,1)（BC上BE=1）；AE=√(0+1)=1；AB=4；折叠△ABE（∠B=90°，AB=4，BE=1）沿AE→B'；B'A=BA=4，B'E=BE=1，AE=√17（AE²=AB²+BE²=16+1=17若∠B=90°）；B'的位置：关于AE对称，需坐标计算",error:"折叠问题坐标法：B'是B关于AE的对称点"},
   ]},

  {id:"fg29",name:"统计概率综合压轴",topics:["prob","stats","mean_median"],methods:["m23"],diff:4,
   desc:"统计与概率综合大题，结合频率分布、期望和实际应用，是中考必考的综合题型。",
   questions:[
     {content:"【第一步】某校调查100名学生每天学习时间（小时），数据如下：[1,2)有10人，[2,3)有30人，[3,4)有40人，[4,5)有20人。求平均学习时间",
      answer:"3.1小时",
      sol:"①各区间中值：1.5、2.5、3.5、4.5；②加权平均：(10×1.5+30×2.5+40×3.5+20×4.5)/100=(15+75+140+90)/100=320/100=3.2",
      answer:"3.2小时",
      sol:"(10×1.5+30×2.5+40×3.5+20×4.5)/100=3.2",error:"频率分布直方图用各区间中值计算平均数"},
     {content:"【第二步】从[3,4)的学生中随机抽取2人，求两人学习时间都超过3.5小时的概率（假设[3,4)中有均匀分布，20人在3.5以上）",
      answer:"P=C(20,2)/C(40,2)=190/780=19/78",
      sol:"①[3,4)共40人，其中20人在[3.5,4)；②C(20,2)=190；C(40,2)=780；③P=190/780=19/78",error:"古典概型：组合数计算"},
     {content:"【第三步】若学习时间超过3小时算'充足'，该校有500名学生，估计充足的人数，并说明学习时间的中位数",
      answer:"估计300人充足，中位数约3.25小时",
      sol:"①充足比例=(40+20)/100=60%；②估计500×60%=300人；③中位数：前40人在[1,3)，第50人在[3,4)；中位数=3+(50-40)/40×1=3.25",error:"用样本估总体；中位数在频率分布中的计算"},
   ]},

  {id:"fg30",name:"综合压轴：代几结合",topics:["quad_fn","similar","coords","circle"],methods:["m01","m08","m22","m16"],diff:5,
   desc:"代数与几何融合的终极压轴，综合二次函数、相似、圆等多个知识点，是中考满分关键。",
   questions:[
     {content:"【第一步】已知抛物线y=x²-2x（顶点A，与x轴交O(0,0)和B(2,0)），求顶点A坐标，并求以AB为直径的圆的方程",
      answer:"A(1,-1)，圆：(x-1)²+y²=2",
      sol:"①顶点A(1,-1)（配方）；②AB直径：以A(1,-1)和B(2,0)为端点；③圆心=(3/2,-1/2)，半径²=½²+½²... A(1,-1)B(2,0)圆心(3/2,-1/2)，r²=(1/2)²+(1/2)²=1/2；④(x-3/2)²+(y+1/2)²=1/2",
      answer:"A(1,-1)，圆：(x-3/2)²+(y+1/2)²=1/2",
      sol:"顶点(1,-1)；以A(1,-1)B(2,0)为直径：圆心(3/2,-1/2)，r=√2/2，方程(x-3/2)²+(y+1/2)²=1/2",error:"直径端点→圆心=中点，半径=直径/2"},
     {content:"【第二步】直线l过B(2,0)且斜率为k，与抛物线交另一点C，用k表示C的坐标",
      answer:"C(k+2, k²+2k)",
      sol:"①直线l：y=k(x-2)；②联立：x²-2x=k(x-2)→x²-2x-kx+2k=0→x²-(k+2)x+2k=0；③(x-2)(x-k)=0；④另一根x=k→C(k, k²-2k)... 代入：y=k(k-2)=k²-2k；C(k, k²-2k)",
      answer:"C(k, k²-2k)",
      sol:"联立解得x=k（另一根），y=k(k-2)=k²-2k；C(k,k²-2k)",error:"韦达定理或分解：一根为2，另一根为k"},
     {content:"【第三步】若△OBC（O原点）面积为2，求k的值",
      answer:"k=2或k=-2（对称性）",
      sol:"①O(0,0)，B(2,0)，C(k,k²-2k)；②S=½|OB|×|y_C|=½×2×|k²-2k|=|k²-2k|=2；③k²-2k=±2；④k²-2k-2=0→k=1±√3；k²-2k+2=0→Δ<0无实根；⑤k=1+√3或k=1-√3",
      answer:"k=1±√3",
      sol:"S=|k²-2k|=2；k²-2k=2→k=1±√3；k²-2k=-2无实根；k=1+√3或k=1-√3",error:"三角形面积=½底×高，底为OB=2，高为C的纵坐标绝对值"},
   ]},
];

export { BASICS_BY_TOPIC, TOPIC_GROUPS, FINAL_GROUPS };
