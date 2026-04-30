---
title: "Enhancing HVAC control systems through transfer learning with deep reinforcement learning agents"
collection: publications
category: journal
permalink: /publication/ehcstldrl
date: 2024-01-30
venue: 'Smart Energy'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S2666955224000017'
codeurl: 'https://github.com/kad99kev/EHCSTLDRL'
citation: 'Kadamala, K., Chambers, D., & Barrett, E. (2024). Enhancing HVAC control systems through transfer learning with deep reinforcement learning agents. Smart Energy, 13, 100131.'
---

Traditionally, building control systems for heating, ventilation, and air conditioning (HVAC) relied on rule-based scheduler systems. Deep reinforcement learning techniques have the ability to learn optimal control policies from data without the need for explicit programming or domain-specific knowledge. However, these data-driven methods require considerable time and data to learn effective policies without prior knowledge. Performing transfer learning using pre-trained models avoids the need to learn the underlying data from scratch, thus saving time and resources. In this work, we evaluate reinforcement learning as a method of pretraining and fine-tuning neural networks for HVAC control. First, we train an RL agent in a building simulation environment to obtain a foundation model. We then fine-tune this model on two separate simulation environments such that one environment simulates the same building under different weather conditions while the other environment simulates a different building under the same weather conditions. We perform these experiments with two different reward functions to evaluate their effect on transfer learning. The results indicate that transfer learning agents outperform the rule-based controller and show improvements in the range of 1% to 4% when compared to agents trained from scratch.
