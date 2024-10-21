# Linux

[Linux](https://en.wikipedia.org/wiki/Linux) is a well understood and documented operation system. Its benefits are equally as well documented; therefore, we do not need to attempt to repeat them here. However, it is important to discuss why we love Linux for the chuck-stack.

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

## Linux Distributions

The chuck-stack standardizes on two distributions of Linux:

- Debian
- NixOS

### Debian

[Debian](https://www.debian.org/) is a general purpose Linux distribution. It has been around for a long time. It is community driven. It works great on the server and the desktop. It is a cornerstone for the Linux community.

### Nix

[Nix](https://nixos.org/) is a package manager that also became a Linux distribution (NixOS). Its most remarkable feature is the ability to create reproducible builds and deploy reproducible environments through its declarative language.

Nix gives us:

- A menu of deployment options that can be pieced together
- A deterministic way to deploy 'all' changes or 'none'
- Enhanced disaster recovery options
- Simplified security, audit and maintenance
- Simplified environment management

References: 

- See how NixOS is used in the [chuck-stack architecture](./stack-architecture.md#nixos)

## Linux Desktop

The chuck-stack standardizes on two Linux desktops:

- PopOS Shell (Cosmic)
- Gnome

### PopOS Shell

We are most excited about the [PopOS shell desktop](https://github.com/pop-os/shell), and we have used it for more than 2 year; however, it is currently in transition from gnome-based to an independent, pure-rust desktop. Because of this transition and the instability the transition creates, we also support Gnome.

### Gnome

Gnome is a good and well understood Linux desktop.
