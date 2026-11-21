# Cobalt Night

A dark theme for the Claude desktop app that matches Ghostty's HaX0R Blue: a pure black background with everything in electric blue (#11b7ff), the accent included.

![Cobalt Night in the Claude desktop app's Code tab](screenshot.png)

## Quick install or update (one line)

Paste this into a terminal on Windows, Ubuntu or CachyOS, then restart the Claude desktop app. It installs the theme on a new machine and updates it to the latest version on one that already has it:

```sh
claude plugin marketplace add andrewpayne68/Claude-Desktop-Cobalt-Night-Theme; claude plugin marketplace update cobalt-night; claude plugin install cobalt-night@cobalt-night; claude plugin update cobalt-night@cobalt-night
```

The theme only changes the Code tab. The Chat tab can't be themed by a plugin and keeps the app's own look.

## Install on another machine (Windows, Ubuntu, CachyOS)

1. Unzip this folder somewhere you keep, e.g. `~/claude-mods/cobalt-night`.
2. Point Claude at it with the `CLAUDE_CODE_PLUGIN_DIRS` environment variable, then restart the Claude app.

Windows (PowerShell):

```powershell
[Environment]::SetEnvironmentVariable('CLAUDE_CODE_PLUGIN_DIRS', "$HOME\claude-mods\cobalt-night", 'User')
```

Ubuntu / CachyOS: add this line to `~/.profile` (or `~/.config/environment.d/claude.conf` without `export`), then log out and back in:

```sh
export CLAUDE_CODE_PLUGIN_DIRS="$HOME/claude-mods/cobalt-night"
```

Or install it straight from GitHub by typing this at the prompt of a terminal Claude session:

```
/plugin install cobalt-night --marketplace andrewpayne68/Claude-Desktop-Cobalt-Night-Theme
```

Answer `y` to add the marketplace, then pick a scope (user scope applies it everywhere).

## Changing the colours

Edit the hex values in `hooks/register.ts`: `surface-0` is the main background, `surface-1` the chat panels, `surface-2` the sidebar, and `text-*` the text.
