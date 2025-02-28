# Others

The purpose of this page is to highlight other tools in the chuck-stack. These tools fall into the following categories:

- Additional critical path tools
- Important but non critical path tools
- Tools we are evaluating

## TOC

<!-- toc -->

## Additional Critical Path Tools

Here are the tools we use every day:

- [rsync.net](https://rsync.net) - is an off-site storage service that runs on top of open source tools. It is pretty fantastic! It uses rsync as the local client, which is easily installed. It uses ZFS on the remote server to keep your data safe. It costs the same as AWS S3. And, it gives you immutable backups without any additional configuration. Said another way, it is easy, reasonably priced and works as intended out of the box. Notes about rsync.net:
  - The website is simple
  - The account management panel is overly simple
  - The service is awesome!
  - [See article](./blog-rsync-net.md) with more details and example backup strategy...
- [iDempiere (ERP)](https://www.idempiere.org/) - ERP for managing orders, inventory, invoices, payments, accounting and much of the data you need to execute operations in your organization. iDempiere is a mature, stable and fully-featured ERP that runs on PostgreSQL. We have 23+ years experience with the iDempiere codebase.
- [Pass (secrets)](https://passwordstore.org/) - is a command line tool that helps you manage secrets/passwords with gpg. It is simple, scriptable, auditable, distributed and secure. [gpg](https://gnupg.org/) is an encryption program that provides cryptographic privacy and authentication for data communication. The Pass repository is available on almost all platforms. It integrates well with github.
- [Zabbix (monitoring)](https://www.zabbix.com/) -  monitor resources and respond to events.
- [buku](https://github.com/jarun/buku) - awesome terminal bookmark manager
- [sqlx-cli](https://github.com/launchbadge/sqlx/tree/main/sqlx-cli) - sql migration tool
- [Signal](https://signal.org/) - instant message focused on privacy and availability. Signal excels by supporting communication on most platforms (mobile, web, desktop). While Discourse has direct messaging, signal's simplicity and availability makes real-time and ephemeral communication pleasurable.
- [Matrix](https://matrix.org/) - competitor to Signal and complementary with Discourse (via SSO) - clients (element,cinny,chats) - [good demo](https://www.youtube.com/watch?v=6iMi5BiQcoI)
- [Metabase (BI)](https://www.metabase.com/) - BI tool for visualizing and publishing data that runs on PostgreSQL.

## Important Tools

Here are tools we commonly use:

- [dbt (ETL)](https://www.getdbt.com/) - tool to transform transactional data into a form than can be consumed by BI or AI or ...
- [ttyd](https://github.com/tsl0922/ttyd) - simple command-line tool for sharing terminal over the web. There are times when you need to share your chuck-stack development with others. ttyd makes exposing your terminal over the web trivial. See the [getting started - terminal in browser](./getting-started.md#terminal-in-browser) for a quick example.
- [OpenWRT](https://openwrt.org/) - linux-based open source firewall that works well with [Netbird](./tool-netbird.md).
- [Ollama (AI)](https://ollama.com/) - AI tool for running generative AI (LLM) models locally.
- [ddgr](https://github.com/jarun/ddgr) - DuckDuckGo search from the terminal

## Tools We Are Evaluating

He are the tools we want to use more:

- [age](https://github.com/FiloSottile/age)/[rage](https://github.com/str4d/rage) - modern, no configuration encryption tool. Here is a notable [discussion](https://github.com/FiloSottile/age/discussions/432).
- [PostgresML (AI)](https://postgresml.org/) - PostgreSQL tool for AI training and inferencing directly out of your database.
- [CrowdSec (security)](https://www.crowdsec.net/) - Proactively block known malicious IPs and activities.
- [htmx](https://htmx.org/) - compelling way for small and medium organizations to create dynamic websites.
- [presenterm](https://mfontanini.github.io/presenterm/) - simple terminal presentation tool backed by markdown
- [pgrx](https://github.com/pgcentralfoundation/pgrx) - helps build rust-based extensions in PostgreSQL
- [typst](https://typst.app/) - text formattng and layout engine 
  - [see discussion](https://news.ycombinator.com/item?id=41014941)
  - [see video](https://www.youtube.com/watch?v=sWmlbMh3ol8)
  - Plan to use to create printing documents like orders, invoices, ...
  - typst offers greater control over formatting than general markdown (color for example)
- [steampipe](https://steampipe.io) - connecting PostgreSQL to cloud apis via a FDW
- [powerpipe](https://powerpipe.io/) - generating dashboard templates from configuration
