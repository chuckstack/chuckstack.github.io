# Getting Started

Getting started looks different depending on your goals. 

If you goal is to understand the project itself, start here:

- [Introduction - Why the project exists](./introduction.md) 
- [Picture of Success - Where we are headed](./picture-success.md).

If your goal is to understand what is needed for us to succeed, view the [success factors](./success-factor.md)

If you just want to start playing with the chuck-stack, read below. If you need help, join the [stack-academy](./stack-academy.md).

## Start with AI

First, get your API key. Then, start using it to explore!

### Get Your API Key

You need an API account from one of the foundation LLM providers, including:

- [Anthropic/Claude](https://www.anthropic.com/api) - preferred
- [Gemini](https://ai.google.dev/)
- [OpenAI](https://openai.com/api/)

There is a difference between the flat-rate, consumer-facing website offerings (like OpenAI's ChatGPT) and a pay-as-you-go API service. You need the API version of the service. Here are the reasons:

- One reason is that you will most likely not spend the equivalent $20/month when using the API - at least not in the beginning.
- The second reason is that you need API access to accomplish the goals of this stack.

You can use a different LLM provider if you wish. Here is a list of other options: ([see the multi-platform section](https://github.com/sigoden/aichat)).

Note: It is possible to run AI locally using tools like [ollama](https://ollama.com/); however, the models you can run locally are generally not as powerful as the ones listed above. For that reason, we will treat local AI as a more advanced topic.

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

You need some version of [Linux](./tool-linux.md) available to you. We prefer you run Linux as your primary desktop for a variety of reasons; however, we understand that time and cost play a role in your decision. 

To make getting started as easy as possible, we created a list of options beginning with the easiest and most affordable ones first:

- Chromebook - most modern Chromebooks make it easy to gain access to a Linux terminal directly from your menu. See the above example of asking AI to help enable Linux in a Chromebook.
- Windows - offers [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install).
- Buy a new Linux computer:
  - [System76](https://system76.com) is an amazing hardware provider and a supporter of Linux. You can buy a mini, desktop or a laptop with Linux already installed. They typically offer a $600 USD mini that can be used to get started. System76's commitment to Linux and its usability cannot be emphasized enough.
  - [Framework](https://frame.work) is an amazing hardware provider; however, please understand this company is a bit different. The upfront cost is higher than a mass-produced Chromebook; however, you purchase something that will last longer. [Here is a great review and explanation](https://youtu.be/ZcmK2T6BDMY?si=aTiV5SY26fG41Rmo) regarding why Framework laptops are worth considering. Framework seems to be honest and transparent. They own and fix their mistakes in our experience.
- Install Ubuntu, PopOS or Debian on an existing desktop or laptop.
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

## Terminal in Browser

There are times when you want others to play with what you are creating. An easy way to make your terminal available through the browser is by using the `ttyd` application. It allows you to simply host a webpage that looks and feels like your machine's terminal. It is reasonably well documented and easy to use.

Here is a quick example showing how you can expose a role or agent created in aichat:

```bash
ttyd -a -W aichat --session
```

Here is an example simply exposing a bash terminal so that you can use aichat in command mode:

```bash
ttyd -W bash
```

Warning: do not expose your terminal to the open web. At a minimum use ttyd's credentials features. A better option is to expose it to someone you trust via Netbird (next).

## Netbird

There are times when you need private access to a remote machine to make getting started with the chuck-stack quicker and easier. [Netbird](./tool-netbird.md) is a vpn solution that starts small and easily grows with your increasing

## Best Practices

Now that you are proficient with AIChat, lets start incorporating [best practices](./best-practices.md) into your use of AIChat.

You need to practice your best practices in [Obsidian](./tool-obsidian.md). Get comfortable with markdown, the listed Obsidian plugins, and how to document your work instructions.

## More to Come...

We are just 'geting starting'. To learn more faster, [join the stack-academy](./stack-academy.md). This is an important step to realizing the vision! This is something you can start right now!
