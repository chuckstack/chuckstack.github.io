# Table and Record Convention

The purpose of this section is to describe a way to universally describe how to find data in the database based on a table_name and a record_uu.

All tables have a 'single' primary key (even if it is a link table). The purpose of this decision is to enable the concept of table_name + record_uu unique record identification. Said another way, if you know the table_name and the record_uu of any given record, you can always find the details associated with that record. 

This convention also allows us to create many features that are shared across all records in all tables. These features include centralized logs, attachments, statistics and attributes.
