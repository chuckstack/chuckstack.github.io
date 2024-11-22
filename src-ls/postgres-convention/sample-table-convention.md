# Sample Table

The purpose of this section is to make it as easy to create a new entity as possible. All you need to do is copy the below sql and perform a replace-all on 'changeme' to set the desired name. Here is an example vim substitute command to update 'changeme' to 'wf_request':

```vim
:%s/changeme/wf_request/g
```
The below represents a template for creating a new entity. The below sql code does the following:

- creates an enum (for code)
- adds comments to each enum value
- creates a facade type table around the enum (for users)
- creates the actual table with a reference to the type
- exposes the tables to the api schema
- adds comments to each table
- adds triggers to each table to set session data

```sql
-- set session to show stk_superuser as the actor performing all the tasks
SET stk.session = '{\"psql_user\": \"stk_superuser\"}';

CREATE TYPE private.stk_changeme_type_enum AS ENUM (
    'NONE',
    'ACTION'
);
COMMENT ON TYPE private.stk_changeme_type_enum IS 'Enum used in code to automate and validate changeme types.';

INSERT INTO private.enum_comment (enum_type, enum_value, comment) VALUES
('stk_changeme_type_enum', 'NONE', 'General purpose with no automation or validation'),
('stk_changeme_type_enum', 'ACTION', 'Action purpose with no automation or validation')
;

CREATE TABLE private.stk_changeme_type (
  stk_changeme_type_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT GENERATED ALWAYS AS ('stk_changeme_type') STORED,
  record_uu UUID GENERATED ALWAYS AS (stk_changeme_type_uu) STORED,
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_type_createdby FOREIGN KEY (created_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_type_updatedby FOREIGN KEY (updated_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_default BOOLEAN NOT NULL DEFAULT false,
  stk_changeme_type_enum private.stk_changeme_type_enum NOT NULL,
  ----uncomment the next lines if needed
  --stk_changeme_type_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  search_key TEXT NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme_type IS 'Holds the types of stk_changeme records. To see a list of all stk_changeme_type_enum enums and their comments, select from api.enum_value where enum_name is stk_changeme_type_enum.';

CREATE VIEW api.stk_changeme_type AS SELECT * FROM private.stk_changeme_type;
COMMENT ON VIEW api.stk_changeme_type IS 'Holds the types of stk_changeme records.';

CREATE TABLE private.stk_changeme (
  stk_changeme_uu UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT generated always AS ('stk_changeme') stored,
  record_uu UUID GENERATED ALWAYS AS (stk_changeme_uu) stored,
  created TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_createdby FOREIGN KEY (created_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  updated TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_updatedby FOREIGN KEY (updated_by_uu) REFERENCES private.stk_actor(stk_actor_uu),
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_template BOOLEAN NOT NULL DEFAULT false,
  is_valid BOOLEAN NOT NULL DEFAULT true,
  stk_changeme_type_uu UUID NOT NULL,
  CONSTRAINT fk_stk_changeme_type FOREIGN KEY (stk_changeme_type_uu) REFERENCES private.stk_changeme_type(stk_changeme_type_uu),
  ----uncomment the next lines if needed
  --stk_changeme_parent_uu UUID,
  --CONSTRAINT fk_stk_changeme_parent FOREIGN KEY (stk_changeme_parent_uu) REFERENCES private.stk_changeme(stk_changeme_uu),
  --stk_changeme_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  search_key TEXT NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT
);
COMMENT ON TABLE private.stk_changeme IS 'Holds changeme records';

CREATE VIEW api.stk_changeme AS SELECT * FROM private.stk_changeme;
COMMENT ON VIEW api.stk_changeme IS 'Holds changeme records';

-- create triggers for newly created tables
SELECT private.stk_trigger_create();
SELECT private.stk_table_type_create('stk_changeme_type');
```
