# 概率论与数理统计

- **任课教师**：郑志浩
- **学期**：2026-2027 秋冬学期

---

## 分数构成

作业 25% + 到课 5% + 小测 20% + SPOC 10% + 期末 40%（2026.9.16 首课宣布）。其中 SPOC 含四个小测和一个讨论（黄炜）。

## 课堂笔记

> 【FA】= For AI，即笔记中标注（FA）留给 AI 补充的条目；AI 补充内容以默认折叠的 details 块呈现，请重点复核。

### 2026.9.16

#### 1.1 样本空间 随机事件

<details markdown="1">
<summary><strong>【FA：样本空间与随机事件（补充定义）】</strong></summary>

样本空间 $S$：随机试验所有可能结果（样本点）构成的集合；随机事件：样本空间的子集，事件发生即其所含样本点之一出现。

</details>

**互斥（互不相容）事件**

$A \cap B = \varnothing$：$A$、$B$ 不能同时发生。互斥 $\Rightarrow$ 可加：$P(A \cup B) = P(A) + P(B)$。

**对立事件（逆事件）**

$A \cup B = S$ 且 $A \cap B = \varnothing$（"非此即彼"）；记作 $\overline{A}$ 或 $A^c$。补充：对立必互斥，互斥不一定对立（还须并起来为 $S$）；$P(\overline{A}) = 1 - P(A)$。

**差事件**

$$A - B = A \cap \overline{B}$$

即 $A$ 发生且 $B$ 不发生。

**德摩根律**

$$\overline{\bigcup_{j=1}^{n} A_j} = \bigcap_{j=1}^{n} \overline{A_j}, \qquad \overline{\bigcap_{j=1}^{n} A_j} = \bigcup_{j=1}^{n} \overline{A_j}$$

即"并的补等于补的交，交的补等于补的并"；对可列个事件同样成立。

#### 1.2 频率与概率

**频率**

$$f_n(A) = \frac{n_A}{n} = \frac{A\ \text{发生的次数}}{\text{试验总次数}}$$

补充：频率随试验次数 $n$ 波动，但当 $n$ 充分大时稳定地在某个常数附近摆动（频率的稳定性），该常数即概率——这是以频率定义概率的客观基础。

**概率的公理化定义**

$P(A)$ 为事件 $A$ 的概率，若它作为集合函数满足：

1. **非负性**：$P(A) \ge 0$；
2. **规范性**：$P(S) = 1$；
3. **可列可加性**：对两两互斥的可列个事件（$\forall i \ne j,\ A_iA_j = \varnothing$），$P\left(\bigcup_{j=1}^{+\infty} A_j\right) = \sum_{j=1}^{+\infty} P(A_j)$。

**概率的性质：可加性、补事件与零概率**

- 可列可加性：$P\left(\bigcup_{j=1}^{+\infty} A_j\right) = \sum_{j=1}^{+\infty} P(A_j)$（由公理直接得到）；
- $P(A) + P(\overline{A}) = 1$；
- $P(A) = 0$ **不一定**不可能，$P(A) = 1$ **不一定**必然。解释：几何概型中"恰好取中某一点"的概率为 $0$ 却可能发生（连续情形单点不占测度）；其对面的概率为 $1$ 却不必然发生。

**减法公式 $P(B-A) = P(B) - P(AB)$**

对**任意**事件 $A$、$B$ 成立。$A \subset B$ 时退化为 $P(B-A) = P(B) - P(A)$，且由此可得单调性 $P(B) \ge P(A)$。

推导方法：1° 维恩图——$B$ 挖去与 $A$ 重叠的部分剩 $B - A$，即 $B = (B - A) \sqcup AB$；2° 理论推导见下方折叠块。

<details markdown="1">
<summary><strong>【FA：减法公式的理论推导】</strong></summary>

$B$ 中任一样本点要么同时属于 $A$（此时属 $AB$），要么不属于 $A$（此时属 $B - A$），且两部分互不相交，即 $B = (B - A) \sqcup AB$。由可加性 $P(B) = P(B - A) + P(AB)$，移项即得。

</details>

**一般加法公式 $P(A \cup B) = P(A) + P(B) - P(AB)$**

对任意事件 $A$、$B$ 成立。$A$、$B$ 互斥时 $P(AB) = 0$，退化为 $P(A \cup B) = P(A) + P(B)$（呼应"互斥 $\Rightarrow$ 可加"）。

推导（FA 补全）见下方折叠块：分解 $A \cup B = (B - A) \sqcup A$。

<details markdown="1">
<summary><strong>【FA：加法公式的推导】</strong></summary>

$A \cup B$ 中任一样本点或者在 $A$ 中，或者不在 $A$ 中而在 $B$ 中（属 $B - A$）；且 $A$ 与 $B - A$ 互斥（不可能"在 $A$ 中又不在 $A$ 中"）。由可加性并代入减法公式：

$$P(A \cup B) = P(B - A) + P(A) = \left[P(B) - P(AB)\right] + P(A)$$

</details>

**容斥原理（加法公式的推广）**

$$P\left(\bigcup_{j=1}^{n} A_j\right) = \sum_{j=1}^{n} P(A_j) - \sum_{1 \le i < j \le n} P(A_iA_j) + \cdots + (-1)^{n-1} P(A_1A_2 \cdots A_n)$$

补充 $n = 3$ 情形：$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)$。

#### 1.3 等可能概型

**古典概型**：有限性 + 等可能性。

经典例题：(1) 超几何分布　(2) 抽签公平问题　(3) 生日问题（例题课本上都有，【见课本】第一章 §1.3）。

<details markdown="1">
<summary><strong>【FA：三个经典例题速览】</strong></summary>

- **超几何分布**：$N$ 件产品中有 $M$ 件次品，不放回地任取 $n$ 件，则抽得次品数 $X$ 满足 $P(X = k) = \dfrac{\dbinom{M}{k}\dbinom{N-M}{n-k}}{\dbinom{N}{n}}$。
- **抽签公平问题**：$n$ 支签中 $k$ 支为中签，众人依次抽签不放回，则无论第几个抽，中签概率恒为 $\dfrac{k}{n}$——抽签不必争先后。
- **生日问题**：一间屋里 $n$ 个人中至少两人生日相同的概率为 $1 - \dfrac{365 \times 364 \times \cdots \times (365 - n + 1)}{365^n}$；$n = 23$ 时已超过 $50\%$。

</details>

### 2026.9.23

#### 1.4 条件概率

**条件概率定义**

$$P(B \mid A) = \frac{P(AB)}{P(A)}$$

条件概率同样满足概率的基本性质（非负、规范、可加），例如可加性在条件概率下为

$$P(B \cup C \mid A) = P(B \mid A) + P(C \mid A) - P(BC \mid A)$$

**乘法公式**

$$P(AB) = P(A)P(B \mid A) = P(B)P(A \mid B)$$

推广到三个事件：

$$P(ABC) = P(A)P(B \mid A)P(C \mid AB)$$

**划分**

$B_1, B_2, \ldots, B_n$ 是 $S$ 的一个划分，若 ① $B_iB_j = \varnothing$（$i \ne j$）；② $B_1 \cup B_2 \cup \cdots \cup B_n = S$。

**全概率公式**

$$P(A) = \sum_{j=1}^{n} P(B_j)P(A \mid B_j)$$

**贝叶斯公式**

$$P(B_k \mid A) = \frac{P(B_k A)}{P(A)} = \frac{P(B_k)P(A \mid B_k)}{\sum\limits_{j=1}^{n} P(B_j)P(A \mid B_j)}$$

<details markdown="1">
<summary><strong>【FA：全概率与贝叶斯公式的推导和直观】</strong></summary>

推导：由划分得 $A = AS = A(B_1 \cup \cdots \cup B_n) = AB_1 \cup \cdots \cup AB_n$，且诸 $AB_i$ 两两互斥，故由可加性与乘法公式

$$P(A) = \sum_{j=1}^{n} P(AB_j) = \sum_{j=1}^{n} P(B_j)P(A \mid B_j)$$

贝叶斯公式就是"条件概率定义 + 把全概率公式代入分母"。直观：全概率是**由因推果**——"结果" $A$ 按各条"原因" $B_j$ 分摊加权；贝叶斯是**执果索因**——观察到结果 $A$ 后反推它由各原因 $B_k$ 引起的概率（要求 $P(A) > 0$）。

</details>

**e.g.**（短信问题）某学生每天收到 $i$ 条短信的概率为 $\dfrac{\lambda^i e^{-\lambda}}{i!}$，记为 $B_i$（即 $B_i$ = "每天收到 $i$ 条短信"，诸 $B_i$ 构成 $S$ 的一个划分）；每条短信阅读概率为 $p$（各条是否阅读相互独立）。求 $P(\text{每天阅读 } k \text{ 条短信})$（设为 $A$）。

收到 $n$ 条时恰阅读 $k$ 条的条件概率为二项分布 $\binom{n}{k}p^k(1-p)^{n-k}$，由乘法公式并对划分 $\{B_n\}$ 用全概率公式：

$$P(A) = P(B_k)\,p^k + P(B_{k+1})\binom{k+1}{k}p^k(1-p) + \cdots = \sum_{n=k}^{+\infty} P(B_n)\binom{n}{k}p^k(1-p)^{n-k}$$

代入 $P(B_n) = \dfrac{\lambda^n e^{-\lambda}}{n!}$ 并整理：

$$P(A) = \sum_{n=k}^{+\infty} \frac{\lambda^n e^{-\lambda}}{n!} \cdot \frac{n!}{k!\,(n-k)!}\, p^k (1-p)^{n-k} = \frac{(\lambda p)^k e^{-\lambda}}{k!} \sum_{n=k}^{+\infty} \frac{[\lambda(1-p)]^{n-k}}{(n-k)!}$$

由 $e^x = \sum\limits_{i=0}^{+\infty} \dfrac{x^i}{i!}$ 展开得

$$P(A) = \frac{(\lambda p)^k e^{-\lambda}}{k!}\, e^{\lambda(1-p)} = \frac{(\lambda p)^k}{k!}\, e^{-\lambda p}$$

（推导衔接步由AI补全）

<details markdown="1">
<summary><strong>【FA：结论——被阅读短信数仍服从泊松分布】</strong></summary>

答案 $\dfrac{(\lambda p)^k}{k!}e^{-\lambda p}$ 恰是参数为 $\lambda p$ 的泊松分布：若收到条数 $X \sim P(\lambda)$，每条独立以概率 $p$ 被阅读，则被阅读条数 $\sim P(\lambda p)$。这叫泊松分布的**稀疏化（thinning）**：把每条短信以概率 $p$ "筛"一遍，筛剩下的仍是泊松分布，只是参数乘 $p$。

</details>

#### 1.5 独立性

**定义**：若 $P(AB) = P(A)P(B)$，则称 $A$ 与 $B$ **独立**。当 $P(A)P(B) \ne 0$ 时，独立等价于

$$P(B \mid A) = P(B) \quad \text{或} \quad P(A \mid B) = P(A)$$

即一事件发生与否不改变另一事件发生的概率。

**补事件替换**：$A$、$B$ 独立，则随意替换 $\overline{A}$、$\overline{B}$ 也独立，即 $A$ 与 $\overline{B}$、$\overline{A}$ 与 $B$、$\overline{A}$ 与 $\overline{B}$ 均独立。

<details markdown="1">
<summary><strong>【FA：补事件替换为何保持独立（证明）】</strong></summary>

以 $A$ 与 $\overline{B}$ 为例：$P(A\overline{B}) = P(A) - P(AB) = P(A) - P(A)P(B) = P(A)\left[1 - P(B)\right] = P(A)P(\overline{B})$。其余情形同理，对 $\overline{A}$、$\overline{B}$ 反复套用即可。

</details>

### 2026.9.30

#### 二、随机变量及其概率分布（离散型）

**1. 两点分布**

$$P(X = k) = p^k (1-p)^{1-k}, \qquad k = 0, 1$$

记作 $X \sim B(1, p)$（即 0-1 分布）。

**2. 二项分布**

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \qquad k = 0, 1, 2, \ldots, n$$

记作 $X \sim B(n, p)$。

**3. 泊松分布**

$$P(X = k) = \frac{\mathrm{e}^{-\lambda} \lambda^k}{k!}, \qquad k = 0, 1, 2, \ldots$$

记作 $X \sim P(\lambda)$ 或 $X \sim \pi(\lambda)$。当 $n$ 足够大、$p$ 足够小时，二项分布可近似为泊松分布，$\lambda = np$。

<details markdown="1">
<summary><strong>【FA：泊松定理（二项分布的泊松近似）】</strong></summary>

设 $\lambda = np$ 固定（$n$ 增大时 $p$ 相应减小），则对每个固定的 $k$：

$$\lim_{n \to \infty} \binom{n}{k} p^k (1-p)^{n-k} = \frac{\mathrm{e}^{-\lambda}\lambda^k}{k!}$$

即 $n$ 大、$p$ 小时 $B(n, p) \approx P(np)$。经验上 $n \ge 20$、$p \le 0.05$ 时近似已相当好。直观：大量独立个体各自发生"稀有事件"，稀有事件的总次数天然趋于泊松分布。（FA 补充）

</details>

#### 连续型随机变量

**1. 随机变量的概率分布函数**

$$F(x) = P\{X \le x\}$$

且 $F(x + 0) = F(x)$，即 $F$ 处处**右连续**。

<details markdown="1">
<summary><strong>【FA：右连续与"左开右闭"辨析】</strong></summary>

$F(x + 0) = F(x)$ 说的是 $F$ **右连续**；有了它才能用分布函数算任意区间的概率

$$P\{a < X \le b\} = F(b) - F(a)$$

这里的区间 $(a, b]$ 是**左开右闭**的——笔记里写的"左闭右开"应是口误（"左闭右开"的 $[a, b)$ 对应的是 $F(x) = P\{X < x\}$ 那种左连续定义，与本页 $F(x) = P\{X \le x\}$ 的定义不配套，别混用）。分布函数另外两条基本性质：单调不减；$F(-\infty) = 0$、$F(+\infty) = 1$。（FA 补充）

</details>

**2. 连续型随机变量**（10.14 补记：*这节课在打生日贺信的草稿，听了整个乐呵……*）

$$F(x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t$$

称 $X$ 为**连续型**随机变量，$f(x)$ 为**密度函数**。分段点处 $F$ 必须连续（$F(2^-) = F(2)$）。

**① 均匀分布**

$$f(x) = \begin{cases} \dfrac{1}{b-a}, & x \in (a, b) \\[2pt] 0, & \text{其他} \end{cases} \qquad X \sim U(a, b)$$

$$F(x) = \begin{cases} 0, & x < a \\[2pt] \dfrac{x-a}{b-a}, & a \le x < b \\[2pt] 1, & x \ge b \end{cases}$$

**② 正态分布**

$$f(x) = \frac{1}{\sqrt{2\pi}\,\sigma}\,\mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}}, \qquad \mu \in \mathbb{R},\ \sigma > 0, \qquad X \sim N(\mu, \sigma^2)$$

$$F(x) = \int_{-\infty}^{x} \frac{1}{\sqrt{2\pi}\,\sigma}\,\mathrm{e}^{-\frac{(t-\mu)^2}{2\sigma^2}}\,\mathrm{d}t, \qquad \sigma \text{ 越大越扁}$$

**标准正态分布**：$\mu = 0$、$\sigma = 1$：$\varphi(x) = \dfrac{1}{\sqrt{2\pi}}\mathrm{e}^{-\frac{x^2}{2}}$，$\Phi(x) = \displaystyle\int_{-\infty}^{x} \dfrac{1}{\sqrt{2\pi}}\,\mathrm{e}^{-\frac{t^2}{2}}\,\mathrm{d}t$。

一般化标准：令 $t = \dfrac{x - \mu}{\sigma}$。

**③ 指数分布**

$$f(x) = \begin{cases} \lambda\mathrm{e}^{-\lambda x}, & x > 0 \\ 0, & x \le 0 \end{cases} \qquad X \sim E(\lambda)$$

$$F(x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t = \begin{cases} 1 - \mathrm{e}^{-\lambda x}, & x > 0 \\ 0, & x \le 0 \end{cases}$$

$$P\{X > t_0 + t\} = P\{X > t_0\}\cdot P\{X > t\}$$

（两边同除 $P\{X > t_0\}$ 即得无记忆性的条件概率形式 $P\{X > t_0 + t \mid X > t_0\} = P\{X > t\}$。）

### 2026.10.10（2.5 随机变量函数的分布；10.14 自学补）

> 笔记原话：显然这节课在写生日贺信，一点没听。

**定义**：$X$ 为连续型随机变量，密度函数 $f_X(\cdot)$，随机变量 $Y = g(X)$。若 $y = g(x)$ **严格单调**且处处可导，$y = g(x)$ 反函数 $x = h(y)$，则 $Y$ 的密度函数：

$$f_Y(y) = \begin{cases} f_X(h(y))\left|h'(y)\right|, & y \in D \\ 0, & y \notin D \end{cases}$$

（FA，不懂）

这个方法应该不如后面写的等价法万能。

<details markdown="1">
<summary><strong>【FA：公式法从哪来、等价法为什么更万能】</strong></summary>

公式法的来源：设 $g$ 单调增，则 $F_Y(y) = P\{g(X) \le y\} = P\{X \le h(y)\} = F_X(h(y))$，两边求导得 $f_Y(y) = f_X(h(y))\,h'(y)$；$g$ 单调减时不等号翻转，多一层 $|\cdot|$。$|h'(y)|$ 就是"拉伸倍数"——概率元 $\mathrm{d}x$ 映到 $\mathrm{d}y$ 要除以伸缩率。**等价法**就是不用背这套：先算 $F_Y(y) = P\{g(X) \le y\}$（把 $X$ 的事件翻译成 $Y$ 的事件），再求导。它不要求单调、不要求记公式，分段也能处理，所以更"万能"。（FA 补充）

</details>

### 2026.10.14（第八/九周小测 · 等价法；二维随机变量开篇）

> 第三次签到（签满八次即可）。

#### 小测：等价法（万能）

**e.g.** $X \sim U(-1, 2)$，求 $Y = |X|$ 的概率密度 $f_Y(y)$。

图：$y = |x|$ 在 $(-1, 2)$ 上的 V 形折线（$x = -1$ 处 $y = 1$，$x = 2$ 处 $y = 2$）。

$-1 < x < 2 \Rightarrow 0 < Y < 2$（有效范围）。左侧（$Y < 0$）为 0，右侧（$Y > 2$）为 1。

若介于有效区间之间 $0 < Y < 2$：$(-1, 1)$ 左右对称，$(1, 2)$ 不对称，则分段：

1° $0 < Y < 1$：$P(-y \le x \le y) = \displaystyle\int_{-y}^{y} \frac{1}{3}\,\mathrm{d}x = \frac{2}{3}y$（FA，不懂）

2° $1 \le Y < 2$：$P(-y \le x \le y) = \displaystyle\int_{-y}^{y} f(x)\,\mathrm{d}x$，$-y$ 在 $-1$ 左侧（下限截到 $-1$）：

$$= \int_{-1}^{y} \frac{1}{3}\,\mathrm{d}x = \frac{y+1}{3}$$

（FA，$\frac{1}{3}$ 是怎么来的）

则

$$F_Y(y) = \begin{cases} 0, & y < 0 \\[2pt] \frac{2}{3}y, & 0 \le y < 1 \\[2pt] \frac{y+1}{3}, & 1 \le y < 2 \\[2pt] 1, & y \ge 2 \end{cases} \qquad \xrightarrow{\ \text{求导}\ } \qquad f_Y(y) = \begin{cases} \frac{2}{3}, & 0 < y < 1 \\[2pt] \frac{1}{3}, & 1 \le y < 2 \\[2pt] 0, & \text{其他} \end{cases}$$

（FA，补全条件）

**若不好分段，先不积：**

**e.g.** $X \sim N(0, 1)$，求 $Z = X^2$ 的概率密度 $f_Z(z)$。

$X$ 的有效范围：$-\infty \to +\infty$；$Z$：$0 \to +\infty$。

由 $F_Z(z) = P(Z \le z) = P\{X^2 \le z\}$：

$$F_Z(z) = \begin{cases} 0, & z \le 0 \\[2pt] \displaystyle\int_{-\sqrt{z}}^{\sqrt{z}} \frac{1}{\sqrt{2\pi}}\,\mathrm{e}^{-\frac{x^2}{2}}\,\mathrm{d}x, & z > 0 \end{cases}$$

不积分，求导：$f_Z(z) = F_Z'(z) = \dfrac{1}{\sqrt{2\pi z}}\,\mathrm{e}^{-\frac{z}{2}}$（FA，如何积分）

**稍复杂一些：**

**e.g.** $f(x) = \begin{cases} \dfrac{2x}{\pi^2}, & 0 < x < \pi \\[2pt] 0, & \text{else} \end{cases}$，求 $Y = \sin X$ 的概率密度。

$$F_Y(y) = P(Y \le y) = P\{\sin X \le y\}, \qquad X: (0, \pi) \Rightarrow Y: (0, 1]$$

左侧为 0，右侧为 1。当 $Y \in (0, 1)$（笔记原文写"或"，实为两段概率**相加**）：

$$F_Y(y) = P(0 < x \le \arcsin y) + P(\pi - \arcsin y \le x < \pi)$$

图：正弦曲线 $y = \sin x$ 的拱形与水平线 $y$ 交于 $x = \arcsin y$ 和 $x = \pi - \arcsin y$。（FA，补全，看不懂老师的神秘板书字体）（咱不会写字的话可以做 PPT 的）

<details markdown="1">
<summary><strong>【FA：三处 FA 的补全】</strong></summary>

- **$\dfrac{1}{3}$ 从哪来**：$X \sim U(-1, 2)$ 的密度在长度为 3 的区间 $(-1, 2)$ 上恒为 $\dfrac{1}{3}$，落在其中任何一段 $[a, b]$ 的概率都是 $\dfrac{b-a}{3}$。1° 里 $y < 1$ 时区间 $[-y, y]$ 整体在 $(-1, 2)$ 内，长 $2y$，得 $\dfrac{2y}{3}$；2° 里被截后实际区间 $[-1, y]$，长 $y + 1$，得 $\dfrac{y+1}{3}$。
- **补全条件**：密度函数的分段端点（$y = 0, 1, 2$）处取值不影响积分，可任取；要求的是 $F_Y$ 在端点处连续衔接、$f_Y$ 分段不重不漏。
- **如何"积分"**：$\int_{-\sqrt z}^{\sqrt z} \mathrm{e}^{-x^2/2}\mathrm{d}x$ 积不出初等函数，不用积——变限求导即可：$\dfrac{\mathrm{d}}{\mathrm{d}z}\displaystyle\int_{-\sqrt z}^{\sqrt z} g(x)\,\mathrm{d}x = g(\sqrt z)\cdot\dfrac{1}{2\sqrt z} + g(-\sqrt z)\cdot\dfrac{1}{2\sqrt z}$，$g$ 为偶函数，合并 $= \dfrac{g(\sqrt z)}{\sqrt z} = \dfrac{1}{\sqrt{2\pi z}}\mathrm{e}^{-z/2}$（这正是 $\chi^2(1)$ 分布的密度）。
- **$\sin X$ 例的补全**：$F_Y(y) = \displaystyle\int_0^{\arcsin y} \frac{2x}{\pi^2}\mathrm{d}x + \int_{\pi - \arcsin y}^{\pi} \frac{2x}{\pi^2}\,\mathrm{d}x = \frac{(\arcsin y)^2}{\pi^2} + \frac{\pi^2 - (\pi - \arcsin y)^2}{\pi^2} = \frac{2}{\pi}\arcsin\,y$，求导得

$$f_Y(y) = \frac{2}{\pi\sqrt{1 - y^2}} \quad (0 < y < 1), \qquad f_Y(y) = 0 \ \ (\text{其他})$$

（两段积分里 arcsin 的二次项恰好消掉。）（解答由AI补全）

</details>

#### 三、二维随机变量（开篇；本页未标日期，按扫描顺序接于 10.14）

**3.1 二维离散**

$$P\{X = x_i,\ Y = y_j\} = p_{ij} \qquad \text{（联合分布）}$$

**边际分布**：$P\{X = x_i\} = p_{i\cdot}$，$P\{Y = y_j\} = p_{\cdot j}$。

**条件分布**：

$$P\{X = x_i \mid Y = y_j\} = \frac{P\{X = x_i,\ Y = y_j\}}{P\{Y = y_j\}} = \frac{p_{ij}}{p_{\cdot j}}$$

联合 $\Rightarrow$ 边际唯一，边际 $\nRightarrow$ 联合。

### 2026.10.21（3.2 二维随机变量的分布函数 · 3.3 二维连续型随机变量 · 3.4 独立性）

> 第四次签到。
>
> 小测：期望 + 方差 + ……（一道大题、四个小问，25 min 左右）（九周一次，十四/五周一次）。

#### 3.2 二维随机变量的分布函数

**分布函数** $F(x, y) = P\{X \le x,\ Y \le y\}$：单调不减、右连续。

若 $x_2 > x_1$，$y_2 > y_1$，则

$$F(x_2, y_2) + F(x_1, y_1) - \left[F(x_2, y_1) + F(x_1, y_2)\right] \ge 0$$

（矩形区域概率非负。）

**边际分布函数**：

$$F_X(x) = P\{X \le x\} = F(x, +\infty)$$

**条件分布函数**：

$$F_{Y|X}(y \mid x_i) = P\{Y \le y \mid X = x_i\}$$

$$F_{Y|X}(y \mid x) = \lim_{\delta \to 0^+} P\{Y \le y \mid \underbrace{x < X \le x + \delta}_{\text{连续}}\ \text{或}\ \underbrace{x - \delta < X \le x + \delta}_{\text{任意}}\} = P\{Y \le y \mid X = x\}$$

#### 3.3 二维连续型随机变量

$$F(x, y) = \int_{-\infty}^{x}\int_{-\infty}^{y} f(u, v)\,\mathrm{d}u\,\mathrm{d}v \qquad \text{对}\ \forall x, y\ \text{成立}$$

则称 $f(x, y)$ 为**联合密度函数**。

连续点处 $\dfrac{\partial^2 F(x, y)}{\partial x\, \partial y} = f(x, y)$；$D$ 内 $P\{(X, Y) \in D\} = \displaystyle\iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y$。

**二重积分方法**：$\displaystyle\int_0^1 \mathrm{d}y \int_{-y}^{y} f(x, y)\,\mathrm{d}x$。$\mathrm{d}y$ 写前面：先积 $\mathrm{d}x$，$y$ 固定，$x$ 范围用 $y$ 表示（后面的范围用前面的表示）。写分数配平【?】。

**边际分布**：

$$F_X(x) = P\{X \le x\} = P\{X \le x,\ Y \in (-\infty, +\infty)\}$$

$$F_X(x) = \int_{-\infty}^{x}\left[\int_{-\infty}^{+\infty} f(x, y)\,\mathrm{d}y\right]\mathrm{d}x = \int_{-\infty}^{x}\mathrm{d}x\int_{-\infty}^{+\infty} f(x, y)\,\mathrm{d}y$$

$$f_X(x) = \int_{-\infty}^{+\infty} f(x, y)\,\mathrm{d}y, \qquad f_Y(y) = \int_{-\infty}^{+\infty} f(x, y)\,\mathrm{d}x$$

（$-\infty \sim +\infty$ 要根据实际条件改成实际范围。）

$$P\{Y \le 2\} = \int_{-\infty}^{2} f_Y(y)\,\mathrm{d}y = \iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y$$

**条件分布**：

$$f_{Y|X}(y \mid x) = \frac{f(x, y)}{f_X(x)}, \qquad -\infty < y < +\infty$$

**二元均匀分布**：

$$f(x, y) = \begin{cases} \dfrac{1}{D\ \text{的面积}}, & (x, y) \in D \\[6pt] 0, & \text{其他} \end{cases}$$

**二元正态**：$(X, Y) \sim N(\mu_1, \mu_2;\ \sigma_1^2, \sigma_2^2;\ \rho)$

$$f_X(x) = \frac{1}{\sqrt{2\pi}\,\sigma_1}\,\mathrm{e}^{-\frac{(x - \mu_1)^2}{2\sigma_1^2}} \qquad \text{（FA，补全）}$$

<details markdown="1">
<summary><strong>【FA：二元正态的边际密度】</strong></summary>

指数上补全的是 $-\dfrac{(x - \mu_1)^2}{2\sigma_1^2}$：二元正态的每个**边际都是一维正态**，$X \sim N(\mu_1, \sigma_1^2)$、$Y \sim N(\mu_2, \sigma_2^2)$，$f_Y(y) = \dfrac{1}{\sqrt{2\pi}\sigma_2}\exp\left(-\dfrac{(y - \mu_2)^2}{2\sigma_2^2}\right)$。注意边际密度里**不含 $\rho$**——所以从"两个边际都是正态"推不出"联合是二元正态"，联合分布的信息量大于边际。（FA 补充）

</details>

#### 3.4 独立性

**独立**：

$$F(x, y) = F_X(x)\cdot F_Y(y)$$

