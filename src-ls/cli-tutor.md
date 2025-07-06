# stk

Welcome to chuck-stack's interactive learning system!

Chuck-stack provides multiple ways to learn:

**1. Module Overviews** - Quick context for any module
- Type `bp` to understand business partners
- Type `tag` to learn about flexible metadata
- Type `event` to discover event tracking

**2. Interactive Tutor** - Guided hands-on learning
- Type `stk tutor ops` for business operations
- Type `stk tutor dev` for development patterns
- Type `stk list` to see all tutorial sections

**3. Command Help** - Detailed usage information
- Add `--help` to any command for full documentation
- Example: `bp new --help` shows all options

Start with `stk tutor` below to begin your journey!

## tutor

Welcome to chuck-stack! This interactive tutor teaches core patterns through hands-on examples.

Choose your learning path:
- `stk tutor ops` - Learn business operations (using chuck-stack)
- `stk tutor dev` - Learn development patterns (extending chuck-stack)

### ops

Learn to use chuck-stack for business operations.

#### begin

Chuck-stack organizes data through three key patterns:

1. **Types** define structure (what something IS)
2. **Tags** add capabilities (what something DOES)  
3. **Templates** provide starting points

Let's explore with business partners:
- Run `bp` to understand the module
- Try `stk tutor ops customer` to create your first customer

#### customer

Creating a customer demonstrates all patterns working together.

First, see what business partners offer:
```
bp
```

Now create a business partner:
```
bp new "ACME Corporation"
```

Make them a customer by adding a tag:
```
bp list | where name == "ACME Corporation" | tag attach BP_CUSTOMER
```

Explore what you created:
- `bp list` - See your business partners
- `tag list` - See all tags in the system

Next: `stk tutor ops vendor` to work with vendors

#### vendor

Vendors follow the same pattern as customers.

Create a vendor:
```
bp new "Supply Co" 
bp list | where name == "Supply Co" | tag attach BP_VENDOR
```

Key insight: One business partner can be both customer AND vendor!

Try: `bp list | tag list` to see tags on your business partners

### dev

Learn to extend chuck-stack with new capabilities.

#### begin

Chuck-stack development follows strict patterns:

1. **Database First** - Logic lives in PostgreSQL
2. **Enum Drives Code** - Enums control behavior  
3. **Types Validate** - Types ensure data shape
4. **Modules Expose** - Nushell modules provide commands

Explore: `stk tutor dev patterns` to understand core patterns

#### patterns

The enum-type-tag pattern is fundamental:

**Enum** = Code switches on these values
**Type** = Validates record_json shape  
**Tag** = Attaches metadata to records

Example from business partners:
- Enum: `ORGANIZATION`, `INDIVIDUAL` (structure)
- Type: Ensures correct fields in record_json
- Tag: `BP_CUSTOMER`, `BP_VENDOR` (roles)

The code switches on enum, validates with type, extends with tags.

Next: `stk tutor dev module` to create your first module