# Simplified Server Data Backup with rsync.net

- Published: 2025-02-28
- Updated: 2025-02-28
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/simplified-server-data-backup-with-rsync-net/79>
- Status: Released

## Immutable Off-site Backups are Imperative

The purpose of this post is to offer a simple and safe way to store your information off-site even in the extreme event of a cyber/ransom-ware attack.

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## TOC

<!-- toc -->

## Problem Statements

**Problem #1:** There are many backup solutions available. Finding one that is cost effective and reasonable is difficult.

**Problem #2:** Many backup solutions do not include immutable data feature as an easy and default option. If the backed up data is not immutable, we cannot use it.

## Why We Love rsync.net

Here is why we love rsync.net:

- The solution uses industry standard and best-in-class tools (authentication and file transfer efficiency).
- The only client-side tools you need are probably already installed (rsync, ssh).
- The default behavior includes periodic, immutable snapshots.
- the rsync.net storage rates are competitive.
- rsync.net customer service and automated notices have performed flawlessly for years!

## System Configurator

It is common to have a cloud-init script that establishes the minimum tools and configuration needed to maintain a server. 

Here is our init repository for many servers: <https://github.com/chuboe/chuboe-system-configurator>

Included in the repo is a [single file that orchestrates and executes](https://github.com/chuboe/chuboe-system-configurator/blob/main/sync-backup.sh) the rsync.net backup strategy. Here is an outline:

- [init.sh](https://github.com/chuboe/chuboe-system-configurator/blob/main/init.sh)
  - Runs as part of cloud-init
  - Creates a /opt/chuboe-system-backup directory
  - Moves sync-backup.sh and chuboe-system-backup-cron to this directory
- [sync-backup.sh](https://github.com/chuboe/chuboe-system-configurator/blob/main/sync-backup.sh)
  - Runs as part of [cron job](https://github.com/chuboe/chuboe-system-configurator/blob/main/chuboe-system-backup-cron)
  - Provides an array of commonly backed up artifacts so that you may simply pick the applicable objects
  - Creates a private backup directory that is only available to root
  - Iterates across the artifact array and creates symbolic links pointing to the respective back up objects
  - Executes an rsync command against the private directory containing all the symbolic links

Any time you make a change to sync-backup.sh, be sure to run it manually to ensure all works as expected. You do not want your scheduled script failing silently because of a malformed change.

## Picture of Success

Disaster recover procedures should be monitored and tested frequently. Here is our picture of success. We strive to spend the least effort possible testing our disaster recovery frequently (sometimes daily) as part of our day-to-day operations. Here the details:

- Search on the word 'ACTION' in sync-backup.sh and follow the directions to point the script to your desired remote location (rsync.net).
- Execute the sync-backup.sh script manually to ensure success, and copy the chuboe-system-backup-cron file to /etc/cron.d/ to schedule its automated execution.
- Update your monitoring solution (Zabbix for example) to peek into the rsync.net repo to gather last updated and last file size(s).
- Create alarms for when rsync.net artifacts do not meet necessary criteria - example: a database backup file is 1/10th of the normal size.
- Populate your UAT servers directly from rsync.net so that if any UAT restore fails, you are immediately aware of an issue.
- It is ok to have a UAT server that refreshes every day.
- Generally speaking, no restoration process should depend on a production instance - pull from rsync.net instead.

## Disaster Story

It is common to prepare for disaster (software corruption, machine failure, site availability, ...). These issues are relatively easy to recover from. 

But what happens when you are cyber attached? What happens when your machine is infected, and as a result, your machine backup images are infected. What happens when your backups are deleted. How do you know what to trust?

We have suffered through this situation. We know how painful it can be. This solution was born from this pain.

The reason the [sync-backup.sh array](https://github.com/chuboe/chuboe-system-configurator/blob/main/sync-backup.sh) is so long is because there are many things you depend on to execute a service.

Operating system backup images can hide many secrets because of the OS complexity. The value of also backing up the individual artifacts is because they are easy to reason about during disaster recovery.

## What to Do In Case of Disaster

In case of disaster, you will first look to restore servers from images. See Incus [images](https://linuxcontainers.org/incus/docs/main/howto/images_create/) and [snapshots](https://linuxcontainers.org/incus/docs/main/howto/instances_backup/#instances-snapshots) for details about managing machine backups.

Even if you can restore from an image or snapshot, the data in the image may be stale. Let's look at the restoration process. Here are the steps:

- Restore or rebuild your new server.
- Use rsync.net (rsync) to create a local copy of the data.
- Note that sync-backup.sh backs up a copy of itself. This copy acts as your guide/roadmap to restore data to the proper location.
- Prioritize what artifacts need to be restored in what order.
- Simply copy the files back to the appropriate location and ensure the file ownership is set accordingly.
- Perform any additional app-specific tasks needed to restore services.

If you adopted the above picture of success, you already have scripts that restore rsync.net artifacts in a UAT. Use these scripts to perform the same actions in your new to-be production system.

## Frequently Asked Questions

### How many rsync.net accounts do I need?

You will most likely only need one. rsync.net has the concept of sub-accounts. After you sign up, you can submit a ticket to request your sub-accounts. We recommend you create a minimum of 10 (at least on per server). We commonly ask for 20.

- Each sub-account has its own username and password.
- Each sub-account is isolated from the others.
- We designate one sub-account per server.
- The master account can look into each sub-account.

### How much does rsync.net cost?

As of the time of this writing, you get 800GB for $10 USD per month. This cost includes the default snapshot strategy. Said another way, there are no additional costs for snapshots unless you add additional snapshot beyond the default. Additional storage is $0.012/GB/month.

The 800GB is distributed/shared between all sub-accounts.

### Does rsync.net Offer Multi-Zone?

Yes, rsync.net offers geo-redundant automatic replication for an additional cost ($0.021/GB/month total).

### How do I see my rsync.net data?

You can use `ssh` view to your data. Below is an example. Note that we are using a combination of `ssh` and `ls` to remotely execute a command to view the data.

```bash
ssh de19xxx@de19xxx.rsync.net ls 
```

### How do I see my rsync.net snapshots?

You can use `ssh` and `rsync` to gain access to your snapshot data. It is located in the drive's home .zfs directory. Here is an example:

```bash
ssh de19xxx@de19xxx.rsync.net ls -asl .zfs/snapshot/
```

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/simplified-server-data-backup-with-rsync-net/79>.

## TODO

No open todo
