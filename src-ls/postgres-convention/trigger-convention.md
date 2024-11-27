# Trigger Convention

The purpose of this page is to describe how the chuck-stack uses triggers.

## Convention

The chuck-stack makes heavy use of events. The default event execution tool are PostgreSQL triggers. 

The following bullets are important considerations:

- Triggers execute in alphanumeric order
- Use number sequences to represent trigger order in the form: 'xxxxx' for example: '10100'
- Triggers do not natively begin with numbers, therefore prefix all triggers with 't'
- Core chuck-stack triggers should include `_stk` after the name's sequence
- Example trigger name: `t10100_stk_created_updated`
- Use `\df private.*` in psql to list all triggers - look for results where the result data type is 'trigger'
- While it is possible to have two triggers share the same sequence but have different names, this situaton is discouraged

Here are the recommended trigger sequence conventions:

- All numbers should be between 10000 and 99999
- The first sequence in a range should be `xx100` to allow for adding preceeding triggers in a range after the fact
- The assumed increment is 10 to allow room for adding triggers between two existing triggers
- Basic and fundamental functionality (like session management)
  - 10000 through 19999 are reserved for core chuck-stack triggers
  - 20000 through 29999 are reserved for non-core triggers that can be created by anyone
- Before save events
  - 30000 through 39999 core chuck-stack triggers
  - 40000 through 49999 non-core triggers that can be created by anyone
- Workflow events
  - 50000 through 59999 core chuck-stack triggers
  - 60000 through 69999 non-core tiggers that can be created by anyone
- After save events
  - 70000 through 79999 core chuck-stack triggers
  - 80000 through 89999 non-core tiggers that can be created by anyone
- Cleanup
  - 90000 through 99999 anyone

## Trigger Utilities

Here are some utility functions to help make managing triggers easier

### stk_trigger_create()

There are times when a single function needs to be triggered across many tables.

To make managing the trigger creation in this scenario easier, there exists a private.stk_trigger_create() function that will create all applicable triggers as described by the private.stk_trigger_mgt table.
