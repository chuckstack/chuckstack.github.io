# Private and API Schema

We use multiple PostgreSQL schemas to create and expose our application logic to the rest of the world in a consistent and secure manner.

## Private Schema 

We start with a private schema where we define our data model. The schema is named `private` as a convention because no outside system should interact with this internal schema directly. Said another way, the private schema is used to insulate internal details from the outside world.

The private schema primarily consists of:

- tables to persist data
- functions to automate workflow

## API Schemas

We create at least one publicly available api schema. The purpose of the api schemas are to expose [semantically versioned interfaces](https://en.wikipedia.org/wiki/Software_versioning) to the outside world. It is possible to maintain multiple api schemas simultaneously in situations where you need two or more major versions versions available at the same time.

If you support a single exposed schema, you name the publicly available schema `api`. If you plan to support multiple schemas simultaneously, you can include the major version number in the schema name like `api_v1` or `api_v2`. It is not common to support multiple versions at the same time; however, it does happen.

The separation between private and api schemas allows you to change the private data structure and logic representations while publicly maintaining semantic version control. 

The api schema will most commonly consist of:

- pass-through views for each of the private tables that can be exposed
- convenience functions for data CRUD (create, read, updated and delete)

An overly simple example of an api pass-though view would be:

```sql
CREATE VIEW api.stk_todo AS SELECT * FROM private.stk_todo;
```

Note that PostgreSQL scopes the namespace for tables, view and functions at the schema level. This means you can have an api view named `api.stk_todo` and a private table named `private.stk_todo` in the same database. This fact is extremely convenient both in terms of managing the `private` versus `api` schema relationships as well as the public `api_v1` vs `api_v2` schemas should you need multiple api versions.
