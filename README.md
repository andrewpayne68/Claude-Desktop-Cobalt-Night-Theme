# Cobalt Night

A dark theme for the Claude desktop app: a near-black navy background, a slightly lighter black sidebar and chat panels, and cyan text. The accent stays Anthropic clay (#d97757), so Claude's marks look the way they normally do.

## Quick install (one line)

Paste this into a terminal on Windows, Ubuntu or CachyOS, then restart the Claude desktop app:

```sh
claude plugin marketplace add andrewpayne68/Claude-Desktop-Cobalt-Night-Theme; claude plugin install cobalt-night@cobalt-night
```

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
