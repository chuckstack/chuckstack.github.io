# Column versus Array vs JSON vs Table

When extending any model, you must decide how you wish to extend a model. Historically, you would add an extra column or table for every incremental unit of data. Example include adding a `color` or `height` column to a product table. This concept has challenges:

- You can easily add hundreds of columns to a table for seldom used attributes.
- The database becomes more complicated with ever column and table added.
- Complicated databases are more difficult to reason about.

## Array Usage
Instead of using a additional link table to associate concepts in a one-to-many scenaio, you can use an array of objects. The `private.stk_trigger_mgt` table uses this concept by creating a `table_name` column the holds an array of table names to drive what tables get what triggers.

Note that an array is a simple homogeneous structure. You would use a dedicated link table when the link itself has attributes like direction or other qualifiers.

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
