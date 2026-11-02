export type CategoryMeta = {code: string; var: string}

export const CATEGORY_META: Record<string, CategoryMeta> = {
  Loneliness: {code: 'LNLY', var: '--cat-loneliness'},
  Depression: {code: 'DPRN', var: '--cat-depression'},
  Anxiety: {code: 'ANX', var: '--cat-anxiety'},
  'Self-care': {code: 'SLF', var: '--cat-selfcare'},
  Stories: {code: 'STRY', var: '--cat-stories'},
}

const FALLBACK_META: CategoryMeta = {code: 'JRNL', var: '--ember'}

export function categoryMeta(category: string | null | undefined): CategoryMeta {
  if (!category) return FALLBACK_META
  return CATEGORY_META[category] ?? FALLBACK_META
}
