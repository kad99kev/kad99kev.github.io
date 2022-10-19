\#knowledge

## Deepmind Lectures

Link - https://www.youtube.com/watch?v=bRfUxQs6xIM
Another useful link - https://www.youtube.com/watch?v=cQfOQcpYRzE

## Revision

Model-based RL

* Learn a model (supervised learning).
* Ask model, what would be the next frame based on a particular action?
* Hence, you try to learn how the system works.

Value-based RL

* Closer to true objective.
* It is easy to go from values to a policy by simply reading the highest value action in each state.

Policy-based RL

* Focus on the objective.
* Learn policy without focusing on the value.
* Drawback: It ignores valuable knowledge.

## Policy-Based Reinforcement Learning

Previously, approximate parametric value functions,
$v_w(s) \approx v\_\\pi(s)$
$q_w(s, a) \approx q\_\\pi(s, a)$

Now, directly parameterise the policy,
$\pi\_\\theta(a|s) = p(a|s, \theta)$

It is model-free RL.

## Value-Based RL vs Policy-Based RL

Value-Based

* Learnt value function.
* Implicit policy (eg: $\epsilon$-greedy).
  Policy-Based
* No value function.
* Learnt policy.
  Actor-Critic
* Learnt value function.
* Learnt policy.

## Advantages

* Can be extended to high-dimensional or continuous action spaces.
* Can learn stochastic policies.
* Sometimes policies are simple but value and models are complex.

## Disadvantages

* Obtained knowledge is specific and cannot generalise well.
* Ignores a lot of information in the data (when used in isolation).

## Policy Objective

* Goal: Given policy $\pi\_\\theta(s, a)$ with parameters $\theta$, find best $\theta$.
* How to measure quality of policy?
* Episodic environments - Use start value
  * $J_1(\theta) = v\_{\pi\_\\theta}(s_1)$
* Continuous environments - Use average values
  * $J\_{avV}(\theta) = \sum\_{s}\mu\_{\pi\_\\theta}(s)v\_{\pi\_\\theta}(s)$
    where $\mu\_\\pi(s) = p(S_t = s | \pi)$ is the probability of being in state $s$ in the long run (ratio of time spent in $s$ under policy $\pi$).
* Average reward per time-step
  * $J\_{avR} = \sum\_{s}\mu\_{\pi\_\\theta}(s)\sum\_{a}\pi\_\\theta(s,a)\sum_rp(r|s, a)r$

## Optimisation Problem

* Find $\theta$ that maximises $J(\theta)$.
* Can use any optimisation methods to do this (gradient/gradient-free).

## Policy Gradient

* $J(\theta)$ is any policy objective function.
* Policy gradient algorithms search for a local maximum in $J(\theta)$ by ascending the gradient of the policy wrt parameters $\theta$
  * $\delta \theta = \alpha \nabla\_\\theta J(\theta)$
* Where $\nabla\_\\theta J(\theta)$ is the policy gradient and $\alpha$ is step-size parameter.

## Softmax Policy

* Consider softmax policy on action preferences $h(s, a)$

* Probability of action is proportional to exponentiated weight
  
  * $\pi\_\\theta(a|s) = \frac{e^{h(s, a)}}{\sum_b e^{h(s, b)}}$
* The gradient of the log probability
  
  * $\nabla\_\\theta log\_{\pi\_\\theta} = \nabla\_\\theta h(s, a) - \sum_b \pi\_\\theta (b|s) \nabla\_\\theta h(s, b)$
* Pushes up preferences for actions that have reward and pushes down the preferences for actions that have negative reward.

## Policy Gradient Theorem

* Applies policy gradient to MDPs.

* Replaces instantaneous reward R with long-term value $q\_\\pi(s, a)$.

* Policy gradient theorem paplies to start state objective, average reward and average value objective.

* Theorem
  For any differentiable policy $\pi\_\\theta(s, a)$,
  for any of the policy objective functions $J = J_1, J\_{avR}, \text{or} \frac{1}{1 - \gamma} J\_{avV}$
  the policy gradient is
  $\nabla\_\\theta J(\theta) = \mathbb E\[q\_{\pi\_\\theta}(S, A)\nabla\_\\theta log\pi\_\\theta(A|S)\]$
  Expectation is over both states and actions.

## Actor Critic

* Critic - Update parameters $w$ of $v_w$ by n-step TD.
* Actor - Update $\theta$ by policy gradient.
