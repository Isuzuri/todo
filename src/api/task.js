import api from "./instance"

const taskApi = {
  create: (data) => api.post('/task/create', data),
  read: (id) => api.get(`/task/${id}`),
  edit: (id, data) => api.patch(`/task/${id}`, data),
  delete: (id) => api.delete(`/task/${id}`),
}

export default taskApi