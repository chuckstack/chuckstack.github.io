# chuck-stack Application Workflow

Just about everything you do in an ERP system involves some form of workflow and/or automation. The purpose of this page is to describe how the chuck-stack supports workflow.

## Summary

All chuck-stack workflow is stored and managed in PostgreSQL. Workflow can be anything from as simple as a PostgreSQL trigger to a highly orchestrated, multiple request process that resembles what you find in a BPMN diagram.

## TOC

<!-- toc -->

## Types of Workflow

chuck-stack supports the following types of workflow:

TODO: link to below sections
- Trigger workflow - 
- Journal workflow - everyone in an organization should be able to record the events in an organization. More...
- Discussion workflow - everyone in an organization should be able to collaborate with others in an organization. More...
- To-do workflow - everyone in an organization should be able to manage a simple list of tasks. More...
- Checklist workflow - roles in an organization often have periodic prescribed tasks. Checklists are a predefined and templated to-do tasks. More...
- Queue workflow - as people manipulate data, some records will reach a state of importance. Queues are defined views into data that match a specific pattern automatically. When the pattern is found, present the user or role with the matching records. More...
- Notice workflow - events happen, and sometimes users and systems need to be notified. The notification workflow provides information based on the events that occur in an organization. More...
- Ad-hoc request workflow - users and systems often know what needs to happen and who needs to perform the action based on the events that occur in an organization. This is often referred to as institutional knowledge of action. Ad-hoc request workflows allow users or services to request action from a particular user, role or service. More...
- Orchestrated request workflow - There are times when an organization needs a formal, multi-step, orchestrated process where a request follows a pre-defined path.

## Trigger Function

The most simple version of chuck-stack workflow is a PostgreSQL trigger function. It executes immediately, and it is contained inside a database transaction.

[This page](./postgres-convention/trigger-convention.md) describes how the chuck-stack manages triggers.

It is important to note that triggers only support event-based and immediate-execution of organization logic. They are not sufficient for longer running, ad-hoc, or orchestrated workflow processes.

It is also important to note that triggers can initiate any of the below types of workflows.

## Queue Workflow

- table_name
- where_clause

...Produces count and zoom logic

## Request Workflow

The next workflow option available in the chuck-stack is the `request`. A `request` is call to action, and it represents the smallest, stand-alone, persisted unit of action. 

A request has the following attributes:

- Request type
- State (from a collection of possible states from request type)
- Resolution (from a collection of possible resolutions from request type)
- Action (from a collection of possible actions from request type)

In a BPMN diagram, a request is often referred to as an activity object.

[This page](./postgres-convention/request.md) describes how the chuck-stack persists requests.

Here is a list of request workflow use cases:

- User creates an ad-hoc stand-alone request to one or a collection of users and/or roles. Example: We are out of coffee, please purchase more.
- User creates a linked request to an existing record. Example: We need to re-evaluate a business partner's credit limit (linked to business partner).

todo:
...processed...
...singleton...

## Document Action Workflow

...specialized version of request... linked with only one not-processed instance

## Request Template

## Async

## Request Orchestration
