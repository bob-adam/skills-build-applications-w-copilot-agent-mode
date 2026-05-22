import ResourcePage from './ResourcePage.jsx'

function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Track squad structure, membership and collaboration across the app."
      resource="teams"
      emptyMessage="No teams were returned from the API."
      renderCard={(team, index) => {
        const members = Array.isArray(team.members) ? team.members : []

        return (
          <article className="resource-card" key={team._id || team.id || `team-${index}`}>
            <div>
              <h3>{team.name || `Team ${index + 1}`}</h3>
              <p>{team.description || 'Team roster and ownership details'}</p>
            </div>
            <div className="resource-meta">
              <span className="resource-chip">{members.length} member{members.length === 1 ? '' : 's'}</span>
            </div>
            {members.length > 0 ? (
              <ol className="resource-list">
                {members.map((member, memberIndex) => (
                  <li key={member._id || member.id || `member-${memberIndex}`}>
                    {member.username || member.name || member.email || String(member)}
                  </li>
                ))}
              </ol>
            ) : null}
          </article>
        )
      }}
    />
  )
}

export default Teams