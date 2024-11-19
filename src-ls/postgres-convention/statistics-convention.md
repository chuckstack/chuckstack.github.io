# Statistics Convention

The `stk_statistic` table holds statistical details about a record. The goal of this table is to remove denormalized data/columns from transactional tables. By doing so, we improve performance, reduce locking potential and reduce change log activity for data that is derived from other normalized data.

You use the [Table and Record Reference](./table-record-convention.md) approach to associate a statistic to any given record.

Recent versions of PostgreSQL introduced the `upsert` option to easily find and update an existing record or insert a new statistic in a single command. A unique index on the foreign key pointing to its namesake table prevents duplicate records.
