import axios,{ AxiosRequestConfig } from 'axios';


const service = axios.create({
  baseURL:import.meta.env.VITE_API_BASEURL
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    Promise.reject(error)
  }
)
export default service