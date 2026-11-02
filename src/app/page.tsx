import {Rail} from '@/components/Rail'
import {Nav} from '@/components/Nav'
import {Hero} from '@/components/Hero'
import {MoodSection} from '@/components/MoodSection'
import {TopRated} from '@/components/TopRated'
import {LatestPosts} from '@/components/LatestPosts'
import {Letter} from '@/components/Letter'
import {Footer} from '@/components/Footer'
import {getLatestPosts, getMoods, getTopRatedPosts} from '@/sanity/fetch'

export default async function HomePage() {
  const [moods, topRatedPosts, latestPosts] = await Promise.all([
    getMoods(),
    getTopRatedPosts(),
    getLatestPosts(),
  ])

  return (
    <>
      <Rail />
      <Nav />
      <main>
        <Hero />
        <MoodSection moods={moods} />
        <TopRated posts={topRatedPosts} />
        <LatestPosts posts={latestPosts} />
        <Letter />
      </main>
      <Footer />
    </>
  )
}
