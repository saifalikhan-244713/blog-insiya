export function Rail() {
  return (
    <div className="rail" aria-hidden="true">
      <svg className="rail-flame flame" width="18" height="24" viewBox="0 0 18 24" fill="none">
        <path className="f" d="M9 0C9 6 2 8 2 15a7 7 0 0 0 14 0C16 8 9 6 9 0Z" fill="var(--ember)" />
      </svg>
      <span className="rail-label">Still here</span>
    </div>
  )
}
