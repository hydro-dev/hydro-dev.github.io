---
title: Judge Communication Protocol
---

Current version: v1.

## Judge-side Interaction Flow

- GET /judge/files (check whether login status is valid; if invalid, enter login flow; usually executed once every six hours)
- WEBSOCKET /judge/conn (main interaction channel)

If login has expired, perform login.

```http
POST /login

{"uname":"USERNAME","password":"PASSWORD","rememberme":true}
```

## WebSocket Connection Establishment Flow

```http
WEBSOCKET /judge/conn
Authorization: Bearer COOKIE_SID
```

After the connection is established, the judge reports current node status to Web (optional)  
Note: the information below is only for data format demonstration and is not guaranteed to be real or valid.

```json
{
    "key": "status",
    "info": {
        "mid": "MACHINE_ID",
        "memory": {
            "total": 25189552128,
            "free": 660258800,
            "used": 24529293328,
            "active": 1558973164,
            "available": 23636676608,
            "buffers": 3075653000,
            "cached": 1000000000,
            "slab": 1000000000,
            "buffcache": 1000000000,
            "swaptotal": 0,
            "swapused": 0,
            "swapfree": 0
        },
        "cpu": {
            "manufacturer": "Intel",
            "brand": "Xeon® Platinum 8269CY",
            "vendor": "Intel",
            "family": "6",
            "model": "85",
            "stepping": "7",
            "speed": 2.5,
            "cores": 32,
            "physicalCores": 32,
            "processors": 2,
            "flags": "fpu vme de pse tsc ...",
            "cache": {
                "l1d": 32768,
                "l1i": 32768,
                "l2": 262144,
                "l3": 6291456
            }
        },
        "load": {
            "avgLoad": 0.01,
            "currentLoad": 0.01,
            "currentLoadUser": 0.01,
            "currentLoadSystem": 0.01,
            "currentLoadNice": 0.01,
            "currentLoadIdle": 0.01,
            "currentLoadIrq": 0.01
        },
        "osinfo": {
            "platform": "linux",
            "distro": "Ubuntu",
            "release": "22.04.2 LTS",
            "codename": "Jammy Jellyfish",
            "kernel": "5.15.0-84-generic",
            "arch": "x64",
            "hostname": "judge",
            "codepage": "UTF-8",
        }
    }
}
```

After connection establishment, the judge sends `{"key":"ping"}` every 30s.

## Language Configuration Distribution

After the connection is established, the Web side distributes server-side language settings to the Judge. If the client needs special settings, this message can be ignored.

## Judge Task Push

The Web side pushes judge tasks to the judge side via WebSocket.

```json
{
    "task": {
        "type": "judge",
        "_id": "RECORD_ID",
        "lang": "cc.cc11",
        "uid": SUBMITTER_UID,
        "code": "USER_SUBMITTED_CODE",
        "domainId": "SUBMISSION_DOMAIN_ID",
        "pid": PROBLEM_ID,
        "contest": "CONTEST_ID (optional)",
        "input": "INPUT",
        "source": "SOURCE_ID",
        "meta": {
            "rejudge": false,
            "problemOwner": OWNER_UID
        },
        "data": [
            {
                "name": "FILE_NAME",
                "size": SIZE_IN_BYTES,
                "lastModified": "2023-11-15T08:14:57.535Z",
                "etag": "ETAG"
            }
        ]
    }
}
```

Note 1: if contest ID is `000000000000000000000000`, this submission is a custom test submission, and the custom test uses the `input` field as program input.  
Note 2: the `source` field is a cache ID; submissions with the same `source` field use the same cache directory.  
Note 3: the `source` field contains exactly one character `/`; `domainId/pid` is recommended.  
Note 4: the etag of test data is used to identify whether local cached files are consistent with the cloud; you can use a hash or a modified-time timestamp.

## Test Data Download

If test data used in the pushed judge task is missing, the Judge side requests missing or modified files from Web.

```http
POST /d/:domainId/judge/files
Cookie: sid=COOKIE_SID

{"pid":PROBLEM_ID,"files":["a.in","a.out"]}
```

The server returns:

```json
{
    "links": {
        "a.in": "https://cdn.hydro.ac/d/DOMAIN_ID/pid/1/a.in",
        "a.out": "https://cdn.hydro.ac/d/DOMAIN_ID/pid/1/a.out"
    }
}
```

## Judge Result Reporting

```json
{
    "key": "next/end",
    "domainId": "DOMAIN_ID",
    "rid": "RECORD_ID",

    "message": "JUDGE_MESSAGE",
    "compilerText": "COMPILER_OUTPUT",
    "status": STATUS_CODE,
    "score": SCORE,
    "time": TIME_IN_MS,
    "memory": MEMORY_IN_KB,
    "progress": PROGRESS_PERCENTAGE,
    "addProgress": PROGRESS_PERCENTAGE,
    "case": {
        "id": ID,
        "subtaskId": SUBTASK_ID,
        "score": SCORE,
        "status": STATUS_CODE,
        "message": "CHECKER_MESSAGE"
    }
}
```

Except for the three fields `key`, `domainId`, and `rid`, all other fields are optional. For `STATUS_CODE` meanings, see [hydro-dev/Hydro/packages/utils/lib/status](https://github.com/hydro-dev/Hydro/blob/master/packages/utils/lib/status.ts).  
When `key` is `end`, it means the judge task is completed and the result is finalized. The Web side can then count ACs, register scoreboards, and perform related operations.
