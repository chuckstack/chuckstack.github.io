# Event

The purpose of this page is to describe how the chuck-stack captures events.

## Summary

There are a significant number of events that occur during the operation of an organization. You need an easy, fast and reliable way to capture these events for future audit or analysis.

## Examples

Here are examples of events you might wish to capture:

- **Operation** - such as system outage/restoration, equipment activity, inventory changes, ...
- **Security** - such as system access, permission changes, ...
- **Compliance** - process acknowledgement, training completion, risk threshold, review completion, ...
- **more** - IT system events, employee events, project events, quality system events, ...

## Usage

Logging an event is as simple as inserting a record into the `stk_event` table with the desired type.

## Details

Tables:

- stk_event
- stk_event_type
