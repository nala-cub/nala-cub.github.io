---
layout: page
title: Universal Natural Language Processing
permalink: /projects/universal_nlp
description:
---

In recent years, natural language processing (NLP) as a field has seen impressive results on a large variety of syntactic and semantic tasks. This progress is largely due to the introduction of deep learning models. However, due to the training data requirements of recent models, progress has been mostly limited to a small subset of well known and high-resource languages, such as English, Spanish, and Chinese. Unfortunately, many languages, even some with millions of speakers, are often overlooked by current NLP research.
<br>

More recently, massive pretrained models such as <a href="https://www.aclweb.org/anthology/N19-1423.pdf" target="_blank">BERT</a>, which leverages huge amounts of data and computational resources to learn general features of a language, have reduced the amount of required annotated training data for NLP tasks:
One approach is to simply pretrain a model on raw text in the language of interest, which can then be finetuned on labeled data for NLP tasks. While this works well for language with enough data, it leaves much to be desired when resources are limited. For these low-resource languages, an approach which has shown good performance is to create a single model which understands multiple languages, such as mBERT and XLM-R. Those models can make use of cross-language similarities to enable zero-shot learning: the pretrained model can be trained on task-specific data of a language different from the target language if the latter has no labeled data available.
<br>

As a group, we are interested in exploring ways to obtain acceptable performance on NLP tasks even for low-resource languages.
Our current research includes work on improving the zero-shot performance of multilingual models for extremely low-resource languages and work on data annotation. Some NALA members are also co-organizing a <a href="http://turing.iimas.unam.mx/americasnlp" target="_blank">workshop and shared task for indigenous languages of the Americas</a>.
