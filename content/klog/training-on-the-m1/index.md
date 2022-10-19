---
title: Deep Learning on the Apple Silicon
excerpt: This article will walk you through the setup procedure, training and logging on an Apple Silicon device.
author: Kevlyn Kadamala
date: '2021-07-22'
slug: training-on-the-m1
categories:
  - AI
tags: []
---

At the end of last year, I decided to switch my Mac 2013 for the latest Mac Mini with the Apple Silicon. This meant that initially some of the packages that supported the x86 chip could not natively run on the M1 chip. But what I was looking forward to the most was setting up TensorFlow and PyTorch onto my conda environment.

In this article, I will be walking you through my setup procedure, train a MobileNet model and compare the results (using Weights and Biases) from my other devices.

You will find the code and all its requirements in my GitHub repository here - [TFonMac](https://github.com/kad99kev/TFonMac)

## Table of Contents

1. [Setting Up](#1-setting-up)
2. [Training a Model](#2-training-a-model)
3. [Observations](#3-observations)
4. [Conclusion](#4-conclusion)

## 1. Setting Up

### Step 1: Downloading Miniforge (Creating a virtual environment)

My entire setup procedure will be from the perspective of using the Apple Silicon. I highly recommend using a virtual environment for this. I use Miniforge. You can download the same [here](https://github.com/conda-forge/miniforge). Make sure you download the installer for arm64 (`Miniforge3-MacOSX-arm64`).

Once you have your environment ready, activate it using `conda activate <env-name>`. 

### Step 2: Cloning the Repository

Then clone the repository using git - `git clone https://github.com/kad99kev/TFonMac.git`

### Step 3: Downloading the Requirements

Once the repository is cloned, run - `pip install -r m1-requirements.txt`

Now just in case NumPy throws an error, you can install it directly with conda using - `conda install numpy` 

It took away this error that I was getting while trying to install it via pip.

We will be using TensorFlow Datasets to download the Cifar-10 dataset. The URL links are releases from TensorFlow that contain "Mac-optimised TensorFlow and TensorFlow Addons". The link for that is [here](https://github.com/apple/tensorflow_macos). The repository is currently archived as TensorFlow v2.5  provides accelerated training with Metal (you can find more here), and it only works with macOS 12.0+

For people with Big Sur (like me), there would be no problem installing these libraries. However, on execution TensorFlow, would throw an error. Hence, I had to revert to the URLs that I linked above. I am interested in trying this method again once I have the Monterrey update. Once I do, I will write an updated article and compare the results from this experiment to the new one.

## 2. Training a Model

To compare the runtime, performance and GPU/CPU utilisation of the different devices, I followed the training script and procedures from [this article](https://wandb.ai/vanpelt/m1-benchmark/reports/Can-Apple-s-M1-help-you-train-models-faster-cheaper-than-NVIDIA-s-V100---VmlldzozNTkyMzg). The author provided a Google Colaboratory notebook. I converted this into Python scripts which makes it easier to use later if required.

Understanding the structure of the repository will help you tweak your experiment; if you want to try it, I will explain the repository structure below

```
project
│   main.py (Run this to run the experiment)
│   config.py (Configure parameters for your experiment)
│
└───utils
    │   info.py (Retreives information about the hardware and the model)
    │   preprocess.py (Image preprocessing functions)
    │   train.py (Main training loop)

```

In case you want to switch to GPU/CPU mode for the M1 chip, you can find it in `utils/info.py` and set `mlcompute.set_mlc_device(device_name="...")` to `"gpu"`, `"cpu"` or `"any"`

Once `main.py` is executed, training should start. The model, metrics and performance data will automatically get logged with Weights and Biases (you might need to log in if you are a new user).

## 3. Observations

You can find my training dashboard [here](https://wandb.ai/kad99kev/m1-benchmark).

I have tracked five runs in total, three on the Mac Mini (under the `gpu/cpu/any` setting), one on my Macbook Air and one with Google Colaboratory.

### Training Curves

The training curves for the Mac Mini are pretty similar, while the training curves on the Macbook and Google Colaboratory share patterns. The difference, however, lies in validation. The Mac Mini under the cpu and any settings show low validation accuracy, validation top k accuracy and a high validation loss. I have no idea why we observe this behaviour, and if you do, please reach out to me! The Mac Mini under the `gpu` setting shows improvement along with the Macbook Air and Google Colaboratory, with the validation loss slightly decreasing and the validation accuracy along with the top k accuracy much higher than previously observed.  

### GPU/CPU Utilisation

From the charts, it is evident that the Mac Mini under the `gpu` setting utilises the GPU for around 90% of the time. Under the same settings, it utilises the CPU for ~15% of the time. What I do find weird (or maybe it's expected?) is the amount of CPU and GPU being utilised under the `cpu` and `any` setting. I was expecting the `gpu` to train the fastest, but it took around 35m 29s for its execution to complete. Meanwhile using `cpu` took 31m 18s and `any` took almost the same amount of time (31m 22s).

## 4. Conclusion

It was honestly my first time playing around with hardware settings, so I am not quite sure about most of the reasons behind what I observed. However, I am excited to experiment more, and I am eagerly waiting for [TensorFlow v2.5 with Metal](https://developer.apple.com/metal/tensorflow-plugin/). Once it is available to me, I will experiment again to look for any change in speed and performance. Until then, take care and stay safe! 😄

## References

1. [How To Install TensorFlow on M1 Mac (The Easy Way)](https://caffeinedev.medium.com/how-to-install-tensorflow-on-m1-mac-8e9b91d93706)
2. [Can Apple's M1 help you train models faster & cheaper than NVIDIA's V100?](https://wandb.ai/vanpelt/m1-benchmark/reports/Can-Apple-s-M1-help-you-train-models-faster-cheaper-than-NVIDIA-s-V100---VmlldzozNTkyMzg)
3. [Getting Started with tensorflow-metal PluggableDevice](https://developer.apple.com/metal/tensorflow-plugin/)
4. [A useful thread on stackoverflow](https://stackoverflow.com/questions/67167886/make-tensorflow-use-the-gpu-on-an-arm-mac)

<div style="text-align: center; margin-top: 2rem">
<span>Image Credits: <a href="https://unsplash.com/photos/LMpaFri1PXk">Joey Banks via Unsplash</a></span>
</div>