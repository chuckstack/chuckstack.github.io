# Scalability Considerations

We consider the following topics when scaling PostgreSQL from just a couple of users through thousands of users.

- Connection pooling will be used to minimize the load placed by high connection/subscriber counts.
- We will make heavy use of database partitions to support growth. There are no known reasons to create separate tables because of size.
  - table growth in size
  - record archives (example: old invoices that do not change)
- We will use both read (streaming/physical) replicas and logical replicas to support non-transactional loads.
  - Read replicas are good for supporting read-only queries
  - Logical replicas are good for transforming data to support external systems (BI, AI, ...) and calculating statistical data.
