---
title: "Linux 101: Introduction to Linux"
description: The comprehensive introduction to Linux, its terminologies, ecosystem and more. A guide on why you should use Linux and how to get started.
date: 2022-12-06
tags:
  - linux
  - operating-system

cover: ~assets/linux-101.png
---

I used to be a Windows user, but then I realized that Windows was holding me back. It was slow, buggy, and constantly bombarding me with annoying pop-up notifications. Plus, I could never customize it to my liking, no matter how hard I tried. But then I discovered Fedora Linux, and it was like a breath of fresh air. Now I can customize every aspect of my operating system, and I never have to worry about viruses or slowdowns. Plus, I can finally use the command line without feeling like I'm stuck in the 90s. Goodbye, Windows - I'll never look back!

Yes Microsoft, Windows and my existence in your ecosystem have run into a problem and will _never restart_

And also the fact that Windows restarts every time I have a deadline :/

![Meme depicting forced nature of Windows Updates](~/assets/windows-10-update-meme.webp)

Because Windows is also a product of Microsoft, it has:

- No privacy at all, I think they might just be sending your passwords
- Forced Edge browser every time you search on the default search
- Productivity lags if you decide to not hand all your data to Microsoft
- And yes, can't forget the file explorer search, it's the best!!!

Linux solved all of these in an instance.

## Some Terminologies

### Linux is a Kernel

Linux is a kernel. A kernel is a program that manages hardware resources for the user. It connects the operating system to the hardware.

![a diagram indicating kernel architecture, with kernel in its center ring, shell in its middle ring and application in its outer ring](~/assets/kernel-architecture.png)

### GNU

GNU packages are the core of the GNU operating system. GNU stands for GNU's Not Unix. It is a Unix-like operating system. It is free software—everyone can use it and redistribute it.

### GNU/Linux

GNU/Linux is when GNU and Linux hold hands! Together they form a complete operating system. In the rest of the notes, we will refer to it as simply Linux.

### Distribution (`distro`)

A Linux distribution is a packaged version of GNU/Linux. It also has additional software like package managers, desktop environments, etc.

There are many distributions of Linux. Some of the most popular ones are Ubuntu, Debian, Fedora, Arch Linux, etc

### Shell

Shell is a program that takes commands and passes them to the operating system to execute.

### Desktop Environment

It is the graphical user interface (GUI) of an operating system. Some of the most popular desktop environments are GNOME, KDE, Xfce, etc.

### Package Manager

Microsoft Store, but one that works 😂 It helps you manage apps and binaries!

## Introduction to Linux

Distributions, Linux, and GNU are all connected to the development and usage of the Linux operating system, although they refer to various parts of the overall system.

The word Linux refers to the operating system kernel, which is the foundation of the Linux system. Linus Torvalds created the Linux kernel in 1991, and it is distributed under the GNU General Public License (GPL), which allows anyone to view, modify, and distribute its source code.

GNU (an abbreviation for "GNU's Not Unix") is a project that began in 1984 to create a free, Unix-like operating system. The GNU project contains a collection of software tools and libraries that, when combined with the Linux kernel, form a full operating system.

Distributions are pre-configured versions of the Linux operating system that include the Linux kernel, GNU tools and libraries, as well as extra applications and utilities. Different organizations and communities generate and maintain these distributions, which are customized to various objectives and user groups. Ubuntu, Fedora, and Arch are some prominent Linux distributions.

To summarize, Linux refers to the operating system kernel, GNU is a project that develops tools and libraries for the Linux system, and distributions are pre-packaged versions of the Linux operating system.

### History of Linux

The history of Linux and GNU is one of collaboration, innovation, and the transformative power of open-source software.

The Free Software Foundation (FSF), a collection of programmers and activists, initiated the GNU project in the early 1980s to build a free, Unix-like operating system. The GNU project published a variety of software tools and libraries over the following several years, laying the groundwork for a comprehensive operating system.

Linus Torvalds, a young Finnish computer science student, began working on his project to design a new operating system kernel in 1991. He asked for criticism and recommendations on a Usenet forum and quickly received a torrent of answers from other programmers who were interested in his project.

Torvalds and an expanding community of contributors collaborated to create the Linux kernel, which was distributed under the GNU General Public License (GPL). This enabled anybody to see, alter, and distribute the source code, paving the way for the development of a diverse variety of Linux-based operating systems known as distributions.

Today, Linux and GNU are two of the world's most popular and significant open-source initiatives. The Linux kernel is at the heart of the Linux operating system, and the GNU tools and libraries work in tandem with it to create a complete operating system. Together, Linux and GNU have had a major influence on the world of technology, inspiring and enabling cooperation and creativity among programmers and users all over the world.

![A GIF highlighting that it's Open Source](~/assets/spongebob-open-source.gif)

### Linux Distributions and how they developed?

Distributions are pre-configured versions of the Linux operating system that include the Linux kernel, GNU tools and libraries, as well as extra applications and utilities. Different organizations and communities generate and maintain these distributions, which are customized to various objectives and user groups.

The first Linux distributions appeared in the early 1990s, shortly after the Linux kernel was released. These early distributions were created by hand, utilizing a collection of accessible software tools and libraries at the time. These early distributions were gradually refined and improved as the Linux kernel and accompanying tools and libraries evolved.

Linux distributions have evolved to include more software and utilities, as well as more advanced features and user-friendly interfaces.

I am not going to be an old grandpa and talk about the distributions that died even before we took birth 😅 So let's talk about the ones that are popular and you might come across:

- Debian (Parent of Ubuntu):

  ![A Screenshot of Debian with GNOME](~assets/debian-with-gnome.png)

  The name "Debian" comes from the name of Ian's girlfriend at the time Debra and their name combined, Debian introduced many things like:

  1. `dpkg` - Debs are a format of packages that can be installed, this is currently the most popular way to install Linux applications and can be found on most official downloads
  2. `apt` - Advanced Package Tool is Debian's version of the Microsoft store, but one that works 😂 No, but seriously apt kind of sets me and a thousand other individuals what defined a good package manager
  3. Ubuntu - Yes, Debian gave birth to Ubuntu, Ubuntu is a Debian-based distribution, and everything that you find in Ubuntu is Debian-tuned best for Laptop/Desktop use cases.

- Fedora

  ![Fedora Linux with GNOME](~assets/fedora-with-gnome.png)

  Fedora is based on the Red Hat Enterprise Linux, I am not giving Red Hat Enterprise Linux a separate section because it's enterprise and it should probably not be your first operating system 😅

  1. Fedora comes with RPM-based packages, which are different from Debian and not so common but the community have built several binaries of those missing packages to make up.
  2. Fedora promotes Flatpaks which allows even more packages to run on Fedora
  3. This is also the choice of several people who are very popular in the Linux community and me!
  4. Fedora also has 'DNF', which is their apt, but after using both, DNF is much better, beginner friendly and feels too much like npm or yarn

- Arch

  ![Arch Linux Desktop](~assets/arch-linux.avif)

  Arch Linux is a very cool distribution, don't get me wrong, it is very very cool. But dare not use it as your first distribution, I won't even dare use it as my 10th distribution. Arch is very much like bare bone Linux, you build everything on top, so unless you are looking for a million sleepless nights, don't.

## What does Linux have over other Operating Systems?

Linux is Open Source!!! Anyone can modify and distribute the source code because it is freely available. This enables a large and active developer community to contribute to the development of Linux and create a diverse set of tools and applications.

![A minions meme highlighting the open source feature comically](~assets/minions-opensource.png)

Linux is also extremely configurable, making it an excellent alternative for developers looking to customize their operating system to their exact requirements. Furthermore, Linux is well-known for its stability and dependability, making it an excellent choice for running mission-critical applications. Linux is also very scalable, which means it can run on a variety of hardware, ranging from small IoT devices to huge servers.

![An example of a customized Linux Desktop](~assets/linux-rice.webp)

My desktop looks like this:

![Krish's Fedora with KDE Configuration](~assets/krishs-fedora-desktop.png)

Another advantage of Linux is that it provides a diverse set of developer tools and applications, including a robust command line interface and a diverse set of programming languages and libraries. Furthermore, Linux is compatible with a wide range of software, including both open-source and proprietary applications. This makes it an excellent alternative for developers who wish to work with a diverse set of tools and technologies.

## How to choose your distro?

### Don't go by looks

Any Linux distro can look any way you want, do not consider looks a point, because the looks are given by the desktop environment, like

- GNOME
- KDE
- Mint
- Cinnamon

### Go by features

Use them for their software base or productivity features,
I choose Fedora over Ubuntu because:

- Speed matters more than disk space for me (Snap vs Flatpak)
- I like how table Fedora is, and especially that it doesn't break 100 times a day
- The DNF package manager is holy-smokes cool and easy to use

Popular ones have been listed above and I am not one to make an impact on your choices but I recommend Fedora to all developers

## Installation

Installation is guided by what distro you use. But mostly it is going to be a GUI process, I recommend having 4 partitions:

- `/boot/efi` - EFI system partition (Required)
- `/` - Root partition (Required)
- `/home` - Your files partition (Recommended, use btrfs for backup guarantee)
- Linux Swap Partition - Extra RAM (Recommended, double the physical RAM is always good)

## Post-Install

1. Start by updating your system
2. Consider setting up dotfiles!
3. Get your favorite packages and applications installed

![Meme depicting the power unlocked after mastering linux](~assets/linux-power-users.jpg)
