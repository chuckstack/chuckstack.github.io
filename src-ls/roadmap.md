# Roadmap

The purpose of this page is to describe the application framework progress and deployment roadmap.

## Summary

<!-- TODO: link to goals -->
It is important to understand that the chuck-stack is not a typical software project. The goals are to support small and medium sized organizations by bringing together existing tools to create a platform. As such, most of the advancements of this project relate more to convention, configuration, documentation and deployment rather than coding.

## Upcoming Milestones

- more immediate
  - finish table_name and record_uu column convention (make all tables first-class citizens)
  - improve using nu to show data from database (complex nested JSON objects)
  - start reasoning about a 'window' that defined dynamic validation for FK
  - create remaining workflow objects
- thinking about
  - determine role strategy to allow nix-shell to deliver role tools for a given user (map between user and role)
  - create first agent (including rag + prompt + tools)
  - integrate obsidian => git into auto-deployed playground with rag

## Completed Milestone

### Week of 2024-12-13

- ...

### Week of 2024-11-08 through 2024-12-06

- created [documentation](./postgres-convention/sample-table-convention.md) and testing for table partitioning
- created first version of session with user and entity details
- created first set to trigger management tools (primary way to implement event-based workflow)
- refined enum + type + primary tables with provided samples
- created following basic entities: actor, attribute tag, change log, entity (financial), request (workflow), statistic (denormalized data), system configurator (settings)
- created first [async](./postgres-convention/async.md) implementation
- improved integration with [aichat](https://github.com/sigoden/aichat) 
  - sql tool (psql vs usql)
  - added documentation to test environment - started to use docs and DDL in inference
- created sequence naming/numbering convention to enforce proper execution sequence
- resolved [tenant](./terminology.md#tenant) and [entity](./terminology.md#entity) strategy
- deployed first aichat playground to support interacting with work instructions
- deployed obsidian as a work instruction writing tool (phone, tablet, computer) that also commits to a git review workflow


### Week of 2024-11-01

- Updated tools-incus to include better hardware getting started and budget
- deployed first production stack to collect www.chuck-stack.org form submissions based on the stk_todo app
- updated NixOS + stk_todo => nix-shell to run sqlx migrations as local db superuser (not postgres superuser)
- created first version of stk_change_log - respresents first event


### Week of 2024-10-25

- create nginx-fail2ban as first layer of protection against ssh, http and https
- updated nginx to allow for most strict access and block openapi/swagger if needed
- resolved initdb and made consistent between nixos and nix-shell test
- created first postgrest process to accept web form submissions

### Week of 2024-10-18

- completed version 2 of the simple todo app
- replicate iDempiere's dashboard layout in Zellij
- nginx serving reverse proxy in nix
- sqlx-cli running migration scripts as nix service
- stk-todo-app with first chuck-stack-like table
- demonstrate role based PostgreSQL administration - see impersonation

### Week of 2024-10-11

- postgrest service up and running
- sqlx-cli test nix-shell ([link](https://github.com/chuckstack/stk-app-sql/blob/main/test/shell.nix))
- implemented best practice for creating and hosting work instructions

### Prior

- created first version of work instructions
- replicate [this video](https://www.youtube.com/watch?v=ooWaPVvljlU) in aichat with built in sql role sql.
  - cd to newly created directory and create new db
  - create new psql instance and log important details
    - auto table generate and keep DDL logs (https://github.com/RavitheAnalyst/Paris-Olympics-2024---Analysis/blob/main/athletes.csv)
    - query aggregation and chart visuals
  - create new app and use (leverage stack conventions)
