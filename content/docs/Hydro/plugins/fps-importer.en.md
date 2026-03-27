---
title: fps-importer
---

## Import Problems from FPS Files

In the problemset page, choose "Import from FPS file" under the "Create Problem" section on the right.
In the opened window, you can upload:

- an XML file in fps format
- a zip file that contains one or more XML files in fps format

To prevent parsing fps files from consuming excessive memory, the system rejects files larger than 64MiB by default;
XML files must use UTF-8 encoding, otherwise Chinese problem statements may become garbled;
In newer versions of fps-importer, administrators can modify the import file size limit, but note that we still do not recommend importing overly large problem packages.
If your file exceeds the size limit, consider splitting it locally first with tools such as Easy-Fps-Viewer.
