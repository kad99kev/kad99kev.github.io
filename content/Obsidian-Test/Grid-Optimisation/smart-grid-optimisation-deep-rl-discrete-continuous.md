\#grid-optimisation #RL 

Smart Grid Optimization by Deep Reinforcement Learning over Discrete and Continuous Action Space

Link - https://ieeexplore.ieee.org/document/8547862

````bibtex
@inproceedings{sogabe2018smart,
  title={Smart grid optimization by deep reinforcement learning over discrete and continuous action space},
  author={Sogabe, Tomah and Malla, Dinesh Bahadur and Takayama, Shota and Shin, Seiichi and Sakamoto, Katsuyoshi and Yamaguchi, Koichi and Singh, Thakur Praveen and Sogabe, Masaru and Hirata, Tomohiro and Okada, Yoshitaka},
  booktitle={2018 IEEE 7th World Conference on Photovoltaic Energy Conversion (WCPEC)(A Joint Conference of 45th IEEE PVSC, 28th PVSEC \& 34th EU PVSEC)},
  pages={3794--3796},
  year={2018},
  organization={IEEE}
}
````

[Bibliography](../Bibliography.md)

---

Authors have applied Deep RL using Simscape Power System.
The RL model was developed using Matlab.

Continuous State and Discrete Action $\rightarrow$ DQN.
Continuous State and Continuous Action $\rightarrow$ Gibbs Deep Policy Gradient.

## Discrete Action Space

1. Switch from Photovoltaic array to DC power generator.
1. Switch from Photovoltaic array to Load.
1. Switch from DC power generator to Load.
1. Switch for Battery charge.
1. Switch from Photovoltaic array to DC power generator and switch from Photovoltaic array to Load.
1. Switch from Photovoltaic array to DC power generator and switch for Battery charge.
1. Switch from DC power generator to Load and switch for Battery charge.

## Results

A brief mention that DQN algorithm was optimised for four discrete action controls:

* Grid on/Battery off
* Grid off/Battery on

---

[Questions](../Questions.md)

* Why is a continuous action state need and what are the actions actually doing?
