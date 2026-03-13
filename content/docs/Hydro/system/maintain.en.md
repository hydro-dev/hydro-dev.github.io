---
title: Maintenance
---

## PM2

Hydro installed with the one-click script uses PM2 to manage processes.

### Process Names

You can view all processes currently managed by PM2 with the command below.

```sh
pm2 ls
```

By default, the one-click install script creates the following processes:

- `hydrooj`: Hydro main process
- `hydro-sandbox`: Hydro judging sandbox
- `mongodb`: MongoDB database
- `caddy`: Reverse proxy

In the commands below, `<name>` refers to a process name from this list, and `<id>` refers to a process ID (you can get IDs with `pm2 ls`). (The angle brackets must also be replaced.)

### Basic PM2 Commands

```sh
pm2 ls # View process list
pm2 start <id> # Start process
pm2 stop <id> # Stop process
pm2 restart <id> # Restart process
pm2 del <id> # Delete process
pm2 log <id/name> --lines=100 # View last 100 log lines of the process
pm2 attach <id> # Interact with process
pm2 save # Save changes made to PM2 (required after adding/modifying/deleting processes)
```

**In some environments (commonly LXC containers or minimal systems), Hydro may fail to auto-start after reboot. In that case, use `pm2 resurrect` to manually load the process list.**

**If you manually changed the process list and overwrote the saved original list, run `pm2 stop all && pm2 del all` to clear all processes, then run the install script again. Existing data will not be lost.**

Hydro main process also supports multi-process startup, but on low-to-mid-end servers (up to 4 cores), multi-process Hydro is unnecessary, may reduce performance, and will significantly increase memory usage.

```sh
pm2 start hydrooj -i <n> # Start Hydro main process with n instances
```

## Update

Hydro releases updates periodically. You can use the following commands to update.

Under normal circumstances, **do not update PM2**! This may cause your process list to be lost!

```sh
yarn global upgrade-interactive --latest # Select components to update in interactive mode
pm2 restart hydrooj # Restart hydrooj after updating
```

## View Installed Version

```
cd `yarn global dir` && yarn list --pattern hydrooj
```

## Clear Cache

```
yarn cache clean && nix-collect-garbage
```
