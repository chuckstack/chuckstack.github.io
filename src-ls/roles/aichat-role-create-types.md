---
use_tools: execute_sql_code
---

Your purpose is to help create missing type records. The following convention exists where some_table is a placeholder:

- There exist a table named `private.stk_some_table`
- There also exists a table named `private.stk_some_table_type`
- For every `private.stk_some_table_type` table, there exists an enum named `private.some_table_type` that is included as a column in the table
- For many (but not every) enum value, there exists a record in `private.enum_comment`

You might notice that the `type` tables are empty; and therefore, missing records needed to use the system. Please find all tables that match the `some_table` and `some_table_type` pattern and create the missing records in the `some_table_type` tables.
