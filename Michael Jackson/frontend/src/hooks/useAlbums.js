import { useState, useEffect } from 'react'
import { albumsService } from '../services/api'
import { mockAlbums } from '../data/mockData'

export function useAlbums() {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    albumsService
      .getAll()
      .then((res) => {
        if (!cancelled) {
          const items = res.data?.data ?? []
          setAlbums(
            items.map((item) => ({
              id: item.id,
              ...item.attributes,
              coverImage:
                item.attributes?.coverImage?.data?.attributes?.url
                  ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.attributes.coverImage.data.attributes.url}`
                  : `https://picsum.photos/seed/album${item.id}/400/400`,
            }))
          )
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setAlbums(mockAlbums)
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

  return { albums, loading, error }
}
