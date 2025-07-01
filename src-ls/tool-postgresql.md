# PostgreSQL

[PostgreSQL](https://www.postgresql.org/) is an open source database, and it is quite possibly the best general purpose tool for managing data in the world. We realize this is a bold statement; however, after almost 30 years in mid-market ERP (Enterprise Resource Planning), we know a thing about managing data. PostgreSQL is our preferred tool in its category for some very good reasons.

## TOC

<!-- toc -->

## Why We Love PostgreSQL

The list of reasons we love PostgreSQL is long.

- It is commonly used and well documented.
- It is open source.
- It is easily accessible from anywhere in the world.
- Its accessibility is secure and well vetted.
- It has a vibrant online support community.
- It makes the data we need to do our jobs immediately available.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- It is CLI first to help support AI and automation.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It does its job (data) quite well.
- And, most importantly it has great synergy with the rest of the chuck-stack.

Here are some bullets that are unique to PostgreSQL that make it significantly better than its peers for the chuck-stack.

- It can hold almost any type of data: relational, GIS, vector, document, json, and more...
- It is not enough to simply say it can hold this data - it is better than almost all of its peers who often specialize in these types of data.
- Data replication is predictable.
- Data replication is configurable (streaming vs logical).
- Data backup strategies are numerous, robust and well documented.
- There are PostgreSQL drivers, adapters, connectors for almost every major platform (OS and application).
- It is fast!
- It can read from many foreign data containers via FDW (Foreign Data Wrappers) - [see the list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers).

References;

- [PostgreSQL for Everything](https://www.youtube.com/watch?v=3JW732GrMdg)

## Supabase

[Supabase.com](https://supabase.com/), a hosted PostgreSQL database and added-value services organization, deserves special acknowledgement here. They are in part why the chuck-stack exists. They helped us see and validate a better path forward.

They proposed that the database is one of the best places to add your role and business logic management. Doing so has the following benefits:

- PostgreSQL has an amazingly capable user/role archetypes, and it is quite possible one of the best in the world
- If you maintain your roles in the database:
  - You only define role and data access logic once
  - If you can't see it in the database, you cannot see it anywhere (ERP, BI, web, ...)
  - If users cannot violate data access policies in the database, why not let everyone connect directly
  - AI knows SQL as well as any language
  - Give users a kind AI with knowledge of your system, and let them ask for what they need
- If you maintain your business logic in the database:
  - Any tool can execute the appropriate logic on behalf of the user
  - AI can start augmenting and automating tasks for you

All the sudden, you can start imagining a world where users can start to self-help with minimal involvement from IT. IT can now create systems that are simply bound by roles, and the database and logic (in the DB) helps ensure integrity.

You are left with a thinly veiled system that is easy to create, test, deploy, automate and improve. It is quite magical!

## PostgreSQL Primer

Content below this section is intended to provide reference material that gets you up and running with PostgreSQL as quickly as possible.

## Installation

There are two scenarios when you want to install PostgreSQL related to chuck-stack.

1. Server - Production or UAT/Test environments running NixOS
1. Local - development environment running any Linux distribution where Nix is installed

### Server Installation

The chuck-stack uses NixOS to manage server packages and configuration. Here are two Nix configuration files that work together to install and configure PostgreSQL for the chuck-stack.

- [postgresql.nix](https://github.com/chuckstack/chuck-stack-nixos/blob/main/nixos/postgresql.nix) - base PostgreSQL installation
- [stk-todo-app.nix](https://github.com/chuckstack/chuck-stack-nixos/blob/main/nixos/stk-todo-app.nix) - extends the base PostgreSQL installation with a simple todo application.

### Local Installation

The chuck-stack uses the Nix package manager's `nix-shell` feature to deploy and configure a local base PostgreSQL installation. Here are two different examples of nix-shell installing and configuring PostgreSQL.

The chuck-stack todo test [shell.nix](https://github.com/chuckstack/chuck-stack-core/blob/main/test/shell.nix) installs PostgreSQL and configures it with a specific database and runs database migrations. This file is used as part of the [chuck-stack-core](https://github.com/chuckstack/chuck-stack-core) test suite.

### Installation Notes

Notes about installing and using PostgreSQL:

- It is sometimes desirable to install multiple 'clusters' of PostgreSQL on a single server. This is especially true when you are first learning the chuck-stack or you are hosting multiple small databases.
- The above nix-shell local installation instructions show you how to create a PostgreSQL cluster in a specific location so that you can create multiple clusters if needed.
- As a general rule, we will disable TCP access to PostgreSQL to maximize security. You should only enable TCP access when you have a good reason to do so.
- Once you have created a database 'cluster', you can then create one or more 'databases' inside that cluster.
- It is important to note the database needs of a small organization with just a few users are different than the needs of a medium organization with hundreds or thousands of users. We will start small and finish big.
