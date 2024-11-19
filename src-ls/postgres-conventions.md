# PostgreSQL Convention

The purpose of this section is to describe the concepts and methodologies for creating chuck-stack PostgreSQL designs. Consistent use of conventions create clarity.

You might notice the following in the design:

- We strive for simplicity in both code and convention
- We reuse when possible, and as a result we minimize duplication of logic and data
- We make heavy use of structured data (jsonb) in the form of an enum/type
- We want a single design to serve as many solutions as possible

Here are the goals that drive our conventions:

<!-- TODO: these bullets need improvement -->
- Reduce development time
- Reduce development environment complexity
- Reduce learning time
- Reduce operational complexity
- Maximize use of conventions
- Minimize the number of experts needed to articulate a design
- Minimize use of AI

> You can always ask AI (using AIChat) about any chuck-stack specific convention or PostgreSQL best practices and options. For example, you can ask AI:
>
>     It seems more secure to disable PostgreSQL's TCP service and require clients to connect via unix socket. Is this true?
