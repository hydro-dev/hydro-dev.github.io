---
title: 数据库结构
---

## document

基础列：(domainId, docId, docType), owner, title, content
存储所有文档，包括题目，比赛，训练等等，使用 docType 字段区分文档类型，docType 的定义可参照 packages/hydrooj/src/model/document.ts 。

## document.status

基础列：(domainId, docId, docType, uid), owner, title, content
存储用户在对应文档下留下的信息，如题目的提交状态，比赛的成绩等等。

## record

基础列：((_id), domainId), uid, code, lang, score, status
存储用户的提交记录。

## user

基础列：(_id), uname, unameLower, mail, mailLower, priv
在系统中的所有用户。

## oplog

存储系统日志。

## blacklist

## system

## task

用于提交队列等。

## event

用于处理 Hydro 的内部事件通讯，请勿手动操作。

## schedule

定时任务相关。

## opcount

用于记录用户的访问情况，作频率限制用

## token

存储临时信息，如登陆状态，注册验证码等
