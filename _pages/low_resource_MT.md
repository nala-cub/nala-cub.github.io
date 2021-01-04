---
layout: page
title: Low-resource Machine Translation
permalink: /projects/low_resource_MT
description:
---

Recent machine translation systems for high-resource language pairs perform increasingly well. In addition to deep learning models, techniques such as pretraining, cross-lingual training, back-translation, and byte-pair encoding have contributed to performance improvements.
However, the success of state-of-the-art neural models is still heavily dependent on the availability of large amounts of (monolingual or parallel) text, which is difficult and expensive to obtain for low-resource languages. 

At NALA, we study how machine translation systems for low-resource languages can be improved. For instance, <a href="https://www.aclweb.org/anthology/2020.acl-main.389.pdf" target="_blank">recent work</a> has found that including morphological information explicitly can result in better machine translation systems. This is partially because byte-pair segmentation does not account for linguistic units within words, and the addition of this information helps models learn how to better generate words according to the underlying grammar of the language it is being trained on.
Thus, models which leverage morphological information can help closing the performance gap between high-resource and low-resource languages.

We are further studying how to best collect data for low-resource languages. Our work includes questions such as: How can we collect parallel data to train systems without professional translators? And which sentences are most useful for the training of machine translation models? 

