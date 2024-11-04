# Roadmap

The purpose of this page is to describe the application framework progress and deployment roadmap.

## Summary

<!-- TODO: link to goals -->
It is important to understand that the chuck-stack is not a typical software project. The goals are to support small and medium sized organizations by bringing together existing tools to create a platform. As such, most of the advancements of this project relate more to convention, configuration and deployment rather than coding.

## Upcoming Milestones

- create first implementation of attribute tagging
- update pg_workflow (first attempt) to use attribute tagging
- determine role strategy to allow nix-shell to deliver role tools for a given user (map between user and role)
- add working instructions to both full context and rag to determine most effective
- create core tenant and entity, using work instructions, add update work instructions accordingly

## Completed Milestone

Week of 2024-11-08

- ...

Week of 2024-11-01

- Updated tools-incus to include better hardware getting started and budget
- deployed first production stack to collect www.chuck-stack.org form submissions based on the stk_todo app
- updated NixOS + stk_todo => nix-shell to run sqlx migrations as local db superuser (not postgres superuser)
- created first version of stk_change_log - respresents first event


Week of 2024-10-25

- create nginx-fail2ban as first layer of protection against ssh, http and https
- updated nginx to allow for most strict access and block openapi/swagger if needed
- resolved initdb and made consistent between nixos and nix-shell test
- created first postgrest process to accept web form submissions

Week of 2024-10-18

- completed version 2 of the simple todo app
- replicate iDempiere's dashboard layout in Zellij
- nginx serving reverse proxy in nix
- sqlx-cli running migration scripts as nix service
- stk-todo-app with first chuck-stack-like table
- demonstrate role based PostgreSQL administration - see impersonation

Week of 2024-10-11

- postgrest service up and running
- sqlx-cli test nix-shell ([link](https://github.com/chuckstack/stk-todo-app-sql/blob/main/test/shell.nix))
- implemented best practice for creating and hosting work instructions

Prior

- created first version of work instructions
- replicate [this video](https://www.youtube.com/watch?v=ooWaPVvljlU) in aichat with built in sql role sql.
  - cd to newly created directory and create new db
  - create new psql instance and log important details
    - auto table generate and keep DDL logs (https://github.com/RavitheAnalyst/Paris-Olympics-2024---Analysis/blob/main/athletes.csv)
    - query aggregation and chart visuals
  - create new app and use (leverage stack conventions)
