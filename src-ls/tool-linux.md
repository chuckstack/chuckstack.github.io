# Linux

[Linux](https://en.wikipedia.org/wiki/Linux) is a well understood and documented operation system. Its benefits are equally as well documented; therefore, we do not need to attempt to repeat them here. However, it is important to discuss why we love Linux for the chuck-stack.

## TOC

<!-- toc -->

## Why We Love Linux

- It is commonly used and well documented.
- It is open source.
- It is easily accessible from anywhere in the world.
- Its accessibility is secure and well vetted.
- It has a vibrant online support community.
- It makes the applications we need to do our jobs immediately available.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- It is CLI first to help support AI and automation.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It does its job (compute) quite well.
- And, most importantly it has great synergy with the rest of the chuck-stack.

## Linux Server Distributions

The chuck-stack standardizes on two distributions of Linux:

- Debian
- NixOS

Reference: [Getting Started with Linux](./getting-started.md#get-linux)

### Debian

[Debian](https://www.debian.org/) is a general purpose Linux distribution. It has been around for a long time. It is community driven. It works great on the server and the desktop. It is a cornerstone for the Linux community.

### Nix

[Nix](https://nixos.org/) is a package manager available to almost any Linux distribution including Debian. Nix's most remarkable feature is the ability to create reproducible builds and deploy reproducible environments through its declarative language. 

The power of Nix is most easily found in two ways:

- NixOS - is a specific distribution dedicated to the Nix package manager.
- nix-shell - is a feature for creating terminal shells with specific packages anywhere Nix is installed.

The chuck-stack make extensive use of both NixOS and nix-shell because they give us:

- A menu of deployment options that can be pieced together to create larger and more capable systems
- A deterministic way to deploy 'all' changes or 'none'
- Enhanced disaster recovery options
- Simplified security, audit and maintenance
- Simplified environment management
- The ability to deploy a system without writing code

References: 

- See how NixOS is used in the [chuck-stack architecture](./stack-architecture.md#nixos)
- [Nix introduction](https://youtu.be/FJVFXsNzYZQ) - fast introduction
- [Nix explained](https://youtu.be/X_jMqi-0SrM) - provides an overview of the Nix ecosystem
- [Nix value explained from a devops perspective](https://www.youtube.com/watch?v=f-x5cB6qCzA)

## Linux Desktop Distributions

The chuck-stack standardizes on two Linux desktops:

- PopOS Shell
- Gnome

### PopOS Shell

We strongly recommend PopOS. We have used it for more than 2 year with great success. 

Note that it is currently in transition from gnome-based to an independent, pure-rust desktop. Here are the important details:

- [PopOS](https://system76.com/pop/) - what we currently use...
- [PopOS Cosmic](https://system76.com/cosmic/) - what we will transition to when released beyond alpha...

### Gnome

Gnome is a good and well understood Linux desktop. Note that Gnome does not configure `super + t` to open a terminal by default. This may seem silly; however, to us, it is a big deal to have the terminal at our fingertips from anywhere and everywhere.
