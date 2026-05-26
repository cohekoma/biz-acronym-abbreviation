<template>
    <!-- Content blocks -->
    <section class="page-container grid gap-5 py-6 lg:grid-cols-[1.2fr_0.8fr_0.7fr]">
      <!-- Recently added -->
      <div class="card p-5 sm:p-6">
        <div class="mb-5 flex items-center gap-2">
          <h2 class="font-heading text-xl font-700">Được thêm gần đây</h2>
          <span class="rounded-full bg-purple-soft px-2.5 py-1 text-xs font-700 text-purple">
            New
          </span>
        </div>

        <div class="divide-y divide-border">
          <NuxtLink
            v-for="item in recentlyAdded"
            :key="item.term"
            to="#"
            class="grid gap-3 py-4 transition hover:text-pink sm:grid-cols-[70px_1fr_auto_auto] sm:items-center"
          >
            <p class="font-heading text-lg font-700">{{ item.term }}</p>
            <p class="text-sm text-muted">{{ item.full }}</p>
            <span class="w-fit rounded-lg bg-pink-soft px-2.5 py-1 text-xs font-700 text-pink">
              {{ item.context }}
            </span>
            <p class="text-xs text-muted">{{ item.age }}</p>
          </NuxtLink>
        </div>

        <NuxtLink to="#" class="mt-4 inline-flex text-sm font-700 text-pink">
          Xem thêm →
        </NuxtLink>
      </div>

      <!-- Popular acronyms -->
      <div class="card p-5 sm:p-6">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-heading text-xl font-700">Từ phổ biến</h2>
          <span class="text-pink">♡</span>
        </div>

        <ol class="space-y-3">
          <li
            v-for="([term, full], index) in popularAcronyms"
            :key="term"
            class="grid grid-cols-[34px_70px_1fr] items-center gap-2 text-sm"
          >
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-pink-soft text-xs font-700 text-pink">
              {{ index + 1 }}
            </span>
            <span class="font-heading font-700">{{ term }}</span>
            <span class="truncate text-muted">{{ full }}</span>
          </li>
        </ol>

        <NuxtLink to="#" class="mt-6 inline-flex text-sm font-700 text-pink">
          Xem thêm →
        </NuxtLink>
      </div>

      <!-- CTA -->
      <div class="relative overflow-hidden rounded-28px border border-pink-border bg-pink-soft p-6">
        <div class="relative z-10 max-w-58">
          <h2 class="font-heading text-2xl font-700 leading-tight">
            Tài nguyên
          </h2>

          <p class="mt-4 leading-7 text-muted">
            Tổng hợp các bài viết và nguồn tài nguyên tham khảo để hiểu rõ hơn về các từ khoá và thuật ngữ viết tắt.
          </p>

          <NuxtLink to="#" class="btn-soft mt-6 bg-white">
            Explore resources →
          </NuxtLink>
        </div>

        <div class="absolute bottom-4 right-4 hidden text-6xl sm:block">
          📘
        </div>
      </div>
    </section>
</template>

<script setup>
const recentlyAdded = [
  {
    term: 'TCO',
    full: 'Total Cost of Ownership',
    context: 'Tài chính',
    age: '2 days ago'
  },
  {
    term: 'ICP',
    full: 'Ideal Customer Profile',
    context: 'Marketing',
    age: '3 days ago'
  },
  {
    term: 'NDA',
    full: 'Non-Disclosure Agreement',
    context: 'Pháp lý',
    age: '5 days ago'
  }
]

const popularAcronyms = [
  ['KPI', 'Key Performance Indicator'],
  ['ROI', 'Return on Investment'],
  ['SLA', 'Service Level Agreement'],
  ['EBITDA', 'Earnings Before Interest, Taxes...'],
  ['CAC', 'Customer Acquisition Cost']
]
</script>