import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind3,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind3()
  ],

  transformers: [
    transformerVariantGroup()
  ],

  theme: {
    colors: {
      cream: '#FFFDFC',
      ink: '#111827',
      muted: '#6B7280',
      soft: '#FFF7F8',
      border: '#F1E4E7',
      pink: {
        DEFAULT: '#E96F94',
        soft: '#FFE3EA',
        border: '#F8B8C8'
      },
      blue: {
        DEFAULT: '#5B8DEF',
        soft: '#EAF2FF'
      },
      green: {
        DEFAULT: '#59C7A0',
        soft: '#E8FAF3'
      },
      yellow: {
        DEFAULT: '#F4B860',
        soft: '#FFF3D8'
      },
      purple: {
        DEFAULT: '#A78BFA',
        soft: '#F1EAFE'
      },
      orange: {
        DEFAULT: '#F2996E',
        soft: '#FFF0E8'
      }
    },
    fontFamily: {
      heading: 'Plus Jakarta Sans, Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      cute: 'Nunito Sans, Inter, system-ui, sans-serif'
    }
  },

  shortcuts: {
    'page-container': 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    'card': 'rounded-28px border border-border bg-white shadow-[0_18px_60px_rgba(17,24,39,0.06)]',
    'soft-card': 'rounded-28px border border-border bg-white/80 shadow-[0_18px_50px_rgba(17,24,39,0.05)] backdrop-blur',
    'pill': 'inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-ink shadow-sm',
    'btn-primary': 'inline-flex items-center justify-center rounded-18px bg-pink px-5 py-3 text-sm font-600 text-white shadow-[0_12px_28px_rgba(233,111,148,0.28)] transition hover:translate-y--1 hover:shadow-[0_16px_36px_rgba(233,111,148,0.34)]',
    'btn-soft': 'inline-flex items-center justify-center rounded-18px border border-pink-border bg-pink-soft px-5 py-3 text-sm font-600 text-pink transition hover:translate-y--1',
    'section-title': 'font-heading text-2xl font-700 tracking-tight text-ink sm:text-3xl',
    'section-subtitle': 'mt-2 max-w-2xl text-base leading-7 text-muted'
  }
})