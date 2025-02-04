# We Live in a Markdown World Blog

- Published: 2024-09-16
- Updated: 2024-09-16
- Author: Chuck Boecking

This article describes why markdown has become a better tool for documentation than both Microsoft Word and Google Docs. We believe that the use of markdown and the benefits you gain from it represent a point of inflection and a significant change in how documentation and training should be maintained and published.

## Call to Action: Use Markdown

If you are working with the chuck-stack, all work instructions, content, documentation, instructions, tutorials, etc... should be created in markdown format.

Here are the reasons:

- Documents can be easily added to a repository (where the documentation is most relevant) and changes can be tracked and reviewed right next to the code/configuration.
- The pull request review system is far superior to anything in word/gdoc for creating, reviewing, and publishing works.
- Markdown editors like vscode, [Obsidian](https://obsidian.md), and almost any modern text editor are as good as word/gdocs for transferring knowledge via formatted text.
- We use [AIChat](./tool-aichat.md) constantly. We can pass in markdown with no additional effort into any LLM of choice:
  - example: aichat -f somedoc.md -- please create a 3-question quiz on this material to check for general understanding
- Markdown docs can easily be turned into private and public project websites using tools like [mdBook](https://rust-lang.github.io/mdBook/) with virtually no effort and almost no tooling. The resulting mdbook website augments the git pull request for edits from the whole team by providing a quick edit link on every page.

For more reasons to consider markdown, see the [chuck-stack best practices](./best-practices.md).

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.
