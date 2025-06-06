# Nushell + PostgreSQL Best Practices

## Summary

The purpose of this page is to highlight common chuck-stack practices with using `psql` with Nushell. If you have questions, comments or concerns about this content, do not hesitate to offer feedback or create an issue at https://github.com/chuckstack/chuckstack.github.io

## Critical Rule: Escape Opening Parentheses in SQL

When using nushell string interpolation (`$"..."`), escape opening parentheses that need to appear in the final SQL string:

```nushell
# ✅ Correct - variable interpolation (no escape needed)
$"SELECT * FROM ($table_name)"

# ✅ Correct - SQL syntax (escape needed)  
$"SELECT COUNT\(*) FROM ($table_name)"
$"INSERT INTO users \(name, email) VALUES \('($name)', '($email)')"
$"WHERE id IN \(1, 2, 3)"

# ❌ Wrong - will cause parser errors
$"SELECT COUNT(*) FROM table"
$"INSERT INTO users (name, email)"
```

**Error you'll see:** `nu::parser::assignment_requires_variable`

## Command Execution

Use input piping, avoid `echo`:

```nushell
# ✅ Best practice
$sql | psql

# ✅ Acceptable (redundant but works)
echo $sql | psql  

# ❌ Avoid  
psql -c $sql
```

## Foundation Pattern: psql exec

Create a common `psql exec` command to encapsulate best practices:

```nushell
# Centralized execution with automatic type conversion
export def "psql exec" [query: string] {
    with-env {PSQLRC: ".psqlrc-nu"} {
        mut result = $query | psql | from csv --no-infer
        
        # Auto-convert common column patterns
        let date_cols = $result | columns | where {|x| $x == 'created' or $x == 'updated'}
        if not ($date_cols | is-empty) {
            for col in $date_cols { $result = $result | into datetime $col }
        }
        
        let bool_cols = $result | columns | where {|x| $x | str starts-with 'is_'}
        if not ($bool_cols | is-empty) {
            for col in $bool_cols { $result = $result | update $col { $in == "t" } }
        }
        
        $result
    }
}
```

## Configuration: .psqlrc-nu

Use dedicated psql configuration for nushell integration:

```bash
# .psqlrc-nu file
\set QUIET 1
\set ON_ERROR_ROLLBACK
\pset null 'null'
\pset footer off  
\pset format csv
```

## Module Architecture Pattern

Build reusable generic commands, then compose them:

```nushell
# Generic foundation
export def "psql list-records" [
    schema: string, table: string, columns: string, limit: int = 10
] {
    psql exec $"SELECT ($columns) FROM ($schema).($table) ORDER BY created DESC LIMIT ($limit)"
}

# Module-specific wrapper  
export def "event list" [] {
    psql list-records "api" "stk_event" "name, created, uu" 10
}
```

## Common Patterns

```nushell
# Table exists check
$"SELECT EXISTS \(SELECT FROM information_schema.tables WHERE table_name = '($table)');" | psql exec | get 0.exists

# Row count
$"SELECT COUNT\(*) FROM ($table);" | psql exec | get 0.count

# Function call with parameters
$"SELECT api.create_user\('($name)', '($email)');" | psql exec

# Soft delete pattern
$"UPDATE ($table) SET revoked = now\() WHERE uu = '($uu)' RETURNING uu, is_revoked" | psql exec
```

## Environment Setup

```nushell
# Set connection variables
$env.PGHOST = "localhost"
$env.PGDATABASE = "mydb"  
$env.PGUSER = "myuser"

# Use dedicated role and session
$env.STK_PG_ROLE = "stk_role"
$env.STK_PG_SESSION = "session_id"
```

## Error Handling

```nushell
# Let psql exec handle the details, check for empty results
let result = psql exec $sql
if ($result | is-empty) {
    error make { msg: "No results found" }
}
$result
```

## Debug Tip

Always print complex SQL first:

```nushell
let sql = $"SELECT EXISTS \(SELECT FROM table WHERE name = '($name)');"
print $sql  # Verify escaping looks correct
$sql | psql exec
```

## Leveraging psql Advanced Features

Use psql variables to give SQL files superpowers:

```nushell
# Set psql variables from nushell
$"\\set user_id ($user_id)\n\\set table_name ($table)" | psql -f complex_query.sql

# Use psql conditionals and variables in SQL files
let sql = $"
\\set ON_ERROR_STOP on
\\if :{?debug}
  \\echo 'Debug mode enabled'
\\endif

SELECT * FROM :table_name WHERE user_id = :user_id;

\\if :{?verbose}
  \\echo 'Query completed'
\\endif
"
$sql | psql --set debug=1 --set verbose=1
```

Example SQL file with psql superpowers:
```sql
-- migration.sql
\set migration_name 'add_user_table'
\echo 'Starting migration:' :migration_name

\if :{?dry_run}
  \echo 'DRY RUN MODE - No changes will be made'
  BEGIN;
\endif

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

\if :{?dry_run}
  ROLLBACK;
  \echo 'DRY RUN completed - changes rolled back'
\else
  \echo 'Migration' :migration_name 'completed successfully'
\endif
```

Call from nushell:
```nushell
# Normal execution
psql -f migration.sql

# Dry run mode  
psql -f migration.sql --set dry_run=1

# With custom variables
psql -f migration.sql --set table_prefix=prod_
```

## Memory Aid

- `($variable)` = nushell processes it → no escape
- `\(sql syntax)` = literal character → escape needed
- Build foundation commands, compose them in modules
- Use `.psqlrc-nu` for consistent formatting
- Leverage psql variables (`:variable`) for advanced SQL scripting
