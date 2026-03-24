---
title: Maintenance
---

## Process Management (PM2)

Hydro's automated installation script uses **PM2** to manage system processes.

### Core Processes
You can view active processes by running `pm2 ls`. A typical Hydro installation includes:
- `hydrooj`: The main web application.
- `hydro-sandbox`: The judge sandbox component.
- `mongodb`: The database engine.
- `caddy`: The reverse proxy and SSL manager.

### Standard Commands
Use `<id>` or `<name>` from the process list as a parameter (e.g., `pm2 restart hydrooj` or `pm2 restart 0`).

```bash
pm2 ls                          # List all processes
pm2 start <id/name>             # Start a process
pm2 stop <id/name>              # Stop a process
pm2 restart <id/name>           # Restart a process
pm2 logs <id/name> --lines 100  # View the last 100 log entries
pm2 save                        # Save current process list for auto-boot
pm2 resurrect                   # Manually restore a saved process list
```

<Callout>
### Performance Notes
- **LXC/Minimal Systems**: In some environments, Hydro may not auto-start after a server reboot. If this occurs, use `pm2 resurrect` to restore your processes.
- **Service Recovery**: If your process list becomes corrupt, run `pm2 stop all && pm2 del all`, then rerun the automated installation script. **Existing data will not be lost.**
- **Multi-Process Mode**: While Hydro supports clustering (`-i <n>`), this is generally unnecessary for servers with 4 or fewer cores and will significantly increase memory consumption.
</Callout>

## Software Updates

Hydro releases regular updates. To upgrade your instance:

```bash
# Update Hydro and its core components
yarn global upgrade-interactive --latest

# Apply the updates by restarting the service
pm2 restart hydrooj
```

**Warning**: Do **not** upgrade PM2 itself unless specifically instructed, as this may clear your saved process configuration.

### Version Checking
To check your currently installed Hydro version:
```bash
cd $(yarn global dir) && yarn list --pattern hydrooj
```

### System Cleanup
To free up disk space from package caches:
```bash
yarn cache clean && nix-collect-garbage
```

