# Chuck-Stack Data Management Philosophy

## The Problem: ERP is Too Hard

After 20+ years working with iDempiere and similar systems, one truth emerges: **ERP is too hard**. Even in "flexible" systems where you can create tables without code:
- Asking for help requires technical translation
- Creating new processes requires developers
- Simple changes become complex projects

**The Chuck-Stack Vision**: Users should be able to ask AI for anything - maintaining records, creating relationships, building features - and have it just work.

## Summary

Chuck-stack's data philosophy enables a future where:
- Users describe what they want in plain language
- AI assistants can safely implement changes
- The system evolves without constant DDL changes
- Business logic remains consistent and validated

The goal isn't "no DDL" - it's "appropriate DDL" combined with disciplined use of flexible storage patterns. This creates an ERP that's finally easy enough for everyone to use.

## The Solution: Deliberate Data Design

Chuck-stack enables this vision through a deliberate approach to data storage that balances structure with flexibility.

### Core Principle: Not Everything Should Be DDL

Traditional ERPs suffer from over-normalization:
- iDempiere's sales order tables have 100+ columns
- Every attribute requires a new column
- Every relationship needs a foreign key
- End users can't adapt without IT help
- A single record deletion can take down the entire system

Chuck-stack uses PostgreSQL's JSON capabilities - a "double-edged knife" that's powerful but needs discipline. We maintain structure through "electrified" (ai-enabled) work instructions rather than rigid schemas.

## Data Storage Strategy

### 1. Foreign Keys - For Permanent, Required Relationships

- When to use: Relationships that are almost always true and required
- When to avoid: Optional or changing relationships
- Key Pattern: "Seldom FK not null after record is processed" - Even required relationships allow NULL for draft saving. Validation happens at the appropriate layer, not database constraints.

### 2. record_json - For Entity-Specific Attributes

**Purpose**: Store attributes that belong to this specific record

**Governance**: Type tables contain JSON schemas that guide (not enforce) structure
```sql
-- stk_project_type might define expected fields
{
  "properties": {
    "budget": {"type": "number"},
    "deadline": {"type": "string", "format": "date"}
  }
}
```

### 3. stk_tag - For Reusable Data Patterns

**Purpose**: Attach consistent data structures to any record
- Addresses (same structure for any entity)
- Phone numbers
- Classifications
- Notes

**Key Feature**: Uses `table_name_uu_json` to attach to any table:
```json
{
  "table_name": "stk_project",
  "uu": "123e4567-e89b-12d3-a456-426614174000"
}
```

### 4. stk_link - For Flexible Many-to-Many Relationships

**Purpose**: Create optional many-to-many relationships without schema changes
- Link contacts to multiple projects
- Associate documents with any record
- Build networks of relationships

## The "AI Test"

Every design decision should pass this test: **"Can AI implement this user request with minimal to no DDL changes?"**

✅ **Passes the test:**
- "Add warranty tracking to products" → Use record_json
- "Link contacts to multiple departments" → Use stk_link
- "Track shipping addresses" → Use stk_tag with address type
- "Add custom fields to projects" → Use record_json with type schema

❌ **Requires DDL** (and that's OK when truly needed):
- "Create equipment tracking system" → New first-class citizen table
- "Add core manufacturing module" → New set of tables

## Benefits of This Approach

1. **User Empowerment**: Users can extend the system through natural language requests
2. **AI-Friendly**: AI can safely operate without breaking changes
3. **Maintains Integrity**: Work instructions provide structure without rigidity
4. **Performance**: Focused tables with appropriate indexes
5. **Evolution**: System can grow without constant migrations

## Decision Framework

When adding new data requirements, ask:

1. **Is this a new first-class business concept?**
   - Yes → Create new table (rare but important)
   - No → Continue to next question

2. **Is this relationship always required and permanent?**
   - Yes → Use foreign key
   - No → Use stk_link

3. **Is this data reusable across different entities?**
   - Yes → Use stk_tag
   - No → Use record_json

4. **Does this need type-specific structure?**
   - Yes → Define JSON schema in type table
   - No → Free-form JSON is fine

## Work Instructions as Validators

The "double-edged knife" of JSON is managed through:
- Type schemas that guide structure
- Validation functions that ensure consistency
- Work instructions that document patterns
- AI assistants that follow established conventions

This isn't about avoiding structure - it's about putting structure in the right place to maximize both flexibility and integrity.

