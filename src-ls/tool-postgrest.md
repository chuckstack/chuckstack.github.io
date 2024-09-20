# PostgREST

[PostgREST](https://postgrest.org/) is a secret weapon that allows us to build a fully-qualified and secure REST API directly on top of a PostgreSQL database schemas and users/roles. If you can build a good database with functions, you can build a good REST API.

## Why We Love PostgREST

The list of reasons we love PostgREST.

- It is an active project, and it is well documented.
- It is open source.
- It is easily accessible from anywhere in the world.
- Its accessibility is secure and well vetted.
- It has a vibrant online support community.
- It makes the data we need to do our jobs immediately available.
- It can be deployed in every corner of the world.
- It can be deployed using a single file.
- It can be deployed in hybrid cloud scenarios.
- It is API first to help support AI and automation.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It does its job (data access) quite well.
- And, most importantly it has great synergy with the rest of the chuck-stack.

PostgREST adds no additional logic to an existing PostgreSQL schema. This means that you can create a well thought out public database schema and expose it via two different access protocols (REST API and SQL) without duplicating any logic. This concept is important because:

- You minimize the number of experts required to support your platform. SQL in general and PostgreSQL specifically is extremely well known by both humans and AI. The more logic you can create in PostgreSQL, the faster and more efficient you team will become.
- SQL represents one of the most expressive data languages. Previously, SQL was removed as a viable public API because of the fear of duplicated access/security logic. This one point is such a game changer in how you thing about managing and accessing data.
- PostgREST enables moving user/role management and security policies to the database where all application access rules from all platforms (API + SQL) are enforced from a single location.
- User/Role level management at the database is fast and efficient because PostgreSQL user/role management is so expressive and it is so close to the data.
- REST API + SQL cover the fast majority of tools that need access to application logic. Said another way, most applications cannot expose SQL as an interface because traditional applications keep business and security logic in the API layer. As a result of using PostgREST, you maximize the tools that support small and medium organizations by allowing applications to use both API and SQL without any degradation in application quality or complexity.
