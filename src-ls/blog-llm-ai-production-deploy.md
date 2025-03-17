# Production Open Source Chat with Work Instructions

- Published: 2025-03-06
- Updated: 2025-03-17
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>
- Status: Drafted (TODO: more coming...)

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
- set your organization on a path to achieve the world highest quality awards

## TOC

<!-- toc -->

## Problem Statements

Here are the problem statements we want to address:

**Problem #1:** AI is complicated to understand much less create a solution around AI.

**Problem #2:** The vast majority AI tutorials are based around writing code and they are limited to just a few LLMs and a few scenarios.

**Problem #3:** Deploying code to production is complicated if you do not have the expertise.

**Problem #4:** Creating a plan for AI success in a small and medium organization is not obvious.

## Getting Started

If you want help implementing these concepts in your organization, join the [stack-academy](./stack-academy.md).

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
- Script
  - there is going to be a day when much of what we do is automated.
  - systems will magically assist or perform much of the manual work.
  - How do we tell it what to do?
  - How do we start getting ready for that day - today?
  - Asked another way, what is the minimum amount of effort I can do today to produce the most benefit in tomorrow's world
  - This outline will thrust you ahead of 90% of other companies,
  - We will combine best practice that align you with quality awards like the Baldrige award and start the augmentation/automation path?
  - We will get your people ready for the rapidly approaching ai augmented workforce!

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

Here are some notes about the installation based on user feedback:

- The script attempts to get your IP. If you are installing the sample work instructions using AWS, the observed IP will be your server's **private** IP. This will most likely prevent you from connecting from your AWS server since you need to use its **public** IP.
- If you need to use a different IP, be sure to update the following file accordingly: /opt/work-instruction/chuckstack/ai-llm-operations-wi-chat/theme/head.hbs

Let's spend a moment discussing the airole-starter.md document. This text gets passed along side every prompt. This document gives you control over the user experience.

<video controls>
  <source src="./video/chat-with-work-instruction-part3-airole-start.mp4" type="video/mp4">
</video>

Soon we will discuss advanced topics related to balancing concise responses with the ability to ask for more details.

### Search Documents

Chat is powerful; however, there are times when you need to simply search for something. Search is a powerful feature of this solution. We use [mdBook](./tool-mdbook.md) to publish your work instructions and make them easily accessible to everyone in your organization.

Here are the ways to search:

- `ctrl+f` (control + f key) to use the browser
- `s` to search

<video poster="./img/chat-with-work-instruction-part4-search-start.png" controls>
  <source src="./video/chat-with-work-instruction-part4-search.mp4" type="video/mp4">
</video>

### Edit Online

Everyone in your organization should be able to easily contribute. The purpose of this section is to highlight just how easy it is.

Note that this example assumes many of the work instructions already exist. We will talk about how to get started creating your work instructions from scratch in a different section.

<video poster="./img/chat-with-work-instructions-part6-editing-end.png" controls>
  <source src="./video/chat-with-work-instructions-part6-editing.mp4" type="video/mp4">
</video>

In the video we are using [GitHub](./tool-git.md) to host our work instructions. GitHub (and tools like it) provide online editing and advanced workflow to support change approval processes.

See the below [FAQ](#frequently-asked-questions) for how to create a new work instruction from scratch.

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

Note that your cron file might be named differently depending on what you are deploying. It will always start with 'cron-...'.

### Talk to Any LLM

Quickly switch between almost any large language model (LLM) including local models. [AIChat](./tool-aichat.md) helps you focus on choosing the best model for the task making the testing and deploy almost trivial. AIChat not only powers this article, it is also one of the inspirations for creating the chuck-stack.

<video poster="./img/chat-with-work-instructions-part7-models-splash.png" controls>
  <source src="./video/chat-with-work-instructions-part7-models.mp4" type="video/mp4">
</video>

### Control the User Experience

You can greatly influence how your chat responds to users.

<video poster="./img/chat-with-work-instructions-part10-prompt-splash.png" controls>
  <source src="./video/chat-with-work-instructions-part10-prompt.mp4" type="video/mp4">
</video>

References:

- You can find the above prompt in your /opt/work-instruction/chuckstack/ai-llm-operations-wi-chat/src-work-instructions/airole-starter.md.
- AIChat has a symbolic link that connects the /home/cathy/.config/aichat/roles/ to the airole-starter.md prompt.
- [Claude system prompts](https://docs.anthropic.com/en/release-notes/system-prompts) - This is a great study guide to help you understand how to talk to the LLM and get what you want. We are fortunate that Claude makes these prompts available to the public!

### Responses and Improvement Workflow

We use AI LLM to help you review and improve the previous day's questions and answers in an incredibly convenient way.

- The review process is built into the [Always Up to Date](#always-up-to-date) automated deploy process.
- The actual questions, responses and AI assessment are automatically uploaded to Obsidian so that work instruction creators can use the feedback directly in the same tool.
- We use this feedback to a) improve the LLM prompt, b) improve the work instructions, and c) improve the [airole-message-review.md](https://github.com/chuckstack/ai-llm-operations-wi-chat/blob/main/src-work-instructions/airole-message-review.md).

Note the below video is pulled from [here](./blog-llm-ai-operations-automation.md#feedback-loop) to help demonstrate how the work instruction creators interact with the AI feedback directly inside Obsidian.

<video poster="./img/07-gen-wi-demo-feedback-loop-splash.png" controls>
  <source src="./video/07-gen-wi-demo-feedback-loop.mp4" type="video/mp4">
</video>

## Architecture Overview 

Here are the tools we use to minimize effort and maximize user agency.

### Tools

Here are the tools we use:

- We use [Obsidian](./tool-obsidian.md) to help our work instruction creators write documents in markdown.
  - It includes AI assisted writing plugins.
  - It includes [git](./tool-git.md) plugins to automatically track and publish changes to the website.
- We use [mdBook](./tool-mdbook.md) to convert our published markdown work instructions into a website.
- We use [AIChat](./tool-aichat.md) to:
  - embed the work instructions
  - deliver a kind and patient 'chat' experience
  - evaluate user interactions with the 'chat' tool
  - propose improvements to work instructions
- We use [ttyd](./tool-others.md#important-tools) to expose AIChat and other terminal tools to our people.
- We use `nginx` to host the mdBook website, reverse proxy `ttyd`, and terminate https/ssl connections.

### Walk Through

The purpose of this section is to help you see how the tools fit together. It is important to note that just about any Linux admin in the world will understand these bullets and how they fit together.

Note, the following details assume you did not modify the default publish installation variables.

- When you navigate to https://your.ip/chat.html, you see a static site being hosted by nginx showing chat.html with an iframe that embeds the ttyd chat feature in the collapsed section.
- The iframe is made available via /opt/work-instruction/chuckstack/ai-llm-operations-wi-chat/src-work-instructions/chat.md whose class name is associated with javascript inside /opt/work-instruction/chuckstack/ai-llm-operations-wi-chat/theme/head.hbs.
- The iframe calls on an nginx reverse proxy to publishing ttyd.
- nginx (both static and reverse proxy) is configured in /etc/nginx/sites-available/ai-llm-operations-wi-chat-airole-starter.
- ttyd is made available via a systemd service whose service name is `ai-llm-operations-wi-chat-airole-starter.service`
- The `ai-llm-operations-wi-chat-airole-starter.service` is configured in cat /etc/systemd/system/ai-llm-operations-wi-chat-airole-starter.service.

### ttyd

ttyd is an important and simple command line tool to convert a terminal into a website. We use ttyd to make AIChat available everywhere.

<video poster="./img/chat-with-work-instructions-part8-splash.png" controls>
  <source src="./video/chat-with-work-instructions-part8.mp4" type="video/mp4">
</video>

### Global VPN

See [Incus-Netbird-PhoenixNAP](./blog-incus-netbird-phoenixnap.md) for how to create a multi-location, cloud-hybrid network to expose this chat feature to all your locations and remote users in a secure and private way.

### Local AIChat

AIChat can be run almost anywhere. It works on Windows, Mac, Linux and more. This means the same tool that you use on a server inside your website, ERP and other tools can also run locally. 

> It truly is a "learn once and run everywhere" tool.

We (chuck-stack) run AIChat on almost every machine. We use the `super+t` (windows key + the letter t) from anywhere to instantly open a terminal and ask any question. Here is an example:

```bash
aichat -- how do I get started using AI LLMs to automate 
```

[Here is an example](./picture-success.md#how-is-this-possible) were we use AIChat to automate creating an order in an ERP.

## More Possibilities

The sample work instructions in this article represent a starting point. Let's talk about how you can easily extend this sample into your organization.

### Multiple Roles

You may support as many roles as you wish. The ttyd systemd service supports the role-based chat. To create more than one role chat:

- create more ttyd systemd services on different ports
- create more entries in nginx for the respective reverse proxies
- include more entries in /opt/work-instruction/chuckstack/ai-llm-operations-wi-chat/theme/head.hbs to call the services

### Multiple Work Instructions

The sample repository in the article only includes a single set of work instruction documents; however, you may maintain and publish as many sets of independent documents as you wish.

You simply iterate across each directory or repository and call `mdBook build` to publish each of your sets of work instructions. You will have an entry in nginx for each published directory.

### Multiple Chats

The below code embeds an expandable chat window. You may add this code anywhere in your work instructions. For example, you can have a chat window on every page for convenience.

```html
<details ontoggle="handleToggle(this)">
     <summary>Expand this to start asking...</summary>
     <div class="ttyd-container"></div>
 </details>
```

## Next Steps

If you want help implementing these concepts in your organization, join the [stack-academy](./stack-academy.md). We will walk you though the process of:

- deploying your first Obsidian + Git + website + chat solution in your organization - how to fork and deploy this example...
- identifying and creating your first set of work instructions for a target role
- teaching your content writers how to write the fewest words possible to achieve the desired result
- soliciting feedback from everyone after the initial deployment

## Frequently Asked Questions

### Can I use Claude or other LLMs instead of OpenAI (ChatGPT)

Yes. In fact, we recommend you use Claude. It offers a great balance of performance and cost.

Note that at the time of this writing, Claude does not offer an embedding service. This means you will most likely use both OpenAI (for embeddings) and Claude (for prompting).

### Why Markdown - Why Not Google Docs or MS Word?

See [We live in a markdown world](./blog-live-markdown-world.md) for why markdown is so important.

### I cannot access my website

See the [Install Sample Work Instruction](#install-sample-work-instruction) section below the video for notes about user feedback and issues.

### Why does this example look like the chuck-stack?

We do not have time to waste. We want to use as few tools and as few experts as possible to create our self-help chuck-stack. The chuck-stack is just like your work instructions. It is a giant set of work instructions to create your own stack as quickly and easily as possible.

### How do you create a new work instruction document from scratch?

We recommend [Obsidian](./tool-obsidian.md) for those who are primarily responsible for creating and evolving work instructions. Obsidian is ideal and enjoyable when writing highly-connected content like work instructions.

Watch this [series of videos](./blog-llm-ai-operations-automation.md) to see how we use Obsidian to work instruction authoring easier.

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/production-open-source-chat-with-work-instructions/81>.
