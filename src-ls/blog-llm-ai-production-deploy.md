# Production Open Source Chat with Work Instructions

- Published: 2025-03-06
- Updated: 2025-03-07
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>
- Status: Drafted

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

**Problem #1:** The vast majority AI tutorials are based around writing code and they are limited to just a few LLMs.

**Problem #2:** Deploying code to production is complicated if you do not have the expertise.

**Problem #4:** Creating a plan for AI success in a small and medium organization is not obvious.

## Getting Started

Here is what we will do:

- We are going to implement [the system you see here](./blog-llm-ai-operations-automation.md). Please watch the videos on this link first to see the big picture if you have not done so yet.
- We will configure a [Linux](./tool-linux.md) server to deploy existing open source applications ([AIChat](./tool-aichat.md) and [mdBook](./tool-mdbook.md)).
- We publish our work instruction with chat capabilities using these tools.
- We will use Linux's scheduler (cron) to keep everything up to date over time.

<video poster="./img/chat-with-work-instruction-part1-system-prep-final.png" controls>
  <source src="./video/chat-with-work-instruction-part1-system-prep-final.mp4" type="video/mp4">
</video>

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

### System Preparation

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

TODO: video of configuration

### Install Sample Work Instruction

We need to install the sample work instruction repository.

```bash
cd ~
git clone http://github.com/chuckstack/ai-llm-operations-wi-chat/
cd ai-llm-operations-wi-chat/
./publish.sh init
```

Follow the steps that appear on your screen as the process ends to finish the initial configuration.

You should now be able to see your documents via a webpage by simply clicking on the indicated link.

TODO: video of configuration

### Lets Play

Now that we have our system up and running. Let's play.

Notes:
- prompt shows both the role and the docs
- Concept of Conversation - asking followup questions
- copy/paste

### Schedule Updates

TODO: update git for regular pulls and pushes and put on a schedule

creates the one direction flow. (to be improved below)

demo change on timer

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

### Question Two

...

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>.

## TODO

- add video of success
