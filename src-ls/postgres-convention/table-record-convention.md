# Table and Record Convention

The purpose of this section is to describe a way to universally link and find data in the database based on a record's table_name and a record_uu convention.

As described in [table convention](./table-convention.md), all tables have a 'single' primary key (even if it is a link table). All tables have generated values for the column names: `table_name` and `record_uu`.  Said another way, if you know the table_name and the record_uu of any given record, you can always:

- Load the actual record
- Find any information associated with that record

These conventions create simple ways to deliver universal services like attachments, change logs, [attribute tagging](./attribute-tag.md), [denormalized statistics](./statistics-convention.md) with minimal logic and complexity. Said another way, they allow us to create many features that are shared across all records in all tables.
