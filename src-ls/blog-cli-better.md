# The CLI is Better

- Published: 2024-10-02
- Updated: 2024-10-02
- Author: Chuck Boecking

Better than what? Better than a web page? Better than the Python programming language?

The CLI creates more value for managing data and processes in small and medium sized organizations than just about any alternative. How is that possible? The purpose of this post is to explain what it is better than and why.

## TOC

<!-- toc -->

## The CLI Offers Greater Value

For small and medium organizations, a user can create more value for a given unit of time and effort from the CLI than with any other technology medium. At least that is what we believe based on our 25 years in ERP.

- It is better than building web frameworks (Angular, React, Rails, Django, Express, ... )
- It is better than coding logic (Python, Go, Rust, Java, ...)
- It is better than doing nothing (copy, pasting and sharing your life away in a web browser)

## Proof by Example

Small and medium organizations live in a process-oriented world. There are constant demands to get things done. Research this.... Process that.... The more you can automate, the more productive your organization. If you can get everyone automating within their roles, the speed at which you operate changes in a drastic way.

Examples help highlight concepts. Let's use the following simple example:

> Find the most popular LLM and supply references.

The following CLI [pipeline](./terminology.md#data-pipeline) will search the web and perform an analysis on the results. Said another way, this one line will solve the problem.

```bash
ddgr --json -x -n 25 "what is the most popular llm" | aichat -- which llm is most discussed
```

Let's break this one line down:

- ddgr is a cli tool to search duckduckgo and print the result to the CLI.
- The "--json -c -n 25" told ddgr to return 25 results in json and include the url.
- We know this because it is succinctly described in the help (ddgr -h).
- The "|" pipe symbol tells ddgr to pass its results to [AIChat](./tool-aichat.md).
- AIChat can format the results in any manner requested. By default, it will show what it believes is the most human readable format.
- By adding another "|", you can send AIChat's result to the next command (example: save to a database).

It is worth noting that I found ddgr by using AIChat. I installed ddgr temporary using the following one line [Nix](./tool-linux.md#nix) shell command:

```bash
nix-shell -p ddgr
```

## Proof by Python

We like picking on Python because is often deemed to be one of the most popular, idiomatic and friendly languages with good reasons. To perform the example's equivalent in Python, you would need to write in excess of 100 lines of code (possibly 1000's of lines if you wanted to support all the features above).

At this point, someone will come back and say "there is a Python package for that." And, they would probably be right. The right package can reduce the amount of code by more than half. However, you will often spend as much time looking and testing the packages as you do actually solving the problem. And after you succeed, you are left with a single-purpose application that might or might not ever be useful again.

It is not difficult to reason about which solution is "better".

- ddgr is easily found and installed
- ddgr is well documented
- ddgr is a general purpose tool that can be used in a variety of situations.
- [AIChat](./tool-aichat.md) is amazing, well documented and general purpose as well.

We basically took two general purpose tools, combined them together with a single character "|" and created a unique solution.

## Everyone Needs This

Our vision of success is enabling every user in small and medium organizations to gain and use high-value, low-effort tools like ddgr and AIChat to help themselves and solve problems in their everyday roles.

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.
