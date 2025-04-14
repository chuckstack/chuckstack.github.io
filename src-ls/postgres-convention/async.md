# Async

The purpose of this page is to describe how the chuck-stack supports asynchronous events. 

## Summary

The database goes to great lengths to execute event/trigger functions in a synchronous transaction; however, there are times when these function's execution time can be unpredictable or long-running. 

chuck-stack provides several ways to execute event functionality without blocking a transaction and creating a slow user experience.

## Considerations

Here are our needs from our asynchronous solution:

- **audit** - audit/prove that an event occured
- **replay** - in case of error, provide a way to remedy a situation and re-execute the event
- **batch** - provide a way to process multiple events in a single execution
- **notify** - send pg_notify signal to provide a PostgreSQL specific signal (see [Notify](./notify.md))
- **webhook** - send a signal to resources outside of PostgreSQL

## Usage

Here are the steps to perform an asynchronous operation:

- Write a record into `stk_async` with the appropriate `stk_async_type` indicating that you need an operation performed
- Determine how you wish to process the asynchronous operation:
  - Create a function that batch processes the unprocessed records on a timer
  - Create an application that uses the existing pg_notify() message that gets generated after insert to perform a more real-time execution (see [Notify](./notify.md))
  - Extend the chuck-stack to perform an http webhook to notify external systems of the pending operation

## Details

Tables:

- `stk_async`
- `stk_async_type`
