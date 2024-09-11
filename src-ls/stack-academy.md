# stack-academy?

The stack-academy is an online support infrastructure for the chuck-stack tools and application framework. We believe in a cooperative approach to learning, support and innovation. We establish the principles and collectively create an open source platform that values simplicity, stability and self-service.

Here are the details:

- What is the purpose of the stack-academy? We want to accelerate your learning curve and provide an interactive environment to overcome challenges.
- Do you need to join to use the chuck-stack? No.
- Do you need to join to get prioirty support? Yes.
- Is there a way to get phone support? Yes, we hold multiple online meetings per week where anyone can bring any topic.
- What is the minimum purchase? The stack-academy is a monthly subscription. The minimum purchase is one month. You may join and cancel as many times as is needed to accomplish your goals.
- Are there special pricing considerations for individuals (students or aspiring integrators)? Yes. Complete this form for consideration.
- How do I join? [click here](https://buy.stripe.com/7sIbLIeeU3oT4IEfYY)

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
