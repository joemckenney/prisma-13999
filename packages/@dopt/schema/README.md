## orm.packages.users.services

A package which contains our [Prisma](https://www.prisma.io/docs/concepts/overview/what-is-prisma) based orm.

This package's responsibilities include

- Store the schema used to create the tables in DB
- Generate Typescript Client to send queries to DB
- Store scripts used to modify DB
  - Store the seed data used to populate the test DB
  - Migrate the DB
  - Reset the DB

## Commands

- "seed": seeds db
- "migrate-create": creates and applies new migrations
- "migrate-reset": resets db and applies prisma schema
- "studio": opens db ui
- "db-push": synchronizes db with prisma schema and migrations (does not create new migration)
- "db-up": brings up app db
- "generate": generates prisma client
