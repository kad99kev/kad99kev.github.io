\#solar-pv #RL

Improving Solar Panel Efficiency Using Reinforcement Learning

Link - https://david-abel.github.io/papers/solarl.pdf

````bibtex
@article{abel2017improving,
  title={Improving solar panel efficiency using reinforcement learning},
  author={Abel, David and Reif, Emily and Littman, Michael L},
  journal={RLDM 2017},
  year={2017}
}
````

[Bibliography](../Bibliography.md)

---

Current solar tracking algorithms are limited as they require additional hardware and they will be accurate only for a fixed window of time.

Solution $\rightarrow$ imploy a learned solar panel controller

The controller will try to maximise the total irradiance $R_t$ that hits the panel's surface.

Stages of simulation:

* Compute sun's location in sky relative to panel
* Compute the components of $R_t$
* Compute the scalars $\theta$
* Generate percepts

1. Sun's location
   * Use `pysolar`
1. Computing $R$
   * Use models of Threlkeld and Jordan (JL Threlkeld and RC Jordan. Direct solar radiation available on clear days. Heat., Piping Air Cond., 29(12), 1957) and Masters (Gilbert M Masters. Renewable and efficient electric power systems. John Wiley & Sons, 2013.)
1. Computing $\theta$
   * Given angles of panel's orientation, use Masters
1. Generating percepts
   * For real simulation - suggested to use fish eye monocular camera to provide images of sky
   * For virtual simulation:
     * The panel’s orientation and two angles representing the sun’s position in the sky relative to the panel (four state variables).
     * A 16 × 16 synthesized grayscale image of the clear sky (256 state variables, each in the range \[0, 1\]).
     * A 16 × 16 synthesized grayscale image of the sky with simulated cloud cover (256 state variables, each in the range \[0, 1\]).

Timestep = 3 minutes
Action space = {Tilt N, Tilt E, Tilt S, Tilt W, nothing}

Their implemented RL methodologies outperform the algorithmic Grena-tracker and the fixed panel setting for sunny environments (Australia). However, when it is cloudy, the RL methodologies do as well as the Grena-tracker (Iceland).

---

[Ideas](../Ideas.md)
Instead of calculating irradiance values, is there a way to get direct feedback from the solar panels itself?
