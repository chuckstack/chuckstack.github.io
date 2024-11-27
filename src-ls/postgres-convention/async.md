# Async

The purpose of this page is to describe how the chuck-stack supports asynchronous events. 

## Summary

The database goes to great lengths to execute event/trigger functions in a synchronous transaction; however, there are times when these function's execution time can be unpredictable or long-running. 

we need an asynchronous solution to execute additional event functionality without blocking a transaction and creating a slow user experience.

## Considerations

Here are our needs from our asynchronous solution:

- **audit** - verify that an event occured
- **replay** - in case of error, provide a way to remedy a situation and re-execute the event
- **batch** - provide a way to process multiple events in a single execution
- **notify** - send pg_notify signal to provide a PostgreSQL specific signal
- **webhook** - send a signal to resources outside of PostgreSQL
