// src/services/api/payment.api.js
import axiosClient from './axiosClient'

const paymentApi = {
  initiatePayment: (data) => axiosClient.post('/payments/initiate', data),
  verifyPayment: (reference) => axiosClient.get(`/payments/verify/${reference}`),
  getPaymentHistory: () => axiosClient.get('/payments/history'),
  getPayouts: () => axiosClient.get('/payments/payouts'),
  requestPayout: (data) => axiosClient.post('/payments/payouts/request', data),
  getPaymentMethods: () => axiosClient.get('/payments/methods'),
  addPaymentMethod: (data) => axiosClient.post('/payments/methods', data),
  removePaymentMethod: (methodId) => axiosClient.delete(`/payments/methods/${methodId}`)
}

export default paymentApi