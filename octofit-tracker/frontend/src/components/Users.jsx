import ResourcePage from './ResourcePage.jsx'

function Users() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/'

  return (
    <ResourcePage
      title="Users"
      description={`Profiles, contact details and team membership from the logic tier. Source: ${endpoint}`}
      resource="users"
      emptyMessage="No users were returned. Confirm the API returns an array or a paginated payload."
      renderCard={(user, index) => (
        <article className="resource-card" key={user._id || user.id || `user-${index}`}>
          <div>
            <h3>{user.username || user.name || user.email || `User ${index + 1}`}</h3>
            <p>{user.email || 'No email provided'}</p>
          </div>
          <div className="resource-meta">
            {user.team ? <span className="resource-chip">Team linked</span> : null}
            {user.profile?.age ? <span className="resource-chip">Age {user.profile.age}</span> : null}
            {user.profile?.weight ? <span className="resource-chip">{user.profile.weight} kg</span> : null}
          </div>
        </article>
      )}
    />
  )
}

export default Users