\#RL

Human-level control through deep reinforcement learning

Link - http://www.nature.com/articles/nature14236

````bibtex
@article{mnih2015human,
  title={Human-level control through deep reinforcement learning},
  author={Mnih, Volodymyr and Kavukcuoglu, Koray and Silver, David and Rusu, Andrei A and Veness, Joel and Bellemare, Marc G and Graves, Alex and Riedmiller, Martin and Fidjeland, Andreas K and Ostrovski, Georg and others},
  journal={nature},
  volume={518},
  number={7540},
  pages={529--533},
  year={2015},
  publisher={Nature Publishing Group}
}
````

[Bibliography](../Bibliography.md)

---

Use deep convolution network to approximate the optimal action-value function
$Q^{\*}(s,a) = max\_{\pi}\mathbb E\[r_t + \gamma r\_{t+1} + \gamma^2 r\_{t+2} + ... | s_t = s, a_t = a, \pi\]$
which is the maximum sum of rewards $r_t$ discounted by $\gamma$ at teach time step $t$ using a policy $\pi = P(a|s)$ after making observation $s$ and taking action $a$.

## Problem

RL is unstable and doesn't learn even when using NNs. The reasons being:

* There are correlations present in the sequence of observations.
* Small updates to $Q$ may significantly change the policy and therefore the data distribution.
* Correlations between the action-values $Q$ and target values $r + \gamma max\_{a'}Q(s', a')$.

## Solution

* Experience Replay - Randomises data which removes correlations in the observation sequence and smoothing over changes in the data distribution.
* Iterative Update - Adjust action-values ($Q$) towards the target values that are updated periodically which reduces correlations with the target (last point in the [problem](##Problem)).

Parameterise an approximate value function $Q(s, a, \theta_i)$ using CNNs where, $\theta_i$ are the weights of the network at iteration $i$.

For experience replay, store agent's experience $e_t = (s_t, a_t, r_t, s\_{t+1})$ at each timestep $t$ in a dataset $D_t = {e_1, ..., e_t}$.

During learning, draw samples/mini-batches of data from $D$, uniformly at random and apply Q-learning updates.

Q-learning update at iteration $i$ uses
$L_i(\theta_i) = \mathbb E\_{(s, a, r, s') \sim U(D)}\[(r + \gamma max\_{a'} Q(s', a'; \theta\_{i}^{-}) - Q(s, a; \theta_i)^2\]$ 
as its loss function.
$\gamma$ is the discount factor, $\theta_i$ are the network parameters at iteration $i$ and $\theta\_{i}^{-}$ are the target network parameters at iteration $i$.

The target network parameters $\theta\_{i}^{-}$ are updated with the Q-network parameters $\theta_i$ every C steps.

Frame skipping technique was applied where an action would be selected every $k$th frame. Its last action selected would be repeated on the skipped frames.

This technique is model-free and off-policy.

---

[Questions](../Questions.md)
Why can't DQN be on-policy?

* If it were on-policy, the data samples collected would be based on the current parameters of the network.
* If the current parameters maximised the left action, then the data samples collected would be dominated from the left-hand side.
* However, if the right action was now maximised, then the data samples collected would be dominated by the right-hand side.
* This would switch the training data distribution that could potentially distrupt the network.
* Off-policy allows data to originate from older versions of the policy or completely different policies. [Source](https://www.reddit.com/r/reinforcementlearning/comments/semedp/comment/hukd1vc/?utm_source=share&utm_medium=web2x&context=3)
