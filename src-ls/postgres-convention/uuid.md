# UUID

The purpose of this page is to discuss topics related to using the UUID type.

## Simple Primary Key

All tables in the chuck-stack have a single primary uuid key named `uu`. Here are the reasons for this decision:

- Anyone/anything can create a uuid which means there is no central point of dependency or failure for creating ids
- Being able to identify a record and retrieve its contents solely by its `table_name` and uuid creates a powerful and consistent naming convention
- a single naming convention enables us to deploy generic and globally available features like change logs, attribute tagging, and more

What about link tables? Yes, even link tables have a single uuid primary key. Giving any table a primary key makes it a first-class citizen in the chuck-stack, and it gives it all the features that go along with that citizenship. There is nothing preventing you from having both the primary key constraint on a table as well as any unique constraints needed to maintain integrity when creating links.

## UUID Version

### Version 4

The default version using by PostgreSQL and chuck-stack is version 4. It is the industry standard for generating a sufficiently concise and unique values. You can assume for all practical and reasonable purposes that a randomly generated v4 uuid will not collide with a pre-existing value.

### Version 7

Version 7 is a newer version that also embeds the timestamp into the ID. This concept is valuable for partitioning scenarios where you want to enable `partition by range` where you can separate records by date (like stk_change_log) into separate partition sub-tables.

Note that UUID v7 is not available in core PostgreSQL as of the time of writing. It is expected sometime around release 18. In the meantime, you can create your own implementation or look for an extension.

## Partition

Special considerations are needed when attempting to create a `partition by type` on a table that is supposed to have a single primary key. 

PostgreSQL requires that tables that are `partition by type` have the designated `type` present in all unique constraints. This requirement breaks our 'single primary key' convention since you will be forced to create a compound key. Note that PostgreSQL will now allow you to create a foreign key unless the key is guaranteed to point to a single record.

Here is our solution ([illustrated in the sample table page](./postgres-convention/sample-table-convention.md#partition-table-changes)) to both preserve our convention and support the PostgreSQL unique constraint for partitioned tables:

- Create a 'primary' table to hold the unique primary key.
- Name the primary table following the normal convention (example: `stk_some_table`).
- Give the primary table a single primary key column named `uu`. No other columns exist in this table.
- Create a partition table with the suffix `_part` (example: `stk_some_table_part`).
  - This table represents the typical chuck-stack columns, and its `uu` column is a foreign key reference back to the primary table's `uu` key.
  - Create the partition table as either `partiton by list` or `partition by range`.
  - [Here is an example](./postgres-convention/sample-table-convention.md#partition-table-changes) by list.
- By default, we create only one partition sub-table using the `_default` suffix (example: `stk_some_table_part_default`).
- All new records go into the `_default` table until additional partition sub-tables are needed.
- Note that in Postgresql partitioning, the sub-tables (example: `stk_some_table_part_default`) actually hold the data. The `stk_some_table_part` acts as a facade so that users and code do not see the complexity of the partitioning details.
- You can add more partition sub-tables later as is needed with little effort.
- The chuck-stack creates generic partitioning insert, update and delete triggers that magically work when the above partitioning convention is used.

While solution might seem complex to implement, the result is quite good, fast and reliable. Here are the benefits:

- We keep the simple primary key convention and naming convention
- Users of the `api` schema have no knowledge that the table is partitioned
- We can still use all the generic tools/services like attribute tagging, change log, and more with records in the partitioned tables
