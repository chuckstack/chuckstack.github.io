# chuck-stack Application Framework

chuck-stack uses the above tools to create an application framework for data and process management. Here are the framework goals:

- Minimize application framework code and complexity by using off-the-shelf tools that are easily understood by people and AI..
- Minimize the effort to create new business logic. Ideally, a single command will create the template for you. AI will draft the code for you.
- Maximize who in an organization can automate business logic by supporting role-based contracts where role boundaries are well defined and AI can help ensure proper [capability sandboxing](./stack-faq.html#what-is-capability-sandboxing) and data integrity.

Data management goes beyond simple CRUD (create, read, update and delete) database operations. The system needs to make the right data available to the right person at the right time to make their jobs easier. There are two key process features that make this vision a reality: 1) workflow and 2) attribute tagging. Here are the details:

## Workflow
Workflow is critical to data and process management. However, workflow is notoriously difficult. The concepts can be difficult to learn. The applications are often difficult to install and maintain, and they are either too complicated or overly simple. It is incredibly difficult to create a workflow architecture that is both generic enough and easy enough for broad adoption. AI will change the workflow landscape. What was previously tedious, is becoming a conversation.

<!-- TODO: consider calling this User Facing Workflows to differentiate from developer workflows like events and functions. Or, consider labeling the below bullets with user/developer/system. -->

Here are the important types of workflow.

- Journal workflow: everyone in an organization should be able to record the events in an organization. More...
- Discussion workflow: everyone in an organization should be able to collaborate with others in an organization. More...
- To-do workflow: everyone in an organization should be able to manage a simple list of tasks. More...
- Checklist workflow: roles in an organization often have periodic prescribed tasks. Checklists are a predefined and templated to-do tasks. More...
- Queue workflow: as people manipulate data, some records will reach a state of importance. Queues are defined views into data that match a specific pattern automatically. When the pattern is found, present the user or role with the matching records.  More...
- Notice workflow: events happen, and sometimes users and systems need to be notified. The notification workflow provides information based on the events that occur in an organization.  More...
- Ad-hoc request workflow: users and systems often know what needs to happen and who needs to perform the action based on the events that occur in an organization. This is often referred to as institutional knowledge of action. Ad-hoc request workflows allow users or services to request action from a particular user, role or service.  More...
- Complex request workflow: There are times when an organization needs a formal, multi-step, orchestrated process where a request follows a pre-defined path. Consider calling this 'Orchestrated Request' workflow.

## Attribute Tagging

xxx
