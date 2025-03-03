# chuck-stack IT Job Description and Assessment

- Published: 2025-03-03
- Updated: 2025-03-03
- Author: Chuck Boecking
- Discussion: <>
- Status: Drafted

## Building Self-Help Automation IT Systems

The purpose of this post is to help you hire the right IT (Information Technology) talent to support your small or medium organization. We will cover the desired attributes to help your organization create efficient, simple, self-help, automated systems.

We will break the hiring process down into these attributes:

- Skills
- Knowledge
- Attitude

We will also discuss how to organize your hiring process to make finding these experts as easy and efficient as possible.

We are publishing this guide because we believe the IT role will be one of the most valuable roles in your company over the next 5 to 10 years. This role will help elevate your existing users into [superclerk](./terminology.md#superclerk) status. 

We need to make it easier for users to automate their tasks - this is the way!

## TOC

<!-- toc -->

## Summary

We want to hire people who understand the following areas well:

- Linux scripting and administration
- PostgreSQL development and administration

Just about everything in the chuck-stack revolves around these two sets of skills and knowledge.

What about AI? AI is a new, large and complex topic. If someone has a strong command of the below artifacts, we can teach them the appropriate AI skills and knowledge.

## If You Want Help

If you would like help evaluating talent, join the [stack-academy](./stack-academy.md). We will help you create the interview process and evaluate your talent.

It is important to note that the chuck-stack makes many if not all the below skills and knowledge immediately available to your organization. It gives you an instant support resource and community. Your goal is to find someone who can contribute immediately and grow with your organization.

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## Skills Knowledge and Attitude

We want to know what a candidate is capable of and see examples of when they demonstrated these capabilities (both successfully and unsuccessfully).

The best way to quantify someone's ability to help your organization is through the assessment of their skills, knowledge and attitude. Let's break each of these topics down for the IT position.

References: 
- [Success with HR](./success-hr.md)
- [Stack Tools](./stack-tools.md)

### Skills

`Skill` represents the ability to perform a task with near perfection repeatedly. When you ask a `skill` question, you are asking someone to either do something or explain what they did. You want to visualize the candidate performing the skill (either in-person or via a vivid description of the past).

Here are the skills we seek:

- **Documentation** - we are including this first because it just might be the single most important skill someone possesses. Our goal is to augment and automate. The chuck-stack is built around automating work instructions. The same concept applies for IT.
  - This skill can be validated by looking at public examples of documentation on sites like github.
  - Reference: [Operations Best Practices](./best-practices-operation.md)
- **CLI** - the command line interface (CLI) is at the heart of the chuck-stack. You are looking for someone who is extremely comfortable using the CLI.
  - This skill can be calidated by looking for examples of CLIs the candidate uses in their personal management.
  - Reference: [The CLI is Better](./blog-cli-better.md)
- **Bash scripting** - we need someone who can demonstrate basic CLI automation using the bash scripting environment.
  - The chuck-stack uses [Nushell](./tool-nushell.md) more than bash; however, bash is more prevalent and the skills are transferable.
  - This skill can be validated by a simple experiment/task
- **SQL** - we use PostgreSQL for almost all types of persistence. We need someone who can:
  - Get data in and out of PostgreSQL effortlessly
  - Persist multiple types of data (normalized, documents, vectors, custom types)
  - Create roles to restrict and transform data.
- **Structured data** - we need someone who thinks about the world in terms of data. We need the shape of data to resemble the real world. We need someone who can navigate between structures like json, toml, yaml, xml, csv, etc...
- **git** - we [live in a markdown world](./blog-live-markdown-world.md). Documentation, scripts, and just about everything else that does not go into a database will go in git.

### Knowledge

`Knowledge` represents the ability to gain, retain, recall, connect and apply information to a topic. When you ask a `knowledge` question, you are asking someone to describe something and how it relates to the world around it.

- **Linux** - we need someone who understand the layout and administration of Linux.
  - This includes a basic understanding of Linux networking.
- **Encryption** - we need to keep our data safe. We need to understand how to accomplish these goals.
- **Authentication** - we need someone who understands the basic concepts of authentication (ssh, async-key, tokens).
- **API** - we need a basic understanding of using APIs so that we can use [PostgREST](./tool-postgrest.md).
- **HTML and CSS** - we need a basic understanding of these technologies so that we can use [htmx](./tool-htmx.md).
- **Virtualizaton** - we need a basic understanding of containers and virtual machines so that we can use [Incus](./tool-incus.md).

Notes for future reference (vocabulary): security, nginx, git, ...

### Attitude

- **Service** - we believe that IT will play one of the biggest roles in the next 10 years. Having said that, it will be in the service of those who are ultimately responsible for a role or task. A service attitude is critical!
- **Teaching** - the world is changing rapidly, and IT will help lead this change. We want kind and patient teachers to help elevate users to [superclerk](./terminology.md#superclerk) status.
- **Continuous Improvement** - we appreciate those who appreciate feedback and those who look for ways to methodically improve.

A note about attitude... The last 25+ years of hiring and managing professionals has taught us that attitudes are pretty much set in stone. Someone's attitude is influenced by their belief system (resulting from a lifetime of accumulated experiences). If you find yourself questioning if someone's attitude aligns with your organization, do not ignore these concerns. The amount of effort required to change someone's attitude is seldom worth the cost.

## Recruiting Process

Now that we know what we want, let's discuss how we identify talent.

### Markdown Resume and CV

We have spent years pouring over resumes and a lifetime in interview rooms. The rules of what makes a good resume are changing. Fancy PDF layouts no longer hold value (in our opinion).

Here is what we want in a resume:

- We want all resumes in markdown format. This means they are submitted as a text file with a .md suffix.
- We want the typical contact details:
  - name
  - address
  - email(s)
  - phone(s)
  - github username - or any other public repository that can speak to an immutable public activity log
- We suggest candidates customize their resume/CV submissions based on the above details.
- Resumes/CVs can be as long as the user deems appropriate.

Here is how we will process the resumes:

- We will process resumes through a collection of ai prompts.
- The chuck-stack will help you create these prompts.
- History has proven that candidates will help you improve these prompts as well.

### Immutable Public Log

The reason we ask for a Github username is so that we can validate the candidate engages in the above types of IT related activities. We are looking for examples of the above skills and knowledge.

### Resume AI Process Example 

Here is how easy it is to process a resume through an AI prompt...

## Behavior Interviews

Good and bad behaviors.

3%

Once - fluke
Twice - probably
Thrice - you can count on it

## Potential

This comes after you hire someone.

Reference: [Success with HR](./success-hr.md)

## Frequently Asked Questions

### question 1

...

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/simplified-server-data-backup-with-rsync-net/79>.

## TODO

No open todo
