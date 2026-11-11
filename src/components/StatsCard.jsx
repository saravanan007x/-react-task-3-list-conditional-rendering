function StatsCard({ icon, label, value, variant }) {
  return (
    <article className="stats-card">
      <div className={`stats-icon stats-icon-${variant}`}>
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="stats-info">
        <span className="stats-value">{value}</span>
        <span className="stats-label">{label}</span>
      </div>
    </article>
  )
}

export default StatsCard
