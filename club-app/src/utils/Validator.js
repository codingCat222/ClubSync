// src/utils/validators.js
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

export const isValidPassword = (password) => {
  return password.length >= 8
}

export const validateSignup = (data) => {
  const errors = {}

  if (!data.name?.trim()) {
    errors.name = 'Name is required'
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Valid email is required'
  }

  if (!isValidPhone(data.phone)) {
    errors.phone = 'Valid phone number is required'
  }

  if (!isValidPassword(data.password)) {
    errors.password = 'Password must be at least 8 characters'
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}

export const validateClubSignup = (data) => {
  const errors = validateSignup(data)

  if (!data.clubName?.trim()) {
    errors.clubName = 'Club name is required'
  }

  if (!data.clubAddress?.trim()) {
    errors.clubAddress = 'Club address is required'
  }

  if (!data.city?.trim()) {
    errors.city = 'City is required'
  }

  if (!data.state?.trim()) {
    errors.state = 'State is required'
  }

  if (!data.clubCategory) {
    errors.clubCategory = 'Club category is required'
  }

  return errors
}