<template>
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
</template>

<script setup>
const popularTerms = ['KPI', 'SLA', 'CAC', 'EBITDA', 'ROI', 'KYC', 'OKR', 'LTV']
</script>