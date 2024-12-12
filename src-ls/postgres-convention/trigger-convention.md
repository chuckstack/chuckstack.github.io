# Trigger Convention

The purpose of this page is to describe how the chuck-stack uses triggers.

## Summary

The chuck-stack makes heavy use of events. The default tool to manage database event execution is a PostgreSQL trigger.

Note that we will often refer to 'triggers' as a general database concept. It is important to note there are two parts to a trigger:

- **Trigger Function** - function that describes what should happen when an event occurs
- **Trigger Definition** - database object that associates a table with a trigger function

## Convention

Here are some important considerations to know when managing triggers:

- Triggers execute in alphanumeric order of the trigger definition name
- Use number sequences as a name prefix to represent trigger execution order in the form: 'xxxxx' for example: '10100'
- Triggers do not natively begin with numbers, therefore prefix all trigger function and definition names with 't'
- Core chuck-stack trigger function names should include `_stk` after the function name's sequence
- Example trigger function name: `t10100_stk_created_updated`
- Trigger definition name should be the same as the trigger function name
- Example trigger definition name when applied to stk_actor: `t10100_stk_created_updated`
- The conventions of starting both the trigger function and definition name with the `txxxxx` sequence is not required; however, it is convenient when navigating larger databases
- Use `\dft private.*` in psql to list all trigger functions
- It is possible to have multiple triggers share the same sequence but have different function names
  - Since not all triggers are applied to all tables, using different triggers with the same sequence can be convenient to further promote conventions
  - Take care when duplicating sequences to ensure you do not create confusion

Here are the recommended trigger sequence conventions:

- All numbers should be between 10000 and 99999
- The first sequence in a range should be `xx100` to allow for adding preceding triggers in a range after the fact
- The assumed increment is 10 to allow room for adding triggers between two existing triggers
- Basic and fundamental functionality (like session management)
- Here are the ranges:
  - 10000 to 29999 - before insert/update/delete
  - 30000 to 49999 - before request action
  - 50000 to 59999 - request action
  - 60000 to 79999 - after request action
  - 80000 to 99999 - after insert/update/delete

## Trigger Utilities

Here are some utility functions to help make managing triggers easier.

### stk_trigger_create()

There are times when a single trigger function needs to be associated with many tables.

To make managing the trigger creation in this scenario easier, there exists a private.stk_trigger_create() function that will create all applicable triggers as described by records in the private.stk_trigger_mgt table.
