# enum and Type Convention

enums and types work closely in the chuck-stack.
- The enum is a developer tool used in code.
- A type record is an end-user tool used in transactions.
- Type tables contain enums thus creating the connection between the concepts.

## enum Convention

The chuck-stack makes heavy use of enums to minimize the amount of code and reduce the code's dependencies on transaction data.

No `uu` record should ever be referred to in code. Instead, create a record with a enum column representing how the code should behave and switch/case/if-else based on the value of the enum.

The proper way to name an enum column is 'type_enum'.

## Type Convention

The purpose of this section is to describe a way to ensure no transactional table directly contains an enum.

The proper convention to reference an enum is to create a facade table with a `_type` suffix that contains the enum. Transactional tables then reference the `type_uu` record. The purpose of this convention is to allow users to create multiple `type` records without requiring any changes to enums or code.

An enum is named the same as the type table with `_enum` suffix. For example, the `stk_doc_type` table has an enum column named `stk_doc_type_enum`.
