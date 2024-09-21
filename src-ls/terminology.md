# Terminology

The purpose of this page is to define terminology used in the chuck-stack.org.

## Data Pipeline

Linux shell pipelines allow users to chain multiple commands together, where the output of one command becomes the input for the next. This is achieved using the pipe symbol (|) between commands. Pipelines enable complex data processing and manipulation tasks to be performed efficiently by combining simple, specialized tools. 

This approach embodies the Unix philosophy of creating small, focused programs that work together seamlessly, allowing users to build sophisticated operations from basic building blocks.

## Entity

An entity is often a legal or taxation group. A single [tenant](./terminology.md#tenant) can have many entities. An entity can belong to only one tenant.

## SuperClerk

A superclerk is someone performing a role who desires to better automate and perfect their role thus propeling the whole team to a new level performance. A superclerk seeks out the tools and the opportunity to do more. A superclerk can be anyone with a job to do. They can be an AP/AR Clerk, Sales Representative, Machinist, Controller, Manager, etc...

The best way to describe a superclerk is by example. Imagine a team of AP and AR clerks. The team spends the majority of the day transcribing data. A superclerk emerges thinking there must be a better way. The superclerk does the following:

- Ties AI to their email to classify which emails contain new invoices.
- Automates sending the invoice to Google's AI document service for data extraction.
- Automates mapping the extracted details into a format for invoice upload in the ERP.

It is important to note that most IT departments could do the same; however, it is also important to note that most IT departments are severely understaffed and behind on existing projects. Identifying superclerks and giving them the tools to automate their roles changes the game and can create an order of magnitude of improvement in both velocity and efficiency.

## Synergy

Synergy in the chuck-stack is what happens when you add two or more parts to make a whole where the value of the whole is greater than the sum of the individual parts. Just about anyone can make 1 + 1 = 2. It takes synergy (like with work instruction + automation) to make 1 + 1 = 11. That is a picture synergy!

## Tenant

A tenant is a group of one or more [entities](./terminology.md#entity). There are times when a single organization manages completely disparate entities. When these entities do not share any aspect of their businesses, the organization will create the different entities in separate tenants.

The chuck-stack is multi-tenant software without being multi-tenant SaaS. A single instance of the chuck-stack can support multiple tenants; however, there is no reason for us to try and create a single, monolithic service trying to cater all organizations in the world. Monolithic SaaS service carry inherent risks that make them susceptible to data breaches and cross-contamination.

Our goal is to use well tested and commonly understood networking services to create isolated tenants of the chuck-stack.
