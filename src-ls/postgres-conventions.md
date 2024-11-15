# PostgreSQL Convention

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

Note that PostgreSQL scopes the namespace for tables, view and functions at the schema level. This means you can have an api view named `api.stk_todo` and a private table named `private.stk_todo` in the same database. This fact is extremely convenient both in terms of managing the `private` versus `api` schema relationships as well as the public `api_v1` vs `api_v2` schemas should you need multiple api versions.

## Common Abbreviations 

We believe we can create the following abbreviations without sacrificing understanding. The following words are expected to be abbreviated when creating database objects unless the abbreviation creates confusion in specific circumstances.

- business partner => bp
- configuration => config
- document => doc
- document number => docno
- identifier => id
- index => idx
- foreign key => fk
- link => lnk
- location => loc
- partition => ptn
- postgresql => psql
- primary key => pk
- sales representative => salesrep
- stack => stk
- transaction => trx
- universal_unique identifier => uu
- workflow => wf

## Table Convention

This section discuss how we create tables in the private schema.

- uuid single primary key 
  - All tables use a uuid column as the primary key. The purpose of this decision is to make creating very large (and often replicated) systems easier to manage. Doing so also allows for clients to define their own uuid values and removes a potential centralized process.
  - All tables have a 'single' primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. See the below [Table and Record Reference](#table-and-record) section for more information.
- Noun first table names - when naming tables the noun comes first and the adjective comes next. Example: stk_order_line and stk_order_tax where order is the noun and line and tax are the adjectives. The benefit of this approach is that like tables appear next to each other alphabetically. 
- `stk_` prefx - all core chuck-stack tables will begin with `stk_`. Example: `stk_bp`.
  - Your organization should chose a table prefix that resembles your organization's name if you wish to add new tables or new columns. Example: the Good-Care Medical organization could have a prefix of `gcm_`.
- `_lnk` link table suffix - link tables should have a table name suffix of `_lnk`.
- `_trl` translation suffix - translations are maintained in separate table mirroring the text fields of the table it is translated from. For example, the `stk_bp` table might have a table named `stk_bp_trl` that will have one record per business partner per active language.

## Column Convention

- primary key `_uu` suffix - All tables have a single primary key per the above discussion. 
- foreign keys `_uu` suffix - example `stk_some_other_table_uu`. There are times when this convention is not possible due to multiple references to the same table. When a duplicate is needed, add an adjective before the `_uu` suffix. Examples: `stk_bp_ship_to_uu` and `stk_bp_bill_to_uu`.
- noun first column name - when naming columns the noun comes first and the adjective comes next. Example: stk_wf_state_next_uu where state is the noun and next is the adjective. The benefit of this approach is that like columns (and the resulting methods/calls) appear next to each other alphabetically. 
- text column - use columns of type text (instead of varchar with unspecified length). Only choose a varchar with a specific length when there is a compelling reason to do so. Even then try not to...
- boolean column - boolean values must have a default value defined at the table level.
- unique index - when creating unique index constraints, name the constraint using the table_name_column_name_uidx where `_uidx` represents the term unique index.

## Standard Columns
This sections lists the mandatory and optional columns found in chuck-stack tables. Notice that coding and naming by convention plays a role in primary key name and foreign key relationships. As you will see below, you know the primary key column name as a function of the table name. You know the foreign key table name as a function of the foreign key column name when the convention allows.

### Mandatory Columns

- primary key - The primary key column bears the name of the table with a `_uu` suffix. Example: `stk_some_table_uu`
- `stk_tenant_uu` - foreign key reference to the tenant that owns the record
- `stk_entity_uu` - financial set of books that owns the record
- `created` - timestamptz indicating when the record was created.
- `created_by_uu` - uuid foreign key reference to the database user/role that created the record.
- `updated` - timestamptz indicating when the record was last updated.
- `updated_by_uu` - uuid foreign key reference to the database user/role that last updated the record.
- `stk_session_uu` - must be set with every insert and update. This tells events (and everything else) what where the details (user,role,docdate, etc...) surrounding this change.

Notes:

- `stk_session` records become `is_processed` = true (immutable) after its first use.

### Optional Columns
- `is_active` - boolean that indicates if a record can be modified. is_active also acts as a soft-delete. If a record has an is_active=false, the record should be be returned as an option for selection in future lists and drop down fields. This column must be present to update it after the initial save; therefore, it appears in most tables.
- `name` - text representing the name of the record.
- `description` - text representing the description of the record.
- `search_key` - user defined text. The purpose of this column is to allow users to create keys that are more easily remembered by humans. It is up to the implementor to determine if the search_key should be unique for any given table. If it should be unique, the implementor determines the unique criteria. search_key columns are most appropriate for tables that maintain a primary concept but the record is not considered transactional. Examples of non-transactional records include users, business partners, and products.
- `value` - text that is often used along with a `search_key` in a key-value pair.
- `docno` - user defined text. The purpose of this column is to allow the system to auto-populate auto-incrementing document numbers. It is up to the implementor to determine if the document_no should be unique. If it should be unique, the implementor determines the unique criteria. The document_no column is most appropriate for tables that represent transactional data. Examples of a transaction records include invoices, orders, and payments. Tables that have a search_key column will not have a document_no column. The opposite is also true. <!-- TODO: define and link implementor -->
- `stk_doc_type_uu` - describes the type of document.
- `is_default` - boolean that indicates if a record should represent a default option. Typically, only one records can have is_default=true; however, there are circumstances where multiple records in the same table can have is_default=true based on unique record attributes. Implementors chose the unique criteria for any given table with a is_default column.
- `is_processed` - boolean that indicates of a record has reached its final state. Said another way, if a record's is_processed=true, then no part of the record should updated or deleted. TODO: we need a way to prevent children of processed records to also be assumed to be processed unless the record has its own is_processed column. 
- `is_summary` - boolean that indicates if a record is intended to be a parent to other records in the same table.
- `is_template` - boolean that indicates if a record exists for the purpose of cloning to create new records.
- `is_valid` - boolean that indicates if a record has passed all validators <!-- TODO: define workflow validator - type of event workflow -->
- `trx_type` - enum listing the type of transaction. Used by `stk_doc_type` table.
- `batch_id` - text indicating this record was processed as part of a batch operation. A single record couple participate in multiple batches. if so, use the noun_adjective approach (example: batch_import_id).
- `table_name` - text referencing the name of a table.
- `column_name` - text referencing the name of a column.
- `record_uu` - uuid referencing a primary key value of a table.

## Table and Record Convention

The purpose of this section is to describe a way to universally describe how to find data in the database based on a table_name and a record_uu.

All tables have a 'single' primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. Said another way, if you know the table_name and the record_uu of any given record, you can always find the details associated with that record. 

This convention also allows us to create many features that are shared across all records in all tables. These features include centralized logs, attachments, statistics and attributes.

## enum Convention

The chuck-stack makes heavy use of enums to minimize the amount of code and reduce the code's dependencies on transaction data.

No `_uu` record should ever be referred to in code. Instead, create a record with a enum column representing how the code should behave and switch/case/if-else based on the value of the enum.

## Type Convention

The purpose of this section is to describe a way to ensure no transactional table directly contains an enum.

The proper convention to reference an enum is to create a facade table with a `_type` suffix that contains the enum. Transactional tables then reference the `_type_uu` record. The purpose of this convention is to allow users to create multiple `type` records without requiring any changes to code.

An example of this convention includes the `stk_doc_type` table where users can create as many document types as is needed, and the code needs only worry about the type's enum value.

An enum is typically named the same as the table with no `stk_` prefix and no `_uu` suffix. For example, the `stk_doc_type` table has an enum column named `doc_type`.

## System Configuration Convention

The purpose of this section is to describe a way to save and reference configuration settings without referencing a record's `_uu` directly from code. 

The `stk_system_config` table contains a collection of `search_key` and json `configuration` pairs that describe how the system operates. 

If code needs to reference a setting or configuration, it finds an entry in the `stk_system_config` table. Code can look up system configuration records based on the configuration's `search_key`. 

System configurator records store `search_key` values is all caps so that it resembles the common convention of a constant.

## Statistics Convention

The `stk_statistic` table holds statistical details about a record. The goal of this table is to remove denormalized data/columns from transactional tables. By doing so, we improve performance, reduce locking potential and reduce change log activity for data that is derived from other normalized data.

You use the [Table and Record Reference](#table-and-record) approach to associate a statistic to any given record.

Recent versions of PostgreSQL introduced the `upsert` option to easily find and update an existing record or insert a new statistic in a single command. A unique index on the foreign key pointing to its namesake table prevents duplicate records.

## Translation Convention

The purpose of this section is to describe how chuck-stack manages translations to other languages.

The `stk_translation` table contains translations to a language other than the system's default language. You use an approach similar to [Table and Record Reference](#table-and-record) with the addition of the `column_name` column to provide an alternate language value for any column of type `text`.

## Function Convention

- concept of function => create_from vs create_into -- attempt to support both when possible <!-- TODO: better define these terms -->

## Sample Table

The purpose of this section is to make it as easy to create a new entity as possible. All you need to do is copy the below sql and perform a replace-all on 'changeme' to set the desired name. Here is an example vim substitute command to update 'changeme' to 'wf_request':

```vim
:%s/changeme/wf_request/g
```
The below represents a template for creating a new entity. The following sql code does the following:

- creates an enum
- adds comments to each enum value
- creates a facade type table
- creates the actual table
- exposes the tables to the api schema
- adds comments to each table

```sql
-- set session to show stk_superuser as the actor performing all the tasks
SET stk.session = '{\"psql_user\": \"stk_superuser\"}';

CREATE TYPE private.changeme_type AS ENUM (
    'NONE',
    'SUPPORT',
    'ACTION'
);
COMMENT ON TYPE private.changeme_type IS 'Enum used in code to automate and validate changeme types.';

INSERT INTO private.enum_comment (enum_type, enum_value, comment) VALUES
('changeme_type', 'NONE', 'General purpose with no automation or validation'),
('changeme_type', 'SUPPORT', 'Support purpose with limited automation or validation'),
('changeme_type', 'ACTION', 'Action purpose with no automation or validation')
;

CREATE TABLE private.stk_changeme_type (
  stk_changeme_type_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu uuid NOT NULL,
  CONSTRAINT fk_some_table_createdby FOREIGN KEY (created_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu uuid NOT NULL,
  CONSTRAINT fk_some_table_updatedby FOREIGN KEY (updated_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_default BOOLEAN NOT NULL DEFAULT false,
  changeme_type private.changeme_type NOT NULL,
  search_key TEXT NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme_type IS 'Holds the types of stk_changeme records. To see a list of all changeme_type enums and their comments, select from api.enum_value where enum_name is changeme_type.';

CREATE VIEW api.stk_changeme_type AS SELECT * FROM private.stk_changeme_type;
COMMENT ON VIEW api.stk_changeme_type IS 'Holds the types of stk_changeme records.';

CREATE TABLE private.stk_changeme (
  stk_changeme_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu uuid NOT NULL,
  CONSTRAINT fk_some_table_createdby FOREIGN KEY (created_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu uuid NOT NULL,
  CONSTRAINT fk_some_table_updatedby FOREIGN KEY (updated_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_template BOOLEAN NOT NULL DEFAULT false,
  is_valid BOOLEAN NOT NULL DEFAULT true,
  stk_changeme_type_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_type FOREIGN KEY (stk_changeme_type_uu) REFERENCES private.stk_changeme_type(stk_changeme_type_uu),
  stk_changeme_parent_uu UUID,
  CONSTRAINT fk_stk_changeme_parent FOREIGN KEY (stk_changeme_parent_uu) REFERENCES private.stk_changeme(stk_changeme_uu),
  search_key TEXT NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme IS 'Holds changeme records';

CREATE VIEW api.stk_changeme AS SELECT * FROM private.stk_changeme;
COMMENT ON VIEW api.stk_changeme IS 'Holds changeme records';

----ignore in changelog - only uncomment if needed
--insert into private.stk_change_log_exclude (table_name) values ('stk_changeme');
--select private.stk_table_trigger_create();

-- create standard triggers just in case new tables created above
select private.stk_table_trigger_create();
```

Note: the above created_by_uu and updated_by_uu will be uncommented when the stk_actor_uu table is added to the stack.

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
