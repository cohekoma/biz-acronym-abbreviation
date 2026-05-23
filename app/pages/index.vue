<script setup lang="ts">
const popularTerms = ['KPI', 'SLA', 'CAC', 'EBITDA', 'ROI', 'KYC', 'OKR', 'LTV']

const categories = [
  {
    name: 'Finance & Accounting',
    count: 312,
    emoji: '📈',
    color: 'bg-green-soft'
  },
  {
    name: 'Banking & Compliance',
    count: 210,
    emoji: '🏦',
    color: 'bg-blue-soft'
  },
  {
    name: 'Legal & Contracts',
    count: 178,
    emoji: '⚖️',
    color: 'bg-purple-soft'
  },
  {
    name: 'Technology',
    count: 345,
    emoji: '💻',
    color: 'bg-orange-soft'
  },
  {
    name: 'Marketing & Sales',
    count: 198,
    emoji: '📣',
    color: 'bg-pink-soft'
  },
  {
    name: 'HR & Operations',
    count: 132,
    emoji: '👥',
    color: 'bg-green-soft'
  },
  {
    name: 'Startup & Business',
    count: 256,
    emoji: '🚀',
    color: 'bg-yellow-soft'
  }
]

const recentlyAdded = [
  {
    term: 'TCO',
    full: 'Total Cost of Ownership',
    context: 'Finance',
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
    context: 'Legal',
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

const trustItems = [
  {
    title: 'Curated & Reviewed',
    text: 'Every entry is reviewed by our editors for accuracy.',
    emoji: '🛡️',
    bg: 'bg-pink-soft'
  },
  {
    title: 'Context Matters',
    text: 'Multiple meanings with clear workplace context.',
    emoji: '✅',
    bg: 'bg-green-soft'
  },
  {
    title: 'Vietnamese Friendly',
    text: 'Explanations in Vietnamese to help you understand better.',
    emoji: '💜',
    bg: 'bg-purple-soft'
  },
  {
    title: 'Helpful & Practical',
    text: 'Real usage, related terms, and common mistakes.',
    emoji: '⭐',
    bg: 'bg-yellow-soft'
  }
]
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-cream font-body text-ink">
    <!-- Hero -->
    <section class="relative">
      <div class="absolute inset-x-0 top-0 h-90 bg-gradient-to-b from-blue-soft/55 to-transparent" />

      <div class="page-container relative grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-18">
        <!-- Left hero -->
        <div>
          <div class="pill mb-6 w-fit border-pink-border bg-white/80 text-sm">
            <span class="text-pink">♡</span>
            English business acronyms, explained for Vietnamese professionals
          </div>

          <h1 class="font-heading text-4xl font-700 leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Understand business acronyms.
            <br>
            In context. In
            <span class="text-pink">your language.</span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Clear explanations in Vietnamese, real-world examples, and multiple contexts for each acronym.
          </p>

          <form class="mt-8 max-w-2xl">
            <label for="search" class="sr-only">Search acronyms</label>
            <div class="flex rounded-30px border border-border bg-white p-2 shadow-[0_18px_60px_rgba(17,24,39,0.08)]">
              <input
                id="search"
                type="search"
                placeholder="Search acronyms e.g. KPI, SaaS, EBITDA..."
                class="min-w-0 flex-1 rounded-24px bg-transparent px-5 text-base outline-none placeholder:text-muted/70"
              >
              <button class="btn-primary h-12 w-14 rounded-22px px-0" type="submit" aria-label="Search">
                🔍
              </button>
            </div>
          </form>

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <span class="mr-1 text-sm font-600 text-muted">Popular searches:</span>
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
          <div class="absolute left-0 top-12 hidden rounded-2xl border border-yellow/30 bg-yellow-soft px-5 py-4 shadow-sm md:block">
            <p class="font-heading text-sm font-700 text-orange">Ví dụ</p>
            <p class="mt-1 text-sm text-muted">Thực tế</p>
          </div>

          <div class="absolute right-3 top-8 hidden rounded-2xl border border-green/30 bg-green-soft px-5 py-4 shadow-sm sm:block">
            <p class="font-heading text-sm font-700 text-green">Giải thích</p>
            <p class="mt-1 text-sm text-muted">Dễ hiểu</p>
          </div>

          <div class="absolute right-0 top-31 hidden rounded-2xl border border-purple/30 bg-purple-soft px-5 py-4 shadow-sm md:block">
            <p class="font-heading text-sm font-700 text-purple">Ngữ cảnh</p>
            <p class="mt-1 text-sm text-muted">Rõ ràng</p>
          </div>

          <div class="soft-card relative mx-auto max-w-md p-6 sm:p-8 lg:mt-4">
            <div class="mb-5 flex items-center justify-between">
              <span class="rounded-full border border-pink-border bg-pink-soft px-3 py-1 text-xs font-700 uppercase tracking-wide text-pink">
                Example
              </span>
              <span class="text-lg text-muted">✧</span>
            </div>

            <p class="font-heading text-5xl font-700 tracking-tight text-blue">
              KPI
            </p>
            <h2 class="mt-2 font-heading text-xl font-700">
              Key Performance Indicator
            </h2>

            <div class="mt-4 h-1 w-16 rounded-full bg-pink" />

            <p class="mt-5 leading-7 text-muted">
              Chỉ số đo lường hiệu suất then chốt.
            </p>

            <div class="mt-5 border-t border-border pt-4 text-sm text-muted">
              <span class="font-600 text-ink">Context:</span>
              Business, Analytics, Management
            </div>

            <div class="mt-6 rounded-2xl border border-blue/20 bg-blue-soft px-4 py-4">
              <p class="text-sm font-600 text-ink">
                Related: OKR, Metrics, Dashboard 🔗
              </p>
            </div>
          </div>

          <!-- Cute cat -->
          <div class="absolute bottom-0 right-8 hidden h-34 w-42 sm:block">
            <div class="absolute bottom-0 right-0 h-26 w-34 rounded-t-[70px] border border-ink/60 bg-white shadow-sm">
              <div class="absolute -top-3 left-5 h-7 w-7 rotate-45 border-l border-t border-ink/60 bg-white" />
              <div class="absolute -top-3 right-5 h-7 w-7 rotate-45 border-l border-t border-ink/60 bg-white" />
              <span class="absolute left-10 top-11 h-1.5 w-1.5 rounded-full bg-ink" />
              <span class="absolute right-10 top-11 h-1.5 w-1.5 rounded-full bg-ink" />
              <span class="absolute left-1/2 top-14 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-pink" />
              <span class="absolute left-8 top-15 h-3 w-5 rounded-full bg-pink/25" />
              <span class="absolute right-8 top-15 h-3 w-5 rounded-full bg-pink/25" />
            </div>

            <div class="absolute bottom-0 left-0 h-17 w-28 rounded-xl border border-ink/30 bg-white shadow-sm">
              <div class="mt-3 flex justify-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-muted/50" />
                <span class="h-1.5 w-1.5 rounded-full bg-muted/50" />
                <span class="h-1.5 w-1.5 rounded-full bg-muted/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="page-container py-10 sm:py-14">
      <div class="mb-7 flex items-end justify-between gap-4">
        <div>
          <h2 class="section-title">Explore by category</h2>
          <p class="section-subtitle">
            Browse acronym meanings by business context.
          </p>
        </div>

        <NuxtLink to="#" class="hidden text-sm font-700 text-pink sm:block">
          View all categories →
        </NuxtLink>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          to="#"
          class="group rounded-26px border border-border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,24,39,0.08)]"
        >
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition group-hover:scale-105"
            :class="category.color"
          >
            {{ category.emoji }}
          </div>
          <p class="font-heading text-sm font-700 leading-5 text-ink">
            {{ category.name }}
          </p>
          <p class="mt-2 text-xs text-muted">
            {{ category.count }} acronyms
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- Content blocks -->
    <section class="page-container grid gap-5 py-6 lg:grid-cols-[1.2fr_0.8fr_0.7fr]">
      <!-- Recently added -->
      <div class="card p-5 sm:p-6">
        <div class="mb-5 flex items-center gap-2">
          <h2 class="font-heading text-xl font-700">Recently added</h2>
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
          View all recent →
        </NuxtLink>
      </div>

      <!-- Popular acronyms -->
      <div class="card p-5 sm:p-6">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-heading text-xl font-700">Popular acronyms</h2>
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
          View all popular →
        </NuxtLink>
      </div>

      <!-- CTA -->
      <div class="relative overflow-hidden rounded-28px border border-pink-border bg-pink-soft p-6">
        <div class="relative z-10 max-w-58">
          <h2 class="font-heading text-2xl font-700 leading-tight">
            Learn more.
            <br>
            Grow more.
          </h2>

          <p class="mt-4 leading-7 text-muted">
            Curated resources, articles and tools to help you work smarter.
          </p>

          <NuxtLink to="#" class="btn-soft mt-6 bg-white">
            Explore resources →
          </NuxtLink>
        </div>

        <div class="absolute bottom-4 right-4 hidden text-6xl sm:block">
          🐱📘
        </div>
      </div>
    </section>

    <!-- Trust strip -->
    <section class="page-container pb-14 pt-6 sm:pb-20">
      <div class="grid gap-4 rounded-30px border border-border bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)] sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="flex gap-4 rounded-22px p-3"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
            :class="item.bg"
          >
            {{ item.emoji }}
          </div>

          <div>
            <h3 class="font-heading text-base font-700">{{ item.title }}</h3>
            <p class="mt-1 text-sm leading-6 text-muted">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>