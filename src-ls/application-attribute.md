# chuck-stack Application Attribute Tagging

The purpose of this page is to introduce the concept of chuck-stack attribute tagging.

This page is broken down into the following topics:

- Summary
- Architecture
- Use Cases

## TOC

<!-- toc -->

## Summary

The purpose of attribute tagging is to provide a simple and consistent way to describe events and details about a record.

In traditional database schemas, an data architect would add additional columns or link tables to reflect additional attributes. This implementation style is valid and prove; however, it suffers from some issues:

- Tables grow to hundreds of columns
- Applications built on top of these table require custom logic to know how to treat and display each column
- Each table encapsulates (and potentially duplicates) logic that could otherwise be generally reasoned about

The chuck-stack attribute tagging architecture allows users a more generic solution to describe your data (in addition to preserving the ability to add additional columns as you deem appropriate) to gain the following benefits:

- simplify UI design when managing data ([CRUD](./terminology.md#crud))
- simplify minimize and simplify code to perform generic workflow operations

## Architecture

See [attribute tagging convention](./postgres-convention/attribute-tag.md).

## Use Cases

The purpose of this section is to highlight use cases where attribute tagging improves the quality of operations.

### Quality Management

Identify nonconforming records and events... example:

- late shipments
- non-conforming inventory receipt

Aggregating and presenting quality management tags over a period of time helps [prove what you did](./best-practices-operation-prove.md) and [look for opportunities to improve](./best-practices-operation-improve.md).

### Human Performance

Identify coaching moments... example:

- did great ...
- good example of ...
- opportunity to improve ...
