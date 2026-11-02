'use client'

import {useState} from 'react'
import {Cover} from './Cover'
import {CategoryTag} from './CategoryTag'
import type {Mood} from '@/sanity/fetch'

export function MoodSection({moods}: {moods: Mood[]}) {
  const [activeId, setActiveId] = useState(moods[0]?._id)
  const active = moods.find((m) => m._id === activeId) ?? moods[0]

  if (!active) {
    return (
      <section id="mood" className="mood-section sec-pad">
        <div className="shell">
          <p className="eyebrow">A small check-in</p>
          <h2 className="h-md">How are you feeling today?</h2>
          <p className="mood-note">
            Mood check-ins will show up here as soon as they&rsquo;re added in the Studio.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="mood" className="mood-section sec-pad">
      <div className="shell mood-grid">
        <div>
          <p className="eyebrow">A small check-in</p>
          <h2 className="h-md">How are you feeling today?</h2>
          <div className="chip-row">
            {moods.map((m) => (
              <button
                key={m._id}
                type="button"
                className="chip"
                data-active={m._id === active._id}
                onClick={() => setActiveId(m._id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <p className="mood-note">{active.note}</p>
        </div>
        <div className="next-list">
          <span className="next-head">Read this next</span>
          {active.posts.length === 0 && (
            <p className="card-excerpt" style={{paddingTop: 16}}>
              No stories linked to this mood yet.
            </p>
          )}
          {active.posts.map((post) => (
            <div key={post._id} className="next-row">
              <Cover category={post.category} seedKey={post._id} size="square" />
              <span>
                <CategoryTag category={post.category} />
                <h3 className="next-title clamp2">{post.title}</h3>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
