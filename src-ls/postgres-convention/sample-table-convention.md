# Sample Table

The purpose of this section is to make it as easy as possible to create a new chuck-stack concept. All you need to do is copy the below SQL and perform a replace-all on 'changeme' to set the desired name. Once you are happy with the new SQL, add it to your sqlx migration script repository.

## Variable Substitution

Here is an example vim substitute command to update 'changeme' to 'request':

```vim
:%s/changeme/request/g
```

The resulting tables and objects would resemble `stk_request`.

## Normal Sample Table

This section represents a template for creating a new chuck-stack concept that does not use partitioning (aka normal table). The below SQL code does the following:

- follows the ([table conventions](./table-convention.md))
- follows the ([table and record conventions](./table-record-convention.md))
- creates typical columns ([see column convention](./column-convention.md))
- creates an enum (for code) ([see enum](./enum-type-convention.md#enum-convention))
- adds comments to each enum value
- creates a facade type table around the enum (for users) ([see type](./enum-type-convention.md#type-convention))
- creates the actual table with a reference to the type
- exposes the tables to the api schema ([see schema](./schema.md))
- adds comments to each table ([see comments](./comment.md))
- adds triggers to each table to set session data ([see trigger](./trigger-convention.md))

Simply copy and paste this script into a SQL editor and execute with the above substituted variables.

```sql
-- set session to show stk_superuser as the actor performing all the tasks
SET stk.session = '{\"psql_user\": \"stk_superuser\"}';

---- type_section start ----
CREATE TYPE private.stk_changeme_type_enum AS ENUM (
    'NONE',
    'ACTION'
);
COMMENT ON TYPE private.stk_changeme_type_enum IS 'Enum used in code to automate and validate changeme types.';

INSERT INTO private.enum_comment (enum_type, enum_value, comment, is_default) VALUES
('stk_changeme_type_enum', 'NONE', 'General purpose with no automation or validation', true),
('stk_changeme_type_enum', 'ACTION', 'Action purpose with no automation or validation', false)
;

CREATE TABLE private.stk_changeme_type (
  uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT GENERATED ALWAYS AS ('stk_changeme_type') STORED,
  ----Prompt: ask the user if they need to assign this record to a specific entity
  --stk_entity_uu UUID NOT NULL REFERENCES private.stk_entity(uu),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu UUID NOT NULL, -- no FK by convention
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu UUID NOT NULL, -- no FK by convention
  revoked TIMESTAMPTZ,
  is_revoked BOOLEAN GENERATED ALWAYS AS (revoked IS NOT NULL) STORED,
  is_default BOOLEAN NOT NULL DEFAULT false,
  type_enum private.stk_changeme_type_enum NOT NULL,
  ----Prompt: ask the user if they need to store json
  --record_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  search_key TEXT NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme_type IS 'Holds the types of stk_changeme records. To see a list of all stk_changeme_type_enum enums and their comments, select from api.enum_value where enum_name is stk_changeme_type_enum.';

CREATE VIEW api.stk_changeme_type AS SELECT * FROM private.stk_changeme_type;
COMMENT ON VIEW api.stk_changeme_type IS 'Holds the types of stk_changeme records.';

-- create triggers and type records for newly created tables
SELECT private.stk_trigger_create();
SELECT private.stk_table_type_create('stk_changeme_type');
---- type_section end ----

---- primary_section start ----
CREATE TABLE private.stk_changeme (
  uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT generated always AS ('stk_changeme') stored,
  ----Prompt: ask the user if they need to assign this record to a specific entity
  --stk_entity_uu UUID NOT NULL REFERENCES private.stk_entity(uu),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu UUID NOT NULL, -- no FK by convention
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu UUID NOT NULL, -- no FK by convention
  revoked TIMESTAMPTZ,
  is_revoked BOOLEAN GENERATED ALWAYS AS (revoked IS NOT NULL) STORED,
  ----Prompt: ask the user if this table needs to reference another table's record
  --table_name_uu_json JSONB NOT NULL DEFAULT '{"table_name": "","uu": ""}'::jsonb,
  ----Prompt: ask the user if they need to create templates
  --is_template BOOLEAN NOT NULL DEFAULT false,
  ----Prompt: ask the user if they need validation
  --is_valid BOOLEAN NOT NULL DEFAULT true,
  type_uu UUID NOT NULL REFERENCES private.stk_changeme_type(uu),
  ----Prompt: ask the user if they need to create parent child relationships inside the table
  --parent_uu UUID REFERENCES private.stk_changeme(uu),
  ----Prompt: ask the user if they need to store json
  --record_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  ----Prompt: ask the user if they need to know when/if a record was processed
  --processed TIMESTAMPTZ,
  --is_processed BOOLEAN GENERATED ALWAYS AS (processed IS NOT NULL) STORED,
  search_key TEXT NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme IS 'Holds changeme records';

CREATE VIEW api.stk_changeme AS SELECT * FROM private.stk_changeme;
COMMENT ON VIEW api.stk_changeme IS 'Holds changeme records';
---- primary_section end ----

-- create triggers for newly created tables
SELECT private.stk_trigger_create();
```

## Partition Table Changes

There are times when you know in advance that a table will be large. As a result, you can create the chuck-stack concept as a collection of [partitioned tables](./partition-convention.md) in advance to prevent future work.

Below represents the changes needed to the `---- primary_section ----` to create a partitioned table. Here is the process to create a partitioned chuck-stack concept:

- Copy the above 'normal' script
- Delete the `---- primary_section ----` section
- Replace it with the following

See the [UUID page](./uuid.md#partition) for more details about partitioning, primary keys, and the below structure.

```sql
---- primary_section start ----
-- primary table
-- this table is needed to support both (1) partitioning and (2) being able to maintain a single primary key and single foreign key references
CREATE TABLE private.stk_changeme (
  uu UUID PRIMARY KEY DEFAULT gen_random_uuid()
);

-- partition table
CREATE TABLE private.stk_changeme_part (
  uu UUID NOT NULL REFERENCES private.stk_changeme(uu),
  table_name TEXT generated always AS ('stk_changeme') stored,
  stk_entity_uu UUID NOT NULL REFERENCES private.stk_entity(uu),
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu UUID NOT NULL, -- no FK by convention
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu UUID NOT NULL, -- no FK by convention
  revoked TIMESTAMPTZ,
  is_revoked BOOLEAN GENERATED ALWAYS AS (revoked IS NOT NULL) STORED,
  ----Prompt: ask the user if this table needs to reference another table's record
  --table_name_uu_json JSONB NOT NULL DEFAULT '{"table_name": "","uu": ""}'::jsonb,
  ----Prompt: ask the user if they need to create templates
  --is_template BOOLEAN NOT NULL DEFAULT false,
  ----Prompt: ask the user if they need validation
  --is_valid BOOLEAN NOT NULL DEFAULT true,
  type_uu UUID NOT NULL REFERENCES private.stk_changeme_type(uu),
  ----Prompt: ask the user if they need to create parent child relationships inside the table
  --parent_uu UUID REFERENCES private.stk_changeme(uu),
  ----Prompt: ask the user if they need to store json
  --record_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  ----Prompt: ask the user if they need to know when/if a record was processed
  --processed TIMESTAMPTZ,
  --is_processed BOOLEAN GENERATED ALWAYS AS (processed IS NOT NULL) STORED,
  search_key TEXT NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  primary key (uu, type_uu)
) PARTITION BY LIST (type_uu);
COMMENT ON TABLE private.stk_changeme_part IS 'Holds changeme records';

-- first partitioned table to hold the actual data -- others can be created later
CREATE TABLE private.stk_changeme_part_default PARTITION OF private.stk_changeme_part DEFAULT;

CREATE VIEW api.stk_changeme AS
SELECT stkp.* -- note all values reside in and are pulled from the stk_changeme_part table (not the primary stk_changeme table)
FROM private.stk_changeme stk
JOIN private.stk_changeme_part stkp on stk.uu = stkp.uu
;
COMMENT ON VIEW api.stk_changeme IS 'Holds changeme records';

CREATE TRIGGER t00010_generic_partition_insert
    INSTEAD OF INSERT ON api.stk_changeme
    FOR EACH ROW
    EXECUTE FUNCTION private.t00010_generic_partition_insert();

CREATE TRIGGER t00020_generic_partition_update
    INSTEAD OF UPDATE ON api.stk_changeme
    FOR EACH ROW
    EXECUTE FUNCTION private.t00020_generic_partition_update();

CREATE TRIGGER t00030_generic_partition_delete
    INSTEAD OF DELETE ON api.stk_changeme
    FOR EACH ROW
    EXECUTE FUNCTION private.t00030_generic_partition_delete();
---- primary_section end ----
```

## Test Transactions

Below are some sql statements you should be able to successfully execute through the api schema against your newly created chuck-stack concept.

```sql
insert into api.stk_changeme (name, type_uu) values ('test1',(select uu from api.stk_changeme_type limit 1)) returning uu;
update api.stk_changeme set name = 'test1a' where name = 'test1' returning name;
select * from api.stk_changeme;
delete from api.stk_changeme where name = 'test1a' returning uu;

-- sample json if you include a json column: {"id": 123, "name": "John Doe", "email": "john@example.com", "active": true, "metadata": {"age": 30, "city": "New York"}}
```
