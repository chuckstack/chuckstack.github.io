# Comments

The purpose of this page is to discuss PostgreSQL object comments.

## Summary

PostgreSQL allows you to create a comment against almost anything. The only object we have found thus far that will not accept a comment is an enum value.

It is strongly recommended that PostgreSQL comments are the first place where you add documentation. Here are the reasons why:

- PostgreSQL can easily be query and extract current comments into user interfaces, documentation, AI
- We do not want to repeat ourselves, and PostgreSQL allows to to comment on the very objects we are creating

## Considerations

We do not have everything figured out about comments. Here are some considerations.

- Since we maintain two schemas, and each schema object can hold a comment, where is the best place to comment (api vs private schema vs both)? One could argue the private schema comments are for developers/maintainers of the system while api schema object comments are for users of the system.
