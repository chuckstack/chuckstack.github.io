# Postgres Services

The chuck-stack services section aims to provide the most common services needed by an ERP-like application. We provide these services in a consistent and reasonable manner as described in the [conventions section](./postgres-conventions.md).

## Services Goals

We created the chuck-stack services to allow users to:

- Spawn asynchronous tasks/jobs ([Async](./postgres-convention/async.md))
- Tag any record with any number of attributes ([Attribute Tagging](./postgres-convention/attribute-tag.md))
- Record events as they occur ([Events](./postgres-convention/event.md))
- Notify users and other systems of any state change ([Notify](./postgres-convention/notify.md))
- Execute any request/workflow (state management) against any record ([Request Workflow](./postgres-convention/request.md))
- Track any statistics against any record without creating a spider web of foreign keys ([Statistics](./postgres-convention/statistics-convention.md))
- Store system variables and reference them in code without referencing a record's _uu directly from code ([System Configuration](./postgres-convention/system-configuration-convention.md))

## Create your Own Service


