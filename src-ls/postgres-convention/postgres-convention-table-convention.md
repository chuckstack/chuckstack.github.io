# Table Convention

This section discuss how we create tables in the private schema.

- uuid single primary key 
  - All tables use a uuid column as the primary key. The purpose of this decision is to make creating very large (and often replicated) systems easier to manage. Doing so also allows for clients to define their own uuid values and removes a potential centralized process.
  - All tables have a 'single' primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. See the below [Table and Record Reference](./postgres-convention-table-record-convention.md) section for more information.
- Noun first table names - when naming tables the noun comes first and the adjective comes next. Example: stk_order_line and stk_order_tax where order is the noun and line and tax are the adjectives. The benefit of this approach is that like tables appear next to each other alphabetically. 
- `stk_` prefx - all core chuck-stack tables will begin with `stk_`. Example: `stk_bp`.
  - Your organization should chose a table prefix that resembles your organization's name if you wish to add new tables or new columns. Example: the Good-Care Medical organization could have a prefix of `gcm_`.
- `_lnk` link table suffix - link tables should have a table name suffix of `_lnk`.
- `_trl` translation suffix - translations are maintained in separate table mirroring the text fields of the table it is translated from. For example, the `stk_bp` table might have a table named `stk_bp_trl` that will have one record per business partner per active language.
