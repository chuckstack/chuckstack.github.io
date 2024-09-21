# chuck-stack Tools

The purpose of this page is to help you understand what tools we choose to include in the chuck-stack and why we chose them. The chuck-stack has been cultivated over the last 25 years. Much effort, testing and production use has gone into this list of tools and its selection criteria.

## Selection Criteria Summary

When choosing our stack tools, we:

- Focus on commonly used and well understood tools to make AI augmentation easier. The better AI understands a tool, the more AI can do the work for you.
- Choose tools that build on one another: Incus => Linux => PostgreSQL => PostgREST => Nushell => AIChat => Zellij...
- Select tools that allow unlimited usage and scale massively.

## Selection Criteria Details

Here are the more detailed guidelines for inclusion:

- **Commonly used** - and well understood to make AI augmentation easier.
- **Open source** - or at least as open as possible.
- **Start simple** - easy to understand and reason about. Nix pushes this concept a little (or a lot); however, the power and simplicity it creates is worth the extra effort.
- **Basic functionality** - supports basics like CRUD (create, read, update and delete) with minimal effort.
- **Kind educator** - needs someone in the community who makes the technology kind to the target audience.
- **Kind integrator** - needs someone local to you digitally to help you leverage the tool.
- **Synergy** - supports other tools in the stack. Example: runs on or integrates with PostgreSQL.
- **Simple architecture** - not overly complicated relative to the tool's purpose.
- **Enterprise scalability** - it needs to scale to support an organization of at least 1,000+ across multiple continents.
- **Enterprise testing and deployment** - it needs to support team development where improvements can be development, tested and accepted in dedicated environments and easily migrated to production using CI/CD concepts or scripts.
- **Deployment safety and simplicity** - needs to create safe applications that deploy with minimal dependencies.
- **Safe, reliable and performant** - if a system is not safe, reliability does not matter. If it is not reliable, performance does not matter.
- **Command Line Interface (CLI) centric** - we love cli interfaces because they are accessible from anywhere.
- **REST centric** - we love scriptable interfaces that can be called from anywhere (not just the cli).
- **Globally deployed** - supports any organization in an corner of the world on almost any hosting platform.

## Preference for Rust Language

You might observe that we have a preference for applications written in the Rust language. This preference is intentional for the following reasons:

- Rust promotes writing safe applications by eliminating the majority of problems that have plagued developers for the last 30 years.
- Rust applications typically compile down to a single binary.
- The Rust tool chain is simple to understand and execute for both application development and deployment.
- Rust applications tend to perform better and faster than their counterparts.
- Rust supports full stack development thus minimizing the number of experts needed to solve a problem.
- The Rust community practices and values align with the chuck-stack community. See our [code of conduct](./code-of-conduct.md) as an example.

## Critical Path Tools

The following tools are in the chuck-stack critical path to success. They solve a core need in the chuck-stack, and they create [synergy](./terminology.md#synergy) with each other.

- [Incus (virtualization)](./tool-incus.md): container and virtual machine (VM) tool to develop, test and deploy IT applications.
- [Linux (compute)](./tool-linux.md): best tool to run applications on just about any platform in the world.
- [PostgreSQL (data)](./tool-postgresql.md): best tool for managing "data" database with best performance and enterprise features.
- [PostgREST (API)](./tool-postgrest.md): PostgreSQL tool for exposing an OpenAPI compliant REST interface directly out of your database.
- [aichat (AI)](./tool-aichat.md): command line AI chat and execution tool that include saves sessions, rag, function-calling and more.
- [Nushell (system and data)](./tool-nushell.md): Terminal shell with designed to understand and manipulate structured data.
- [Zellij (UI)](./tool-zellij.md): terminal workspace environment for managing information and transactions.
- [Git (code, information, collaboration)](./tool-git.md): best tool for managing information, instructions and discussions. It provides most options for AI amplification.
- [Obsidian (knowledge)](./tool-obsidian.md): best tool to authoring text.

## Other Tools

[Other tools](./tool-others.md) play a supporting role in the chuck-stack and an organization's success.

## Most Important Tools

Below are the most important stack tools.

### Linux and PostgreSQL

[Linux](https://www.linux.org/) and [PostgreSQL](https://www.postgresql.org/) are at the heart of the stack. Both are phenomenally well understand and established open source projects that form much of our world's digital backbone. Here is why they are important to the stack:

- Scale massively
- Provide great documented and community support
- Offer a rich ecosystem of plugins and enhancements
- Manage users, roles, authentication and authorization as well as any platform
- Deploy almost anywhere
- Maintain just about any type of data

### PostgREST

[PostgREST](https://postgrest.org/) is a secret weapon that allows us to build a fully-qualified and secure REST API directly on top of a PostgreSQL database schema and users/roles. If you can build a good database with functions, you can build a good REST API.

### Git (Github, Gitlab, Gitea)

Git is a source code control system. The ecosystem that developed around git revolutionized how code/instructions are created and delivered. Features from providers like [Github](https://github.com), [Gitlab](https://gitlab.com/) and [Gitea](https://gitea.com/) help teams manage the life cycle around data and automation.

The world's smartest people performing some of the most difficult work across the greatest distances use tools like github to manage their instructions. If it works for them, it should easily support your team! These products typically offer the following features:

- It offers both issue tracking and discussions.
- It provides both project management and kanban board organization.
- It supports automation based on changes to content or instructions.
- It is priced significantly less than other enterprise productivity tools.
- It makes more AI tools available to your team to understand and improve your processes.
- Once your team understands how to collectively contribute to the instructions that runs your organization, operations will never look the same again!

### AIChat

[AIChat](https://github.com/sigoden/aichat) is a command line AI tool that helps you create and simplify organizational operations. Here is how it can help you:

- With one command, it can take your entire organization's work instructions and make it so that anyone can ask questions and improve your processes.
- Create training material and quizzes about your operations to ensure compliance.
- Help your IT department create more self-service tools with PostgreSQL and PostgREST.
- Automate complex operations using simple human language.
- Digest images, extract structured data from images, create images based on work instructions.
- Connect to almost any AI LLM model (like chatGPT, Claude and Gemini).

### Nushell

[Nushell](https://www.nushell.sh) is both a scripting language and a command line shell to transform data and automate processes. Here is how it can help you:

- Create full-featured cli applications with just a few lines of code.
- Call on external API (including PostgREST) to integration external system and data.
- Call your cli applications from AIChat with minimal configuration.
- Compose more complex workflows using data [pipelines](./terminology.md#data-pipeline).
- Expose your cli applications to power users to support self-help automation with the assistance of AIChat.

### Zellij

[Zellij](https://zellij.dev/) is a terminal workspace manager. Here is how it can help you:

- Easily manage multiple windows and tabs in a single ssh session.
- Create complex layouts that can be immediately launched to show the desired data based on role.
- Create plugins to automate repetitive tasks.
- Persist sessions between connections.
- Gives you the features you expect to find in window toolkit environment without writing any code.

## Complete List of Tools

Here are the tools we use almost every day:

- [Linux (compute)](https://en.wikipedia.org/wiki/Linux): best tool to run applications on just about any platform in the world.
- [PostgreSQL (data)](https://www.postgresql.org/): best tool for managing "data" database with best performance and enterprise features.
- [PostgREST (API)](https://postgrest.org/): PostgreSQL tool for exposing an OpenAPI compliant REST interface directly out of your database.
- [GitHub (code, information, collaboration)](https://github.com/): best tool for managing information, instructions and discussions. It provides most options for AI amplification.
- [aichat (AI)](https://github.com/sigoden/aichat): command line AI chat and execution tool that include saves sessions, rag, function-calling and more.
- [Nushell (system and data)](https://www.nushell.sh/): Terminal shell with designed to understand and manipulate structured data.
- [Zellij (UI)](https://www.zellij.dev/): terminal workspace environment for managing information and transactions.
- [dbt (ETL)](https://www.getdbt.com/): tool to transform transactional data into a form than can be consumed by BI or AI or ...
- [Metabase (BI)](https://www.metabase.com/): BI tool for visualizing and publishing data. Used if GitHub discussions is not good enough.
- [Pass (secrets)](https://passwordstore.org/): is a command line tool that helps you manage secrets/passwords with gpg. It is simple, scriptable, auditable, distributed and secure. [gpg](https://gnupg.org/) is an encryption program that provides cryptographic privacy and authentication for data communication. The Pass repository is available on almost all platforms. It integrates well with github.
- [Zabbix (monitoring)](https://www.zabbix.com/): monitor resources and respond to events.
- [Incus (virtualization)](https://linuxcontainers.org/incus/docs/main/): container and virtual machine (VM) tool to develop, test and deploy IT applications.
- [iDempiere (ERP)](https://www.idempiere.org/): ERP for managing orders, inventory, invoices, payments, accounting and much of the data you need to execute operations in your organization.
- [Mattermost](https://mattermost.com/): Open soruce collaboration tool (similar to slack and github discussions). It can be backed by PostgreSQL and run locally; therefore, it fits quite well in the chuck-stack.
- [rsync.net](https://rsync.net): is an off-site storage service. This is a unique item on the list in that it is not open source. It is, however, pretty fantastic! It uses rsync as the client, which is already installed on almost all Linux servers. It costs the same as AWS S3. And, it gives you immutable backups without any additional configuration. Said another say, it is easy, reasonably priced and works as intended out of the box.

He are the tools we want to use more:

- [PostgresML (AI)](https://postgresml.org/): PostgreSQL tool for AI training and inferencing directly out of your database.
- [Ollama (AI)](https://ollama.com/): AI tool for running generative AI (LLM) models locally.
- [CrowdSec (security)](https://www.crowdsec.net/): Proactively block known malicious IPs and activities.
- [NixOS (Linux OS)](https://nixos.org/): specific distribution of Linux delivering the most control and compute options. Nix represents the easiest way to describe, deploy and maintain desktops and servers.

