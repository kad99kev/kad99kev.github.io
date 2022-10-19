\#knowledge

## When a policy is an off-policy?

**A**: An off-policy method uses a **different** policy for exploration than the policy that is learnt.

**B**: An off-policy method uses an **independent** policy for exploration from the policy that is learnt.

**C**: The data used for learning is a combination of several different policies collected over time. For example, DQNs in [human-level-control-dqn](../RL/human-level-control-dqn.md).

## Trajectory

Sequence of states, actions and rewards is known as a trajectory.

## Difference between Monte Carlo and Temporal Difference

MC methods wait till the end of the episode to estimate the value for a given state. TD on the other hand, learns the estimates without waiting for the final outcome.

## Policy Gradients and Actor Critic Methods

[policy-gradients-and-actor-critics](policy-gradients-and-actor-critics.md)
