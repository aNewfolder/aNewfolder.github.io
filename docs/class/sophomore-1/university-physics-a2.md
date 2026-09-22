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

![课本图9.10 高斯定理证明用图：面内电荷与面外电荷的立体角分析，含笔记批注（立体角、穿入、穿出）](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/20260917211026371.jpg)

课本图 9.10「高斯定理证明用图」（原图见上，据图整理）：

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

![综例PPT：半径R的均匀带电球，电荷体密度ρ，球内有一半径r的球形空腔，空腔中心距球心为a，求空腔内任一点P的电场强度](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/20260917211026402.jpg)

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

### 2026.9.20（9.6 静电场的环路定理 · 9.7 电势 · 9.8 场强与电势的关系）

**复习与引入**

- 复习：高斯定理是普适的，但若没有对称性则没法用（微分形式可用）。
- 引入：静电场为保守场，所以可引入电势，由电势的梯度得场强。

#### 9.6 静电场的环路定理

**电场力做功（点电荷的电场）**

电荷 $q_0$ 从 $a$ 移到 $b$，电场力做的功——先取微元（$\theta$ 为 $\vec{E}$ 与 $\mathrm{d}\vec{l}$ 的夹角，径向场中 $\mathrm{d}l\cos\theta = \mathrm{d}r$）：

$$\mathrm{d}A = \vec{F}\cdot\mathrm{d}\vec{l} = q_0\vec{E}\cdot\mathrm{d}\vec{l} = q_0 E\,\mathrm{d}l\cos\theta = q_0 E\,\mathrm{d}r = \frac{q_0 q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r$$

$$A_{ab} = \int_a^b \mathrm{d}A = \frac{q_0 q}{4\pi\varepsilon_0}\left(\frac{1}{r_a} - \frac{1}{r_b}\right)$$

结果只与起点、终点的 $r_a$、$r_b$ 有关，**路径无关** → 保守场 → 可引入"势"。任意带电体产生的静电场同理，各电荷叠加即可。

**静电场的环路定理**

沿 $acb$、$adb$ 两条路径从 $a$ 到 $b$ 做功相等，而 $bda$ 是 $adb$ 的逆向走法：

$$\int_{acb} q_0\vec{E}\cdot\mathrm{d}\vec{l} = \int_{adb} q_0\vec{E}\cdot\mathrm{d}\vec{l} = -\int_{bda} q_0\vec{E}\cdot\mathrm{d}\vec{l}$$

两项合起来正是沿闭合回路 $acbda$ 的环量，得环路定理：

$$\oint_L \vec{E}\cdot\mathrm{d}\vec{l} = 0$$

即静电场基本定理（两条）：

- 高斯定理：有源；
- 环路定理：有势、无旋。

由 Stokes 定理（FA，不会了）：

$$\oint_L \vec{E}\cdot\mathrm{d}\vec{l} = \iint_\Sigma (\nabla\times\vec{E})\cdot\mathrm{d}\vec{S}$$

持续缩小回路，得旋度 $\nabla\times\vec{E} = 0$：无涡旋。

<details markdown="1">
<summary><strong>【FA：Stokes 定理与"无旋"（不会了 → 讲清楚）】</strong></summary>

- **Stokes 定理说什么**：对任意一张以闭合回路 $L$ 为边界的曲面 $\Sigma$，场沿 $L$ 的环量等于场的旋度穿过 $\Sigma$ 的通量，即上式。方向约定用右手定则配套：四指沿回路绕向弯曲，拇指指向面元 $\mathrm{d}\vec{S}$ 的法向。
- **怎么从"环量恒为零"推出 $\nabla\times\vec{E} = 0$**：静电场对**任何**闭合回路环量都是零，所以对**任何**曲面 $\Sigma$ 都有 $\iint_\Sigma(\nabla\times\vec{E})\cdot\mathrm{d}\vec{S} = 0$。假如某点旋度不为零，就过该点取一个法向与 $\nabla\times\vec{E}$ 同向的小回路，小面元上的积分 $\approx |\nabla\times\vec{E}|\,\Delta S \neq 0$，矛盾。这就是笔记说的"持续缩小回路"：回路缩到一点，环量就缩成该点的 $\nabla\times\vec{E}\cdot\mathrm{d}\vec{S}$，处处为零只能说明每一点的旋度都是零。
- **"无涡旋"的直观**：旋度度量场的"打转"程度（类比水流里的漩涡：旋度就是漩涡强度）。$\nabla\times\vec{E} = 0$ 意味着静电场处处不打转，电场线不会自己闭合成圈。
- **一句话总结**：$\oint_L\vec{E}\cdot\mathrm{d}\vec{l} = 0$ 是环路定理的**积分形式**（对一整条回路说的话），$\nabla\times\vec{E} = 0$ 是**微分形式**（对每一点说的话），Stokes 定理是两者之间的翻译官。对比预告：后面电磁感应里的感生电场 $\nabla\times\vec{E} = -\partial\vec{B}/\partial t \neq 0$，其电场线恰是闭合涡旋。（解答由AI补全）

</details>

**数学：散度、旋度、梯度**

散度（笔记已给）：

$$\nabla\cdot\vec{E} = \frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z}$$

旋度（FA，补充）：

<details markdown="1">
<summary><strong>【FA：旋度公式（补充）】</strong></summary>

直角坐标系中的展开式（行列式记法最好记）：

$$\nabla\times\vec{E} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ E_x & E_y & E_z \end{vmatrix} = \vec{i}\left(\frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z}\right) + \vec{j}\left(\frac{\partial E_x}{\partial z} - \frac{\partial E_z}{\partial x}\right) + \vec{k}\left(\frac{\partial E_y}{\partial x} - \frac{\partial E_x}{\partial y}\right)$$

- 展开：按第一行展开行列式，"正对角线"取正、"反对角线"取负。
- 每个分量的含义：$x$ 分量 $(\partial E_z/\partial y - \partial E_y/\partial z)$ 度量场在 $yz$ 平面内的"环量密度"（单位面积的环量），其余分量同理。
- 对照记忆：散度 $\nabla\cdot\vec{E}$ 是**标量**（源的强度），旋度 $\nabla\times\vec{E}$ 是**矢量**（涡的强度）。静电场：$\nabla\cdot\vec{E} = \rho/\varepsilon_0$（有源）、$\nabla\times\vec{E} = 0$（无旋）。（解答由AI补全）

</details>

梯度（FA，补充）：

<details markdown="1">
<summary><strong>【FA：∇ 算子与"三件套"（补充）】</strong></summary>

$\nabla$（读 nabla）本身不是场，是一套"求偏导"的指令，写出来像矢量：

$$\nabla \equiv \vec{i}\frac{\partial}{\partial x} + \vec{j}\frac{\partial}{\partial y} + \vec{k}\frac{\partial}{\partial z}$$

三种用法对应矢量分析三件套：

| 用法 | 作用对象 | 结果 | 静电场中的身份 |
| --- | --- | --- | --- |
| $\nabla U$ 梯度 | 标量场 | 矢量 | $\vec{E} = -\nabla U$（见 9.8） |
| $\nabla\cdot\vec{E}$ 散度 | 矢量场 | 标量 | $= \rho/\varepsilon_0$（高斯定理微分形式） |
| $\nabla\times\vec{E}$ 旋度 | 矢量场 | 矢量 | $= 0$（环路定理微分形式） |

记忆：点乘出标量（散度），叉乘出矢量（旋度），直接打在标量上出梯度。（解答由AI补全）

</details>

#### 9.7 电势

**电势能**

$$A_{ab} = \int_a^b q_0\vec{E}\cdot\mathrm{d}\vec{l} = -(W_b - W_a) = -\Delta W$$

（负号很重要：电场力做的功 = 电势能的减少。）

电势能（选参考点为零）：

$$W_P = q_0\int_P^{\text{参考点}\,(P_0,\,+\infty)} \vec{E}\cdot\mathrm{d}\vec{l}$$

**电势**

$$U_P = \frac{W_P}{q_0} = \int_P^{+\infty}\vec{E}\cdot\mathrm{d}\vec{l}$$

（笔记原话：单给 $q$ 没说符号，按正的做。）

**电压**

$$U_{ab} = \int_a^b \vec{E}\cdot\mathrm{d}\vec{l}$$

**电场力做功**

$$A_{ab} = q_0\int_a^b \vec{E}\cdot\mathrm{d}\vec{l} = q_0(U_a - U_b) \qquad (\text{FA：梳理何时 } a\!\to\! b\text{，何时 } b\!\to\! a)$$

<details markdown="1">
<summary><strong>【FA：做功方向梳理——何时 a→b、何时 b→a】</strong></summary>

1. **定义自带方向**：$U_{ab} \equiv U_a - U_b = \displaystyle\int_a^b\vec{E}\cdot\mathrm{d}\vec{l}$，下标顺序就是积分路径方向（从第一个下标积到第二个）。$U_{ab} > 0$ 即 $a$ 点电势高。
2. **顺路做功**：电荷 $q_0$ 从 $a$ 移到 $b$，$A_{ab} = q_0(U_a - U_b)$。正电荷从高电势到低电势（顺电场线"下坡"）→ $A_{ab} > 0$，电场力推它走；从低到高（"爬坡"）→ $A_{ab} < 0$，此时说"外力克服电场力做功"，外力做的功 $-A_{ab}$ 全部存成电势能。
3. **反着搬**：从 $b$ 到 $a$ 则 $A_{ba} = q_0(U_b - U_a) = -A_{ab}$——做功与路径无关、只看始末，方向反过来就差一个负号。
4. **口诀**：题目问"从 X 到 Y"，就写 $A_{XY} = q_0(U_X - U_Y)$，正负用"正电荷顺场线做正功"判断。这也正是上面 $A_{ab} = -(W_b - W_a)$ 中那个"很重要"的负号。（解答由AI补全）

</details>

**零点（参考点）选择**

- 有限带电体系：一般取无限远 / 地面为零点；
- 无限带电体系：任选一个有限点。

**电势叠加原理**

**1. 点电荷电场的电势**（默认零点为沿矢径方向的无限远；换参照点要重算）：

$$U_P = \int_P^{+\infty}\vec{E}\cdot\mathrm{d}\vec{l} = \int_r^{+\infty}\frac{q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \frac{q}{4\pi\varepsilon_0 r}$$

若选 $r = a$ 处为零点：

$$U_P = \int_P^{P_0}\vec{E}\cdot\mathrm{d}\vec{l} = \frac{q}{4\pi\varepsilon_0 r} - \frac{q}{4\pi\varepsilon_0 a}$$

**2. 均匀带电球壳的电势**：场强分段

$$\vec{E} = \begin{cases} 0, & r < R \\ \dfrac{Q}{4\pi\varepsilon_0 r^2}\hat{r}, & r > R \end{cases}$$

电势分段积分（球壳内 $E = 0$，第一段积分贡献为零）：

$$U = \begin{cases} \displaystyle\int_r^R E\,\mathrm{d}r + \int_R^{+\infty}\frac{Q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \dfrac{Q}{4\pi\varepsilon_0 R}, & r < R \\[3ex] \displaystyle\int_r^{+\infty}\frac{Q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \dfrac{Q}{4\pi\varepsilon_0 r}, & r \geq R \end{cases}$$

图：$U$–$r$ 曲线——$r < R$ 段是水平直线（常数 $\frac{Q}{4\pi\varepsilon_0 R}$），$r > R$ 段从同一高度按 $\frac{1}{r}$ 衰减，在 $R$ 处平滑衔接。

场强在表面突变，但电势是连续的——适合分析复杂带电体系。

**3. 无限长均匀带电直线的电势**（线密度 $\lambda$，求垂直距离 $r$ 处 $P$ 点电势）：

不能选无限远为零点，设 $r_0$ 处 $P_0$ 点电势为零。高斯面选圆柱，轴对称场强由高斯定理得

$$E = \frac{\lambda}{2\pi\varepsilon_0 r} \qquad (\text{FA：推导，见下方说明})$$

$$U_P = \int_P^{P_0}\vec{E}\cdot\mathrm{d}\vec{l} = \int_r^{r_0}\frac{\lambda}{2\pi\varepsilon_0 r}\,\mathrm{d}r = \frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r_0}{r}$$

$r_0$ 随便选，因为电势都是相对的，比如选 $r_0 = 1\,\mathrm{m}$。

（该场强公式的完整高斯面推导已收录于 2026.9.17 笔记【FA：无限长带电直线（完整推导）】，此处不重复。顺带补一句"为什么不能选无限远为零点"：$\int_r^{+\infty}\frac{\mathrm{d}r}{r}$ 积分发散，电势会跑到无穷大，所以只能选有限参考点。）

**4. 点电荷系电场的电势**：由场强叠加原理，

$$U_P = \int_P^{+\infty}\vec{E}\cdot\mathrm{d}\vec{l} = \int_P^{+\infty}(\vec{E}_1 + \vec{E}_2 + \cdots + \vec{E}_n)\cdot\mathrm{d}\vec{l} = U_{P_1} + U_{P_2} + \cdots + U_{P_n} = \sum_{i=1}^{n}\frac{q_i}{4\pi\varepsilon_0 r_i}$$

仅**标量**叠加，可以绕过场强（免去矢量合成的麻烦）。对连续带电体：

$$U = \int\mathrm{d}U = \int\frac{\mathrm{d}q}{4\pi\varepsilon_0 r}$$

也可以由电势求场强（求导）。参考点取有限远点时依然成立。

综上，求电势的两条路：1. 首先求 $\vec{E}$，再积分；2. 电荷分布已知，直接电势叠加。

#### 9.8 场强与电势的关系

**等势面**

规定相邻等势面电势差相同；画图约定等势面用虚线（电场线为实线）。性质：

1. 等势面与电场线处处正交。（证：沿等势面从 $a$ 移到 $b$ 电场力不做功，即 $W_{ab} = 0 = q_0\displaystyle\int_a^b\vec{E}\cdot\mathrm{d}\vec{l}$，而等势面上的路径任意，只能 $\vec{E}$ 与 $\mathrm{d}\vec{l}$ 处处垂直。）
2. 场强指向电势下降方向，且正比于同方向电势的变化率。
3. 等势面密集处场强大。
4. （空间内）场强为零的连通区域电势相等。

**已知电势分布求场强（证明）**

$$U_a - U_b = \int_a^{P_0}\vec{E}\cdot\mathrm{d}\vec{l} - \int_b^{P_0}\vec{E}\cdot\mathrm{d}\vec{l} = \int_a^b\vec{E}\cdot\mathrm{d}\vec{l}$$

将单位电荷沿 $x$ 轴移动 $\mathrm{d}x$，即 $A(x,y,z) \to B(x+\mathrm{d}x,y,z)$，在 $\mathrm{d}x$ 内认为 $\vec{E}$ 不变：

$$-\mathrm{d}U = U_a - U_b = \int_a^b\vec{E}\cdot\mathrm{d}\vec{l} = E_x\,\mathrm{d}x$$

得 $E_x = -\dfrac{\partial U}{\partial x}$；同理 $E_y = -\dfrac{\partial U}{\partial y}$，$E_z = -\dfrac{\partial U}{\partial z}$。于是

$$\vec{E} = E_x\vec{i} + E_y\vec{j} + E_z\vec{k} = -\left(\vec{i}\frac{\partial U}{\partial x} + \vec{j}\frac{\partial U}{\partial y} + \vec{k}\frac{\partial U}{\partial z}\right) = -\nabla U \ (\text{梯度}) \qquad (\text{必须注意负号})$$

**数学：矢量微分算子与方向导数**

$$\nabla \equiv \vec{i}\frac{\partial}{\partial x} + \vec{j}\frac{\partial}{\partial y} + \vec{k}\frac{\partial}{\partial z}$$

方向导数（位移方向 $l$ 与等势面法线 $n$ 成 $\theta$ 角）：

$$\frac{\mathrm{d}U}{\mathrm{d}l} = \frac{\mathrm{d}U}{\mathrm{d}n}\cos\theta$$

法线方向变化率最大，即梯度：

$$\nabla U = \mathrm{grad}\,U = \frac{\mathrm{d}U}{\mathrm{d}n}\,\vec{n}$$

**总结：求场强方法**

1. 库仑定律 + 叠加；2. 高斯定理；3. 电势求梯度。

**例：外半径 $R_2$ 的均匀带电圆盘（面密度 $\sigma$），中心挖去半径 $R_1$ 的圆，求轴线上 $P$ 点的电势与场强**

图：带孔圆盘（垫圈形），过盘心垂直于盘面的轴线上有场点 $P$（距盘心 $x$）。

取微元圆环：半径 $r$、宽 $\mathrm{d}r$，$\mathrm{d}q = \sigma\cdot 2\pi r\,\mathrm{d}r$，则

$$\mathrm{d}U = \frac{\mathrm{d}q}{4\pi\varepsilon_0\sqrt{r^2+x^2}}$$

代入 $\mathrm{d}q$ 积分：

$$U_P = \int_{R_1}^{R_2}\frac{\sigma r\,\mathrm{d}r}{2\varepsilon_0\sqrt{r^2+x^2}} = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{R_2^2+x^2} - \sqrt{R_1^2+x^2}\right)$$

场强只有 $x$ 分量：

$$E = E_x = -\frac{\partial U}{\partial x} = \frac{\sigma}{2\varepsilon_0}\left(\frac{x}{\sqrt{R_1^2+x^2}} - \frac{x}{\sqrt{R_2^2+x^2}}\right)$$

#### PPT 补充：电偶极子 · 不同坐标系下的梯度（详细讲解）

> 本次两页 PPT 的文字提取如下（按要求放在最后），逐行讲解见各折叠块。

**PPT 一：例——电偶极子的电场**

- $U = U_+ + U_- = -k\dfrac{\vec{p}\cdot\vec{r}}{r^3}$，偶极矩 $\vec{p} \equiv q\vec{l}$
- $\vec{E} = -\nabla U = k\left(\dfrac{3\vec{p}\cdot\vec{r}}{r^5}\vec{r} - \dfrac{\vec{p}}{r^3}\right)$
- 配图：等量异号点电荷的电场线（实线）与等势线（虚线）分布（课本 Fig. 4-13）

**PPT 二：例——在均匀外电场中，电偶极子的电势能**

- $W = q(U_+ - U_-) = -qEl\cos\theta = -\vec{p}\cdot\vec{E}$
- 在外电场中，偶极矩趋向转向场强
- 复杂静电问题，解泊松方程：$\vec{\nabla}\cdot\vec{E} = \dfrac{\rho_e}{\varepsilon_0}$、$\vec{E} = -\nabla\phi$，得 $\nabla^2\phi = -\dfrac{\rho}{\varepsilon}$

<details markdown="1">
<summary><strong>【FA：电偶极子两例 + 泊松方程（逐行讲解）】</strong></summary>

**① 模型与偶极矩**：电偶极子 = 相距 $l$ 的一对等量异号点电荷 $+q$、$-q$，且只在 $r \gg l$ 的远处看它（把这一对电荷当"一个东西"）。偶极矩 $\vec{p} = q\vec{l}$，$\vec{l}$ 从 $-q$ 指向 $+q$，所以 $\vec{p}$ 指向正电荷一侧。

**② 电势**：$U = U_+ + U_- = kq\left(\dfrac{1}{r_+} - \dfrac{1}{r_-}\right)$。以偶极子中心为原点、$\vec{p}$ 沿极轴，场点到中心距离 $r$、方向与 $\vec{p}$ 夹角 $\theta$，则 $r_+ \approx r - \frac{l}{2}\cos\theta$、$r_- \approx r + \frac{l}{2}\cos\theta$（离 $+q$ 近一点就远一点），通分：

$$U \approx kq\,\frac{\left(r+\frac{l}{2}\cos\theta\right)-\left(r-\frac{l}{2}\cos\theta\right)}{r^2} = k\frac{p\cos\theta}{r^2} = k\frac{\vec{p}\cdot\vec{r}}{r^3}$$

注意：PPT 上 $U$ 那行带负号（$-k\,\vec{p}\cdot\vec{r}/r^3$），疑为笔误——沿 $\vec{p}$ 方向的远点离 $+q$ 更近、电势应为正；而且只有取正号，下一步求梯度才能得到 PPT 自己写的 $\vec{E}$。

**③ 场强**（由电势求梯度，$U$ 只依赖 $r$、$\theta$）：

$$E_r = -\frac{\partial U}{\partial r} = \frac{2kp\cos\theta}{r^3}, \qquad E_\theta = -\frac{1}{r}\frac{\partial U}{\partial\theta} = \frac{kp\sin\theta}{r^3}$$

两分量打包就是 PPT 的矢量式 $\vec{E} = k\left(\dfrac{3(\vec{p}\cdot\vec{r})\,\vec{r}}{r^5} - \dfrac{\vec{p}}{r^3}\right)$。检验两个特殊方向：轴线上（$\theta = 0$）$E = \dfrac{2kp}{r^3}$ 沿 $\vec{p}$；中垂面上（$\theta = 90^\circ$）$E = \dfrac{kp}{r^3}$ 与 $\vec{p}$ 反向。衰减规律：$U \propto 1/r^2$、$E \propto 1/r^3$——比点电荷快一档，因为远处 $+q$、$-q$ 的贡献几乎互相抵消，只剩这点"残余"。

**④ 均匀外场中的电势能**：外场均匀，沿场方向走 $l\cos\theta$ 电势就降 $El\cos\theta$，故 $U_+ - U_- = -El\cos\theta$，

$$W = q(U_+ - U_-) = -qEl\cos\theta = -\vec{p}\cdot\vec{E}$$

$\vec{p}\parallel\vec{E}$ 时 $W = -pE$ 最小（稳定平衡，类比指南针指针稳定指北）；$\vec{p}$ 反平行时 $W = +pE$ 最大（不稳）。能量往低处走，所以"偶极矩趋向转向场强"。（支撑这句的力矩公式 PPT 没写，补上：$\vec{\tau} = \vec{p}\times\vec{E}$，大小 $pE\sin\theta$，作用就是把 $\vec{p}$ 拧向 $\vec{E}$。）

**⑤ 泊松方程**：叠加、高斯都要求电荷分布好算；复杂边界问题换思路——不求 $\vec{E}$，先求标量 $\phi$。把 $\vec{E} = -\nabla\phi$ 代入高斯定理微分形式 $\nabla\cdot\vec{E} = \rho_e/\varepsilon_0$：

$$\nabla\cdot(-\nabla\phi) = \frac{\rho}{\varepsilon} \;\Rightarrow\; \nabla^2\phi = -\frac{\rho}{\varepsilon}$$

$\nabla^2 = \dfrac{\partial^2}{\partial x^2} + \dfrac{\partial^2}{\partial y^2} + \dfrac{\partial^2}{\partial z^2}$（拉普拉斯算子）；$\varepsilon$ 是介质介电常数（真空取 $\varepsilon_0$）；无电荷区域 $\rho = 0$ 时叫拉普拉斯方程。好处：三个分量的矢量问题变成一个标量的偏微分方程，配边界条件解出 $\phi$，再 $\vec{E} = -\nabla\phi$ 收尾。（解答由AI补全）

</details>

**PPT 三：梯度在不同坐标系的表述**

球坐标：

$$\nabla U = \vec{e}_r\frac{\partial U}{\partial r} + \vec{e}_\theta\,\frac{1}{r}\frac{\partial U}{\partial\theta} + \vec{e}_\phi\,\frac{1}{r\sin\theta}\frac{\partial U}{\partial\phi}$$

柱坐标：

$$\nabla U = \vec{e}_r\frac{\partial U}{\partial r} + \vec{e}_\phi\,\frac{1}{r}\frac{\partial U}{\partial\phi} + \vec{e}_z\frac{\partial U}{\partial z}$$

坐标变换（PPT 原文，$\mathrm{tg}^{-1}$ 即 $\arctan$）：

$$\begin{cases} x = r\sin\theta\cos\phi \\ y = r\sin\theta\sin\phi \\ z = r\cos\theta \end{cases} \qquad\quad \begin{cases} r = \sqrt{x^2+y^2+z^2} \\ \theta = \cos^{-1}\dfrac{z}{r} \\ \phi = \mathrm{tg}^{-1}\dfrac{y}{x} \end{cases}$$

<details markdown="1">
<summary><strong>【FA：坐标系里的梯度——为什么多出 1/r、怎么用】</strong></summary>

- **为什么多出 $\frac{1}{r}$、$\frac{1}{r\sin\theta}$**：偏导 $\frac{\partial U}{\partial\theta}$ 是"$\theta$ 增加 1 弧度时 $U$ 变多少"，但梯度要的是"沿空间每走 1 米 $U$ 变多少"。球坐标里 $\theta$ 变 $\mathrm{d}\theta$ 实际只走 $r\,\mathrm{d}\theta$ 的弧长，$\phi$ 变 $\mathrm{d}\phi$ 只走 $r\sin\theta\,\mathrm{d}\phi$，所以换算成"每米变化率"要除以步长：$\frac{1}{r}\frac{\partial U}{\partial\theta}$、$\frac{1}{r\sin\theta}\frac{\partial U}{\partial\phi}$。直观：越靠近极轴（$\theta \to 0$），同一 $\mathrm{d}\phi$ 对应的圆圈越短，这个因子把这种"密集"自动放大进去。径向不用除——$r$ 本身就是长度，$\mathrm{d}r$ 走多远算多远。
- **怎么用（和笔记对上）**：球对称问题 $U = U(r)$ 只依赖 $r$，后两项全为零，$\vec{E} = -\nabla U = -\frac{\mathrm{d}U}{\mathrm{d}r}\hat{r}$，三元偏导退化成一元求导——上面球壳由电势看场强就是这种情形；柱对称（无限长直线）同理只剩 $\vec{e}_r$ 项。这正是 9.8"电势求梯度"方法在对称问题上的省力之处。
- **三个角的角色**：$r$ 是到原点的距离，$\theta$ 从 $+z$ 轴量起（极角），$\phi$ 是 $xy$ 平面内从 $+x$ 轴量起的方位角。（解答由AI补全）

</details>

### 2026.9.22（10.1 静电场中的导体：导体的静电平衡 · 静电屏蔽）

#### 上节课补例（FA）：两根均匀带异号电荷的长直导线激发的电场

图：两根无限长平行直导线（均垂直纸面），左线线密度 $-\lambda$、右线 $+\lambda$，各距中点 $O$ 为 $a$（相距 $2a$）。场点 $P(x,y)$，到 $-\lambda$、$+\lambda$ 的距离分别为 $r_1$、$r_2$。求 $P$ 点场强、电势。

<details markdown="1">
<summary><strong>【FA：两根异号线电荷的场强与电势（不会 → 完整解法）】</strong></summary>

几何设定：$+\lambda$ 过 $(a,0)$、$-\lambda$ 过 $(-a,0)$，均沿 $z$ 方向；场点 $P(x,y)$ 到两线的垂直距离

$$r_2 = \sqrt{(x-a)^2+y^2}\ \ (\text{到 } +\lambda), \qquad r_1 = \sqrt{(x+a)^2+y^2}\ \ (\text{到 } -\lambda)$$

**场强**：单根无限长线电荷在距离 $r$ 处产生 $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$（2026.9.17 已推导），方向在垂直于线的平面内沿径向（正线发散、负线汇聚）。两线贡献矢量相加：

$$\vec{E} = \frac{\lambda}{2\pi\varepsilon_0}\left[\frac{(x-a)\,\vec{i}+y\,\vec{j}}{r_2^2} - \frac{(x+a)\,\vec{i}+y\,\vec{j}}{r_1^2}\right]$$

即 $E_x = \dfrac{\lambda}{2\pi\varepsilon_0}\left(\dfrac{x-a}{r_2^2} - \dfrac{x+a}{r_1^2}\right)$，$E_y = \dfrac{\lambda y}{2\pi\varepsilon_0}\left(\dfrac{1}{r_2^2} - \dfrac{1}{r_1^2}\right)$。

**电势**：无限长线电荷不能取无限远为零点（9.7 节结论），取两线正中间的中垂面 $x=0$ 为零电势面。单根线以参考距离 $r_0$ 计的电势为 $\mp\dfrac{\lambda}{2\pi\varepsilon_0}\ln\dfrac{r}{r_0}$（正线取负号、负线取正号），叠加后参考常数合并为一项 $C$，并按 $x=0$ 处 $U=0$ 定 $C=0$：

$$U_P = \frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r_1}{r_2} = \frac{\lambda}{4\pi\varepsilon_0}\ln\frac{(x+a)^2+y^2}{(x-a)^2+y^2}$$

检验：$x=0$ 处 $r_1 = r_2$，$U = 0$ ✓；趋近 $+\lambda$（$r_2 \to 0$）$U \to +\infty$ ✓。顺带一提：令 $U$ 取常数可得等势线是一族圆（阿波罗尼奥斯圆），这正是两线传输线的场型。（解答由AI补全）

</details>

#### 10.1 静电场中的导体

**新课引入**：实际设备中必有导体和电介质，而原先都不知道电荷分布，怎么办——先研究静电场中的导体。

##### 一、导体的静电平衡

**静电平衡的建立**：把导体扔进（匀强）电场，电场分布会发生变化，导体内电荷会迁移，但总电荷一定守恒！总场强 = 外电场 $\vec{E}_0$ + 感应电荷的附加场 $\vec{E}'$：

$$\vec{E} = \vec{E}_0 + \vec{E}'$$

**静电平衡**：导体内电子的宏观定向运动完全停止，即

$$\vec{E}_{\text{内}} = \vec{E}_0 + \vec{E}' = 0, \qquad \text{且}\ \vec{E}_{\text{表面}} \perp \text{表面}$$

**静电平衡下导体的性质**

**（1）上方两条**：$\vec{E}_{\text{内}} = 0$、$\vec{E}_{\text{表面}} \perp$ 表面（以下性质都由它们推出）。

**（2）导体内部为等势体，导体表面为等势面。**

推导：$U_a - U_b = \displaystyle\int_a^b \vec{E}\cdot\mathrm{d}\vec{l}$，因 $\begin{cases} \vec{E} = 0 & (\text{内}) \\ \vec{E} \perp \mathrm{d}\vec{l} & (\text{表面}) \end{cases}$，得 $U_a = U_b$。

**（3）导体内部电荷处处为零。**

推导：高斯定理 $\displaystyle\oint_S \vec{E}\cdot\mathrm{d}\vec{S} = \frac{\Sigma q}{\varepsilon_0}$，导体内取任意小高斯面。因 $\vec{E}_{\text{内}} = 0$，通过高斯面的电通量为 $0$，故 $\Sigma q = 0$。

<details markdown="1">
<summary><strong>【FA：任意小高斯面为什么合法（不会 → 讲清楚）】</strong></summary>

- **"任意"是关键词**：高斯面是在导体内随便取的小闭合面，想套哪儿套哪儿、想多小多小。"任何一个小体积里净电荷都是零"就等价于"处处无净电荷"——假如某点附近真有一团净电荷 $\rho$，包住它的小高斯面通量 $\approx \rho\,\Delta V/\varepsilon_0 \neq 0$，与 $\vec{E}_{\text{内}} = 0$ 矛盾。
- **"会不会正负抵消？"** 高斯定理管的是**净**电荷，但这不是靠巧合：假如导体内某处有净电荷，它会在周围产生电场、推动自由电子移动，直到电荷重新分布、场处处为零才停下——"内部无净电荷"是平衡的**结果**，不是前提。
- **逻辑链**：静电平衡 ⇒ $\vec{E}_{\text{内}} = 0$ ⇒（高斯定理）导体内任意小高斯面 $\Sigma q = 0$ ⇒ 内部电荷处处为零，电荷只能分布在表面。（解答由AI补全）

</details>

**（4）导体表面的电荷面密度与表面附近场强成正比。**（推导【见课本P55】）得

$$E = \frac{\sigma}{\varepsilon_0} \;\Rightarrow\; \sigma = \varepsilon_0 E$$

可由场强求表面电荷分布。

**（5）孤立导体的电荷面密度 $\sigma$ 与相应表面曲率有关**：曲率越大（曲率半径越小），则 $\sigma$ 越大，场强也越大：

$$E \propto \sigma \propto \frac{1}{r}$$

<details markdown="1">
<summary><strong>【FA：泊松方程视角——不同曲率/角度尖端附近的电荷行为】</strong></summary>

- **泊松方程怎么看这件事**：泊松方程 $\nabla^2\phi = -\rho/\varepsilon_0$（上节 PPT 已给）。导体内部 $\phi$ 是常数、电荷只分布在表面，于是导体外的场完全由"导体表面是等势面"这一边界条件下的拉普拉斯方程（$\rho = 0$ 区域）决定。曲率大的地方等势面挤得密、弯得急，$\vec{E} = -\nabla\phi$ 就大，再由 $\sigma = \varepsilon_0 E_n$ 反推：电荷在那里堆得密。
- **一个能算的模型**：半径 $R_1$、$R_2$ 的两个导体球用细导线相连（电势同为 $U$），则 $q_i = 4\pi\varepsilon_0 R_i U$，面密度 $\sigma_i = \varepsilon_0 U / R_i \propto 1/R_i$，附近场强 $E_i = \sigma_i/\varepsilon_0 \propto 1/R_i$——半径小 10 倍，$\sigma$ 与 $E$ 就大 10 倍。尖端可视为"局部半径极小"的极限。
- **"不同角度"**：导体表面拐角越尖（楔形夹角越小），解出的角顶附近 $\sigma$ 随距离的幂次发散越厉害，场与电荷都往尖端集中——这就是尖端放电的几何根源。（解答由AI补全）

</details>

<details markdown="1">
<summary><strong>【FA：静电现象的应用（避雷针、静电复印机、静电除尘、静电加速器等）】</strong></summary>

- **避雷针**：针尖曲率极大 → $\sigma$、$E$ 极大 → 率先尖端放电（电晕），把云中电荷缓慢泄放入大地，保护建筑物。
- **静电复印机**：光电导鼓面先均匀充电，曝光后形成静电"潜像"，带异号电荷的墨粉被吸附成像，再转印到纸上加热定影。
- **静电除尘**：烟气流过高压电晕区，尘粒带电后被异性集尘电极吸附收集（烟囱除尘）。
- **静电加速器（范德格拉夫起电机）**：用尖端放电把电荷源源不断送进大金属球壳（电荷只分布在球壳外表面），球壳电势可升至数兆伏，用来加速带电粒子。
- 笔记原文末项为"静电加速器及启【?】器"（字迹不清/被裁，疑为"起电机"一类，待补认）。（解答由AI补全）

</details>

##### 二、静电屏蔽（导体空腔，在静电平衡下）

**（1）空腔内部无带电体**

- 内表面不可能有任何电荷。否则若有电荷，则有电场，沿场线走必有电势差，与等势体矛盾。内部由静电平衡必无电荷；**外表面可以有**。
- 空腔内部场强处处为零。
- 若有外电场：导体外表面有感应电荷，但叠加后必使导体内及空腔内总场强为 $0$——外场进不来。
- 应用：电工的高压线带电金属作业服（笔记旁小图：高压线上作业的人）。

**（2）空腔内部有带电体**

- 内表面出现感应电荷，且内表面总电量与腔内电荷量相等、符号相反；电荷分布与腔形状及带电体位置有关（电像法，FA 见下）。
- 若内表面感应 $-q$、外壳净带电 $Q$，由电荷守恒，外表面总带电 $Q+q$——腔内电荷"透"到外面来了。

<details markdown="1">
<summary><strong>【FA：电像法（补充）】</strong></summary>

**一句话**：难算的感应电荷，用一个（或几个）假想的"像电荷"代替——只要真实电荷加像电荷共同满足"导体表面是等势面（接地则为零电势）"的边界条件，由唯一性定理，待求区域的真空解就是这两组电荷的叠加解。

两个标准结果：

- 点电荷 $q$ 距无限大接地导体平面 $d$：像电荷 $-q$，位于平面另一侧对称处（距面也是 $d$）。
- 点电荷 $q$ 距半径 $R$ 的接地导体球球心 $d\ ( > R)$：像电荷 $q' = -\dfrac{R}{d}q$，位于球心与 $q$ 的连线上、距球心 $\dfrac{R^2}{d}$ 处（球内）。

注意：像电荷是"记账工具"，导体内部并没有真的它。腔内带电体的感应电荷分布确实随位置变（居中与偏一侧不同），电像法正是处理这类"分布与位置有关"问题的标准工具之一。（解答由AI补全）

</details>

**（3）导体腔接地，且腔外没有带电体，内部有带电体 $q$**

接地 ⇒ 电势为零。外表面感应电荷被大地中和，内表面还是 $-q$。即**内部带电体对外界无影响**。

**（4）接地，内外都有带电体**

外表面感应电荷与外部电荷叠加，保证（接地）电势为零（外表面为等势面），保证腔体 $\vec{E} = 0$（内表面等势）；内表面感应电荷和内部电荷叠加。即**内外互不影响**。

课本图 10.6 直观对照：**(a)** 未接地——腔内 $+q$ 使内表面感应 $-$，外表面出现 $+$，外部仍有电场线穿出；**(b)** 接地——外表面电荷被中和，外场消失。接地的导体空腔可以隔离内外电场的影响；用编织较密的金属丝网代替导体空腔、接地后也基本能起静电屏蔽作用。

![课本图10.6 接地的导体空腔可以隔离内外电场的影响：(a) 未接地，外表面有感应正电荷、电场线穿出；(b) 接地后外表面电荷被中和、外部无场](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/1790052577319.jpg)

（课本补充：高压带电作业时穿戴金属丝网布制成的**均压服**——均压服相当于一个导体空腔将人体屏蔽起来，高压线与均压服之间发生电火花放电，使两者达到等电势，操作人员在等势区内工作自然毫无危险。电子设备使用接地的金属罩壳防止各部分相互影响和外界干扰；传送电讯号的屏蔽线在绝缘层外再加金属网屏蔽层；无线电厂调试室整个空间安装接地密铜丝网成为屏蔽室——都是静电屏蔽原理的应用。）

#### 例题：课本例 10.1 · 课本例 10.2 · PPT 例 3

**例 10.1（课本 P58）** 一块面积为 $S$ 的金属大薄平板 A，带电量为 $Q$，在其附近平行放置另一块**不带电**的金属大薄平板 B，两板间距远小于板的线度。试求两板表面的电荷面密度，以及周围空间的场强分布。

![课本例10.1图：平行板 A、B 四个表面的电荷面密度 σ1–σ4、板内考察点 PA、PB 与三个区域的场强 E1、E2、E3（照片含课堂手写批注 σ2+σ3=0、σ1+σ2+σ3−σ4=0）](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/1790052577317.jpg)

**解（课本解法，含课堂批注）**：静电平衡时，电荷分布在平板表面，设各表面的电荷面密度分别为 $\sigma_1$、$\sigma_2$、$\sigma_3$、$\sigma_4$（如图）。由电荷守恒，根据题意有

$$\text{A 板：}\ \sigma_1 + \sigma_2 = \frac{Q}{S} \quad \text{①} \qquad\qquad \text{B 板：}\ \sigma_3 + \sigma_4 = 0 \quad \text{②}$$

课堂批注：相对两面 $\sigma_2 + \sigma_3 = 0$。

将带电平面视为"无限大"，则它们产生的电场是均匀场，大小 $\sigma/2\varepsilon_0$；空间任一点的场强是四个带电平面场强的叠加。静电平衡要求金属板内场强处处为零（批注：板内**任一点**都可以，不必非取图中 $P_A$、$P_B$）。取向右方向为正，对 $P_A$ 点有：

$$\frac{\sigma_1}{2\varepsilon_0} - \frac{\sigma_2}{2\varepsilon_0} - \frac{\sigma_3}{2\varepsilon_0} - \frac{\sigma_4}{2\varepsilon_0} = 0 \quad \text{③}$$

对 $P_B$ 点有（批注：即 $\sigma_1 + \sigma_2 + \sigma_3 - \sigma_4 = 0$）：

$$\frac{\sigma_1}{2\varepsilon_0} + \frac{\sigma_2}{2\varepsilon_0} + \frac{\sigma_3}{2\varepsilon_0} - \frac{\sigma_4}{2\varepsilon_0} = 0 \quad \text{④}$$

解上述四个方程，可得

$$\sigma_1 = \frac{Q}{2S}, \qquad \sigma_2 = \frac{Q}{2S}, \qquad \sigma_3 = -\frac{Q}{2S}, \qquad \sigma_4 = \frac{Q}{2S}$$

因此金属板 A 和 B 将空间分成三个区域，它们的场强大小分别为（方向如图：$E_1$ 向左，$E_2$、$E_3$ 向右）

$$E_1 = E_2 = E_3 = \frac{1}{2\varepsilon_0}\cdot\frac{Q}{S}$$

<details markdown="1">
<summary><strong>【FA：例 10.1 拓展——两板带不同电荷、四块板/多块板怎么办】</strong></summary>

**两板带不同电荷 $Q_A$、$Q_B$**（面积 $S$）：守恒律换成 $\sigma_1 + \sigma_2 = \dfrac{Q_A}{S}$、$\sigma_3 + \sigma_4 = \dfrac{Q_B}{S}$，③④不变。妙处是**设一个未知数就够**：③ − ④ 得 $\sigma_3 = -\sigma_2$（相对面互为相反数）。设 $\sigma_2 = x$，则 $\sigma_3 = -x$，$\sigma_1 = \dfrac{Q_A}{S} - x$，$\sigma_4 = \dfrac{Q_B}{S} + x$，代回 ③：

$$\frac{Q_A}{S} - x - x + x - \frac{Q_B}{S} - x = 0 \;\Rightarrow\; x = \frac{Q_A - Q_B}{2S}$$

于是

$$\sigma_1 = \sigma_4 = \frac{Q_A + Q_B}{2S}\ \ (\text{两外表面平分总电荷})， \qquad \sigma_2 = -\sigma_3 = \frac{Q_A - Q_B}{2S}\ \ (\text{相对面等量异号})$$

场强：两板之间 $E = \dfrac{Q_A - Q_B}{2\varepsilon_0 S}$；板外两侧 $E = \dfrac{Q_A + Q_B}{2\varepsilon_0 S}$。两个特例正好对上：课本题即 $Q_B = 0$；平行板电容器即 $Q_B = -Q_A$（外侧场为零、电荷全在内侧面，板间 $E = \dfrac{Q_A}{\varepsilon_0 S}$）。

**四块板/多块板**：方法不变——每板一个电荷守恒方程 + 每板内取一点写零场方程。硬解 $2N$ 个未知数可以，但先用"相对面互为相反数"能把未知数砍到 $N+1$ 个，这就是笔记"设一个未知数即可"的意思。对 $N$ 块板（从左到右带电 $Q_1, \dots, Q_N$，第 $i$ 道缝隙两侧面密度记 $\pm x_i$）有现成结论：

- 最外两个表面平分总电荷：$\sigma_{\text{左外}} = \sigma_{\text{右外}} = \dfrac{Q_1 + \cdots + Q_N}{2S}$；
- 缝隙 $i$：$x_i = \dfrac{(Q_1 + \cdots + Q_i) - (Q_{i+1} + \cdots + Q_N)}{2S}$（"左边总电荷减右边总电荷"除以 $2S$），缝隙内场强 $E_i = \dfrac{x_i}{\varepsilon_0}$。

四块板即 $N = 4$：$x_1 = \dfrac{Q_1 - Q_2 - Q_3 - Q_4}{2S}$，$x_2 = \dfrac{Q_1 + Q_2 - Q_3 - Q_4}{2S}$，$x_3 = \dfrac{Q_1 + Q_2 + Q_3 - Q_4}{2S}$。用 $N = 2$ 自检：恰得 $\sigma_2 = x_1 = \dfrac{Q_A - Q_B}{2S}$、外表面 $\dfrac{Q_A + Q_B}{2S}$，与上面一致。（解答由AI补全）

</details>

**例 10.2（课本 P59）** 如图所示，一半径为 $R_1$ 的导体球 A，带有电量 $q$；球外有一内、外半径分别为 $R_2$ 和 $R_3$ 的同心球壳 B，带有电量 $Q$。（1）试求球 A 和球壳 B 的电势；（2）若用细导线连接球 A 和球壳 B，再求其电势；（3）若未连接时使外球接地，此时其电势又是多少？

![课本例10.2图：(a) 球A带q，球壳B内表面感应−q、外表面Q+q（批注：球内及壳内 E=0）；(b) 用导线连接后电荷全部移到球壳外表面；(c) 球壳接地，外表面电荷被中和](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/1790052577318.jpg)

**解（课本解法）**

**（1）** 由静电平衡条件可知，导体球和球壳内的场强为零，电荷均匀分布在表面上。若在球壳 B 内作一高斯面，根据高斯定理可求得球壳内表面的感应电荷为 $-q$；由于电荷守恒，球壳外表面的感应电荷为 $+q$，其总电荷为 $(Q+q)$，如图 (a) 所示。

在球内、球与球壳间、球壳外分别作同心球面为高斯面，应用高斯定理，求得空间的场强分布为

$$E = \begin{cases} \dfrac{q}{4\pi\varepsilon_0 r^2}, & R_1 < r < R_2 \\[2ex] 0, & R_2 < r < R_3 \\[2ex] \dfrac{Q+q}{4\pi\varepsilon_0 r^2}, & r > R_3 \end{cases}$$

根据电势定义，外球壳的电势为

$$U_B = \int_{R_3}^{+\infty} \vec{E}\cdot\mathrm{d}\vec{l} = \int_{R_3}^{+\infty} \frac{Q+q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \frac{Q+q}{4\pi\varepsilon_0 R_3}$$

内球 A 的电势为（两段场不为零的区域都要积分）

$$U_A = \int_{R_1}^{+\infty} \vec{E}\cdot\mathrm{d}\vec{l} = \int_{R_1}^{R_2} \frac{q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r + \int_{R_3}^{+\infty} \frac{Q+q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \frac{1}{4\pi\varepsilon_0}\left(\frac{q}{R_1} - \frac{q}{R_2} + \frac{Q+q}{R_3}\right)$$

**（2）** 若用导线连接球 A 和球壳 B，电荷将全部分布在球壳外表面（图 (b)）。此时两者电势相等，即

$$U_A = U_B = \frac{q+Q}{4\pi\varepsilon_0 R_3}$$

**（3）** 若球壳接地，则其外表面电荷被中和（图 (c)），外壳与地球等电势。通常取大地电势为零，即 $U_B = 0$（课堂批注：此时 $E_3 = 0$，球壳外无场），所以球 A 电势为

$$U_A = \int_{R_1}^{R_2} \vec{E}_2\cdot\mathrm{d}\vec{r} = \int_{R_1}^{R_2} \frac{q}{4\pi\varepsilon_0 r^2}\,\mathrm{d}r = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

<details markdown="1">
<summary><strong>【FA：例 10.2 解法二——电势叠加法（PPT 转文字）】</strong></summary>

工具就是 9.7 节均匀带电球壳的电势：半径 $R$、带电 $q$ 的球面，在球外（含球面本身）产生 $\dfrac{q}{4\pi\varepsilon_0 r}$，在球内处处产生常数 $\dfrac{q}{4\pi\varepsilon_0 R}$（"球壳内部势"）。电势是标量，三个球面电荷各算各的，直接相加。

**求 $U_A$：球 A 电势即 $R_1$ 处的总电势。** 先求每一球面电荷在 $R_1$ 产生的电势：

- $R_1$ 球面的电荷在 $R_1$ 产生电势：$U_1 = \dfrac{q}{4\pi\varepsilon_0 R_1}$；
- $R_2$、$R_3$ 面电荷在 $R_1$ 的电势（$R_1$ 都在它们内部，"都是球壳内部势"）：$U_1' = \dfrac{-q}{4\pi\varepsilon_0 R_2}$，$U_1'' = \dfrac{Q+q}{4\pi\varepsilon_0 R_3}$。

$$U_A = U_1 + U_1' + U_1'' = \frac{1}{4\pi\varepsilon_0}\left(\frac{q}{R_1} - \frac{q}{R_2} + \frac{Q+q}{R_3}\right)$$

与积分法一致。$U$–$r$ 曲线：$r < R_1$ 段水平（常数），往外按 $1/r$ 衰减——就是 9.7 节球壳那张图（PPT 原话："记得吗？"）。

**求 $U_B$：球壳 B 的电势就是 $R_3$ 处的总电势。**（壳是导体，$R_2$ 与 $R_3$ 之间等电势，在哪算都一样——PPT 追问"若选择计算 $R_2$ 处总电势，结果一样吗？必须的！"）

- $R_1$ 面电荷在 $R_3$ 处产生的电势（$R_3$ 在其外部，按点电荷）：$U_3 = \dfrac{q}{4\pi\varepsilon_0 R_3}$；
- $R_2$、$R_3$ 面上电荷在 $R_3$ 处产生的电势：$U_3' = \dfrac{-q}{4\pi\varepsilon_0 R_3}$（自身球面），$U_3'' = \dfrac{Q+q}{4\pi\varepsilon_0 R_3}$。

$$U_B = U_3 + U_3' + U_3'' = \frac{Q+q}{4\pi\varepsilon_0 R_3}$$

**方法对比**：解法一先求 $\vec{E}$ 再分段积分；电势叠加法绕过矢量合成，标量加法一步出结果，"壳内常数势"一条把导体内部的电势直接写出来，对多球面体系尤其省力。（PPT 内容转写，讲解由AI补全）

</details>

**例 3（PPT）** 面积 $S$ 的二块大导体板，板距 $d$，右板接地，左板维持电势 $U_0$。把带电 $Q$ 的导体薄板 c 插入正中间，求薄板 c 的电势（即 $t \to 0$）。

![PPT例3图：三块平行大导体板——左板接电源维持U0、中插厚t的带电薄板c、右板接地；电荷分布标注：左板内表面σ′，c左面−σ′、右面σ′+σ，右板内表面−(σ′+σ)](https://kevin13579me-1422109417.cos.ap-shanghai.myqcloud.com/img/1790052577320.jpg)

**解（PPT 解法）** 设左板右侧（内表面）电荷面密度 $\sigma'$，则静电平衡下电荷分布如图（值待定）：左板内表面 $\sigma'$；薄板 c 左面 $-\sigma'$、右面 $\sigma' + \sigma$（$\sigma \equiv Q/S$，c 两面之和恰为 $\sigma$）；右板内表面 $-(\sigma' + \sigma)$。相对面互为相反数（正是"保证 c 板内 $\vec{E} = 0$"的要求），两外表面不带电（接地）。

于是两道缝隙中的场都是各自相对面构成的整体（这对相对面之外的电荷在缝隙中场为零），均匀场强为

$$E_1 = \frac{\sigma'}{\varepsilon_0}\ \ (\text{左板与 c 之间})， \qquad E_2 = \frac{\sigma' + \sigma}{\varepsilon_0}\ \ (\text{c 与右板之间})$$

从左板走到接地的右板，电势降落在两道缝隙上（板距 $d$、c 居中，每段 $d/2$）：

$$U_0 = \frac{\sigma'}{\varepsilon_0}\cdot\frac{d}{2} + \frac{\sigma' + \sigma}{\varepsilon_0}\cdot\frac{d}{2} = \frac{d}{\varepsilon_0}\left(\sigma' + \frac{\sigma}{2}\right)$$

求得

$$\sigma' = \frac{\varepsilon_0 U_0}{d} - \frac{\sigma}{2}$$

薄板 c 的电势（相对接地的右板，只算右边一道缝隙）：

$$U_c = \frac{\sigma' + \sigma}{\varepsilon_0}\cdot\frac{d}{2} = \frac{U_0}{2} + \frac{dQ}{4\varepsilon_0 S}$$

PPT 点评：若 c 不带电，$U_c = U_0/2$；带电会影响电场！——修正项 $+\dfrac{dQ}{4\varepsilon_0 S}$ 就是带电薄板引起的。（解答与 PPT 一致，衔接步骤由AI补全）

