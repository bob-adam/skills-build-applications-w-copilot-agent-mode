import ResourcePage from './ResourcePage.jsx'

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent exercise sessions with duration, calories and workout type."
      resource="activities"
      emptyMessage="No activity records were returned from the API."
      renderCard={(activity, index) => (
        <article className="resource-card" key={activity._id || activity.id || `activity-${index}`}>
          <div>
            <h3>{activity.type || activity.name || `Activity ${index + 1}`}</h3>
            <p>
              {activity.date
                ? new Date(activity.date).toLocaleString()
                : 'Date unavailable'}
            </p>
          </div>
          <div className="resource-meta">
            {activity.duration ? <span className="resource-chip">{activity.duration} min</span> : null}
            {activity.calories ? <span className="resource-chip">{activity.calories} kcal</span> : null}
          </div>
        </article>
      )}
    />
  )
}

export default Activities