import {categoryMeta} from '@/lib/category-meta'

type CoverProps = {
  category: string | null
  seedKey: string
  size?: 'default' | 'square' | 'wide'
}

/**
 * Stands in for a cover photo until real images are added. The gradient
 * angle is derived from the post's own id/slug, so each card still looks
 * distinct instead of every card in a category sharing one flat tile.
 */
export function Cover({category, seedKey, size = 'default'}: CoverProps) {
  const meta = categoryMeta(category)
  let seed = 0
  for (let i = 0; i < seedKey.length; i++) seed = (seed * 31 + seedKey.charCodeAt(i)) % 360
  const angle = 120 + (seed % 40)

  return (
    <div
      className={`cover${size === 'square' ? ' cover-square' : size === 'wide' ? ' cover-wide' : ''}`}
      style={{
        background: `linear-gradient(${angle}deg, color-mix(in oklab, var(${meta.var}) 70%, var(--paper-raised)), var(--paper-sunken) 85%)`,
      }}
    >
      <div className="cover-stamp">{meta.code}</div>
    </div>
  )
}
