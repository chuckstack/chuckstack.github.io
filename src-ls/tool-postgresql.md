# PostgreSQL

[PostgreSQL](https://www.postgresql.org/) is an open source database, and it is quite possibly the best general purpose tool for managing data in the world. We realize this is a bold statement; however, after almost 30 years in mid-market ERP (Enterprise Resource Planning), we know a thing about managing data. PostgreSQL is our preferred tool in its category for some very good reasons.

## Page Contents

- [Why we love Postgresql](#why-we-love-postgresql)
- [Installation](#installation)

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

## PostgreSQL Primer

Content below this section is intended to provide reference material that gets you up and running with PostgreSQL as quickly as possible.

## Installation

There are two scenarios when you want to install PostgreSQL related to chuck-stack.

1. Server - Production or UAT/Test environments running NixOS
1. Local - development environment running any Linux distribution where Nix is installed

### Server Installation

The chuck-stack uses NixOS to manage server packages and configuration. Here are two Nix configuration files that work together to install and configure PostgreSQL for the chuck-stack.

- [postgresql.nix](https://github.com/chuckstack/chuck-stack-nix/blob/main/nixos/postgresql.nix) - base PostgreSQL installation
- [stk-todo-app.nix](https://github.com/chuckstack/chuck-stack-nix/blob/main/nixos/stk-todo-app.nix) - extends the base PostgreSQL installation with a simple todo application.

### Local Installation

The chuck-stack uses the Nix package manager's `nix-shell` feature to deploy and configure a local base PostgreSQL installation. Here are two different examples of nix-shell installing and configuring PostgreSQL.

- Basic [shell.nix](https://github.com/chuckstack/chuck-stack-nix/blob/main/nix-shell/postgresql-local/shell.nix) - performs the most basic PostgreSQL install
- chuck-stack todo test [shell.nix](https://github.com/chuckstack/stk-app-sql/blob/main/test/shell.nix) - installs PostgreSQL and configures it with a specific database and runs database migrations. This files is used as part if the [stk-app-sql](https://github.com/chuckstack/stk-app-sql) test suite.

### Installation Notes

Notes about installing and using PostgreSQL:

- It is sometimes desirable to install multiple 'clusters' of PostgreSQL on a single server. This is especially true when you are first learning the chuck-stack or you are hosting multiple small databases.
- The above nix-shell local installation instructions show you how to create a PostgreSQL cluster in a specific location so that you can create multiple clusters if needed.
- As a general rule, we will disable TCP access to PostgreSQL to maximize security. You should only enable TCP access when you have a good reason to do so.
- Once you have created a database 'cluster', you can then create one or more 'databases' inside that cluster.
- It is important to note the database needs of a small organization with just a few users are different than the needs of a medium organization with hundreds or thousands of users. We will start small and finish big.
