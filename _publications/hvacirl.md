---
title: "Enhancing HVAC Control Efficiency: A Hybrid Approach Using Imitation and Reinforcement Learning"
collection: publications
category: conference
permalink: /publication/hvacirl
date: 2024-08-22
venue: 'Joint European Conference on Machine Learning and Knowledge Discovery in Databases (ECML PKDD)'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-70378-2_16'
codeurl: 'https://github.com/kad99kev/HVACIRL'
citation: 'Kadamala, K., Chambers, D., & Barrett, E. (2024, August). Enhancing HVAC control efficiency: a hybrid approach using Imitation and reinforcement learning. In Joint European Conference on Machine Learning and Knowledge Discovery in Databases (pp. 256-270). Cham: Springer Nature Switzerland.'
---

This paper explores the application of imitation learning (IL) and reinforcement learning (RL) in HVAC control. IL learns to perform tasks by imitating a demonstrator, utilising a dataset of demonstrations. However, the performance of IL is highly dependent on the quality of the expert demonstration data. On the other hand, RL can adapt control policies based on different objectives, but for larger problems, it can be sample inefficient, requiring significant time and resources for training. To overcome the limitations of both RL and IL, we propose a combined methodology where IL is used for pre-training and RL for fine-tuning. We introduce a fine-tuning methodology to HVAC control inspired by a robot navigation task. Using the 5-Zone residential building environment provided by Sinergym, we collect state-action pairs from interactions with the environment using a rule-based policy to create a dataset of expert demonstrations. Our experiments show that this combined methodology improves the efficiency and performance of the RL agent by 1% to 11.35% compared to existing literature. This study contributes to the ongoing discourse on how imitation learning can enhance the performance of reinforcement learning in building control systems.
