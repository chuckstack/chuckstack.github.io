# Others

The purpose of this page is to highlight other tools in the chuck-stack. These tools fall into the following categories:

- Additional critical path tools
- Important but non critical path tools
- Tools we are evaluating

## Additional Critical Path Tools

Here are the tools we use every day:

- [rsync.net](https://rsync.net) - is an off-site storage service that runs on top of open source tools. It is pretty fantastic! It uses rsync as the local client, which is easily installed. It uses ZFS on the remote server to keep your data safe. It costs the same as AWS S3. And, it gives you immutable backups without any additional configuration. Said another say, it is easy, reasonably priced and works as intended out of the box. Notes about rsync.net:
  - The website is simple
  - The account management panel is overly simple
  - The service is awesome!
- [iDempiere (ERP)](https://www.idempiere.org/) - ERP for managing orders, inventory, invoices, payments, accounting and much of the data you need to execute operations in your organization. iDempiere is a mature, stable and fully-featured ERP that runs on PostgreSQL. We have 23+ years experience with the iDempiere codebase.
- [mdbook](https://rust-lang.github.io/mdBook/) - simple static site generator that converts pure markdown pages into a website. What makes mdbook great is the simple installation, configuration and deployment.
- [Pass (secrets)](https://passwordstore.org/) - is a command line tool that helps you manage secrets/passwords with gpg. It is simple, scriptable, auditable, distributed and secure. [gpg](https://gnupg.org/) is an encryption program that provides cryptographic privacy and authentication for data communication. The Pass repository is available on almost all platforms. It integrates well with github.
- [Zabbix (monitoring)](https://www.zabbix.com/) -  monitor resources and respond to events.
- [buku](https://github.com/jarun/buku) - awesome terminal bookmark manager

## Important Tools

Here are tools we commonly use:

- [Mattermost](https://mattermost.com/): Open source collaboration tool (similar to slack and github discussions). It is backed by PostgreSQL and run locally; therefore, it fits quite well in the chuck-stack.
- [dbt (ETL)](https://www.getdbt.com/): tool to transform transactional data into a form than can be consumed by BI or AI or ...
- [Metabase (BI)](https://www.metabase.com/): BI tool for visualizing and publishing data that runs on PostgreSQL.
- [ddgr](https://github.com/jarun/ddgr) - DuckDuckGo search from the terminal

## Tools We Are Evaluating

He are the tools we want to use more:

- [age](https://github.com/FiloSottile/age)/[rage](https://github.com/str4d/rage) - modern, no configuration encryption tool. Here is a notable [discussion](https://github.com/FiloSottile/age/discussions/432).
- [PostgresML (AI)](https://postgresml.org/): PostgreSQL tool for AI training and inferencing directly out of your database.
- [Ollama (AI)](https://ollama.com/): AI tool for running generative AI (LLM) models locally.
- [CrowdSec (security)](https://www.crowdsec.net/): Proactively block known malicious IPs and activities.
- [htmx](https://htmx.org/): compelling way for small and medium organizations to create dynamic websites.
- [presenterm](https://mfontanini.github.io/presenterm/) - simple terminal presentation tool backed by markdown
- [pgrx](https://github.com/pgcentralfoundation/pgrx) - helps build rust-based extensions in PostgreSQL
- [typst](https://typst.app/) - text formattng and layout engine 
  - [see discussion](https://news.ycombinator.com/item?id=41014941)
  - [see video](https://www.youtube.com/watch?v=sWmlbMh3ol8)
  - Plan to use to create printing documents like orders, invoices, ...
