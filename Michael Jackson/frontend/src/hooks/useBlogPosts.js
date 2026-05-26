import { useState, useEffect } from 'react'
import { blogService } from '../services/api'
import { mockBlogPosts } from '../data/mockData'

export function useBlogPosts(category = null) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    const request = category
      ? blogService.getByCategory(category)
      : blogService.getAll()

    request
      .then((res) => {
        if (!cancelled) {
          const items = res.data?.data ?? []
          setPosts(
            items.map((item) => ({
              id: item.id,
              ...item.attributes,
              image:
                item.attributes?.image?.data?.attributes?.url
                  ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${item.attributes.image.data.attributes.url}`
                  : `https://picsum.photos/seed/blog${item.id}/800/500`,
            }))
          )
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) {
          const filtered = category
            ? mockBlogPosts.filter((p) => p.category === category)
            : mockBlogPosts
          setPosts(filtered)
          setError(null)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [category])

  return { posts, loading, error }
}
