---
title: Naming Conventions
---

## Variable Naming Conventions

Most variables in Hydro follow fixed naming conventions:

- pdoc: Problem
- tdoc: Contest/Homework/Training
- rdoc: Submission record
- ddoc: Discussion
- drdoc: Discussion reply
- drrdoc: Second-level discussion reply
- mdoc: Internal message
- psdoc: Problem submission status
- tsdoc: Contest/Homework submission status
...

And their variants:

- pdocs: Array containing multiple problems
- pdict: Object where keys are problem IDs and values are problem details
...

More details can be found in packages/hydrooj/src/interface.ts.

## Function Naming Conventions

- `get()` gets content and returns the corresponding value or null
- `getList()` gets content and returns a dict-like object
- `getMulti()` gets a database query cursor
- `edit()` updates content
