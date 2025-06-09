# JSON Aggregation Example: Sales Order with Lines

- Published: 2025-04-08
- Updated: 2025-04-08
- Author: Chuck Boecking
- Discussion: <https://team.chuck-stack.org/t/example-extract-json-from-postgresql/85>
- Status: Released

## How to Extract JSON from PostgreSQL 

This example demonstrates how to create PostgreSQL tables and a view that returns compound structured data as JSON, combining order headers with their lines in a single JSON column.

## Table Definitions

Let's create sample sales order header and line tables.

### Sales Order Header Table
```sql
CREATE TABLE sales_order_header (
    order_id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) NOT NULL UNIQUE,
    customer_name VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    total_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sales Order Lines Table
```sql
CREATE TABLE sales_order_lines (
    line_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES sales_order_header(order_id) ON DELETE CASCADE,
    line_number INTEGER NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
    line_total DECIMAL(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(order_id, line_number)
);
```

## View with CTE for JSON Aggregation

Let's create a view that exposes a sales order (along with all of its lines) as a JSON object.

```sql
-- View with CTE for better readability and performance
CREATE VIEW order_with_lines_json AS
WITH order_lines_json AS (
    SELECT 
        order_id,
        json_agg(
            json_build_object(
                'line_id', line_id,
                'line_number', line_number,
                'product_name', product_name,
                'quantity', quantity,
                'unit_price', unit_price,
                'line_total', line_total,
                'created_at', created_at
            ) ORDER BY line_number
        ) AS lines_json
    FROM sales_order_lines
    GROUP BY order_id
)
SELECT 
    h.order_id,
    json_build_object(
        'order_header', json_build_object(
            'order_id', h.order_id,
            'order_number', h.order_number,
            'customer_name', h.customer_name,
            'order_date', h.order_date,
            'total_amount', h.total_amount,
            'status', h.status,
            'created_at', h.created_at,
            'updated_at', h.updated_at
        ),
        'order_lines', COALESCE(l.lines_json, '[]'::json)
    ) AS order_json
FROM sales_order_header h
LEFT JOIN order_lines_json l ON h.order_id = l.order_id;
```

## Why json_agg and json_build_object Functions Are Needed

The CTE uses both functions for different purposes:

1. **`json_build_object()`** - Creates a structured JSON object for each individual line with named properties
2. **`json_agg()`** - Combines all those line JSON objects into a single JSON array for each order

### The Flow:
- Each row becomes: `{"line_id": 1, "product_name": "Widget A", "quantity": 2, ...}`
- All rows for an order become: `[{"line_id": 1, ...}, {"line_id": 2, ...}]`

Without `json_build_object()`, we'd just be aggregating raw column values rather than structured objects.
Without `json_agg()`, we'd have individual JSON objects but no way to combine multiple lines for the same order into a single array.

## Benefits of the CTE Approach

- **Cleaner code**: Separates the lines aggregation logic from the main query
- **Better readability**: Avoids complex GROUP BY with all header columns
- **More maintainable**: Easier to modify either the lines aggregation or header selection independently
- **Potentially better performance**: PostgreSQL can optimize the CTE separately

## Sample Data and Usage

Let's create some sample data.

```sql
-- Sample data for testing
INSERT INTO sales_order_header (order_number, customer_name, order_date, total_amount, status) VALUES
('ORD-001', 'John Smith', '2024-01-15', 299.98, 'completed'),
('ORD-002', 'Jane Doe', '2024-01-16', 149.99, 'pending');

INSERT INTO sales_order_lines (order_id, line_number, product_name, quantity, unit_price) VALUES
(1, 1, 'Widget A', 2, 99.99),
(1, 2, 'Widget B', 1, 99.99),
(2, 1, 'Widget C', 3, 49.99);

-- Example query to use the view
SELECT order_json FROM order_with_lines_json WHERE order_id = 1;
```

## Expected JSON Output

Here is what you should expect to see from the above select statement.

```json
{
  "order_header": {
    "order_id": 1,
    "order_number": "ORD-001",
    "customer_name": "John Smith",
    "order_date": "2024-01-15",
    "total_amount": 299.98,
    "status": "completed",
    "created_at": "2024-01-15T10:30:00",
    "updated_at": "2024-01-15T10:30:00"
  },
  "order_lines": [
    {
      "line_id": 1,
      "line_number": 1,
      "product_name": "Widget A",
      "quantity": 2,
      "unit_price": 99.99,
      "line_total": 199.98,
      "created_at": "2024-01-15T10:30:00"
    },
    {
      "line_id": 2,
      "line_number": 2,
      "product_name": "Widget B",
      "quantity": 1,
      "unit_price": 99.99,
      "line_total": 99.99,
      "created_at": "2024-01-15T10:30:00"
    }
  ]
}
```

## Getting Started

To get started using AI to augment and automate your organization, join the [stack-academy](./stack-academy.md). We meet 4 times per week, and its time for you to join the AI conversation.
