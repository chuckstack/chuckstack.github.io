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
- Trigger definition name should follow the convention: trigger_function_name || '\_tbl\_' || table_name
- Example trigger definition name: `t10100_stk_created_updated_tbl_stk_actor`
- The conventions of starting both the trigger function and definition name with the `txxxxx` sequence is not required; however, it is convenient when navigating larger databases
- Use `\dft private.*` in psql to list all trigger functions
- While it is possible to have two triggers share the same sequence but have different function names, this situation is discouraged

Here are the recommended trigger sequence conventions:

- All numbers should be between 10000 and 99999
- The first sequence in a range should be `xx100` to allow for adding preceding triggers in a range after the fact
- The assumed increment is 10 to allow room for adding triggers between two existing triggers
- Basic and fundamental functionality (like session management)
  - 10000 through 19999 are reserved for core chuck-stack triggers
  - 20000 through 29999 are reserved for non-core triggers that can be created by anyone
- Before save events
  - 30000 through 39999 core chuck-stack triggers
  - 40000 through 49999 non-core triggers that can be created by anyone
- Workflow events
  - 50000 through 59999 core chuck-stack triggers
  - 60000 through 69999 non-core triggers that can be created by anyone
- After save events
  - 70000 through 79999 core chuck-stack triggers
  - 80000 through 89999 non-core triggers that can be created by anyone
- Cleanup
  - 90000 through 99999 anyone

## Trigger Utilities

Here are some utility functions to help make managing triggers easier.

### stk_trigger_create()

There are times when a single trigger function needs to be associated with many tables.

To make managing the trigger creation in this scenario easier, there exists a private.stk_trigger_create() function that will create all applicable triggers as described by records in the private.stk_trigger_mgt table.
