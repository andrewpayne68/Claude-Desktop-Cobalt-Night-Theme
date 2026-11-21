import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Cobalt Night: near-black navy page, slightly lifted black sidebar and
// chat panels, cobalt-blue text. Accent stays Anthropic clay so Claude's
// marks and highlights keep their classic colour.
const { theme, problems } = makeColors({
  label: 'Cobalt Night',
  only: 'dark',
  roles: {
    accent: '#d97757', // Anthropic clay
    danger: '#e5534b',
    success: '#4fae7a',
    warning: '#d9a23a',
    pro: '#9a7cf0',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#05070f', // main background: dark blue, almost black
        'surface-1': '#0c0f18', // chat cards / message boxes
        'surface-2': '#10131d', // left sidebar and panels
        'surface-3': '#141824', // menus
        'text-primary': '#8aaaff', // cobalt, lifted for readability
        'text-secondary': '#7393ea',
        'text-muted': '#6282d6',
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
