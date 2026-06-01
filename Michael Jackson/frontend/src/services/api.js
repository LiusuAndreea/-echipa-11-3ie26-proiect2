import axios from 'axios'

const strapiAPI = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
    ...(import.meta.env.VITE_STRAPI_API_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
    }),
  },
})

strapiAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Strapi API error:', error.message)
    return Promise.reject(error)
  }
)

export const albumsService = {
  getAll: () => strapiAPI.get('/api/albums?populate=*&sort=releaseDate:desc'),
  getOne: (id) => strapiAPI.get(`/api/albums/${id}?populate=*`),
}

export const eventsService = {
  getAll: () => strapiAPI.get('/api/events?populate=*&sort=date:asc'),
  getOne: (id) => strapiAPI.get(`/api/events/${id}?populate=*`),
}

export const blogService = {
  getAll: () => strapiAPI.get('/api/articles?populate=*&sort=publishedAt:desc'),
  getOne: (id) => strapiAPI.get(`/api/articles/${id}?populate=*`),
  getByCategory: (cat) =>
    strapiAPI.get(`/api/articles?filters[category][name][$eq]=${cat}&populate=*`),
}

export const contactService = {
  send: (data) => strapiAPI.post('/api/contact-messages', { data }),
}

export const aboutService = {
  get: () => strapiAPI.get('/api/about?populate=*'),
}

export default strapiAPI
