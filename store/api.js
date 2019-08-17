import axios from 'axios'

const authHeader = { Authorization: `Bearer ${localStorage.token}` }

const userRequest = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/users'
})

// auth
export const apiSignup = (data) => userRequest.post('/', data)
export const apiLogin = (data) => userRequest.post('/login', data)
export const apiLogout = () =>
  userRequest.post('/logout', {}, { headers: authHeader })

// user
export const apiProfile = () => userRequest.get('/me', { headers: authHeader })
export const apiUploadAvatar = (file) =>
  userRequest.post('/me/avatar', file, { headers: authHeader })
