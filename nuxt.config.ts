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
      title: 'Tiếng Anh Viết Tắt - Thư viện chữ và từ viết tắt tiếng Anh cho dân công sở',
      meta: [
        {
          name: 'description',
          content: 'Thư viện chữ và từ viết tắt trong tiếng Anh thường được sử dụng trong môi trường công sở ở đa lĩnh vực (pháp lý, công nghệ, quản trị, nhân sự, vận tải, etc.).'
        }
      ]
    }
  }
})