# Stack FAQ

The purpose of this page is to answer frequently asked questions (FAQ) about the chuck-stack.

## TOC

- [Why do we love the chuck-stack?](#why-do-we-love-the-chuck-stack)
- [Is chuck-stack really the name of the project?](#is-chuck-stack-really-the-name-of-the-project)
- [How do we choose stack components?](#how-do-we-choose-stack-components)
- [What are the chuck-stack tools?](#what-are-the-chuck-stack-tools)
- [What are the project guiding principles?](#what-are-the-project-guiding-principles)
- [What is the stack-academy?](#what-is-the-stack-academy)
- [What about scalability?](#what-about-scalability)
- [What about AI Agents](#what-about-ai-agents)
- [What about chuck-stack Revenue?](#what-about-chuck-stack-revenue)
- [What is a Superclerk?](#what-is-a-superclerk)
- [Saving Heartbeats](#saving-heartbeats)
- [What is the current status of chuck-stack?](#what-is-the-current-status-of-chuck-stack)
- [Is chuck-stack an ERP?](#is-chuck-stack-an-erp)
- [What is capability sandboxing?](#what-is-capability-sandboxing)
- [What are the most important pieces of the chuck-stack application framework?](#what-are-the-most-important-pieces-of-the-chuck-stack-application-framework)
- [Why is the CLI so Important?](#why-is-the-cli-so-important)

## Why do we love the chuck-stack?

- Because we believe it is the most simple solution given the complexities running an organization.
- Because we drive down the cost of AI to augment your organization.
- Because we do not need to worry about SQL injection since permissions are managed in the database.
- Because we minimize the financial and employee commitment needed to run an organization.
- Because we can focus on hiring good, smart people.

## Is chuck-stack really the name of the project?

Yes and no... Naming a project is hard. chuck-stack is a good starting name given that Chuck Boecking has spent the last 25 years immersed in small-to-medium organization ERP, data management, and IT. This project started as result of what we believe to be safe, usable, reliable and performant. If the community believes there is a better name to represent this project, then we will change the name accordingly. That will be a good day!

## How do we choose stack components?

See [stack-tools](./stack-tools.md).

## What are the chuck-stack tools?

See [stack-tools](./stack-tools.md).

## What are the project guiding principles?

See [chuck-stack guiding principles](./introduction.md#chuck-stack-guiding-principles)

## What is the stack-academy?

See the [stack-academy](./stack-academy.md) page.

## What about scalability?

The chuck-stack uses widely available and well understood tools (namely PostgreSQL and Linux) whose scalability is widely reasoned about. The chuck-stack can easily be scaled to thousands of concurrent users by simply following basic best practices.

Reference: [Postgresql Scalability](./postgres-convention/scalability-convention.md)

## What about AI Agents

I am commonly asked about AI agents and agentic frameworks (like CrewAI). Before we get into the discussion, it is important to remember that the chuck-stack serves small and medium organizations. The needs and abilities of these groups are significantly different than someone building the next web-scale product like tiktok.

It is also important to note that the chuck-stack takes a very different approach to how an organization improves over time. The traditional approach is to have technical group (like IT) build tools for an organization based on documented needs. The problem statement is that IT people almost never fully understand the needs of the people who perform the nuanced work for years.

The chuck-stack takes the approach that an IT department has only one primary focus: build a self-help platform. The IT goal is to enable the people who perform a task every day to reason, augment and automate their roles.

Agentic orchestration tools like CrewAI do not fit well in a typical chuck-stack organization. To explain why, we need to explain what chuck-stack organizations need from AI. Note we are using the term 'AI' as a general catchall term for all AI-related topics and technologies.

- Need AI to understand documented work instructions (specifically: RAG)
- Need AI to help educate new people to roles (specifically: chat)
- Need AI to understand operational/transactional systems (specifically: SQL schema)
- Need AI to understand the intersection between work instructions and transactional system schema (specifically: context)
- Need AI to help make real-time decisions that: 
  - make the right data available to the right role
  - help make the role easier to execute
  - help prevent mistakes
- Need to create AI 'tools' quickly, simply and easily
- Need to create simple workflows where neural networks make judgements and dispatch execution to simple tools

Most organizations do not have complex BPMN-style workflows. A large percentage (say 70% to 90%) of operations execute a long a defined [happy path](./terminology.md#happy-path). The  task is simply 'follow the work instructions' and look for any scenarios the fall out of the happy path. If a scenario falls out of the happy path, follow the work instructions that define the error, exception or edge case scenario. If there are no work instructions, ask a human.

Said another way... work instructions are the best, easiest, and most concise way to communicate and guide what needs to happen. Agentic frameworks are not needed to simple follow work instructions and execute tools accordingly.

Problem with Agentic frameworks:

- They are too hard for an everyday person to reason about
- The complexity of coding modern agentic systems is prohibitively expensive
- Agentic frameworks are the wrong tool for the problem/need as described above

## What about chuck-stack Revenue?

We are commonly asked about the commercial viability of the chuck-stack. Specifically, people ask about generating revenue from a broader audience. Here are our thoughts and experiences on revenue.

- We have supported our families and business partners over the last 15 years from traditional ERP services (learn, configure, audit, deploy, scale and support). While the world is changing quickly both in terms of training and consulting, there is an aspect to this model that will remain. Reference: <https://www.chuckboecking.com>
- We believe there is value in providing chuck-stack hosting and configuration based on best practices. This follows the same life cycle (learn, configure, audit, deploy, scale and support) as ERP. This concept loosely follows a broadly accepted and successful Metabase, Netbird, Discourse, ... model; however, the chuck-stack is different since it is a collection of tools (not a single tool like discourse).
- Revenue to date is generated through a flat monthly '[professional services / training](./stack-academy.md)` fee plus project and hourly consulting services.
- It is important to note that our general audience is small to medium organizations. This group is commonly defined by annual revenues ranging from $1M to $500M USD. Our target chuck-stack audience is more narrowly defined by organizations with $20M to $200M annual revenue. Although, our smallest customer is below $1M USD annual revenue, and our largest customer topped over $800M USD annual revenue.

## What is a Superclerk?

See [superclerk](./terminology.html#superclerk).

## Saving Heartbeats

What does this mean? We have a precious few moments on this Earth. We will do everything in our power to preserve your time so that you may spend your remaining "heartbeats" on something that really matters to you.

## What is the current status of chuck-stack?

The short answer is: We have been deploying the chuck-stack for more that 10 years. Some parts of the stack are in early alpha. Other parts reached production 15 years ago. Here is a more detailed answer:

-   [iDempiere ERP](https://www.idempiere.org/) is the oldest member of the stack. We started deploying it on Linux as early as 2001.
-   We started deploying [PostgreSQL](https://www.postgresql.org/) on Linux in 2011.
-   [Metabase](https://www.metabase.com/) BI has been in production for us for the last 4 years.
-   [Nushell](https://www.nushell.sh/) has been in production for us for the last 2 years.
-   [dbt](https://www.getdbt.com/) has been in production for about 6 months. Note that we have used various ETL tools for the last 10 years.
-   The AI tools like [aichat](https://github.com/sigoden/aichat), are relatively new. Being able to use these tools to change how people interact with data is also new. This style of UI development is in alpha.

## Is chuck-stack an ERP?

No, not yet - but someday. Here are our thoughts about becoming an ERP:

-   The biggest hurdle to becoming a viable ERP is data entry.
-   It is common for an order header to have 90+ columns.
-   Historically, ERP systems burden users with a sea of fields (representing the 90+ columns).
-   We do NOT believe this is the best approach because a user will only need to modify three or so fields in a newly drafted order. The remaining fields should just default from either the Business Partner settings or recent orders. Said another way, changing many defaults is the exception, not the rule.
-   Improving the user experience for the above order scenario is currently our biggest challenge.
-   Another challenge will be to provide a viable accounting system. In the short term, we will use [iDempiere](https://www.idempiere.org/). In the long term, we will use AI and available references to create an accounting system that best supports our stack. Accounting is one of our strongest areas of our ERP practice.

## What is capability sandboxing?

Capability Sandboxing is the act of defining roles so well that you can consider them to be a contract and enabling the system to ensure role created automation stays within the confines of the contract.

## What are the most important pieces of the chuck-stack application framework?

The two most important pieces of the chuck-stack application are workflow and attributes.

-   Workflow is critical to data management. However, workflow is notoriously difficult. The concepts can be difficult to learn. The applications are often difficult to install and maintain, and they are either too complicated or overly simple. It is incredibly difficult to create a workflow architecture that is both generic enough and easy enough for broad adoption. AI will change the workflow landscape. What was previously tedious, is becoming a conversation.
-   Attributes and attribute sets are critical to data management. Being able to tag anything with an attribute, or a set of attributes is one of the most common actions in data management.

## Why is the CLI so Important?

See [CLI Better Than ...](./blog-cli-better.md)

