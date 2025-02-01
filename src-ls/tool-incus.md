# Incus - Virtualization

We are leading with Incus and virtualization because we feel that virtualization is a critical part of your small and medium organization stack. We prefer Incus; however, you can use any virtualization tool you are comfortable with such as AWS, GCP, Azure, etc... You simply need some form of virtualization. On this page, we will explain why Incus is a compelling option.

## Page Contents
- [What is Incus](#what-is-incus)
- [Why we love Incus](#why-we-love-incus)
- [Types of virtualization](#types-of-virtualization)
- [Incus relation to Docker](#incus-relation-to-docker)
- [Incus relation to Nix](#incus-relation-to-nix)
- [Incus Use Cases](#incus-use-cases)
- [Hardware Considerations](#hardware-considerations)
- [Getting Started](#getting-started)

## What is Incus

[Incus](https://linuxcontainers.org/incus/docs/main/) is a Linux application that allows you to take any single computer or collection/cluster of computers and turn them into a virtualization platform.

We encourage you to [try Incus online now](https://linuxcontainers.org/incus/try-it/).

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

In summary, Incus allows you to start quickly with what you have and finish big!

## Types of virtualization

One of the greatest benefits of Incus is that it gives you so many virtualization options in a single package. Incus maintains current container and virtual machine images for commonly used Linux operating systems including: Debian, Ubuntu, NixOS, Alpine, Arch, etc... 

You can add DockerHub as an Incus image repository; therefore, you can launch almost any image with almost no additional effort, infrastructure or nesting when using Incus.

## Incus has Projects

As your virtualization needs grow, you can use projects to keep your Incus server clean by grouping related instances together. In addition to isolated instances, each project can also have specific images, profiles, networks, and storage. 

This helps organizations support the growth of organizations in an organized manner.

## Incus Relation to Docker and Kubernetes

Kubernetes (K8s) is web-scale application platform designed to manage high numbers of single-purpose containers. Docker is the most common container used in Kubernetes. 

Docker (and container solutions like it) are designed to be the smallest portable unit of computing. It typically contains only the OS pieces critical to supporting a particular application.

Incus is a virtualization platform whose containers are a good mix/compromise between docker (bare minimum) and virtual machines (a complete operating system). Incus containers are minimal; however, the have systemd enabled and the persist between reboots. I would consider Incus containers to be semi-ephemeral.

Like DockerHub, Incus maintains a collection of images that can be downloaded, configured and launched to a useable state in a matter of seconds.

Incus provides support for running OCI compliant containers. This means you can add DockerHub as an image repository to Incus and directly launch a Docker container in Incus.

Incus provides support for both containers and virtual machines. Containers are smaller and share the hosts kernal and hardware resources. Virtual machines are completely abstracted away from the host's operating system. Virtual machines are larger (HD and RAM) and more portable between hosts as a result of their abstraction.

As of time of this writing, there is no production quality Docker Compose solution; however, there is [one in proof of concept stage](https://discuss.linuxcontainers.org/t/proof-of-concept-incus-compose/21455).

Here are the reason we prefer Incus over Docker:

- Incus gives us a single tool to deploy and manage almost all virtualization scenarios.
- Docker is great at application deployment. We need more than just application deployment.
- Incus covers more virtualization use case scenarios than Docker. For example: we need semi-permanent instances for long running applications like PostgreSQL. Incus provides this capability with no additional effort.
- Incus supports running Docker containers without needing a dedicated Docker environment.
- Note: Incus does not support Docker Compose yet.

## Incus Relation to Nix

[Nix](./tool-linux.md#nix) is a compelling option for virtualization in some specific circumstances. If the chuck-stack already uses Nix, why add Incus in addition to Nix? 

Here are our thoughts:

- Nix is appreciably harder to learn and get up and running as a virtualization platform.
- Incus covers many more virtualization scenarios than Nix.
- Nix is a great virtualization solution when you need a specialized, high-volume and resource sensitive application hosting solution. Replit's use of Nix is a good example of when Nix is preferable. ([Quick link...](https://blog.replit.com/nix_web_app))
- A Nix solution can easily be deployed inside Incus.

## Incus Use Cases

We believe the single greatest benefit to Incus is the ability to use the same tool across many use cases deployed anywhere in the world. The purpose of this section is to describe these use cases:

- desktop - good for learning and local development
- single-server - good for your first deployment
- cluster - good for growth and stability
- hybrid - good for maximizing performance and managing costs

### Desktop Virtualization

You can install and use Incus on any Linux desktop or laptop in a matter of minutes. This is a great way to get started learning Incus and the chuck-stack.

The chuck-stack team uses Incus installed on desktop extensively. Here are some examples uses:

- Install and test new applications and configurations
- Create VPNs inside a container to isolate remote networks
- Install and run Windows when needed
- Run and test local UAT instances of the chuck-stack

Here are things you can do with your first Incus installation:

- fire up multiple instances (container or virtual machines) within seconds using most major Linux distributions
- create snapshots
- restore from snapshots

References: 

- [Incus First Steps](https://linuxcontainers.org/incus/docs/main/tutorial/first_steps/)
- [Try Incus online](https://linuxcontainers.org/incus/try-it/)

### Single-Server Virtualization

You can deploy and serve the chuck-stack to hundreds of users on a single-server Incus deployment. There are few distinctions between the desktop and single-server use cases. The biggest differences might be:

- where the server is located - anywhere in the world (from closet to data center)
- the size and features of the server

To see how much power for a given price you can derive from a single cloud server, look at the [PhoenixNAP bare metal cloud](https://phoenixnap.com/bare-metal-cloud) pricing and availability. Then compare the cost to AWS. AWS is approximately 3x+ the cost for similar compute and storage capabilities.

### Cluster Virtualization

You can deploy [Incus to a cluster](https://linuxcontainers.org/incus/docs/main/explanation/clustering/) of 3 or more servers. Doing so gives you better control and solutions for maintenance, stability, networking, and storage as compared to a single-server solution. 

You can deploy your first cluster in minutes, and there is virtually no limit to how deep you can go to fine-tune and grow your cluster.

References:
- [Manually configuring a cluster](https://linuxcontainers.org/incus/docs/main/howto/cluster_form/)
- [Automated cluster configuration](https://github.com/lxc/incus-deploy)

### Hybrid Virtualization

It is common to deploy all the above Incus use cases in a single organization. Here is what such a deployment might look like:

- clustered production deployment in a data center
- single-server test/UAT deployment on a local LAN
- desktop engineering/ops deployment for development and testing
- machine images shared between all locations

The hybrid virtualization scenario is why we love Incus. It gives your organization the ability to use the same tool (same skill set) and artifacts everywhere for any purpose (production, test, UAT, ...).

> We believe the single greatest benefit to Incus is the ability to use the same tool across many use cases deployed anywhere in the world.

## Netbird

Incus and [Netbird](./tool-netbird.md) have good synergy. Netbird gives you an easy to install and manage network overlay to connect all your Incus clusters around the world.

Reference: [Hybrid Cloud Synergy: Incus + Netbird PhoenixNAP](./blog-incus-netbird-phoenixnap.md)

## Vocabulary

This section defines important terms. The hope is to create better and more concise discussions below.

- Incus installation - a logical Incus instance running on one or more hardware devices. This term can refer to a stand-alone Incus host or a cluster of incus hosts.
- Incus host - a single hardware device supporting Incus.
- Incus guest - a virtualized operating system running inside an Incus host.
- Incus container - an Incus guest that runs directly inside the Incus host's kernel.
- Incus virtual machine - an Incus guest that runs a separate kernel on a virtual hardware layer.
- Incus image - an Incus guest saved to an Incus installation.

## Hardware Considerations

It is exceedingly difficult to recommend hardware given the wide number of Incus use cases; however, it is important to start somewhere. The purpose of this section is to offer you a starting point and help you reason about hardware for your Incus installation.

Hardware can range from an old desktop/laptop to a cluster of rack servers. The hardware can reside anywhere from sitting under your desk to a rack in a data center.

### General Guidelines

Here are some general Incus and hardware guidelines at the time of this writing. 

Here are Incus guidelines and considerations:

- Incus itself requires little in terms of computing power. Almost all the hardware capacity demands come from the instances you create inside Incus.
- Any incus installation is a container/virtual-machine image server; therefore, any container/virtual-machine image on any incus installation can be shared with other Incus installations. This means you can have a smaller and less expensive Incus installation supporting disaster recovery. It also means you can more easily move your existing images to bigger/better hardware as you upgrade.
- Incus containers run more closely to actual hardware than virtual machines. This means that containers are around 10% to 20% more performant than virtual machines. It also means that containers are more dependant on the Incus host's hardware. As a result, containers are less portable than virtual machines.
- When choosing hardware, you create the best container portability when all Incus hosts contain the same hardware.

Here are hardware guidelines and considerations:

- You can install Incus on almost any hardware that supports Debian Linux (Raspberry Pis, Intel NUCs, old PCs, laptops, servers, ...).
- Choose high core-count, single CPU devices over dual CPU devices for budget considerations.
- If you do not plan to run a GPU, choose 1U servers for budget considerations.
- Dual high-speed (10G for example) NICs better support cluster configurations due to network demands created by Ceph (distributed storage)
- You need 3+ devices to create a cluster. If you only have two devices, you are better served by creating two isolated Incus installations.
- If you plan to put a server in a data center, power is a consideration - both in terms of the server itself as well as any GPUs. Older hardware consumes more power per unit of space/computer/storage. A GPU can consume more power than the server itself.
- This page does not discuss switch/routing considerations.
- Buying refurbished hardware from places like ebay can greatly reduce hardware costs. However, consider the following:
  - Security concerns (the system you're buying may have a persistent attack code in its firmware)
  - Difficulty getting critical security updates (some vendors require an account with proof of purchase)
  - Harder to get replacement parts on short notice (and/or warranty services)

### Small Cluster Desktop

The purpose of this section is to record thoughts and examples related to hardware for small or beginner clusters. You can create a reasonably powered new 3-host desktop cluster for about $3K USD.

Here is an example first cluster:

- Start with three [System76 Meerkat Tall](https://system76.com/desktops/meerkat) each with the following:
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

You can easily increase capabilities by simply choosing a more powerful desktop (such as the [System76 Thelio](https://system76.com/desktops/thelio)) where you can achieve 32 cores per host ($2K USD) and add a 16GB GPU ($800 USD more) for AI loads. This would give you an AI capable cluster for about $9K USD.

We reference system76 as a hardware provider because of their long and continuous support of the [PopOS operating system and the Linux community](./tool-linux.md#popos-shell).

### Medium Cluster Rack

The purpose of this section is to record thoughts and examples related to hardware for a medium rack-mount cluster. You can create a powerful new 3-host rack-mount cluster for about $15K USD. Here is an example server at the time of writing:

- SuperMicro,  a cheap enough option but still reasonably balanced may look like:
  - Chassis: AS -1115SV-WTNRT
  - CPU: AMD EPYC 8224P (24-core / 48-threads)
  - RAM: 6x 64GB DDR5-4800
  - Storage: 1x 1TB NVME M.2 internal for OS (+ whatever you want as hotplug storage for use by the instances)
  - Comes with 2x 10Gb (copper) networking

This configuration represents a significant increase in CPU core count, memory and storage over the desktop cluster described above. It also represents a form factor that can be placed in almost any data center (local or cloud).

## Getting Started

The following is provided as a quick reference. Please see the official references below for more and up to date details.

Install as root on Debian ([official reference](https://github.com/zabbly/incus)):
```bash
curl -fsSL https://pkgs.zabbly.com/key.asc | gpg --show-keys --fingerprint
mkdir -p /etc/apt/keyrings/
curl -fsSL https://pkgs.zabbly.com/key.asc -o /etc/apt/keyrings/zabbly.asc
sh -c 'cat <<EOF > /etc/apt/sources.list.d/zabbly-incus-stable.sources
Enabled: yes
Types: deb
URIs: https://pkgs.zabbly.com/incus/stable
Suites: $(. /etc/os-release && echo ${VERSION_CODENAME})
Components: main
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/zabbly.asc

EOF'
apt-get update
apt-get install incus -y
```

Configure as your typical user ([official reference](https://linuxcontainers.org/incus/docs/main/tutorial/first_steps/)):

```bash
YOUR_USERNAME=$(id -u -n)
sudo adduser $YOUR_USERNAME incus-admin
newgrp incus-admin
```

[Here is a list of Incus scripts](https://bketelsen.github.io/IncusScripts/scripts) to help you get common applications up and running.
