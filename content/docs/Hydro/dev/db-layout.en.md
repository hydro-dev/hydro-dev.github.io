---
title: Database Layout
---

## Core Collections

Hydro uses MongoDB for data storage. The following are the most critical collections:

### `document`
- **Fields**: `domainId`, `docId`, `docType`, `owner`, `title`, `content`.
- **Description**: Stores all main entities, including problems, contests, and training plans. 
- **Types**: Differentiated by the `docType` field. See `packages/hydrooj/src/model/document.ts` for type definitions.

### `document.status`
- **Fields**: `domainId`, `docId`, `docType`, `uid`, `status`.
- **Description**: Stores user-specific states related to a document, such as problem submission history or contest participation scores.

### `record`
- **Fields**: `_id`, `domainId`, `uid`, `code`, `lang`, `score`, `status`.
- **Description**: Stores submission records.

### `user`
- **Fields**: `_id`, `uname`, `unameLower`, `mail`, `mailLower`, `priv`.
- **Description**: All user account information.

## System Collections

- **`oplog`**: System logs.
- **`blacklist`**: Banned IPs and email domains.
- **`system`**: Global system configuration.
- **`task`**: Submission and background task queues.
- **`event`**: Internal event messaging (Used by the core, do not modify manually).
- **`schedule`**: Scheduled task definitions.
- **`opcount`**: Access statistics for rate-limiting.
- **`token`**: Temporary data, including session states and verification codes.

