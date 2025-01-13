# JSON vs Array vs Table vs Column

When extending any model, you must decide how you wish to extend the model. Historically, you would add an extra column or table for every incremental unit of data. Examples include adding a `color` or `height` column to a product table. This concept has challenges:

- You can easily add hundreds of columns to a table for seldom used attributes.
- The database becomes more complicated with every column and table added.
- Complicated databases are more difficult to maintain and reason about.

## Array Usage
Instead of adding a traditional table or a link table to associate concepts in a one-to-many scenario, you can use an array of objects. The `private.stk_trigger_mgt` table uses this concept by creating a `table_name` TEXT[] column the holds an array of table names to drive what tables get what triggers.

Note that an array is a simple homogeneous structure. An array works well when all you need is the reference itself; however, this simplicity breaks down when you need additional information about the reference. Additional information might include:

- the direction of the reference
- the state of the reference
- dates in which the reference is valid

When a simple array no longer supports the nature of the reference, you can consider using either [json](#json-usage) or a [link table](#link-table-usage).

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

## JSON References

- [JSON in PostgreSQL](https://youtu.be/nxeUiRz4G-M)
- [JSON Schema Validation in PostgreSQL](https://youtu.be/amJo48ChLGs)
- [JSON Indexing in PostgreSQL](https://youtu.be/EwFjETYge9I)

## Link Table Usage

Link tables are traditionally used to create many-to-many relationships. It is a well understood and documented use case. The use of link tables in the chuck-stack is encouraged when needed.

One area where the chuck-stack differs from traditional link tables is the additional use of primary keys for 'every' table (including link tables) as described in the [table convention](./table-convention.md) page. 

This additional requirement allows us to use features like [attribute tagging](./attribute-tag.md) and [statistics](./statistics-convention.md) on link tables. Said another way, this convention promotes link tables to first class citizens of the chuck-stack.

## JSON Type

We make heavy use of the JSON schema standard to validate the proper use and structure of stored JSON objects.

The [attribute tag](./attribute-tag.md) architecture is a example use case of this schema standard so that we may represent complex data in a simplified manner. It is also an example of the [enum + type](./enum-type-convention.md) convention where the type record (`stk_attribute_tag_type_json` column) contains the JSON schema definition and the actual `stk_attribute_tag` table (`stk_attribute_tag_json` column) contains the instance or actual value of that JSON schema.

The [above referenced videos](#json-references) help illustrate these concepts.
