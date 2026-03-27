---
title: Upgrade Guide
---

## Recommended Upgrade Path

To upgrade your Hydro instance to the latest version:
1. Run: `yarn global upgrade-interactive --latest`
2. Use the spacebar to select **all** packages except for `pm2`.
3. Press Enter to confirm.
4. Restart the service: `pm2 restart hydrooj`
5. Verify success: Check logs with `pm2 logs hydrooj --lines 100`. Look for the "Server started" message.

**Important Considerations:**
- Always upgrade the system before adding or updating plugins to avoid compatibility issues.
- If you have installed plugins from URLs (e.g., `hydrooj install https://...`), re-run those install commands after a system upgrade to ensure the plugins are also updated.
- All historical versions of Hydro are designed for a seamless upgrade to the latest version. If you have any questions, please contact the official user group.

## Common Upgrade Issues

### 1. Removing nvm
Early versions of Hydro relied on `nvm` to manage the Node.js environment. This approach is now deprecated in favor of Nix. 
- If `nvm` is present, you can remove it: `rm -rf ~/.nvm`.
- Ensure Nix is installed: `. <(curl https://hydro.ac/nix.sh)`.
- Use Nix to reinstall core components: `nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2`.

### 2. "NodeJS >= xx required" Errors
If you see a version error during upgrade:
1. Check for `nvm` as described above.
2. Update your Nix channels: `nix-channel --update`.
3. Reinstall Node.js and Yarn via Nix: `nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2`.
4. Proceed with the upgrade steps.
5. Use `pm2 restart hydrooj --update-env` to apply the environment changes.

### 3. Upgrading the Sandbox
If the system displays a warning that your sandbox version is critically low or vulnerable to security issues, follow these steps:

```bash
nix-channel --update
nix-env -e hydro.sandbox 
nix-env -iA nixpkgs.go-judge 
ln -sf $(which go-judge) /usr/bin/hydro-sandbox
pm2 restart hydro-sandbox --update-env
```

