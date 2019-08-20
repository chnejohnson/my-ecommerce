import axios from 'axios'

const userRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${process.env.taskManager}/users`
      : 'https://localhost:4000/users'
})

// auth
export const apiSignup = (data) => userRequest.post('/', data)
export const apiLogin = (data) => userRequest.post('/login', data)
export const apiLogout = () =>
  userRequest.post(
    '/logout',
    {},
    { headers: { Authorization: `Bearer ${localStorage.token}` } }
  )

// user
export const apiProfile = () =>
  userRequest.get('/me', {
    headers: { Authorization: `Bearer ${localStorage.token}` }
  })
export const apiUploadAvatar = (file) =>
  userRequest.post('/me/avatar', file, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
  })
export const apiGetAvatar = (userId) => userRequest.get(`/${userId}/avatar`)
