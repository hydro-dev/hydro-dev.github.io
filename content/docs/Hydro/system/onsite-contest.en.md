---
title: Onsite Contest Guide
---

## External Scoreboard

For XCPC rules, after installing `@hydrooj/scoreboard-xcpcio`, you can find `scoreboard-xcpcio.publish` in settings to configure automatic publishing of the external scoreboard.  

`domainId` and `contestId` point to the contest you want to export. Fill `publishToken` with any random string (to prevent overwrite), and `publishPath` is the scoreboard path, supporting letters + numbers.  
Set `publishEndpoint` to `https://scoreboard.hydrooj.com/_publish`, then restart the server. The corresponding contest scoreboard will sync to `https://scoreboard.hydrooj.com/<publishPath>` (ensure contest-time server network connectivity).

## Resolver Playback

After installing `@hydrooj/onsite-toolkit`, you can export a contest cdp package after the contest, download and extract it, open [https://resolver.hydrooj.com](https://resolver.hydrooj.com), select the directory containing the extracted ndjson files, disable JudgingQueue in options, disable school badge display, and enable user avatar display to start resolver playback.  
Keyboard shortcuts:

- Left mouse button / Right arrow / Down arrow / Space: Step
- `R`: Restart
- `A`: Auto
- `[` / `]`: Speed control
- `Ctrl + Right arrow`: Fast forward

## Team PC, Balloons, Printing

See [XCPC-Tools](/docs/Tools)
