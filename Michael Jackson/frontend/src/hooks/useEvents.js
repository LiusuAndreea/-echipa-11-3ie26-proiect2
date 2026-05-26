import { useState, useEffect } from 'react'
import { eventsService } from '../services/api'
import { mockEvents } from '../data/mockData'

export function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    eventsService
      .getAll()
      .then((res) => {
        if (!cancelled) {
          const items = res.data?.data ?? []
          setEvents(
            items.map((item) => ({
              id: item.id,
              ...item.attributes,
              image:
                item.attributes?.image?.data?.attributes?.url
                  ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.attributes.image.data.attributes.url}`
                  : `https://picsum.photos/seed/event${item.id}/800/500`,
            }))
          )
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setEvents(mockEvents)
          setError(null)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { events, loading, error }
}
