# Change Log

The purpose of this page is to describe how the chuck-stack tracks changes to tables and columns.

## Summary

The change log is a column by column account of almost all changes in the database. The change log captures inserts, updates and deletes.

## Details

Table: `stk_change_log`

The system tracks changes by batch. Said another way, all changes to all columns executed on a single record will get the same batch_id.
