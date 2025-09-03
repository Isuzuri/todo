import api from "./instance"

const authApi = {
  signIn: (data) => api.post('/user/create', data),
  login: (data) => api.post('/user/login', data),
  me: () => api.get('/user/me'),
  read: (id) => api.get(`/user/${id}`),
  edit: (id, data) => api.patch(`/user/${id}`, data),
  delete: (id) => api.delete(`/user/${id}`),
}

export default authApi