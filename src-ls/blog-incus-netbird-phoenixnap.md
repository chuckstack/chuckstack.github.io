# Incus + Netbird + PhoenixNAP

- Published: 2025-01-28
- Updated: 2025-01-28
- Author: Chuck Boecking
- Discussion: <https://team.chuck-boecking.org/>

## Hybrid Cloud Synergy

The purpose of this post is to highlight what you can accomplish when you combine [Incus](./tool-incus.md) with [Netbird](./tool-netbird.md) and [PhoenixNAP](https://phoenixnap.com/bare-metal-cloud) (a bare-metal cloud provider).

Here is the benefit short story:

- Create a cost-effective hybrid cloud server with good CPU core count, RAM, and HD at roughly 1/3 to 1/4 the 3-year cost of AWS or Azure
- Hire compute skills and knowledge that can be used throughout your organization (not just in the cloud)
- Secure your systems and hide them from the outside world
- Use any application or service you deem appropriate at any location (Docker + containers + virtual machines)
- Connect your world-wide workforce to these services (remote offices + remote workers)

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

As a result of this article, you can:

- Minimize recurring costs
- Minimize technology skills needed to run a global organization
- Maximize options for computing power

## Problem Statement

**Problem #1:** Cloud computing is very expensive relative to the solution in this post. You pay a Premium for the CPU AND the disk space (HD) AND just about everything else. I have a customer whose monthly AWS EBS drive cost was more than the EC2 compute cost. These costs reduce your profit and the good your organization can provide the world.

**Problem #2:** The expertise needed to articulate a cloud architecture is expensive, and these skills and knowledge cannot be used throughout the rest of your organization. Said another way, typical cloud solutions force you to hire expensive cloud people and trap them in the cloud.

## Hybrid Picture of Success

This post helps you solve the problem statements listed above, drive better productivity across your whole organization, and make the most of your collective skills and knowledge.

Before we get into the details of the solution, I want to state a few importing points:

- Virtualization is important to an organization's success - it helps you make the most of your resources
- Virtualization should exist at all levels (cloud, on-premise, desktop, mobile)
- The same virtualization tools, skills and knowledge should be applied at all levels (not just cloud)

Here is what I am proposing:

- Use a bare-metal cloud provider like [PhoenixNAP](https://phoenixnap.com/bare-metal-cloud) to execute your cloud strategy.
  - They provide the minimum feature set needed to execute your cloud strategy at a more reasonable price (Compute, storage, network) with the ease of use expected from a cloud provider.
- Use [Incus](./tool-incus.md) to execute your virtualization strategy so that you only need to learn one tool to provide your infrastructure.
  - Use it in the cloud.
  - Use it in each of your offices.
  - Use it on desktops.
  - Use it everywhere you need virtualization.
- Connect every virtual server, every office and remote worker to your infrastructure using [Netbird](./tool-netbird.md).

## Implementation Details

Here are the steps to accomplish my proposed hybrid cloud love story:

- Create an account at [Netbird](./tool-netbird.md), and create a new setup key. This will take you about 2 minutes.
- Create an account at [PhoenixNAP](https://phoenixnap.com/bare-metal-cloud) bare-metal service. This will take about 2 minutes.
- Create a new PhoenixNAP hourly bare-metal Debian instance with a single CPU, medium core count and medium RAM. This will take you about 4 minutes for purchase and allocation, and it will cost you about $0.30 per hour.
- ssh to the server and install [Incus](./tool-incus.md). This will take you about 2 minutes.
- Install Netbird. This will take you about 1 minute.
  - Bring up Netbird with your setup key: `netbird up --setup-key xxxxx-xxxx-xxxx --allow-server-ssh`
  - 'Allow ssh' in your Netbird console in addition to the above `--allow-server-ssh`.
- Install Netbird on a local machine so that you can test the connection.
- Connect from your local machine to your cloud server via ssh using the Netbird IP/URL.

Congratulations! You now have a distributed hybrid cloud computing environment.

## Lock it Down

After you prove you can connect via the Netbird network, let's lock down your server.

- ssh to the server via the Netbird IP
- Issue the following UFW firewall commands:
  - sudo ufw allow in on wt0 to any # Netbird bridge adapter
  - sudo ufw allow out on wt0 to any # Netbird bridge adapter
  - sudo ufw allow in on incusbr0 from any # Incus bridge adapter
  - sudo ufw allow out on incusbr0 from any # Incus bridge adapter
  - \# sudo ufw allow from <your-ip-here> to any port 22 # commented out but convenient in case things go badly
  - sudo ufw enable

These commands configure and enable a firewall to do the following:

- Allow nothing from the outside world to enter your server
- Removes all restrictions around both the Netbird and Incus network adapters

It is important to note that I am not a security advisor. You are well advised to validate any claims made here. Here is how I quickly tested the server from a remote machine:

```bash
❯ nmap -Pn -p- -T4 <server-public-ip>
Starting Nmap 7.95 ( https://nmap.org ) at 2025-01-28 12:44 CST
Nmap scan report for <server-public-ip>
Host is up.
All 65535 scanned ports on 131.153.231.201 are in ignored states.
Not shown: 65535 filtered tcp ports (no-response)

Nmap done: 1 IP address (1 host up) scanned in 6582.44 seconds
```

## First Incus Server

Let's configure our first Incus cloud server and join it to the Netbird network.

Connect to your Incus server via ssh and launch your first server:

```bash
incus launch images:debian/12/cloud debian-01 -d root,size=15GiB
```

Connect to your Debian server:

```bash
incus exec debian-01 bash
```

Install Netbird:

```bash
netbird up --setup-key xxxxx-xxxx-xxxx --allow-server-ssh
```

Install nginx so that we can see the default page:

```bash
sudo apt update
sudo apt install nginx -y
```

If all worked as expected, you can exit back to your local machine and test your connection. Do the following:

- Confirm you can see your Debian machine in your Netbird web console and copy its Netbird URL.
- Use your local browser to connect to your Debian server running nginx by simply pasting the Netbird URL in the browser.

## Taking Inventory of What We Accomplished

I cannot put into words how excited I am about this concept. We created a global network (using Netbird) using a tool that can run anywhere (Incus) to provide service to our organization.

We can test our services on a local desktop, deploy services to a local server, and replicate services to cloud servers... All using the same tools at every step!

## Cloud Considerations

- Should you create one or two servers in the cloud once you go into production?
- Should you use Incus clustering?

## Problems with AWS

- expensive (needlessly robs of profit)
- isolated (traps talent and costs)

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.
