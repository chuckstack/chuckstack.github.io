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
- **Start simple** - easy to understand and reason about. [Nix](./tool-linux.md#nix) pushes this concept a little (or a lot); however, the power and simplicity it creates is worth the extra effort.
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

- [Incus (virtualization)](./tool-incus.md) - container and virtual machine (VM) tool to develop, test and deploy IT applications.
- [Linux (compute)](./tool-linux.md) - best tool to run applications on just about any platform in the world.
- [PostgreSQL (data)](./tool-postgresql.md) - best tool for managing "data" database with best performance and enterprise features.
- [PostgREST (API)](./tool-postgrest.md) - PostgreSQL tool for exposing an OpenAPI compliant REST interface directly out of your database.
- [aichat (AI)](./tool-aichat.md) - command line AI chat and execution tool that include saves sessions, rag, function-calling and more.
- [Nushell (system and data)](./tool-nushell.md) - Terminal shell with designed to understand and manipulate structured data.
- [Zellij (UI)](./tool-zellij.md) - terminal workspace environment for managing information and transactions.
- [Git (code, information, collaboration)](./tool-git.md) - best tool for managing information, instructions and discussions. It provides most options for AI amplification.
- [Obsidian (knowledge)](./tool-obsidian.md) - best tool to authoring text.

## Other Tools

[Other tools](./tool-others.md) play a supporting role in the chuck-stack and an organization's success.
