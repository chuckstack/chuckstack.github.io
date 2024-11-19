# System Configuration Convention

The purpose of this section is to describe a way to save and reference configuration settings without referencing a record's `_uu` directly from code. 

The `stk_system_config` table contains a collection of `search_key` and json `configuration` pairs that describe how the system operates. 

If code needs to reference a setting or configuration, it finds an entry in the `stk_system_config` table. Code can look up system configuration records based on the configuration's `search_key`. 

System configurator records store `search_key` values is all caps so that it resembles the common convention of a constant.
