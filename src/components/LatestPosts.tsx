import {CategoryTag} from './CategoryTag'
import type {LatestPost} from '@/sanity/fetch'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function LatestPosts({posts}: {posts: LatestPost[]}) {
  return (
    <section id="latest" className="shell sec-pad">
      <div className="rated-head">
        <div>
          <p className="eyebrow">Fresh from the journal</p>
          <h2 className="h-md">Latest stories</h2>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="card-excerpt">No stories yet — add some in the Studio.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <article key={post._id} className="latest-item">
              <span>
                <div className="card-meta-row">
                  <CategoryTag category={post.category} />
                  <span className="card-meta-sep">&middot;</span>
                  <span className="card-meta">{formatDate(post.publishedAt)}</span>
                  {post.author && (
                    <>
                      <span className="card-meta-sep">&middot;</span>
                      <span className="card-meta">By {post.author}</span>
                    </>
                  )}
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
