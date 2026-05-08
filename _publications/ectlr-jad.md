---
title: "Effective Cross-Building Transfer Learning for HVAC control using Deep Reinforcement Learning and Joint Action Dynamics"
collection: publications
category: journal
permalink: /publication/ptcbpf
date: 2026-05-05
venue: 'Energy and AI'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0045790626002892'
codeurl: 'https://github.com/kad99kev/ECTRL-JAD'
citation: 'Kadamala, K., Chambers, D., & Barrett, E. (2026). Effective cross-building transfer learning for HVAC control using deep reinforcement learning and joint action dynamics. Computers and Electrical Engineering, 136, 111217.'
---

Advancements in Deep Reinforcement Learning (DRL) have demonstrated its potential to enhance heating, ventilation, and air-conditioning (HVAC) control, improving energy efficiency and occupant comfort in buildings. While DRL typically requires extensive training and data, transfer learning eliminates the need to relearn the underlying model from scratch, thereby saving time and resources. However, transfer learning may not always result in improved performance. It could harm performance if the tasks are not similar or if the representations learned during pre-training are ineffective. This paper presents a novel pre-training methodology for representation learning, enabling effective fine-tuning of reinforcement learning (RL) in cross-building transfer learning tasks. First, we pre-train a variational autoencoder (VAE) to jointly predict actions and next states using data derived from expert demonstrations. During this process, the encoder jointly learns representations for action prediction and building dynamics. We then transfer this encoder for RL fine-tuning onto the target building. Our simulations show that the proposed method outperforms existing algorithms in both same-building and cross-building transfer scenarios. Our proposed method consistently improves its sample efficiency and performance across different environments, showing improvements ranging from 1% to 12.76% in overall rewards.