\#RL

Discovering faster matrix multiplication algorithms with reinforcement learning

Link - https://www.deepmind.com/blog/discovering-novel-algorithms-with-alphatensor

````bibtex
@Article{AlphaTensor2022,
  author  = {Fawzi, Alhussein and Balog, Matej and Huang, Aja and Hubert, Thomas and Romera-Paredes, Bernardino and Barekatain, Mohammadamin and Novikov, Alexander and Ruiz, Francisco J. R. and Schrittwieser, Julian and Swirszcz, Grzegorz and Silver, David and Hassabis, Demis and Kohli, Pushmeet},
  journal = {Nature},
  title   = {Discovering faster matrix multiplication algorithms with reinforcement learning},
  year    = {2022},
  volume  = {610},
  number  = {7930},
  pages   = {47--53},
  doi     = {10.1038/s41586-022-05172-4}
}
````

[Bibliography](../Bibliography.md)

---

The authors come up with a better algorithm than Strassen for matrix multiplication.

To do this, they model this task as a single-player game.

*“The game state after step t is described by a tensor $S_t$, which is initially set to the target tensor we wish to decompose: $S_0 =T_n$ . In each step t of the game, the player selects a triplet ($u^{(t)}, v^{(t)}, w^{(t)}$), and the tensor $S_t$ is updated by subtracting the resulting rank-one tensor: $S_t \leftarrow S\_{t-1} - u^{(t)} \otimes v^{(t)} \otimes w^{(t)}$ . The goal of the player is to reach the zero tensor $S_t = 0$ by applying the smallest number of moves. When the player reaches the zero tensor, the sequence of selected factors satisfies $T_n = \sum^{R}*{t=1} u^{(t)} \otimes v^{(t)} \otimes w^{(t)}$ (where R denotes the number of moves), which guarantees the correctness of the resulting matrix multiplication algorithm. To avoid playing unnecessarily long games, we limit the number of steps to a maximum value, $R*{limit}$.”*

# Rewards

* Provide a reward of -1 to encourage finding the shortest path to zero tensor.
* Terminates with non-zero tensor after $R\_{limit}$ then provide terminal reward equal to $-\gamma(S\_{R\_{limit}})$ where $S\_{R\_{limit}}$ is the upper bound on the rank of the terminal tensor.
* Rank reward optimises for rank/complexity of algorithm but other reward schemes can be used to optimise properties like practical runtime.

Generate sythentic dataset and use it to train network with supervised + reinforcement learning loss.

Use [change of basis](https://eli.thegreenplace.net/2015/change-of-basis-in-linear-algebra/) ([YouTube](https://www.youtube.com/watch?v=P2LTAUO1TdA)) technique to introduce diversity into the games. $A^{-1}MA$ change of basis.

# How Tensors are Created

Synthetic demonstrations are used to bootstrap learning: While decomposing a tensor is NP-hard, the inverse task of constructing a tensor from factors is trivial. We generate random factors, combine them into a tensor, then train the network to recover the factors. ([Source](https://www.furidamu.org/blog/2022/10/05/discovering-matrix-multiplication-algorithms-with-alphatensor/))
