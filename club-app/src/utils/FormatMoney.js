// src/utils/formatMoney.js
export const formatMoney = (amount, currency = '₦') => {
  return `${currency}${parseFloat(amount).toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

export const formatCompactMoney = (amount, currency = '₦') => {
  if (amount >= 1000000) {
    return `${currency}${(amount / 1000000).toFixed(1)}M`
  }
  if (amount >= 1000) {
    return `${currency}${(amount / 1000).toFixed(1)}K`
  }
  return `${currency}${amount}`
}