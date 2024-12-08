# JSON vs Array vs Table vs Column

When extending any model, you must decide how you wish to extend the model. Historically, you would add an extra column or table for every incremental unit of data. Examples include adding a `color` or `height` column to a product table. This concept has challenges:

- You can easily add hundreds of columns to a table for seldom used attributes.
- The database becomes more complicated with ever column and table added.
- Complicated databases are more difficult to maintains and reason about.

## Array Usage
Instead of adding a traditional table or a link table to associate concepts in a one-to-many scenario, you can use an array of objects. The `private.stk_trigger_mgt` table uses this concept by creating a `table_name` TEXT[] column the holds an array of table names to drive what tables get what triggers.

Note that an array is a simple homogeneous structure. An array works well when all you need is the reference itself; however, this simplicity breaks down when you need additional information about the reference. Additional information might include:

- the direction of the reference
- the state of the reference
- dates in which the reference is valid

When a simple array no long supports the nature of the reference, you can consider using either [json](#json-usage) or a [link table](#link-table-usage).

## JSON Usage
An alternative to adding an additional column is to make use of an [attribute tag](./attribute-tag.md) architecture like `stk_attribute_tag` where you can tag any record with as many attributes as you wish. In addition to adding simple attribute tags like `color` or `height`, you can also create compound attributes like this one that describes product packaging:

```json
{
  "packagingType": "Bag",
  "material": "Kraft paper with aluminum lining",
  "dimensions": {
    "length": 20,
    "width": 10,
    "height": 5,
    "unit": "cm"
  },
  "weight": {
    "value": 250,
    "unit": "g"
  },
  "capacity": {
    "value": 500,
    "unit": "g"
  },
  "color": "Brown",
  "printMethod": "Flexography",
  "features": [
    "Resealable zip",
    "One-way degassing valve",
    "Standing pouch"
  ],
  "sustainabilityScore": 8.5
}
```
See [attribute tag](./attribute-tag.md) to learn more...

## Link Table Usage

Link tables are traditionally used to create many-to-many relationships. It is a well understood and documented use case. The use of link tables in the chuck-stack is encouraged when needed.

One area where the chuck-stack differs from traditional link tables is the additional use of primary keys for 'every' table (including link tables) as described in the [table convention](./table-convention.md) page. 

This additional requirement allows us to use features like [attribute tagging](./attribute-tag.md) and [statistics](./statistics-convention.md) on link tables. Said another way, this convention promotes link tables to first class citizens of the chuck-stack.

## JSON Type

The attribute tag architecture is a example that uses PostgreSQL's JSON features to represent complex data. It is also an example where the `stk_attribute_tag_type_json` column defines the shape of what exists in a `stk_attribute_tag_json` column for a given type.

Below are possible conventions to consider. Both options have merits. Testing needs to be conducted to form a more formal opinion as to which is preferred.

Note: A similar concept will be needed to characterize a 'window' that describe how new records are created. Examples include ranges, fk constraints (dynamic validation). Added here; however, needs to be moved to its own section.

1. More Explicit Schema Approach:
```json
{
  "someval": {
    "required": false,
    "type": "string"
  },
  "otherval": {
    "required": true,
    "type": "number"
  }
}
```

2. Using JSON Schema conventions:
```json
{
  "type": "object",
  "properties": {
    "someval": { "type": "string" },
    "otherval": { "type": "string" }
  },
  "required": ["otherval"]
}
```

The last approach (JSON Schema) seems to be the recommendation because:
1. It's a widely recognized standard
1. Provides clear validation rules
1. Can be extended with additional validations with little effort
1. Self-documenting
1. Many existing tools support it
