# Statistics

The purpose of this page is to describe how the chuck-stack supports statistics.

## Summary

Statistics are a summary or measurement about a records. Statistics are often derived or pre-computed data that is made available for quick and easy reference.

Keeping statistics in a separate table greatly improved system performance and stability by reducing the number of foreign keys to high-volume tables.

Said another way: The `stk_statistic` table holds statistical details about a record. The goal of this table is to remove denormalized data/columns from transactional tables. By doing so, we improve performance, reduce locking potential and reduce change log activity for data that is derived from other normalized data.

## Transaction Tentacles

Here is a picture of describing why the dedicated statistics table is so important. The following scenario is common in ERP systems.

When completing an Invoice the following often happens:

- Update the business partner => lifetime revenue statistic
- Update the business partner => aging open amount statistic
- Update the purchase order line => quantity invoiced statistic
- Update the material receipt line => quantity invoiced statistic
- Update the product => quantity invoiced statistic

The business partner, product, purchase order and material receipt tables are all high-volume. Updating this many high-volume tables in a single transaction is a recipe for disaster in terms of performance and stability.

Having a dedicated statistics table ensures only a single record in the table gets locked during transactions. It also helps prevent circular dependencies.

## Post Processing BI

One could argue that the above calculated data should be created and maintained in post-processing tools like dbt and BI. However, the reality is that some statistics need to be maintained in real-time. For this reason, we make the statistics service available to you.

## Details

Tables:

- `stk_statistic`
- `stk_statistic_type`

We use the [Table and Record Reference](./table-record-convention.md) approach to associate a statistic with any given record.

Recent versions of PostgreSQL introduced the `upsert` option to easily find and update an existing record or insert a new statistic in a single command. A unique index on the foreign key pointing to its namesake table prevents duplicate records.
