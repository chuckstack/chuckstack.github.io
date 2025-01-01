# Request Workflow

The purpose of this page is to help you understand the request workflow architecture.

## Summary

The chuck-stack workflow is build around PostgreSQL tables, foreign keys, triggers and the concept of atomic transactions. This means the state of any request workflow is persisted and any workflow action is guaranteed to either complete/commit or rollback.

## Implementation Details

Here are some details about the request architecture:

- Requests are stored in stk_request
- A request can exist in isolation of either other record
- A request can be linked to any other record in the chuck-stack using the [table and record](./table-record-convention.md#linking-convention)
