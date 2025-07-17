# Sample Table

The purpose of this page is to guide you through creating a new chuck-stack concept. Chuck-stack has developed a streamlined migration creation process with templates and tools that make table creation systematic and consistent.

## Migration Creation Process

Chuck-stack uses a template-based approach for creating new database tables. The process and tools are maintained in the [chuck-stack-core repository](https://github.com/chuckstack/chuck-stack-core):

- **Migration Template**: `chuck-stack-core/migrations/sample-table.sql.template`
- **Partition Converter**: `chuck-stack-core/migrations/sample-table-convert-to-partition.sh`
- **Process Documentation**: `chuck-stack-core/migrations/MIGRATION_NOTES.md`

For detailed instructions on creating migrations, see the [MIGRATION_NOTES.md](https://github.com/chuckstack/chuck-stack-core/blob/main/migrations/MIGRATION_NOTES.md) which provides:
- Quick start commands
- Step-by-step process
- Design decision guidance
- Testing instructions

## Quick Overview

1. **Get timestamp**: `date +%Y%m%d%H%M%S`
2. **Copy template**: `cp sample-table.sql.template YYYYMMDDHHMMSS_core_stk-tablename.sql`
3. **Convert to partitioned** (if needed): `./sample-table-convert-to-partition.sh YYYYMMDDHHMMSS_core_stk-tablename.sql`
4. **Replace changeme**: `sed -i 's/changeme/tablename/g' YYYYMMDDHHMMSS_core_stk-tablename.sql`
5. **Make design decisions**: Search for `----Prompt:` and work through each decision
6. **Test locally**: Use the test environment

## Design Decision Process

The migration template includes prompts that guide you through key design decisions. Each `----Prompt:` comment asks about a specific feature your table might need:

- **Entity assignment**: For accounting/posting records
- **JSON storage**: For flexible metadata
- **Table references**: For linking to other tables
- **Templates**: For reusable configurations
- **Validation**: For data validation needs
- **Hierarchies**: For parent/child relationships
- **Master/detail**: For header/line structures
- **Processing status**: For workflow tracking

Work through each prompt methodically, considering your specific use case before uncommenting features.

## What The Template Creates

The migration template follows chuck-stack conventions to create a complete database structure:

- **Enum type** for code automation ([enum conventions](./enum-type-convention.md#enum-convention))
- **Type table** as user-facing facade ([type conventions](./enum-type-convention.md#type-convention))
- **Main table** with standard columns ([column conventions](./column-convention.md))
- **API views** for controlled access ([schema conventions](./schema.md))
- **Triggers** for audit and session tracking ([trigger conventions](./trigger-convention.md))
- **Comments** for documentation ([comment conventions](./comment.md))

## Example: Creating a Request Table

Here's a concrete example of the migration process:

```bash
# 1. Generate timestamp
date +%Y%m%d%H%M%S
# Output: 20250713120000

# 2. Copy template
cd chuck-stack-core/migrations
cp sample-table.sql.template 20250713120000_core_stk-request.sql

# 3. Replace changeme with request
sed -i 's/changeme/request/g' 20250713120000_core_stk-request.sql

# 4. Search for design prompts
grep -n "----Prompt:" 20250713120000_core_stk-request.sql

# 5. Make decisions for each prompt:
# - Entity assignment? Yes - requests tied to customers
# - JSON storage? Yes - flexible request metadata
# - Templates? No - each request is unique
# - Validation? Yes - ensure request data integrity
# - Hierarchies? No - flat structure
# - Processing? Yes - track request fulfillment

# 6. Test the migration
cd ../test
nix-shell
# Run migration and test
```

## Partitioning Considerations

Most chuck-stack tables don't require partitioning. Consider partitioning only for:
- High-volume transactional data (millions of records)
- Time-series data requiring efficient archival
- Tables with clear partition boundaries (by type, date, etc.)

To convert to partitioned table:
```bash
./sample-table-convert-to-partition.sh your-migration-file.sql
```

The converter automatically:
- Creates primary/partition table structure
- Sets up proper foreign key relationships
- Adds partition management triggers
- Maintains chuck-stack conventions

## Migration Testing

Always test migrations in the local environment before deployment:

1. Use the test environment: `cd chuck-stack-core/test && nix-shell`
2. Apply your migration
3. Verify table creation and constraints
4. Test CRUD operations through API views
5. Confirm triggers fire correctly

See [TESTING_NOTES.md](https://github.com/chuckstack/chuck-stack-core/blob/main/test/TESTING_NOTES.md) for complete testing guidance.

## Test Transactions

After creating your table, verify it works correctly with these test statements:

```sql
-- Insert test record
insert into api.stk_changeme (name, type_uu) 
values ('test1', (select uu from api.stk_changeme_type limit 1)) 
returning uu;

-- Update record
update api.stk_changeme 
set name = 'test1a' 
where name = 'test1' 
returning name;

-- Query records
select * from api.stk_changeme;

-- Delete record
delete from api.stk_changeme 
where name = 'test1a' 
returning uu;

-- If using record_json column:
-- {"id": 123, "name": "John Doe", "email": "john@example.com", "active": true, "metadata": {"age": 30, "city": "New York"}}
```

## Related Documentation

- **Migration Process**: [MIGRATION_NOTES.md](https://github.com/chuckstack/chuck-stack-core/blob/main/migrations/MIGRATION_NOTES.md) - Complete migration guide
- **Testing**: [TESTING_NOTES.md](https://github.com/chuckstack/chuck-stack-core/blob/main/test/TESTING_NOTES.md) - Test environment setup
- **Modules**: [MODULE_DEVELOPMENT.md](https://github.com/chuckstack/chuck-stack-core/blob/main/modules/MODULE_DEVELOPMENT.md) - Creating nushell modules
- **Conventions**: See other pages in this [postgres-convention](../postgres-conventions.md) section for detailed conventions
