<script setup>
const navItems = [
  { label: 'Chữ Viết Tắt', to: '/abbreviations' },
  { label: 'Từ Viết Tắt', to: '/acroyms' },
  { label: 'Contact', to: '/contact' },
]

const isOpen = ref(false)
</script>

<template>
    <nav class="hidden items-center gap-6 md:flex">
        <NuxtLink
        v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-sm font-medium text-gray-600 transition hover:text-gray-950"
            >
        {{ item.label }}
        </NuxtLink>
    </nav>

    <div class="hidden md:block">
        <NuxtLink 
        to="/login"
        class="rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
        Đề xuất từ mới
        </NuxtLink>
    </div>

    <!-- Mobile nav -->
    <div v-if="isOpen" class="border-t border-gray-200 py-4 md:hidden">
        <nav class="flex flex-col gap-3">
            <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            @click="isOpen = false"
            >
            {{ item.label }}
            </NuxtLink>

            <NuxtLink
            to="/login"
            class="mt-2 rounded-lg bg-gray-950 px-3 py-2 text-center text-sm font-medium text-white"
            @click="isOpen = false"
            >
            Login
            </NuxtLink>
        </nav>
    </div>

    <button
        class="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
    >
        <span class="text-2xl leading-none">
        {{ isOpen ? '×' : '☰' }}
        </span>
    </button>
</template>