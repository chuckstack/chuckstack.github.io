# To Be Resolved

- how do document. Do not like the following becaues of the separation between `private` and `api`. The concern is that extra work is needed to keep everything in sync. It would be better to use the same convention as changelog (`table_name` + `column_name`) to keep the defintions.
  - Tables should have comments that describe the purpose of the table. Because AI is so proficient at understanding SQL DDL, we can define both how the table operates and why it exists in the same location. Because SQL is self describing, we can query table comments to obtain help documentation with no extra effort.
  - Both table and column comments can contain carriage returns; therefore, you can add human readable markdown and structured json, yaml, and toml data in your comments. Note: there is no convention in this bullet yet...
  - Consider using the column's description/comment to hold column_label and column_description
    - comment on column wf_process.name is '{"column_label": "Name", "column_description": "Name describing the record"}';
    - select pg_catalog.col_description(c.oid, col.ordinal_position::int)::json->>'column_label' ...
    - see sql/readme.md for more details <!-- TODO: old reference - needs to be changed -->
- lazy locking (locking convention)
