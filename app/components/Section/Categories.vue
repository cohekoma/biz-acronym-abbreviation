<template>
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
</template>

<script setup>
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
</script>