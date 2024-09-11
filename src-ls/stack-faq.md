# Stack FAQ

The purpose of this page is to answer frequently asked questions (FAQ) about the chuck-stack.

## Is chuck-stack really the name of the project?

Yes and no... Naming a project is hard. chuck-stack is a good starting name given that Chuck Boecking has spent the last 25 years immersed in small-to-medium business ERP, data management, and IT. This project started as result of what we believe to be safe, usable, reliable and performant. If the community believes there is a better name to represent this project, then we will change the name accordingly. That will be a good day!

## How do we choose stack components?

See [stack-tools](./stack-tools.md).

## What are the chuck-stack tools?

See [stack-tools](./stack-tools.md).

## What are the project guiding principles?

Here are the chuck-stack design and implementation first principles in order. If you cannot accomplish these principles, little else matters.

1.  Protect an organization's revenue stream and people! This needs to be the CEO mantra with any system change.
2.  Deliver enjoyable systems that a) put the right data in the hands of the right users, b) make the user's job as easy as possible, and c) help users prevent mistakes!
3.  Deploy infrastructure that is safe, reliable and performant - in that order! If a system is not safe, reliability does not matter. If it is not reliable, performance does not matter.
4.  Write as little code as is possible. Every line of code is a liability that will cost you in the future. It must be documented, tested, reviewed and maintained. If you can use an existing tool that meets the [chuck-stack guidelines](https://www.chuck-stack.org/stack-faq.html#how-choose) in place of writing code, do it!
5.  Support self service by giving users the tools to automate tasks within their roles without direct intervention from IT!

## What is the stack-academy?

See the [stack-academy](./stack-academy.md) page.

## What is a Superclerk?

A superclerk is someone performing a role that demonstrates above average capabilities and propels the whole team to next level performance. The best way to describe a superclerk is by example. Imagine a team of AP and AR clerks. The team spends the majority of the day transcribing data. A superclerk emerges thinking there must be a better way. The superclerk does the following:

- Ties AI to their email to classify which emails contain new invoices.
- Automates sending the invoice to Google's AI document service for data extraction.
- Automates mapping the extracted details into a format for invoice upload in the ERP.

It is important to note that most IT departments could do the same; however, it is also important to note that most IT departments are severely understaffed and behind on existing projects. Identifying superclerks and giving them the tools to automate their roles changes the game and can create an order of magnitude of improvement in both velocity and efficiency.

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
