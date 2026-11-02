import {cacheLife, cacheTag} from 'next/cache'
import {client} from './client'
import {CATEGORIES_QUERY, LATEST_POSTS_QUERY, MOODS_QUERY, TOP_RATED_POSTS_QUERY} from './queries'

export type MoodPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string | null
  readTime: number | null
}

export type Mood = {
  _id: string
  label: string
  note: string
  posts: MoodPost[]
}

export type TopRatedPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string | null
  publishedAt: string
  readTime: number | null
}

export type LatestPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string | null
  author: string | null
  publishedAt: string
  readTime: number | null
}

export type Category = {
  _id: string
  title: string
  slug: string
  tagline: string | null
}

export async function getMoods(): Promise<Mood[]> {
  'use cache'
  cacheTag('mood', 'post')
  cacheLife('hours')
  return client.fetch(MOODS_QUERY)
}

export async function getTopRatedPosts(): Promise<TopRatedPost[]> {
  'use cache'
  cacheTag('post')
  cacheLife('hours')
  return client.fetch(TOP_RATED_POSTS_QUERY)
}

export async function getCategories(): Promise<Category[]> {
  'use cache'
  cacheTag('category')
  cacheLife('hours')
  return client.fetch(CATEGORIES_QUERY)
}

export async function getLatestPosts(): Promise<LatestPost[]> {
  'use cache'
  cacheTag('post')
  cacheLife('hours')
  return client.fetch(LATEST_POSTS_QUERY)
}
