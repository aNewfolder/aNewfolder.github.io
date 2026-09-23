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

