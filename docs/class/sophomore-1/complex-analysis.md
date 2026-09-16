# 复变函数与积分变换

- **任课教师**：徐翔
- **学期**：2026-2027 秋冬学期

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

