---
title: Hydro Problem Format
---

To facilitate data exchange between systems, Hydro defines a zip-based standard format for problem transfer. The file structure inside the archive is as follows:

```
>? tree
.
├── any_name_folder/
│   ├── problem.yaml
│   ├── problem_en.md
│   ├── testdata
│   │   ├── config.yaml
│   │   ├── a1.in
│   │   ├── a1.out
│   │   ├── a2.in
│   │   ├── a2.out
│   │   ├── a3.in
│   │   └── a3.out
│   └── additional_file
│       ├── a.png
│       └── b.pdf
└── ...
```

`problem.yaml` content is as follows:

```yaml
title: Problem Title
tag:
- tag1
- tag2
pid: problem_id (letters + numbers)
```

`problem_*.md` stores the statement in markdown format. Language codes support full forms (such as en_US) and short forms (such as en). If statements in multiple languages exist at the same time, Hydro will automatically detect and provide language switching.

The `testdata` folder stores all test data files. For naming rules and config file format, refer to the **Test Data Format** section.

`additional_file` stores additional files, usually images, PDF files, etc. These files can be accessed in the statement using paths like `file://filename`.
