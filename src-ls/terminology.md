# Terminology

The purpose of this page is to define terminology used in the chuck-stack.org.

## Conversational Enterprise Computing

Conversational Enterprise Computing is where users manage enterprise data and processes through commanding and inquisitive interactions with the system using a keyboard or microphone. This conversational style is in stark contrast to ERP systems of the last 20 years where the users are inundated with tens of thousands of windows, tabs and fields.

Here are the hallmarks for conversational enterprise computing:

- System adapts to the user's style of communication.
- System uses conversive interactions to drive normal data and process archetypes.
- System shields supporting, routine data from the user and highlights high-value details.
- Users explore data as is needed to the extent their role allows.
- Users rely on self-service training and automation to maximize operational and transactional velocity and efficiency ([OTVE](./terminology.md#otve)).
- Systems uses work instructions to drive functionality and create guardrails ([see best practices](./best-practices.md)).

## Data Pipeline

Linux shell pipelines allow users to chain multiple commands together, where the output of one command becomes the input for the next. This is achieved using the pipe symbol (|) between commands. Pipelines enable complex data processing and manipulation tasks to be performed efficiently by combining simple, specialized tools. 

This approach embodies the Unix philosophy of creating small, focused programs that work together seamlessly, allowing users to build sophisticated operations from basic building blocks.

## Domain Dimension

A domain dimension is how the chuck-stack refers to a database dimensions. The following domain dimensions exist in the chuck-stack upon installation.

- Tenant*
- Entity*
- Business Partner
- Customer
  - reference to Business Partner
  - only used when Business Partner is not available
- Vendor
  - reference to Business Partner
  - only used when Business Partner is not available
- User
- Employee
  - reference to User
  - only used when User is not available
- Department
- Product
- Asset
- Center
  - also known as profit or cost center, line of business, division
- Project
- Activity
- Campaign
- Region
- Location
- Warehouse

\* means mandatory for every table in the chuck-stack

The purpose of the default domain dimensions is to provide a collection of defaults that represent what most (say 80%) organizations use to manage their operations.

See:

- Domain Parent - many of the domains will have a reference to itself in the form of a parent record. Parent record is when `is_summary` = true. Examples include: Business Partner, Project, Activity, Campaign, ... Parent records are not used in transactions. Parent records are often used in reporting.
- Domain Tree - used when more than a single depth (parent) is needed. Using a tree often requires recursion.

## Entity

An Entity is a chuck-stack domain dimension that refers to a legal or taxation group. A single [Tenant](./terminology.md#tenant) can have many Entities. An Entity can belong to only one Tenant. A special Entity named "*" (pronounced 'star') is created by default when the chuck-stack is installed. By convention, "*" means either default or shared depending on how the organization wishes to use it.

## Instance

An instance is how the chuck-stack refers to an installation or a unit of something. 

For example, an instance of PostgreSQL is a unique installation of the PostgreSQL application. An instance of PostgreSQL can contain multiple databases.

For example, an instance of chuck-stack is a unique installation and deployment of the chuck-stack tools. An instance of the chuck-stack can contain multiple Tenants.

## Organization

An organization is how the chuck-stack refers to a group that uses the chuck-stack. An organization can be a formal for-profit or not-for-profit business, and an organization can be an informal band of people united by a common interest or cause.

## OTVE

Increasing Operational and Transaction Velocity and Efficiency (OTVE) is a hallmark of the chuck-stack and conversational enterprise computing. In fact, increasing OTVE is the first bullet of the chuck-stack purpose. To learn more about how the chuck-stack increases OTVE, view the [introduction](./introduction.md).

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

A Tenant is a chuck-stack domain dimension that refers to a group of one or more [Entities](./terminology.md#entity). There are times when a single organization manages completely disparate Entities. When these entities do not share any purpose, processes or data, the organization will create the different Entities in separate Tenants.

The chuck-stack is multi-tenant software without being multi-tenant SaaS. A single instance of the chuck-stack can support multiple Tenants; however, there is no reason for us to try and create a single, monolithic service trying to cater all organizations in the world. Monolithic SaaS service carry inherent risks that make them susceptible to data breaches and cross-contamination.

Our goal is to use well tested and commonly understood networking services to create isolated instances of the chuck-stack.
