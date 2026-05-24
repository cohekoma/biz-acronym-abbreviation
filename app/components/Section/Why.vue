<template>
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
</template>

<script setup>
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