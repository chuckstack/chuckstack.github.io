# PostgreSQL Conventions

The purpose of this page is to describe the concepts and methodologies for creating PostgreSQL designs. Consistent use of conventions create clarity. Here are the values that drive our conventions:

<!-- TODO: these bullets need improvement -->
- Consistency for clarity
- Purpose driven
- Reduce development time
- Reduce development environment complexity
- Reduce learning time
- Reduce complexity
- Maximize use of conventions
- Minimize the number of expertise needed to articulate a design

## Schema

We use multiple PostgreSQL schemas to create a expose our application logic to the rest of the system.

### Private Schema 

We start with a private schema where we define our data model. It is labelled `private` as a convention because no outside system should interact with this internal schema directly. Said another way, the private schema is used to insulate internal details from the outside world.

### Public Schemas

We create at least one public schema. The purpose of the public schemas are to expose a semantically controlled interface. More on [semantic versioning](https://en.wikipedia.org/wiki/Software_versioning). It is possible to maintain multiple public schemas simultaneously in situations where you need two or more major versions versions available at the same time.

If you support a single exposed schema, you can name the publicly available schema something like `public` or `api`. If you plan to support multiple schemas simultaneously, you can include the major version number in the schema name like `public_v1` or `public_v2`. It is not common to support multiple versions at the same time; however, it does happen.

The separation between private and public schemas allows you to change the private data and logic representations while publicly maintaining semantic version control. 

The artifacts in a public schema will most commonly begin as simple pass-through views and functions. Minor and patch releases will most likely introduce more complexity the public schema. Major releases might give you an opportunity to simply the public schema since you can introduce breaking changes to the public api.

## Table Conventions

This section discuss how we create tables in the private schema.

- Tables use a uuid column as the primary key. The purpose of this decision is to make creating very large (and often replicated) systems easier to manage. Doing so also allows for clients to define their own uuid values and removes a potential centralized process.
- All tables have a single primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. Said another way, if you know the table_name and the record_uu of any given record, you can always find the details associated with that record. This convention also allows us to create many features that are shared across all records in all tables. These features include centralized logs, attachments, and attributes.
- All core chuck-stack tables will begin with `stack_`. Example: `stack_business_partner`.
- Your organization should chose a table prefix that resembles your organization's name if you wish to add new tables or new columns. Example: the Good-Care Medical organization could have a prefix of `gcm_`.
- Link tables should have a table name suffix of `_link`. <!-- TODO: add link table to definitions -->
- Tables should have comments that describe the purpose of the table. Because AI is so proficient at understanding SQL DDL, we can define both how the table operates and why it exists in the same location. Because SQL is self describing, we can query table comments to obtain help documentation with no extra effort.
- Both table and column comments can contain carriage returns; therefore, you can add human readable markdown and structured json, yaml, and toml data in your comments. Note: there is no convention in this bullet yet...

## Column Conventions

- Primary uuid key (`_uu` suffix) - All tables have a single primary key per the above discussion. 
- Foreign keys end with a `_uu` suffix. Example `stack_some_other_table_uu`. There are times when this convention is not possible due to multiple references to the same table. What a duplicate is needed, add an adjective before the `_uu` suffix. Examples: `stack_business_partner_ship_to_uu` and `stack_business_partner_bill_to_uu`.
- When naming columns the noun comes first and the adjective comes next. Example: stack_wf_state_next_uu where state is the noun and next is the adjective. The benefit of this approach is that like columns (and the resulting methods/calls) appear next to each other alphabetically. <!-- TODO: create a list of abbreviations like wf, asi, etc... -->
- Use columns of type text (instead of varchar with unspecified length). Only choose a varchar with a specific length when there is a compelling reason to do so. Even then try not to...
- Boolean values must have a default value defined at the table level.
- Consider using the column's description/comment to hold column_label and column_description
  - comment on column wf_process.name is '{"column_label": "Name", "column_description": "Name describing the record"}';
  - select pg_catalog.col_description(c.oid, col.ordinal_position::int)::json->>'column_label' ...
  - see sql/readme.md for more details

## Table Standard Column
This sections lists the mandatory and optional columns found in chuck-stack tables. Notice that coding and naming by convention plays a role in primary key name and foreign key relationships. As you will see below, you know the primary key column name as a function of the table name. You know the foreign key table name as a function of the foreign key column name.

### Mandatory Columns

- primary key - The primary key column bears the name of the table with a `_uu` suffix. Example: `stack_some_table_uu`
- `stack_tenant_uu` - foreign key reference to the tenant that owns the record <!-- TODO: define tenant and add link here -->
- `stack_org_uu` - financial set of books that owns the record <!-- TODO: define org and add link here -->
- `created` - timestamp indicating when the record was created.
- `created_by_uu` - uuid foreign key reference to the database user/role that created the record.
- `updated` - timestamp indicating when the record was last updated.
- `updated_by_uu` - uuid foreign key reference to the database user/role that last updated the record.
- `session_uu` - must be set with every insert and update. This tells events (and everything else) what where the details (user,role,docdate, etc...) surrounding this change.

Notes:

- `stack_session` records become `is_processed` = true (immutable) after its first use.

### Optional Columns
- `is_active` - boolean that indicates if a record can be modified. is_active also acts as a soft-delete. If a record has an is_active=false, the record should be be returned as an option for selection in future lists and drop down fields. This column must be present to update it after the initial save; therefore, it appears in most tables.
- `name` - text column representing the name of the record.
- `description` - text column representing the description of the record.
- `search_key` - user defined text column. The purpose of this column is to allow users to create keys that are more easily remembered by humans. It is up to the implementor to determine if the search_key should be unique for any given table. If it should be unique, the implementor determines the unique criteria. search_key columns are most appropriate for tables that maintain a primary concept but the record is not considered transactional. Examples of non-transactional records include users, business partners, and products.
- `value` - text column that is often used along with a `search_key` in a key-value pair.
- `doc_no` - user defined text column. The purpose of this column is to allow the system to auto-populate auto-incrementing document numbers. It is up to the implementor to determine if the document_no should be unique. If it should be unique, the implementor determines the unique criteria. The document_no column is most appropriate for tables that represent transactional data. Examples of a transaction records include invoices, orders, and payments. Tables that have a search_key column will not have a document_no column. The opposite is also true. <!-- TODO: define and link implementor -->
- `stack_doc_type_uu` - describes the type of document.
- `is_default` - boolean that indicates if a record should represent a default option. Typically, only one records can have is_default=true; however, there are circumstances where multiple records in the same table can have is_default=true based on unique record attributes. Implementors chose the unique criteria for any given table with a is_default column.
- `is_processed` - boolean that indicates of a record has reached its final state. Said another way, if a record's is_processed=true, then no part of the record should updated or deleted. TODO: we need a way to prevent children of processed records to also be assumed to be processed unless the record has its own is_processed column. 
- `is_template` boolean that indicates if a record exists for the purpose of cloning to create new records.
- `is_trx_type` enum listing the type of transaction. Used by `stack_doc_type` table.

## References to Records

No `_uu` should ever be referred to in code. If this situation is needed, use the System Configurator or enum conventions below.

## enum Conventions

Per the References to Records section... If you need switch/case/if-else based on the contents of a chosen record, build your switch from an enum. This ensures no `_uu` references enter code.

An example of using an enum includes the `stack_doc_type` table. A Sales Order would include a `stack_doc_type_uu` reference and the `stack_doc_type` table would include an enum. If you need to add business logic to a Sales Order, your code would switch off of the `stack_doc_type`'s enum and not the `stack_doc_type_uu` itself.

No table used in normal transactional operations should include an enum. Instead, enums should exist in tables that hold settings, configuration, types, etc... In the Sales Order => `stack_doc_type` example, the `stack_doc_type` table is an example of table that holds settings and configuration. The reason for this convention is to allow for multiple `stck_doc_type` records to contain the same enum value and therefore simply code and maximize user configurability.

## System Configurator Convention

Per the References to Records section... chuck-stack table `stack_sys_config` containing a collection of `search_key` and `value` pairs that describe how the system operates. If code needs to reference a record, one option is to create an entry in the `stack_sys_config` table and refer to its `search_key` in code to resolve the `_uu` value from the record's `value` column.

This approach allows for easy chuck-stack user and migration script manipulation of behavior without manipulating code.

Additional columns are optional and limit the scope a system configurator record:

- `stack_tenant_uu`
- `stack_entity_uu`
- `stack_role_uu`
- `stack_user_uu`

System configurator records created for reference in code should use all caps case in the `search_key` column so that it resembles the common convention of a constant.

## Function Conventions

- concept of function => create_from vs create_into -- attempt to support both when possible <!-- TODO: better define these terms -->

## Sample Table

```sql
CREATE TABLE stack_some_table (
  stack_some_table_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created TIMESTAMP NOT NULL DEFAULT now(),
  created_by_uu uuid NOT NULL,
  updated TIMESTAMP NOT NULL DEFAULT now(),
  updated_by_uu uuid NOT NULL,
  search_key TEXT NOT NULL,
  value TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  is_default BOOLEAN DEFAULT false,
  is_processed BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  CONSTRAINT fk_some_table_created_by FOREIGN KEY (created_by_uu) REFERENCES stack_user(stack_user_uu),
  CONSTRAINT fk_some_table_updated_by FOREIGN KEY (updated_by_uu) REFERENCES stack_user(stack_user_uu)
);
COMMENT ON TABLE stack_some_table IS 'Table that contains some data';
```
