# Create Isolated Public Facing Services in Incus + Netbird + PhoenixNAP

- Published: 2025-04-08
- Updated: 2025-04-08
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/create-isolated-public-facing-services-in-incus-netbird-phoenixnap/83>
- Status: Drafted (TODO: fix dns...)

## Host Public Applications

The purpose of this post is to extend the [Incus + Netbird + PhoenixNAP](./blog-incus-netbird-phoenixnap.md) article to create a safe place to host public-facing applications and services.

Here is the benefit short story:

- Use your existing Incus infrastructure
- Create one or more isolated networks
- Host a public facing service in an isolated network

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## TOC

<!-- toc -->

## Isolated Bridge

Below is a script that does the following:

- Creates a new isolated Linux/Incus network bridge
- Creates a new Incus isolated profile
- Creates a new Incus ACL to ensure a container cannot communicate with anyone except the outside world

```
# variables
INCUS_NETWORK=incusbr-iso
INCUS_PROFILE=isolated
INCUS_ACL=public-only

# Create artifacts
incus network create $INCUS_NETWORK
incus profile show default | incus profile create $INCUS_PROFILE
incus profile device set $INCUS_PROFILE eth0 network=$INCUS_NETWORK
incus network acl create $INCUS_ACL

# Get network interface details
MAIN_INTERFACE=$(ip route get 8.8.8.8 | grep -oP 'dev \K\S+')
echo MAIN_INTERFACE=$MAIN_INTERFACE
INCUS_ISO_SUBNET=$(ip -4 addr show $INCUS_NETWORK | grep -oP '(?<=inet\s)\d+(\.\d+){3}/\d+')
echo INCUS_ISO_SUBNET=$INCUS_ISO_SUBNET
INCUS_ISO_SUBNET_V6=$(ip -6 addr show $INCUS_NETWORK | grep -oP '(?<=inet6\s)[0-9a-f:]+/\d+' | grep -v '^fe80')
echo INCUS_ISO_SUBNET_V6=$INCUS_ISO_SUBNET_V6
INCUS_ISO_DNS=${INCUS_ISO_SUBNET%/*}
echo INCUS_ISO_DNS=$INCUS_ISO_DNS

# Create and configure an incus acl and apply it to our isolated network bridge
incus network acl rule add $INCUS_ACL ingress action=allow
incus network acl rule add $INCUS_ACL egress action=allow
#incus network acl rule add $INCUS_ACL egress action=allow destination=$INCUS_ISO_DNS/32
#incus network acl rule add $INCUS_ACL egress action=allow destination=$INCUS_ISO_DNS/32 protocol=udp destination_port=53
#incus network acl rule add $INCUS_ACL egress action=allow destination=$INCUS_ISO_DNS/32 protocol=tcp destination_port=53

# Block private networks
incus network acl rule add $INCUS_ACL egress action=reject destination=10.0.0.0/8
incus network acl rule add $INCUS_ACL egress action=reject destination=192.168.0.0/16
incus network acl rule add $INCUS_ACL egress action=reject destination=172.16.0.0/12

incus network set $INCUS_NETWORK security.acls=$INCUS_ACL
incus profile device set $INCUS_PROFILE eth0 security.acls=$INCUS_ACL
incus profile show $INCUS_PROFILE

# Allow $INCUS_NETWORK interface
sudo iptables -A INPUT -i $INCUS_NETWORK -j ACCEPT
sudo iptables -A OUTPUT -o $INCUS_NETWORK -j ACCEPT
sudo ip6tables -A INPUT -i $INCUS_NETWORK -j ACCEPT
sudo ip6tables -A OUTPUT -o $INCUS_NETWORK -j ACCEPT

# NAT and forwarding rules
sudo iptables -t nat -A POSTROUTING -s $INCUS_ISO_SUBNET -o $MAIN_INTERFACE -j MASQUERADE
sudo iptables -A FORWARD -i $INCUS_NETWORK -o $MAIN_INTERFACE -j ACCEPT
sudo iptables -A FORWARD -i $MAIN_INTERFACE -o $INCUS_NETWORK -j ACCEPT
sudo ip6tables -t nat -A POSTROUTING -s $INCUS_ISO_SUBNET_V6 -o $MAIN_INTERFACE -j MASQUERADE
sudo ip6tables -A FORWARD -i $INCUS_NETWORK -o $MAIN_INTERFACE -j ACCEPT
sudo ip6tables -A FORWARD -i $MAIN_INTERFACE -o $INCUS_NETWORK -j ACCEPT

## lauch instances in this isolated bridge
#incus launch images:debian/12/cloud delme-debian-isolated-01 --profile isolated
## show acl
#incus network acl show public-only
```

Use the following to create a new instance in the `isolated` profile:

```bash
incus launch images:debian/12/cloud delme-debian-isolated-01 --profile isolated
```

## Undo Button

To remove the above artifacts:

- Delete a newly created instances that use the above
- Run the below script

```bash
# variables
INCUS_NETWORK=incusbr-iso
INCUS_PROFILE=isolated
INCUS_ACL=public-only

# delete artifacts
incus profile delete $INCUS_PROFILE
incus network delete $INCUS_NETWORK
incus network acl delete $INCUS_ACL
```

## Multiple Isolated Network Bridges

You can create as many isolated bridges as is needed. The above example (with its single network bridge) is great at creating completely isolated instances; however, you might have scenarios where you need more than one instance to support a service or application.

An easy adaptation of the above script is to create a dedicated network bridge per service (collection of instances). The only change you make is to alter the acl rules according to how you want your instances to communicate with each other.

You simply change the variables at the top of the script and execute accordingly.

## Making an Service Public

The easiest way to make an isolated service or application public is to use a Cloudflare tunnel and application.

- The Cloudflare tunnel creates a publicly available entry point.
- The Cloudflare application shares the same URL as the tunnel and creates a hook for adding additional features/filters to your URL.

The details of creating a publicly available secure tunnel using Cloudflare are outside of the scope of this article; however, the process is quite simple. Join below, and we will create a video demonstration just for you.

## Frequently Asked Questions

### Can you make a publicly available Netbird tunnel?

Not as of the time of this writing. We will watch for this feature.

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/create-isolated-public-facing-services-in-incus-netbird-phoenixnap/83>.

## TODO

- Change firewall scripts to use nftables (similar to how acl rules work) only. Doing so ensures there are no conflicts between nftables and iptables. Change on this post and the original Incus + Netbird + PhoenixNAP post.
- Create an example firewall rule to ensure the incusbr-iso cannot reach incusbr0.
