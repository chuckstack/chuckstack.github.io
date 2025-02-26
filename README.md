# Summary

This repository contains the code and material for chuck-stack.org.

Home page is maintained manually in html using picocss.

Source markdown is located in [./src-ls](./src-ls/).

We use mdbook to maintain the published site to [./ls](./ls/).

md file names:
- Use hyphen '-' to separate words
- Use the first word as a classifier instead of using directories. For example use 'blog-' to start a file name instead of putting the file in a directory named 'blog/'.
- Use singular version of the name (use: best-practice.md -- not: best-practices.md)

Page work instruction:
- h1 title
- all other headings at h2 or lower

mdBook plugins:
- mdbook-toc

Blog Work Instruction:
- file name begins with 'blog-'
- h1 title ending with key word blog
- header bullets
  - published date
  - updated date
  - author
- all other headings at h2 or lower
- finish with "learn more..." section
