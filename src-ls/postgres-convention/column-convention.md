# Column Convention

- primary key `uu` - All tables have a single primary key named `uu`. 
- foreign keys `_uu` suffix - example `stk_some_other_table_uu`. There are times when this convention is not possible due to multiple references to the same table. When a duplicate is needed, add an adjective before the `_uu` suffix. Examples: `stk_bp_ship_to_uu` and `stk_bp_bill_to_uu`.
- noun first column name - when naming columns the noun comes first and the adjective comes next. Example: stk_wf_state_next_uu where state is the noun and next is the adjective. The benefit of this approach is that like columns (and the resulting methods/calls) appear next to each other alphabetically. 
- text column - use columns of type text (instead of varchar with unspecified length). Only choose a varchar with a specific length when there is a compelling reason to do so. Even then try not to...
- boolean column - boolean values must have a default value defined at the table level.
- unique index - when creating unique index constraints, name the constraint using the table_name_column_name_uidx where `_uidx` represents the term unique index.

## Standard Columns
These sections list the mandatory and optional columns found in chuck-stack tables. Notice that coding and naming by convention plays a role in primary key name and foreign key relationships. As you will see below, you know the primary key column name as a function of the table name. You know the foreign key table name as a function of the foreign key column name when the convention allows.

### Mandatory Columns

The purpose of this section is to list the columns that appear in every table that holds chuck-stack data.

- primary key - `uu`
- `stk_entity_uu` - financial set of books that owns the record
- `created` - timestamptz indicating when the record was created.
- `created_by_uu` - uuid foreign key reference to the database user/role that created the record.
- `updated` - timestamptz indicating when the record was last updated.
- `updated_by_uu` - uuid foreign key reference to the database user/role that last updated the record.
- `table_name` - generated column that hard-codes the name of the table.
- `stk_session_uu` - (not implemented yet) must be set with every insert and update. This tells events (and everything else) what where the details (user,role,docdate, etc...) surrounding this change.

Notes:

- `stk_session` (not implemented yet) records become `is_processed` = true (immutable) after its first use.

### Optional Columns

The purpose of this section is to list the columns you commonly find in chuck-stack tables. Many of the below columns are used in the [sample table](./sample-table-convention.md).

- `is_active` - boolean that indicates if a record can be modified. is_active also acts as a soft-delete. If a record has an is_active=false, the record should be be returned as an option for selection in future lists and drop down fields. This column must be present to update it after the initial save; therefore, it appears in most tables.
- `name` - text representing the name of the record.
- `description` - text representing the description of the record.
- `search_key` - user defined text. The purpose of this column is to allow users to create keys that are more easily remembered by humans. It is up to the implementor to determine if the search_key should be unique for any given table. If it should be unique, the implementor determines the unique criteria. search_key columns are most appropriate for tables that maintain a primary concept but the record is not considered transactional. Examples of non-transactional records include users, business partners, and products.
- `value` - text that is often used along with a `search_key` in a key-value pair.
- `docno` - user defined text. The purpose of this column is to allow the system to auto-populate auto-incrementing document numbers. It is up to the implementor to determine if the document_no should be unique. If it should be unique, the implementor determines the unique criteria. The document_no column is most appropriate for tables that represent transactional data. Examples of a transaction records include invoices, orders, and payments. Tables that have a search_key column will not have a document_no column. The opposite is also true. <!-- TODO: define and link implementor -->
- `type_enum` - a type table's reference to its enum value. ([see enum and type convetion](./enum-type-convention.md))
- `type_uu` - references the record's associated type record.
- `parent_uu` - references a record in the same table identified as being a parent.
- `record_json` - the record's jsonb column that holds less structured data.
- `table_name_uu_json` - jsonb object referencing {"table_name": "","uu": ""}. This is used by services tables (like [attribute tagging](./attribute-tag.md)) to link to the serviced record.
- `is_default` - boolean that indicates if a record should represent a default option. Typically, only one records can have is_default=true; however, there are circumstances where multiple records in the same table can have is_default=true based on unique record attributes. Implementors chose the unique criteria for any given table with a is_default column.
- `date_processed` - timestamptz indicating when the record was processed.
- `is_processed` - boolean derived/generated from `date_processed` automatically indicating if a record has reached its final state. Said another way, if a record's is_processed=true, then no part of the record should updated or deleted. TODO: we need a way to prevent children of processed records to also be assumed to be processed unless the record has its own is_processed column. 
- `is_summary` - boolean that indicates if a record is intended to be a parent to other records in the same table.
- `is_template` - boolean that indicates if a record exists for the purpose of cloning to create new records.
- `is_valid` - boolean that indicates if a record has passed all validators <!-- TODO: define workflow validator - type of event workflow -->
- `is_include` - boolean that indicates if a record is of type include. Including a record could potentially impact all records that are not included. Said another way, including a record could potentially exclude all other records.
- `is_exclude` - boolean that indicates if a record is of type exclude. Excluding a record only impacts that specified record.
- `is_singleton` - indicates that only a single record or object should exist for group or category. Used for example to indicate if more than one attribute tag is allowed for given combination of table_name, uu, stk_attribute_tag_type_uu. If `is_singleton`=Y, then only one instance of an attribute tag type is allowed per record.
- `batch_id` - text indicating this record was processed as part of a batch operation. A single record couple participate in multiple batches. if so, use the noun_adjective approach (example: batch_import_id).
- `table_name` - text referencing the name of a table. This column is often generated.
- `column_name` - text referencing the name of a column.
