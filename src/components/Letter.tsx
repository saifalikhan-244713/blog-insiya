export function Letter() {
  return (
    <section className="letter-wrap sec-pad">
      <div className="shell letter-grid">
        <div className="envelope">
          <div className="envelope-body" />
          <div className="envelope-flap" />
          <div className="envelope-seal">
            <div className="seal">
              <svg width="14" height="18" viewBox="0 0 18 24" fill="none" aria-hidden="true">
                <path d="M9 0C9 6 2 8 2 15a7 7 0 0 0 14 0C16 8 9 6 9 0Z" fill="var(--paper)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="letter-copy">
          <p className="eyebrow">A note, if you&rsquo;re reading this at 3am</p>
          <p className="letter-quote">
            You don&rsquo;t have to have it figured out. You don&rsquo;t have to be productive, or cheerful,
            or fine. You only have to stay — and let tomorrow be a little different.
          </p>
          <p className="letter-body">
            Everything here was written slowly, by people who know what heavy days feel like. Take what
            helps. Leave the rest.
          </p>
          <strong className="sig">&mdash; Maya, Daniel &amp; Priya, Still Here</strong>
        </div>
      </div>
    </section>
  )
}
