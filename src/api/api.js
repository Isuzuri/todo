import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const authApi = {
  signIn: (data) => api.post('/user/create', data),
  login: (data) => api.post('/user/login', data),
  me: () => api.get('/user/me'),
  read: (id) => api.get(`/user/${id}`),
  edit: (id, data) => api.patch(`/user/${id}`, data),
  delete: (id) => api.delete(`/user/${id}`),
}

export const taskApi = {
  create: (data) => api.post('/task/create', data),
  read: (id) => api.get(`/task/${id}`),
  edit: (id, data) => api.patch(`/task/${id}`, data),
  delete: (id) => api.delete(`/task/${id}`),
}