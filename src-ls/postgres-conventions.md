# PostgreSQL Convention

The chuck-stack PostgreSQL conventions aim to create a consistent, convention-based, scalable, and maintainable database structure. 

We provide two high-level features by which most applications are built:

- Workflow - build around the `stk_wf_request` table and surrounding architecture
- Attribute Tagging - build around the `stk_attribute_tag` architecture

The below [convention summary](#convention-summary) creates a workflow and attributing tagging system that is both:

- Generic enough to support a wide variety of use cases
- Simple enough to support rapid adoption


> You can always ask AI (using AIChat) about any chuck-stack specific convention or PostgreSQL best practices and options. For example, you can ask AI:
>
>     It seems more secure to disable PostgreSQL's TCP service and require clients to connect via unix socket. Is this true?

## Convention Summary

Here are the goals that drive our conventions:

- Maximize ↑ use of conventions and AI assistance to reduce learning/development time and complexity
- Minimize ↓ the number of experts needed to articulate and deploy a new feature

Here is a summary of our conventions. Click on any link to learn more.

1. Database Schema Structure:
   - Private schema (`private`) to encapsulate the internal data model and logic
   - Public API schema (`api`) to expose a public interface providing data and logic to the outside world in a controlled way

2. Table Conventions:
   - Use a single UUID primary key column named `uu` to support universal `table_name` + `record_uu` lookup across all tables
   - Prefix core tables with `stk_`
   - Use noun-first naming (e.g., `stk_order_line`)
   - Minimize abbreviations to a known list to ensure maximum schema readability

3. Column Conventions:
   - Use mandatory columns: `stk_entity_uu`,`created`,`created_by_uu`,`updated`,`updated_by_uu`.
   - All madatory columns are set automatically during save because of either default value or triggers
   - All tables return automatically generated `table_name` and `record_uu` columns for easy and generic looks for attributes, statistics, change logs, ...
   - Use `_uu` suffix for foreign keys
   - Use `text` type instead of `varchar` when possible
   - Boolean columns must have default values

4. Enum and Type Conventions:
   - Most important tables have have a supporting `_type` table where users can describe that record's behavior
   - Example: `stk_actor` table has a `stk_actor_type` table that describes the type of actor
   - `_type` tables use enums for code-level logic
   - No `_uu` references should be made from code
   - Only enums should be referenced from code

5. Function Conventions:
   - Use `_p` suffix for function parameters
   - Use `_v` suffix for function variables

6. Trigger Conventions:
   - Triggers are heavily used to manage events in the chuck-stack
   - The `private.stk_trigger_create()` function helps ensure core trigger functions are applied to all tables

7. Attribute Tagging:
   - Makes use of the `table_name` and `record_uu` convention to associate an attribute tag to any record
   - Use JSON for flexible attribute storage (`stk_attribute_tag` table)

8. System Configuration:
   - Use `stk_system_config` table for system-wide settings

9. Statistics:
   - Makes use of the `table_name` and `record_uu` convention to associate a statistic to any record
   - Use `stk_statistic` table for denormalized statistical data

10. Scalability Considerations:
    - Use connection pooling
    - Implement table partitioning
    - Utilize physical/streaming replicas and logical replicas
