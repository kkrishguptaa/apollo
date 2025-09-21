---
title: "A Beginner's Guide to Understanding DevOps"
description: DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
date: 2024-01-03
tags:
  - devops

cover: ~assets/devops-101.webp
---

DevOps is an approach to improve the **SDLC** (Software Development Life Cycle) by streamlining the process.

To understand DevOps, we first must understand what the past was.

## World Before DevOps

![A diagram depicting the chaos of software teams without DevOps.](~assets/world-before-devops.webp)

DevOps stands for Development and Operations, and you might have guessed already. The name comes from the origins of DevOps.

Before DevOps, There used to be two teams: Development and Operations.

The development team worked on planning out and coding, whereas the operations team operated the entire codebase.
There are various challenges with this model:

- **Miscommunication/Lack of Communication**: Developers can't deploy and don't know the production environment. The operations team doesn't understand how the application works.
- **Conflict of Interest**: Operations and Development as teams have different goals. The developers want to push changes faster, but the operations team wants stability.
- **Security** **and Testing:** Security and Testing teams work on this. The code has to go through several approvals from these teams before being pushed to production.

This caused the release of the project to be delayed. It is not in the best interests of any company to not follow schedules.

## Where DevOps comes in

![Diagram depicting how DevOps comes between Development and Operations to streamline processes](~assets/devops-process.webp)

The development and operations teams have a link, the DevOps team. DevOps teams clear out these blockers on the release cycle. This allows for faster release.

DevOps is the practice that allows for the release cycle to be faster. Earlier, DevOps was just a company philosophy and was different across companies. With the growth of DevOps, several standards were set.

DevOps has become a separate role, and the technologies used in DevOps are termed DevOps Tools.

## Why DevOps?

### Speed

Removing the road blockers is the responsibility of the DevOps team. With DevOps, Developers no longer need to await review idly for long times. The automation carried out by DevOps engineers is also a heavy lifter.

### Collaboration

DevOps is entirely based on the principles of collaboration. Thriving collaboration allows for better end products for the customers.

### Assurance

In DevOps, the applications are rigorously tested and monitored. This gives the assurance that the application will not cause failure frequently.

## Phases of DevOps and the Infinity Wheel

![DevOps Infinity Wheel](~assets/devops-infinity-wheel.webp)

_Image Source:_ [_https://www.atlassian.com/devops_](https://www.atlassian.com/devops)

DevOps is often represented as an infinity loop. It has eight stages. Let's go through all of them, starting with the planning stage.

### Discover

Organization and prioritization of ideas are necessary.

In the initial stages, the "Discover" stage may include understanding the problem statement and the required initiatives. In later phases, it can be "incorporating the changes suggested".

This stage can largely be carried out by creating Tickets or Issues in Jira or GitHub.

### Plan

As fun as it would be, barging into the problem like barbarians is not an efficient way to work on a project.

Therefore, teams tend to work through a plan. They strategize the goals and set deadlines.

This is often achieved using Kanban Boards on Trello or GitHub Project Boards.

### Build

This is the coding part of the cycle. The developers start working on the code according to the plan. Most likely, They will be working asynchronously over the same codebase. This requires the need for version control.

Version control allows teams to keep track of their changes and effortlessly merge the changes two developers worked on asynchronously.

Of course, Git is used for this part of the cycle. Alternatives include Mercurial and SVN.

### Test

Testing is essential for production. Users don't exactly use the applications as developers intend. Developers must prepare for the worst with test cases for such scenarios. There is a lot to talk about tests for another article.

**Automation**: CI (Continuous Integration) pipelines are set up to automatically run tests on the code before merging it to the master source. CI is a script that runs on a schedule or event and returns failure/success. It allows assurance that the code being published is foolproof.

Popular CI providers include Jenkins, Circle CI, GitHub Actions and GitLab CI/CD.

Your choice of testing software will depend on the tech stack.

### Deploy

Now, it is time to push to production. In the deployment phase, the code is released to production. Releases are more frequent and generally automated.

**Automation**: CD (Continuous Delivery) is the same as CI but for deploying changes to production.

**Innovation**: Feature Flagging is a system where you release the new version to a smaller group before making it available to the entire user base. It allows you to observe the impact of the changes before making it live for all the users.

### Operate

Operating infrastructure and configurations are also a part of DevOps. You could also think of this phase as ensuring _"end-to-end delivery of IT services to customers" (source:_ [atlassian.com](http://atlassian.com))

### Observe

You will not know the health of the application without observing it. The "observe" phase includes setting up log drains to notice errors, uptime and speed of the code.

Automation to inform teams about high-risk failures is also a part of this.

Tools like Grafana are used for this phase.

### Continuous feedback

Providing feedback to the development team and suggesting changes will improve the project regularly. This is extremely necessary to keep a bug-free code base.

**Note:** There are different versions of the DevOps infinity wheel. The differences are just in naming convention or too minimal to account for.

## Security and DevSecOps

Considering security an essential part of the development and any phase, DevSecOps is like a fork of DevOps where security is emphasized at every stage. It integrates security into all of DevOps to minimize vulnerabilities.

It also has a separate infinity wheel:

![DevSecOps Infinity Loop](~assets/devsecops-infinity-wheel.webp)

As you can notice, there is a great emphasis on testing the code, code review, and scanning vulnerability. We will talk more about this in my way future articles because this is irrelevant right now.

## Conclusion

DevOps is a philosophical thing. It is a set of practices that a company uses to release stuff rapidly. It is a gigantic and growing field. Here are some resources for you to explore further:

- [90DaysOfDevOps 2022](https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day01.md)
- [Atlassian DevOps Blogs](https://www.atlassian.com/devops)
- [Roadmap.sh](http://Roadmap.sh)
