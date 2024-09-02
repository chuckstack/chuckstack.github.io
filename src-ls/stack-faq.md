# Stack FAQ

The purpose of this page is to answer frequently asked questions (FAQ) about the chuck-stack.

## Is chuck-stack really the name of the project?

Yes and no... Naming a project is hard. chuck-stack is a good starting name given that Chuck Boecking has spent the last 25 years immersed in small-to-medium business ERP, data management, and IT. This project started as result of what we believe to be safe, usable, reliable and performant. If the community believes there is a better name to represent this project, then we will change the name accordingly. That will be a good day!

## How do we choose stack components?

The chuck-stack has been cultivated over the last 25 years. Here are the guidelines for inclusion:

-   Commonly used - and well understood to make AI augmentation easier.
-   Open source - or at least as open as possible.
-   Start simple - easy to understand and reason about. Nix pushes this concept a little (or a lot); however, the power and simplicity it creates is worth the extra effort.
-   Basic functionality - supports basics like CRUD (create, read, update and delete) with minimal effort.
-   Kind educator - needs someone in the community who makes the technology kind to the target audience.
-   Kind integrator - needs someone local to you digitally to help you leverage the tool.
-   Synergy - supports other tools in the stack. Example: runs on or integrates with PostgreSQL.
-   Simple architecture - not overly complicated relative to the tool's purpose.
-   Enterprise scalability - it needs to scale to support an organization of at least 1,000+ across multiple continents.
-   Enterprise testing and deployment - it needs to support team development where improvements can be development, tested and accepted in dedicated environments and easily migrated to production using CI/CD concepts or scripts.
-   Command Line Interface (CLI) centric - we love cli interfaces because they are accessible from anywhere.
-   REST centric - we love scriptable interfaces that can be called from anywhere (not just the cli).

## What are the chuck-stack tools?

Here are the tools we use almost every day:

-   [Linux (compute)](https://en.wikipedia.org/wiki/Linux): best tool to run applications on just about any platform in the world.
-   [PostgreSQL (data)](https://www.postgresql.org/): best tool for managing "data" database with best performance and enterprise features.
-   [PostgREST (API)](https://postgrest.org/): PostgreSQL tool for exposing an OpenAPI compliant REST interface directly out of your database.
-   [GitHub (code, information, collaboration)](https://github.com/): best tool for managing information, instructions and discussions. It provides most options for AI amplification.
-   [aichat (AI)](https://github.com/sigoden/aichat): command line AI chat and execution tool that include saves sessions, rag, function-calling and more.
-   [Nushell (system and data)](https://www.nushell.sh/): Terminal shell with designed to understand and manipulate structured data.
-   [Zellij (UI)](https://www.zellij.dev/): terminal workspace environment for managing information and transactions.
-   [dbt (ETL)](https://www.getdbt.com/): tool to transform transactional data into a form than can be consumed by BI or AI or ...
-   [Metabase (BI)](https://www.metabase.com/): BI tool for visualizing and publishing data. Used if GitHub discussions is not good enough.
-   [Pass (secrets)](https://passwordstore.org/): is a command line tool that helps you manage secrets/passwords with gpg. It is simple, scriptable, auditable, distributed and secure. [gpg](https://gnupg.org/) is an encryption program that provides cryptographic privacy and authentication for data communication. The Pass repository is available on almost all platforms. It integrates well with github.
-   [Zabbix (monitoring)](https://www.zabbix.com/): monitor resources and respond to events.
-   [Incus (virtualization)](https://linuxcontainers.org/incus/docs/main/): container and virtual machine (VM) tool to develop, test and deploy IT applications.
-   [iDempiere (ERP)](https://www.idempiere.org/): ERP for managing orders, inventory, invoices, payments, accounting and much of the data you need to execute operations in your organization.

Here are the tools we want to use more:

-   [PostgresML (AI)](https://postgresml.org/): PostgreSQL tool for AI training and inferencing directly out of your database.
-   [Ollama (AI)](https://ollama.com/): AI tool for running generative AI (LLM) models locally.
-   [CrowdSec (security)](https://www.crowdsec.net/): Proactively block known malicious IPs and activities.
-   [NixOS (Linux OS)](https://nixos.org/): specific distribution of Linux delivering the most control and compute options. Nix represents the easiest way to describe, deploy and maintain desktops and servers.

## What are the project guiding principles?

Here are the chuck-stack design and implementation first principles in order. If you cannot accomplish these principles, little else matters.

1.  Protect an organization's revenue stream and people! This needs to be the CEO mantra with any system change.
2.  Deliver enjoyable systems that a) put the right data in the hands of the right users, b) make the user's job as easy as possible, and c) help users prevent mistakes!
3.  Deploy infrastructure that is safe, reliable and performant - in that order! If a system is not safe, reliability does not matter. If it is not reliable, performance does not matter.
4.  Write as little code as is possible. Every line of code is a liability that will cost you in the future. It must be documented, tested, reviewed and maintained. If you can use an existing tool that meets the [chuck-stack guidelines](https://www.chuck-stack.org/stack-faq.html#how-choose) in place of writing code, do it!
5.  Support self service by giving users the tools to automate tasks within their roles without direct intervention from IT!

## What is the stack-academy?

The stack-academy is an online support infrastructure for the chuck-stack. We believe in a cooperative approach to learning, support and innovation. As a group, we establish the principles and collectively create an open source platform that values simplicity, stability and self-service.

Here are the details:

-   What is the purpose of the stack-academy? We want to accelerate your learning curve and provide an interactive environment to overcome challenges.
-   Do you need to join to use the chuck-stack? No.
-   Do you need to join to get prioirty support? Yes.
-   Is there a way to get phone support? Yes, we hold multiple online meetings per week where anyone can bring any topic.
-   What is the minimum purchase? The stack-academy is a monthly subscription. The minimum purchase is one month. You may join and cancel as many times as is needed to accomplish your goals.
-   Are there special pricing considerations for individuals (students or aspiring integrators)? Yes. Complete this form for consideration.
-   How do I join? [click here](https://buy.stripe.com/7sIbLIeeU3oT4IEfYY)

## What is the current status of chuck-stack?

The short answer is: We have been deploying the chuck-stack for more that 10 years. Some parts of the start are in early alpha. Other parts reached production 15 years ago. Here is a more detailed answer:

-   [iDempiere ERP](https://www.idempiere.org/) is the oldest member of the stack. We started deploying it on Linux as early as 2001.
-   We started deploying [PostgreSQL](https://www.postgresql.org/) on Linux in 2011.
-   [Metabase](https://www.metabase.com/) BI has been in production for us for the last 4 years.
-   [Nushell](https://www.nushell.sh/) has been in production for us for the last 2 years.
-   [dbt](https://www.getdbt.com/) has been in production for about 6 months. Note that we have used various ETL tools for the last 10 years.
-   The AI tools like [aichat](https://github.com/sigoden/aichat), are relatively new. Being able to use these tools to change how people interact with data is also new. This style of UI development is in alpha.

## Is chuck-stack an ERP?

No, not yet. Here are our thoughts about becoming an ERP:

-   The biggest hurdle to becoming a viable ERP is data entry.
-   It is common for an order header to have 90+ columns.
-   Historically, ERP systems burden users with a sea of fields (representing the 90+ columns).
-   We do NOT believe this is the best approach because a user will only need to modify three or so fields in a newly drafted order. The remaining fields should just default from either the Business Partner settings or recent orders. Said another way, changing many defaults is the exception, not the rule.
-   Improving the user experience for the above order scenario is currently our biggest challenge.
-   Another challenge will be to provide a viable accounting system. In the short term, we will use [iDempiere](https://www.idempiere.org/). In the long term, we will use AI and available references to create an accounting system that best supports our stack. Accounting is one of our strongest areas of our ERP practice.

## What is capability sandboxing?

Capability Sandboxing is the act of defining roles so well that you can consider them a contract and enabling the system to ensure role created automation stays within the confines of the contract.

## What are the most important pieces of the chuck-stack?

The two most important pieces of the chuck-stack application are workflow and attributes.

-   Workflow is critical to data management. However, workflow is notoriously difficult. The concepts can be difficult to learn. The applications are often difficult to install and maintain, and they are either too complicated or overly simple. It is incredibly difficult to create a workflow architecture that is both generic enough and easy enough for broad adoption. AI will change the workflow landscape. What was previously tedious, is becoming a conversation.
-   Attributes and attribute sets are critical to data management. Being able to tag anything with an attribute, or a set of attributes is one of the most common actions in data management.
