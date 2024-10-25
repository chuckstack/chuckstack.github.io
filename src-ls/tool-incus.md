# Incus - Virtualization

We are leading with Incus and virtualization because we feel that virtualization is a critical part of your stack. You can use any virtualization tool you wish. It does not "need" to be Incus. You can use AWS, GCP, Azure, etc... You simply need some form of virtualization.

## Page Contents
- [What is Incus](#what-is-incus)
- [Why we love Incus](#why-we-love-incus)
- [Types of virtualization](#types-of-virtualization)
- [Incus relation to Nix](#incus-relation-to-nix)
- [Incus relation to Docker](#incus-relation-to-docker)
- [Picture of success](#picture-of-success)

## What is Incus

[Incus](https://linuxcontainers.org/incus/docs/main/) is a Linux application that allows you to take any single computer or collection/cluster of computers and turn them into a virtualization platform.

## Why We Love Incus

There is a long list of reasons why we love Incus:

- It is commonly used and well documented.
- It is open source.
- You can get up and running with Incus in a meaningful way in minutes.
- It does its job (virtualization) quite well.
- It helps you deploy applications in a manner that is safe, reliable and performant.
- You can start with a single computer and naturally grow to a global cluster.
- It uses commonly understood Linux and networking concepts.
- It has an incredible educator in Stéphane Graber.
- It has a vibrant online support community.
- It supports multiple types of virtualization in a single application: Docker, Linux containers, virtual machines and Nix.
- It is both CLI and API first to help support AI and automation.
- It offers a reasonably simple architecture given the nature of its purpose.
- It scales massively for small to medium organizations.
- It can be deployed in every corner of the world.
- It can be deployed in hybrid cloud scenarios.
- And, most importantly it has great synergy with the rest of the chuck-stack.

## Types of virtualization

One of the greatest benefits of Incus is that it gives you so many virtualization options in a single package. Incus maintains current container and virtual machine images for commonly used Linux operating systems including: Debian, Ubuntu, NixOS, Alpine, Arch, etc... You can add DockerHub as an Incus image repository; therefore, you can launch almost any image with almost no additional effort, infrastructure or nesting when using Incus.

## Incus has Projects

You can use projects to keep your Incus server clean by grouping related instances together. In addition to isolated instances, each project can also have specific images, profiles, networks, and storage. This helps organizations support the growth of organizations in an organized manner.

## Incus Relation to Nix

[Nix](./tool-linux.md#nix) is a compelling option for virtualization in some specific circumstances. If the chuck-stack already uses Nix, why add Incus in addition to Nix? 

Here are our thoughts:

- Nix is appreciably harder to learn and get up and running as a virtualization platform.
- Incus covers many more virtualization scenarios than Nix.
- Nix is a great virtualization solution when you need a specialized, high-volume and resource sensitive application hosting solution. Replit's use of Nix is a good example of when Nix is preferable. ([Quick link...](https://blog.replit.com/nix_web_app))
- A Nix solution can easily be deployed inside Incus.

## Incus Relation to Docker

Docker is a compelling option for virtualization. Here are the reason we prefer Incus over Docker:

- Incus gives us a single tool to deploy and manage almost all virtualization scenarios.
- Docker is great at application deployment. We need more than just application deployment.
- Incus covers more virtualization use case scenarios than Docker. For example: we need semi-permanent instances for long running applications like PostgreSQL. Incus provides this capability with no additional effort.
- Incus supports running Docker containers without needing a dedicated Docker environment.
- Note: Incus does not support Docker Compose yet.

## Picture of Success

Here is what we want from incus for small organizations wanting to become bigger ones. What we want you to know is that you can start with minimal effort and grow to a massive scale on the same tool.

### Toe in the Water

You can install Incus on almost any size and shape of Linux machine with minimal effort. With this minimal install, you can:

- fire up multiple instances (container or virtual machines) within seconds using most major Linux distributions
- create snapshots
- restore from snapshots
- share images with other incus servers

We encourage to [try incus online now](https://linuxcontainers.org/incus/try-it/).

### First Cluster

You can create your first cluster from any three or more Linux machines of any size and shape with just a few steps. With a cluster and minimal effort you can:

- increase capacity
- create redundancy
- move instances from on server to another to support always up maintenance
- need more compute power, add more nodes...

### Second Cluster

With a little more effort and expense, you can create a cluster with:

- distributed storage to allow for hot swapping instances between nodes
- distributed network overlay implementing advanced networking/ACL capabilities

### Hybrid Cluster

You can move one cluster to a data center. You can add a second machine or cluster locally. You can share images between these clusters. This hybrid approach helps your team maximize local hardware and cost reductions while using the same tools to administer your entire infrastructure.

### Start Small Finish Big

The purpose of the section is ensure you understand that the smallest amount of effort will get you started in a direction that will grow with your organization in a linear and predictable manner.

## Hardware Thoughts

The purpose of this section is to record thoughts and examples related to hardware. You can start with any hardware to validate Incus capabilities. If you want to apply a budget, here is an example first cluster:

- Start with three [system76 meerkat tall](https://system76.com/desktops/meerkat) each with the following:
  - about $600 to start and $1K each as suggested below.
  - about 12 cores (i5 for example)
  - 32GB memory
  - 500GB PCIe4 drive
  - 4TG SATA SSD additional drive
  - 2.5 GbE LAN additional port
  - Note: always buy what you can afford at the time. If you can go with 64GB of memory then do so. Bigger drive, then do so...
  - Note: your AWS bill will quickly grow to be more than $3K in a short period of time. Every AWS server has three costs. 
    - EC2 server
    - EC2 drive - You can assume the AWS drive and shapshot storage costs will be about the same as the server cost itself
    - S3 snapshot storage
- Start with three SuperMicro 1U or 2U servers.
