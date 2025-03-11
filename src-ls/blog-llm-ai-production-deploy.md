# Production Open Source Chat with Work Instructions

- Published: 2025-03-06
- Updated: 2025-03-09
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>
- Status: Drafted (more coming...)

## Create Your First Work Instruction Book with Chat

The purpose of this post is to help you get your first work instructions published with chat capabilities.

Here is the benefit story:

- You will thrust your AI capabilities ahead of 90% of all organizations in a single step.
- You will create a platform for building future automation around your work instructions.

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

As a result of this article, you can:

- deploy a production quality system in minutes
- use a framework to publish work instructions with zero additional effort
- connect to most (if not all) of the world's most powerful language models (LLM) with no code change
- improve your work instructions with AI assistance at near real-time speed where changes are based on actual human usage and feedback

## TOC

<!-- toc -->

## Problem Statements

Here are the problem statements we want to address:

**Problem #1:** AI is complicated to understand much less create a solution around AI.

**Problem #2:** The vast majority AI tutorials are based around writing code and they are limited to just a few LLMs and a few scenarios.

**Problem #3:** Deploying code to production is complicated if you do not have the expertise.

**Problem #4:** Creating a plan for AI success in a small and medium organization is not obvious.

## Getting Started

Here is what we will do:

- We are going to implement [the system you see here](./blog-llm-ai-operations-automation.md). Please watch the videos on this link first to see the big picture if you have not done so yet.
- We will configure a [Linux](./tool-linux.md) server to deploy existing open source applications ([AIChat](./tool-aichat.md) and [mdBook](./tool-mdbook.md)).
- We publish our work instruction with chat capabilities using these tools.
- We will use Linux's scheduler (cron) to keep everything up to date over time.

TODO: video of picture of success
- use anywhere in the world (cloud, hybrid, on-premise)
- use almost any llm in the world (including local llm)
- Show example of how many releases from mdBook and aichat - newest models
- keep your data safe (local if needed and protected by your intranet)
- Three types of AI use (puts you in the top 90% or much better)
  - AI to help create work instructions
  - AI to help answer questions
  - AI to help review review results and recommend changes

Here are the details discussed in the above video.

### Before We Start

There are a couple of items you should note before we get started:

- We assume you are publishing private work instructions for your organizations.
- This example should not be exposed to the public internet for any appreciable period of time.

### Linux

If you do not know how to create your first Linux server, here are some resources to help you get started:

- [Getting Started with Linux](./getting-started.md#get-linux)
- Join the [stack-academy](./stack-academy.md) - we will walk you through getting started
- Ask a Linux friend to help.

Note that we will be using either Debian or Ubuntu on x86 (not ARM).

### Prepare System

We need to install a few applications. The single easiest way to get your system prepared is using the [chuboe system configurator](https://github.com/chuboe/chuboe-system-configurator).

Here is the process. You can simply copy all commands at once, paste and execute.

```bash
cd ~
sudo apt update
sudo apt install git -y
git clone https://github.com/chuboe/chuboe-system-configurator
cd chuboe-system-configurator
./init.sh
```

<video poster="./img/chat-with-work-instruction-part1-system-prep-final.png" controls>
  <source src="./video/chat-with-work-instruction-part1-system-prep-final.mp4" type="video/mp4">
</video>

### Install Sample Work Instruction

We need to install the sample work instruction repository.

Note: if you forked this repository, please update the below reference to `chuckstack` with the name of your fork.

```bash
cd ~
git clone http://github.com/chuckstack/ai-llm-operations-wi-chat/
cd ai-llm-operations-wi-chat/
./publish.sh init
```

Follow the steps that appear on your screen as the process ends to finish the initial configuration.

You should now be able to see your documents via a webpage by simply clicking on the indicated link.

<video poster="./img/chat-with-work-instruction-part-sample-work-instruction.png" controls>
  <source src="./video/chat-with-work-instruction-part-sample-work-instruction.mp4" type="video/mp4">
</video>

Let's spend a moment discussing the airole-starter.md document. This text gets passed along side every prompt. This document gives you control over the user experience.

<video controls>
  <source src="./video/chat-with-work-instruction-part3-airole-start.mp4" type="video/mp4">
</video>

Soon we will discuss advanced topics related to balancing concise responses with the ability to ask for more details.

### Search Documents

Chat is powerful; however, there are times when you need to simply search for something. Search is a powerful feature of this solution. We use [mdBook](./tool-mdbook.md) to publish your work instructions and make them easily accessible to everyone in your organization.

Here are the ways or searching:

- `ctrl+f` (control + f key) to use the browser
- `s` to search

<video poster="./img/chat-with-work-instruction-part4-search-start.png" controls>
  <source src="./video/chat-with-work-instruction-part4-search.mp4" type="video/mp4">
</video>

### Edit Online

Everyone in your organization should be able to easily contribute. The purpose of this section is to highlight just how easy it is.

Note that we are assuming that many of the work instructions already exist. We will talk about how to get started creating your work instructions from scratch in a different section.

<video poster="./img/chat-with-work-instructions-part6-editing-end.png" controls>
  <source src="./video/chat-with-work-instructions-part6-editing.mp4" type="video/mp4">
</video>

In the video we are using [GitHub](./tool-git.md) to host our work instructions. GitHub (and tools like it) provide online editing and advanced workflow to support change approval processes.

Reference: we recommend [Obsidian](./tool-obsidian.md) for those who are primarily responsible for creating and evolving work instructions. Obsidian is ideal and enjoyable when writing highly-connected content like work instructions.

### Always Up to Date

The goal is to keep your published work instructions as up to date as is possible. Let's see how to automate updates.

Note: the rebuild section of the publish.sh script has git statements that need to be uncommented to support live updates. Look for `###change-me###` next to the git sections.

Here are the details:

- Configure git
- Run manually
- Run via cron

<video poster="./img/chat-with-work-instruction-part5-rebuild.png" controls>
  <source src="./video/chat-with-work-instruction-part5-rebuild.mp4" type="video/mp4">
</video>

Note that your cron file might be named differently depending on what you are deploying.

### Talk to Any LLM

Quickly switch between almost any large language model (LLM) including local models. [AIChat](./tool-aichat.md) helps you focus on choosing the best model for the task making the testing and deploy almost trivial. AIChat not only powers this article, it is also one of the inspirations for creating the chuck-stack.

<video poster="./img/chat-with-work-instructions-part7-models-splash.png" controls>
  <source src="./video/chat-with-work-instructions-part7-models.mp4" type="video/mp4">
</video>

### Lets Play

Now that we have our system up and running. Let's play.

Notes:
- talk like a pirate - show you just how much control you have
- prompting strategies
  - short first response THEN tell me more - prompting strategies
  - conversations ?? - up arrow
  - prompt shows both the role and the docs
  - Concept of Conversation - asking followup questions
- copy/paste
- fork for real
- Review process back to Obsidian
- Prompt in iDempiere
- note about why this looks just like the chuck-stack - speed matters - chuck-stack is a giant set of work instructions

## Architecture Overview 

TODO: image showing server concepts/connections (nginx + ttyd + mdbook)

TODO: image showing workflow (obsidian => publish => feedback => obsidian)

## Why This Matters

TODO: use the same chat tool everywhere (iframe)

Text (markdown) sent everywhere => Models, models, models...

## Next Step - Work Instructions Everywhere

example: iDempiere

## Feedback Loop

Show example of actual feedback and how to support primary contributors with improvement

## Next Steps

If you want help implementing these concepts in your organization, join the [stack-academy](./stack-academy.md). We will walk you though the process of:

- deploying your first Obsidian + Git + website + chat solution in your organization
- identifying and create your first set of work instructions for a target role
- teaching your content writers how to write the fewest words possible to achieve the desired result
- soliciting feedback from everyone after the initial deployment

## Tools Summary

Here are the tools we use to minimize effort and maximize agency:

- We use [Obsidian](./tool-obsidian.md) to help your primary leaders 'say' what to do.
- We use [AIChat](./tool-aichat.md) to 
  - deliver a kind and patient 'chat' experience
  - evaluate user interactions with 'chat'
  - propose improvements to work instructions
- We use [mdBook](./tool-mdbook.md) to publish our instructions
- We use [ttyd](./tool-ttyd.md) to expose AIChat and other tools
- We use [Netbird](./tool-netbird.md) to ensure our work instructions and our tools are both private to our organization AND available to everyone in our organization

## Frequently Asked Questions

### Can I use Claude or other LLMs instead of OpenAI (ChatGPT)

Two considerations:

- embeddings (used to take your work instructions and prepare them)
- prompting (used to answer questions)

...

### Why Markdown - Why Not Google Docs or MS Word?

...

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>.

## TODO

- add video of success
