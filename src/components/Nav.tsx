export function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Still Here, back to top">
        <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
          <circle cx="13" cy="13" r="12" fill="none" stroke="var(--line)" />
          <circle cx="13" cy="13" r="5" fill="var(--ember-deep)" />
        </svg>
        <span className="brand-word">Still Here</span>
      </a>
      <a className="btn btn-primary" href="#top-rated">
        Read the stories
      </a>
    </nav>
  )
}
