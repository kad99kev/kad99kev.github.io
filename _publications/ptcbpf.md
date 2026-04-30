---
title: "Improving HVAC Control with Transfer Learning: Using Padding Techniques for Cross-Building Pre-training and Fine-tuning"
collection: publications
category: journal
permalink: /publication/ptcbpf
date: 2025-06-11
venue: 'Energy and AI'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S2666546825000631'
codeurl: 'https://github.com/kad99kev/PTCBPF'
citation: 'Kadamala, K., Chambers, D., & Barrett, E. (2025). Improving HVAC control with transfer learning: Using padding techniques for cross-building pre-training and fine-tuning. Energy and AI, 21, 100531.'
---

Recent advancements have shown that control strategies using Deep Reinforcement Learning (DRL) can significantly improve the management of HVAC control and energy systems in buildings, leading to significant energy savings and better comfort. Unlike conventional rule-based controllers, they demand considerable time and data to develop effective policies. Transfer learning using pre-trained models can help address this issue. In this work, we use imitation learning (IL) as a method of pre-training and reinforcement learning (RL) for fine-tuning. However, HVAC systems can vary depending on the location, building size, structure, construction materials and weather conditions. The diversity in HVAC control systems across different buildings complicates the use of IL and RL. Neural network weights trained on the source building cannot be directly transferred to the target building because of differences in input features and the number of control equipment. To overcome this problem, we propose a novel padding method to ensure that both the source and target buildings share the same state space dimensionality. Thus, the trained neural network weights are transferable, and only the output layer must be adjusted to fit the dimensionality of the target action space. Additionally, we evaluate the performance of an existing padding technique for comparison. Our experiments show that the novel padding technique outperforms zero padding by 1.37% and training from scratch by 4.59% on average.
