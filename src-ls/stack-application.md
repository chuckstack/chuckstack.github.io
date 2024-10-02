# chuck-stack Application Framework

chuck-stack uses the above [tools](./stack-tools.md) and [best practices](./best-practices.md) to create an application framework for data and process management. Here are the framework goals:

- Minimize application framework code and complexity by using off-the-shelf tools that are easily understood by people and AI..
- Minimize the effort to create new business logic. Ideally, a single command will create the template for you. AI will draft the code for you.
- Maximize who in an organization can automate business logic by supporting role-based contracts where role boundaries are well defined and AI can help ensure proper [capability sandboxing](./stack-faq.html#what-is-capability-sandboxing) and data integrity.

Data management goes beyond simple CRUD (create, read, update and delete) database operations. The system needs to make the right data available to the right person at the right time to make their jobs easier. There are two key process features that make this vision a reality: 1) workflow and 2) attribute tagging.

When attempting to describe both workflow and attribute tagging overviews, the first paragraph is pretty much the exact same. It is quite impressive how similar these paragraphs are.

## Workflow Overview

Workflow is critical to data and process management. However, workflow is notoriously difficult. The concepts can be difficult to learn. The applications are often difficult to install and maintain, and they are either too complicated or overly simple. It is incredibly difficult to create a workflow architecture that is both generic enough and easy enough for broad adoption. AI will change the workflow landscape. What was previously tedious, is becoming a conversation.

## Attribute Tagging Overview

Attribute tagging is critical to ensure the system can properly describe its data. However, attribute tagging is notoriously difficult. The concepts can be difficult to learn. The applications are often difficult to install and maintain, and they are either too complicated or overly simple. It is incredibly difficult to create an attribute tagging architecture that is both generic enough and easy enough for broad adoption. AI will change the attribute landscape. What was previously tedious, is becoming a conversation.

## Workflow Details

chuck-stack Workflows can be broken down into 

### System Workflows

Here are the important types of system facing workflows.

- Before Events (save, delete, update): TODO - defined by psql
- After Events (save, delete, update): TODO - defined by psql
- Functions: TODO - defined by psql
- Interface Events: TODO (singleton or collection)
  - note that interface events can be triggered by user workflows
  - document validation is an example of an interface event

### User Workflows

Here are the important types of user facing workflows.

- Journal workflow: everyone in an organization should be able to record the events in an organization. More...
- Discussion workflow: everyone in an organization should be able to collaborate with others in an organization. More...
- To-do workflow: everyone in an organization should be able to manage a simple list of tasks. More...
- Checklist workflow: roles in an organization often have periodic prescribed tasks. Checklists are a predefined and templated to-do tasks. More...
- Queue workflow: as people manipulate data, some records will reach a state of importance. Queues are defined views into data that match a specific pattern automatically. When the pattern is found, present the user or role with the matching records.  More...
- Notice workflow: events happen, and sometimes users and systems need to be notified. The notification workflow provides information based on the events that occur in an organization.  More...
- Ad-hoc request workflow: users and systems often know what needs to happen and who needs to perform the action based on the events that occur in an organization. This is often referred to as institutional knowledge of action. Ad-hoc request workflows allow users or services to request action from a particular user, role or service.  More...
- Orchestrated request workflow: There are times when an organization needs a formal, multi-step, orchestrated process where a request follows a pre-defined path.

### Document Action Workflows

Document action workflows are simply an implementation of orchestrated request workflows that center around the life cycle of transactional documents such as orders, invoices, receipts, payments, statements, allocations, .... Here is an example life cycle of a Sales Order:

<!-- TODO ensure the Action and Status vocabulary terms are consistent with the pg_workflow repo -->
- Action - Status - Status Description
- Draft - Drafted - initial state representing an idea
- Prepare - Prepared - initial validations pass and it ready for further review
- Submit - Submitted - makes document eligible for downstream action (only applicable to orders to enable receipts, invoices, ...)
- Complete - Completed - terminal status for happy path
- Reverse Correct - Reverse Corrected - terminal status resulting in the creation of an anti-document (with opposite sign) with exact same document date as the original. Both the original and the resulting reversed documents will have the same status.
- Reverse Accrue - Reverse Accrued - terminal status resulting in the creation of an anti-document (with opposite sign) with document date set to a proposed new date. Both the original and the resulting reversed documents will have the same status.

## Attribute Tagging Details

Attribute tagging is the ability to associate a collection of attribute values with a given record. Any record can have many sets of attribute associated with it. The chuck-stack uses PostgreSQL's JSON capabilities to implement attribute tagging.

Before we get too far, we need to define some terms:

- **Attribute**: a dimension or descriptive characteristic. 
  - Examples include length, width, weight, type, category, Business Partner, ....
- **Attribute Value**: the answer or value associated with an Attribute. 
  - Examples include 10, "100lbs," "order", True, ...
  - Values can also be foreign keys to other tables such as a uuid pointing to a Business Partner table.
- **Attribute Set**: a collection of Attributes.
- **Attribute Set Instance**: an Attribute Set with its Attributes Values assigned.

<!-- TODO: add to terminology.md page - this is the definition and term points here -->

Here is an example of attribute tagging in chuck-steak:
TODO - finish draft
TODO - this section needs to be moved to conventions
TODO - need to explain that the psql json capabilities define what is possible. The chuck-stack convention reduces the capabilities to create structure and known practices.
TODO - need to discuss when to use a table (stk_business_partner) column (stk_payment_term) versus when to use an Attribute Set (instead of a new column).

- There is a table (stk_attribute_set) that points to all dedicated Attribute Set tables
- stk_attribute_set columns:
  - table_name
  - name
  - description
  - json_idx_text - holds the json constraint text that forms the attribute set structure
  - is_valid
  - plus all other mandatory chuck-steak columns
- There is a dedicated table per Attribute Set to hold its Attribute Set Instances (example: stk_attribute_set_contract)
- All dedicated Attribute Set tables have the same columns:
  - table_name
  - record_uu
  - value (holds the json containing the attribute set instance)
  - plus all other mandatory chuck-steak columns


