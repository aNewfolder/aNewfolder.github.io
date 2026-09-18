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

