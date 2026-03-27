---
title: Naming Conventions
---

## Variable Naming Conventions

To maintain consistency across the codebase, Hydro uses the following standard abbreviations for document types:

| Prefix | Document Type |
| :--- | :--- |
| **pdoc** | Problem |
| **tdoc** | Training / Contest / Homework |
| **rdoc** | Submission Record |
| **ddoc** | Discussion |
| **drdoc** | Discussion Reply |
| **drrdoc**| Second-level Discussion Reply |
| **mdoc** | Internal Message |
| **psdoc** | Problem Submission Status |
| **tsdoc** | Training/Contest Submission Status |

### Plurals and Collections
- **`*docs`**: An array of documents (e.g., `pdocs` for an array of problems).
- **`*dict`**: An object/dictionary where keys are IDs and values are document objects (e.g., `pdict`).

For the full list of interfaces and types, refer to `packages/hydrooj/src/interface.ts`.

## Function Naming Conventions

- **`get(...)`**: Retrieves a single entity. Returns the object or `null` if not found.
- **`getList(...)`**: Retrieves multiple entities as a dictionary-like object.
- **`getMulti(...)`**: Returns a database cursor for iterating over multiple records.
- **`edit(...)`**: Performs an update on existing content.

