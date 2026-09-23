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

