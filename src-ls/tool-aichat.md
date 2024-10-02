# AIChat

[AIChat](https://github.com/sigoden/aichat) is an all-in-one AI CLI tool that helps you interact with the world's most popular and powerful LLMs. It combines a chat-REPL, shell assistant, RAG, agents, and an API in a single AI tool.

Discussion points:
- Why we love AIChat
- Why AI + CLI matters so much
- AIChat solution examples

## Why We Love AIChat

- It is well documented.
- It is open source.
- It is easy to learn and use in a matter of moments.
- It is easily accessible from anywhere in the world.
- It is an active project adapting to a rapidly evolving technical space.
- It makes the knowledge we need to do our jobs available where and how we need it most.
- it is an emerging tool the shows signs of a vibrant and well supported community.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- It is CLI first to help support automation through AI.
- It make solutions created from the CLI available via the web and an API.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It does its job (AI) quite well.
- And, most importantly it has great synergy with the rest of the chuck-stack.

## Why AI + CLI Matters

The vast majority of AI tools created in the last year are deployed via a webpage. We understand why people make this choice; however, we believe it is the wrong choice for small and medium organizations. Applications in webpages effectively trap knowledge and data. They create silos, and the amount of tooling needed to connect data between webpages is enormous. There is a much better way!

The CLI represents the single greatest superpower to help users create automation and data [pipelines](./terminology.md#data-pipeline).

## AIChat - More than a CLI

AIChat provides three features that are critical to our success:

- AI through the CLI - which is the most obvious feature
- AI through a Webui playground - which gives you an html view into the same tools created via the CLI
- AI through an API - which gives you the ability to use your previously created AI automation from other tools as well

### A Common Workflow Challenge

When supporting small and medium organizations, we are often challenged with a question that begins with: "Can you do ...". The answer is often: "I do not know; let me try...". Here is a common scenario when exploring such a solution:

1. Prove that AI is capable of some task. This is often most easily performed using AIChat through the CLI (either in the REPL or as commands). Once you believe you have a path to success, you want others to quickly try it out.
2. You send a link to AIChat's webui playground that is pre-loaded with the role (settings) and RAG (knowledge) that demonstrates the to-be solution so that all can easily see.
3. You update other tools to call AIChat's API to extend your solution into more workflows.

### Contract Example

Here is a more concrete example to the above challenge. Let's say your organization works with legal contracts that have both dates and tasks associated with their execution. Let's assume you currently spend 25 man hours per month reviewing contracts and transcribing them to tasks on a calendar with a 94% historical accuracy. Can you do better? Here is an approach to exploring a solution:

Before we go into the solution details, I want to point out a theme in the below bullets. You create something once in a low cost and iterative manner, and you use it in multiple ways. One tool creates many options. This is how clerks become [superclerks](./terminology.md#superclerk).

- Find an example contract. This will most likely be a PDF.
- Use the pdftotext CLI tool to extract the contents of the contract from the PDF to TXT:
  - pdftotext -layout somecontract.pdf > somecontract.txt
- Pass the contract into AIChat along with some basic work instructions
  - aichat -f somecontract.txt -- find all tasks with their associated deadlines.
- Iterate on your work instructions until you get something that looks like a collection of tasks + deadlines from AIChat.
- Create a new AIChat role named "contract task extractor" and save your refined work instructions in that role so that others can use your newly created skills and knowledge.
  - aichat
  - \> .edit role "contract task extractor"
- Deploy the AIChat webui playground and share your newly created AI role with other people.
- Make your role available to other applications using AIChat's API so that all your tools can extract tasks and dates from contacts as well.

### Contract How To

How does someone learn to perform the above steps? More specifically, how did I...

- know that pdftotext would extract out text from a PDF? I asked AIChat.
- find the best prompt to extract out dates and tasks? I asked AIChat.
- figure out how to create a new role in AIChat? I asked AIChat.

You are probably starting to see a pattern....
