# 评测端通信协议

当前版本 v1 。

## 评测端交互流程

- GET /judge/files (检查登陆状态是否有效，若无效则跳转登录逻辑，通常每六小时执行一次)
- WEBSOCKET /judge/conn （主交互通道）

若登录失效，则进行登录操作。

```http
POST /login

{"uname":"USERNAME","password":"PASSWORD","rememberme":true}
```

## WebSocket 连接建立流程

```http
WEBSOCKET /judge/conn
Authorization: Bearer COOKIE_SID
```

连接建立后，评测端向 Web 汇报当前节点状态（可选）  
注：下方信息仅作数据格式展示用，不保证真实有效。

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

建立连接后每隔 30s，评测端发送 `{"key":"ping"}`。

## 语言配置下发

在连接建立后，Web 端会向 Judge 分发服务端的语言设置。如果客户端需要进行特殊设置，可忽略此条消息。

## 评测任务推送

Web 端会通过 WebSocket 向评测端推送评测任务。

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

注1：如果比赛 ID 为 `000000000000000000000000` 则表示此提交为自测提交，自测提交使用 `input` 字段值作为程序输入。  
注2：`source` 字段为缓存 ID，同 `source` 字段的提交使用相同的缓存目录。  
注3：`source` 字段包含且仅包含一个字符 `/`，建议使用 `domainId/pid`。  
注4：测试数据的 etag 用来识别本地缓存的文件是否与云端一致，可使用 hash 或是修改时间的时间戳。  

## 测试数据下载

若推送的评测任务中使用了的测试数据缺失，Judge 端会向 Web 请求缺失或是修改的文件。

```http
POST /d/:domainId/judge/files
Cookie: sid=COOKIE_SID

{"pid":PROBLEM_ID,"files":["a.in","a.out"]}
```

服务端返回如下：

```json
{
    "links": {
        "a.in": "https://cdn.hydro.ac/d/DOMAIN_ID/pid/1/a.in",
        "a.out": "https://cdn.hydro.ac/d/DOMAIN_ID/pid/1/a.out"
    }
}
```

## 评测结果上报

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

除 `key`, `domainId`, `rid` 三个字段外，其他字段均为可选。关于 `STATUS_CODE` 含义请查看 [hydro-dev/Hydro/packages/utils/lib/sattus](https://github.com/hydro-dev/Hydro/blob/master/packages/utils/lib/status.ts) 。  
当 `key` 为 `end` 时表示评测任务已经完成，结果确定，Web 端可进行 AC 数计量，登记成绩表等操作。  
