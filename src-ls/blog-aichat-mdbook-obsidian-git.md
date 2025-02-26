# AIChat + mdBook + Obsidian + Git + ttyd

- Published: 2025-02-18
- Updated: 2025-02-18
- Author: Chuck Boecking
- Discussion: <not-created-yet>
- Status: Draft

## Practical AI - Creating Live Documentation

The purpose of this post is to help you create your first live work instructions as described in [Operations and AI LLM Technology in 2025](./blog-llm-ai-operations-automation.md).

Here is the benefit story:

- use simple tools to perform specific tasks that can used everywhere in your organization
- give practical examples of the individual tools and show how they work together

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you!

As a result of this article, you can create your own instance as demonstrated [here](./blog-llm-ai-operations-automation.md).

## TOC

<!-- toc -->

## Problem Statements

**Problem #1**: The internet is filled with Python programming examples of chat with your docs. Just about every one of them uses a different library or demonstrates a different technique. These examples make great teaching tools; however, they are difficult to turn into production applications. We need useful tools.

**Problem #2**: Production solutions are not cheap (even when they are free). They must be deployed, maintained, upgraded, and fixed throughout time. Every production system you deploy is a liability in the form of technical debt to your organization. We want to minimize complexity.

**Problem #3**: Programming examples are great for programmers; however, they are not great for small and medium organizations. They are not easy to reason about or apply in diverse scenarios. We need tools that are well fitted for a production task.

**Problem #4**: All-in-solutions/applications are great until they are not. Applications take a stance on what you can and cannot do. The more you use them, the more you learn what they cannot do. We want to put the right tools in the right hands.

## User Agency

Before we outline the solution, we want to stress the importance of user agency. Give the people who do the tasks the ability to enjoy and thrive in their roles. We find the following to be true based on our 25 years of ERP experience. Here is what people want from systems:

- give the me appropriate data
- make my job as easy as possible
- help me prevent mistakes

This post supports all three bullets in varying degrees. Let's get started showing you how...

## Reasonable Tools

Here are the tools we will use to support distributing your live documentation (work instructions) throughout your organization in a production setting.

Each tool does one thing really well. We will combine these tools into a system where users create a workflow that brings your documents to life across your entire organization.

- [AIChat](./tool-aichat.md) - AIChat is a free, open-source, all-in-one, multi-platform LLM tool featuring chat, shell assistant, cmd & REPL mode, RAG, AI Tools & Agents, and more.
- [mdBook](./tool-mdbook.md) - mdBook is a free, open-source, multi-platform tool to create modern online books from markdown text files.
- [Obsidian](./tool-obsidian.md) - Obsidian is a multi-platform document, knowledge base and note-taking application that operates on markdown files. It brings the writing pleasure of Word and Google Docs to creating markdown text.
- [git](./tool-git.md) - Git is a free, open-source and multi-platform software version tracker for files. It supports fast performance, data integrity, and non-linear authoring and document review workflows.
- [ttyd](./tool-ttyd.md) - ttyd is a free and open-source tool for sharing terminals (CLI) over the web.

Note the below installation is quite trivial for someone who knows Linux and its related tools. One of the foundations of the chuck-stack is to minimize the number of needed experts. [Linux](./tool-linux.md) is a core expertise for the chuck-stack and this tutorial.

If you want help, join the [stack-academy](./stack-academy.md). We will help guide you and build your team's Linux expertise.

## Picture of Success

See the videos in [Operations and AI LLM Technology in 2025](./blog-llm-ai-operations-automation.md) for a detailed picture of success and what is possible as it relates to the chuck-stack.

In this post, I want to show you how to use the tools to create this picture of success.

## Tools vs Applications

You could hire a developer to build an application to accomplish the same picture of success. We argue that you should NOT. Why? 

- **Problem #2**: Every application must be maintained throughout time. More above...
- **Problem #4**: Applications are great until they are not. More above...

If you can assemble the solution using common tools, you get the following benefits:

- Tools can be used in multiple scenarios; therefore, they are easier to understand and reason about.
- Tools are often maintained by someone else; therefore, choose popular and well-documented tools.
- Systems built from tools can solve 10x the number of problems given the myriad of ways they can be assembled together.

Here is a discussion on [why the command line](./blog-cli-better.md) is so important. Let's start using the tools and see why...

## AIChat Tool

Here are videos demonstrating why AIChat is so important.

> Side note: take a wild guess at how much you would spend with a development team to get the below functionality. Keep in mind that AIChat is free.

### Better than Google

Faster...

### Chat with Documents

What do you you think...

### Fix my Document

Execute all tasks...

### Session (REPL)

...

### Command

Get it done!

### How do I Use Linux

...

## ttyd

ttyd is neXt. It helps illustrate how you can make CLI tool available over the web. Specifically, let's make AIChat available to those important to you.

### Quick Start

Show AIChat over the web

## each tool...

...

## Installation

The purpose of this section is to help you install all the above tools. We will use Debian Linux as our example. It represents a popular and well-documented Linux platform.

...


# Operations and AI LLM Technology in 2025

- Published: 2025-02-12
- Updated: 2025-02-16
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/operations-and-technology-in-2025/76>
- Status: Released

## Don't Just Survive - Thrive Beyond 2025

The purpose of this post is to provide a blueprint for operational efficiency and excellence in 2025 and beyond. 

Here is the benefit story:

- demonstrate how to quickly and easily leverage AI LLMs (large language models) to increase operational accuracy and precision
- bring work instructions and documentation to life using free and off-the-shelf tools with minimal effort
- help your people augment and automate processes using work instructions
- give you a practical example of a company growing from 6 locations to 60 locations

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

As a result of this article, you can:

- Publish your work instructions and documentation to the web or local intranet
- Give users a chat interface to understand their documentation
- Provide workflow to easily update documentation
- Ensure your chat (AI/LLM) always knows the current instructions

## Problem Statements

**Problem #1:** People are generally not good at following directions with near perfect precision. We are creative, imaginative, and (as a result of these strengths) we are often distracted. These distractions sometimes result in mistakes when performing tasks.

**Problem #2:** People have a limited ability to hold information in their head when performing a task. Sometimes we need to look things up for reference.

**Problem #3:** It is often easier to ask for help than to find the answer yourself. Much of an organization's efficiency is lost because institutional knowledge is either not written down, it is located in an inconvenient location, or your organization has trained people to ask instead of self-help.

**Problem #4:** Finding information is not always easy even when you know where to look. Understanding the information after you find it can be even more difficult.

**Problem #5:** The current solutions for solving these problems can be very expensive. AI is an expensive marketing buzz word.

## Quality Big Picture

Before we outline the solution, it is pivotal we see the big picture. Basic quality concepts are more important today than ever before. We cannot state this strongly enough!

<video poster="./img/01-gen-wi-demo-why-intro.png" controls>
  <source src="./video/01-gen-wi-demo-why-intro.mp4" type="video/mp4">
</video>

Here are the foundations of any quality standard. If you do not currently have a quality manual, put these five bullets on a document and publish it everywhere. If you did nothing else, this would be an amazing start!

- Say what you do
- Do what you say
- Prove you did it
- Ask for feedback
- Continually improve

<video poster="./img/02-gen-wi-demo-say-what-you-do.png" controls>
  <source src="./video/02-gen-wi-demo-say-what-you-do.mp4" type="video/mp4">
</video>

We use organizational basics (like work instructions) to drive continuous improvement by deploying these instructions into our live systems. We expect everyone in the organization to improve them. With every improvement, the system evolves.

Point of reflection: if you are not willing to create the above one-page quality manual to drive your organization forward, do not bother reading further.

## Create Training from Work Instructions

There is no better way than to simply show you what is possible when you write it down!

Here is an example where we create a job aid/visual from an existing work instruction document:

<video poster="./img/03-gen-wi-demo-claude-demo-job-aid.png" controls>
  <source src="./video/03-gen-wi-demo-claude-demo-job-aid.mp4" type="video/mp4">
</video>

Here is an example where we create a training quiz from an existing work instruction document:

<video poster="./img/04-gen-wi-demo-claude-demo-quiz.png" controls>
  <source src="./video/04-gen-wi-demo-claude-demo-quiz.mp4" type="video/mp4">
</video>

By using the US Constitution, we highlight the profound effect you can create by simply writing the instructions. 

## Work Instruction Vision and Goal

It will take a moment for people to get used to simply 'asking' your system for help. However, when they do, they will be surprised with the answers they get. 

Were you aware that an LLM could create a visual job aid or an interactive quiz based on a work instruction? Just wait, it is about to get even more exciting.

<video poster="./img/05-gen-wi-demo-vision-goal.png" controls>
  <source src="./video/05-gen-wi-demo-vision-goal.mp4" type="video/mp4">
</video>

## Obsidian Plain Markdown Text

LLMs are large language models. They have an incredible ability to understand text. When you write your work instructions in 'text' (not Word or Google Docs) just plain text, you gain the ability to use any and every LLM in the world, and therefore, you gain the ability to use just about every tool.

<video controls>
  <source src="./video/06-gen-wi-demo-obsidian-mdbook.mp4" type="video/mp4">
</video>

## Feedback Loop

Notes about organizational evolution through continual feedback:

- Quality standards ask you for follow your own directions.
- These standards ask that you prove you followed the standards released at the moment the action was performed.
- Most standards do not dictate the velocity at which you evolve.
- They simply request you ask for feedback and act accordingly.
- They often do ask you to reflect on the impact of your changes.

<video controls>
  <source src="./video/07-gen-wi-demo-feedback-loop.mp4" type="video/mp4">
</video>

In the above video, we use github.com to manage all changes. GitHub provides Git services. You might not be familiar with Git; therefore, it is worth discussing a few points to consider in a later conversation:

- Git tracks every change by every member, and as a result, you can report on these changes.
- Git allows for making changes in an off-to-the-side branch where you can stage, test and review changes before they are released.
- Git gives your organization the power to articulate exactly how you want to manage change.

## Tools and More

Said simply: LLMs help help you process more information, make better decisions, and execute more tasks with greater velocity.

Said with more detail:

- An LLM is a neural network with the ability to predict what should 'be' next based on a given context.
- It can help you solve many if not all the above [problem statements](#problem-statements).
- Your success with LLMs depends on how you empower your roles to use LLMs to augment and automate many of the routine operations of your organization.

This video shows you an example of how you describe (in plain text) the steps of an operation, and it also shows how to instruct the LLM which tool accomplishes the task.

<video controls>
  <source src="./video/08-gen-wi-demo-tools-context.mp4" type="video/mp4">
</video>

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

## Example Company

This is a story of a chuck-stack member. Imagine yourself in their shoes.

You and your partner have spent over 10 year building a boutique retail professional services business. It took you a while and some nail-biting experiences; however, you finally settled into a good, repeatable and profitable business that has resulted in over 6 locations across multiple cities.

You have done such a good job, that private equity has purchased your business, and they have retained your services to help grow it to the next level (with significant oversight). Keep in mind:

- The private equity firm is not a domain expert in your business; they rely on you as an expert.
- The private equity firm has domain expertise is helping profitable businesses with reasonably management grow beyond owner-operator status.
- As an owner-operator, you are comfortable running the entire business as you have done for more than a decade.
- All critical and many non-critical decisions come from you.
- You have an emerging business manager; however, this person's influence is subject to the historical norms of the 'ask the owner' MO.
- What you do is complex enough that it takes professionals with over 10 years of education and experience to effectively deliver your services.

Now, your collective jobs are to grow the business 10x in about three years. Doing so successfully will profoundly impact the wealth of you and those around you. This means:

- You location count will grow from 6 to about 60.
- Your revenue will likely grow by more than 10x.
- Your internal service departments (like accounting and IT) will grow from 1 to about 4.
- Your customer's experiences will no longer be a direct result of your skills, knowledge, attitude or capacity to innovate.

Said another way, you must build a sustainable business that effectively removes you from its operational systems. If you do not, failure is the likely outcome.

There is a big difference between knowing what needs to be done and knowing how to accomplish the goal. Your entire existence to this day has been centered around you. You are being asked to change in a way that is completely foreign to your practicing norms.

This post is your blueprint for how to move forward. It is both the starting point and the platform to begin your journey. Your job has effectively changed. You must inject your style of critical thinking into the system without needing to actually answer questions directly.

## Principles before Mission Vision Values

We are fans of understanding your "mission vision and values". We believe this knowledge represents an evolution in your ability to reliably deliver value to and extract profit from this world.

**However**, principles are paramount! Principles are the foundation and the rules by which you make decisions at every level. The better you communicate your principles, the better the organization can establish a decision making framework that is consistent with the value you provide the world.

We go down this path because inevitably, you will be asked a question about how to manage the business. You will be tempted to simply answer as you have always done. Instead, ask the question: "what is the principle; How do you make this decision"? If you or your people struggle to answer this question, you need to start writing your principles in your work instructions (roles, tasks, and tools).

You might provide inconsistent messages in the beginning. Or, you might wrestle with the priority of the respective principles. That is OK. You have most likely not needed to vocalize them before. However, you need to start... You need to try...

At some point, we will discuss the concept of "first things first". This phrase represents applying principles to strategy, but this is a topic of another day.

## Frequently Asked Questions

### Do we need an LMS?

Maybe. Before you think about learning (LMS) or training systems, create your work instructions. Managers need to document roles. Users document tasks. Everyone documents tools.

Only after you have reached the point where your work instructions have reached 'live' status as demonstrated above, should you consider an LMS. Then, think critically about whether the learning/training system will slow you down or better your operations.

### Question Two

...

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/operations-and-technology-in-2025/76>.

## TODO

No open todo
