// src/services/api/auth.api.js
import axiosClient from './axiosClient'

const authApi = {
  login: (data) => axiosClient.post('/auth/login', data),
  registerUser: (data) => axiosClient.post('/auth/register/user', data),
  registerClubOwner: (data) => axiosClient.post('/auth/register/club-owner', data),
  logout: () => axiosClient.post('/auth/logout'),
  forgotPassword: (email) => axiosClient.post('/auth/forgot-password', { email }),
  resetPassword: (data) => axiosClient.post('/auth/reset-password', data),
  verifyEmail: (token) => axiosClient.post('/auth/verify-email', { token }),
  refreshToken: () => axiosClient.post('/auth/refresh-token'),
  getProfile: () => axiosClient.get('/auth/profile'),
  updateProfile: (data) => axiosClient.put('/auth/profile', data)
}

export default authApi