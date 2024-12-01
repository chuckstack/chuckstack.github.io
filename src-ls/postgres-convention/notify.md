# Notify

The purpose of this page is to describe how the chuck-stack supports notifications.

## Summary

The chuck-stack uses [PostgreSQL's notify](https://www.postgresql.org/docs/current/sql-notify.html) to provide notifications to other systems. The `t70100_stk_notify()` trigger function provides a generic chuck-stack notify implementation. By default, only the `stk_async` and `stk_async_type` tables include this trigger definition.

To include additional tables in the `t70100_stk_notify()` execution:

- modify the in the 'stk_notify' record in the `stk_trigger_mgt` table to include your new table in the `table_name` array column
- execute the `private.stk_trigger_create()` function to update your tables with an appropriate trigger definition
