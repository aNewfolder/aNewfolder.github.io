# 大学物理（甲）Ⅱ

- **任课教师**：鲁定辉
- **学期**：2026-2027 秋冬学期

---

## 分数构成

- 期中 20% + 期末 40% + 平时 40%（加权赋分）；平时内部：作业 13% + 出勤 5% + 交流 2% + 小测（2~3 次）20%。
- 笔记原话：期中期末考得好，平时分就高；期中考到电磁感应（期中范围截至电磁感应）。
- 笔记原文"＋竞赛？"——疑指竞赛加分，待确认。

## 课堂笔记

### 2026.9.15（第 9 章 静电场开篇）

#### 9.1 电荷

<details open markdown="1">
<summary><strong>【元电荷与质子、中子的夸克组成】</strong></summary>

元电荷 $e = 1.6\times10^{-19}\ \mathrm{C}$（精确值 $1.602\times10^{-19}\ \mathrm{C}$）。

质子（uud）和中子（udd）由夸克组成：u 夸克带电 $+\dfrac{2}{3}e$，d 夸克带电 $-\dfrac{1}{3}e$。

验证（AI 补充）：质子 $\dfrac{2}{3}e + \dfrac{2}{3}e - \dfrac{1}{3}e = +e$；中子 $\dfrac{2}{3}e - \dfrac{1}{3}e - \dfrac{1}{3}e = 0$。即质子、中子的电荷正是其夸克电荷的叠加；自由夸克不存在（夸克禁闭），夸克只在强子内部出现。

</details>

#### 9.2 库仑定律

<details open markdown="1">
<summary><strong>【库仑定律】</strong></summary>

$$\vec{F}_{21} = k\,\frac{q_1 q_2}{r^2}\,\vec{e}_{r21}$$

- $\vec{F}_{21}$ 表示电荷 1 作用于电荷 2 的力，$\vec{e}_{r21}$ 为从 $q_1$ 指向 $q_2$ 方向的单位矢量，$r$ 为两点电荷间距；同号相斥、异号相吸（力的实际方向由电荷符号决定）。
- 适用条件：点电荷、真空、静止。
- SI 单位制中 $k = \dfrac{1}{4\pi\varepsilon_0} \approx 9\times10^{9}\ \mathrm{N\cdot m^2/C^2}$（数值由 AI 补充）。

</details>

<details open markdown="1">
<summary><strong>【真空电磁常量与两种单位制】</strong></summary>

- SI 制：$k = \dfrac{1}{4\pi\varepsilon_0}$；$\varepsilon_0$ 为真空介电常量（$\approx 8.85\times10^{-12}\ \mathrm{C^2/(N\cdot m^2)}$）；$\mu_0$ 为真空磁导率（$\approx 4\pi\times10^{-7}\ \mathrm{T\cdot m/A}$）。三者满足

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3\times10^{8}\ \mathrm{m/s}$$

（AI 补充：这个关系把电学、磁学与光学联系在一起——光就是电磁波。）

- 高斯制（CGS）：$k = 1$，电荷单位不是库仑，而是静库 statC（AI 补充换算：$1\ \mathrm{C} \approx 3\times10^{9}\ \mathrm{statC}$）。

</details>

#### 9.3 电场和电场强度

<details open markdown="1">
<summary><strong>【电场的物质性】</strong></summary>

- 场以光速传递，需要时间——电荷间的相互作用不是"超距作用"，而是通过电场以有限速度（光速）传递的（AI 补充：这是"场是物质存在的一种形式"这一核心观念，与力学中假想的即时超距力有本质区别）。
- 运动电荷的电场和静止电荷的电场完全不同（AI 补充：运动电荷的电场与速度相关，高速时场沿运动方向"压扁"——这正是狭义相对论的电磁学起源；静电学只研究静止电荷的场）。

</details>

<details open markdown="1">
<summary><strong>【电场强度的定义】</strong></summary>

$$\vec{E} = \lim_{q_0\to 0}\frac{\vec{F}}{q_0}$$

- 试验电荷 $q_0$ 必须足够小：几何线度小到可视为点，电量小到放入后不改变原来的电场分布。
- 单位：N/C 或 V/m（两者等价，$1\ \mathrm{N/C} = 1\ \mathrm{V/m}$）；$\vec{E}$ 的方向与正试验电荷受力方向相同。

</details>

<details open markdown="1">
<summary><strong>【电场强度的数量级】</strong></summary>

- 晴天大地表面约 100 V/m；空气击穿场强约 $3\times10^{6}\ \mathrm{V/m}$。
- 大地表面带负电荷（AI 补充：因此晴天大气电场方向竖直指向地面、随高度减弱；只有当场强接近击穿量级（雷电云附近）才会击穿空气产生放电闪电）。

</details>

<details open markdown="1">
<summary><strong>【点电荷的场强】</strong></summary>

$$\vec{E} = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,\vec{e}_r$$

$\vec{e}_r$ 为从场源电荷指向场点方向的单位矢量，$r$ 为源到场点的距离。（AI 补充：$r \to 0$ 时公式发散，点电荷所在处的场强无定义。）

</details>

<details open markdown="1">
<summary><strong>【连续分布电荷的场强：先投影后积分】</strong></summary>

$$\vec{E} = \frac{1}{4\pi\varepsilon_0}\int \frac{dq}{r^2}\,\vec{e}_r$$

- 三种电荷密度：线密度 $\lambda = \dfrac{dq}{dl}$，面密度 $\sigma = \dfrac{dq}{dS}$，体密度 $\rho = \dfrac{dq}{dV}$。
- 四步法：①选取电荷元与坐标系；②把 $\mathrm{d}\vec{E}$ 投影到各坐标轴；③计算各个标量积分；④合成。
- 技巧（笔记原话）：以 $\theta$ 为积分变量，一般比较简单（用角度参数化电荷元，配合几何关系换元，积分多为三角函数的简单积分）。
- 合成：$\vec{E} = E_x\vec{e}_x + E_y\vec{e}_y$（分量叠加后再求模与方向）。

</details>

<details open markdown="1">
<summary><strong>【例：典型连续分布电荷的场强——直线、圆环、圆盘、电偶极子】</strong></summary>

笔记列出的课堂典型例题，标准结果如下（记 $k = \dfrac{1}{4\pi\varepsilon_0}$，设电荷为正）：

- **均匀带电直线**（线密度 $\lambda$，场点到直线的垂距为 $a$，场点与直线两端的连线同垂线的夹角分别为 $\theta_1$、$\theta_2$）：平行分量 $E_{\parallel} = \dfrac{k\lambda}{a}(\cos\theta_2 - \cos\theta_1)$，垂直分量 $E_{\perp} = \dfrac{k\lambda}{a}(\sin\theta_1 + \sin\theta_2)$。重要极限：
  - 无限长直线：$E = \dfrac{\lambda}{2\pi\varepsilon_0 a}$（与距离成反比）；
  - 半无限长直线（一端与垂足平齐）：$E = \sqrt{2}\,\dfrac{k\lambda}{a}$，方向与直线成 45°。
- **均匀带电圆环轴线**（半径 $R$、电量 $Q$、轴距环心 $x$）：$E = \dfrac{kQx}{(x^2+R^2)^{3/2}}$，沿轴线方向；环心处 $E=0$，在 $x = \pm\dfrac{R}{\sqrt{2}}$ 处取最大值。
- **均匀带电圆盘轴线**（半径 $R$、面密度 $\sigma$）：$E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{x}{\sqrt{x^2+R^2}}\right)$，沿轴线方向；$x\to\infty$ 退化为点电荷场，$R\to\infty$ 得无限大均匀带电平面 $E = \dfrac{\sigma}{2\varepsilon_0}$（匀强场、与距离无关）。
- **电偶极子**（$\pm q$ 相距 $l$，电矩 $\vec{p} = q\vec{l}$ 方向由 $-q$ 指向 $+q$；远场 $r\gg l$）：轴线延长线上 $E = \dfrac{2kp}{r^3}$，沿 $\vec{p}$ 方向；中垂线上 $E = \dfrac{kp}{r^3}$，方向与 $\vec{p}$ 相反。
- **电偶极子在均匀电场中**（$\vec{p}$ 与 $\vec{E}$ 不平行）：合力为零，但受力矩 $\vec{M} = \vec{p}\times\vec{E}$（大小 $pE\sin\theta$），力矩使电矩转向电场方向；势能 $W = -\vec{p}\cdot\vec{E}$。（AI 补充：在非均匀电场中偶极子还受合力 $\vec{F} \approx \nabla(\vec{p}\cdot\vec{E})$，被拉向场强更强处。）

（以上例题解答由 AI 补全，请复核。）

</details>

<details open markdown="1">
<summary><strong>【后续方法预告：先求电势，再求梯度】</strong></summary>

笔记原话：后续先求电势，电势求梯度得场强。即先用标量积分 $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int \dfrac{dq}{r}$（标量积分比矢量积分简单），再由 $\vec{E} = -\nabla V$ 求场强。（AI 补充：这是静电场第二条计算路线，下一节展开。）

</details>
