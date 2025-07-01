# Success Using PostgreSQL

PostgreSQL plays a critical role in our success. How we plan to create that success is largely attributable to the documentation and practices of [PostgREST.org](./tool-postgrest.md). They paved a way to move user and organization logic previously trapped in an application server to the database itself. They proved the concept was more than possible, it was actually advantageous. 

When the concepts in this page are fully implemented in the chuck-stack, this page will go away, and its contents will be move to other functional areas. Until then, this information represents our plan and our partial implementation.

## TOC

<!-- toc -->

## User and Role Management

User management plays a small part is how the chuck-stack operates. Almost all logic is tied to a role. PostgREST gives us a great roadmap for accomplishing this task.

Here is a quick description of how chuck-stack manages users and roles:

- Users will be created in PostgreSQL with no privileges. 
- Users will be granted access to a PostgreSQL role.
- This concept is called impersonation where the user logs in and quickly moved to a role.
- After the login is complete, all authorization is performed at the role level.

Here is an example of impersonation:
```sql
create role some_role nologin;
grant usage on schema private to some_role;
grant select on private.stk_business_partner to some_role;
create role some_user_auth noinherit login password 'some_password';
grant some_role to some_user_auth;

psql -d some_db -U some_user_auth -c "set SESSION ROLE some_role" -c "select * from adempiere.c_bpartner limit 1"
```

If you remove the "-c ... set ROLE ..." command, the psql statement will fail with a "permission denied" error because the some_user_auth role does not have any privileges.

This example shows just how easily we can provide user management yet ensure that no user capabilities spill into role-based organization logic.

<!-- the following is duplicated in multiple places including success-postgresql -->
It is worth noting that user and role management is shared in both Linux and PostgreSQL. While these responsibilities exist in both planes, they are not duplicated. Linux dictates role-based tool access and how the user connects to the database. PostgreSQL dictates data access inside the database.

Reference: [PostgREST Authentication](https://docs.postgrest.org/en/v12/references/auth.html)

## Session Variables

A big requirement of enterprise systems is managing a user's context inside the application. The above example of switching from the user to the role is great for simplifying organization logic; however, the system still needs to know what user performed what action.

The chuck-stack uses another concept from PostgREST to set session variables (context) using PostgreSQL's configuration settings. Here is an example where any organization logic can check session variable details during a process.

```sql
CREATE OR REPLACE FUNCTION check_user() RETURNS void AS $$
DECLARE
  email text := current_setting('stk.variable', true)::json->>'email';
BEGIN
  IF email = 'some_joe@bad.com' THEN
    RAISE EXCEPTION 'No, you are not allowed'
      USING HINT = 'Some additional details about the situation';
  END IF;
END
$$ LANGUAGE plpgsql;
```

Setting these variables during psql execution is easy ([see success with Linux](./success-linux.md)). Checking them during program execution is easy as demonstrated above.

## SQL plus psql

The purpose if this section is to highlight that chuck-stack not only benefits from SQL (one of the technical world's most well understood languages), but it also benefit from the psql application. psql is powerful SQL application in its own right that has additional features for a) helping users do their jobs and b) helping the stack protect its data and processes from attach (like sql injection).

## Case for psql

If we can use the psql PostgreSQL CLI tool to access the database, we get the following advantages:

- We can use environment variables and .pgpass to specify database connection details
- We can use psql's variable capabilities to maintain and execute SQL templates (as well as the many, many other psql capabilities)
- We prevent needing to code our own connection tool
- We create a consistent way to connect to the database across many scenarios

## SQL Encapsulation

The [PostgreSQL Convention](./postgres-conventions.md#schema) highlights how we use two schemas to provide :

- a public (`api`) facing schema to allow for direct interactions via the CLI and REST and
- a private (`private`) facing schema to allow to data representation encapsulation. 

## Configuration Management

The chuck-stack uses sqlx-cli to track and deploy SQL migration scripts. Here is a [sample todo chuck-stack migration repository](https://github.com/chuckstack/chuck-stack-core/tree/main). It is part of the [chuck-stack todo sample application](https://github.com/chuckstack/chuck-stack-nix/blob/main/nixos/stk-todo-app.nix).

Note that we use a NixOS service to manage and automatically deploy migrations when needed.

## Technical Details and Examples

The purpose of this section is to highlight simple examples that demonstrate the concepts described above.

References:

- [PostgreSQL docs => Configuration Setting Functions](https://www.postgresql.org/docs/current/functions-admin.html#FUNCTIONS-ADMIN-SET)
- [psql variables demo](https://www.depesz.com/2023/05/28/variables-in-psql-how-to-use-them/)

From inside psql without modifying postgresql.conf:

```sql
select set_config('test.test.test.one','truly',false);
select current_setting('test.test.test.one',true);

 current_setting
-----------------
 truly
```
From inside psql after modifying postgresql.conf to set test.chuboe='init':

```sql
select current_setting('test.chuboe',true);

 current_setting
-----------------
 init
```

```sql
select set_config('test.chuboe','post-set',false);  --false says available outside of trx but only in session  --true says only in trx

 set_config
------------
 post-set
```

```sql
select current_setting('test.chuboe',true);

 current_setting
-----------------
 post-set
```

From command line - set temporarily after postgresql.conf updated (but postgresql.conf edit not needed)

```bash
psqli -c "SET test.chuboe = 'some-other'" -c "select current_setting('test.chuboe',true)"

 current_setting
-----------------
 some-other
```

From command line - random parameter - not set in postgresql.conf

```bash
psqli -c "SET gabe.chuboe1 = 'some-other1'" -c "select current_setting('gabe.chuboe1',true)"

 current_setting
-----------------
 some-other1
```
