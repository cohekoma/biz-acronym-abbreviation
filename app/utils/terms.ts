export type meaning = {
  context: string
  fullForm: string
  meaningVi: string
  explanationVi: string
  exampleEn?: string
  exampleVi?: string
  commonMistakes?: string[]
  relatedTerms?: string[]
}

export type entry = {
  id: string
  term: string
  slug: string
  status: 'draft' | 'published'
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  shortDescription?: string
  meanings: meaning[]
  seo?: {
    title?: string
    description?: string
  }
  updatedAt?: string
}

const modules = import.meta.glob('../data/*.json', {
  eager: true,
  import: 'default'
})

const acronyms = Object.values(modules) as entry[]

export function getAllAcronyms() {
  return acronyms
    .filter((item) => item.status === 'published')
    .sort((a, b) => a.term.localeCompare(b.term))
}

export function getAcronymBySlug(slug: string) {
  return getAllAcronyms().find((item) => item.slug === slug)
}