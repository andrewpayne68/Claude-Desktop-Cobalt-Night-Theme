import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Cobalt Night: matches Ghostty's HaX0R Blue on a pure black background.
// Everything is electric blue (#11b7ff), the accent included.
const { theme, problems } = makeColors({
  label: 'Cobalt Night',
  only: 'dark',
  roles: {
    accent: '#10b6ff', // HaX0R Blue (was Anthropic clay #d97757)
    danger: '#e5534b',
    success: '#4fae7a',
    warning: '#d9a23a',
    pro: '#9a7cf0',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#000000', // main background: pure black, like Ghostty
        'surface-1': '#000000', // chat cards / message boxes
        'surface-2': '#000000', // left sidebar and panels
        'surface-3': '#000000', // menus
        'text-primary': '#30c0ff', // HaX0R Blue #11b7ff, lifted just enough for Desktop's contrast check
        'text-secondary': '#11b7ff', // HaX0R Blue foreground, exact
        'text-muted': '#0b80b5',
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme, overrideColorScheme: 'dark' }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
