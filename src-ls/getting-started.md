# Getting Started

By now, you should understand [why the project exists](./introduction.md) and [where we are headed](./picture-success.md).

## Start with AI

First, get your API key. Then, start using it to explore!

### Get Your API Key

You need an API account from one of the foundation LLM providers, including:

- [Anthropic/Claude](https://www.anthropic.com/api) - preferred
- [Gemini](https://ai.google.dev/)
- [OpenAI](https://openai.com/api/)

There is a difference between the flat-rate, consumer-facing website offerings (like OpenAI's ChatGPT) and a pay-as-you-go API service. You need the API version of the service. Here are the reasons:

- One reason is that you will most likely not spend the equivalent $20/month when using the API.
- The second reason is that you need API access to accomplish the goals of this stack.

You can use a different LLM provider if you wish. Here is a list of other options: ([see the multi-platform section](https://github.com/sigoden/aichat)).

### Ask AI First

One key to your success is to get in the habit of asking AI before you search on Google. Soon, you will have a keystroke that will open an AI prompt from anywhere on your computer. Asking AI for help will become second nature. You want to create this habit as quickly as you can.

> Here is an example prompt where AI is both fast and succinct: 
>
> - please provide succinct step-by-step instructions for accessing a linux terminal on a new chromebook
> 
> Here was the response:
>
> 1. Open Settings
> 2. Click "Advanced" in the left sidebar
> 3. Select "Developers"
> 4. Turn on "Linux development environment"
> 5. Click "Install" and wait for the process to complete
> 6. Once installed, open the "Linux Terminal" app from the launcher
> 7. The terminal will open, ready for use

If you have additional questions, simply ask and AI will provide additional details.

## Get Linux

You need some version of [Linux](./tool-linux.md) available to you. Here are some options starting with the easiest ones first:

- Chromebook - most modern Chromebooks make it easy to gain access to a Linux terminal directly from your menu. See the above example of asking AI for help.
- Windows - offers [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install).
- Buy a new Linux computer - [System76](https://system76.com) is an amazing hardware provider and a supporter of Linux. You can buy a mini, desktop or a laptop with Linux already installed. They typically offer a $600 USD mini that can be used to get started.
- Install Ununtu, PopOS or Debian on an exiting desktop or laptop.
- Mac - is Unix, which is close to Linux. Most of what you can run on Linux can also work on a Mac.
- Rent Linux - cloud providers like AWS, Digital Ocean, Linode, ... will host Linux for you for under $10 USD per month.

## Which Linux Version

- PopOS is our preference for laptops and desktops. PopOS is an Debian variant.
- [Debian](./tool-linux.md#debian) is our preference for servers, containers and headless virtual machines.
- [NixOS](./tool-linux.md#nix) is a more challenging and more capable option.
- Ubuntu is also acceptable. Ubuntu is a Debian variant.

You can use any almost distribution of Linux you wish. The chuck-stack team recommends Debian-based and Nix as part of the official stack.

## Rust Tools

We have a strong preference for tools written in the Rust language. As a result, you need to install the [Rust tools](https://rustup.rs/). We will use Rust to install applications like [AIChat](./tool-aichat.md) - see below.

## AIChat

[AIChat](./tool-aichat.md) plays a big role in the chuck-stack. You want to be able to launch a terminal and use AIChat with a single keystroke. Doing so goes a long way in accomplishing the above goal of asking AI before Google.

Examples to come soon... [Join the stack-academy](./stack-academy.md) for quicker options to get started.

## PostgreSQL

[PostgreSQL](./tool-postgresql.md) also plays a big role in the chuck-stack. You want to be able to be able to use psql (PostgreSQL's command line tool - CLI) to connect to a local database and issue a few commands.

Examples to come soon... [Join the stack-academy](./stack-academy.md) for quicker options to get started.

## Best Practices

Now that you are proficient with AIChat, lets start incorporating [best practices](./best-practices.md) into your use of AIChat.

## More to Come...

We are just 'geting starting'. To learn more faster, [join the stack-academy](./stack-academy.md). This is an important step to realizing the vision! This is something you can start right now!
