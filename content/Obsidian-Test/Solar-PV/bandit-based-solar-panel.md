\#solar-pv #RL 

Bandit-Based Solar Panel Control

Link - https://dl.acm.org/doi/abs/10.5555/3504035.3504980

````bibtex
@inproceedings{abel2018bandit,
  title={Bandit-based solar panel control},
  author={Abel, David and Williams, Edward C and Brawner, Stephen and Reif, Emily and Littman, Michael L},
  booktitle={Thirty-Second AAAI Conference on Artificial Intelligence},
  year={2018}
}
````

[Bibliography](../Bibliography.md)

---

This work extends the work the authors previously did in [solar-panel-efficiency-rl](solar-panel-efficiency-rl.md).

Modelled the problem as an MDP where energy received at a particular timestep defines the reward and action to change the panel's angle.

State Descriptions:

* Simple - Four variables that describe the orientation of the panel and the angles describing the relative location of the sun in the sky.
* Image - 16x16 sythensized image of a sky i.e. 256 variables.

Action Space:

* Single Axis:
  * SARSA - Tilt forward, tilt backward and nothing.
  * LinUCB - One action for each possible discrete orientation of the panel (not sure what they mean by this).
* Dual Axis:
  * SARSA - Two extra forward and backward actions to rotate along other axis.
  * LinUCB - Action for each possible orientation along both axis (again, not sure what they mean by this).

Each timestep is equal to 5 minutes.

Each agent was run in an episodic fashion with each episode consisting of the same 24 hours of daylight (ignoring nighttime) across the 4 locations (Alaska, New Orleans, Australia and Japan).

See [contextual-bandit-linucb](../RL/contextual-bandit-linucb.md) for information LinUCB.

## Results

* For most of the single-axis simulations, LinUCB performed much better than Grena tracker.
* These results were observed in both, the simple and image percepts.
* For the dual-axis simulations, the Grena tracker did better than the RL agents and bandits.
* For the prototype, LinUCB collected the most energy. However, the authors note that there was not enough date to draw any valid conclusions.

Visual percepts were used on the prototype using USB webcam and then downsampling images to 16x16 grayscale.

Collected data for several hours instead of the 24 hours used in the virtual simulation.

---

[Ideas](../Ideas.md)

* The authors suggest to continue data collection and to use more realistic data for the learning agents.
* The authors have not experiment with neural networks, CNNs could probably perform better for image percepts.
