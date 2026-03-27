---
title: Debugging Guide
---

## Process Management

Access your server console and use `pm2 ls` to view the status of running processes.
A healthy Hydro instance typically has four processes: `hydrooj`, `hydro-sandbox`, `mongodb`, and `caddy`.

If any processes are missing or failing to start:
1. Run `pm2 stop all` and `pm2 del all`.
2. Rerun the installation script to restore the default process configuration.

### Troubleshooting Process Failures

- **Caddy**: Usually fails due to port conflicts (port 80/443 already in use) or syntax errors in `~/.hydro/Caddyfile`. Run `cd ~/.hydro && caddy run` in the foreground to see detailed error messages.
- **Hydro-Sandbox**: Often fails due to insufficient permissions or an outdated kernel. Check logs with `pm2 logs hydro-sandbox --lines 100`.
- **HydroOJ**: If the main service fails, refer to the section below.

## Debugging HydroOJ

To inspect detailed logs, stop the background process and run Hydro in the foreground:
1. `pm2 stop hydrooj`
2. Run the command `hydrooj` directly.

**Suggested Steps:**
1. **Update**: Ensure you are running the latest version.
2. **Plugins**: Third-party plugins are a common cause of crashes. 
   - Back up your plugin list: `cp ~/.hydro/addon.json ~/.hydro/addon.json.bak`.
   - View active plugins: `hydrooj addon list`.
   - Remove non-official plugins (those without the `@hydrooj/` prefix): `hydrooj addon remove <name>`.
3. **Restart**: Check if the system runs correctly without third-party plugins. If it does, re-enable them one by one to identify the culprit.
4. **Support**: If the issue persists, provide the development team with the full console output from startup until the error occurs.

## Frontend Issues

Symptoms include pages failing to load, infinite loading spinners, or error prompts (yellow/red) at the bottom-left of the screen.

1. **Clear Cache**: Press `Ctrl+Shift+Delete` to clear your browser cache and reload.
2. **Browser Version**: Ensure you are using the latest version of Chrome or a Chromium-based browser.
3. **Disable Extensions**: Browser extensions can sometimes interfere with page scripts.
4. **Developer Tools**: Press `F12`, go to the **Console** tab for script errors, and the **Network** tab to identify failed requests.
5. **Report**: When seeking help in the user group, please include screenshots of both the Console and Network tabs.

