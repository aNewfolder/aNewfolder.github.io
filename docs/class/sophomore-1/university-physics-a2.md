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

**元电荷与质子、中子的夸克组成**

元电荷 $e = 1.6\times10^{-19}\ \mathrm{C}$（精确值 $1.602\times10^{-19}\ \mathrm{C}$）。

质子（uud）和中子（udd）由夸克组成：u 夸克带电 $+\dfrac{2}{3}e$，d 夸克带电 $-\dfrac{1}{3}e$。

验证（AI 补充）：质子 $\dfrac{2}{3}e + \dfrac{2}{3}e - \dfrac{1}{3}e = +e$；中子 $\dfrac{2}{3}e - \dfrac{1}{3}e - \dfrac{1}{3}e = 0$。即质子、中子的电荷正是其夸克电荷的叠加；自由夸克不存在（夸克禁闭），夸克只在强子内部出现。

#### 9.2 库仑定律

**库仑定律**

$$\vec{F}_{21} = k\,\frac{q_1 q_2}{r^2}\,\vec{e}_{r21}$$

- $\vec{F}_{21}$ 表示电荷 1 作用于电荷 2 的力，$\vec{e}_{r21}$ 为从 $q_1$ 指向 $q_2$ 方向的单位矢量，$r$ 为两点电荷间距；同号相斥、异号相吸（力的实际方向由电荷符号决定）。
- 适用条件：点电荷、真空、静止。
- SI 单位制中 $k = \dfrac{1}{4\pi\varepsilon_0} \approx 9\times10^{9}\ \mathrm{N\cdot m^2/C^2}$（数值由 AI 补充）。

**真空电磁常量与两种单位制**

- SI 制：$k = \dfrac{1}{4\pi\varepsilon_0}$；$\varepsilon_0$ 为真空介电常量（$\approx 8.85\times10^{-12}\ \mathrm{C^2/(N\cdot m^2)}$）；$\mu_0$ 为真空磁导率（$\approx 4\pi\times10^{-7}\ \mathrm{T\cdot m/A}$）。三者满足

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3\times10^{8}\ \mathrm{m/s}$$

（AI 补充：这个关系把电学、磁学与光学联系在一起——光就是电磁波。）

- 高斯制（CGS）：$k = 1$，电荷单位不是库仑，而是静库 statC（AI 补充换算：$1\ \mathrm{C} \approx 3\times10^{9}\ \mathrm{statC}$）。

#### 9.3 电场和电场强度

**电场的物质性**

- 场以光速传递，需要时间——电荷间的相互作用不是"超距作用"，而是通过电场以有限速度（光速）传递的（AI 补充：这是"场是物质存在的一种形式"这一核心观念，与力学中假想的即时超距力有本质区别）。
- 运动电荷的电场和静止电荷的电场完全不同（AI 补充：运动电荷的电场与速度相关，高速时场沿运动方向"压扁"——这正是狭义相对论的电磁学起源；静电学只研究静止电荷的场）。

**电场强度的定义**

$$\vec{E} = \lim_{q_0\to 0}\frac{\vec{F}}{q_0}$$

- 试验电荷 $q_0$ 必须足够小：几何线度小到可视为点，电量小到放入后不改变原来的电场分布。
- 单位：N/C 或 V/m（两者等价，$1\ \mathrm{N/C} = 1\ \mathrm{V/m}$）；$\vec{E}$ 的方向与正试验电荷受力方向相同。

**电场强度的数量级**

- 晴天大地表面约 100 V/m；空气击穿场强约 $3\times10^{6}\ \mathrm{V/m}$。
- 大地表面带负电荷（AI 补充：因此晴天大气电场方向竖直指向地面、随高度减弱；只有当场强接近击穿量级（雷电云附近）才会击穿空气产生放电闪电）。

**点电荷的场强**

$$\vec{E} = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,\vec{e}_r$$

$\vec{e}_r$ 为从场源电荷指向场点方向的单位矢量，$r$ 为源到场点的距离。（AI 补充：$r \to 0$ 时公式发散，点电荷所在处的场强无定义。）

**连续分布电荷的场强：先投影后积分**

$$\vec{E} = \frac{1}{4\pi\varepsilon_0}\int \frac{dq}{r^2}\,\vec{e}_r$$

- 三种电荷密度：线密度 $\lambda = \dfrac{dq}{dl}$，面密度 $\sigma = \dfrac{dq}{dS}$，体密度 $\rho = \dfrac{dq}{dV}$。
- 四步法：①选取电荷元与坐标系；②把 $\mathrm{d}\vec{E}$ 投影到各坐标轴；③计算各个标量积分；④合成。
- 技巧（笔记原话）：以 $\theta$ 为积分变量，一般比较简单（用角度参数化电荷元，配合几何关系换元，积分多为三角函数的简单积分）。
- 合成：$\vec{E} = E_x\vec{e}_x + E_y\vec{e}_y$（分量叠加后再求模与方向）。

**例：典型连续分布电荷的场强——直线、圆环、圆盘、电偶极子**

笔记列出的课堂典型例题，标准结果如下（记 $k = \dfrac{1}{4\pi\varepsilon_0}$，设电荷为正）：

- **均匀带电直线**（线密度 $\lambda$，场点到直线的垂距为 $a$，场点与直线两端的连线同垂线的夹角分别为 $\theta_1$、$\theta_2$）：平行分量 $E_{\parallel} = \dfrac{k\lambda}{a}(\cos\theta_2 - \cos\theta_1)$，垂直分量 $E_{\perp} = \dfrac{k\lambda}{a}(\sin\theta_1 + \sin\theta_2)$。重要极限：
  - 无限长直线：$E = \dfrac{\lambda}{2\pi\varepsilon_0 a}$（与距离成反比）；
  - 半无限长直线（一端与垂足平齐）：$E = \sqrt{2}\,\dfrac{k\lambda}{a}$，方向与直线成 45°。
- **均匀带电圆环轴线**（半径 $R$、电量 $Q$、轴距环心 $x$）：$E = \dfrac{kQx}{(x^2+R^2)^{3/2}}$，沿轴线方向；环心处 $E=0$，在 $x = \pm\dfrac{R}{\sqrt{2}}$ 处取最大值。
- **均匀带电圆盘轴线**（半径 $R$、面密度 $\sigma$）：$E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{x}{\sqrt{x^2+R^2}}\right)$，沿轴线方向；$x\to\infty$ 退化为点电荷场，$R\to\infty$ 得无限大均匀带电平面 $E = \dfrac{\sigma}{2\varepsilon_0}$（匀强场、与距离无关）。
- **电偶极子**（$\pm q$ 相距 $l$，电矩 $\vec{p} = q\vec{l}$ 方向由 $-q$ 指向 $+q$；远场 $r\gg l$）：轴线延长线上 $E = \dfrac{2kp}{r^3}$，沿 $\vec{p}$ 方向；中垂线上 $E = \dfrac{kp}{r^3}$，方向与 $\vec{p}$ 相反。
- **电偶极子在均匀电场中**（$\vec{p}$ 与 $\vec{E}$ 不平行）：合力为零，但受力矩 $\vec{M} = \vec{p}\times\vec{E}$（大小 $pE\sin\theta$），力矩使电矩转向电场方向；势能 $W = -\vec{p}\cdot\vec{E}$。（AI 补充：在非均匀电场中偶极子还受合力 $\vec{F} \approx \nabla(\vec{p}\cdot\vec{E})$，被拉向场强更强处。）

（以上例题解答由 AI 补全，请复核。）

<details markdown="1">
<summary><strong>【FA：上面五个经典结果的完整推导】</strong></summary>

**带电直线段**：场点 $P$ 到直线的垂距为 $a$，以垂足为原点、直线为 $x$ 轴。电荷元在 $x$ 处：$\mathrm{d}q = \lambda\,\mathrm{d}x$，到 $P$ 的距离 $r = \sqrt{x^2+a^2}$，$\mathrm{d}\vec{E}$ 方向由 $\mathrm{d}q$ 指向 $P$，即沿 $(-x,\ a)$ 方向。设两端坐标为 $x_1, x_2$，则

$$E_{\parallel} = k\lambda\left[\frac{1}{\sqrt{x^2+a^2}}\right]_{x_1}^{x_2}, \qquad E_{\perp} = \frac{k\lambda}{a}\left[\frac{x}{\sqrt{x^2+a^2}}\right]_{x_1}^{x_2}$$

（积分用了 $\displaystyle\int\frac{x\,\mathrm{d}x}{(x^2+a^2)^{3/2}} = -\frac{1}{\sqrt{x^2+a^2}}$，$\displaystyle\int\frac{\mathrm{d}x}{(x^2+a^2)^{3/2}} = \frac{x}{a^2\sqrt{x^2+a^2}}$。）引入垂线到两端连线的夹角 $\theta_1, \theta_2$（即 $\dfrac{x}{\sqrt{x^2+a^2}} = \sin\theta$，$\dfrac{a}{\sqrt{x^2+a^2}} = \cos\theta$），就得到上面的紧凑形式。两个重要极限：

- 无限长直线（$x_1\to-\infty$，$x_2\to+\infty$）：$E_{\parallel} = 0$，$E_{\perp} = \dfrac{2k\lambda}{a} = \dfrac{\lambda}{2\pi\varepsilon_0 a}$；
- 半无限长（一端与垂足平齐，$x_1 = 0$，$x_2\to+\infty$）：$E_{\parallel} = -\dfrac{k\lambda}{a}$，$E_{\perp} = \dfrac{k\lambda}{a}$，合场 $E = \sqrt{2}\,\dfrac{k\lambda}{a}$，与直线成 45°。

**圆环轴线**：半径 $R$、电量 $Q$，场点在轴上距环心 $x$ 处。对称性：各电荷元的横向分量成对抵消，只剩轴向分量。每个 $\mathrm{d}q$ 到场点距离都是 $r = \sqrt{x^2+R^2}$，其场与轴向的夹角余弦为 $\dfrac{x}{r}$，故

$$E = \int \frac{k\,\mathrm{d}q}{r^2}\cdot\frac{x}{r} = \frac{kQx}{(x^2+R^2)^{3/2}}$$

环心 $x = 0$ 处 $E = 0$；$x \gg R$ 时退化为点电荷 $kQ/x^2$。

**圆盘轴线**：半径 $R$、面密度 $\sigma$，切成细圆环：半径 $r'$、宽 $\mathrm{d}r'$ 的环带电量 $\mathrm{d}Q = \sigma\cdot 2\pi r'\,\mathrm{d}r'$，代入圆环结果并积分：

$$E = 2\pi k\sigma x\int_0^R \frac{r'\,\mathrm{d}r'}{(x^2+r'^2)^{3/2}} = 2\pi k\sigma x\left(\frac{1}{x} - \frac{1}{\sqrt{x^2+R^2}}\right) = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{x}{\sqrt{x^2+R^2}}\right)$$

$R\to\infty$ 得无限大平面 $E = \dfrac{\sigma}{2\varepsilon_0}$（匀强）；$x\to\infty$ 退化为点电荷。

**电偶极子**（$\pm q$ 相距 $l$，$\vec{p} = q\vec{l}$，远场 $r\gg l$）：

- 轴线延长线上：两点电荷到场点距离为 $r \mp l/2$，

$$E = kq\left[\frac{1}{(r-l/2)^2} - \frac{1}{(r+l/2)^2}\right] = \frac{2kqrl}{(r^2-l^2/4)^2} \approx \frac{2kp}{r^3}$$

沿 $\vec{p}$ 方向。
- 中垂线上：两电荷的场大小均为 $\dfrac{kq}{r^2+l^2/4}$，垂直于轴的分量抵消、沿轴分量相加：

$$E = 2\cdot\frac{kq}{r^2+l^2/4}\cdot\frac{l/2}{\sqrt{r^2+l^2/4}} = \frac{kql}{(r^2+l^2/4)^{3/2}} \approx \frac{kp}{r^3}$$

方向与 $\vec{p}$ 相反。

**偶极子在均匀电场中**：两电荷受力 $+q\vec{E}$、$-q\vec{E}$，合力为零；对中心的力矩为 $2\cdot qE\cdot\dfrac{l}{2}\sin\theta = pE\sin\theta$，矢量式 $\vec{M} = \vec{p}\times\vec{E}$，力矩把 $\vec{p}$ 转向 $\vec{E}$。由 $M = -\dfrac{\mathrm{d}W}{\mathrm{d}\theta}$ 积分得势能 $W = -pE\cos\theta = -\vec{p}\cdot\vec{E}$（取 $\theta = \pi/2$ 为零点）。

</details>

**后续方法预告：先求电势，再求梯度**

笔记原话：后续先求电势，电势求梯度得场强。即先用标量积分 $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int \dfrac{dq}{r}$（标量积分比矢量积分简单），再由 $\vec{E} = -\nabla V$ 求场强。（AI 补充：这是静电场第二条计算路线，下一节展开。）

### 2026.9.17（9.5 高斯定理）

#### 库仑定律复习

**例：半径 $R$ 的圆环，上半圆均匀带 $+Q$、下半圆均匀带 $-Q$，求圆心处的场强**（FA）

图：半径 $R$ 的圆环，上半圆带 $+Q$、下半圆带 $-Q$，在环上取角元 $\mathrm{d}\theta$。

笔记提示：

- 线密度 $\lambda = \dfrac{Q}{\pi R}$，最后要代回（不要把 $\lambda$ 留在答案里）；
- 叠加时注意方向——建坐标系，把 $\mathrm{d}\vec{E}$ 按单位矢量（如 $\vec{e}_x$）投影后再相加。

<details markdown="1">
<summary><strong>【FA：半圆环圆心场强（完整步骤）】</strong></summary>

**建系**：圆心为原点 $O$，$x$ 轴沿上、下半圆的分界直径（水平），$y$ 轴竖直向上（指向 $+Q$ 一侧）。上、下半圆电荷线密度大小均为

$$\lambda = \frac{Q}{\pi R}$$

**第一步（取电荷元）**：在上半圆取极角 $\theta$（自 $x$ 轴量起，$0 \le \theta \le \pi$）处的角元 $\mathrm{d}\theta$，弧长 $\mathrm{d}l = R\,\mathrm{d}\theta$，电荷元

$$\mathrm{d}q = \lambda R\,\mathrm{d}\theta$$

**第二步（写电荷元的场）**：电荷元到圆心的距离恒为 $R$，故

$$\mathrm{d}E = \frac{k\,\mathrm{d}q}{R^2} = \frac{k\lambda}{R}\,\mathrm{d}\theta$$

正电荷的场由电荷元指向场点，即由 $\mathrm{d}q$ 指向 $O$，与 $\mathrm{d}q$ 的位置矢量 $(R\cos\theta,\ R\sin\theta)$ 反向：

$$\mathrm{d}\vec{E} = -\frac{k\lambda}{R}(\cos\theta\,\vec{e}_x + \sin\theta\,\vec{e}_y)\,\mathrm{d}\theta$$

**第三步（投影、积分——上半圆）**：

$$E_x^{上} = -\frac{k\lambda}{R}\int_0^{\pi}\cos\theta\,\mathrm{d}\theta = 0, \qquad E_y^{上} = -\frac{k\lambda}{R}\int_0^{\pi}\sin\theta\,\mathrm{d}\theta = -\frac{2k\lambda}{R}$$

**第四步（下半圆）**：下半圆电荷为 $-Q$，线密度大小仍为 $\lambda$。负电荷的场由场点指向电荷元，即由 $O$ 指向 $\mathrm{d}q$。对 $\varphi \in [\pi, 2\pi]$ 投影积分：

$$E_x^{下} = \frac{k\lambda}{R}\int_{\pi}^{2\pi}\cos\varphi\,\mathrm{d}\varphi = 0, \qquad E_y^{下} = \frac{k\lambda}{R}\int_{\pi}^{2\pi}\sin\varphi\,\mathrm{d}\varphi = -\frac{2k\lambda}{R}$$

（也可用镜像对称看：上、下半圆逐对镜像的电荷元符号相反，$x$ 分量成对抵消、$y$ 分量成对加强。）

**第五步（叠加并代回 $\lambda$）**：

$$E_y = -\frac{4k\lambda}{R} = -\frac{4kQ}{\pi R^2}, \qquad E = \frac{4kQ}{\pi R^2} = \frac{Q}{\pi^2\varepsilon_0 R^2}$$

方向沿 $-y$：由 $+Q$ 半圆指向 $-Q$ 半圆（沿对称轴向"下"）。（解答由AI补全）

</details>

**例：半径 $R$ 的带电球面，面密度 $\sigma = \sigma_0\cos\theta$，求球心处的电场**（FA）

思路（笔记原话）：分解为细圆环场强的叠加。结果：$E_z = -\dfrac{\sigma_0}{3\varepsilon_0}$。

<details markdown="1">
<summary><strong>【FA：余弦分布球面球心场强（完整步骤）】</strong></summary>

**建系**：球心为原点，$z$ 轴为极轴（$\theta = 0$ 的极点在 $+z$ 方向）。$\theta$ 处 $\sigma = \sigma_0\cos\theta$：北半球带正电、南半球带负电。

**第一步（切细圆环）**：取极角 $\theta \sim \theta + \mathrm{d}\theta$ 的环带。环半径 $a = R\sin\theta$，带宽 $R\,\mathrm{d}\theta$，面积与电荷元为

$$\mathrm{d}S = 2\pi R^2\sin\theta\,\mathrm{d}\theta, \qquad \mathrm{d}q = \sigma_0\cos\theta \cdot 2\pi R^2\sin\theta\,\mathrm{d}\theta$$

（$\mathrm{d}q$ 是带符号的：$\theta > \pi/2$ 时为负。）

**第二步（用细圆环轴线场强公式）**：9.15 已推得半径 $a$、电量 $q$ 的细圆环，在轴上距环心 $x$ 处的场 $E_x = \dfrac{kqx}{(x^2+a^2)^{3/2}}$（$x$ 为带符号的轴向坐标，公式自动给出正确方向）。

此处环心位于 $z = R\cos\theta$，场点（球心）相对环心的轴向坐标为 $x = -R\cos\theta$，且 $x^2 + a^2 = R^2$，所以

$$\mathrm{d}E_z = \frac{k\,\mathrm{d}q\cdot(-R\cos\theta)}{R^3} = -\frac{k\cos\theta}{R^2}\,\mathrm{d}q = -2\pi k\sigma_0\cos^2\theta\sin\theta\,\mathrm{d}\theta$$

**第三步（积分）**：换元 $u = \cos\theta$，$\int_0^{\pi}\cos^2\theta\sin\theta\,\mathrm{d}\theta = \dfrac{2}{3}$，故

$$E_z = -2\pi k\sigma_0\cdot\frac{2}{3} = -\frac{4\pi k\sigma_0}{3} = -\frac{4\pi\sigma_0}{3\cdot 4\pi\varepsilon_0} = -\frac{\sigma_0}{3\varepsilon_0}$$

与笔记结果一致。物理图像：每个环带无论带电正负，在球心产生的场都指向 $-z$（正电荷环的场背离环、负电荷环的场指向环），故总场沿 $-z$——由 $\sigma$ 为正的极指向 $\sigma$ 为负的极。（步骤为 AI 细化，请复核。）

</details>

**缺口问题**

笔记原话：总 $-$ 缺；缺口很小的话可以近似为点电荷。

即 $\vec{E}_{实际} = \vec{E}_{完整} - \vec{E}_{缺口}$：完整体的场往往由对称性直接得出（如完整圆环中心的场为零），缺口线度很小时其电荷元近似为点电荷。（AI 补充示例：均匀带电圆环（$Q, R$）挖去一小段 $\Delta l$，圆心场强近似等于缺口电荷元 $q' = \dfrac{Q\Delta l}{2\pi R}$ 视作点电荷在圆心的场，$E = \dfrac{kq'}{R^2}$；因 $\vec{E}_{完整} = 0$，故 $\vec{E}_{实际} = -\vec{E}_{缺口}$，方向由圆心指向缺口。）（示例由AI补全）

#### 为什么需要高斯定理

笔记原话：电荷分布不确定，（也要能求场；高斯定理）既适用静电场，也适用时变电场。（AI 补充：用库仑定律 + 叠加原则上总能算场，但要求电荷分布已知且积分可行；高斯定理是麦克斯韦方程组之一，对任意电荷分布、含时电磁场普遍成立，而且配合对称性可把积分化为乘法，是求场的新路线。）

#### 电通量

- 匀强场中、面与 $\vec{E}$ 垂直时：$\Phi_E = ES$。单位 $\mathrm{V\cdot m}$；标量。曲面法线正方向可任意选定，通量可正可负。
- 面与 $\vec{E}$ 不垂直：$\mathrm{d}\Phi_e = \vec{E}\cdot\mathrm{d}\vec{S}$，$\Phi_e = \displaystyle\int_S \vec{E}\cdot\mathrm{d}\vec{S}$。
- 闭合曲面：规定向外法线为正方向（穿出为正、穿入为负）。

#### 高斯定理

**内容**：通过任意闭合曲面（高斯面）的电通量，等于面内所包围电荷的代数和除以 $\varepsilon_0$：

$$\Phi_e = \oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{1}{\varepsilon_0}\sum_i q_i$$

**注①：点电荷 $q$ 位于球面（半径 $r$）中心**

$$\Phi_E = \oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \oint_S k\frac{q}{r^2}\,\vec{e}_r\cdot\mathrm{d}\vec{S} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{q}{r^2}\cdot 4\pi r^2 = \frac{q}{\varepsilon_0}$$

笔记强调：**必须加 $\vec{e}_r$ !!}** —— 通量是点乘，正是 $\vec{e}_r\cdot\vec{e}_r = 1$ 才能把积分化成 $E\cdot 4\pi r^2$。

**注②：点电荷位于任意闭合曲面外**（FA：图 9.10）

笔记：圆锥内穿入面和穿出面（的通量）为 0，抵消了。（FA：没懂）

<details markdown="1">
<summary><strong>【FA：图 9.10 课本证明用图】</strong></summary>

课本图 9.10「高斯定理证明用图」（本次提供了该页课本照片，据图整理）：

- **面内电荷 $q$**：从 $q$ 出发的窄圆锥（对应立体角 $\mathrm{d}\Omega$）与曲面交于面元 $\mathrm{d}s$，$\mathrm{d}s$ 距 $q$ 为 $r$，该处外法线 $\vec{e}_n$，$\vec{E}$ 与 $\vec{e}_n$ 夹角 $\theta$。
- **面外电荷 $q'$**：从 $q'$ 出发的圆锥（立体角 $\mathrm{d}\Omega'$）与曲面相交两次——先**穿入**（面元 $\mathrm{d}s_2$，场 $\vec{E}_2$ 与该处外法线 $\vec{e}_n$ 夹钝角 $\theta_2$），后**穿出**（面元 $\mathrm{d}s_1$，场 $\vec{E}_1$ 与外法线夹锐角 $\theta_1$）。
- 笔记蓝笔批注：立体角、穿入、穿出，另有一处写作"$\mathrm{d}s \perp \vec{e}_n$"【?】（疑指取面元在与场线/锥轴垂直方向上的投影面积，即 $\mathrm{d}s\cos\theta = r^2\,\mathrm{d}\Omega$，未能完全确认）。

</details>

<details markdown="1">
<summary><strong>【FA：没懂——面外电荷通量为什么是零（穿入穿出抵消）】</strong></summary>

关键是**立体角**。取以 $q'$ 为顶点、张开立体角 $\mathrm{d}\Omega$ 的一根窄锥管，它在曲面上截出两块面元：穿入的 $\mathrm{d}s_2$（距 $q'$ 为 $r_2$）与穿出的 $\mathrm{d}s_1$（距 $q'$ 为 $r_1$）。

**穿出端**：$\mathrm{d}\Phi_1 = \vec{E}_1\cdot\mathrm{d}\vec{S}_1 = E_1\,\mathrm{d}s_1\cos\theta_1$。把 $\mathrm{d}s_1$ 投影到与锥轴垂直的平面上，投影面积恰为 $\mathrm{d}s_1\cos\theta_1 = r_1^2\,\mathrm{d}\Omega$（距离平方 × 立体角），而 $E_1 = kq'/r_1^2$，于是

$$\mathrm{d}\Phi_1 = \frac{kq'}{r_1^2}\cdot r_1^2\,\mathrm{d}\Omega = kq'\,\mathrm{d}\Omega$$

**穿入端**：场线由外向内穿入，$\vec{E}_2$ 与外法线夹钝角，同样算法得 $\mathrm{d}\Phi_2 = -kq'\,\mathrm{d}\Omega$。

**成对抵消**：$\mathrm{d}\Phi_1 + \mathrm{d}\Phi_2 = 0$，整根锥管净通量为零。全部锥管（立体角共 $4\pi$）铺满曲面，故总通量 $\Phi = 0$。

注意"距离被消掉"：面元离 $q'$ 越远场越弱，但同一锥管截出的面元投影越大（$\propto r^2$），两者恰好抵消——这正是任意形状曲面（不只是球面）结论仍成立的原因。

</details>

**注③：点电荷位于任意闭合曲面内**

笔记：等于点电荷在内球面（同心球面）的通量。（FA：没懂）

<details markdown="1">
<summary><strong>【FA：没懂——面内电荷为什么等于"内球面的通量"】</strong></summary>

同一套立体角计算：从面内电荷 $q$ 作立体角 $\mathrm{d}\Omega$ 的锥管，与曲面交于 $\mathrm{d}s$（距 $q$ 为 $r$，$\vec{E}$ 与 $\vec{e}_n$ 夹角 $\theta$）：

$$\mathrm{d}\Phi = E\,\mathrm{d}s\cos\theta = \frac{kq}{r^2}\cdot\underbrace{r^2\,\mathrm{d}\Omega}_{\mathrm{d}s\cos\theta} = kq\,\mathrm{d}\Omega$$

每根锥管贡献 $kq\,\mathrm{d}\Omega$，**与 $r$、与曲面形状都无关**（曲面形状复杂时锥管可能穿入穿出多次，多算的部分成对抵消，最后恰剩一份"净穿出"）。对整个立体角积分：

$$\Phi = kq\oint\mathrm{d}\Omega = kq\cdot 4\pi = \frac{q}{\varepsilon_0}$$

而以 $q$ 为心、半径 $r_0$ 的同心球面（"内球面"）的通量为 $\dfrac{q}{4\pi\varepsilon_0 r_0^2}\cdot 4\pi r_0^2 = \dfrac{q}{\varepsilon_0}$，完全相同。这就是"任意闭合曲面的通量 = 内球面的通量"：两者在每根锥管上贡献的都是同一份 $kq\,\mathrm{d}\Omega$。

</details>

**注④：$N$ 个点电荷**

笔记：只和闭合曲面内的电荷有关。（FA：没懂）

<details markdown="1">
<summary><strong>【FA：没懂——为什么只与面内电荷有关】</strong></summary>

叠加原理对积分是线性的：$\vec{E} = \sum_i \vec{E}_i \Rightarrow \Phi = \sum_i \Phi_i$（每个电荷的通量贡献可以分开算）。

- 面外电荷：由注②，$\Phi_i = 0$；
- 面内电荷：由注③，$\Phi_i = q_i/\varepsilon_0$。

$$\Phi = \frac{1}{\varepsilon_0}\sum_{\text{面内}} q_i$$

两个容易混淆的点：

1. 高斯面上的 $\vec{E}$ 是**所有**电荷（含面外）共同产生的总场——面外电荷会改变通量在面上的**分布**（某处穿多一些、别处穿少一些），但不改变**总和**。
2. 求和只对面内电荷取**代数和**：面内净电荷为零时通量为零，但面上 $\vec{E}$ 未必为零（例如面内有一对正负电荷的情形）。

</details>

**连续分布电荷**（积分形式）

$$\oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{1}{\varepsilon_0}\int_V \rho\,\mathrm{d}V$$

（FA：微积分形式、散度）

<details markdown="1">
<summary><strong>【FA：微分形式与散度】</strong></summary>

**数学工具（高斯散度定理）**：对任意矢量场，闭合面通量 = 散度的体积分：

$$\oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \int_V (\nabla\cdot\vec{E})\,\mathrm{d}V$$

**对比得微分形式**：把它与高斯定理积分形式 $\displaystyle\oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{1}{\varepsilon_0}\int_V \rho\,\mathrm{d}V$ 对比。由于这对**任意**体积 $V$ 都成立，被积函数必须逐点相等：

$$\nabla\cdot\vec{E} = \frac{\rho}{\varepsilon_0}$$

**散度的物理意义**：$\nabla\cdot\vec{E}$ 表示该点"单位体积发出的净电通量"（通量的体密度）。$\rho > 0$ 处电场线由此"喷出"（源），$\rho < 0$ 处电场线"汇入"（汇）；无电荷处（$\rho = 0$）散度为零，电场线只穿过、不增不减。

**结论**：静电场是**有源场**——哪里有电荷，哪里就是电场线的"喷出口"。（点电荷所在的那一点除外：该处场发散，公式不再适用。）

</details>

说明：静电场为有源场。

#### 高斯定理应用：球对称

**例：均匀带电球面（$Q, R$）的场强分布**

对称性分析：电荷分布球对称 $\Rightarrow$ 场沿径向、大小只与 $r$ 有关，同一同心球面上 $E$ 值相等、径向向外。故取同心球面为高斯面，$\displaystyle\oint_S \vec{E}\cdot\mathrm{d}\vec{S} = E\cdot 4\pi r^2$（面上 $\vec{E}$ 与 $\mathrm{d}\vec{S}$ 同向、$E$ 处处相等）。

① $r > R$：高斯面内为全部电荷 $Q$：

$$E\cdot 4\pi r^2 = \frac{1}{\varepsilon_0}\int\mathrm{d}q = \frac{Q}{\varepsilon_0} \Rightarrow E = \frac{Q}{4\pi\varepsilon_0 r^2} = \frac{kQ}{r^2}$$

（等效于电荷全部集中在球心的点电荷。）

② $r < R$：高斯面内无电荷，$E = 0$。

图：$E$–$r$ 曲线——$r<R$ 段贴横轴（$E = 0$），$r = R$ 处跳变到最大值 $kQ/R^2$，$r>R$ 段按 $1/r^2$ 衰减。

**例：均匀带电球体（$Q, R$）**

① $r > R$：同上，$E = \dfrac{kQ}{r^2}$。

② $r < R$：高斯面只包住半径 $r$ 的球核：

$$\int\mathrm{d}q = \rho\cdot\frac{4}{3}\pi r^3 = Q\cdot\frac{r^3}{R^3} \Rightarrow E\cdot 4\pi r^2 = \frac{Qr^3}{\varepsilon_0 R^3} \Rightarrow E = \frac{Qr}{4\pi\varepsilon_0 R^3} = \frac{kQr}{R^3}$$

（$E \propto r$，随 $r$ 线性增长。）

图：$E$–$r$ 曲线——$r<R$ 段为过原点的直线，$r = R$ 处达最大值 $kQ/R^2$，$r>R$ 段按 $1/r^2$ 下降；两段在 $R$ 处连续（球面内外公式在 $r = R$ 给出同值）。

**例：均匀带电厚球壳（内半径 $a$、外半径 $b$）**

- 方法 1°（补偿法）：大球 $-$ 小球——看成密度 $\rho$ 的完整大球（半径 $b$）叠加密度 $-\rho$ 的同心小球（半径 $a$），用球体结果逐区域相减。
- 方法 2°（高斯定理）：算哪个地方，就把高斯面取到哪里。（FA）

<details markdown="1">
<summary><strong>【FA：算哪个地方，就把高斯面取到哪里】</strong></summary>

高斯定理本身对任何闭合面都成立，但**能解出 $E$** 的前提是把 $\oint \vec{E}\cdot\mathrm{d}\vec{S}$ 化成 $E \times S$。这要求高斯面**穿过待求场点**，且按对称性选取，使面上（或分片面上）满足：

1. $E$ 大小处处相等（才能提出积分号）；
2. $\vec{E}$ 方向处处与面法线平行（$\vec{E}\cdot\mathrm{d}\vec{S} = E\,\mathrm{d}S$）或垂直（该片贡献为零）。

"算哪个地方，就把高斯面取到哪里"：待求场点在半径 $r$ 处，就取半径为 $r$ 的高斯面，再数一数面内电荷。三类典型对称性：

- 球对称（点电荷、球面、球体、厚球壳）→ 同心球面；
- 柱对称（无限长直线、圆柱、圆筒）→ 同轴圆柱面（上下底面上 $\vec{E}\perp\mathrm{d}\vec{S}$ 不贡献通量）；
- 面对称（无限大平面、厚平板）→ 横跨平板的柱状盒。

**示范（方法 2° 解均匀厚球壳，$\rho$ 为常量）**：对 $a < r < b$ 处半径 $r$ 的高斯面，$q_{内} = \rho\cdot\dfrac{4}{3}\pi(r^3 - a^3)$，

$$E\cdot 4\pi r^2 = \frac{\rho(r^3-a^3)}{3\varepsilon_0} \Rightarrow E = \frac{\rho(r^3-a^3)}{3\varepsilon_0 r^2}$$

同理 $r<a$ 时 $E = 0$；$r>b$ 时 $E = \dfrac{\rho(b^3-a^3)}{3\varepsilon_0 r^2}$。（解答由AI补全）

</details>

**例：厚球壳 $\rho(r) = \dfrac{A}{r}$，球心有点电荷 $Q$，求各区域场强**（内半径 $a$、外半径 $b$）（整个题 FA）

取同心球面为高斯面；区域划分：① $r<a$；② $a<r<b$；③ $r>b$。笔记已给出 ② 的结果——要算上内部所有电荷（含球心 $Q$），薄层 $\mathrm{d}q = \rho(r')\cdot 4\pi r'^2\,\mathrm{d}r'$，

$$E = \frac{Q}{4\pi\varepsilon_0 r^2} + \frac{A}{2\varepsilon_0}\left(1 - \frac{a^2}{r^2}\right)$$

<details markdown="1">
<summary><strong>【FA：$\rho = A/r$ 厚球壳（完整解答）】</strong></summary>

**对称性**：$\rho(r)$ 只与 $r$ 有关，加上球心点电荷，整体仍球对称 → 场沿径向、同心球面上大小相等 → 取半径 $r$ 的同心球面为高斯面，$\oint\vec{E}\cdot\mathrm{d}\vec{S} = E\cdot 4\pi r^2$。

**第一步（薄层法算面内电荷）**：$\rho$ 随 $r$ 变，不能直接用体积乘密度，要在壳内取半径 $r' \sim r' + \mathrm{d}r'$ 的薄球壳：

$$\mathrm{d}q = \rho(r')\cdot 4\pi r'^2\,\mathrm{d}r' = \frac{A}{r'}\cdot 4\pi r'^2\,\mathrm{d}r' = 4\pi A\,r'\,\mathrm{d}r'$$

**区域②（$a < r < b$）**：高斯面内电荷 = 球心 $Q$ + 从 $a$ 积到 $r$ 的全部薄层（笔记强调：要算上内部所有电荷，含球心 $Q$）：

$$q_{内}(r) = Q + \int_a^r 4\pi A\,r'\,\mathrm{d}r' = Q + 2\pi A(r^2 - a^2)$$

代入高斯定理：

$$E\cdot 4\pi r^2 = \frac{Q + 2\pi A(r^2-a^2)}{\varepsilon_0} \Rightarrow E = \frac{Q}{4\pi\varepsilon_0 r^2} + \frac{A(r^2-a^2)}{2\varepsilon_0 r^2} = \frac{Q}{4\pi\varepsilon_0 r^2} + \frac{A}{2\varepsilon_0}\left(1 - \frac{a^2}{r^2}\right)$$

与笔记结果一致。

**区域①（$r < a$）**：高斯面在壳的内腔中，只包住球心点电荷：

$$E = \frac{Q}{4\pi\varepsilon_0 r^2}$$

**区域③（$r > b$）**：薄层积满整个壳，$q_{内} = Q + 2\pi A(b^2 - a^2)$：

$$E = \frac{Q + 2\pi A(b^2-a^2)}{4\pi\varepsilon_0 r^2} = \frac{Q}{4\pi\varepsilon_0 r^2} + \frac{A(b^2-a^2)}{2\varepsilon_0 r^2}$$

（等效于全部电荷集中在球心的点电荷。）（解答由AI补全）

</details>

#### 高斯定理应用：轴对称

**例：无限长均匀带电直线（电线），线密度 $\lambda$，求距导线 $r$ 处的场强**（FA）

笔记：取半径 $r$、高 $h$ 的圆柱面为高斯面。圆柱面分三片：$S = S_1 + S_2 + S_3$（侧面、上底、下底），结果 $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$。

<details markdown="1">
<summary><strong>【FA：无限长带电直线（完整推导）】</strong></summary>

**第一步（对称性）**：电荷分布轴对称 → 场只能沿垂直于导线的径向（轴向、绕轴切向的分量都被对称性抵消），且同一圆柱面上各点 $E$ 大小相等。

**第二步（选高斯面）**：过场点作与导线同轴的圆柱面（半径 $r$、高 $h$），加上下两个底面。

**第三步（分片算通量）**：

- 侧面 $S_1$：$\vec{E}$ 与 $\mathrm{d}\vec{S}$ 同向、$E$ 处处相等 → $\Phi_1 = E\cdot 2\pi r h$；
- 上下底面 $S_2, S_3$：$\vec{E}$ 沿径向，与底面法线（沿轴向）垂直 → 无贡献。

$$\oint \vec{E}\cdot\mathrm{d}\vec{S} = E\cdot 2\pi r h$$

**第四步（数面内电荷）**：面内包住的导线长 $h$，电荷 $q_{内} = \lambda h$。

**第五步（解出 $E$）**：

$$E\cdot 2\pi r h = \frac{\lambda h}{\varepsilon_0} \Rightarrow E = \frac{\lambda}{2\pi\varepsilon_0 r}$$

方向沿径向（$\lambda > 0$ 时背离导线）。特点：$E \propto 1/r$，比点电荷的 $1/r^2$ 衰减得慢。（解答由AI补全）

</details>

**例：均匀带电圆柱面（半径 $R$）的电场**（FA）

笔记骨架：$E = \begin{cases} 0, & r < R \\ \cdots, & r > R \end{cases}$

<details markdown="1">
<summary><strong>【FA：均匀带电圆柱面（完整推导）】</strong></summary>

与球面完全平行，只是高斯面换成同轴圆柱面（半径 $r$、高 $h$）。设轴向单位长度电荷为 $\lambda$（若给总电荷 $Q$、长 $L$，则 $\lambda = Q/L$）。

① $r < R$：高斯面内无电荷 → $E = 0$（圆柱面内是"无场区"）。

② $r > R$：通量仍为 $E\cdot 2\pi r h$（上下底面无贡献，理由同上一题），面内电荷 $\lambda h$：

$$E\cdot 2\pi r h = \frac{\lambda h}{\varepsilon_0} \Rightarrow E = \frac{\lambda}{2\pi\varepsilon_0 r}$$

即圆柱面外等效于电荷全部集中到轴线上；$r = R$ 处场强跳变。（解答由AI补全）

</details>

**例：均匀带电圆柱体（半径 $R$）**（FA）

<details markdown="1">
<summary><strong>【FA：均匀带电圆柱体（完整推导）】</strong></summary>

体密度 $\rho$，轴向单位长度电荷 $\lambda = \rho\pi R^2$。

① $r > R$：与上一题相同，$E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$。

② $r < R$：高斯面只包住半径 $r$ 的圆柱核，面内电荷

$$q_{内} = \rho\cdot\pi r^2 h = \lambda h\cdot\frac{r^2}{R^2}$$

$$E\cdot 2\pi r h = \frac{\lambda h r^2}{\varepsilon_0 R^2} \Rightarrow E = \frac{\lambda r}{2\pi\varepsilon_0 R^2} = \frac{\rho r}{2\varepsilon_0}$$

$E \propto r$，随 $r$ 线性增长——与均匀带电球体内部 $E\propto r$ 的结论形式一致。（解答由AI补全）

</details>

#### 高斯定理应用：平面分布

**例：无限大均匀带电平面，面密度 $\sigma$**（FA）

笔记：电场在平面两侧对称，且垂直于带电平面；取一个柱面为高斯面（轴线垂直于平面、两底对称跨在平面两侧）；侧面无贡献，底面贡献。结果 $E = \dfrac{\sigma}{2\varepsilon_0}$。

图：轴线垂直于带电平面的圆柱高斯面，两底面分别位于平面两侧。

<details markdown="1">
<summary><strong>【FA：无限大带电平面（完整推导）】</strong></summary>

**对称性**：平面无限大、各点地位相同 → 场垂直于平面（任何平行于平面的分量都会被"镜像"电荷抵消）；两侧对称，$\sigma > 0$ 时都背离平面；大小与到平面的距离无关。

**高斯面**：轴线垂直于平面、底面积 $S$ 的柱面，两底到平面的距离相等。

**分片算通量**：

- 侧面：$\vec{E}$ 与侧面平行（垂直于侧面法线）→ 无贡献；
- 两个底面：各贡献 $E\cdot S$，共 $2ES$。

$$2ES = \frac{\sigma S}{\varepsilon_0} \Rightarrow E = \frac{\sigma}{2\varepsilon_0}$$

两侧都是匀强场、与距离无关——和点电荷、直线的"随距离衰减"完全不同。（解答由AI补全）

</details>

**例：两块无限大均匀带电平行板（$+\sigma$、$-\sigma$）**（FA）

笔记：板间加强，板外抵消。

<details markdown="1">
<summary><strong>【FA：平行板对（完整推导）】</strong></summary>

每块板单独都产生 $\dfrac{\sigma}{2\varepsilon_0}$ 的匀强场（正板两侧的场背离自己，负板两侧的场指向自己），直接矢量叠加：

- **板间**：$+\sigma$ 板的场指向右、$-\sigma$ 板的场也指向右（指向负板），同向相加：

$$E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}$$

方向由 $+\sigma$ 板指向 $-\sigma$ 板。

- **板外**：两场一个向左一个向右、大小相等 → 抵消为零。

电场全部集中在板间——这正是平行板电容器的情形（板间近似匀强场，外部无场）。

</details>

**例：三块带电板（电荷同/不同）**（FA）

<details markdown="1">
<summary><strong>【FA：三块板（方法与推导）】</strong></summary>

**方法**：还是叠加。每块板都贡献 $\dfrac{\sigma_i}{2\varepsilon_0}$ 的匀强场（$\sigma_i$ 带符号），某区域的合场 = 左边所有板的贡献（向右为正）$-$ 右边所有板的贡献。设三块板从左到右面密度为 $\sigma_1, \sigma_2, \sigma_3$，四个区域（以向右为正）：

- 最左区域：$E = -\dfrac{\sigma_1+\sigma_2+\sigma_3}{2\varepsilon_0}$；
- 板 1、2 之间：$E = \dfrac{\sigma_1-\sigma_2-\sigma_3}{2\varepsilon_0}$；
- 板 2、3 之间：$E = \dfrac{\sigma_1+\sigma_2-\sigma_3}{2\varepsilon_0}$；
- 最右区域：$E = \dfrac{\sigma_1+\sigma_2+\sigma_3}{2\varepsilon_0}$。

同号、异号只影响 $\sigma_i$ 的正负，套同一个公式。例：三块板面密度均为 $\sigma$（同号）时，最左 $E = \dfrac{3\sigma}{2\varepsilon_0}$ 向左，两个板间区域均为 $\dfrac{\sigma}{2\varepsilon_0}$ 向右，最右 $\dfrac{3\sigma}{2\varepsilon_0}$ 向右。（解答由AI补全）

</details>

**例：无限大均匀带电有厚度板（厚 $d$，体密度 $\rho$）**（FA）

笔记：分板内、板外讨论。

<details markdown="1">
<summary><strong>【FA：有厚度板（完整推导）】</strong></summary>

以板的中面为 $x = 0$。对称性与无限大平面相同：场垂直于板面、关于中面对称（两侧等距离处大小相等）。高斯面：轴线垂直于板、底面积 $S$、两底对称分布在中面两侧距中面 $|x|$ 处的柱面。通量恒为 $2ES$（侧面无贡献、两底各 $ES$），两个区域只差"面内电荷怎么数"：

**板内（$|x| < d/2$）**：高斯面只包住厚度 $2|x|$ 的中间层，$q_{内} = \rho\cdot 2|x|\,S$：

$$2ES = \frac{2\rho|x|S}{\varepsilon_0} \Rightarrow E = \frac{\rho|x|}{\varepsilon_0}$$

$E$ 随 $|x|$ 线性增长，中面处 $E = 0$。

**板外（$|x| > d/2$）**：高斯面包住整块板厚，$q_{内} = \rho d S$：

$$2ES = \frac{\rho d S}{\varepsilon_0} \Rightarrow E = \frac{\rho d}{2\varepsilon_0}$$

把厚度压扁成面密度 $\sigma = \rho d$，就回到无限大平面的结果——板外是与距离无关的匀强场。（解答由AI补全）

</details>

**例：上方改为不均匀**

笔记原话："上方改为不均匀"，即把上一题（有厚度板）的电荷分布改为不均匀。（AI 补充：若 $\rho$ 只沿厚度方向变化、记 $\rho(x)$，对称性仍保持，做法完全一样，只是"数面内电荷"换成积分：板内 $q_{内} = S\displaystyle\int_{-|x|}^{|x|}\rho(x')\,\mathrm{d}x'$，板外 $q_{内} = S\displaystyle\int_{-d/2}^{d/2}\rho(x')\,\mathrm{d}x'$，再代 $2ES = q_{内}/\varepsilon_0$。若 $\rho$ 还沿平行板面的方向变化，平面对称性被破坏，这套高斯面就不能用了。）（说明由AI补全）

**例（综例，PPT）：均匀带电球内挖球形空腔，求腔内场强**（FA：图片）

题目（PPT）：半径 $R$ 的均匀带电球，电荷体密度 $\rho$，球内有一半径 $r$ 的球形空腔，空腔中心距离球心为 $a$，求空腔内任一点 $P$ 的电场强度。

图（PPT）：大球心与腔心相距 $a$；$P$ 在腔内，$\vec{r}_1$ 从大球心指向 $P$，$\vec{r}_2$ 从腔心指向 $P$。PPT 提问：对称性？

思路（笔记原话）：看成大球（密度 $\rho$）和小球（密度 $-\rho$）的叠加。腔内为均匀场！

<details markdown="1">
<summary><strong>【FA：空腔综例（完整解答）】</strong></summary>

**对称性？** 挖掉空腔后，系统对大球心不再球对称，不能直接用高斯定理——所以用补偿法（挖补法）。

**第一步（拆分）**：把"带空腔的球"看成两个完整球的叠加：

- 大球：半径 $R$、密度 $+\rho$，球心 $O_1$；
- 补偿小球：半径 $r$（恰好填满空腔）、密度 $-\rho$，球心 $O_2$（$|O_1O_2| = a$）。

两者叠加后空腔区域净密度恰为零，与原题一致。

**第二步（预备结论：均匀带电球内部的场）**：把 $Q = \rho\cdot\dfrac{4}{3}\pi R^3$ 代入前面球体例题的 $r<R$ 结果 $E = \dfrac{Qs}{4\pi\varepsilon_0 R^3}$，得距球心 $s$ 处

$$\vec{E} = \frac{\rho}{3\varepsilon_0}\vec{s} \qquad (\vec{s}\ \text{从球心指向场点})$$

**第三步（设矢量）**：记 $\vec{r}_1 = \overrightarrow{O_1P}$，$\vec{r}_2 = \overrightarrow{O_2P}$，$\vec{a} = \overrightarrow{O_1O_2}$，由三角形关系 $\vec{r}_1 = \vec{a} + \vec{r}_2$。$P$ 在腔内，同时位于大球内部与小球内部，两个结果都可用。

**第四步（分别求场并叠加）**：

$$\vec{E}_1 = \frac{\rho}{3\varepsilon_0}\vec{r}_1 \ (+\rho\ \text{大球})， \qquad \vec{E}_2 = -\frac{\rho}{3\varepsilon_0}\vec{r}_2 \ (-\rho\ \text{补偿球})$$

$$\vec{E} = \vec{E}_1 + \vec{E}_2 = \frac{\rho}{3\varepsilon_0}(\vec{r}_1 - \vec{r}_2) = \frac{\rho}{3\varepsilon_0}\vec{a}$$

**结论**：

$$\vec{E} = \frac{\rho}{3\varepsilon_0}\vec{a}$$

腔内任一点场强完全相同——**均匀场**（印证笔记"腔内为均匀场！"）：大小 $\dfrac{\rho a}{3\varepsilon_0}$，方向沿 $O_1 \to O_2$（$\rho > 0$）。结果与 $P$ 的位置无关，也与 $R$、空腔半径 $r$ 无关（只需空腔完全在球内）。（解答由AI补全）

</details>

