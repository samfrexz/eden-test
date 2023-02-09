import axios, { type AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: 'https://dog.ceo/api/',
  
})

export default http;