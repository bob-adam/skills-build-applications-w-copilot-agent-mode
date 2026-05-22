const getTrimmedEnvValue = (value) => {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim()
}

export const getCodespaceName = () =>
  getTrimmedEnvValue(import.meta.env.VITE_CODESPACE_NAME)

export const getApiBaseUrl = () => {
  const codespaceName = getCodespaceName()

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`
  }

  return 'http://localhost:8000/api'
}

export const getApiUrl = (resource) => `${getApiBaseUrl()}/${resource}/`

export const normalizeCollectionResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const candidates = ['results', 'data', 'items', 'docs']

  for (const key of candidates) {
    if (Array.isArray(payload[key])) {
      return payload[key]
    }
  }

  return []
}

export const fetchCollection = async (resource) => {
  const response = await fetch(getApiUrl(resource))

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()

  return {
    items: normalizeCollectionResponse(payload),
    payload,
  }
}