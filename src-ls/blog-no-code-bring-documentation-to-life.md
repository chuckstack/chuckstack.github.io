# Bring Documentation to Life with No Code

- Published: 2025-02-02
- Updated: 2025-02-02
- Author: Chuck Boecking
- Discussion: <>

## When Instructions Matter

The purpose of this post is to demonstrate how to bring work instructions and documentation to life using free and off-the-shelf tools with minimal effort.

Here is the benefit short story:

- Help your users answer their own questions
- Help your users continually improve their work instructions and documentation every day
- Use these tools to create a self-help automation platform

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

As a result of this article, you can:

- Publish your work instructions and documentation to the web or local intranet.
- Give users a chat interface to understand their documentation.
- Provide workflow to easily update documentation.
- Ensure your chat (AI/LLM) always knows the current instructions.

## Problem Statement

**Problem #1:** People are generally not good at following directions with near perfect precision. We are creative, imaginative, and (as a result of these strengths) we are often distracted. These distractions sometimes result in mistakes when performing tasks.

**Problem #2:** People have a limited ability to hold information in their conscience context when performing a task. Sometimes we need to look things up for reference.

**Problem #3:** It is often easier to ask for help than to find the answer yourself. Much of an organization's efficiency is lost because institutional knowledge is either not written down, it is located in an inconvenient location, or your organization has trained people to ask instead of self-help.

**Problem #4:** Finding information is not always easy even when you know where to look. Understanding the information after you find it can be even more difficult.

**Problem #5:** The current solutions for solving these problems can be very expensive.

## Free Picture of Success

This posts walks you through the steps to deploy a solution that solves the above problems using free tools.

Before we get into the details of the solution, I want to state a few important summary points about writing documentation and work instructions. You can find [more details here](./best-practices-operation.md#quality-program-principles).

- Current foundation LLMs (like ChatGPT, Claude, Gemini, ...) know more about public topics that any one human. I have spent 20 years in ERP, and they know far more about this topic than I do. If a topic has been reasoned about on the internet, these LLMs know about it.
- The goals of writing documentation have changed. You no longer need to write down everything. Instead, you need to write just enough where the LLM knows what you are discussion and how you want it discussed. The LLM can fill in ancillary details.
- [more...](./best-practices-operation.md#quality-program-principles)

Here is what I am proposing:

- Use [Obsidian](./tool-obsidian.md) to help your core documentation resources create your instructions as [markdown text](./blog-live-markdown-world.md).
- Configure Obsidian to save your team's work in a [git repository](./tool-git.md). This will give your whole organization special powers to make continual changes in a controlled way.
- Use [mdBook](./tool-mdbook.md) to publish your work instructions to your intended audience. See [Netbird](./tool-netbird.md) if you need to create a private network.
- Use [AIChat](./tool-aichat.md) to a) ingest your work instructions so that an LLM/AI can answer question and b) make the LLM/AI/Chat available directly inside your mdBook website.

## Target Audience

This guide is designed for someone with some technical skills. If you are not that person, simply share this guide with someone who is so they can help you.

## Implementation Details

Here are the steps to accomplish my proposed documentation and work instruction love story:

- Install Obsidian on the machines documentation and work instruction power users. Follow [operation best practices](./best-practices-operation.md) and [Obsidian](./tool-obsidian.md) best practices.
- Configure the following in Obsidian:
  - Install the `git` community plugin. This allows you to easily sync all changes to a single place.
  - Change the default Obsidian link method to use the markdown style: `[link name](./link-to-file)` instead of the default wikilinks style: `[[file-name]]`. This change is needed when you publish using mdBook.
- Create a new server with [nginx](https://nginx.org/en/) and [AIChat](./tool-aichat.md) installed on your network to publish your documentation. See configuration below.
- Create a scheduled script on your server to do the following (see details below):
  - Download and publish the latest documentation changes
  - Update your LLM with the latest changes to ensure it can answer questions correctly

Now, let's get into more detail.

## AIChat Primer

Quick demonstration of power and simplicity

## Configure Your Server

Only execute the steps in this section one time. Here is all you need to do to configure you server.

## Web Edit Workflow

Above, we discuss how your power users are going to create documents. The purpose of this section is how you encourage everyone to contribute to documentation.

...

Now that you know why git is so important, let's discuss some important details around making git easy.

## Git Details Worth Knowing

## LLM-AI in Obsidian

Discuss AI plugins and how to use

## Why Not Use Google Docs

## Vision of Things to Come Quickly






## Frequently Asked Questions

### One or Two Servers?

Should you create one or two servers in the cloud once you go into production? This is a great question. Understand you need some form of redundancy in case bad things happen. If you have on-premise computing, PhoenixNAP can be your redundancy, in which case you only need one PhoenixNAP server. The opposite is also true.

If PhoenixNAP is your only computing source, you should use two servers. Both can be in production; however, the load/size needs to allow for one server to go offline and still provide all services on the remaining server for at least a period of time.

### Should you use Incus clustering?

Maybe. Only consider Incus clustering if you have 3 or more servers. Even if you have 3 servers, you should still critically question if you want to cluster. Creating a single cluster from 3 servers adds additional features AND it adds additional complexity. 

The additional complexity needs to be justified. It is perfectly acceptable in many circumstances to maintain 3 isolated Incus instances.

Reference: [Incus Clustering](./tool-incus.md#cluster-virtualization)

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/hybrid-cloud-strategy-incus-netbird-phoenixnap/75>.

## TODO

There are no open todo items.
