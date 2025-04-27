# Incus + Netbird + PhoenixNAP

- Published: 2025-01-28
- Updated: 2025-02-01
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/hybrid-cloud-strategy-incus-netbird-phoenixnap/75>

## Hybrid Cloud Synergy

The purpose of this post is to highlight what you can accomplish when you combine [Incus](./tool-incus.md) (virtualization) with [Netbird](./tool-netbird.md) (vpn network overlay) and [PhoenixNAP](https://phoenixnap.com/bare-metal-cloud) (bare-metal cloud provider).

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

## TOC

<!-- toc -->

## References

- [Create Isolated Public Facing Services](./blog-incus-netbird-phoenixnap-isolated.md) - extends this article to support more complex scenarios.

## Problem Statement

**Problem #1:** Cloud computing is very expensive relative to the solution in this post. You pay a premium for the CPU AND the disk space (HD) AND just about everything else. I have a customer whose monthly AWS EBS drive cost was more than the EC2 compute cost. These costs reduce your profit and the good your organization can provide the world.

**Problem #2:** The expertise needed to articulate a cloud architecture is expensive, and these skills and knowledge cannot be used throughout the rest of your organization. Said another way, typical cloud solutions force you to hire expensive cloud people and trap them in the cloud.

## Hybrid Cloud Picture of Success

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
  - Create a new PhoenixNAP hourly bare-metal Debian instance with a single CPU, medium core count and medium RAM.
  - This will take you about 4 minutes for purchase and allocation, and it will cost you about $0.30 per hour.
  - Optionally, see below [cloud-init Lock Down](#cloud-init-lock-down) section for added security
- ssh to the server and install [Incus](./tool-incus.md#getting-started). This will take you about 2 minutes.
- Install Netbird. This will take you about 1 minute.
  - Bring up Netbird with your setup key: `netbird up --setup-key xxxxx-xxxx-xxxx`
- Install Netbird on a local machine so that you can test the connection.
- Connect from your local machine to your cloud server via ssh using the Netbird IP/URL.

Congratulations! You now have a distributed hybrid cloud computing environment. You can now add as many Netbird remote users and offices as you deem appropriate and keep your services private.

## Code Repository

The code and details needed to complete the following steps are [provided here](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall) for your reference.

## Lock it Down

After you prove you can connect via the Netbird network, let's lock down your server to prevent the outside world from seeing your services. 

`ssh` to the server via the Netbird IP, and issue the following commands:

```bash
git clone https://github.com/chuckstack/incus-netbird-phoenixnap-firewall.git
cd incus-netbird-phoenixnap-firewall
sudo nft -f ./chuck-stack.conf # make new rules active immediately
sudo cp ./chuck-stack.conf /etc/nftables.conf # make new rules persist in future
sudo nft delete table inet chuck-stack-temp # delete temp rules created during cloud-init if applicable
```

These commands configure and enable an nftables firewall to do the following:

- Allow nothing from the outside world to enter your server
- Adds no additional restrictions around the default Netbird and Incus network adapters/bridges

Notice the simplicity and comments of the [firewall file](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/chuck-stack.conf). 

Here is an nftables example of how to open ssh to only your IP if needed: <https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/cloud-init.md>

Notes about leaving SSH open to your IP: 

- Your local IP can change if you have DHCP.
- Opening SSH to an IP can open the server to an entire group of people that share your IP (local office).

It is important to note that we am not a security advisors. You are well advised to validate any claims made here. Here is how we quickly tested the server from a remote machine:

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
incus launch images:debian/12/cloud debian-guest-01 -d root,size=12GiB
```

Connect to your Debian server:

```bash
incus exec debian-guest-01 bash
```

Install openssh Server if you wish to connect directly to this server via SSH ([see Netbird SSH options](./tool-netbird.md#ssh-using-netbird)):

```bash
apt update
apt install openssh-server
```

Install Netbird:

```bash
netbird up --setup-key xxxxx-xxxx-xxxx
```

Install nginx so that we can see the default page:

```bash
apt update
apt install nginx -y
```

Note: New containers do not have any firewall rules enabled by default. While the outside world cannot see/find them, anyone on your Netbird network can access all open ports.

If all worked as expected, you can exit back to your local machine and test your connection. Do the following:

- Confirm you can see your Debian machine in your Netbird web console and copy its Netbird URL.
- Use your local browser to connect to your Debian server running nginx by simply pasting the Netbird URL in the browser.

## Taking Inventory of What We Accomplished

I cannot put into words how excited I am about this solution. We created a global network (using Netbird) using a tool that can run anywhere (Incus) to provide service to our organization at a fraction of the cloud cost (PhoenixNAP).

We can test our services on a local desktop, deploy services to a local server, and replicate services to cloud servers... All using the same tools and skills at every step!

## Cost Comparison

I previously stated this solutions costs between 1/3 and 1/4 that of AWS, Azure and other major cloud providers. The real savings is shockingly more!

Let's break this down:

- Compute: For a 96 core x86 with between about 300GiB of RAM as of the time of this writing:
  - PhoenixNAP is 1/5 the compute cost of AWS
    - PhoenixNAP (s4.x6.c6.Large): $21,000 total paid monthly over 3 years
      - Intel Xeon 6 6731E (96 core) - launched Q2 2024
      - 256 GiB RAM
      - 4 TB NVMe
      - 2x 25Gbps
    - AWS (c6a.48xlarge): $131,775 (all upfront on a 3-year reservation standard - non-convertable)
      - 3.6 GHz 3rd generation AMD EPYC processors (48 core AMD EPYC 7R13)
      - 384 GiB RAM
      - No hard drive
      - 50 Gbps
    - AWS (m7i.48xlarge): $100,400 (all upfront on a 3-year reservation standard - non-convertable)
      - 3.2 GHz 4th Generation Intel Xeon Scalable processor (48 core Sapphire Rapids 8488C) - launched Q1 2023
      - 768 GiB RAM
      - No hard drive
      - 50 Gbps
    - Note that effort was made to disclose details and make this comparison reasonable. If you have concerns about this comparison, [please comment here](https://team.chuck-stack.org/t/hybrid-cloud-strategy-incus-netbird-phoenixnap/75).
    - Note that the AWS m7i.48xlarge (virtualized) and m7i.metal-48xl (bare-metal) are approximately the same price.
- PhoenixNAP includes 4TB of storage versus AWS includes no storage. All storage purchased in AWS increases the margin.
- PhoenixNAP (in our case) uses Incus for virtualization. This means the same virtualization is used everywhere. This means we only need one skillset. AWS has no on-premise or desktop virtualization solution that is consistent with its cloud offering. This means I now need double the number of experts.
- Incus allows for on-premise computing using the exact same tools and expertise. [Per this page](./tool-incus.md#medium-cluster-rack), I can purchase 72 cores (144vCPU) of computing power across 3 servers (redundancy) to run on-premise. We have now almost doubled AWS's computing power across multiple data centers, and we are will less than 1/3 the cost.
- AND, we have way more flexibility.
- AND, we still reserve the right to use AWS if the need arises.

## cloud-init Lock Down

Note that this step is not critical; however, it is good practice. It is offered for your consideration.

When you create a new instance in PhoenixNAP with a public IP, the machine's firewall is initially inactive/open. [Here](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/cloud-init.md) is a cloud-init script that will prevent anyone other than someone from you IP address from connecting to your machine's SSH port.

You can copy and paste this text into the 'Deploy New Server' process => 'Cloud Init' section when you check the 'Add user-data to cloud-init configuration' checkbox.

Do not forget to follow the directions at the [top of the page](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/cloud-init.md).

You can see the cloud-init status:

```bash
cloud-init status
```

You can view the main cloud-init log file:

```bash
cat /var/log/cloud-init.log
```

You can view the cloud-init output log:

```bash
cat /var/log/cloud-init-output.log
```

## Creating An Emergency Backdoor

Note that PhoenixNAP has a 'Launch Console' feature to help you connect to your server even if all other methods fail. Launching a console via the browser from the portal gets you to a login screen. You will need to either give your debian user a password, or find a different way to login per the PhoenixNAP support team.

To give your debian user a password:

```bash
sudo passwd debian
```

Note that you must assign and record the password before you need it in an emergency scenario.

## Frequently Asked Questions

### One or Two Servers?

Should you create one or two servers in the cloud once you go into production? This is a great question. Understand you need some form of redundancy in case bad things happen. If you have on-premise computing, PhoenixNAP can be your redundancy, in which case you only need one PhoenixNAP server. The opposite is also true.

If PhoenixNAP is your only computing source, you should use two servers. Both can be in production; however, the load/size needs to allow for one server to go offline and still provide all services on the remaining server for at least a period of time.

### Should you use Incus clustering?

Maybe. Only consider Incus clustering if you have 3 or more servers. Even if you have 3 servers, you should still critically question if you want to cluster. Creating a single cluster from 3 servers adds additional features AND it adds additional complexity. 

The additional complexity needs to be justified. It is perfectly acceptable in many circumstances to maintain 3 isolated Incus instances.

Reference: [Incus Clustering](./tool-incus.md#cluster-virtualization)

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/hybrid-cloud-strategy-incus-netbird-phoenixnap/75>.

## TODO

There are no open todo items.
