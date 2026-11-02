import {Cover} from './Cover'
import {CategoryTag} from './CategoryTag'
import type {TopRatedPost} from '@/sanity/fetch'

function readTimeLabel(minutes: number | null) {
  const m = Math.max(1, minutes ?? 1)
  return `${m} min read`
}

export function TopRated({posts}: {posts: TopRatedPost[]}) {
  const [lead, ...runners] = posts

  return (
    <section id="top-rated" className="shell sec-pad">
      <div className="rated-head">
        <div>
          <p className="eyebrow">Most loved by readers</p>
          <h2 className="h-md">Top rated stories</h2>
        </div>
      </div>

      {!lead ? (
        <p className="card-excerpt">No stories are marked as top rated yet — add some in the Studio.</p>
      ) : (
        <div className="rated-grid">
          <article className="lead-card">
            <Cover category={lead.category} seedKey={lead._id} size="wide" />
            <div className="card-meta-row">
              <CategoryTag category={lead.category} />
              <span className="card-meta-sep">&middot;</span>
              <span className="card-meta">{readTimeLabel(lead.readTime)}</span>
              <span className="card-meta-sep">&middot;</span>
              <span className="card-meta">No. 01</span>
            </div>
            <h3 className="card-title lead-title">{lead.title}</h3>
            <p className="card-excerpt lead-excerpt">{lead.excerpt}</p>
          </article>
          <div>
            {runners.map((post, i) => (
              <article key={post._id} className="runner">
                <span className="rank">{String(i + 2).padStart(2, '0')}</span>
                <span>
                  <div className="card-meta-row">
                    <CategoryTag category={post.category} />
                    <span className="card-meta-sep">&middot;</span>
                    <span className="card-meta">{readTimeLabel(post.readTime)}</span>
                  </div>
                  <h3 className="card-title clamp2">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                </span>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
