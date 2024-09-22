# chuck-stack Best Practices

Best practices make the chuck-stack vision possible. This page is broken down into two types of best practices:

1. [Organization](./best-practices.md#organization-best-practices)
2. [Technology](./best-practices.md#technology-best-practices)

It is worth noting the chuck-stack.org site was created as an AI-first website, and it is intended be a pinnacle example of how to write for both humans and AI augmentation. Said another way, it should offer a great example of organization and technology best practices.

## Organization Best Practices

The single best thing you can do to accelerate AI adoption is to implement basic quality practices. If you do not have a quality program/book already, the following should be your first version:

>We are committed to exceeding business partner expectations by executing the following:
>
>- [Say what we do](./best-practices.md#say-what-we-do).
>- Do what we said we would do.
>- Prove that we did it.
>- Focus on continuous improvement.
>- Welcome feedback!

If you said nothing else to summarize your quality program, this would be enough!

### Quality Program Principles

Before we discuss 'Say what we do', let's first introduce some important principles to help you create something you are proud of and to save your [heart beats](./stack-faq.md#saving-heartbeats).

- **Be kind and concise** - Write the absolute minimum number of words possible in your work instructions. Someone will need to maintain every word you write from now to eternity.
- **Do not repeat yourself** - Say something once, and reference it everywhere else.
- **AI knows almost everything** - Do not repeat what AI already knows in your work instructions. Your purpose in writing work instructions is to shrink AI's world so that it knows what is important to you and how you want it discussed. This simple principle will reduce your work instructions by more than half if not more!
- **AI creates training** - Rely on AI to build your training aids and quizzes. If you write clear work instructions. AI can handle the rest for you.
- **Words are best** - Words are your best tool to support your organization and AI.
- **Pictures rot** - they rot faster than words and are harder to maintain. If you can say it, then say it!
- **Videos rot** - they rot faster than pictures and are harder to maintain. If you can picture it, then picture it!
- **State your purpose** - when you do not know what to write, state your purpose. The purpose of this page is to... The rest will flow.
- **No folders** - all documents/files that you create as part of your work instruction should exist in a single folder/directory. Nested directory structures are an overly simple organization technique. Sub folders/directories should be avoided because of the future pain they will cause you. It is absolutely OK to have 10,000+ documents in a single directory.

### Say what we Do

Work instructions are documents that state who does what and how. There are three work instruction types we need to document - that's it!

- `Roles` - responsibilities of a person or system in an organization
- `Tasks` - actions to be performed by one or more roles
- `Tools` - software or mechanical devices used to perform one or more tasks

`Tasks` are easiest work instruction type to start with. It describes how a person or system performs an action. The easiest way to describe tasks is with bullets. Just start writing.

Many of the tasks require the use of tools. You will be tempted to include tool instructions in your tasks. Don't do it!  If you have a task that depends on a tool, reference it so that someone can find the dedicated tool instructions.

Here is a best practices example of a task work instruction referring to a tool:
> Find open orders using the ERP => Sales Order window => "Today's Open Order" search option. <u>Learn more...</u>

In this example, we do not show a picture or screenshot. We do not discuss how to find the ERP. We do not discuss how to navigate. We simply describe the exact destination, and we link to the tool work instructions for further reference.

`Tools` are the next easiest work instructions to document. They simply describe how to navigate, execute, print, etc... The biggest challenge with tools instructions is finding the minimum documentation needed to create success. Error on the side of writing less and test your work instructions. You can always write more later.

Be consistent with how you refer to tool objects. Here are some example guidelines:

- Capitalize the name of a window or menu but lowercase the word 'window'. Example: Sales Order window
- Use quotes to identify a specific item if there is a potential for confusion. Example: Payment Term window => "Net 10" record
- Use breadcrumbs to represent multiple steps. Example: ERP => Sales Order window => Line subtab => Process toolbar => Copy Lines process

`Roles` are some of the most important work instructions to create. Roles describe the contract a person or system has with the organization. It describes what they should or should not do. 

In the [Picture of Success](./picture-success.md), we describe how the role work instructions ensure a [superclerk](./terminology.md#superclerk) does not create anything that violates the role contract. Said another way, properly defined roles give superclerks the freedom to innovate while remaining in the guardrails of their role.

### Where to Write

Before we continue with 'Do what we said we would do', Let's discuss best practices in creating and saving and using your work.

You will be tempted to use Microsoft Word or Google Docs to capture your words. Don't do it! If you do, your words will trapped in that format/container. You will be limited as to how you can use your words with AI or any other tool.

Instead, we strongly recommend you use a tool named [Obsidian](./tools-obsidian.md) as your writing environment. It offers the same joyful writing tools; however, it saves your words in a plain text format called [markdown](https://en.wikipedia.org/wiki/Markdown). Markdown is quite possibly the most simple yet powerful tool you have in working with people and AI.

## Technology Best Practices
