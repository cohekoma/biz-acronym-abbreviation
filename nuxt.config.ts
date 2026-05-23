export default defineNuxtConfig({
  compatibilityDate: '2026-05-23',

  modules: [
    '@unocss/nuxt'
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/plus-jakarta-sans/600.css',
    '@fontsource/plus-jakarta-sans/700.css',
    '@fontsource/nunito-sans/600.css',
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'BizAcronyms - English Business Acronyms Explained',
      meta: [
        {
          name: 'description',
          content: 'English business acronyms explained in Vietnamese with clear context, examples, and related terms.'
        }
      ]
    }
  }
})