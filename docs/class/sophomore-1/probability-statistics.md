# 概率论与数理统计

- **任课教师**：郑志浩
- **学期**：2026-2027 秋冬学期

---

## 分数构成

作业 25% + 到课 5% + 小测 20% + SPOC 10% + 期末 40%（2026.9.16 首课宣布）。其中 SPOC 含四个小测和一个讨论（黄炜）。

## 课堂笔记

> 【FA】= For AI，笔记中留给 AI 补充的条目；对应答案由 AI 撰写，请重点复核。

### 2026.9.16

#### 1.1 样本空间 随机事件

<details open markdown="1">
<summary><strong>【样本空间与随机事件（补充定义）】</strong></summary>

样本空间 $S$：随机试验所有可能结果（样本点）构成的集合；随机事件：样本空间的子集。笔记本节主要记录事件之间的关系与运算。

</details>

<details open markdown="1">
<summary><strong>【互斥（互不相容）事件】</strong></summary>

$A \cap B = \varnothing$：$A$、$B$ 不能同时发生。互斥 $\Rightarrow$ 可加：$P(A \cup B) = P(A) + P(B)$。

</details>

<details open markdown="1">
<summary><strong>【对立事件（逆事件）】</strong></summary>

$A \cup B = S$ 且 $A \cap B = \varnothing$（"非此即彼"）；记作 $\overline{A}$ 或 $A^c$。补充：对立必互斥，互斥不一定对立（还须并起来为 $S$）；$P(\overline{A}) = 1 - P(A)$。

</details>

<details open markdown="1">
<summary><strong>【差事件】</strong></summary>

$$A - B = A \cap \overline{B}$$

即 $A$ 发生且 $B$ 不发生。

</details>

<details open markdown="1">
<summary><strong>【德摩根律】</strong></summary>

$$\overline{\bigcup_{j=1}^{n} A_j} = \bigcap_{j=1}^{n} \overline{A_j}, \qquad \overline{\bigcap_{j=1}^{n} A_j} = \bigcup_{j=1}^{n} \overline{A_j}$$

即"并的补等于补的交，交的补等于补的并"；对可列个事件同样成立。

</details>

#### 1.2 频率与概率

<details open markdown="1">
<summary><strong>【频率】</strong></summary>

$$f_n(A) = \frac{n_A}{n} = \frac{A\ \text{发生的次数}}{\text{试验总次数}}$$

补充：频率随试验次数 $n$ 波动，但当 $n$ 充分大时稳定地在某个常数附近摆动（频率的稳定性），该常数即概率——这是以频率定义概率的客观基础。

</details>

<details open markdown="1">
<summary><strong>【概率的公理化定义】</strong></summary>

$P(A)$ 为事件 $A$ 的概率，若它作为集合函数满足：

1. **非负性**：$P(A) \ge 0$；
2. **规范性**：$P(S) = 1$；
3. **可列可加性**：对两两互斥的可列个事件（$\forall i \ne j,\ A_iA_j = \varnothing$），$P\left(\bigcup_{j=1}^{+\infty} A_j\right) = \sum_{j=1}^{+\infty} P(A_j)$。

</details>

<details open markdown="1">
<summary><strong>【概率的性质：可加性、补事件与零概率】</strong></summary>

- 可列可加性：$P\left(\bigcup_{j=1}^{+\infty} A_j\right) = \sum_{j=1}^{+\infty} P(A_j)$（由公理直接得到）；
- $P(A) + P(\overline{A}) = 1$；
- $P(A) = 0$ **不一定**不可能，$P(A) = 1$ **不一定**必然。解释：几何概型中"恰好取中某一点"的概率为 $0$ 却可能发生（连续情形单点不占测度）；其对面的概率为 $1$ 却不必然发生。

</details>

<details open markdown="1">
<summary><strong>【减法公式 $P(B-A) = P(B) - P(AB)$】</strong></summary>

对**任意**事件 $A$、$B$ 成立：$P(B - A) = P(B) - P(AB)$。补充：当 $A \subset B$ 时退化为 $P(B-A) = P(B) - P(A)$，且由此可得单调性 $P(B) \ge P(A)$。

推导方法：1° 维恩图——$B$ 挖去与 $A$ 重叠的部分剩 $B - A$；2° 理论推导【FA】：

$B$ 中任一样本点要么同时属于 $A$（此时属 $AB$），要么不属于 $A$（此时属 $B - A$），且两部分互不相交，即 $B = (B - A) \sqcup AB$。由可加性 $P(B) = P(B - A) + P(AB)$，移项即得。

</details>

<details open markdown="1">
<summary><strong>【一般加法公式 $P(A \cup B) = P(A) + P(B) - P(AB)$】</strong></summary>

对任意事件 $A$、$B$ 成立。$A$、$B$ 互斥时 $P(AB) = 0$，退化为 $P(A \cup B) = P(A) + P(B)$（呼应"互斥 $\Rightarrow$ 可加"）。

推导【FA 补全】：分解

$$A \cup B = (B - A) \sqcup A$$

事实上 $A \cup B$ 中任一样本点或者在 $A$ 中，或者不在 $A$ 中而在 $B$ 中（属 $B - A$）；且 $A$ 与 $B - A$ 互斥（不可能"在 $A$ 中又不在 $A$ 中"）。由可加性并代入减法公式：

$$P(A \cup B) = P(B - A) + P(A) = \left[P(B) - P(AB)\right] + P(A)$$

</details>

<details open markdown="1">
<summary><strong>【容斥原理（加法公式的推广）】</strong></summary>

$$P\left(\bigcup_{j=1}^{n} A_j\right) = \sum_{j=1}^{n} P(A_j) - \sum_{1 \le i < j \le n} P(A_iA_j) + \cdots + (-1)^{n-1} P(A_1A_2 \cdots A_n)$$

补充 $n = 3$ 情形：$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(AB) - P(AC) - P(BC) + P(ABC)$。

</details>
