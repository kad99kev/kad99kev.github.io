\#RL

A Contextual-Bandit Approach to Personalized News Article Recommendation

Link - http://arxiv.org/abs/1003.0146

````bibtex
@inproceedings{li2010contextual,
  title={A contextual-bandit approach to personalized news article recommendation},
  author={Li, Lihong and Chu, Wei and Langford, John and Schapire, Robert E},
  booktitle={Proceedings of the 19th international conference on World wide web},
  pages={661--670},
  year={2010}
}
````

[Bibliography](../Bibliography.md)

---

Contextual bandit proceeds in discrete trials
$t = 1, 2, 3, ...$

In a trial $t$:

1. Observe current user $u_t$ and set of actions/arms $A_t$. Context vector $x\_{t, a}$ for $a \in A_t$ summarises information of both user $u_t$ and arm $a$.
1. Based on observed payoff from previous trials, choose arm $a_t \in A_t$ and receive payoff $r\_{t, a_t}$ whose expectation depends on both user $u_t$ and arm $a_t$.
1. Improve arm-selection strategy with new observation $(x\_{t, a_t}, a_t, r\_{t, a_t})$.

Note: No feedback (payoff $r\_{t, a_t}$) is observed for unchoosen arms $a \ne a_t$.

Total T-trial payoff is defined as $\sum^T\_{t=1}r\_{t, a_t}$ 
Optimal expected T-trial payoff as $\mathbb E\[\\sum^T\_{t=1}r\_{t, a^*\_t}\]$ where $a^*\_t$ is the arm with maximum expected payoff at trial $t$.

To minimise T-trial regret $R_A(T)$
$R_A (T)  =^{\text{def}} \mathbb E\[\\sum^T\_{t=1}r\_{t, a^\**t}\] - \mathbb E\[\\sum^T*{t=1}r\_{t, a_t}\]$ 

## Difference between Context-free Bandit

* In $K$-armed bandit, the arm set $A_t$ remains unchanged and contains $K$ arms for all $t$.
* The user $u_t$ and the context $(x\_{t, 1}, ... x\_{t, K})$ is the same for all $t$.

In paper's context - each article is a pool of arms. When article is clicked, payoff is 1, otherwise 0 (they measure the click-through rate).

Exploration increases short-term regret with the hope of decreasing long-term regret.

## Disjoint Linear Models

Parameters are not shared among different arms. To calculate the coefficient vector $\theta^\*\_a$, the authors use ridge regression fot solve for $\hat{\theta}\_a$. The upper confidence bound has to be calculated at each trial in order to select an action. See paper for equations, section 3.1.

The score for an action $a$ at a particular time $t$ is the sum of the estimated/expected payoff $\theta^T_a x\_{t, a}$ and the uncertainty of the model $\sqrt{x^T\_{t, a} A^{-1}*a x*{t, a}}$.
More formally,
$p\_{t, a} = \theta^T_a x\_{t, a} + \alpha \sqrt{x^T\_{t, a} A^{-1}*a x*{t, a}}$
where, $\alpha$ is learning rate.

## Disjoint Hybrid Models

This is currently out of scope and not needed for my current use case. If needed, see equations in paper, section 3.2.

## Evaluation Methodology

If the current history matches the same arm chosen by policy $\pi$ and the logging policy, then that event is retained and added to history and the total payoff $R_t$ is updated. The authors use a uniform random distribution as a logging policy. They prove that the two processes are equivalent. See section 4 for more details.
