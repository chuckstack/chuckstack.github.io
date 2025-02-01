# Netbird

Organizations need a way to connect people and services separated by distance. [Netbird](https://netbird.io/) is a great tool to create these digital network connections.

## Why We Love Netbird

- It is becoming more popular.
- It is well documented.
- It is open source.
- Its accessibility is secure and well vetted.
- It can be self-hosted
- It makes the services we need to do our jobs immediately available.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- It can be installed by almost anyone.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It does its job (networking) quite well.
- And, most importantly it has great synergy with the rest of the chuck-stack.

## Keep it Simple

Netbird (and similar technologies like Tailscale) are simplifying and improving how we connect services + offices + remote people.

Getting started is simple, and your simple installation can scale quickly and linearly.

## Keep It Private

The vast majority of data and services consumed by an organization are considered private. Netbird helps you hide anything you want to keep private from the public internet.

## Open Source

Unlike Tailscale, all components in Netbird are open source, and they can be hosted almost anywhere.

## Hosted Option

Even though you can completely self-host Netbird, you do have an option to keep things simple initially by using Netbird's hosted option.

## Everyone Needs It

The reason Netbird appears in to top level of chuck-stack tools is because virtually every organization needs a way to connect multiple people and locations. When you deploy the chuck-stack, Netbird (or something like it) needs to be in you plan.

## SSH using Netbird

There are two ways to connect to a remote Netbird machine using ssh:

- Normal `ssh` where you share a private key beforehand and connect using `ssh your-user@some-netbird-ip`
- Special `netbird ssh` where you do not even need an ssh server running or a shared key on the remote machine using `netbird ssh your-user@some-netbird-ip`

Note: you need to use sudo privileges when using `netbird ssh`.

## Incus

Netbird and [Incus](./tool-incus.md) have good synergy. It is common to use [Incus in multiple ways](./tool-incus.md#incus-use-cases). Netbird gives you an easy to install and manage network overlay to connect all your Incus clusters around the world.

Reference: [Hybrid Cloud Synergy: Incus + Netbird PhoenixNAP](./blog-incus-netbird-phoenixnap.md)

## OpenWRT Router

Note that OpenWRT includes Netbird as a plugin; therefore, you can use OpenWRT to connect multiple sites (cloud and physical locations) to the same overlay network using a relatively simple chuck-stack configuration.
