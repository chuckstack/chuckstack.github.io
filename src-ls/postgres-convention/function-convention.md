# Function Convention

- All core chuck-stack function names should be `stk_`
- The function name should use a noun + verb format to describe its behavior
- An example function name: `stk_table_type_create`
- All function parameter names should end with `_p` suffix. For example: `name_p`
- All function declared variable names should end with `_v` suffix. For example: `name_v`
 <!-- - concept of function => create_from vs create_into -- attempt to support both when possible - TODO: better define these terms -->

## SECURITY DEFINER Functions

Functions that need elevated privileges use `SECURITY DEFINER` to run with function owner's permissions instead of caller's permissions.

**Security Requirement**: Always set `search_path` explicitly to prevent search path attacks where malicious users create objects that intercept function calls.

**PL/pgSQL functions** - Set search_path in function body:
```sql
CREATE FUNCTION api.example_function()
RETURNS void AS $$
BEGIN
    SET LOCAL search_path = private;
    -- Function code here
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

Note: `pg_catalog` is always in the search path by default and should not be explicitly included.

**SQL functions** - Fully qualify all object references:
```sql
CREATE FUNCTION api.example_function()
RETURNS text AS $$
    SELECT pg_catalog.array_agg(r.rolname)
    FROM pg_catalog.pg_roles r
    JOIN private.stk_actor a ON r.rolname = a.psql_user;
$$ LANGUAGE sql SECURITY DEFINER;
```
