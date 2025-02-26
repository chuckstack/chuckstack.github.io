# Success Using Linux

We have already explained the importance of the terminal to our success. The purpose of this page is to describe how we plan to make that success easy, well understood, declarative and automated.

When the concepts in this page are fully implemented in the chuck-stack, this page will go away, and its contents will be move to other functional areas. Until then, this information represents our plan and our partial implementation.

## TOC

<!-- toc -->

## User and Role Management

Our plan is to use a declarative approach to managing users and roles. 

- SSH transports users to their terminal
- Nix-shell deploys the tools for that user's roles

<!-- the following is duplicated in multiple places including success-postgresql -->
It is worth noting that user and role management is shared in both Linux and PostgreSQL. While these responsibilities exist in both planes, they are not duplicated. Linux dictates role-based tool access and how the user connects to the database. PostgreSQL dictates data access inside the database.

## SSH

SSH performs all user authentication and transport requirements. These requirements include security keys, passphrases and OTP multifactor authentication.


## Nix-shell

Nix-shell provides the role-based access control to ensure users can only use the tools associated with their roles. Nix-shells are declarative; therefore, we use standard git workflows to add, review, manage and deploy role tool access. CI/CD practices automate deployment in an auditable and automated manner.

Here is a quick and dirty example of how you configure a new [Debian](./tool-linux.md#debian) server to use nix-shell. This trivial example goes a long way to show you the power of using well-understood tools.

```bash
sudo su
sh <(curl -L https://nixos.org/nix/install) --daemon --yes
exit # exit su

echo "ForceCommand /nix/var/nix/profiles/default/bin/nix-shell /opt/shell.nix" | sudo tee -a /etc/ssh/sshd_config

sudo systemctl restart ssh

wget https://raw.githubusercontent.com/cboecking/keys/refs/heads/main/id_rsa.pub
cat id_rsa.pub | tee -a .ssh/authorized_keys

sudo tee /opt/shell.nix << EOF
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Add only the packages you want users to have access to
  ];

  shellHook = ''
    echo "Welcome to the restricted nix-shell environment"
    # Add any initialization commands here
  '';
}
EOF
```
Details:

- Once the above is performed, a new user is bound by what is configured in /opt/shell.nix.
- Nix-shell has a concept of a 'pure' shell that ensures no outside tools are made available.
- Nix-shell ensures the environment is configured and that file permissions are set to ensure application security.

The above example shows just how easily we can script with nix-shell to dictate what function calling tools are available to [AIChat](./tool-aichat.md).
