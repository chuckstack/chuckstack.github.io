# Table and Record Convention

The purpose of this section is to describe a way to universally link and find data in the database based on a record's table_name and uu convention.

## Summary

As described in [table convention](./table-convention.md), all tables have a 'single' primary key (even if it is a link table). All tables have a primary key named `uu`. All tables have a generated value for `table_name`.  Said another way, if you know the table_name and uu of any given record, you can always:

- Load the actual record
- Find any information associated with that record

The reason we have a dedicated generated column for `table_name` is for the following reasons:

- Because the `table_name` + `uu` convention is so common, having it returned in all scenarios allows for easy finding/joining of additional features/services.
- There are times when the value returned in `table_name` is not the actual table. This concept is true for partitions where the data is actually held in sub-tables but we want the data to show the name of the primary table.

## Linking Convention

The chuck-stack uses a column named `table_record_json` to associate one record with another. Here is the schema:

```json
{"table_name": "stk_some_table", "uu": "some_uuid"}
```

This linking convention creates simple ways to deliver universal services like attachments, change logs, [attribute tagging](./attribute-tag.md), [denormalized statistics](./statistics-convention.md) with minimal logic and complexity. Said another way, they allow us to create many features that are shared across all records in all tables.
