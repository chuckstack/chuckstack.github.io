# chuck-stack Application Workflow

This page is broken down into the following topics:

- Summary
- Workflow Architecture
- Workflow Use Cases
- Workflow Orchestration

## Summary from User Perspective

The chuck-stack workflow is built around the concept of a `request`. A `request` is call to action, and it represents the most simple unit of action. Here are some summary points about the request architecture:

- It can stand by itself, or it can be associated with any record in the chuck-stack.
- It has a type.
- It has a state (from a collection of possible states from type).
- It has a resolution (from a collection of possible resolutions from type).
- It has actions (from a collection of possible resolutions).

## Summary from IT Perspective
The chuck-stack workflow is build around PostgreSQL triggers and the concept of atomic transactions. This means the state of any workflow is persisted and any workflow action is guaranteed to either complete/commit or rollback. Here are some details about the request architecture:

- They are stored in stk_request
- They link to other records via a [linking convention](./postgres-convention/table-record-convention.md)
