<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug)

const acronym = getAcronymBySlug(slug)
console.log(acronym)
if (!acronym) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Acronym not found'
  })
}

useHead({
  title: acronym.seo?.title ?? `${acronym.term} là gì?`,
  meta: [
    {
      name: 'description',
      content:
        acronym.seo?.description ??
        `${acronym.term} và ngữ nghĩa của từ trong từng ngữ cảnh khác nhau.`
    }
  ]
})
</script>

<template>
  <main class="min-h-screen bg-cream font-body text-ink">
    <section class="page-container py-10 sm:py-14 lg:py-18">
      <NuxtLink to="/" class="link-pink mb-8 inline-flex">
        ← Về trang chủ
      </NuxtLink>

      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <!-- Main content -->
        <article class="space-y-8">
          <!-- Header card -->
          <header class="card-base p-6 sm:p-8">
            <div class="flex flex-wrap items-center gap-3">
              <span class="rounded-full bg-pink-soft px-3 py-1 text-xs font-700 uppercase tracking-wide text-pink">
                {{ acronym.difficulty ?? 'business' }}
              </span>

              <span class="rounded-full bg-blue-soft px-3 py-1 text-xs font-700 text-blue">
                {{ acronym.meanings.length }} contexts
              </span>
            </div>

            <h1 class="mt-5 font-heading text-5xl font-700 tracking-tight text-blue sm:text-6xl">
              {{ acronym.term }}
            </h1>

            <p class="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {{ acronym.shortDescription }}
            </p>
          </header>

          <!-- Context meanings -->
          <section class="space-y-5">
            <div
              v-for="meaning in acronym.meanings"
              :key="meaning.context + meaning.fullForm"
              class="card-base p-6 sm:p-7"
            >
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span class="rounded-full bg-green-soft px-3 py-1 text-xs font-700 text-green">
                    {{ meaning.context }}
                  </span>

                  <h2 class="mt-4 font-heading text-2xl font-700">
                    {{ meaning.fullForm }}
                  </h2>

                  <p class="mt-2 text-lg font-600 text-ink">
                    {{ meaning.meaningVi }}
                  </p>
                </div>
              </div>

              <p class="mt-5 text-base leading-8 text-muted">
                {{ meaning.explanationVi }}
              </p>

              <div
                v-if="meaning.exampleEn || meaning.exampleVi"
                class="mt-6 rounded-2xl border border-blue/20 bg-blue-soft p-5"
              >
                <p class="text-sm font-700 text-ink">
                  Example
                </p>

                <p v-if="meaning.exampleEn" class="mt-2 text-sm leading-6 text-muted">
                  “{{ meaning.exampleEn }}”
                </p>

                <p v-if="meaning.exampleVi" class="mt-2 text-sm leading-6 text-muted">
                  {{ meaning.exampleVi }}
                </p>
              </div>

              <div
                v-if="meaning.commonMistakes?.length"
                class="mt-6 rounded-2xl border border-pink-border bg-pink-soft p-5"
              >
                <p class="text-sm font-700 text-ink">
                  Common mistakes
                </p>

                <ul class="mt-3 space-y-2">
                  <li
                    v-for="mistake in meaning.commonMistakes"
                    :key="mistake"
                    class="text-sm leading-6 text-muted"
                  >
                    • {{ mistake }}
                  </li>
                </ul>
              </div>

              <div v-if="meaning.relatedTerms?.length" class="mt-6">
                <p class="text-sm font-700 text-ink">
                  Related terms
                </p>

                <div class="mt-3 flex flex-wrap gap-2">
                  <NuxtLink
                    v-for="term in meaning.relatedTerms"
                    :key="term"
                    to="#"
                    class="rounded-full border border-border bg-white px-3 py-1.5 text-sm font-600 text-muted transition hover:border-pink-border hover:text-pink"
                  >
                    {{ term }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </section>
        </article>

        <!-- Sidebar -->
        <aside class="space-y-5">
          <div class="card-base p-5">
            <h2 class="font-heading text-lg font-700">
              Quick summary
            </h2>

            <div class="mt-4 space-y-3 text-sm text-muted">
              <p>
                <span class="font-700 text-ink">Term:</span>
                {{ acronym.term }}
              </p>

              <p>
                <span class="font-700 text-ink">Contexts:</span>
                {{ acronym.meanings.map((item) => item.context).join(', ') }}
              </p>

              <p v-if="acronym.updatedAt">
                <span class="font-700 text-ink">Updated:</span>
                {{ acronym.updatedAt }}
              </p>
            </div>
          </div>

          <div class="rounded-28px border border-pink-border bg-pink-soft p-5">
            <h2 class="font-heading text-lg font-700">
              Found a better meaning?
            </h2>

            <p class="mt-2 text-sm leading-6 text-muted">
              Suggest an update and our team will review it.
            </p>

            <NuxtLink to="/suggest" class="btn-soft mt-5 bg-white">
              Suggest edit ♡
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>