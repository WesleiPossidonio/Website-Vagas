import axios, { InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api-realize.vercel.app/',
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userData = localStorage.getItem('Monetize:companiesData1.0')
  const token = userData && JSON.parse(userData).token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
