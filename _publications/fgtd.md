---
title: "FGTD: Face Generation from Textual Description"
collection: publications
category: conference
permalink: /publication/fgtd
date: 2022-01-11
venue: 'Inventive Communication and Computational Technologies: Proceedings of ICICCT 2021'
paperurl: 'https://link.springer.com/chapter/10.1007/978-981-16-5529-6_43'
codeurl: 'https://github.com/kad99kev/FGTD'
citation: 'Deorukhkar, K., Kadamala, K., & Menezes, E. (2022). FGTD: face generation from textual description. In Inventive Communication and Computational Technologies: Proceedings of ICICCT 2021 (pp. 547-562). Singapore: Springer Nature Singapore.'
---

The majority of current text-to-image generation tasks are limited to creating images like flowers (Oxford 102 Flower), birds (CUB-200–2011), and common objects (COCO) from captions. The existing face datasets such as Labeled Faces in the Wild and MegaFace lack description while datasets like CelebA have attributes associated but do not provide feature descriptions. Thus, in this paper, we build upon an existing algorithm to create captions with the attributes provided in the CelebA dataset, which can not only generate one caption, but it can also be extended to generate N captions per image. We utilize sentence BERT to encode these descriptions into sentence embeddings. We then perform a comparative study of three models-DCGAN, SAGAN, and DFGAN, by using these sentence embeddings along with a latent noise as the inputs to the different architectures. Finally, we calculate the Inception Scores and the FID values to compare the output images across different architectures.
