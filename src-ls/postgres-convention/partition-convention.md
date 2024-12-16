# Partition

The purpose of this page is to discuss partition conventions and strategies.

## Partition Types

The chuck-stack uses two types of partitions:

- List: where partitioned records are separated by a list of discrete values
- Range: where partitioned records are separated by ranges of values

## Default Partition

The chuck-stack proactively creates partitions for tables that we know might grow to considerable size for some organizations. By creating the partitioned table in advance, we simplify maintenance in the future. 

Creating the partitions in advance is important because converting a non-partitioned table to a partitioned table is a non-trivial event. Adding an additional partition to an already partitioned table is significantly easier.

There exists a special type of partition called the 'default' partition that holds all values that currently do not have a dedicated list or range partition table. Since the chuck-stack has no knowledge of what 'types' and volume of records you will create, we start by creating your first default partition for you. You simply add partitions as you implement your optimization strategies.

Smaller organizations may never need to create additional partitions beyond the default.

Default partitions are a somewhat contested topic. Some people recommend not using them at all because they argue that you should fully understand and describe exactly what is stored where.

The concept of fully articulating how your data is stored (without using a default) makes sense for an individual organization; however, the chuck-stack has no way to predict how and what volume of data is created. You may remove the default partition when and how you deem appropriate for your specific organization.

There are performance considerations with default partitions. For every partition (and its resulting where logic) you create, the system will assign the anti-logic to the default partition automatically. If you have two partitions, this concept should not impact your performance. If you have 5000 partitions, the default partition's where logic will be so long that it will not likely not fit on a single page.

References:

- [Postgres Partitioning with a Default Partition](https://www.crunchydata.com/blog/postgres-partitioning-with-a-default-partition)

## List Partition

The chuck-stack makes heavy use of list partitions. This strategy is typically used with the [enum and type](./enum-type-convention.md) convention.

An example of list partitioning is where you have a table that holds invoices that have a discrete list of invoice types (example: 'AP Invoice','AP Credit Memo', 'AR Invoice',  'AR Credit Memo', ...). You may have dedicated partition tables for 'AP Invoice' and 'AR Invoice' since the volume will be greatest for these types. You might decide to put all remaining records in an 'other' or 'default' partition.

## Range Partition

The chuck-stack uses range partitions to optimize performance around time-related data. 

If you find that you are frequently looking for data withing the last 12 months (for example), then you can use a range partition to put older data in a partitions that is seldom referenced. Doing so ensures your current partition is as small as is possible.

Logs are frequently partitioned by range based on the assumption that a log's value and/or relevance diminishes over time.

## UUID

See [uuid](./uuid.md) for details about creating partitions with a single primary uuid key.
