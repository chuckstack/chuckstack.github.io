# chuck-stack IT Job Description

- Published: 2025-03-03
- Updated: 2025-03-03
- Author: Chuck Boecking
- Discussion: <>
- Status: Drafted

## Building Self-Help Automation Systems

The purpose of this post is to help you hire the right IT (Information Technology) talent to support your small or medium organization. We will cover both the desired attributes to help your organization create efficient, simple, self-help, automated systems. We want to help augment the people who actually perform the work.

We will break the hiring process down into these attributes:

- skills
- knowledge
- attitudes

We will also discuss how to organize your hiring process to make finding these experts as easy as possible.

## TOC

<!-- toc -->

## If You Want Help

If you would like help evaluating talent, join the [stack-academy](./stack-academy.md). We will help you create the interview process and evaluate your talent.

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## Skills, Knowledge and Attitude

We want to know what you are capable of and examples of when you did it (both successfully and unsuccessfully).

The best way to discuss someone's ability to help your organization is through the view of skills, knowledge and attitude. Let's break each of these topics down for the IT position.

### Skills







## Markdown Resumes

We have spent year pouring over resumes and a lifetime in interview rooms. The rules of what makes a good resume are changing. Fancy PDF layouts no longer hold value.



# Simplified Server Data Backup with rsync.net

- Published: 2025-02-28
- Updated: 2025-03-02
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/simplified-server-data-backup-with-rsync-net/79>
- Status: Released

## Immutable Off-site Backups are Imperative

The purpose of this post is to offer a simple and safe way to store your information off-site even in the extreme event of a cyber/ransom-ware attack. It can be used in any Linux scenario (cloud, hybrid, on-premise, desktop, ...).

> It is important to note that I am a champion of small to medium organizations. You are my target audience. This post was written for you! 

## TOC

<!-- toc -->

## Problem Statements

**Problem #1:** There are many backup solutions available. Finding one that is cost effective and reasonable is difficult.

**Problem #2:** Many backup solutions do not include immutable data feature as an easy and default option. If the backed up data is not immutable, we cannot trust it.

**Problem #3:** Just because you use good backup tools does not mean you have a good disaster recovery solution. Creating simple but proven/validated disaster recovery systems is difficult.

**Problem #4:** Disaster recovery strategies that simply rely on machine images or snapshots are not enough.

## Why We Love rsync.net

Here is why we love rsync.net:

- The solution uses industry standard and best-in-class tools (authentication and file transfer efficiency).
- The only client-side tools you need are probably already installed (rsync, ssh).
- The default behavior includes periodic, immutable snapshots.
- the rsync.net storage rates are competitive (800GB for $10 USD per month - this includes the default snapshots).
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

Disaster recover procedures should be monitored and tested frequently. We strive to spend the least effort possible testing our disaster recovery as part of our day-to-day operations.

Here is our picture of success:

- Search on the word 'ACTION' in [sync-backup.sh](https://github.com/chuboe/chuboe-system-configurator/blob/main/sync-backup.sh) and follow the directions to point the script to your desired remote location (rsync.net).
- Execute the sync-backup.sh script manually to ensure success.
- Copy the chuboe-system-backup-cron file to /etc/cron.d/ to schedule its automated execution.
- Update your monitoring solution (Zabbix for example) to peek into the rsync.net repo to gather last updated and last file size(s).
- Create alarms for when rsync.net artifacts do not meet the necessary success criteria. Here are some example alarm conditions:
  - A database backup file is less than 95% of its normal size.
  - The last sync date is older that 36 hours.
- Populate your UAT servers directly from rsync.net (not production) so that if any UAT restore fails, you are immediately aware of an issue.
- We encourage you to have a UAT server that refreshes every day from rsync.net.
- Include at least one UAT server in your backup process so that you have a backup copy of your UAT restore scripts.
- Generally speaking, no restoration process should depend directly on a production instance - pull from rsync.net instead (repeated for emphasis)!

## Disaster Story

It is common to prepare for disaster. Here are some common examples: software corruption, machine failure and site availability. These issues are relatively easy to recover from.

But what happens when you are cyber attached? What happens when your machine is infected, and as a result, your machine backup images might also be infected. What happens when your backups are deleted. How do you know what to trust?

We have suffered through this situation. We know how painful it can be. This document and its solution were born from this pain.

### Immutable is Mandatory

Your production system needs write access to your backup solution. The challenge is:

> How do you keep your backup data current and easily writable/available without allowing bad people to corrupt your backups?

Asked another way: How do you prevent bad people from destroying your backup data if your production system has write access and if bad people gain control of your production system?

rsync.net makes the answer to this question simple. It takes immutable snapshots for you. If you are happy with the default rsync.net snapshot schedule, there is nothing more needed. It just magically works.

AWS has an S3 solution to accomplish the same goal; however, we find it difficult to configure, difficult to reason about, and it requires special tooling. The default S3 bucket policy leaves your production backup data exposed to bad actors.

### Data and Images

The reason the [sync-backup.sh array](https://github.com/chuboe/chuboe-system-configurator/blob/main/sync-backup.sh) is so long is because there are many things you depend on to execute a service.

Operating system backup images can hide many secrets because of the OS complexity. The value of also backing up the individual artifacts is because they are easy to audit and reason about during disaster recovery.

### Readme Changes

You will find a readme.md included in the /opt/chuboe-system-backup directory. This file is included automatically in sync-backup.sh. Make a practice to log all changes to the server to this file. You will be incredibly grateful in the case of disaster if you do.

## What to Do In Case of Disaster

In case of disaster, you will first look to restore servers from images when possible. See Incus [images](https://linuxcontainers.org/incus/docs/main/howto/images_create/) and [snapshots](https://linuxcontainers.org/incus/docs/main/howto/instances_backup/#instances-snapshots) for details about managing machine backups.

Even if you can restore from an image or snapshot, the data in the image may be stale. Let's look at the restoration process. 

Here are the steps:

- Restore or rebuild your new server.
- Use rsync.net (rsync) to create a local copy of the backup data.
- Note that sync-backup.sh backs up a copy of itself.
  - This sync-backup.sh copy acts as your guide/roadmap to restore data.
  - It tells you what data was backed up and where it came from (proper location).
  - It includes a readme.md that should include a time-stamped log of all changes to the server over all time.
- Prioritize what artifacts need to be restored in what order.
- Reconcile the backup data with the readme.md changes to your server to ensure you have accounted for everything.
- Simply copy the files back to the appropriate location and ensure the file ownership is set accordingly.
- Perform any additional app-specific tasks needed to restore services.

If you adopted the above picture of success, you already have the scripts that restore rsync.net artifacts in a UAT. Use these scripts to perform the same actions in your new to-be production system.

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

### What about K8s, Docker and ephemeral machines?

More specifically, do ephemeral container technologies like Kubernetes reduce/change the disaster recovery needs as discussed here? We believe the answer is yes; however, we also believe that Kubernetes, and tools like it, do not serve the needs of our audience. They are too complex to learn, configure, audit, deploy, support and scale. They require too many exports.

The needs of web-scale applications like tiktok drastically differ from the needs of small and medium organizations. We need applications that align with our [principles](./introduction.md#chuck-stack-guiding-principles). We need the rapid delivery of self-help tools with minimal expertise.

## Learn More

If you want help executing the topics in this article, join the [stack-academy](./stack-academy.md). Not ready to join... We can always [stay connected](../learn-more.html) to learn more.

To discuss this content in more detail, go to <https://team.chuck-stack.org/t/simplified-server-data-backup-with-rsync-net/79>.

## TODO

No open todo
