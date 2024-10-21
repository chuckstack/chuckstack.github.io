# PostgreSQL Conventions

The purpose of this page is to describe the concepts and methodologies for creating chuck-stack PostgreSQL designs. Consistent use of conventions create clarity. Here are the values that drive our conventions:

<!-- TODO: these bullets need improvement -->
- Consistency for clarity
- Purpose driven
- Reduce development time
- Reduce development environment complexity
- Reduce learning time
- Reduce operational complexity
- Maximize use of conventions
- Minimize the number of experts needed to articulate a design

> You can always ask AI (using AIChat) about any chuck-stack specific convention or PostgreSQL best practices and options. For example, you can ask AI:
>
>     It seems more secure to disable PostgreSQL's TCP service and require clients to connect via unix socket. Is this true?

## Schema

We use multiple PostgreSQL schemas to create and expose our application logic to the rest of the world in a common and secure manner.

### Private Schema 

We start with a private schema where we define our data model. The schema is named `private` as a convention because no outside system should interact with this internal schema directly. Said another way, the private schema is used to insulate internal details from the outside world.

The private schema primarily consists of:

- tables to persist data
- functions to automate workflow

### API Schemas

We create at least one publicly available api schema. The purpose of the api schemas are to expose [semantically versioned interfaces](https://en.wikipedia.org/wiki/Software_versioning) to the outside world. It is possible to maintain multiple api schemas simultaneously in situations where you need two or more major versions versions available at the same time.

If you support a single exposed schema, you name the publicly available schema `api`. If you plan to support multiple schemas simultaneously, you can include the major version number in the schema name like `api_v1` or `api_v2`. It is not common to support multiple versions at the same time; however, it does happen.

The separation between private and api schemas allows you to change the private data structure and logic representations while publicly maintaining semantic version control. 

The api schema will most commonly consist of:

- pass-through views for each of the private tables that can be exposed
- convenience functions for data CRUD (create, read, updated and delete)

An overly simple example of an api pass-though view would be:

```sql
CREATE VIEW api.stk_todo AS SELECT * FROM private.stk_todo;
```

Note that PostgreSQL scopes the namespace for tables, view and functions at the schema level. This means you can have an api view named `api.stk_todo` and a private table named `private.stk_todo` in the same database. This fact is extremely convenient both in terms of managing the `private` versus `api` schema relationships as well as the `api_v1` vs `api_v2` schema coexistence should you have the need for multiple simultaneous api versions.

## Common Abbreviations 

We believe we can create the following abbreviations without sacrificing understanding. The following words are expected to be abbreviated when creating database objects unless the abbreviation creates confusion in specific circumstances.

- business partner => bp
- document => doc
- document number => docno
- docuemnt type => doctype
- index => idx
- foreign key => fk
- link => lnk
- location => loc
- sales representative => salesrep
- stack => stk
- transaction => trx
- translation => trl
- workflow => wf

## Table Conventions

This section discuss how we create tables in the private schema.

- uuid single primary key 
  - All tables use a uuid column as the primary key. The purpose of this decision is to make creating very large (and often replicated) systems easier to manage. Doing so also allows for clients to define their own uuid values and removes a potential centralized process.
  - All tables have a 'single' primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. Said another way, if you know the table_name and the record_uu of any given record, you can always find the details associated with that record. This convention also allows us to create many features that are shared across all records in all tables. These features include centralized logs, attachments, and attributes.
- `table_name` reference - any column that references a table should use the column name `table_name`.
- `stk_` prefx - all core chuck-stack tables will begin with `stk_`. Example: `stk_bp`.
  - Your organization should chose a table prefix that resembles your organization's name if you wish to add new tables or new columns. Example: the Good-Care Medical organization could have a prefix of `gcm_`.
- `_lnk` link table suffix - link tables should have a table name suffix of `_lnk`.
- `_trl` translation suffix - translations are maintained in separate table mirroring the text fields of the table it is translated from. For example, the `stk_bp` table might have a table named `stk_bp_trl` that will have one record per business partner per active language.

## Column Conventions

- primary key `_uu` suffix - All tables have a single primary key per the above discussion. 
- foreign keys `_uu` suffix - example `stk_some_other_table_uu`. There are times when this convention is not possible due to multiple references to the same table. When a duplicate is needed, add an adjective before the `_uu` suffix. Examples: `stk_bp_ship_to_uu` and `stk_bp_bill_to_uu`.
- noun first column name - when naming columns the noun comes first and the adjective comes next. Example: stk_wf_state_next_uu where state is the noun and next is the adjective. The benefit of this approach is that like columns (and the resulting methods/calls) appear next to each other alphabetically. 
- text column - use columns of type text (instead of varchar with unspecified length). Only choose a varchar with a specific length when there is a compelling reason to do so. Even then try not to...
- boolean column - boolean values must have a default value defined at the table level.
- `column_name` reference - any column that references a column should use the column name as `column_name`.

## Standard Columns
This sections lists the mandatory and optional columns found in chuck-stack tables. Notice that coding and naming by convention plays a role in primary key name and foreign key relationships. As you will see below, you know the primary key column name as a function of the table name. You know the foreign key table name as a function of the foreign key column name when the convention allows.

### Mandatory Columns

- primary key - The primary key column bears the name of the table with a `_uu` suffix. Example: `stk_some_table_uu`
- `stk_tenant_uu` - foreign key reference to the tenant that owns the record
- `stk_entity_uu` - financial set of books that owns the record
- `created` - timestamptz indicating when the record was created.
- `stk_created_by_uu` - uuid foreign key reference to the database user/role that created the record.
- `updated` - timestamptz indicating when the record was last updated.
- `stk_updated_by_uu` - uuid foreign key reference to the database user/role that last updated the record.
- `stk_session_uu` - must be set with every insert and update. This tells events (and everything else) what where the details (user,role,docdate, etc...) surrounding this change.

Notes:

- `stk_session` records become `is_processed` = true (immutable) after its first use.

### Optional Columns
- `is_active` - boolean that indicates if a record can be modified. is_active also acts as a soft-delete. If a record has an is_active=false, the record should be be returned as an option for selection in future lists and drop down fields. This column must be present to update it after the initial save; therefore, it appears in most tables.
- `name` - text column representing the name of the record.
- `description` - text column representing the description of the record.
- `search_key` - user defined text column. The purpose of this column is to allow users to create keys that are more easily remembered by humans. It is up to the implementor to determine if the search_key should be unique for any given table. If it should be unique, the implementor determines the unique criteria. search_key columns are most appropriate for tables that maintain a primary concept but the record is not considered transactional. Examples of non-transactional records include users, business partners, and products.
- `value` - text column that is often used along with a `search_key` in a key-value pair.
- `docno` - user defined text column. The purpose of this column is to allow the system to auto-populate auto-incrementing document numbers. It is up to the implementor to determine if the document_no should be unique. If it should be unique, the implementor determines the unique criteria. The document_no column is most appropriate for tables that represent transactional data. Examples of a transaction records include invoices, orders, and payments. Tables that have a search_key column will not have a document_no column. The opposite is also true. <!-- TODO: define and link implementor -->
- `stk_doctype_uu` - describes the type of document.
- `is_default` - boolean that indicates if a record should represent a default option. Typically, only one records can have is_default=true; however, there are circumstances where multiple records in the same table can have is_default=true based on unique record attributes. Implementors chose the unique criteria for any given table with a is_default column.
- `is_processed` - boolean that indicates of a record has reached its final state. Said another way, if a record's is_processed=true, then no part of the record should updated or deleted. TODO: we need a way to prevent children of processed records to also be assumed to be processed unless the record has its own is_processed column. 
- `is_summary` boolean that indicates if a record is intended to be a parent to other records in the same table.
- `is_template` boolean that indicates if a record exists for the purpose of cloning to create new records.
- `is_valid` boolean that indicates if a record has passed all validators <!-- TODO: define workflow validator - type of event workflow -->
- `trx_type` enum listing the type of transaction. Used by `stk_doctype` table.

## References to Records

No `_uu` should ever be referred to in code. If this situation is needed, use the System Configurator or enum conventions below.

## enum Conventions

Per the References to Records section... If you need switch/case/if-else based on the contents of a chosen record, build your switch from an enum. This ensures no `_uu` references enter code.

An example of using an enum includes the `stk_doctype` table. A Sales Order would include a `stk_doctype_uu` reference and the `stk_doctype` table would include an enum. If you need to add business logic to a Sales Order, your code would switch off of the `stk_doctype`'s enum and not the `stk_doctype_uu` itself.

No table used in normal transactional operations should include an enum. Instead, enums should exist in tables that hold settings, configuration, types, etc... In the Sales Order => `stk_doctype` example, the `stk_doctype` table is an example of table that holds settings and configuration. The reason for this convention is to allow for multiple `stck_doctype` records to contain the same enum value and therefore simply code and maximize user configurability.

## System Configurator Convention

Per the References to Records section... chuck-stack table `stk_sys_config` containing a collection of `search_key` and `value` pairs that describe how the system operates. If code needs to reference a record, one option is to create an entry in the `stk_sys_config` table and refer to its `search_key` in code to resolve the `_uu` value from the record's `value` column.

This approach allows for easy chuck-stack user and migration script manipulation of behavior without manipulating code.

Additional columns are optional and limit the scope a system configurator record:

- `stk_tenant_uu`
- `stk_entity_uu`
- `stk_role_uu`
- `stk_user_uu`

System configurator records created for reference in code should use all caps case in the `search_key` column so that it resembles the common convention of a constant.

## Dedicated Unlogged Statistics Tables

Adding statistical columns/data to transactional tables causes performance and stability issues. Instead, all statistics should be maintained in dedicated tables. Here are the reasons to keep statistics out of transactional tables:

- You can create circular loops/locking. For example: an Order is trying to update an Order Line which in turn is trying to update an Order total.
- You create excessive change logs. For example: if every Payment updates every Business Partner's last payment field, the Business Partner change log will grow 10x to 100x faster than it should.
- Consider making statistics tables 'unlogged' to prevent unneeded WAL activity. Statistics can always be derived after the fact. Said another way, Statistics represent denormalized data.
- There exist multiple strategies for most efficiently calculating statistics. Some strategies involve using logical replicas to calculate the statistical data and making the results available to the production database via a FDW (foreign data wrapper).

As a practice, statistics tables should bear the name of the table it describes with an `_stat` suffix. For example, a statistics table for `stk_bp` would be `stk_bp_stat`. A new column will be added for every new statistic needed.

Recent versions of PostgreSQL introduced the `upsert` option to easily find and update an existing record or insert a new record in a single command. A unique index on the foreign key pointing to its namesake table prevents duplicate records.

It is worth noting that an unexpected database shutdown (error state) will empty the contents of unlogged tables. These records will need to be rebuilt after the issue is resolved and the database is restarted.

## Function Conventions

- concept of function => create_from vs create_into -- attempt to support both when possible <!-- TODO: better define these terms -->

## Sample Table

```sql
CREATE TABLE stk_some_table (
  stk_some_table_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  stk_created_by_uu uuid NOT NULL,
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  stk_updated_by_uu uuid NOT NULL,
  search_key TEXT NOT NULL,
  value TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  is_default BOOLEAN DEFAULT false,
  is_processed BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  CONSTRAINT fk_some_table_created_by FOREIGN KEY (stk_created_by_uu) REFERENCES stk_user(stk_user_uu),
  CONSTRAINT fk_some_table_updated_by FOREIGN KEY (stk_updated_by_uu) REFERENCES stk_user(stk_user_uu)
);
COMMENT ON TABLE stk_some_table IS 'Table that contains some data';
```

## Template Table

The `stk_table_template` table holds the example or base template for creating new tables. Organizations can change the definition of this table as they deem appropriate.

- No records should be created in these template tables.
- You can create additional templates by simply adding a suffix. For example:
  - `stk_table_template_trx` for creating transaction tables.
  - `stk_table_template_trl` for creating translation tables.
- If you ask for a new table it will create the table in the image of the requested template and it will revert to the `stk_table_template` table if no template is specified.

## Scalability Considerations

We consider the following topics when scaling PostgreSQL from just a couple of users through thousands of users.

- Connection pooling will be used to minimize the load placed by high connection/subscriber counts.
- We will make heavy use of database partitions to support growth. There are no known reasons to create separate tables because of size.
  - table growth in size
  - record archives (example: old invoices that do not change)
- We will use both read (streaming/physical) replicas and logical replicas to support non-transactional loads.
  - Read replicas are good for supporting read-only queries
  - Logical replicas are good for transforming data to support external systems (BI, AI, ...) and calculating statistical data.

## To Be Resolved

- how do document. Do not like the following becaues of the separation between `private` and `api`. The concern is that extra work is needed to keep everything in sync. It would be better to use the same convention as changelog (`table_name` + `column_name`) to keep the defintions.
  - Tables should have comments that describe the purpose of the table. Because AI is so proficient at understanding SQL DDL, we can define both how the table operates and why it exists in the same location. Because SQL is self describing, we can query table comments to obtain help documentation with no extra effort.
  - Both table and column comments can contain carriage returns; therefore, you can add human readable markdown and structured json, yaml, and toml data in your comments. Note: there is no convention in this bullet yet...
  - Consider using the column's description/comment to hold column_label and column_description
    - comment on column wf_process.name is '{"column_label": "Name", "column_description": "Name describing the record"}';
    - select pg_catalog.col_description(c.oid, col.ordinal_position::int)::json->>'column_label' ...
    - see sql/readme.md for more details <!-- TODO: old reference - needs to be changed -->
- lazy locking (locking convention)
