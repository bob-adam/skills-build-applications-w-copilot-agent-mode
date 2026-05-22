import { useEffect, useState } from 'react'
import { fetchCollection } from '../lib/api.js'

function ResourcePage({
  title,
  description,
  resource,
  emptyMessage,
  renderCard,
}) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [metaMessage, setMetaMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    const load = async () => {
      try {
        const { items: nextItems, payload } = await fetchCollection(resource)

        if (!isActive) {
          return
        }

        setItems(nextItems)
        setMetaMessage(
          Array.isArray(nextItems) && nextItems.length > 0
            ? `Loaded ${nextItems.length} record${nextItems.length === 1 ? '' : 's'}`
            : payload?.message || ''
        )
      } catch (loadError) {
        if (!isActive) {
          return
        }

        setError(loadError instanceof Error ? loadError.message : 'Unknown error')
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      isActive = false
    }
  }, [resource])

  return (
    <section className="resource-page">
      <div className="resource-header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="resource-footer">
          <span>Endpoint: /api/{resource}/</span>
          {metaMessage ? <span>{metaMessage}</span> : null}
        </div>
      </div>

      {isLoading ? <div className="resource-loading">Loading data...</div> : null}

      {!isLoading && error ? (
        <div className="resource-error">Unable to load {resource}: {error}</div>
      ) : null}

      {!isLoading && !error && items.length === 0 ? (
        <div className="resource-empty">{emptyMessage}</div>
      ) : null}

      {!isLoading && !error && items.length > 0 ? (
        <div className="resource-grid">
          {items.map((item, index) => renderCard(item, index))}
        </div>
      ) : null}
    </section>
  )
}

export default ResourcePage