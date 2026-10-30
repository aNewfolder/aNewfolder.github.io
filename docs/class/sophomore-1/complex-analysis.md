# 复变函数与积分变换

- **任课教师**：徐翔
- **学期**：2026-2027 秋冬学期
- **分数构成**：平时 30% + 小测 20% + 期末 50%

---

## 课堂笔记

### 2026.9.16

**复变函数**

变量是复数的函数。笔记强调：复变**不属于微积分的延续**，是一门以复变量为研究对象的独立数学分支。

#### 1.1 复数

**复数的指数形式**

$$z = r\mathrm{e}^{\mathrm{i}\theta}$$

其中 $r$：模长；$\theta = \mathrm{Arg}\,z$：辐角（多值）；$\mathrm{arg}\,z$：辐角主值（单值）。（补充：基于欧拉公式 $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$；与代数形式 $z = x + \mathrm{i}y$ 的关系为 $r = \sqrt{x^2 + y^2}$。）

**辐角与主值**

$$\mathrm{Arg}\,z = \theta_0 + 2k\pi = \arg z + 2k\pi, \quad k \in \mathbb{Z}$$

主值 $\theta_0$ 满足 $-\pi < \theta_0 \le \pi$。

**辐角主值的分段计算公式**

$$
\arg z =
\begin{cases}
\arctan\dfrac{y}{x}, & x > 0 \quad \text{（一、四象限）} \\[3mm]
\pi + \arctan\dfrac{y}{x}, & x < 0,\ y > 0 \quad \text{（二象限）} \\[3mm]
-\pi + \arctan\dfrac{y}{x}, & x < 0,\ y < 0 \quad \text{（三象限）}
\end{cases}
$$

其中 $\arctan$ 取主值，值域 $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$。补充（笔记省略的边界情形）：$x = 0$（$z$ 在虚轴上）时 $\arg z = \dfrac{\pi}{2}$（$y > 0$）或 $-\dfrac{\pi}{2}$（$y < 0$）；$z$ 为负实数时 $\arg z = \pi$（主值范围 $-\pi < \theta_0 \le \pi$ 归入 $\pi$）。

#### 1.2 复数的运算

**辐角的乘法性质**

$$\mathrm{Arg}(z_1 z_2) = \mathrm{Arg}\,z_1 + \mathrm{Arg}\,z_2$$

辐角是多值的集合，等式按**集合意义**理解：右边两个集合中各取任一代表值相加，差一个 $2k\pi$ 后仍属于左边集合，反之亦然。

**乘方公式（棣莫弗公式）**

$$z^n = r^n \mathrm{e}^{\mathrm{i}n\theta} = r^n(\cos n\theta + \mathrm{i}\sin n\theta)$$

适用：$z = r\mathrm{e}^{\mathrm{i}\theta}$，$n$ 为正整数。

**复数的 $n$ 次方根**

开 $n$ 次方，就有 $n$ 个值。求 $w = \sqrt[n]{z}$：设 $w = r\mathrm{e}^{\mathrm{i}\theta}$（这里 $r$、$\theta$ 记 $w$ 的模与辐角），$z = R\mathrm{e}^{\mathrm{i}\Theta}$（$R$、$\Theta$ 记 $z$ 的模与辐角），两边同时 $n$ 次方：

$$r^n \mathrm{e}^{\mathrm{i}n\theta} = R\mathrm{e}^{\mathrm{i}\Theta} \;\Rightarrow\; r^n = R, \quad n\theta = \Theta$$

得

$$\mathrm{Arg}\,w = \frac{\arg z + 2k\pi}{n}, \quad k = 0, 1, 2, \dots, n-1$$

即 $w_k = \sqrt[n]{|z|}\,\mathrm{e}^{\mathrm{i}(\arg z + 2k\pi)/n}$。补充：模只有唯一解 $r = \sqrt[n]{R}$，辐角有 $n$ 个互不相同的值（$k$ 取到 $n$ 及以上开始重复，相邻两根辐角相差 $\dfrac{2\pi}{n}$），故恰有 $n$ 个根——它们均匀分布在半径 $\sqrt[n]{|z|}$ 的圆上，恰为该圆内接正 $n$ 边形的 $n$ 个顶点。

#### 1.3 复球面与无穷远点

**复球面（黎曼球面）与无穷远点**

图：以原点为球心的球面（黎曼球面示意图），$x$、$y$ 轴在赤道面，$z$ 轴竖直向上穿过球面顶点（北极）。

笔记要点：复平面上的点和球面上的点**一一对应**；引进无穷远点 $\infty$，则可以运算了。

补充（对应关系如何建立）：过北极 $N$ 与复平面上任一点 $P$ 作直线，交球面于唯一一点 $P'$（球极投影），$P$ 与 $P'$ 一一对应；北极 $N$ 自身对应无穷远点 $\infty$。复平面加上 $\infty$ 称扩充复平面，$\infty$ 参与运算的常见约定：$a \pm \infty = \infty$，$\dfrac{a}{\infty} = 0$，$a \cdot \infty = \infty$（$a \neq 0$），$|\infty| = +\infty$；$\infty$ 的辐角无意义。

#### 1.4 复平面上的点集

**开集**

开集：无边界，集合内所有点均为内点。（补充：即任一点 $z_0$ 属于 $G$，都存在邻域 $|z - z_0| < \rho$ 完全含于 $G$。）

**区域与闭区域**

区域：一个**连通**的开集（可以有洞）。区域 + 边界 = 闭区域；闭区域**不一定有界**（如全平面 $\mathbb{C}$、$\{z : |z| \ge 1\}$ 都是闭区域但无界）。

**简单曲线**

简单曲线：不相交（自身无交点、无重点）。补充：首尾相接且无其他自交点的称简单闭曲线（如圆、椭圆）。

**单连通与多连通区域**

单连通区域：无洞；多连通区域：有洞。（补充：如圆盘 $|z| < 1$ 单连通，圆环域 $r_1 < |z| < r_2$ 多连通。）

**复平面上的直线方程**

$$z = z_1 + t(z_2 - z_1), \quad t \in \mathbb{R}$$

其中 $z_1$、$z_2$ 为直线上两个已知点，$t$ 为实参数；$0 \le t \le 1$ 时为连接 $z_1$、$z_2$ 的线段。

### 2026.9.16 + 2026.9.18

#### 2.1 复变函数

**定义**

复变函数 $w = f(z)$，$w$ 可以有一个或多个（多值函数）。

- **象**：值域；**原象**：定义域。
- **单射**：$z_1 \neq z_2 \Rightarrow f(z_1) \neq f(z_2)$。
- **满射**：$\forall w \in G$（值域），$\exists z \in D$（定义域），使 $f(z) = w$。
- 单射 + 满射 $\Rightarrow$ 一一映射。

**例：曲线在映射下的像**

**例 1**：$C: x^2 + y^2 = 8$，$w = \dfrac{1}{z}$，求像 $\Gamma$。

设 $w = u + \mathrm{i}v$，反解出 $z$：

$$z = x + \mathrm{i}y = \frac{1}{w} = \frac{1}{u + \mathrm{i}v} = \frac{u - \mathrm{i}v}{u^2 + v^2} \;\Rightarrow\; x = \frac{u}{u^2 + v^2}, \quad y = \frac{-v}{u^2 + v^2}$$

代入 $x^2 + y^2 = 8$：$\dfrac{u^2 + v^2}{(u^2 + v^2)^2} = \dfrac{1}{u^2 + v^2} = 8$，即

$$\Gamma: u^2 + v^2 = \frac{1}{8}$$

（补充：像为以原点为圆心、半径 $\dfrac{1}{2\sqrt{2}}$ 的圆，且不含 $w = 0$——$z$ 有限时 $w = 1/z \neq 0$。）

**例 2**：$C: |z| = R$，$w = 2z + b$，求像 $\Gamma$。

$$w - b = 2z \;\Rightarrow\; |w - b| = 2|z| = 2R, \quad \Gamma: |w - b| = 2R$$

<details markdown="1">
<summary><strong>【FA：w 与 z 的实虚部】</strong></summary>

猜测正确：$w = f(z)$，$w = u + \mathrm{i}v$，$z = x + \mathrm{i}y$，即 $u = \mathrm{Re}\,w$、$v = \mathrm{Im}\,w$，$x = \mathrm{Re}\,z$、$y = \mathrm{Im}\,z$。$|w - b|$ 的几何意义是点 $w$ 到点 $b$ 的距离，所以 $|w - b| = 2R$ 就是以 $b$ 为圆心、$2R$ 为半径的圆：平移加伸缩，圆映成圆。

</details>

**例 3**：$C: z = (2 + \mathrm{i})t$，$w = z^2$，求像 $\Gamma$。

$$w = \left[(2 + \mathrm{i})t\right]^2 = (3 + 4\mathrm{i})t^2 \;\Rightarrow\; u = 3t^2, \ v = 4t^2 \;\Rightarrow\; \Gamma: v = \frac{4}{3}u$$

（补充：$u = 3t^2 \ge 0$，故像是自原点出发、斜率 $\dfrac{4}{3}$ 的射线；$t$ 与 $-t$ 映到同一点。）

**例 4**：$C: y = x$，$w = \bar{z}z$，求像 $\Gamma$。

$$w = \bar{z}(x + \mathrm{i}x) = |z|^2 = 2x^2 \;\Rightarrow\; \Gamma: v = 0, \ u \ge 0$$

即整条直线 $y = x$ 被压到非负实轴上。（解答由AI补全）

<details markdown="1">
<summary><strong>【FA：这几个例题的几何本质】</strong></summary>

共性套路：曲线 $C$ 是 $z$ 平面上满足某方程的点集，把映射 $w = f(z)$ 代进去（或反解出 $z$ 用 $u, v$ 表示），整理成 $u, v$ 的方程，就是像曲线 $\Gamma$ 的方程。几何上：

- 例 1：$w = 1/z$（反演）。模取倒数（$|w| = 1/|z|$）、辐角变号，圆内点跑到圆外；不过原点的圆仍映成圆。
- 例 2：$w = 2z + b$。放大 2 倍再平移 $b$，圆变成圆。
- 例 3：$w = z^2$。模平方、辐角加倍：$z = (2+\mathrm{i})t$ 的辐角恒为 $\arctan\dfrac{1}{2}$（$t > 0$），平方后加倍，得到方向为 $3 + 4\mathrm{i}$ 的射线。
- 例 4：$w = \bar z z = |z|^2$。不管 $z$ 在哪，输出都是非负实数，相当于把整个平面"压扁"到非负实轴上，信息只剩模长。

</details>

**极限与连续**

基本与微积分相同。

**例 5**：证：$f(z) = \dfrac{\mathrm{Re}\,z}{|z|}$ 当 $z \to 0$ 时极限不存在。

令 $z = x + \mathrm{i}y$，则 $f(z) = \dfrac{x}{\sqrt{x^2 + y^2}}$，即 $u(x, y) = \dfrac{x}{\sqrt{x^2 + y^2}}$，$v(x, y) = 0$。

<details markdown="1">
<summary><strong>【FA：补全——沿不同路径极限不同】</strong></summary>

让 $z$ 沿 $y = kx \to 0$：$f = \dfrac{x}{\sqrt{x^2 + k^2x^2}} = \dfrac{1}{\sqrt{1 + k^2}}$（$x \to 0^+$），极限随 $k$ 变——例如沿正实轴（$k = 0$）得 $1$，沿虚轴（$x = 0$）得 $0$。不同路径极限不同，故 $z \to 0$ 时极限不存在。（解答由AI补全）

</details>

**例 6**：讨论 $f(z) = \dfrac{z\,\mathrm{Im}(z^2)}{|z|^2}$（$z \neq 0$）的连续性。

令 $z = x + \mathrm{i}y$（$z^2 = x^2 - y^2 + 2\mathrm{i}xy$，$\mathrm{Im}(z^2) = 2xy$）：

$$f(z) = \frac{(x + \mathrm{i}y)\cdot 2xy}{x^2 + y^2} = \frac{2x^2 y}{x^2 + y^2} + \mathrm{i}\,\frac{2xy^2}{x^2 + y^2}$$

两个分量都是二元初等连续函数，故在 $z \neq 0$ 处连续。$z \to 0$ 时，令 $z = r\mathrm{e}^{\mathrm{i}\theta}$（$z^2 = r^2\mathrm{e}^{2\mathrm{i}\theta}$，$\mathrm{Im}(z^2) = r^2\sin 2\theta$）：

$$|f(z)| = \left|\frac{r\mathrm{e}^{\mathrm{i}\theta}\cdot r^2 \sin 2\theta}{r^2}\right| = r|\sin 2\theta| \le r \to 0$$

<details markdown="1">
<summary><strong>【FA：这步估计在干嘛】</strong></summary>

$|f(z)| = r|\sin 2\theta| \le r$ 与方向 $\theta$ 无关：无论 $z$ 沿哪个方向趋近 $0$，都有 $0 \le |f(z)| \le r \to 0$（夹逼），故 $\lim\limits_{z \to 0} f(z) = 0$。但 $f$ 在 $z = 0$ 原本没定义，若补充定义 $f(0) = 0$，则 $f$ 在全平面连续。（解答由AI补全）

</details>

### 2026.9.18

#### 2.2 解析函数

笔记要点：复变函数——能求一次导，就能求无穷次导（复变区别于实变的关键性质，学到泰勒级数时会看清）。

**导数**

$$f'(z_0) = \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}$$

可导必连续。

**例 1**：$f(z) = z^n$ 的导数（按定义）。

<details markdown="1">
<summary><strong>【FA：按定义求导】</strong></summary>

二项式展开 $(z + \Delta z)^n = z^n + nz^{n-1}\Delta z + \dbinom{n}{2}z^{n-2}(\Delta z)^2 + \cdots + (\Delta z)^n$，则

$$\frac{f(z + \Delta z) - f(z)}{\Delta z} = nz^{n-1} + \binom{n}{2}z^{n-2}\Delta z + \cdots + (\Delta z)^{n-1} \xrightarrow{\ \Delta z \to 0\ } nz^{n-1}$$

故 $f'(z) = nz^{n-1}$，与实变幂函数求导一致。（解答由AI补全）

</details>

**例 2**：$f(z) = x + 2y\mathrm{i}$ 是否可导？

$$\lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z} = \lim_{\Delta z \to 0} \frac{\Delta x + 2\Delta y\,\mathrm{i}}{\Delta x + \Delta y\,\mathrm{i}} \quad \text{不存在（分别取 } \Delta y = 0 \text{、} \Delta x = 0 \text{，结果不同）}$$

取 $\Delta z = \Delta x$（沿实轴方向）：比值为 $\dfrac{\Delta x}{\Delta x} = 1$；取 $\Delta z = \mathrm{i}\Delta y$（沿虚轴方向）：比值为 $\dfrac{2\mathrm{i}\Delta y}{\mathrm{i}\Delta y} = 2$。$1 \neq 2$，故 $f$ 处处不可导。

**例 3**：证：$w = f(z) = |z|^2$ 不可导。

$$\frac{\Delta w}{\Delta z} = \frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{(z + \Delta z)(\bar z + \overline{\Delta z}) - z\bar z}{\Delta z} = \bar z + \overline{\Delta z} + z\,\frac{\overline{\Delta z}}{\Delta z}$$

- $z = 0$：$\dfrac{\Delta w}{\Delta z} = \overline{\Delta z} \to 0 \Rightarrow f'(0) = 0$（原点处可导）。
- $z \neq 0$：取 $\Delta z = \Delta x \to 0$，$\dfrac{\Delta w}{\Delta z} \to \bar z + z$；取 $\Delta z = \mathrm{i}\Delta y \to 0$，$\dfrac{\Delta w}{\Delta z} \to \bar z - z$。

两个极限分别为 $z + \bar z = 2\,\mathrm{Re}\,z$ 与 $\bar z - z = -2\mathrm{i}\,\mathrm{Im}\,z$，仅当 $z = 0$ 时相等，故 $z \neq 0$ 时不可导。综上，$f(z) = |z|^2$ 仅在 $z = 0$ 可导，处处不解析。

<details markdown="1">
<summary><strong>【FA：差商与展开的来龙去脉】</strong></summary>

$\Delta w = f(z + \Delta z) - f(z)$ 是函数增量，$\Delta w / \Delta z$ 就是导数定义里的差商。把 $|z|^2$ 写成 $z\bar z$，则 $f(z + \Delta z) = (z + \Delta z)(\bar z + \overline{\Delta z})$，展开减去 $z\bar z$ 得 $z\overline{\Delta z} + \bar z\Delta z + \Delta z\,\overline{\Delta z}$，除以 $\Delta z$ 即 $\bar z + \overline{\Delta z} + z\,\dfrac{\overline{\Delta z}}{\Delta z}$。

关键在 $\dfrac{\overline{\Delta z}}{\Delta z}$：$\Delta z$ 沿实方向趋 $0$ 时恒为 $1$，沿虚方向时恒为 $-1$——正是它随方向变号，让 $z \neq 0$ 处极限不存在。实变里 $|x|^2 = x^2$ 处处可导；复变里 $|z|^2 = z\bar z$ 因带着 $\bar z$ 几乎处处不可导，可见复可导性强得多。

</details>

**解析函数**

- $f(z)$ 在 $z_0$ 解析 $\Rightarrow$ $f(z)$ 在 $z_0$ 的某邻域内可导——解析比可导强。
- $f(z)$ 在区域 $D$ 解析 $\Rightarrow$ $f(z)$ 在 $D$ 内处处解析 $\equiv f(z)$ 在 $D$ 内可导。
- 若 $D$ 为整个复平面，称 $f(z)$ 为**整函数**。
- 不解析的点称为**奇点**，但可能可导（如 $|z|^2$ 在 $z = 0$ 可导却不解析）。

**例 4**：讨论 $f(z) = \dfrac{1}{z}$ 的解析性。

$$\frac{\mathrm{d}w}{\mathrm{d}z} = -\frac{1}{z^2} \quad (z \neq 0)$$

故除 $z = 0$ 外处处解析（$z = 0$ 是奇点）。

#### 2.3 解析函数的充要条件

$f(z)$ 在点 $z$ 可导 $\iff$

① $u(x, y)$、$v(x, y)$ 在 $(x, y)$ 可微；
② C-R 条件（柯西–黎曼方程）：

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

此时

$$f'(z) = \frac{\partial u}{\partial x} + \mathrm{i}\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - \mathrm{i}\frac{\partial u}{\partial y}$$

（提醒：仅满足 C-R 条件不够，还需 $u$、$v$ 可微——如偏导数连续即可保证可微——两者合起来才与可导等价。）

### 2026.9.23

#### 复习 2.3：一点可导的充要条件

$f(z) = u(x, y) + \mathrm{i}v(x, y)$ 在 $D$ 内一点 $z = x + \mathrm{i}y$ 可导的充要条件：$u_x$、$u_y$、$v_x$、$v_y$ 在 $(x, y)$ 存在且满足 C-R 方程。（笔记在此定理前有一两字旁注，字迹辨认不清，暂记【?】。）

（上节课讲的：在区域 $D$ 内，可导 $\iff$ 解析。）

注：若 $u(x, y)$ 在 $(x, y)$ 点有一阶连续偏导，则在 $(x, y)$ 必可微。

<details markdown="1">
<summary><strong>【FA：与 2.3 两种表述的衔接】</strong></summary>

上一节 2.3 的版本是"$u$、$v$ 在该点**可微** + C-R $\iff$ 可导"，复习版写成"四个偏导存在 + C-R"。偏导**存在**保证不了 $u$、$v$ 可微，所以严格的充要条件仍是 2.3 的版本；不过只要四个偏导在该点**连续**（上面"注"：连续偏导 $\Rightarrow$ 可微），再配 C-R 就足以判出可导——这也是实际做题最常用的充分条件。

</details>

**例 1**：$w = \bar z = x - \mathrm{i}y$：处处连续，处处不可导，处处不解析。

（补充：$u_x = 1 \ne v_y = -1$，C-R 方程处处不满足，故处处不可导，也就处处不解析；连续性显然。）

**例 2**：$f(z) = u + \mathrm{i}v$ 在 $D$ 内解析且 $f'(z) \ne 0$ $\Rightarrow$ 曲线族 $u(x, y) = C_1$ 与 $v(x, y) = C_2$ **正交**（正交：在交点处的切线垂直）。

证：$u(x, y) = C_1$ 在 $(x, y)$ 处切线斜率 $k_u = -\dfrac{u_x}{u_y}$，同理 $k_v = -\dfrac{v_x}{v_y}$。

（斜率来历：$u \equiv C_1 \Rightarrow y = y(x)$，$u(x, y(x)) = C_1$，对 $x$ 求导得 $u_x + u_y\,y'(x) = 0$，$\therefore\ y'(x) = -\dfrac{u_x}{u_y}$。）

$$k_u k_v = \frac{u_x\, v_x}{u_y\, v_y} \overset{\text{C-R}}{=} \frac{v_y \cdot (-u_y)}{u_y\, v_y} = -1$$

即两族曲线在交点处的切线垂直。

**解析函数退化为常数的几个充分条件**

1. 解析且导数恒为 $0$；
2. 实部、虚部、模、辐角中有一个恒为常数；
3. $\overline{f(z)}$ 也解析。

（Tip：若表达式里含有 $\bar z$，则不解析。）

证：$f = u + \mathrm{i}v$。由 $x = \dfrac{z + \bar z}{2}$、$y = \dfrac{z - \bar z}{2\mathrm{i}}$ 得 $\dfrac{\partial x}{\partial \bar z} = \dfrac{1}{2}$，$\dfrac{\partial y}{\partial \bar z} = -\dfrac{1}{2\mathrm{i}} = \dfrac{\mathrm{i}}{2}$，链式法则

$$\frac{\partial f}{\partial \bar z} = \frac{\partial f}{\partial x}\cdot\frac{\partial x}{\partial \bar z} + \frac{\partial f}{\partial y}\cdot\frac{\partial y}{\partial \bar z} = \frac{1}{2}(u_x + \mathrm{i}v_x) + \frac{\mathrm{i}}{2}(u_y + \mathrm{i}v_y) = \frac{1}{2}(u_x - v_y) + \frac{\mathrm{i}}{2}(v_x + u_y)$$

若 $f(z)$ 解析，由 C-R 方程两个括号均为零，故 $\dfrac{\partial f}{\partial \bar z} = 0$——解析函数一定与 $\bar z$ 无关。

<details markdown="1">
<summary><strong>【FA：三条为什么都推出常数】</strong></summary>

- 条件 1：$f' = u_x + \mathrm{i}v_x \equiv 0$ 给出 $u_x = v_x = 0$，C-R 再给出 $u_y = -v_x = 0$、$v_y = u_x = 0$：四个偏导全为零，$u$、$v$ 在连通区域 $D$ 内只能是常数。
- 条件 2：以实部为例，$u \equiv C$ 时 $u_x = u_y = 0$，由 C-R 得 $v_x = v_y = 0$，同条件 1；虚部同理，模、辐角为常数的情形推导稍繁，结论相同。
- 条件 3：$\overline{f(z)} = u - \mathrm{i}v$ 也解析，则它满足"反向 C-R"：$u_x = -v_y$，$u_y = v_x$；与 $f$ 的正向 C-R 相加得 $u_x = u_y = v_x = v_y = 0$，故 $f$ 恒为常数。

这也顺带解释了 Tip：解析函数与 $\bar z$ 无关，所以表达式里真含 $\bar z$ 的（$\bar z$、$|z|^2 = z\bar z$、$\mathrm{Im}\,z$ 等）都不解析。

</details>

#### 2.4 解析函数与调和函数的关系

解析性只适用于复函数（由 C-R 方程刻画）；想适配实函数需其他方法，而调和函数可定义于实函数。

**定义（调和函数）**：$u(x, y)$ 在 $D$ 内**调和**：$u(x, y)$ 在 $D$ 内有二阶连续偏导，且

$$\Delta u \equiv u_{xx} + u_{yy} = 0$$

（即满足 Laplace 方程。）

**定理**：$f(z) = u + \mathrm{i}v$ 解析 $\Rightarrow$ $u$、$v$ 均调和。

证：$f(z)$ 在 $D$ 内解析，得 $u_x = v_y$，$v_x = -u_y$（C-R 方程）。再求偏导：$u_{xx} = v_{xy}$，$v_{xy} = -u_{yy}$，得 $u_{xx} + u_{yy} = 0$；$v$ 同理。

**定义（共轭调和函数）**：若 $u$、$v$ 在 $D$ 内调和且满足 C-R 方程，则称 $v$ 是 $u$ 的**共轭调和函数**。

**定理**：已知共轭调和函数中的一个，可用 C-R 方程求得另一个，从而构成一个解析函数。

**例**：设 $u(x, y) = x^2 - y^2 + xy$（调和），求解析函数 $f(z) = u + \mathrm{i}v$ 使 $f(0) = 0$。

**解 1°（偏积分法）**：$u_x = 2x + y$，$u_y = -2y + x$。由 $v_y = u_x$：

$$v = \int (2x + y)\,\mathrm{d}y = 2xy + \frac{1}{2}y^2 + c(x)$$

对 $x$ 求导并代 C-R 方程：$v_x = 2y + c'(x) = -u_y = 2y - x$，故 $c'(x) = -x$，$c(x) = -\dfrac{1}{2}x^2 + C$，再代入 $f(0) = 0$ 定常数。

<details markdown="1">
<summary><strong>【FA：1° 收尾——定常数、写成 z 的式子】</strong></summary>

把 $c(x) = -\dfrac{1}{2}x^2 + C$ 代回，得 $v = 2xy + \dfrac{1}{2}y^2 - \dfrac{1}{2}x^2 + C$，于是

$$f(z) = (x^2 - y^2 + xy) + \mathrm{i}\left(2xy + \frac{y^2 - x^2}{2}\right) + \mathrm{i}C$$

代入 $f(0) = 0$ 得 $\mathrm{i}C = 0$，即 $C = 0$。展开 $\left(1 - \dfrac{\mathrm{i}}{2}\right)z^2 = (x^2 - y^2 + xy) + \mathrm{i}\left(2xy + \dfrac{y^2 - x^2}{2}\right)$，可见结果与 3° 一致。（解答由AI补全）

</details>

**解 2°（线积分法）**：因 $u_{xx} + u_{yy} = 0$，即 $\dfrac{\partial u_x}{\partial x} = \dfrac{\partial (-u_y)}{\partial y}$（旁注字迹不清：【?】）。

<details markdown="1">
<summary><strong>【FA：2° 的原理与补全——线积分法】</strong></summary>

C-R 要的是 $v_x = -u_y$、$v_y = u_x$，也就是 $\mathrm{d}v = -u_y\,\mathrm{d}x + u_x\,\mathrm{d}y$。微分形式 $P\,\mathrm{d}x + Q\,\mathrm{d}y$ 恰好是某个函数的全微分（"恰当"）的条件是 $\dfrac{\partial P}{\partial y} = \dfrac{\partial Q}{\partial x}$，在这里即 $-u_{yy} = u_{xx}$——恰好就是 $u$ 的调和性。所以在单连通区域内曲线积分与路径无关，沿"先横后竖"的折线从 $(0, 0)$ 积到 $(x, y)$：

$$v(x, y) = \int_0^x -u_y(t, 0)\,\mathrm{d}t + \int_0^y u_x(x, s)\,\mathrm{d}s = \int_0^x (-t)\,\mathrm{d}t + \int_0^y (2x + s)\,\mathrm{d}s = -\frac{x^2}{2} + 2xy + \frac{y^2}{2}$$

与 1° 的结果一致（其中 $u_y(t, 0) = -t$，$u_x(x, s) = 2x + s$；积分起点不同只会差一个常数，最后被 $f(0) = 0$ 吸收）。（解答由AI补全）

</details>

**解 3°（先求导数）**：

$$f'(z) = u_x + \mathrm{i}v_x = u_x - \mathrm{i}u_y = 2x + y - \mathrm{i}(-2y + x) \xrightarrow{\ \text{凑 } z \,=\, x + \mathrm{i}y\ } 2(x + \mathrm{i}y) - \mathrm{i}(x + \mathrm{i}y) = (2 - \mathrm{i})z$$

$$\Rightarrow f(z) = \left(1 - \frac{\mathrm{i}}{2}\right)z^2 + C, \qquad \text{代入 } f(0) = 0 \text{ 得 } C = 0$$

#### 2.5 初等解析函数

**1. 指数函数**

$$\mathrm{e}^z = \mathrm{e}^{x + \mathrm{i}y} = \mathrm{e}^x(\cos y + \mathrm{i}\sin y)$$

性质：

1. 全平面解析，$\mathrm{e}^z \ne 0$，$(\mathrm{e}^z)' = \mathrm{e}^z$（罗尔中值定理不成立）；
2. $\mathrm{e}^{z + w} = \mathrm{e}^z \cdot \mathrm{e}^w$；
3. 周期函数，$T = 2\pi\mathrm{i}$；
4. 洛必达法则成立；
5. $\lim\limits_{z \to \infty} \mathrm{e}^z$ 不存在；$\mathrm{e}^{\frac{\pi}{2}\mathrm{i}} = \mathrm{i}$，$\mathrm{e}^{\pi\mathrm{i}} = -1$，$\mathrm{e}^{2\pi\mathrm{i}} = 1$。

复合：$\exp(\mathrm{e}^z) = \exp\left(\mathrm{e}^x(\cos y + \mathrm{i}\sin y)\right) = \mathrm{e}^{\mathrm{e}^x\cos y}\cos(\mathrm{e}^x\sin y) + \mathrm{i}\,\mathrm{e}^{\mathrm{e}^x\cos y}\sin(\mathrm{e}^x\sin y)$

**2. 三角函数**

定义：

$$\sin z = \frac{\mathrm{e}^{\mathrm{i}z} - \mathrm{e}^{-\mathrm{i}z}}{2\mathrm{i}}, \qquad \cos z = \frac{\mathrm{e}^{\mathrm{i}z} + \mathrm{e}^{-\mathrm{i}z}}{2}$$

（来历：$\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$，$\mathrm{e}^{-\mathrm{i}\theta} = \cos\theta - \mathrm{i}\sin\theta$ $\Rightarrow$ $\sin\theta = $（FA）、$\cos\theta = $（FA）$\Rightarrow$ 把 $\theta$ 换为 $z$。）

<details markdown="1">
<summary><strong>【FA：sinθ、cosθ 的反解】</strong></summary>

两式相减、相加：

$$\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}, \qquad \cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$$

把实角 $\theta$ 换成复变量 $z$，就得到正文里 $\sin z$、$\cos z$ 的定义。

</details>

求导规律仍成立（补充：$(\sin z)' = \cos z$，$(\cos z)' = -\sin z$，由指数形式直接求导即得）；$\mathrm{e}^{\mathrm{i}z} = \cos z + \mathrm{i}\sin z$，$\sin z$、$\cos z$ 全平面解析。除半角公式外，三角恒等式均成立；奇偶性成立，周期不变。但 $|\sin z|$、$|\cos z|$ 无界。

**3. 双曲函数**

$$\mathrm{ch}\,z = \frac{\mathrm{e}^z + \mathrm{e}^{-z}}{2}, \qquad \mathrm{sh}\,z = \frac{\mathrm{e}^z - \mathrm{e}^{-z}}{2}$$

（相当于把三角函数定义式里的 $\mathrm{i}$ 都去掉。）

全平面解析；$(\mathrm{ch}\,z)' = \mathrm{sh}\,z$，$(\mathrm{sh}\,z)' = \mathrm{ch}\,z$；$T = 2\pi\mathrm{i}$；$\mathrm{ch}\,z$ 为偶，$\mathrm{sh}\,z$ 为奇。

$$\mathrm{sh}(\mathrm{i}z) = \mathrm{i}\sin z, \qquad \mathrm{ch}(\mathrm{i}z) = \cos z, \qquad \sin(\mathrm{i}z) = \mathrm{i}\,\mathrm{sh}\,z, \qquad \cos(\mathrm{i}z) = \mathrm{ch}\,z$$

**4. 对数函数**

若 $\mathrm{e}^w = z$，则 $w = \mathrm{Ln}\,z$。

记 $w = u + \mathrm{i}v$，$z = r\mathrm{e}^{\mathrm{i}\theta}$，则 $\mathrm{e}^{u + \mathrm{i}v} = \mathrm{e}^u\,\mathrm{e}^{\mathrm{i}v} = r\,\mathrm{e}^{\mathrm{i}\theta}$，得

$$\mathrm{e}^u = r \ \Rightarrow\ u = \ln r = \ln|z|; \qquad v = \theta = \mathrm{Arg}\,z = \arg z + 2k\pi$$

$$\Rightarrow\ w = \mathrm{Ln}\,z = \ln|z| + \mathrm{i}(\arg z + 2k\pi) = \ln z + 2k\pi\mathrm{i}$$

定义 $\ln z = \ln|z| + \mathrm{i}\arg z$ 为**主值支**。

例：$\mathrm{Ln}(-1) = \ln|-1| + \mathrm{i}\arg(-1) + 2k\pi\mathrm{i} = (2k + 1)\pi\mathrm{i}$。

定义域 $0 < |z| < +\infty$，为无穷多值函数（但非周期）。有

$$\mathrm{Ln}(z_1 z_2) = \mathrm{Ln}\,z_1 + \mathrm{Ln}\,z_2, \qquad \mathrm{Ln}\left(\frac{z_1}{z_2}\right) = \mathrm{Ln}\,z_1 - \mathrm{Ln}\,z_2$$

除原点和负实轴外，$\ln z$ 在复平面内处处解析。

$$(\ln z)' = (\mathrm{Ln}\,z)' = \frac{1}{z}$$

### 2026.9.30

#### 2.5 初等解析函数（续）

**4. 对数函数（续）**

- **为消除间断，割去负实轴**：主值支的辐角 $\arg z$ 仅在负实轴上不连续——从下半平面趋近负实轴时 $\lim\limits_{y \to 0^-} \arg z = -\pi$（从上方趋近则趋于 $+\pi$）。割去负实轴后 $\arg z$ 处处连续，$\ln z$ 随之在割开的复平面内解析。
- **集合等式要小心**：$\mathrm{Ln}\,z^2 \ne 2\,\mathrm{Ln}\,z \ne \mathrm{Ln}\,z + \mathrm{Ln}\,z$。按集合理解：$\mathrm{Ln}\,z + \mathrm{Ln}\,z$ 的虚部里出现的是 $2k_1\pi$ 和 $2k_2\pi$ 两个独立的整数。

<details markdown="1">
<summary><strong>【FA：Ln z²、2Ln z、Ln z + Ln z 的集合关系辨析】</strong></summary>

多值函数按**集合**比较（记 $\arg z = \theta \in (-\pi, \pi]$）：

- $\mathrm{Ln}\,z^2 = \ln|z|^2 + \mathrm{i}(2\theta + 2k\pi)$，$k$ 取遍全体整数；
- $2\,\mathrm{Ln}\,z = 2\ln|z| + \mathrm{i}(2\theta + 4k\pi)$——分支间隔 $4\pi$，只取到 $\mathrm{Ln}\,z^2$ 里一半的分支，故 $2\,\mathrm{Ln}\,z \subsetneq \mathrm{Ln}\,z^2$；
- $\mathrm{Ln}\,z + \mathrm{Ln}\,z = 2\ln|z| + \mathrm{i}(2\theta + 2k_1\pi + 2k_2\pi)$——两个独立整数相加可取遍 $2k\pi$，恰与 $\mathrm{Ln}\,z^2$ 相等。

一句话：$\mathrm{Ln}\,z^2 = \mathrm{Ln}\,z + \mathrm{Ln}\,z \ne 2\,\mathrm{Ln}\,z$，"自加一次"与"乘 2"在多值世界里不是一回事。（FA 补充）

</details>

**5. 幂函数**

$$w = z^\alpha = \mathrm{e}^{\alpha \mathrm{Ln}\,z}, \qquad z \in \mathbb{C}$$

按指数 $\alpha$ 的类型分四种情形（利用 $\mathrm{Ln}\,z = \ln|z| + \mathrm{i}\arg z + \mathrm{i}2k\pi$）：

1. **$\alpha \in \mathbb{Z}$**：$w = \mathrm{e}^{\alpha(\ln|z| + \mathrm{i}\arg z + \mathrm{i}2k\pi)} = \mathrm{e}^{\alpha(\ln|z| + \mathrm{i}\arg z)} \cdot \mathrm{e}^{\mathrm{i}2k\pi\alpha} = \mathrm{e}^{\alpha \ln z}$。$\alpha$ 为整数时 $\mathrm{e}^{\mathrm{i}2k\pi\alpha} = 1$，多值性消失，为**单值**函数，即通常的 $z^\alpha$；
2. **$\alpha = \dfrac{1}{n}$**：$z^{\frac{1}{n}} = \mathrm{e}^{\frac{1}{n}(\ln|z| + \mathrm{i}\arg z)} \cdot \mathrm{e}^{\mathrm{i}\frac{2k\pi}{n}}$，$k = 0, 1, \ldots, n-1$，**有限多值**（$n$ 个值，即 $n$ 次方根）；
3. **$\alpha = \dfrac{m}{n}$**（$n > 1$，$n$、$m$ 互质）：$z^{\frac{m}{n}} = \mathrm{e}^{\frac{m}{n}\ln z} \cdot \mathrm{e}^{\mathrm{i}\frac{2k\pi m}{n}}$，同样 $k = 0, 1, \ldots, n-1$ 取 $n$ 个值（$m$、$n$ 互质保证不重不漏）；
4. **$\alpha$ 为无理数或虚部不为零的复数**：$\mathrm{e}^{\mathrm{i}2k\pi\alpha}$ 永不重复，**无穷多值**。

在原点与 $x$ 轴负半轴之外解析，且

$$(z^\alpha)' = \alpha z^{\alpha - 1}$$

#### 三、复变函数的积分

**定义**：$S = \displaystyle\int_C f(z)\,\mathrm{d}z$，$C$ 为曲线。设 $C$ 的参数方程为 $z = z(t)$，$t \in [\alpha, \beta]$，则

$$\int_C f(z)\,\mathrm{d}z = \int_\alpha^\beta f\left(z(t)\right) z'(t)\,\mathrm{d}t$$

即当 $f(z) = u(x)$ 只取实值、$C$ 退化为 $x$ 轴上的区间时，复积分就是通常的定积分。

**定理**：设 $f(z) = u + \mathrm{i}v$ 在 $C$ 上连续，则 $f(z)$ 沿 $C$ 可积，且

$$\int_C f(z)\,\mathrm{d}z = \int_C u\,\mathrm{d}x - v\,\mathrm{d}y + \mathrm{i}\int_C v\,\mathrm{d}x + u\,\mathrm{d}y = \int_C (u + \mathrm{i}v)\,(\mathrm{d}x + \mathrm{i}\,\mathrm{d}y)$$

**性质**

- $|\mathrm{d}z| = \mathrm{d}s$（弧长微元），复积分属于第二类曲线积分；
- $C$：逐段光滑的有向曲线；
- 线性性、可加性、反向取负；
- 估值不等式：$\left|\int_C f(z)\,\mathrm{d}z\right| \le \int_C |f(z)|\,\mathrm{d}s \le Ml$，其中 $|f(z)| \le M$，$l$ 为 $C$ 的弧长。

**e.g.** $\int_C |z|\,\mathrm{d}z$，$C$ 为从 $\mathrm{i}$ 到 $-\mathrm{i}$ 的路径（FA：补充更详细过程）。图：$C_1$ 为沿虚轴的直线段（自 $\mathrm{i}$ 向下到 $-\mathrm{i}$）；$C_2$ 为左半平面的半圆周（自 $\mathrm{i}$ 经 $-1$ 到 $-\mathrm{i}$）。

$$C_1:\ z = -\mathrm{i}t,\ t \in [-1, 1]\ \Rightarrow\ \int_{C_1} |z|\,\mathrm{d}z = \int_{-1}^{1} \left|-\mathrm{i}t\right| \mathrm{d}(-\mathrm{i}t) = -\mathrm{i}$$

$$C_2:\ z = \mathrm{e}^{\mathrm{i}\theta},\ \theta: \frac{\pi}{2} \to \frac{3\pi}{2}\ \Rightarrow\ \int_{C_2} |z|\,\mathrm{d}z = \int_{\frac{\pi}{2}}^{\frac{3\pi}{2}} \left|\mathrm{e}^{\mathrm{i}\theta}\right| \mathrm{d}\left(\mathrm{e}^{\mathrm{i}\theta}\right) = \int_{\frac{\pi}{2}}^{\frac{3\pi}{2}} \mathrm{e}^{\mathrm{i}\theta} \cdot \mathrm{i}\,\mathrm{d}\theta = -2\mathrm{i}$$

<details markdown="1">
<summary><strong>【FA：∫|z|dz 两路径的详细过程与结论】</strong></summary>

$C_1$：$z = -\mathrm{i}t$，$t$ 从 $-1$（对应 $\mathrm{i}$）到 $1$（对应 $-\mathrm{i}$），$\mathrm{d}z = -\mathrm{i}\,\mathrm{d}t$，$|z| = |-\mathrm{i}t| = |t|$：

$$\int_{C_1} |z|\,\mathrm{d}z = \int_{-1}^{1} |t| \cdot (-\mathrm{i})\,\mathrm{d}t = -\mathrm{i}\int_{-1}^{1} |t|\,\mathrm{d}t = -\mathrm{i} \cdot 2\int_0^1 t\,\mathrm{d}t = -\mathrm{i}$$

$C_2$：$z = \mathrm{e}^{\mathrm{i}\theta}$，$\theta$ 从 $\dfrac{\pi}{2}$ 到 $\dfrac{3\pi}{2}$，$\mathrm{d}z = \mathrm{i}\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{d}\theta$，$|z| = 1$：

$$\int_{C_2} |z|\,\mathrm{d}z = \int_{\frac{\pi}{2}}^{\frac{3\pi}{2}} \mathrm{i}\,\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{d}\theta = \left[\mathrm{e}^{\mathrm{i}\theta}\right]_{\frac{\pi}{2}}^{\frac{3\pi}{2}} = \mathrm{e}^{\frac{3\pi\mathrm{i}}{2}} - \mathrm{e}^{\frac{\pi\mathrm{i}}{2}} = -\mathrm{i} - \mathrm{i} = -2\mathrm{i}$$

**结论**：两条路径的积分值不同（$-\mathrm{i} \ne -2\mathrm{i}$）——$|z|$ 不是 $z$ 的解析函数，积分一般与路径有关。（解答由AI补全）

</details>

**e.g.**（作为定理记住）$I = \displaystyle\oint_C \frac{\mathrm{d}z}{(z - z_0)^n}$（$n \in \mathbb{Z}$），$C:\ |z - z_0| = r > 0$。

参数化 $z = z_0 + r\mathrm{e}^{\mathrm{i}\theta}$，$\theta \in [0, 2\pi]$：

$$I = \int_0^{2\pi} \frac{1}{\left(r\mathrm{e}^{\mathrm{i}\theta}\right)^n}\,\mathrm{d}\left(z_0 + r\mathrm{e}^{\mathrm{i}\theta}\right) = \int_0^{2\pi} r^{-n}\,\mathrm{e}^{-\mathrm{i}n\theta} \cdot r\mathrm{e}^{\mathrm{i}\theta} \cdot \mathrm{i}\,\mathrm{d}\theta = r^{1-n}\,\mathrm{i}\int_0^{2\pi} \mathrm{e}^{\mathrm{i}(1-n)\theta}\,\mathrm{d}\theta$$

1. $n = 1$ 时，$I = 2\pi\mathrm{i}$；
2. $n \ne 1$ 时，$I = r^{1-n} \cdot \mathrm{i} \cdot \dfrac{\mathrm{e}^{\mathrm{i}(1-n)\theta}}{\mathrm{i}(1-n)} \Bigg|_0^{2\pi} = 0$（$\mathrm{e}^{\mathrm{i}(1-n) \cdot 2\pi} = 1$，上下限处函数值相同）。

<details markdown="1">
<summary><strong>【FA：这个基本积分为什么重要】</strong></summary>

被积函数在圆内只有唯一奇点 $z_0$：$n = 1$（最"奇"的一档）给出 $2\pi\mathrm{i}$，且与半径 $r$ 无关；其余幂次全为零。这一"只认奇点、与圆的大小无关"的结果是后面柯西积分公式与洛朗展开的出发点，所以课上要求作为定理记住。（FA 补充）

</details>

**e.g.**（FA）$|z| = 1$ 上比较两个"长得像"的积分：

$$\oint_{|z|=1} \left|\frac{\mathrm{d}z}{z}\right| = \oint_{|z|=1} \frac{|\mathrm{d}z|}{|z|} = 2\pi, \qquad \oint_{|z|=1} \frac{\mathrm{d}z}{|z|} = \oint_{|z|=1} \frac{|\mathrm{d}z|}{z} = 0$$

<details markdown="1">
<summary><strong>【FA：|dz| 与 dz 一字之差】</strong></summary>

关键区分：$|\mathrm{d}z| = \mathrm{d}s$ 是**弧长微元**（正实数），$\mathrm{d}z$ 是**复增量**。取单位圆 $z = \mathrm{e}^{\mathrm{i}\theta}$，$\theta \in [0, 2\pi]$，则 $|\mathrm{d}z| = \mathrm{d}\theta$：

- $\displaystyle\oint \left|\frac{\mathrm{d}z}{z}\right| = \oint \frac{|\mathrm{d}z|}{|z|} = \int_0^{2\pi} \frac{\mathrm{d}\theta}{1} = 2\pi$——对模积分，结果是正实数（恰为圆周长），这是对弧长的第一类曲线积分而非复积分；
- $\displaystyle\oint \frac{\mathrm{d}z}{|z|} = \int_0^{2\pi} \frac{\mathrm{i}\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{d}\theta}{1} = \left[\mathrm{e}^{\mathrm{i}\theta}\right]_0^{2\pi} = 0$；
- $\displaystyle\oint \frac{|\mathrm{d}z|}{z} = \int_0^{2\pi} \frac{\mathrm{d}\theta}{\mathrm{e}^{\mathrm{i}\theta}} = \int_0^{2\pi} \mathrm{e}^{-\mathrm{i}\theta}\,\mathrm{d}\theta = 0$。

后两个才是复积分。加不加绝对值一字之差，积分类型与结果完全不同。（解答由AI补全）

</details>

**e.g.**（FA）$\int_C z^2\,\mathrm{d}z$，$C$ 为从 $-1$ 到 $1$ 的路径。图：$C_1$ 为 $x$ 轴上的直线段（方向向右）；$C_2$ 为上半平面的半圆周（自 $-1$ 经上方到 $1$）。

预告：柯西积分定理——积分何时与路径无关。

<details markdown="1">
<summary><strong>【FA：两条路径验证 ∫z²dz 同值】</strong></summary>

- 沿 $C_1$（直线段，$z = x$，$x$ 从 $-1$ 到 $1$）：$\displaystyle\int_{-1}^{1} x^2\,\mathrm{d}x = \frac{2}{3}$；
- 沿 $C_2$（上半圆周，$z = \mathrm{e}^{\mathrm{i}\theta}$，$\theta$ 从 $\pi$ 到 $0$）：$\displaystyle\int_\pi^0 \mathrm{e}^{2\mathrm{i}\theta} \cdot \mathrm{i}\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{d}\theta = \mathrm{i}\left[\frac{\mathrm{e}^{3\mathrm{i}\theta}}{3\mathrm{i}}\right]_\pi^0 = \frac{1 - \mathrm{e}^{3\pi\mathrm{i}}}{3} = \frac{1 - (-1)}{3} = \frac{2}{3}$。

两条路径同值——因为 $z^2$ 全平面解析。"解析 $\Rightarrow$ 积分与路径无关"正是下节课柯西积分定理要讲的内容。（解答由AI补全）

</details>

### 2026.10.9（3.2 柯西积分定理 · 3.3 柯西积分公式）

#### 3.2 柯西积分定理（解析函数可以定义原函数）

**定理**：$f(z)$ 在 $D$ 内处处解析，则 $f(z)$ 沿 $D$ 内封闭曲线 $C$ 积分为零。

**弱化**：$f(z)$ 在 $D$ 内解析、$D + C$（边界）上连续，则 $\oint_C f(z)\,\mathrm{d}z = 0$。

**证**：$z = x + \mathrm{i}y$，$f(z) = u + \mathrm{i}v$，则

$$\oint_C f(z)\,\mathrm{d}z = \underbrace{\int_C u\,\mathrm{d}x - v\,\mathrm{d}y}_{①} + \mathrm{i}\underbrace{\int_C v\,\mathrm{d}x + u\,\mathrm{d}y}_{②}$$

由 $f(z)$ 连续，$f'(z) = u_x + \mathrm{i}v_x = v_y - \mathrm{i}u_y$（C-R 方程：$u_x = v_y$，$u_y = -v_x$）。

用 Green 公式 $\oint_C P\,\mathrm{d}x + Q\,\mathrm{d}y = \iint_D \left(\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y$，则

$$① = \iint_D \left(-\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)\mathrm{d}x\mathrm{d}y = \iint_D \left(u_y - u_y\right)\mathrm{d}x\mathrm{d}y = 0$$

由 C-R 方程 $-\dfrac{\partial v}{\partial x} = \dfrac{\partial u}{\partial y}$，两项相消；② 同理。

**推论**：$f(z)$ 在 $D$ 内解析，$C$ 在 $D$ 内，则积分路径无关。

**拓展：多连通区域**，规定曲线**左侧为区域内部**为正方向：

图：大圆 $C_1$ 内含小圆 $C_2$ 的圆环域。$\partial D = C_1 - C_2$（$C_2$ 本身逆时针为正，但要求 $C_1$、$C_2$ 之间区域的边界都在走向左侧，故外沿逆时针、内沿顺时针，写成相减）：

$$\oint_{C_1} f(z)\,\mathrm{d}z = \oint_{C_2} f(z)\,\mathrm{d}z$$

**复合**：$\displaystyle\oint_C f(z)\,\mathrm{d}z = \oint_{C_1} f(z)\,\mathrm{d}z + \oint_{C_2} f(z)\,\mathrm{d}z + \cdots$（复合闭路定理）

**原函数定理**：固定 $z_0 \in D$，则定义

$$F(z) = \int_{z_0}^{z} f(\xi)\,\mathrm{d}\xi \qquad (z \in D)$$

则 $F(z)$ 也解析，$F'(z) = f(z)$。

条件：解析 / 单连通区域 $D$ 上连续 / 任一围线积分为 0。

$\Phi(z) = F(z) + C = \displaystyle\int_{z_0}^{z} f(\xi)\,\mathrm{d}\xi + C$ 为原函数。

$\Rightarrow$ **N-L 公式**：$\displaystyle\int_{z_0}^{z_1} f(\xi)\,\mathrm{d}\xi = \Phi(z_1) - \Phi(z_0)$

**e.g.** 单连通区域 $D:\ -\pi < \arg z < \pi$ 内，求 $f(z) = \dfrac{1}{z}$ 的原函数：

$$\int_1^z \frac{1}{\xi}\,\mathrm{d}\xi = \ln z - \ln 1 = \ln z$$

#### 3.3 柯西积分公式

**分析**：$z_0 \in D$、$f(z)$ 在 $D$ 内解析，则（把 $z_0$ 挖去后用复合闭路定理，积分移到以 $z_0$ 为心的小圆上）

$$\oint_C \frac{f(z)}{z - z_0}\,\mathrm{d}z = \oint_{|z - z_0| = \delta} \frac{f(z)}{z - z_0}\,\mathrm{d}z$$

$\dfrac{f(z) \Rightarrow f(z_0)}{\delta \Rightarrow 0}$：

$$f(z_0)\oint_{|z - z_0| = \delta} \frac{1}{z - z_0}\,\mathrm{d}z = 2\pi\mathrm{i} f(z_0)$$

**得柯西积分公式**：$f(z)$ 在 $D$ 内解析，$C$ 为 $D$ 内简单正向闭曲线，$z_0$ 为 $C$ 内任一点，则

$$f(z_0) = \frac{1}{2\pi\mathrm{i}}\oint_C \frac{f(z)}{z - z_0}\,\mathrm{d}z \qquad \text{or} \qquad f(z) = \frac{1}{2\pi\mathrm{i}}\oint_C \frac{f(\xi)}{\xi - z}\,\mathrm{d}\xi$$

**若 $C$ 为圆周** $z = z_0 + R\mathrm{e}^{\mathrm{i}\theta}$，则有

$$f(z_0) = \frac{1}{2\pi\mathrm{i}}\int_0^{2\pi} \frac{f\left(z_0 + R\mathrm{e}^{\mathrm{i}\theta}\right)}{R\mathrm{e}^{\mathrm{i}\theta}}\cdot\mathrm{i}R\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{d}\theta = \frac{1}{2\pi}\int_0^{2\pi} f\left(z_0 + R\mathrm{e}^{\mathrm{i}\theta}\right)\,\mathrm{d}\theta$$

（**加权平均**：解析函数在圆心的值等于圆周上的平均。）

**二连通区域**：

$$f(z_0) = \frac{1}{2\pi\mathrm{i}}\left(\oint_C \frac{f(z)}{z - z_0}\,\mathrm{d}z - \oint_{C_1} \frac{f(z)}{z - z_0}\,\mathrm{d}z\right) \qquad \text{（加权平均）}$$

**e.g.** 求 $I = \displaystyle\oint_C \frac{\mathrm{e}^z}{z(z+1)(z-2)}\,\mathrm{d}z$，$C:\ |z| = r$（$r \ne 1, 2$）。图：以原点为心的三个同心圆 $C_1, C_2, C_3$（半径渐大）。

1° $0 < r < 1$：

$$I = \oint_C \frac{\mathrm{e}^z / \left[(z+1)(z-2)\right]}{z}\,\mathrm{d}z = 2\pi\mathrm{i}\cdot\frac{\mathrm{e}^z}{(z+1)(z-2)}\bigg|_{z=0} = -\pi\mathrm{i} \quad \text{（FA，不懂）}$$

2° $1 < r < 2$：

$$I = \oint_{C_1} + \oint_{C_2} = -\pi\mathrm{i} + \oint_{C_2} \frac{\mathrm{e}^z / \left[z(z-2)\right]}{z+1}\,\mathrm{d}z = -\pi\mathrm{i} + \frac{2\pi\mathrm{i}}{3\mathrm{e}} \quad \text{（FA，不懂）}$$

3° $r > 2$（FA）

<details markdown="1">
<summary><strong>【FA：三段例题的补全】</strong></summary>

柯西积分公式的用法：把被积函数凑成 $\dfrac{g(z)}{z - z_0}$，其中 $g(z)$ 在 $z_0$ 附近解析，这块积分就等于 $2\pi\mathrm{i}\,g(z_0)$；被积函数有 $0$、$-1$、$2$ 三个奇点，半径 $r$ 变大时圆内奇点逐个增多，用复合闭路定理按奇点拆圆。

- **1°**（只有 $z = 0$ 在圆内）：$g(z) = \dfrac{\mathrm{e}^z}{(z+1)(z-2)}$，$g(0) = -\dfrac{1}{2}$，故 $I = 2\pi\mathrm{i}\cdot\left(-\dfrac{1}{2}\right) = -\pi\mathrm{i}$。
- **2°**（$z = 0, -1$ 在圆内）：围绕 $0$ 的一块同 1°（$-\pi\mathrm{i}$）；围绕 $-1$ 的一块取 $g(z) = \dfrac{\mathrm{e}^z}{z(z-2)}$，$g(-1) = \dfrac{\mathrm{e}^{-1}}{(-1)(-3)} = \dfrac{1}{3\mathrm{e}}$，贡献 $\dfrac{2\pi\mathrm{i}}{3\mathrm{e}}$。合计 $-\pi\mathrm{i} + \dfrac{2\pi\mathrm{i}}{3\mathrm{e}}$。
- **3°**（三个奇点全在圆内）：再加围绕 $z = 2$ 的一块，$g(z) = \dfrac{\mathrm{e}^z}{z(z+1)}$，$g(2) = \dfrac{\mathrm{e}^2}{6}$，贡献 $\dfrac{\pi\mathrm{i}\mathrm{e}^2}{3}$。合计

$$I = -\pi\mathrm{i} + \frac{2\pi\mathrm{i}}{3\mathrm{e}} + \frac{\pi\mathrm{i}\mathrm{e}^2}{3}$$

（解答由AI补全）

</details>

### 2026.10.10（解析函数的无穷可微性 · 四、级数开篇）

**高阶导数的 Cauchy 积分公式**：由 $f(z) = \dfrac{1}{2\pi\mathrm{i}}\oint_C \dfrac{f(\xi)}{\xi - z}\,\mathrm{d}\xi$，可在积分号下对 $z$ 求导，得

$$f^{(n)}(z_0) = \frac{n!}{2\pi\mathrm{i}}\oint_C \frac{f(z)}{(z - z_0)^{n+1}}\,\mathrm{d}z$$

（解析函数无穷次可微，且各阶导数仍解析。）

**e.g.** $\displaystyle\oint_C \frac{\mathrm{e}^z}{(z^2+1)^2}\,\mathrm{d}z$，$C:\ |z| = r > 1$。图：大圆 $C$ 内含 $C_1$（绕 $\mathrm{i}$）、$C_2$（绕 $-\mathrm{i}$）两个小圆。

$z^2 + 1 = (z+\mathrm{i})(z-\mathrm{i}) \Rightarrow \oint_C = \oint_{C_1} + \oint_{C_2}$

$$= \oint_{C_1} \frac{\mathrm{e}^z/(z+\mathrm{i})^2}{(z-\mathrm{i})^2}\,\mathrm{d}z + \oint_{C_2} \frac{\mathrm{e}^z/(z-\mathrm{i})^2}{(z+\mathrm{i})^2}\,\mathrm{d}z = 2\pi\mathrm{i}\left(\left(\frac{\mathrm{e}^z}{(z+\mathrm{i})^2}\right)'\bigg|_{z=\mathrm{i}} + \left(\frac{\mathrm{e}^z}{(z-\mathrm{i})^2}\right)'\bigg|_{z=-\mathrm{i}}\right) = \mathrm{i}\pi\sqrt{2}\sin\left(1 - \frac{\pi}{4}\right)$$

**Cauchy 不等式**：$f(z)$ 在 $C_R = \{|z - z_0| = R\}$ 内解析、$C_R$ 上连续，则

$$\left|f^{(n)}(z_0)\right| \le \frac{Mn!}{R^n} \qquad \left(M = \max_{C_R}|f(z)|\right)$$

**柳维尔定理**：有界整函数 $f(z)$ 必为常数（实部有界即可）。

**最大模定理**：$f(z)$ 在 $D$ 内解析、在 $\bar{D} = D \cup \partial D$ 上连续，则 $|f(z)|$ 在 $\partial D$ 上取到最大值。

（FA：这几个定理都有什么应用，我不懂，太抽象了）

**代数学基本定理**【见课本 P77】

**四、级数**

**复数列的极限**：$z_n = a_n + \mathrm{i}b_n$，$\forall\varepsilon > 0$，$\exists N \in \mathbb{Z}^+$，s.t. $n > N$ 时有 $|z_n - z_0| < \varepsilon$，则 $\lim\limits_{n\to\infty} z_n = z_0$。

**收敛充要条件**：① $\lim\limits_{n\to\infty} a_n = a$，$\lim\limits_{n\to\infty} b_n = b$；② Cauchy 收敛准则 $\forall\varepsilon > 0$，$\exists N = N(\varepsilon)$，$n > N$ 时有 $|z_{n+p} - z_n| < \varepsilon$。

**复数项级数收敛充要条件**：Cauchy 收敛准则 / $\sum a_n$、$\sum b_n$ 收敛。**必要条件**：$\lim\limits_{n\to\infty} z_n = 0$。

**绝对收敛准则**：若 $\sum |z_n|$ 收敛，则 $\sum z_n$ 收敛。正项级数判别法仍适用。

<details markdown="1">
<summary><strong>【FA：柳维尔、最大模、Cauchy 不等式都有什么应用】</strong></summary>

三者是一条链。**Cauchy 不等式**说"导数受边界控制"：圆越小、边界值越小，导数就越小。取 $n = 1$ 并让半径 $R \to \infty$：整函数处处有界时 $|f'(z_0)| \le M/R \to 0$，即 $f' \equiv 0$，这就是**柳维尔定理**。柳维尔定理最漂亮的应用是一行证明**代数基本定理**：设 $p(z)$ 无零点，则 $1/p(z)$ 是整函数，$|p|$ 充分大时 $1/|p|$ 趋于 0、闭圆内有界，故 $1/p$ 有界，柳维尔给 $1/p$ 为常数、$p$ 为常数，矛盾。**最大模定理**说内部没有"最高点"，用于把最大值估计搬到边界上：证明解析函数由边界值唯一决定、稳定性/误差估计、Schwarz 引理等。直观理解：解析性约束太强，函数没有藏在内部的自由度。（FA 补充）

</details>

### 复变小测复习（约 2026.10.13，页面未标日期）

1. **辐角主值的分段公式**：主值范围 $(-\pi, \pi]$；一象限 $\arctan\dfrac{y}{x}$，二象限加 $\pi$，三象限减 $\pi$。
2. **柯西积分公式 / 柯西积分定理（复合闭路定理）/ 高阶导数公式**：套路——找奇点 $\xrightarrow{\text{Cauchy 积分定理}}$ 挖小圆 $\xrightarrow{\text{凑 } z - z_0 \text{ 且解析}}$ 积分公式。
3. **注意 Cauchy 积分公式 $2\pi\mathrm{i}$ 的位置**（在 $f(z_0) = \dfrac{1}{2\pi\mathrm{i}}\oint\cdots$ 的分母上）。
4. $\mathrm{e}^{\mathrm{i}x} = 0$ 求 $x$：笔记写 $x = 2k\pi$【?】——若方程为 $\mathrm{e}^{\mathrm{i}x} = 1$ 则 $x = 2k\pi$ 正确；$\mathrm{e}^{\mathrm{i}x} = 0$ 实则无解（$|\mathrm{e}^{\mathrm{i}x}| = 1$ 恒成立）。
5. **解复数方程如何把 $x$、$y$ 消掉保留 $z$**（FA，待完善）：
   1° 解析 $\Rightarrow$ 无 $x,y$：$x \to \dfrac{z + \bar z}{2}$，$y \to \dfrac{z - \bar z}{2\mathrm{i}}$；
   2° $\mathrm{e}^{\mathrm{i}\bar z} = \mathrm{e}^{\mp\mathrm{i}x}$；
   3° $z^2 = (x+\mathrm{i}y)^2 = x^2 - y^2 + 2\mathrm{i}xy$；
   4° 凑 $x + \mathrm{i}y$（全平面解析）。
6. **整函数定义**：全平面解析。
7. $|\mathrm{e}^{\mathrm{i}\theta}|$：恒为 1。
8. **刘维尔定理**：全平面有界解析函数必为常数。
9. **柯西不等式**：$|f^{(n)}(z_0)| \le \dfrac{Mn!}{R^n}$（$M = \max|f(z)|$）。
10. **最大模定理**：$|f(z)|$ 在 $\partial D$ 上取 max。
11. **三角函数转化**（$\sin \leftrightarrow \mathrm{sh}$，$\cos \leftrightarrow \mathrm{ch}$）：$\mathrm{sh}\,\mathrm{i}z = \mathrm{i}\sin z$，$\sin\mathrm{i}z = \mathrm{i}\,\mathrm{sh}\,z$；$\mathrm{ch}\,\mathrm{i}z = \cos z$，$\cos\mathrm{i}z = \mathrm{ch}\,z$。
12. $\tan z = -\mathrm{i}\dfrac{\mathrm{e}^{2\mathrm{i}z} - 1}{\mathrm{e}^{2\mathrm{i}z} + 1}$。
13. **讨论可导性与解析性**：写 $u$、$v$，看 C-R 方程。
14. $\dfrac{\partial}{\partial z}$、$\dfrac{\partial}{\partial\bar z}$：$\dfrac{1}{2}\left(\dfrac{\partial}{\partial x} - \mathrm{i}\dfrac{\partial}{\partial y}\right)$、$\dfrac{1}{2}\left(\dfrac{\partial}{\partial x} + \mathrm{i}\dfrac{\partial}{\partial y}\right)$。

<details markdown="1">
<summary><strong>【FA：消 x、y 保留 z 的四个套路（待完善项补全）】</strong></summary>

- **代入法**（最通用）：把 $x = \dfrac{z + \bar z}{2}$、$y = \dfrac{z - \bar z}{2\mathrm{i}}$ 整体代入后化简；若 $f$ 解析，$\bar z$ 的项会自动消干净。例：$x^2 - y^2 + 2\mathrm{i}xy = (x + \mathrm{i}y)^2 = z^2$，一步看出。
- **指数类**：见到 $\mathrm{e}^{\mathrm{i}x}$、$\cos x$、$\sin x$，用 Euler 公式借 $\mathrm{e}^{\mathrm{i}z} = \mathrm{e}^{\mathrm{i}x - y}$ 反解出 $\mathrm{e}^{\mathrm{i}x}$ 再代入。
- **认结构**：$z^2 = x^2 - y^2 + 2\mathrm{i}xy$、$|z|^2 = x^2 + y^2 = z\bar z$、$\dfrac{1}{z} = \dfrac{x - \mathrm{i}y}{x^2 + y^2}$ 这类"标准件"直接对号入座。
- **凑 $x + \mathrm{i}y$**：把表达式改写成 $x + \mathrm{i}y$ 的多项式/有理式后整体换成 $z$。（FA 补充）

</details>

### 2026.10.14（收敛半径 · 4.2 Taylor 级数）

**收敛半径的求法**：取模用正项级数判别法。

$$\lim_{n\to\infty}\left|\frac{C_n}{C_{n+1}}\right| = R, \qquad \lim_{n\to\infty}\sqrt[n]{|C_n|} = R$$

**幂级数的四则运算**（FA）

**复合运算**：$|z| < r$ 时，$f(z) = \sum\limits_{n=0}^\infty a_n z^n$；$|z| < R$ 内 $g(z)$ 解析、$|g(z)| < r$，则当（FA，补全）$f(g(z)) = \sum\limits_{n=0}^\infty a_n\left[g(z)\right]^n$ 在 $|z| < R$ 内成立。

**一个解析函数一定可以转成幂级数。**

**e.g.** $\dfrac{1}{z - b} \Rightarrow \sum\limits_{n=0}^\infty c_n (z-a)^n$，$a \ne b$。

解：$\dfrac{1}{z-b} = \dfrac{1}{(z-a) - (b-a)} = \dfrac{-1}{b-a}\cdot\dfrac{1}{1 - \dfrac{z-a}{b-a}}$，而 $\dfrac{1}{1-x} = 1 + x + x^2 + \cdots + x^n + \cdots$，则 $R = |b - a|$（FA，为什么）

**和函数**：$f(z) = \sum\limits_{n=0}^\infty c_n (z-a)^n$ 为收敛圆 $|z-a| < R$（**小于，非 $\le$**）内的解析函数。先求导/积分 or 先求和不影响结果。

**4.2 Taylor 级数**

$f(z)$ 在 $D$ 内解析，$|z - z_0| < R$ 在 $D$ 内，则 $f(z)$ 可展开为 $\sum\limits_{n=0}^\infty c_n (z-z_0)^n$，$|z - z_0| < R$（证明见课本 P93）：

$$\therefore\; f(z) = \sum_{n=0}^\infty \frac{f^{(n)}(z_0)}{n!}(z - z_0)^n \qquad \text{为 } f(z) \text{ 在 } z_0 \text{ 处的 Taylor 展开}$$

若有奇点 $z^*$，则 $R = |z^* - z_0|$（不接触奇点）。

直接展开法：直接求 $c_n = \dfrac{1}{n!}f^{(n)}(z_0)$，但局限性较强。

<details markdown="1">
<summary><strong>【FA：幂级数四则运算与 R = |b−a| 的来历】</strong></summary>

- **四则运算**：两个幂级数在收敛圆的**公共部分**内可以相加、相减、相乘（系数按对应运算组合），相除要求分母级数在内部不为零，收敛半径取较小的那个（除法可能更大）。
- **复合（代入）**：把 $g(z)$ 整体当作 $f$ 的变元，前提是 $|g(z)|$ 落在 $f$ 的收敛圆内（笔记条件 $|z| < R$ 内 $|g(z)| < r$ 正是此意）。
- **$R = |b-a|$**：用 $\dfrac{1}{1-x}$ 展开的条件是 $\left|\dfrac{z-a}{b-a}\right| < 1$，即 $|z - a| < |b - a|$；从奇点看：$\dfrac{1}{z-b}$ 的奇点 $z = b$ 到展开中心 $a$ 的距离恰为 $|b-a|$——"收敛半径由最近奇点决定"，这正是 10.16 的推论 4。（FA 补充）

</details>

### 2026.10.16（间接展开 · 4.3 零点孤立性及唯一性 · 4.4 洛朗级数）

#### 2° 间接展开 Taylor 级数

- **e.g.** $\dfrac{1}{(1+z)^2}$ 展开（凑 $\dfrac{1}{1+z}$，FA），可求导
- **e.g.** $\left[\ln(1+z)\right]'$（两边同时积分，FA，跟实函数同理）

**推论**：$f(z)$ 在 $z_0$ 解析 $\Leftrightarrow$ $z_0$ 邻域内可展开为 $z - z_0$ 的幂级数（实函数通用）。

**注**：$D$ 内解析等价条件：$D$ 内可导 / $D$ 内 $u$、$v$ 可微 + C-R / $D$ 内连续 + 路径无关 / $D$ 内可展开。

**推论 2**：$f(z)$ 在 $D$ 内解析，$z_0 \in D$，$R = \mathrm{dist}(z_0, \partial D)$，则 $f(z)$ 在 $|z - z_0| < R$ 可展开。

**推论 3**：幂级数的和函数在其收敛圆周上至少有一个奇点。

**e.g.** $\sum\limits_{n=0}^\infty \dfrac{z^n}{n^2} = f(z)$ 在 $|z| \le 1$ 绝对收敛（FA，证）。但

$$f'(z) = 1 + \frac{z}{2} + \cdots + \frac{z^{n-1}}{n} + \cdots \qquad (|z| < 1)$$

$z \ge 1$ 时 $f'(z) \to \infty$，即 $z = 1$ 为奇点（FA）。

**推论 4**：$f(z)$ 在 $z_0$ 解析，$f(z) = \sum\limits_{n=0}^\infty c_n (z - z_0)^n$，$z^*$ 为距离最近奇点，则 $R = |z^* - z_0|$ 为收敛半径。

**e.g.** $f(z) = \dfrac{1}{z^2 + z - 6}$（奇点 $z = 2, -3$）：

$$f(z) = \sum_{n=0}^\infty c_n z^n \;\Rightarrow\; \text{直接得 } R = 2 \;\;【\text{?】笔记写 } R > 2; \qquad f(z) = \sum_{n=0}^\infty c_n (z-\mathrm{i})^n \;\Rightarrow\; R = \sqrt{2^2 + 1^2} = \sqrt{5}$$

**e.g.** $\dfrac{1}{1 + x^2} = 1 - x^2 + x^4 - \cdots + (-1)^n x^{2n} + \cdots$ 必受 $|x| < 1$ 限制。放到复变函数是显然的，因为有奇点 $\pm\mathrm{i}$。

#### 4.3 解析函数零点孤立性及唯一性

若 $f(z_0) = 0$，邻域 $D(z_0, \delta) = \{z \mid |z - z_0| < \delta\}$ 内 $f(z)$ 处处不为零，则可写为

$$f(z) = (z - z_0)^m \psi(z)$$

其中 $\psi(z)$ 在 $z_0$ 解析、$\psi(z_0) \ne 0$，$m \ge 1$，则 $z_0$ 为 $m$ 级零点。

**定理**：若 $f(z)$ 在 $D$ 内解析，$\{z_n\}$ 为互异零点，且 $z_n \to z_0 \in D$（$n \to \infty$），则 $f(z)$ 在 $D$ 内恒为 0。（即但凡有聚点则恒为 0，可得零点孤立性）

**推论**：不恒为零的解析函数零点必孤立。

**推论**：若 $f(z)$、$g(z)$ 在 $D$ 内解析，$\exists\{z_n\} \to z_0 \in D$，有 $f(z_n) = g(z_n)$，则 $D$ 内恒有 $f(z) \equiv g(z)$。

**注 1**：零点的孤立性是解析函数有别于实可微函数的重要性质（FA）。

**e.g.** $f(x) = \begin{cases} x^2\sin\dfrac{1}{x}, & x \ne 0 \\ 0, & x = 0 \end{cases}$，$0$ 为聚点。

**注 2**：一切恒等式在复平面仍成立。

<details markdown="1">
<summary><strong>【FA：实可微函数为什么没有零点孤立性】</strong></summary>

$f(x) = x^2\sin\dfrac{1}{x}$（$f(0) = 0$）在 $x = 0$ 处可导（$f'(0) = 0$），但它的零点 $x = \dfrac{1}{k\pi} \to 0$ 有聚点，$f$ 却不恒为零——实可微函数允许零点"挤"在一起而不恒为零。解析函数做不到：零点一旦有聚点就直接恒为零（唯一性定理），因为解析函数由任意一点邻域内的值唯一决定。这就是"可微"在实数里很弱、在复数里极强的体现。（FA 补充）

</details>

**定理**：不恒为零的解析函数 $f(z)$ 以 $z_0$ 为 $m$ 级零点的充要条件为：

$$f(z_0) = f'(z_0) = \cdots = f^{(m-1)}(z_0) = 0, \qquad f^{(m)}(z_0) \ne 0$$

**e.g.** 求 $f(z) = z - \sin z$ 在 $z = 0$ 处性质（FA）：

$$f(z) = z - \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!}z^{2n+1} = z^3\psi(z), \qquad \psi(0) = \frac{1}{3!} \ne 0$$

即 $z = 0$ 为 3 级零点。

**e.g.** 求 $f(z) = \sin(z) - 1$ 全部零点并指出阶数。

零点为 $z_k = \dfrac{\pi}{2} + 2k\pi$（$k \in \mathbb{Z}$）。由 $f'(z) = \cos z$ 在这些点也为 $0$，而 $f''(z) = -\sin z = -1 \ne 0$，故每个零点都是 **2 级零点**（也可由 $\sin z - 1 \approx -\dfrac{(z - z_k)^2}{2}$ 直接看出）。（解答由AI补全）

#### 4.4 洛朗级数

若 $z_0$ 处不解析，则不可展为幂级数——挖掉，就有孔了。

研究 $\sum\limits_{-\infty}^{+\infty} c_n (z - z_0)^n$（把 $z_0$ 挖掉）：

$$c_0 + c_1(z - z_0) + \cdots + c_n(z - z_0)^n + \cdots + c_{-n}(z - z_0)^{-n} + \cdots + c_{-1}(z - z_0)^{-1}$$

**正幂部分**：幂级数，$R_2$。对负幂：令 $\xi = (z - z_0)^{-1}$，则

$$\sum_{n=1}^\infty c_{-n}(z - z_0)^{-n} = c_{-1}\xi + c_{-2}\xi^2 + \cdots$$

设为 $R$，则 $|\xi| < R \Rightarrow |z - z_0| > \dfrac{1}{R} = R_1$。

即 $R_1 < |z - z_0| < R_2$ 的**圆环域**才收敛。

**e.g.** $\sum\limits_{n=1}^\infty \dfrac{a^n}{z^n} + \sum\limits_{n=0}^\infty \dfrac{z^n}{b^n}$（$a, b \in \mathbb{C}$）。负幂项（FA，补全）：$\sum\left(\dfrac{a}{z}\right)^n$ 收敛 $\Leftrightarrow |a/z| < 1 \Leftrightarrow |z| > |a|$；正幂 $\sum\left(\dfrac{z}{b}\right)^n$ 收敛 $\Leftrightarrow |z| < |b|$；故收敛域为 $|a| < |z| < |b|$。

**性质**：和函数解析，可逐项求积、逐项求导。

**问**：在圆环域内解析的函数是否一定能展开？

**e.g.** $f(z) = \dfrac{1}{z(1-z)} = \dfrac{1}{z} + \dfrac{1}{1-z}$：

$$= \frac{1}{z}\left(1 + z + z^2 + \cdots + z^n + \cdots\right) \qquad \text{即在 } 0 < |z| < 1 \text{ 可展开}$$

其次，在 $0 < |z - 1| < 1$ 内也可展开：

$$= \frac{1}{1-z}\left[\frac{1}{1-(1-z)}\right] = \frac{1}{1-z}\left[1 + (1-z) + \cdots + (1-z)^n + \cdots\right]$$

**定理**：若 $f(z)$ 在 $R_1 < |z - z_0| < R_2$ 内解析，则 $f(z) = \sum\limits_{-\infty}^{+\infty} c_n (z - z_0)^n$，其中

$$c_n = \frac{1}{2\pi\mathrm{i}}\oint_C \frac{f(\xi)}{(\xi - z_0)^{n+1}}\,\mathrm{d}\xi \qquad (n = 0, \pm 1, \pm 2, \cdots)$$

$C$ 为环域内绕 $z_0$ 一周的简单正向闭曲线。任意点处都可以展开为洛朗级数，但圆环必须与奇点隔开。

<details markdown="1">
<summary><strong>【FA：间接展开两例与"实函数通用"辨析】</strong></summary>

- $\dfrac{1}{(1+z)^2}$：先写 $\dfrac{1}{1+z} = 1 - z + z^2 - \cdots$（$|z| < 1$），两边求导再乘 $-1$：$\dfrac{1}{(1+z)^2} = 1 - 2z + 3z^2 - \cdots$。
- $\left[\ln(1+z)\right]' = \dfrac{1}{1+z}$ 已知展开，两边同时积分：$\ln(1+z) = z - \dfrac{z^2}{2} + \dfrac{z^3}{3} - \cdots$（与实函数套路相同）。
- **"实函数通用"的辨析**：推论里"解析 $\Leftrightarrow$ 可展开为幂级数"的双向等价**不**对实函数成立——实函数无穷阶可导也未必能展开（反例 $\mathrm{e}^{-1/x^2}$），Taylor 展开的**思想**实函数同样通用，但等价性是复变特有的。（FA 补充）

</details>

### 2026.10.17（5.1 孤立奇点的分类及性质）

> 复变 留数。没听，这节课在干啥，好像在刷手机（）。开始尝试补天。

#### 5.1 孤立奇点的分类及性质

**定义**：$z_0$ 为 $f(z)$ 的孤立奇点，则在 $z_0$ 的某个去心邻域内，$f(z)$ 可展开为

$$f(z) = \sum_{n=-\infty}^{+\infty} c_n (z - z_0)^n = \underbrace{\sum_{n=-\infty}^{-1} c_n (z - z_0)^n}_{\text{主部}} + \sum_{n=0}^{+\infty} c_n (z - z_0)^n$$

1° 主部为 0，称**可去奇点**；

2° 主部只有有限次：$c_{-m} \ne 0$，$c_{-(m+k)} = 0\ (k = 1, 2, \cdots)$，此时称 $z_0$ 为 **$m$ 级极点**；

3° 主部有无穷多次，$z_0$ 为**本性奇点**。

**性质**（等价条件），若 $z_0$ 为孤立奇点：

- 1° $z_0$ 为可去奇点 $\Leftrightarrow$ 3° $f(z)$ 在 $z_0$ 点的一个邻域内有界；
- 2° $\lim\limits_{z \to z_0} f(z)$ 存在 $\Leftrightarrow$ 4° $\lim\limits_{z \to z_0}(z - z_0)f(z) = 0$。

**定理**：$z_0$ 为 $f(z)$ 的 $m$ 级奇点 $\Leftrightarrow$ $f(z)$ 可表示为

$$f(z) = \frac{\psi(z)}{(z - z_0)^m}, \qquad \psi(z)\ \text{在}\ z_0\ \text{解析},\ \psi(z_0) \ne 0$$

**推论**：$\Leftrightarrow$ $z_0$ 为 $\dfrac{1}{f(z)}$ 的 $m$ 级零点。

**定理**：$z_0$ 为孤立奇点，则 $z_0$ 是 $f(z)$ 的极点 $\Leftrightarrow \lim\limits_{z \to z_0} f(z) = \infty$。

**结论**：对 $f(z) = \dfrac{h(z)}{g(z)}$，若 $h(z)$、$g(z)$ 均在 $z_0$ 解析，且 $z_0$ 为 $h(z)$ 与 $g(z)$ 的 $m$、$n$ 级零点，则

$$\begin{cases} m \ge n, & z_0\ \text{为}\ f(z)\ \text{的可去奇点} \\ m < n, & z_0\ \text{为}\ f(z)\ \text{的}\ n - m\ \text{级极点} \end{cases}$$

**定理**：$z_0$ 为孤立奇点，则 $z_0$ 为 $f(z)$ 的本性奇点 $\Leftrightarrow \lim\limits_{z \to z_0} f(z)$ 不存在也不为 $\infty$。

**无穷远点**：$f(z)$ 在 $z = \infty$ 的一个去心邻域 $\{R < |z| < +\infty\}$（$R \ge 0$）内解析，则称 $z = \infty$ 为函数的孤立奇点。则可展开为

$$\sum_{n=-\infty}^{+\infty} c_n z^n = \underbrace{\sum_{n=-\infty}^{0} c_n z^n}_{\text{正则部分}} + \underbrace{\sum_{n=1}^{+\infty} c_n z^n}_{\text{主要部分}} \qquad \begin{cases} \text{为 0}， & \text{可去奇点} \\ \text{有限次}， & m\ \text{级极点} \\ \text{无穷次}， & \text{本性奇点} \end{cases}$$

若 $z = \infty$ 为可去奇点 $\Rightarrow$ $f(z)$ 在 $\infty$ 解析，$\lim\limits_{z \to \infty} f(z) = f(\infty)$。

> 好难啊，全是定理和结论。

### 2026.10.21（5.2 留数定理 · 5.2.3 无穷远点处的留数 · 5.3 留数定理的应用）

> 先续上午课的补天，咋落了这么多……

#### 5.2 留数定理

**定义**：$z_0$ 为 $f(z)$ 的孤立奇点，$f(z)$ 在 $z_0$ 的去心邻域及边界 $C_\rho$ 解析，则称

$$\operatorname{Res}[f(z); z_0] = \frac{1}{2\pi\mathrm{i}}\oint_{C_\rho} f(z)\,\mathrm{d}z \qquad \text{（也记作 } \operatorname{Res}(f; z_0)\text{）}$$

为 $f(z)$ 在 $z_0$ 处的**留数** $= c_{-1}$，即 $f(z)$ 在 $z_0$ 的洛朗级数 $\dfrac{1}{z - z_0}$ 项的系数。

**留数定理**：设边界 $C$ 由有限条曲线段组成，$f(z)$ 在 $C$ 上及 $C$ 内除 $n$ 个有限孤立奇点 $z_1, z_2, \cdots, z_n$ 外解析，则

$$\oint_C f(z)\,\mathrm{d}z = 2\pi\mathrm{i}\sum_{k=1}^{n} \operatorname{Res}[f(z); z_k]$$

图：区域 $D$ 的边界 $C$ 内部含孤立奇点 $z_1, z_2, \cdots, z_n$，每个奇点各自挖去一个小圆边界 $C_1, C_2, \cdots, C_n$，复合闭路正向。

（等价地，单独求各奇点的 $c_{-1}$。）

**计算**：1° 罗朗展开；2° 下述定理：

① $f(z)$ 在可去**有限**奇点 $z_0$ 处的留数为 0；

② $z_0$ 为 $m$ 级极点，则

$$\operatorname{Res}[f(z); z_0] = \frac{1}{(m-1)!}\lim_{z \to z_0} \frac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\left[(z - z_0)^m f(z)\right]$$

单极点时化为 $\lim\limits_{z \to z_0}(z - z_0)f(z)$。

**推论**：若 $f(z) = \dfrac{\psi(z)}{(z - z_0)^m}$，$\psi(z)$ 在 $z_0$ 解析，$\psi(z_0) \ne 0$，$m \ge 1$，则

$$\operatorname{Res}\left[\frac{\psi(z)}{(z - z_0)^m};\ z_0\right] = \frac{\psi^{(m-1)}(z_0)}{(m-1)!}$$

**推论**：若 $f(z) = \dfrac{P(z)}{Q(z)}$，$P$、$Q$ 在 $z_0$ 解析，且 $Q(z_0) = 0$，$Q'(z_0) \ne 0$（$z_0$ 为单极点），则

$$\operatorname{Res}\left[\frac{P(z)}{Q(z)};\ z_0\right] = \frac{P(z_0)}{Q'(z_0)}$$

**推论**：若 $z_0$ 为 $g(z)$ 的 $k$ 级零点、为 $h(z)$ 的 $k+1$ 级零点，则 $z_0$ 为 $f(z) = \dfrac{g(z)}{h(z)}$ 的单极点，且

$$\operatorname{Res}\left[\frac{g(z)}{h(z)};\ z_0\right] = (k+1)\,\frac{g^{(k)}(z_0)}{h^{(k+1)}(z_0)}$$

**定理**：$g(z)$、$h(z)$ 在 $z_0$ 解析，$g(z_0) \ne 0$，$h(z_0) = h'(z_0) = 0$，$h''(z_0) \ne 0$。此时 $z_0$ 为 $f(z) = \dfrac{g(z)}{h(z)}$ 的**二阶极点**，则

$$\operatorname{Res}\left[\frac{g(z)}{h(z)};\ z_0\right] = \frac{2g'(z_0)}{h''(z_0)} - \frac{2}{3}\,\frac{g(z_0)\,h'''(z_0)}{\left[h''(z_0)\right]^2}$$

> Good，除了〔?〕都补充了，虽然还是啥也不会。再补这节课的。

#### 5.2.3 无穷远点处的留数

**定义**：设 $\infty$ 为 $f(z)$ 的孤立奇点，$f(z)$ 在 $\{z: R < |z| < +\infty\}$ 内解析，则称 $\dfrac{1}{2\pi\mathrm{i}}\oint_{C_\rho} f(z)\,\mathrm{d}z$ 为 $f(z)$ 在 $\infty$ 点的留数，记为 $\operatorname{Res}[f(z); \infty]$。

$C_\rho$：中心在原点、半径为 $\rho$ 的圆周，沿**顺时针**方向。

**定理**：$f(z)$ 在扩充复平面上只有有限个孤立奇点（含 $\infty$），设为 $z_1, z_2, \cdots, z_n, \infty$，则 $f(z)$ 在所有奇点处的留数之和为 0，即（$C$ 包围全部有限奇点时）

$$\oint_C f(z)\,\mathrm{d}z = -2\pi\mathrm{i}\operatorname{Res}[f(z); \infty]$$

**注意**：$f(z)$ 在有限可去奇点处必有 $\operatorname{Res}[f(z); z_0] = 0$；但若 $\infty$ 为可去奇点，则 $\operatorname{Res}[f(z); \infty]$ 未必一定为 0。

**公式**：

$$\operatorname{Res}[f(z); \infty] = -\operatorname{Res}\left[f\!\left(\frac{1}{z}\right)\frac{1}{z^2};\ 0\right]$$

#### 5.3 留数定理的应用

##### 5.3.1 $\int_0^{2\pi} R(\cos\theta, \sin\theta)\,\mathrm{d}\theta$

设 $R(\cos\theta, \sin\theta)$ 为 $\cos\theta$、$\sin\theta$ 的有理函数，且在 $[0, 2\pi]$ 连续，则

$$\int_0^{2\pi} R(\cos\theta, \sin\theta)\,\mathrm{d}\theta = 2\pi\mathrm{i} \sum \{f(z)\ \text{在单位圆内极点处的留数}\}$$

其中代换 $z = \mathrm{e}^{\mathrm{i}\theta}$：

$$f(z) = \frac{1}{\mathrm{i}z}\,R\!\left(\frac{z^2 + 1}{2z},\ \frac{z^2 - 1}{2\mathrm{i}z}\right)$$

（积分区间必须是 $2\pi$。）

**例5（PPT，转文字）**：计算积分

$$I = \int_0^{\pi} \frac{\cos mx}{5 - 4\cos x}\,\mathrm{d}x$$

**解**：红笔批注：$I = \dfrac{1}{2}\displaystyle\int_0^{2\pi} \dfrac{\cos mx}{5 - 4\cos x}\,\mathrm{d}x$。因为被积函数是关于 $x$ 的偶函数，因此

$$I = \frac{1}{2}\int_{-\pi}^{\pi} \frac{\cos mx}{5 - 4\cos x}\,\mathrm{d}x$$

令 $I_1 = \displaystyle\int_{-\pi}^{\pi} \dfrac{\cos mx}{5 - 4\cos x}\,\mathrm{d}x$，$I_2 = \displaystyle\int_{-\pi}^{\pi} \dfrac{\sin mx}{5 - 4\cos x}\,\mathrm{d}x = 0$（被积函数为奇函数，圈出重点）。

（PPT 手写批注：$\cos mx = \dfrac{z^m + z^{-m}}{2}$。）

$I_1 + \mathrm{i}I_2 = \displaystyle\int_{-\pi}^{\pi} \dfrac{\mathrm{e}^{\mathrm{i}mx}}{5 - 4\cos x}\,\mathrm{d}x$。设 $z = \mathrm{e}^{\mathrm{i}x}$，则

$$I_1 + \mathrm{i}I_2 = \frac{1}{\mathrm{i}}\oint_{|z|=1} \frac{z^m}{5z - 2(1 + z^2)}\,\mathrm{d}z = \frac{\mathrm{i}}{2}\oint_{|z|=1} \frac{z^m}{(z - 2)\left(z - \dfrac{1}{2}\right)}\,\mathrm{d}z$$

$f(z)$ 在单位圆周内只有一个一级极点 $z = \dfrac{1}{2}$（$z = 2$ 在圆外），由留数定理及规则②（单极点）：

$$\operatorname{Res}\left[\frac{z^m}{(z - 2)\left(z - \dfrac{1}{2}\right)};\ \frac{1}{2}\right] = \lim_{z \to \frac{1}{2}} \frac{z^m}{z - 2} = \frac{2^{-m}}{-\dfrac{3}{2}} = -\frac{2^{1-m}}{3}$$

于是

$$I_1 + \mathrm{i}I_2 = \frac{\mathrm{i}}{2}\cdot 2\pi\mathrm{i}\cdot\left(-\frac{2^{1-m}}{3}\right) = \frac{2\pi}{3\cdot 2^m} \qquad \text{（纯实数，与 } I_2 = 0\ \text{一致）}$$

故

$$I = \frac{I_1}{2} = \frac{\pi}{3\cdot 2^m} \qquad \text{（后半段计算由 AI 补全）}$$

**e.g. 上课时问**：$\displaystyle\sum_{m=0}^{+\infty} \frac{1}{m!} = \mathrm{e}\ ?$（FA）

<details markdown="1">
<summary><strong>【FA：为什么 Σ 1/m! = e】</strong></summary>

$\mathrm{e}^z$ 在全平面有 Taylor 展开 $\mathrm{e}^z = \sum\limits_{m=0}^{\infty} \dfrac{z^m}{m!}$，取 $z = 1$ 即得 $\mathrm{e} = \sum\limits_{m=0}^{\infty} \dfrac{1}{m!} = 1 + 1 + \dfrac{1}{2} + \dfrac{1}{6} + \dfrac{1}{24} + \cdots \approx 2.71828$。反过来说，$\sum \dfrac{1}{m!}$ 收敛到有限值也是显然的（$\dfrac{1}{m!} \le \dfrac{1}{2^{m-1}}$ 对 $m \ge 2$，被几何级数压住）。（FA 补充）

</details>

### 2026.10.23（5.3.2 $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x$ 型积分 · 5.3.3 含 $\mathrm{e}^{\mathrm{i}\alpha x}$ 的积分）

#### 5.3.2 $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x$ 型积分

设 $f(z)$ 除有限个极点外全平面解析，且极点不在 $x$ 轴上。若 $\exists\ M$ 和正数 $R$，s.t. 当 $|z| \ge R$ 时有

$$|f(z)| \le \frac{M}{|z|^{\delta}}$$

对 $\delta > 1$ 成立（$\delta \ge 2$），则

$$\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 2\pi\mathrm{i} \sum \{f(z)\ \text{在上半平面极点处的留数}\} = -2\pi\mathrm{i} \sum \{\text{下半平面}\}$$

特别地，对 $f(z) = \dfrac{P(z)}{Q(z)}$，$P(z)$、$Q(z)$ 为有理多项式，$Q(z)$ 为 $m$ 次、$P(z)$ 为 $n$ 次，且 $m \ge n+2$：

$$f(z) = \frac{P(z)}{Q(z)} = \frac{a_0 + a_1 z + \cdots + a_n z^n}{b_0 + b_1 z + \cdots + b_m z^m}$$

此时上式也成立。

**偶函数**：

$$\int_0^{+\infty} R(x)\,\mathrm{d}x = \frac{1}{2}\int_{-\infty}^{+\infty} R(x)\,\mathrm{d}x = \pi\mathrm{i} \sum \operatorname{Res}[R(z),\, z_k]$$

#### 5.3.3 $\int_{-\infty}^{+\infty} \mathrm{e}^{\mathrm{i}\alpha x} f(x)\,\mathrm{d}x$ 型积分

$f(z)$ 条件同上。若

$$|f(z)| \le \frac{M}{|z|} \qquad \text{（分母至少比分子高一次）}$$

则

$$\int_{-\infty}^{+\infty} \mathrm{e}^{\mathrm{i}\alpha x} f(x)\,\mathrm{d}x = \lim_{R\to\infty}\int_{-R}^{R} \mathrm{e}^{\mathrm{i}\alpha x} f(x)\,\mathrm{d}x = 2\pi\mathrm{i} \sum \{f(z)\,\mathrm{e}^{\mathrm{i}\alpha z}\ \text{在上半平面极点处的留数}\}$$

当 $f(z) = \dfrac{P(z)}{Q(z)}$（$n$ 次 / $m$ 次），且 $m \ge n+1$，则上式成立。

且

$$\int_{-\infty}^{+\infty} \cos\alpha x\, f(x)\,\mathrm{d}x = \operatorname{Re}(I), \qquad \int_{-\infty}^{+\infty} \sin\alpha x\, f(x)\,\mathrm{d}x = \operatorname{Im}(I)$$

（本页末尾预先写下了下一章标题"六、保角映射"，正式内容见 2026.10.28 节。）

### 2026.10.28（六、保角映射：6.1 概念 · 6.2 初等函数的映射 · 6.3 分式线性映射）

#### 6.1 保角映射

##### 6.1.1 导数的几何意义

$w = f(z)$，$M(z_0)$ 与 $N(z_0 + \delta z)$ 对应值域中的 $M_1(w_0)$、$N_1(w_0 + \delta w)$，则

$$\lim_{N\to M}\left|\frac{\overline{M_1N_1}}{\overline{MN}}\right| = \lim_{N\to M}\left|\frac{\delta w}{\delta z}\right| = |f'(z_0)|$$

称 $w = f(z)$ 在 $z_0$ 的**伸缩率**。

**转向**：过 $M$ 取曲线 $C_1$，经 $w = f(z)$ 映成曲线 $\Gamma_1$（过 $M_1$），$N$ 点与 $M$ 邻近 $\to N_1$。则

$$\arg\Delta w - \arg\Delta z = \arg\frac{\Delta w}{\Delta z}$$

设 $C_1$ 在 $M$ 处切线倾角 $\theta_1$，$\Gamma_1$ 在 $M_1$ 处切线倾角 $\varphi_1$（与 $Ou$ 正方向的夹角）。当 $N\to M$ 时

$$\varphi_1 - \theta_1 = \arg f'(z_0) \qquad \text{即 } \varphi_1 = \theta_1 + \arg f'(z_0)$$

即原切线旋转 $\arg f'(z_0)$ 就与象切线平行，称 $\arg f'(z_0)$ 为 $w = f(z)$ 在 $z_0$ 的**旋转角**。

再作曲线 $C_2 \to \Gamma_2$，$\varphi_1 - \theta_1 = \varphi_2 - \theta_2 = \arg f'(z_0)$，得

$$\varphi_2 - \varphi_1 = \theta_2 - \theta_1$$

即经映射 $w = f(z)$，在导数不为零的点，曲线间夹角大小、方向不变 ⇒ **保角性**。

##### 6.1.2 概念

$f(z)$ 在 $D\to G$ 为双射，且 $D$ 内每一点都保角 ⇒ $f(z)$ 为 $D\to G$ 的**保角映射**。

若 $D$ 内每点都存在一个邻域使 $f(z)$ 在邻域内保角 ⇒ **局部保角映射**。

**定理**：

① 局部 ⟺ $f(z)$ 在 $D$ 内解析且 $f'(z)\ne 0$；

② $f(z)$ 在 $D$ 内解析单射，则 $\forall z\in D$，$f'(z)\ne 0$；

③ 保角 ⟺ 解析双射；

④ **黎曼（Riemann）映射定理**：$D$、$G$ 为单连通区域，$z_0\in D$，$w_0\in G$，$\theta\in(-\pi,\pi]$，则存在唯一的 $D\to G$ 保角映射 $w = f(z)$，s.t. $w_0 = f(z_0)$，$\arg f'(z_0) = \theta$；

⑤ **边界对应原理**：简单闭曲线 $\Gamma$、$\Gamma'$ 围成 $D$、$D'$，则 $D\to D'$ 的保角映射 $w = f(z)$ 可以延拓为 $D\cup\Gamma$ 到 $D'\cup\Gamma'$ 的连续双射，且 $f(z)$ 将 $\Gamma$ 正向映为 $\Gamma'$ 正向。

#### 6.2 初等函数的映射

##### 6.2.1 整线性映射

$w = az + b$，$\dfrac{\mathrm{d}w}{\mathrm{d}z} = a \ne 0$ ⇒ 保角。

① $w = kz$ ⇒ 相似（比例）映射；② $w = \mathrm{e}^{\mathrm{i}\theta}z$ ⇒ 旋转映射；③ $w = z + b$ ⇒ 平移映射。

**保圆性**：圆周 → 圆周（直线 → 半径 $\infty$ 的圆）。

##### 6.2.2 倒数映射

$w = \dfrac{1}{z}$，$\dfrac{\mathrm{d}w}{\mathrm{d}z} = -\dfrac{1}{z^2}$，则除原点、$z = \infty$ 外处处保角。

图：以 $O$ 为心、半径 $R$ 的圆周 $C$，圆内一点 $P$ 与射线 $OP$ 延长线上一点 $P'$。

若 $OP\cdot OP' = R^2$，则称 $P$ 与 $P'$ 关于 $C: |z| = R$ **对称**。

**保圆性**：直线和圆统称**广义圆**。

**保对称性**：关于 $C$ 的两对称点，映射到 $C'$ 仍对称。

**定理**：$z_1$、$z_2$ 为关于圆周 $C$ 的一对对称点 ⟺ 过 $z_1$、$z_2$ 的任何圆周 $\Gamma$ 与 $C$ 正交（交点处两圆切线垂直）。

#### 6.3 分式线性映射

##### 6.3.1 定义

$$w = \frac{az + b}{cz + d} \qquad (ad - bc \ne 0)$$

保角映射（整线性、倒数映射叠加），双向保角，保圆，保对称。

##### 6.3.2 三个独立条件唯一确定一个分式线性映射

$z_1$、$z_2$、$z_3 \to w_1$、$w_2$、$w_3$：

$$\frac{w - w_1}{w - w_2}\cdot\frac{w_3 - w_2}{w_3 - w_1} = \frac{z - z_1}{z - z_2}\cdot\frac{z_3 - z_2}{z_3 - z_1}$$

$z_1$、$z_2 \to w_1$、$w_2$：

$$\frac{w - w_1}{w - w_2} = k\,\frac{z - z_1}{z - z_2} \qquad \text{（}k\text{：待定复常数）}$$

现给定两圆周 $C$、$C'$，在圆周上取定三个点，则必有分式线性映射 $C\to C'$。而内部的点呢？若 $z_0\to w_0$ 在内部，则 内部 → 内部、外部 → 外部；或若由 $z_1\to z_2\to z_3$ 的绕向与 $w_1\to w_2\to w_3$ 的绕向相同，则 内部 → 内部，否则 外部。

**两个圆包围的区域**（按圆周上映为 $\infty$ 的点的个数分类）：

1° 无 ⇒ 弧所围区域 → 弧所围区域；

2° 一个点 ⇒ 圆弧 + 直线；

3° FA ⇒ 两直线（角形区域）。

<details markdown="1">
<summary><strong>【FA：两圆弧区域的三种情形（3° 补充）】</strong></summary>

分式线性映射把广义圆（直线和圆）映成广义圆，而**某个边界圆（弧）的像是直线 ⟺ 该圆（弧）经过映射的极点**（被映为 $\infty$ 的那个点 $z^*$，映射后跑到无穷远）。设区域由两个圆（弧）围成，按经过极点的边界圆（弧）个数分三种情形：

- **1° 没有边界点映为 $\infty$**：两条圆（弧）都不经过 $z^*$，像仍是两条圆（弧），区域仍是"弧所围区域"（如月牙形区域）。
- **2° 一个点映为 $\infty$**：一条边界圆（弧）经过 $z^*$、像为直线，另一条仍为圆（弧），区域边界变成"圆弧 + 直线"。
- **3° 两个点映为 $\infty$（FA）**：两条边界圆（弧）都经过 $z^*$（例如两弧相交而极点取在交点处），像为两条直线，区域变成"两直线围成的角形区域"。常见用法：先用分式线性映射把两圆弧围成的区域"拉直"成角形域，再用幂函数 $w = z^{\lambda}$ 把角形域放大成半平面。

（FA 补充）

</details>

##### 6.3.3 两个重要的分式线性映射

1. 上半平面 → 单位圆内部：

$$w = \mathrm{e}^{\mathrm{i}\theta}\,\frac{z - z_0}{z - \bar{z}_0}$$

### 2026.10.30（七、Laplace 变换开篇）

$f(t)$，$[0, +\infty)$，对 $s = c + \mathrm{i}y$，

$$F(s) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-st}\,\mathrm{d}t$$

在某一区域内收敛，则记为 $f(t)$ 的 **Laplace 变换**：

$$\mathcal{L}[f(t)] = F(s) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-st}\,\mathrm{d}t$$

