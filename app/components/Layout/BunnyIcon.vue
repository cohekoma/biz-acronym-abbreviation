<template>
    <div class="relative h-12 w-12 shrink-0 rounded-2xl border border-pink-border bg-white shadow-sm">
        <!-- {/* bunny ears */} -->
        <div class="absolute left-3 top-1 h-5! w-2.5 -rotate-6 rounded-full border border-ink/70 bg-white">
            <div class="absolute left-1/2 top-1 h-3 w-1 -translate-x-1/2 rounded-full bg-pink/40"></div>
        </div>
        <div class="absolute right-3 top-1 h-5 w-2.5 rotate-6 rounded-full border border-ink/70 bg-white">
            <div class="absolute left-1/2 top-1 h-3 w-1 -translate-x-1/2 rounded-full bg-pink/40"></div>
        </div>

        <!-- {/* face */} -->
        <div class="absolute left-1/2 top-4 h-6 w-7 -translate-x-1/2 rounded-full border border-ink/70 bg-white">
            <!-- {/* eyes */} -->
            <span class="absolute left-1.5 top-2 h-1 w-1 rounded-full bg-ink"></span>
            <span class="absolute right-1.5 top-2 h-1 w-1 rounded-full bg-ink"></span>

            <!-- {/* nose */} -->
            <span class="absolute left-1/2 top-3 h-1 w-1 -translate-x-1/2 rounded-full bg-pink" />
        </div>
    </div>

</template>