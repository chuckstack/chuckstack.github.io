# Table Convention

This section discuss how we create tables in the private schema.

- uuid single primary key
  - see [uuid page](./uuid.md) for more information about why and how we implement this standard.
  - See the [Table and Record Reference](./table-record-convention.md) section for more information.
- Noun first table names - when naming tables the noun comes first and the adjective comes next. Example: `stk_order_line` and `stk_order_tax` where order is the noun and line and tax are the adjectives. The benefit of this approach is that like tables appear next to each other alphabetically. 
- `stk_` prefix - all core chuck-stack tables will begin with `stk_`. Example: `stk_bp`.
  - Your organization should chose a table prefix that resembles your organization's name if you wish to add new tables or new columns. Example: the Good-Care Medical organization could have a prefix of `gcm_`.
- `_lnk` link table suffix - link tables should have a table name suffix of `_lnk`.
