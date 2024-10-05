# Success Using API

We have already explained the importance of the terminal to our success. The purpose of this page is to describe how we plan to extend program logic and functionality beyond the terminal using API.

TODO: add link to architecture page to show how API fits into the picture.

When the concepts in this page are fully implemented in the chuck-stack, this page will go away, and its contents will be move to other functional areas. Until then, this information represents our plan and our partial implementation.

## Terminal plus PostgREST

In the previous success pages, we discussed how PostgREST helped us understand a better way to manage data and processes directly inside the database. We believe we can not only use PostgREST's practices but also use PostgREST itself. If we can, this means that any business logic created in the chuck-stack will automatically flow through to an API as well (possibly for free). 

Said another way, You can gain access to your data and processes from more than just a terminal. This concept is important when integration with 3rd party system, which frequently happens in ERP implementations.

Here are our thoughts:

- PostgREST recommends that you create both a private and public schema.
- We plan to do the same.
- The private schema is where you keep your normalized data. It is considered private because users do not always need to know how it is stored.
- The public schema is where psql (your chuck-stack terminal) and PostgREST connect. It is considered public because it is the outside representation of your data and processes. Sometimes there is a difference between private and public for good reasons.
- We believe we can use the same public schema to feed both the chuck-stack terminal as well as PostgREST.
- We believe we can write one set of business logic that supports both access points.
- To accomplish this goal, we believe the chuck-stack simply needs to mirror the application's context to be the same as PostgREST.

If we can accomplish this goal, it will be quite magical.
