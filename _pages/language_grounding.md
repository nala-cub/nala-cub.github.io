---
layout: page
title: Language Grounding
permalink: /projects/language_grounding
description:
---

Recent work in the field of natural language processing has begun to highlight the inherent limitation of pre-training ever-larger transformer models on ever-increasing corpora. We argue, following others, that models trained in this text-only paradigm cannot truly understand language. Rather, understanding arrives by grounding language to real-world experiences. For example, from: “I dropped my unopened can”, the reader immediately understands, by mapping this phrase to times when they interacted with and/or observed a can falling, that the can initially falls towards the ground, that it likely got dented where it hit the ground, and that it will make a mess if opened immediately. We propose that it is impossible for a model to understand this if it is trained solely on stochastically-fed sentences. Instead, mimicking our own experiential learning of language by means of our embodiment, we need to provide models with the opportunity to interact with and observe the concepts they are expected to communicate about. <br>

In our work, we explore how to ground — and by doing so, enable the understanding of — one of the most universal and well structured human experiences: interacting with physical objects. Even before humans can walk or talk, they grab, push, and play with the objects around them, and the vocabulary they learn reflects these early experiences. This leads us to our primary research direction: can we enable a model’s understanding by grounding language through the experience of interacting with real-world objects? <br>

We believe that our proposed effort will allow the field at large to move away from purely text-based tasks, and towards a future where models can seamlessly communicate and naturally interact with humans in a way that is most comfortable to them. By grounding models through experience, we both approach the model's interpretation of language closer to our own, and provide them with transferable concepts required for this level of generalization.
