---
title: What are Blue-Green Deployments?
description: Learn the ins and outs of Blue-Green Deployments - a revolutionary approach for deploying software. Achieve smooth transitions and minimal risks with this strategy.
date: 2024-01-31
tags:
  - devops

cover: ~assets/blue-green-deployments.webp
---

## Overview

"Blue-Green deployment" is an **application release model**, **software deployment strategy** and **deployment technique**, which offers:

- Near zero-downtime 🤯
- Simple roll-back capabilities
- Very low chances of failure 📉
- No maintenance windows
- Improved testing

> Blue/green deployments can mitigate common risks associated with deploying software, such as downtime and rollback capability
>
> \- Amazon[^1]

## How does "Blue-Green Deployments" work?

In Blue-Green Deployments, we have 2 servers, named `green` and `blue`. Both of them have **identical environments** but **different versions**. In the `blue` server, you have your production application which handles almost all of your traffic. Whereas in the `green` server, you have, a **semi-production** or **staging** version.

Now we test the `green` server if it works and is ready. We start _slowly_ channelling away traffic to the `green` server. In other words, we follow a **rolling release** to publish the `green` server version.

So for instance, we have `blue` running on v1.0.0 (prod), and `green` on v1.0.0-beta (staging). We test the green server's version internally, then roll out the new version in chunks to our users. In this example, we give 25% of the people access to use it.

![A diagram showcasing what is explained above](~assets/blue-green-diagram.webp)

And this is repeated till eternity ✨ Here is the graph of the same scenario:

![A graph showcasing how the traffic switching from one server to another over time](~assets/traffic-distribution-blue-green.webp)

## What happens if my beta app breaks?

Let's take a second scenario, in this scenario, somehow the application passes the internal testing phase, but when users use it, it breaks apart 🥲. We can do an **instant** roll-back by redirecting all the traffic to the blue server!

![Diagram showcasing how traffic is unaffected even if the application crashes since instant roll-backs are possible](~assets/blue-green-downtime.webp)

## Rolling releases with Blue-Green Deployments

Since we have 2 servers where we are diving the traffic, we get to offer a certain feature to a set of users. This provides different benefits:

- You **minimize risks** since your release does not affect your entire user base
- **A/B Testing** allows you to analyze user groups' performance (both system & conversion).
- **Feedback Loops**: You can constantly collect feedback from users and iterate to improve your application.

You can send out the version to your users by directing traffic based on various factors such as:

- **Randomly:** You can send it out randomly to your users
- **Geographically**: Want a feature to only be available in the USA while you test it? You can!
- **Beta-testers**: Enrol users in a beta program or a select group of users like your friends and team 👀

So basically it is like feature-flags but for versions!

## More benefits

- Production testing! Since the app is on a replica of the production environment you can say we're testing on production 💥
- Since you are switching servers and resources, you do not have to worry about upgrading the application without breaking everything else!
- Since with the cloud, we can tear apart and provision new services instantly, it is also more lucrative/cost-efficient for us.

## Challenges

It does not make sense to have 2 databases and to sync between them for the environments, instead, we do the obvious and use the same database. The problem occurs when you make a breaking change to your schema because then your production version falls apart as it no longer can query for the same data schemas.

Other challenges include the inability to use the components of this method due to project, regulation or infrastructure-based restrictions.

## Further resources

- [Blue/Green Deployments on AWS](https://d0.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf) _(a Whitepaper by AWS)_
- [Continuous Blue-Green Deployments With Kubernetes](https://semaphoreci.com/blog/continuous-blue-green-deployments-with-kubernetes) _(an Article by semaphoreci.com)_

[^1]: [AWS Blue/Green Deployments Whitepaper](https://d0.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf)
