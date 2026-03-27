---
title: Onsite Contest Guide
---

## External Scoreboard (Public View)

For XCPC rules, you can publish a public-facing scoreboard by installing the `@hydrooj/scoreboard-xcpcio` plugin.

### Configuration:
In the Control Panel, locate the `scoreboard-xcpcio.publish` settings:
- **`domainId` / `contestId`**: Specify the contest you wish to export.
- **`publishToken`**: A secret string to prevent unauthorized overwrites.
- **`publishPath`**: The URL slug for your scoreboard (alphanumeric only).
- **`publishEndpoint`**: Set to `https://scoreboard.hydrooj.com/_publish`.

Restart your server after configuration. The live scoreboard will be synchronized to `https://scoreboard.hydrooj.com/<your_publishPath>`.

## Resolver Playback (Final Reveal)

To perform a "reveal" or "playback" of the contest results:
1. Install the `@hydrooj/onsite-toolkit` plugin.
2. Export the contest's CDP package and extract it on your local machine.
3. Open [resolver.hydrooj.com](https://resolver.hydrooj.com).
4. Select the directory containing the extracted `.ndjson` files.
5. In the settings, disable **JudgingQueue** and **School Badge Display**, and enable **User Avatar Display**.

### Controls:
- **Step (Single Action)**: Left Mouse Button / Right Arrow / Down Arrow / Space.
- **Auto (Automatic Reveal)**: `A`
- **Speed Up / Slow Down**: `[` and `]`
- **Fast Forward**: `Ctrl + Right Arrow`
- **Restart**: `R`

## Logistics: Team PCs, Balloons, and Printing

For a comprehensive suite of contest tools, see the [XCPC-Tools](/docs/Tools) documentation.

