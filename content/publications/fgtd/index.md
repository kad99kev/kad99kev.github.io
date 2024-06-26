---
title: "FGTD: Face Generation from Textual Description"
excerpt: "K. Deorukhkar, K. Kadamala, and E. Menezes, ‘FGTD: Face Generation from Textual Description’, in Inventive Communication and Computational Technologies, vol. 311, G. Ranganathan, X. Fernando, and F. Shi, Eds. Singapore: Springer Nature Singapore, 2022, pp. 547–562. doi: 10.1007/978-981-16-5529-6_43"
date: 2022-01-11
author: "Kalpana Deorukhkar, Kevlyn Kadamala and Elita Menezes"
draft: false
layout: single
categories:
  - Journal Papers
links:
- icon: file-pdf
  icon_pack: fas
  name: PDF
  url: https://www.researchgate.net/profile/Kevlyn-Kadamala/publication/357758930_FGTD_Face_Generation_from_Textual_Description/links/61e886a2dafcdb25fd39dffd/FGTD-Face-Generation-from-Textual-Description.pdf
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/kad99kev/FGTD
---

Majority of current text-to-image generation tasks are limited to creating images like flowers (Oxford 102 Flower), birds (CUB-200-2011), and Common Objects (COCO) from captions. The existing face datasets such as Labeled Faces in the Wild and MegaFace lack description while datasets like CelebA have attributes associated but do not provide feature descriptions. Thus, in this paper we build upon an existing algorithm to create captions with the attributes provided in the CelebA dataset, which can not only generate one caption but it can also be extended to generate N captions per image. We utilise Sentence BERT to encode these descriptions into sentence embeddings. We then perform a comparative study of three models - DCGAN, SAGAN and DFGAN, by using these sentence embeddings along with a latent noise as the inputs to the different architectures. Finally, we calculate the Inception Scores and the FID values to compare the output images across different architectures.

Cite:

```bib
@incollection{deorukhkar2022fgtd,
  title={FGTD: Face Generation from Textual Description},
  author={Deorukhkar, Kalpana and Kadamala, Kevlyn and Menezes, Elita},
  booktitle={Inventive Communication and Computational Technologies},
  pages={547--562},
  year={2022},
  publisher={Springer}
}
```