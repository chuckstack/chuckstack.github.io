# Nushell

[Nushell](https://nushell.sh) is a Linux terminal shell that makes processing and visualizing data easier. For the chuck-stack, Nushell excels beyond others because of its preference for and usability with structured data and [data pipelines](./terminology.md#data-pipeline). 

## TOC

<!-- toc -->

## Why We Love Nushell

Here are the reasons we love Nushell:

- It is an active and welcoming project, and it is well documented.
- It is open source.
- You can get up and running with Nushell in a meaningful way in minutes.
- It does its job ([data pipelines](./terminology.md#data-pipeline)) amazingly well.
- It makes the data we need to do our jobs immediately available.
- It makes creating modules, scripts and plugins significantly easier (as compared to bash and other shells).
- It visualizes structured data in a terminal better than just about any other tool.
- It has great synergy with the rest of the chuck-stack.

## Visualize ERP Data

One of the benefits of Nushell is how it can visualize data in just about any size screen (monitor, tablet, phone, ...). 

- Nushell creates good information density
- Nushell data visualization can be read by anyone (technical and non-technical)
- Configuring/customizing what data is presented is quite simple

## Visualize Order/Invoice Data

Here is an example showing an order summary. Few ERP systems can produces summaries with this information density:

[![nushell-visualize-order](./img/nushell-order-visualize-20250806.png)](./img/nushell-order-visualize-20250806.png)

Here is a json representation of the same data:

```json
{
  "order": {
    "id": "ORD-12345",
    "customer": {
      "id": "CUST-789",
      "name": "John Smith",
      "email": "john.smith@email.com",
      "address": {
        "street": "123 Main St",
        "city": "Springfield",
        "state": "IL",
        "zip": "62701"
      }
    },
    "items": [
      {
        "id": "PROD-001",
        "name": "Coffee Mug",
        "quantity": 2,
        "price": 12.99,
        "subtotal": 25.98
      },
      {
        "id": "PROD-002",
        "name": "Tea Set",
        "quantity": 1,
        "price": 45.00,
        "subtotal": 45.00
      }
    ],
    "payment": {
      "method": "credit-card",
      "status": "completed",
      "transaction-id": "TXN-456789"
    },
    "summary": {
      "subtotal": 70.98,
      "tax": 4.26,
      "shipping": 5.99,
      "total": 81.23
    },
    "status": "processing",
    "created-at": "2023-05-15T14:30:00Z"
  }
}
```

Here is a NUON (Nushell Object Notation) representation of the same data:

```nuon
{
  order: {
    id: ORD-12345
    customer: {
      id: CUST-789
      name: "John Smith"
      email: john.smith@email.com
      address: {
        street: "123 Main St"
        city: Springfield
        state: IL
        zip: 62701
      }
    }
    items: [
      {
        id: PROD-001
        name: "Coffee Mug"
        quantity: 2
        price: 12.99
        subtotal: 25.98
      }
      {
        id: PROD-002
        name: "Tea Set"
        quantity: 1
        price: 45.00
        subtotal: 45.00
      }
    ]
    payment: {
      method: credit-card
      status: completed
      transaction-id: TXN-456789
    }
    summary: {
      subtotal: 70.98
      tax: 4.26
      shipping: 5.99
      total: 81.23
    }
    status: processing
    created-at: 2023-05-15T14:30:00Z
  }
}
```

Notice how NUON is cleaner than JSON:
- No quotes needed for keys
- No quotes for simple strings (IDs, emails, single words)
- No commas between fields
- Only multi-word strings need quotes
- Native support in Nushell for direct loading and manipulation

### Visualize Project Data

Here is an example showing a project summary. Few ERP systems can as succinctly visualize project management data with sub-projects and line items:

[![nushell-visualize-project](./img/nushell-project-visualize-20250806.png)](./img/nushell-project-visualize-20250806.png)

Here is a JSON representation of project data:

```json
{
  "project": {
    "search_key": "PROJ-2025-001",
    "client": {
      "search_key": "CLIENT-456",
      "name": "TechCorp Industries",
      "contact": "sarah.johnson@techcorp.com"
    },
    "sub_projects": [
      {
        "search_key": "SUB-001",
        "name": "Database Migration",
        "lines": [
          {
            "search_key": "LINE-001",
            "task": "Schema Analysis",
            "hours": 40,
            "rate": 175.00,
            "amount": 7000.00
          },
          {
            "search_key": "LINE-002",
            "task": "Data Scripts",
            "hours": 80,
            "rate": 150.00,
            "amount": 12000.00
          }
        ],
        "total": 19000.00
      },
      {
        "search_key": "SUB-002",
        "name": "API Development",
        "lines": [
          {
            "search_key": "LINE-003",
            "task": "REST Design",
            "hours": 32,
            "rate": 180.00,
            "amount": 5760.00
          },
          {
            "search_key": "LINE-004",
            "task": "Implementation",
            "hours": 120,
            "rate": 140.00,
            "amount": 16800.00
          }
        ],
        "total": 22560.00
      }
    ],
    "summary": {
      "budget": 50000.00,
      "spent": 41560.00,
      "hours": 272
    },
    "status": "active",
    "created_at": "2025-01-10T09:00:00Z"
  }
}
```

Here is the same data in NUON format:

```nuon
{
  project: {
    search_key: PROJ-2025-001
    client: {
      search_key: CLIENT-456
      name: "TechCorp Industries"
      contact: sarah.johnson@techcorp.com
    }
    sub_projects: [
      {
        search_key: SUB-001
        name: "Database Migration"
        lines: [
          {
            search_key: LINE-001
            task: "Schema Analysis"
            hours: 40
            rate: 175.00
            amount: 7000.00
          }
          {
            search_key: LINE-002
            task: "Data Scripts"
            hours: 80
            rate: 150.00
            amount: 12000.00
          }
        ]
        total: 19000.00
      }
      {
        search_key: SUB-002
        name: "API Development"
        lines: [
          {
            search_key: LINE-003
            task: "REST Design"
            hours: 32
            rate: 180.00
            amount: 5760.00
          }
          {
            search_key: LINE-004
            task: Implementation
            hours: 120
            rate: 140.00
            amount: 16800.00
          }
        ]
        total: 22560.00
      }
    ]
    summary: {
      budget: 50000.00
      spent: 41560.00
      hours: 272
    }
    status: active
    created_at: 2025-01-10T09:00:00Z
  }
}
```

When visualized in Nushell, this hierarchical project structure displays cleanly with sub-projects expanded inline and line items shown in tabular format, making it easy to scan project costs and resource allocation at a glance.

## Nu Tutor

Nushell is powerful. The easiest to learn the Nushell way of thinking is using Nu's `tutor`. You can walk through examples by simply executing `tutor` from a Nushell prompt.

## Notes and References

- Nushell has not reached production stability yet; although, it is close. The Nushell team still introduces frequent breaking changes in an effort to enhance consistency and improve usability.
- Nushell compliments PostgreSQL in that Nushell can perform many of the same data tasks as PostgreSQL without requiring data first be inserted into a database. 
  - Said another way, Nushell gives you many of the same data processing abilities prior to persisting it in a database.
  - Nushell also makes persisting data in PostgreSQL easier.
- NUON (Nushell Object Notation) is Nushell's native data format, similar to JSON but with cleaner syntax
- Nushell plugin for visualizing and plotting data [https://github.com/Euphrasiologist/nu_plugin_plot](https://github.com/Euphrasiologist/nu_plugin_plot)
  - Also reference: gnuplot
- Nushell demonstrations and explanations
  - [DevOps part 1](https://youtu.be/uJsZATwQ3R8)
  - [DevOps part 2](https://youtu.be/LFBOLx5KiME)
- [Nushell todo script - highlighted picture of success](https://github.com/Mrfiregem/nushell-config/tree/master/scripts/todo-txt)
- [Nushell using AI](https://github.com/cablehead/gpt2099.nu)
