# PostgreSQL Conventions

The purpose of this page is to describe the concepts and methodologies for creating PostgreSQL designs.

## Table and column conventions:
- Tables use uuid as primary keys. The purpose of this decision is to make creating very large (and often replicated) systems easier to manage. Doing so also allows for clients to define their own uuid values and removing a potential centralized process.
- All tables have a single primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. Said another way, if you know the table_name and the record_uu of any given record, you can always find the details associated with that record. This convention also allows for maintaining centralized logs, attachments, and attributes.
- The search_key column is a user defined alphanumeric. The purpose of this column is to allow users to create keys that are more easily remembered by humans. It is up to the implementor to determine if the search_key should be unique for any given table. If it should be unique, the implementor determines the unique criteria. search_key columns are most appropriate for tables that maintain a primary concept but the record is not considered transactional. Examples of non-transactional records include users, business partners, and products.
- Value is a text column that is often used with a search_key in a key-value pair.
- Document_no is a user defined alphanumeric. The purpose of this column is to allow the system to auto-populate auto-incrementing document numbers. It is up to the implementor to determine if the document_no should be unique. If it should be unique, the implementor determines the unique criteria. The document_no column is most appropriate for tables that represent transactional data. Examples of a transaction records include invoices, orders, and payments. Tables that have a search_key column will not have a document_no column. The opposite is also true.
- The created column is a timestamp indicating when the record was created.
- The created_by_uu column is a uuid pointing to the database user/role that created the record.
- The updated column is a timestamp indicating when the record was last updated.
- The updated_by_uu column is a uuid pointing to the database user/role that last updated the record.
- The is_active column is a boolean that indicates if a record can be modified. is_active also acts as a soft-delete. If a record has an is_active=false, the record should be be returned as an option for selection in future lists and drop down fields.
- The is_default column is a boolean that indicates if a record should represent a default option. Typically, only one records can have is_default=true; however, there are circumstances where multiple records in the same table can have is_default=true based on unique record attributes. Implementors chose the unique criteria for any given table with a is_default column.
- The is_processed column is a boolean that indicates of a record has reached its final state. Said another way, if a record's is_processed=true, then no part of the record should updated or deleted. TODO: we need a way to prevent children of processed records to also be assumed to be processed unless the record has its own is_processed column. 
- The is_template column is a boolean that indicates if a record exists for the purpose of cloning records.
- when naming columns the noun comes first and the adjective comes next. Example: stack_wf_state_next_uu where state is the noun and next is the adjective. The benefit of this approach is that like columns (and the resulting methods/calls) appear next to each other alphabetically. TODO: needs more example like stack_business_partner_ship_to_uu.
- concept of function => create_from vs create_into -- attempt to support both when possible
- use text (over varchar with unspecified length)
- link tables always have a single primary uuid key. TODO: this is a dup
- link table have the suffix _lnk
- consider using the column's description/comment to hold column_label and column_description
 - comment on column wf_process.name is '{"column_label": "Name", "column_description": "Name describing the record"}';
 - select pg_catalog.col_description(c.oid, col.ordinal_position::int)::json->>'column_label' ...
 - see sql/readme.md for more details

## Sample Table

```sql
CREATE TABLE stack_xxx (
  stack_xxx_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created TIMESTAMP NOT NULL DEFAULT now(),
  search_key VARCHAR(255) NOT NULL,
  name TEXT NOT NULL,
  value TEXT NOT NULL,
  description TEXT,
  is_default BOOLEAN DEFAULT false,
  is_processed BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true
);
COMMENT ON TABLE stack_xxx IS 'Table that contains xxx';
```
