export function Hero() {
  return (
    <section className="shell hero" id="top">
      <div>
        <p className="eyebrow">A quiet corner of the internet</p>
        <h1>
          It&rsquo;s okay
          <br />
          to not be
          <br />
          <i>okay.</i>
        </h1>
        <p className="lede">
          Still Here is a gentle space for anyone feeling lonely, low or worn thin. Honest essays, small
          practices and real stories — from people who&rsquo;ve sat where you&rsquo;re sitting now.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#top-rated">
            Read the stories
          </a>
          <a className="btn btn-ghost" href="#mood">
            How are you today? &rarr;
          </a>
        </div>
      </div>
      <div className="postmark-wrap">
        <div className="postmark">
          <div className="postmark-core">
            <svg width="22" height="28" viewBox="0 0 18 24" fill="none" aria-hidden="true">
              <path d="M9 0C9 6 2 8 2 15a7 7 0 0 0 14 0C16 8 9 6 9 0Z" fill="var(--paper)" />
            </svg>
          </div>
        </div>
        <span className="postmark-caption">One breath before you read &middot; 10s</span>
      </div>
    </section>
  )
}
