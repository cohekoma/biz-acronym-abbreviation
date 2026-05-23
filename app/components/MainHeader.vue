<template>
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-border bg-cream/85 backdrop-blur-xl py-4">
      <div class="page-container flex h-20 items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="relative h-12 w-12 shrink-0 rounded-2xl border border-pink-border bg-white shadow-sm">
            <div class="absolute left-1/2 top-3 h-6 w-7 -translate-x-1/2 rounded-full border border-ink/70 bg-white">
              <span class="absolute left-1.5 top-2 h-1 w-1 rounded-full bg-ink" />
              <span class="absolute right-1.5 top-2 h-1 w-1 rounded-full bg-ink" />
              <span class="absolute left-1/2 top-3.5 h-1 w-1 -translate-x-1/2 rounded-full bg-pink" />
            </div>
            <div class="absolute left-2 top-2 h-2.5 w-2.5 rotate-45 border-l border-t border-ink/70 bg-white" />
            <div class="absolute right-2 top-2 h-2.5 w-2.5 rotate-45 border-l border-t border-ink/70 bg-white" />
            <div class="absolute bottom-2 left-1/2 h-2 w-5 -translate-x-1/2 rounded-md bg-blue-soft" />
          </div>

          <div>
            <p class="font-heading text-xl font-900 leading-none sm:text-xl uppercase">
              Tiếng Anh Viết Tắt
            </p>
            <p class="mt-1 hidden font-cute text-[16px] font-600 text-pink sm:block">
              Thư viện cho dân công sở
            </p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-8 text-sm font-600 text-ink lg:flex">
          <NuxtLink to="#" class="hover:text-pink">Tìm Kiếm</NuxtLink>
          <NuxtLink to="#" class="hover:text-pink">Danh mục</NuxtLink>
          <NuxtLink to="#" class="hover:text-pink">Nổi bật</NuxtLink>
          <NuxtLink to="#" class="hover:text-pink">Tài Nguyên</NuxtLink>
          <NuxtLink to="#" class="hover:text-pink">Về Bọn Mình</NuxtLink>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <button
            class="hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-sm transition hover:translate-y--1 md:flex"
            aria-label="Toggle theme"
          >
            ☀️
          </button>

          <button
            class="hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-sm transition hover:translate-y--1 md:flex"
            aria-label="Search"
          >
            🔎
          </button>

          <NuxtLink to="#" class="btn-soft hidden sm:inline-flex">
            Đề xuất từ ♡
          </NuxtLink>

          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white shadow-sm lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
</template>