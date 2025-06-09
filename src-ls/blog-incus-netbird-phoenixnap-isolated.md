# Create Isolated Public Facing Services in Incus + Netbird + PhoenixNAP

- Published: 2025-04-08
- Updated: 2025-04-08
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/create-isolated-public-facing-services-in-incus-netbird-phoenixnap/83>
- Status: Released

## Host Public Applications

The purpose of this post is to describe how the [Incus + Netbird + PhoenixNAP](./blog-incus-netbird-phoenixnap.md) article has been updated to automatically include a safe place to host public-facing applications and services.

Here is the benefit short story:

- Use your existing Incus infrastructure
- Create one or more isolated networks
- Host a public facing service in an isolated network

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## TOC

<!-- toc -->

## Isolated Bridge

[This script](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/isolate.sh) does the following:

- Creates a new isolated Linux/Incus network bridge
- Creates a new Incus isolated profile (that makes use of the isolated network bridge)
- Creates a new Incus ACL to ensure a container cannot communicate with anyone except the outside world

Update the variables at the top of the script according to your preferences.

Use the following to create a new instance in the `isolated-aa` profile:

```bash
incus launch images:debian/12/cloud delme-debian-isolated-01 --profile isolated-aa
```

## Undo Button

[Use this script](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/isolate-remove.sh) to remove the above artifacts. Here are the steps:

- Delete instances that use the `isolated-aa` profile
- [Update the script variables](https://github.com/chuckstack/incus-netbird-phoenixnap-firewall/blob/main/isolate-remove.sh) accordingly (if needed)
- Run the script

## Multiple Isolated Network Bridges

You can create as many isolated bridges as is needed. The above example (with its single network bridge) is great at creating completely isolated instances; however, you might have scenarios where you need more than one instance/container to support a service or application.

An easy adaptation of the above script is to create a dedicated network bridge per service (collection of instances). The only change you make is to alter the acl rules according to how you want your instances to communicate with each other.

You simply change the variables at the top of the script and execute accordingly.

## Making an Service Public

The easiest way to make an isolated service or application public is to use a Cloudflare tunnel and application.

- The Cloudflare tunnel creates a publicly available entry point.
- The Cloudflare application shares the same URL as the tunnel and creates a hook for adding additional features/filters to your URL.
  - Additional features includes forcing email authentication and/or OTP.
  - Additional filters includes limiting access based on a URL path mask.

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
