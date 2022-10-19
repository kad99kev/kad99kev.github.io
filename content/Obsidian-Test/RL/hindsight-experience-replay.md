\#RL

Hindsight Experience Replay

Link - https://proceedings.neurips.cc/paper/2017/hash/453fadbd8a1a3af50a9df4df899537b5-Abstract.html

````bibtex
@article{andrychowicz2017hindsight,
  title={Hindsight experience replay},
  author={Andrychowicz, Marcin and Wolski, Filip and Ray, Alex and Schneider, Jonas and Fong, Rachel and Welinder, Peter and McGrew, Bob and Tobin, Josh and Pieter Abbeel, OpenAI and Zaremba, Wojciech},
  journal={Advances in neural information processing systems},
  volume={30},
  year={2017}
}
````

[Bibliography](../Bibliography.md)

---

The idea behind HER is that when a certain combination of actions are performed, it may not meet the current goal but these actions may meet another goal in different circumstances. Thus, we will replay the episode and change the goal to the one that the agent actually received.

Say if we want to acheive goal $g$ and we ended up at $s_t$ where $g \ne s_t$ then we can assign it a goal reward by replacing $g$ with $s_t$. This can be extended to a multi-goal setting where we have a set of goal states.

The simplest way to implement this algorithm is to replay each trajectory with the goal $m(s_T)$ where $s_T$ is the goal achieved in the final state of the episode.

## Algorithm

For each episode
- Sample goal and initial state
- For each timestep
- Sample action using policy
- Execute action and observe new state
- For each timestep
- Observe reward
- Store transition in replay buffer
- Sample set of additional goals for replay ($G := \mathbb S$)
- For each goal in set of goals
- Get new reward $r'$
- Store transition in replay buffer *(the crux of HER)*
- For each iteration
- Sample minibatch from replay buffer
- Perform one step of optimisation

Strategies

* Final - Use final state of environment.
* Future - Replay with $k$ random states which come from same episode as the transition being replayed and were observed after it.
* Epsiode - Replay with $k$ random states coming from same episode as transition being replayed.
* Random - Replay with $k$ random states encountered so far in whole training procedure.
