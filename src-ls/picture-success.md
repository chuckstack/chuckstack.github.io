# Picture of Success

<!-- copied_from_home_page -->
Imagine a world where your operations team wrote work instructions and your system and people magically executed those work instructions for you. Image a world where IT no longer builds tools but instead helps your people build it themselves while ensuring everyone is bound by their documented roles. You do not need to imagine much longer.
<!-- /copied_from_home_page -->

## How is This Possible

Modern AI has a magical ability to understand and use our language to offer valuable opinions and execute tasks. More specifically, it understands work instructions (role, task, and tool definitions), and it can help us automate our organizations, increased velocity and improve efficiency.

## Problem - Too Many Window and Fields

There is a big problem with enterprise applications (like ERP) built over the last 20 years. They are too slow in almost every way. The development tooling is too complicated. They bombard the user with hundreds of fields which often go unused. They are incredibly difficult to test. And, they create tension between organization users and leaders.

## ChatGPT Showed Us a Better Way

ChatGPT re-introduced an amazingly simple yet effective user interface that offered one field: the command line. In the command line, you can type whatever you wish. ChatGPT is often smart enough to understand what you want and find a way to do it for you all from one command line.

## Simple Example

If you were to type the following into ChatGPT:

> show me the weather in Berlin and London

- The system is smart enough to look for existing tools that can offer real-time weather.
- It is smart enough to know that you want to call the get-weather-tool for both cities.
- And, it is smart enough to format the output is a human readable way.

These same concepts are true for most foundational large language models (LLM) like Claude and ChatGPT.

## Better Example

Let's apply this same concept to a customer service representative (CSR). The following exchange naturally follows the above example:

- CSR: please create a new sales order for Fred Flintstone, and accept all defaults. Products include 5x 1x4x12, 20x 2x6x8, 50lb penny nails.
- System: Done. Your order number is 100775. It is currently drafted, and it can ship as early as tomorrow.
- System: Would you like to complete the order?
- CSR: Yes, and please text Fred confirmation.
- System: Done and done.

## Get a Little Crazy

The reality is that a CSR that performs this task 50+ times a day will not be this conversational. They will develop codes to eliminate keystrokes. They will use a microphone when possible. The outsider looking in might not even understand the interaction because of all the abbreviated codes. That is OK. What matters is that the CSR and the system 1. share access to the right data, 2. makes his/her job as easy as possible, and 3. prevent mistakes.

This is just the beginning. There is no limit to the number of examples in an organization where someone wants to take a reasonably complicated process like order entry and distill it down to 5 bullets/interactions.

## Not that Crazy
People and systems are getting smarter and more capable. What used to take a team of clerks thousands of hours can now be accomplished by one superclerk in tens of hours. Let me give you this example:

> psql -AXqtc -f query-invalid-customer-address.sql | get entries | aichat -r address-fix-role

The above command shows what can happen when you develop superclerks and you give them the right tools to fix 300k+ addresses:

- psql is a tool that will query the database.
- -AXqtc are the psql arguments that shape the data so that it can be parsed.
- query-invalid-customer-address.sql contains the query to get 300k addresses to validate.
- get entries is a nushell command that extracts the entries.
- aichat is a command that communicates with ChatGPT or Claude to perform AI work.
- -r is the aichat argument that allows the clerk to pass in pre-existing work instructions.

You do not need to understand the details of the above scenario; however, you DO need to understand that a single person (superclerk) can write the above one-line string to perform the work of hundreds or even thousands or people hours. This is the power of the chuck-stack!

## All You Need are Work Instructions

ChatGPT (and LLM in general) are very good at understanding languages. This ability goes far beyond English and Spanish. SQL (databases) is a language. If you write it down, LLM can understand what you want. This is true for both English work instructions and code like SQL.

This brings us full circle back to the picture of success:

> Imagine a world where your operations team wrote work instructions and your system and people magically executed those work instructions for you. Image a world where IT no longer builds tools but instead helps your people build it themselves while ensuring everyone is bound by their documented roles.

If you want to supercharge your organization by filling it with superclerks, do the following:

- Write down your work instructions.
- Mobilize your technology team to install self-help tools like the chuck-stack.
- Hire smart people to do smart work.

If you want to learn more, join the stack-academy. TODO: link and details