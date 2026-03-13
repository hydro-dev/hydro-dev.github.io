---
title: Upgrade Guide
---

Run `yarn global upgrade-interactive --latest`, then press Space to select **all** packages except pm2 for upgrade, and press Enter to confirm.
Then restart the service with `pm2 restart hydrooj`.
After restart, if `pm2 logs hydrooj --lines 100` shows no errors and you see `Server started`, then everything is fine.
When installing/upgrading plugins, be sure to upgrade the system first. Mixing old and new versions may cause various unexpected issues.
Also, if you have plugins installed from URLs like `hydrooj install https://xxxx`, rerun that command during system upgrade to update those plugins.

All historical Hydro versions can be upgraded to the latest version without data loss. If you have questions about upgrading older systems, join the official group and ask the group owner anytime.

The following are issues you may encounter during upgrade:

## Remove nvm

In very early versions, Hydro used nvm to manage the Node.js environment. This setup has been deprecated. If your system has nvm, you can remove it with `rm -rf ~/.nvm`;
Check whether nix is installed. If not, install nix first with `. <(curl https://hydro.ac/nix.sh)`;
Reinstall the Node.js environment with nix: `nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2`

## How to handle `NodeJS >= xx required` errors?

First read the nvm section above.

```bash
nix-channel --update
nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2
# Continue the upgrade steps
yarn global upgrade-interactive --latest
pm2 restart hydrooj --update-env
```

## Upgrade sandbox

If you encounter `Your sandbox version is tooooooo low!` or `Your sandbox version is vulnerable to symlink escape issue`, please upgrade the sandbox:

```bash
nix-channel --update
nix-env -e hydro.sandbox && nix-env -iA nixpkgs.go-judge && ln -sf $(which go-judge) /usr/bin/hydro-sandbox
pm2 restart hydro-sandbox --update-env
```
