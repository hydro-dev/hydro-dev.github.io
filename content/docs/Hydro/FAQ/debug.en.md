---
title: Debugging Guide
---

Enter the server console and use `pm2 ls` to check the current list of running processes.
Under normal conditions, there should be four running processes: `hydrooj`, `hydro-sandbox`, `mongodb`, and `caddy`.
If processes are missing, run `pm2 stop all`, then `pm2 del all`, and rerun the installation script.

Check whether each process has started (status is online and uptime is at least one minute).

If caddy cannot start, it is usually due to port conflicts or errors in `~/.hydro/Caddyfile`; you can try `cd ~/.hydro && caddy run` for details.
If hydro-sandbox cannot start, it is usually due to insufficient permissions / kernel version too low; use `pm2 logs hydro-sandbox --lines 100` for details.
If hydrooj cannot start / does not run properly after starting, see the section below.

## hydrooj

After stopping with `pm2 stop hydrooj`, run command `hydrooj` directly to run Hydro in the foreground for easier log inspection.

1. Try updating to the latest version and check whether it works properly.
2. Back up the plugin list with `cp ~/.hydro/addon.json ~/.hydro/addon.json.bak`.
3. Use `hydrooj addon list` to view plugins, and disable all non-official plugins (those without the `@hydrooj/` prefix) with `hydrooj addon remove <name>`.
4. Restart and check whether it runs properly.
5. If it works, the issue is caused by a third-party plugin. Try re-enabling the plugins you just disabled one by one and check when the issue appears, then contact the plugin provider.
6. If it still does not run properly, provide the development team with the full log from Hydro startup to fault occurrence for troubleshooting.

## Frontend issues

This refers to frontend pages failing to load (continuous spinner or yellow/red error prompts at the bottom-left).

1. Press `Ctrl+Shift+Delete` to clear browser cache and try again.
2. Update Chrome to the latest version and try again.
3. Same as above, try disabling third-party plugins.
3. If the issue still persists, open F12 Developer Tools, go to the `Console` tab, and check for error messages.
4. Open the `Network` tab and check for failed requests.
5. Report the issue in the group and attach screenshots of the above.
