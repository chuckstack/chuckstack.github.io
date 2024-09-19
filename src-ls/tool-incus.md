# Incus - Virtualisation

We are leading with Incus and virtualisation because we feel that virtualisation is a critical part of your stack. You can use any virtualisation tool you wish. It does not "need" to be Incus. You can use AWS, GCP, Azure, etc... You simply need some form of virtualisation.

Discussion Points:
- What is Incus
- Why we love Incus
- Types of virtualisation (including Docker)
- Its relation to Nix

## What is Incus

[Incus](https://linuxcontainers.org/incus/docs/main/) allows you to take any single computer or collection/cluster of computers and turn them into a virtualisation platform.

## Why We Love Incus

There is a long list of reasons why we love Incus:

- It is commonly used and well documented.
- It is open source.
- You can get up and running with Incus in a meaningful way in minutes.
- It does its job (virtualisation) quite well.
- It helps you deploy applications in a manner that is safe, reliable and performant.
- You can start with a single computer and naturally grow to a global cluster.
- It uses commonly understood Linux and networking concepts.
- It has an incredible educator in Stéphane Graber.
- It has a vibrant online support community.
- It supports multiple types of virtualisation in a single application: Docker, Linux containers, virtual machines and Nix.
- It is both CLI and API first to help support AI and automation.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- And, most importantly it has great synergy with the rest of the chuck-stack.

## Types of Virtualisation

One of the greatest benefits of Incus is that it gives you so many Virtualisation options in a single package. Incus maintains current container and virtual machine images for commonly used Linux operating systems including: Debian, Ubuntu, NixOS, Alpine, Arch, etc... You can add DockerHub as an Incus image repository; therefore, you can launch almost any image with almost no additional effort, infrastructure or nesting when using Incus.

## Incus Relation to Nix

Nix is a compelling option for virtualisation. If the chuck-stack already uses Nix, why add Incus in addition to Nix? 

Here are our thoughts:

- Nix is appreciably harder to learn and get up and running as a virtualisation platform.
- Incus covers many more virtualisation scenarios than Nix.
- Nix is a great virtualisation solution when you need a specialized, high-volume and resource sensitive application hosting solution. Replit's use of Nix is a good example of when Nix is preferable. ([Quick link...](https://blog.replit.com/nix_web_app))
- A Nix solution can easily be deployed inside Incus.
