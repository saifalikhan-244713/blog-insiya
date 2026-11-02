import {categoryMeta} from '@/lib/category-meta'

export function CategoryTag({category}: {category: string | null}) {
  const meta = categoryMeta(category)
  return (
    <span className="category-tag" style={{color: `var(${meta.var})`}}>
      {category ?? 'Journal'}
    </span>
  )
}
