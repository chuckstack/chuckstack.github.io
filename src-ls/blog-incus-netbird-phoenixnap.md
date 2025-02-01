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
- Create a new PhoenixNAP hourly bare-metal Debian instance with a single CPU, medium core count and medium RAM. This will take you about 4 minutes for purchase and allocation, and it will cost you about $0.30 per hour.
- ssh to the server and install [Incus](./tool-incus.md#getting-started). This will take you about 2 minutes.
- Install Netbird. This will take you about 1 minute.
  - Bring up Netbird with your setup key: `netbird up --setup-key xxxxx-xxxx-xxxx --allow-server-ssh`
  - 'Allow ssh' in your Netbird console in addition to the above `--allow-server-ssh`.
- Install Netbird on a local machine so that you can test the connection.
- Connect from your local machine to your cloud server via ssh using the Netbird IP/URL.

Congratulations! You now have a distributed hybrid cloud computing environment.

## Lock it Down

After you prove you can connect via the Netbird network, let's lock down your server. ssh to the server via the Netbird IP, and issue the following firewall commands. You may execute them as many times as is needed.

```bash
#!/bin/bash
# Install iptables-persistent to save rules
DEBIAN_FRONTEND=noninteractive sudo apt-get install iptables-persistent -y

# Set my IP if you wish to allow ssh from it - uncomment this and below statements if needed
#MY_IP_ADDRESS=x.x.x.x
#MY_IP6_ADDRESS=x:x:x:x

# Find my IP addresses
##curl -4 ifconfig.me #ip-v4
##curl -6 ifconfig.me #ip-v6

# Get network interface details
MAIN_INTERFACE=$(ip route get 8.8.8.8 | grep -oP 'dev \K\S+')
INCUS_SUBNET=$(ip -4 addr show incusbr0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}/\d+')
INCUS_SUBNET_V6=$(ip -6 addr show incusbr0 | grep -oP '(?<=inet6\s)[0-9a-f:]+/\d+' | grep -v '^fe80')

# Flush existing rules
sudo iptables -F
sudo iptables -X
sudo iptables -t nat -F
sudo iptables -t nat -X
sudo ip6tables -F
sudo ip6tables -X
sudo ip6tables -t nat -F
sudo ip6tables -t nat -X

# Set default policies to DROP
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT
sudo ip6tables -P INPUT DROP
sudo ip6tables -P FORWARD DROP
sudo ip6tables -P OUTPUT ACCEPT

# Allow loopback
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A OUTPUT -o lo -j ACCEPT
sudo ip6tables -A INPUT -i lo -j ACCEPT
sudo ip6tables -A OUTPUT -o lo -j ACCEPT

# Allow established and related connections
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo ip6tables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow wt0 interface
sudo iptables -A INPUT -i wt0 -j ACCEPT
sudo iptables -A OUTPUT -o wt0 -j ACCEPT
sudo ip6tables -A INPUT -i wt0 -j ACCEPT
sudo ip6tables -A OUTPUT -o wt0 -j ACCEPT

# Allow incusbr0 interface
sudo iptables -A INPUT -i incusbr0 -j ACCEPT
sudo iptables -A OUTPUT -o incusbr0 -j ACCEPT
sudo ip6tables -A INPUT -i incusbr0 -j ACCEPT
sudo ip6tables -A OUTPUT -o incusbr0 -j ACCEPT

# NAT and forwarding rules
sudo iptables -t nat -A POSTROUTING -s $INCUS_SUBNET -o $MAIN_INTERFACE -j MASQUERADE
sudo iptables -A FORWARD -i incusbr0 -o $MAIN_INTERFACE -j ACCEPT
sudo iptables -A FORWARD -i $MAIN_INTERFACE -o incusbr0 -j ACCEPT
sudo ip6tables -t nat -A POSTROUTING -s $INCUS_SUBNET_V6 -o $MAIN_INTERFACE -j MASQUERADE
sudo ip6tables -A FORWARD -i incusbr0 -o $MAIN_INTERFACE -j ACCEPT
sudo ip6tables -A FORWARD -i $MAIN_INTERFACE -o incusbr0 -j ACCEPT

# Allow SSH from your specific IP (must set MY_IP_ADDRESS and MY_IP6_ADDRESS above)
#sudo iptables -A INPUT -p tcp -s $MY_IP_ADDRESS --dport 22 -j ACCEPT
#sudo ip6tables -A INPUT -p tcp -s $MY_IP6_ADDRESS --dport 22 -j ACCEPT

# If you want to allow SSH from ANYWHERE (less secure)
#sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
#sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow SSH output
sudo iptables -A OUTPUT -p tcp --sport 22 -j ACCEPT
sudo ip6tables -A OUTPUT -p tcp --sport 22 -j ACCEPT

# Save the iptables rules
DEBIAN_FRONTEND=noninteractive sudo netfilter-persistent save
```

These commands configure and enable a firewall to do the following:

- Allow nothing from the outside world to enter your server
- Removes all restrictions around both the Netbird and Incus network adapters
- Allows containers to use DNS to reach the outside world

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

I cannot put into words how excited I am about this solution. We created a global network (using Netbird) using a tool that can run anywhere (Incus) to provide service to our organization.

We can test our services on a local desktop, deploy services to a local server, and replicate services to cloud servers... All using the same tools and skills at every step!

## Cost Comparison

I previously stated this solutions costs between 1/3 and 1/4 that of AWS, Azure and other major cloud providers. The real savings is shockingly more!

Let's break this down:

- Compute: For a 96 core (192 vCPU) x86 with between about 300GiB of RAM as of the time of this writing:
  - PhoenixNAP is 1/6 the compute cost of AWS
    - PhoenixNAP (s4.x6.c6.Large): $21,000 total paid monthly over 3 years
      - Intel Xeon 6 6731E
      - 256 GiB RAM
      - 4 TB NVMe
      - 2x 25Gbps
    - AWS (c6a.48xlarge): $131,775 (all upfront on a 3-year reservation standard - non-convertable)
      - 3.6 GHz 3rd generation AMD EPYC processors (AMD EPYC 7R13)
      - 384 GiB RAM
      - No hard drive
      - 50 Gbps
    - AWS (m7i.48xlarge): $100,400 (all upfront on a 3-year reservation standard - non-convertable)
      - 3.2 GHz 4th Generation Intel Xeon Scalable processor (Sapphire Rapids 8488C)
      - 768 GiB RAM
      - No hard drive
      - 50 Gbps
    - Note that effort was made to make this comparison reasonably equivalent. If you have concerns this comparison, [please comment here](https://team.chuck-stack.org/t/hybrid-cloud-strategy-incus-netbird-phoenixnap/75).
    - Note that the AWS m7i.48xlarge (virtualized) and m7i.metal-48xl (bare-metal) are approximately the same price.
- PhoenixNAP includes 4TB of storage versus AWS includes not storage. All storage puchased in AWS increases the margin.
- PhoenixNAP (in our case) uses Incus for virtualization. This means the same virtualization is used everywhere. This means we only need one skillset. AWS has no on-premise or desktop virtualiztion solution that is consistent with its cloud offering. This means I now need double the number of experts.
- Incus allows for on-premise computing using the exact same tools and expertise. [Per this page](./tool-incus.md#medium-cluster-rack), I can purchase 72 cores (144vCPU) of computing power accross 3 servers (redundancy) to run on-premise. We have now almost doubled AWS's computing power across multiple data centers, and we are will less than 1/3 the cost.
- AND, we have way more flexibility.
- AND, we still reserve the right to use AWS if the need arises.

## cloud-init Lock Down

Note that this step is not critical; however, it is good practice. It is offered for your consideration.

When you create a new instance in PhoenixNAP with a public IP, the machine's firewall is initially inactive/open. Below is a cloud-init script that will prevent anyone other than someone from you IP address from connecting to your machine's SSH port.

You can copy and paste the following into the 'Deploy New Server' process => 'Cloud Init' section when you check the 'Add user-data to cloud-init configuration' checkbox.

Do not forget to set the "YOUR.IP.ADDRESS.HERE" variable with you actual IP address. If you wish to use IPV6, simply uncomment that section and set your "YOUR.IPV6.ADDRESS.HERE" variable.

Your IPV4 address: `curl -4 ifconfig.me`
Your IPV6 address: `curl -6 ifconfig.me`

```yaml
#cloud-config

write_files:
  - path: /tmp/setup-iptables.sh
    permissions: '0755'
    content: |
      #!/bin/bash

      ###############
      # IPv4 rules
      ###############
      export MY_IPV4="YOUR.IP.ADDRESS.HERE"
      cat > /etc/network/iptables.rules << EOF
      *filter
      :INPUT DROP [0:0]
      :FORWARD DROP [0:0]
      :OUTPUT ACCEPT [0:0]

      -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
      -A INPUT -i lo -j ACCEPT
      -A INPUT -p tcp -s $MY_IPV4 --dport 22 -j ACCEPT

      COMMIT
      EOF
      iptables-restore < /etc/network/iptables.rules

      ###############
      ## IPv6 rules
      ###############
      #export MY_IPV6="YOUR:IPV6:ADDRESS:HERE"
      #cat > /etc/network/ip6tables.rules << EOF
      #*filter
      #:INPUT DROP [0:0]
      #:FORWARD DROP [0:0]
      #:OUTPUT ACCEPT [0:0]

      #-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
      #-A INPUT -i lo -j ACCEPT
      #-A INPUT -p tcp -s $MY_IPV6 --dport 22 -j ACCEPT
      #-A INPUT -p ipv6-icmp -j ACCEPT

      #COMMIT
      #EOF
      #ip6tables-restore < /etc/network/ip6tables.rules

runcmd:
  - apt-get update
  - DEBIAN_FRONTEND=noninteractive apt-get install -y iptables-persistent
  - /tmp/setup-iptables.sh
  - netfilter-persistent save
  - netfilter-persistent reload
```

You can view your iptables settings after login using:

```bash
sudo iptables -L -v
sudo ip6tables -L -v
```

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
