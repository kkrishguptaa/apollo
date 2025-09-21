---
title: "What is Open Source & How to contribute to it?"
description: A map of open source with my experience and knowledge after almost a year and a half of contributing, maintaining, and advocating.
date: 2023-02-06
tags:
  - opensource
  - git
  - github

cover: ~assets/opensource-101.png
---

The current state of tech on Twitter:

- "You can get a job with open source."
- "Open Source experience should be included on every developer's resume."
- "GitHub is your resume!"

![Spongebob making a rainbow with his hands that says "Open Source"](~assets/spongebob-open-source.gif)

Okay, I admit that the last one is just me.

So it's good to say that tech Twitter _somewhat_ agrees with me? No. I disagree with half of the things tech Twitter says about open source. In this article, I try to map out open source with my experience and knowledge after almost a year and a half of contributing, maintaining, and advocating.

## So what exactly is Open Source?

### The book definition

Open source is code that is publicly available for anyone to study, improve, change, and redistribute to everyone.

Each of these may have a slightly different implementation due to the various open-source licenses available, but at their core, you should be able to do all of them.

### The actual definition

Open source is a community of developers dedicated to the greater good. Many developers just open-source their projects to make development easier for everyone by solving common problems. Some other developers are against big corporations owning everything and favour creating open-source alternatives.

So it's just a VERY VERY VERY large community consisting of just [100 million people on GitHub](https://github.blog/2023-02-01-open-sources-impact-on-the-worlds-100-million-developers)

## Popular Open Source Projects

So most people joke about Open Source software not being good :/

Especially about Linux,

![A GIF mocking Linux's Window Servers](~assets/mocking-linux-users.gif)

What most people don't realize is that almost all of the code in your browser is open source. The entirety of the internet's backend is also open source, as is this [blog](https://github.com/kkrishguptaa/apollo) and the software used to built it! It does not take a good while to realize how much of your life is open source.

## Why should you care?

### Does Open Source bring jobs?

Short answer: It can.

Long answer: It most probably will not. Getting a job entirely through open-source contributions is a new thing most companies are still not into. But open source can help you get a job in other ways.

![Meme depicting the pride of getting a job via Open Source](~assets/opensource-job.png)

### Resume

Open Source is a significant addition to your resume; it demonstrates collaboration and soft skills, as well as visible proof of your knowledge.

![Meme depicting the pride of contributing to Open Source](~assets/opensource-resume.png)

### Skills

You can learn anything from industry professionals via the medium of open source. I could right now pull up a MEVN stack project, send in a PR, get a code review, and learn from people working in that tech stack—the people who built that project itself.

I mean, developers these days post these memes on Twitter:

![Sarcastic meme depicting developers preferring Open Source over project building to learn skills.](~assets/opensource-skills.jpg)

Ok. You got it. No one can design such a bad meme other than me, so it's me, but how did you know this? :|

## Open Source No Nos

### Open Source Only For Jobs?

Never. Open source is not a way to get a job; it is just a multiplier to increase your chances. Don't let open source take over everything, including portfolios and projects.

![Sarcastic meme depicting developers skipping programming fundamentals for Open Source](~assets/opensource-attraction.jpg)

Yeah, imagine explaining that situation to your ~~partner~~ recruiter.

### Beginners can't contribute to Open Source

I contributed without any knowledge of computer science as an 8th-grade student. What in the damn world can stop you, apart from yourself being lazy?

So I can, as a beginner, contribute to open source, but you can't?

![Meme referencing Indian pop-culture to denote the hypocrisy of "beginners can't contribute to open source"](~assets/opensource-beginners.jpg)

### You can not contribute to big projects

Where do big projects get their contributors from? If you think about it, every big project began as a small project. So what's the difference between small and big projects? Bigger projects move faster, but can you attribute that to their having more files? So it's balanced most of the time.

I've made a PR React's documentation (which is in the queue right now); that proves that no matter how big a project might get, there is somewhere you can add value.

![Meme depicting people contributing to ReactJs after reading this article.](~assets/opensource-big-contributions.png)

### You have to be a dev to contribute

There are so many ways you can contribute! Why limit yourself to code contributions? You can add value in so many more ways (you can create your ways to add value)

- Code

  - Feature Addition
  - Refactoring Code
  - Bug Fix
  - DX Improvement

- No Code
  - Documentation
  - Content/Awareness/Education
  - Community
  - Triaging (Confirming if that issue exists for you)

On a side note, anything that adds value is a contribution. (I'd also like to clarify that you do not need to contribute to only complex issues to be a great contributor for the same reason)

![Diagram showing that open-source contributions can add value through code (features, refactoring, bug fixes, DX improvements) or no-code (docs, education, community, triaging).](~assets/no-code-contribution.png)

## Let's do this

So let me be clear: where I can help you, and where I can't:

- ✅ Git & GitHub
- ✅ How to approach projects
- ✅ How to communicate as a contributor
- ✅ First steps on making your first pr
- ❌ Listing projects that you should contribute to (✅ I will tell you how to find them here though)

![Lets Do This](~assets/lets-do-this.gif)

### Step 1: Git & GitHub

Git and GitHub have often been overlooked topics when it comes to open source. They are an integral part of contributing to open source, yet they are just left with a list of commands. I'll do my best to give you here a concise guide to git and GitHub, including all key terminologies and functionalities.

- Git: Git is a version control system that allows teams to work on large projects with versioning and collaboration support
  - Commit: A commit would be on a version of the particular source. Commits include information about the changes and who made them.
  - Branches: When collaborating different teams need to work on different aspects of the source, branches provide a way for teams to take the source repository's current commit source to what you could call a somewhat altogether different repo that could be merged later into the main version (main branch) when the team is done.
  - Merge Conflicts: If two of the teams edit the same part of the source in 2 different branches and the first one gets merged then the second one will have to review and resolve any conflicts since the changes in the second PR do not change the `main` now, but branch 1's source has been merged into the main.
- GitHub: GitHub is a hosting provider for git which has now branched out to have many other services, which give it the title of the place where the world writes code.
  - Forks: Most of the time you do not have access to the official hosted repo's branches to make your edits (for obvious security reasons), in that case, you have to download that repo not locally but on your personal GitHub account so that it's still accessible to the internet.
  - Pull Requests: It's just you asking the people who do have access to the official hosted repo to pull your fork and merge its branch to the source of the official repository. (This is one way to contribute)
  - Issues: Just a tracker of the submissions for bug reports, feature requests and other things someone might suggest/report to a project.
    There are many [Git Cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)s available on the internet if you need one!

### Step 2: How to approach projects?

Finding projects is very hard; Here is a list of approaches you should use to find your projects:

1. **Your Network**
   Many people in your network will have their projects hosted on GitHub it is a great opportunity to add value to their projects.
   People in my network have always surprised me with cool projects! I am sure your network will surprise you too!

2. **Projects You Use**
   There are hundreds of projects you already use, did you know that Chrome, Brave, Android, VS Code, GitLab and Gitpod are all open source?
   There are Open Source projects like Curl which have been used on Mars 🤯

3. **People you follow**
   If you are seeing this post, you must be following some people who have open-source projects! Yes, everyone whom I follow has at least one!

4. **GitHub Trending**
   YES, YOU HEARD IT RIGHT, GitHub has a page to keep you up with all trending repositories, it can be used to find new projects to contribute to

   It can be filtered by languages as well 🚀

5. **GitHub Search**
   You can also search GitHub for repositories and issues, beginners can try to find the label of good-first-issue

   I used it to find 3+ Issues on the first day of my first Hacktoberfest, which had been merged!

6. **Good-first-issue sites**
   Some websites help you find issues to contribute to -

   [First Contributions](https://firstcontributions.github.io/), [EddieHub Issue Finder](https://finder.eddiehub.io), [goodfirstissue.dev](https://goodfirstissue.dev/), [goodfirstissues.com](https://goodfirstissues.com/), [firsttimersonly.com](https://www.firsttimersonly.com/).

7. **Communities**
   Communities like EddieHub have several open-source projects seeking contributions!

### Step 3: Making your first pr

This one should be pretty straightforward, it's just a simple checklist

1. I have identified where I can add value (Go back to the graph mentioning types of contributions)
2. I have found a project to contribute to (The step before this one)
3. I know basic Git & GitHub concepts (Step 1)
4. I have made a PR to [EddieHubCommunity/hacktoberfest-practice](https://github.com/EddieHubCommunity/hacktoberfest-practice) to add my name to test out step 3
5. I have read the contributing guide and the code of conduct of the project (if they do not exist please do not consider contributing to that project as a first-timer)
6. Make a PR ✅
