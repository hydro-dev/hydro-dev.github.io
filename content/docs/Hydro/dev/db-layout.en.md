---
title: Database Layout
---

## document

Basic columns: (domainId, docId, docType), owner, title, content
Stores all documents, including problems, contests, trainings, etc. Document types are distinguished by the docType field. For docType definitions, refer to packages/hydrooj/src/model/document.ts.

## document.status

Basic columns: (domainId, docId, docType, uid), owner, title, content
Stores information left by users under corresponding documents, such as problem submission status, contest scores, etc.

## record

Basic columns: ((_id), domainId), uid, code, lang, score, status
Stores user submission records.

## user

Basic columns: (_id), uname, unameLower, mail, mailLower, priv
All users in the system.

## oplog

Stores system logs.

## blacklist

## system

## task

Used for submission queues, etc.

## event

Used for Hydro internal event communication. Do not operate manually.

## schedule

Related to scheduled tasks.

## opcount

Used to record user access statistics for rate limiting

## token

Stores temporary information, such as login state, registration verification codes, etc.
