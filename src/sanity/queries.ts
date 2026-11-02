import {defineQuery} from 'next-sanity'

/**
 * Minutes to read, estimated from the story body: ~5 characters per word,
 * ~200 words per minute. Rounded in GROQ so the client never sees raw body
 * content it doesn't need.
 */
const readTimeFragment = `"readTime": round(length(pt::text(body)) / 5 / 200)`

/**
 * Powers the home page mood check-in ("How are you feeling today?").
 * Source: https://mjdfwsrb.api.sanity.io/v2025-01-01/data/query/production?query=*[_type==%22mood%22]|order(order%20asc){label,note,order,%22posts%22:posts[]-%3E{title,%22slug%22:slug.current,excerpt,%22category%22:category-%3Etitle}}
 */
export const MOODS_QUERY = defineQuery(`
  *[_type == "mood"] | order(order asc) {
    _id,
    label,
    note,
    "posts": posts[]-> {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "category": category->title,
      ${readTimeFragment}
    }
  }
`)

/**
 * Powers the home page "Top rated stories" section.
 * Source: https://mjdfwsrb.api.sanity.io/v2025-01-01/data/query/production?query=*[_type==%22post%22][topRated==true]|order(publishedAt%20desc)[0...3]{title,%22slug%22:slug.current,excerpt,%22category%22:category-%3Etitle}
 */
export const TOP_RATED_POSTS_QUERY = defineQuery(`
  *[_type == "post" && topRated == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": category->title,
    publishedAt,
    ${readTimeFragment}
  }
`)

/**
 * Not rendered on the home page yet (there's no categories UI there) — kept
 * here, queried from the same dataset, ready for the journal/category page.
 * Source: https://mjdfwsrb.api.sanity.io/v2025-01-01/data/query/production?query=*[_type==%22category%22]|order(order%20asc){title,%22slug%22:slug.current}
 */
export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    tagline
  }
`)

/**
 * Powers the home page "Latest stories" section: every story, newest first,
 * with the writer's name and publish date. Stories dated before 25 Oct 2026 are left out.
 */
const LATEST_POSTS_FROM = "2026-10-25T00:00:00.000Z"

export const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "post" && publishedAt >= "${LATEST_POSTS_FROM}"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": category->title,
    "author": author->name,
    publishedAt,
    ${readTimeFragment}
  }
`)
