import ResourcePage from './ResourcePage.jsx'

function Workouts() {
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/'

  return (
    <ResourcePage
      title="Workouts"
      description={`Suggested sessions with difficulty and training goals for each user segment. Source: ${endpoint}`}
      resource="workouts"
      emptyMessage="No workouts were returned from the API."
      renderCard={(workout, index) => {
        const suggestedFor = Array.isArray(workout.suggestedFor)
          ? workout.suggestedFor
          : []

        return (
          <article className="resource-card" key={workout._id || workout.id || `workout-${index}`}>
            <div>
              <h3>{workout.name || `Workout ${index + 1}`}</h3>
              <p>{workout.description || 'No description available'}</p>
            </div>
            <div className="resource-meta">
              {workout.difficulty ? <span className="resource-chip">{workout.difficulty}</span> : null}
              {workout.duration ? <span className="resource-chip">{workout.duration} min</span> : null}
            </div>
            {suggestedFor.length > 0 ? (
              <ol className="resource-list">
                {suggestedFor.map((goal, goalIndex) => (
                  <li key={`${goal}-${goalIndex}`}>{goal}</li>
                ))}
              </ol>
            ) : null}
          </article>
        )
      }}
    />
  )
}

export default Workouts