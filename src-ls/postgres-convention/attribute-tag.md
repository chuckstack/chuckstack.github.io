# Attribute Tagging

The chuck-stack makes heavy use of [JSON](./json-array-table-column.md#json-type) and attributing tagging as a means to describe database objects and workflow. The attribute tag architecture begins with the `stk_attribute_tag` table. This architecture allows you to associate any collection of attributes with any record in the database. 

## Example JSON

In addition to adding simple attribute tags like `color` or `height`, you can also create compound attributes like this one that describes product packaging:

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

## Attribute Type

You can define any number of attribute tag types. Each type defines the desire shape (and restriction) of an actual tag's JSON using the JSON schema standard. See the [JSON](./json-array-table-column.md#json-type) page for more implementation details.

## Details

Tables:

- stk_attribute_tag
- stk_attribute_tag_type
