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

- Debian - general purpose Linux distribution
- NixOS - declarative and composable architecture

It is worth mentioning that Nix is both an OS (NixOS) and a package manager (similar to Debian's apt). We make use of the Nix package manager on Debian as well. Said another way, it is common for us to install the Nix package manager on Debian servers and desktops.

## Linux Desktop

The chuck-stack standardizes on two Linux desktops:

- PopOS - we are most excited about PopOS, and we have used it for more than 2 year; however, it is currently in transition from gnome-based to an independent, pure-rust desktop. Because of this transition and the instability it creates, we also support Gnome.
- Gnome - a good and well understood Linux desktop.
