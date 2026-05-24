<template>
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-border bg-cream/85 backdrop-blur-xl py-4">
      <div class="page-container flex h-20 items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <LayoutBunnyIcon />
          <LayoutLogoHeadline />
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