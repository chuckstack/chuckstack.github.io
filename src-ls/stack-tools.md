# chuck-stack Tools

The purpose of this page is to help you understand what tools we choose to include in the chuck-stack and why we chose them. The chuck-stack has been cultivated over the last 25 years. Much effort, testing and production use has gone into this list of tools and its selection criteria.

## TOC

<!-- toc -->

## Selection Criteria Summary

When choosing our stack tools, we:

- Focus on commonly used and well understood tools to make AI augmentation easier. The better AI understands a tool, the more AI can do the work for you.
- Choose tools that build on one another: Incus => Linux => PostgreSQL => PostgREST => Nushell => AIChat => Zellij...
- Select tools that allow unlimited usage and scale massively.

## Selection Criteria Details

Here are the more detailed guidelines for inclusion:

- **Commonly used** - and well understood to make AI augmentation easier.
- **Open source** - or at least as open as possible.
- **Start simple** - easy to understand and reason about. Either the tools is just easy to understand, or the chuck-stack can make it easy by example and/or explanation. [Nix](./tool-linux.md#nix) pushes this concept a little (or a lot); however, the power and simplicity it creates is worth the extra effort.
- **Basic functionality** - supports basics like CRUD (create, read, update and delete) with minimal effort.
- **Kind educator** - needs someone in the community who makes the technology kind to the target audience.
- **Kind integrator** - needs someone local to you digitally to help you leverage the tool.
- **Hosting option** - solution offers a reasonable hosting option to help you get started (examples: [netbird](./tool-netbird.md), [discourse](./tool-discourse.md)).
- **Synergy** - supports other tools in the stack. Example: runs on or integrates with PostgreSQL.
- **Simple architecture** - not overly complicated relative to the tool's purpose.
- **Enterprise scalability** - it needs to scale to support an organization of at least 1,000+ across multiple continents.
- **Enterprise testing and deployment** - it needs to support team development where improvements can be development, tested and accepted in dedicated environments and easily migrated to production using CI/CD concepts or scripts.
- **Deployment safety and simplicity** - needs to create safe applications that deploy with minimal dependencies.
- **Safe, reliable and performant** - if a system is not safe, reliability does not matter. If it is not reliable, performance does not matter.
- **Command Line Interface (CLI) centric** - we love cli interfaces because they are accessible from anywhere.
- **REST centric** - we love scriptable interfaces that can be called from anywhere (not just the cli).
- **Globally deployed** - supports any organization in an corner of the world on almost any hosting platform.

## Language Preference

You might observe that we have a preference for applications written in the modern languages like Rust and Zig that a) compile directly to native binaries, b) run in a deterministic manner (example: no garbage collection), and c) create a tool chain that is both easy to use, script and reason about. 

This preference is intentional for the following reasons:

- Rust and Zig promote writing more safe applications by eliminating many of mistakes that have plagued developers for the last 30 years.
- These applications typically compile down to a single binary.
- These tool chains are simple to understand and execute for both application development and deployment.
- These applications tend to perform better and faster than their counterparts.
- These tool chains support full stack development thus minimizing the number of experts needed to solve a problem.
- These community's practices and values align with the chuck-stack community. See our [code of conduct](./code-of-conduct.md) as an example.

## Critical Path Tools

The sub-pages that follow identify critical path tools that create [synergy](./terminology.md#synergy) with each other. These tools include [Incus (virtualization)](./tool-incus.md), [Linux (compute)](./tool-linux.md), [PostgreSQL (data)](./tool-postgresql.md), [PostgREST (API)](./tool-postgrest.md), [aichat (AI)](./tool-aichat.md), [Nushell (system and data)](./tool-nushell.md), and more...

## Other Tools

[Other tools](./tool-others.md) play a supporting role in the chuck-stack and an organization's success.
