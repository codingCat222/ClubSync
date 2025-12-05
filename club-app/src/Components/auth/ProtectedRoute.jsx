// src/components/auth/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token')
  const userType = localStorage.getItem('userType')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && userType !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.oneOf(['user', 'club-owner', 'admin'])
}

export default ProtectedRoute