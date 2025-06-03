---
title: Chuck Stack Status Update
author: Chuck Boecking
theme:
  name: dark
---

# Chuck Stack Status Update

Two Key Areas of Progress

---

## Part 1: Incus + NixOS Deployment

Current status and progress on deployment infrastructure

---

## Part 2: Nix-Shell Development

Development environment and workflow improvements

---

## Part 3: Nushell CLI

ERP Domain Language => User experience

---

## Part 4: AI Augmented Domain CLI

ERP Domain Language => User experience

https://github.com/chuckstack/chuck-stack-insurance-research/blob/main/technology/ai-native-cli-architecture.md#insurance-domain-implementation

---

## Part 5: Zellij

Apply all the above in a dashboard

https://zellij.dev/old-documentation/layouts-templates

---

## Linux + PostgreSQL Features

### TABLES

**Security Concepts:**
• **stk_actor** - Actor/user records with role and authentication details

**Capabilities Tables:**
• **stk_attribute_tag** - Flexible attribute/tag system (partitioned table)
• **stk_link** - Link records between different table records
• **stk_abbreviation** - Abbreviation lookup/definition records
• **stk_change_log** - Change tracking records for audit trail
• **stk_system_config** - System configuration records
• **stk_statistic** - Cached statistic/calculation records
• **stk_async** - Asynchronous processing task records

**Organization Tables:**
• **stk_actor** - Actor/user records with role and authentication details
• **stk_entity** - Entity records for multi-tenant organization  
• **stk_event** - Event records for actions and logging
• **stk_item** - Item records (products, services, accounts)
• **stk_request** - Request/workflow records with processing status

---

### CAPABILITIES and CONVENTIONS

**Automated Trigger System:**
• **Trigger management framework** - Dynamic trigger creation across tables
• **Created/updated tracking** - Automatic timestamp and user tracking
• **Entity assignment** - Automatic entity assignment for multi-tenant support  
• **Change logging** - Comprehensive audit trail for all table changes
• **Notification system** - pg_notify integration for real-time updates
• **Default type assignment** - Automatic default type selection
• **Text normalization** - Automatic uppercase conversion for search keys

**Security & Access:**
• **Schema setup** - Private and API schema creation with permissions
• **Role-based access** - Multiple user roles with proper permissions
• **Multi-schema security** - Separation between private data and public API

**Utility Functions:**
• **Enum value management** - Enhanced enum support with comments
• **Type record creation** - Automatic population of type tables
• **UUID table lookup** - Dynamic discovery of which table contains any UUID
• **HTML generation** - Table-to-HTML conversion utilities
• **Partitioning support** - Generic partition triggers for performance

**Web Integration:**
• **PostgREST support** - Form processing and HTML content delivery
• **HTMX integration** - Dynamic web page generation with AJAX support

---

## Demo

Discussion and planning
