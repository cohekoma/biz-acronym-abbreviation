<template>
    <!-- Hero -->
    <section class="relative">
      <div class="absolute inset-x-0 top-0 h-90 bg-gradient-to-b from-blue-soft/55 to-transparent" />

      <div class="page-container relative grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-18">
        <!-- Left hero -->
        <div>
          <div class="pill mb-6 w-fit border-pink-border bg-white/80 text-sm">
            <span class="text-pink">♡</span>
            Giải thích các từ viết tắt tiếng Anh trong môi trường công sở
          </div>

          <h1 class="font-heading text-4xl font-700 leading-tight! tracking-normal text-ink sm:text-5xl lg:text-5xl">
            Thư viện thuật ngữ 
            <br>
            tiếng Anh <span class="text-blue">viết tắt</span> 
            <br>
            trong<span class="text-pink">đa ngữ cảnh</span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Tổng hợp các thuật ngữ viết tắt trong tiếng Anh thường được dùng trông môi trường công sở
          </p>

          <form class="mt-8 max-w-2xl">
            <label for="search" class="sr-only">Tìm kiếm</label>
            <div class="flex rounded-30px border border-border bg-white p-2 shadow-[0_18px_60px_rgba(17,24,39,0.08)]">
              <input
                id="search"
                type="search"
                placeholder="Tìm chữ hoặc từ viết tắt, ví dụ: KPI, SaaS, EBITDA..."
                class="min-w-0 flex-1 rounded-24px bg-transparent px-5 text-base outline-none placeholder:text-muted/70"
              >
              <button class="btn-primary h-12 w-14 rounded-22px px-0" type="submit" aria-label="Search">
                🔍
              </button>
            </div>
          </form>

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <span class="mr-1 text-sm font-600 text-muted">Từ khoá phổ biến:</span>
            <NuxtLink
              v-for="term in popularTerms"
              :key="term"
              to="#"
              class="rounded-full border border-border bg-white px-4 py-2 text-sm font-600 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-border hover:text-pink"
            >
              {{ term }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right hero card -->
        <div class="relative min-h-110 lg:min-h-120">
            <PartialsHeroExampleCard />
            <LayoutCuteBunnyIcon />
        </div>
      </div>
    </section>
</template>

<script setup>
const popularTerms = ['KPI', 'SLA', 'CAC', 'EBITDA', 'ROI', 'KYC', 'OKR', 'LTV']
</script>