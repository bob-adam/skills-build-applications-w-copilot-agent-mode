import ResourcePage from './ResourcePage.jsx'

function Leaderboard() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/'

  return (
    <ResourcePage
      title="Leaderboard"
      description={`Competitive ranking snapshots fed by the backend leaderboard endpoint. Source: ${endpoint}`}
      resource="leaderboard"
      emptyMessage="No leaderboard entries were returned from the API."
      renderCard={(entry, index) => (
        <article className="resource-card" key={entry._id || entry.id || `rank-${index}`}>
          <div>
            <h3>{entry.user?.username || entry.user?.name || `Athlete ${index + 1}`}</h3>
            <p>{entry.week || 'Current cycle'}</p>
          </div>
          <div className="resource-meta">
            {entry.rank ? <span className="resource-chip">Rank #{entry.rank}</span> : null}
            {entry.score ? <span className="resource-chip">Score {entry.score}</span> : null}
          </div>
        </article>
      )}
    />
  )
}

export default Leaderboard