# Trigger Convention

The purpose of this page is to describe how the chuck-stack uses triggers.

## Convention

The chuck-stack makes heavy use of events. The default event execution tool are PostgreSQL triggers. 

The following bullets are important considerations:

- Triggers execute in alphanumeric order
- Use numbers to represent trigger order in the form: 'xxxx' for example: '1010'
- Triggers do not natively begin with numbers, therefore prefix all triggers with 't'
- Example trigger name: 't1010_created_updated'
- Use `\df private.*` in psql to list all triggers - look for results where the result data type is 'trigger'

## Triggers

Here are some functions to help make managing triggers easier

### stk_trigger_create()

There are times when a single function needs to be triggered across many tables.

To make managing the trigger creation in this scenario easier, there exists a private.stk_trigger_create() function that will create all applicable triggers as described by the private.stk_trigger_mgt table.
