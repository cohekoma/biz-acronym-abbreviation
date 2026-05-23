// uno.config.js
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],

  theme: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      heading: 'Inter, system-ui, sans-serif',
    },

    fontSize: {
      base: '16px',
      sm: '14px',
      lg: '18px',
      xl: '20px',
    },
  },
})