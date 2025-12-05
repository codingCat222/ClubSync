import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UserRoutes({ children }) {
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userType = localStorage.getItem('userType')
    
    if (!token) {
      setIsAuthenticated(false)
    } else if (userType !== 'user') {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
    }
    
    setIsChecking(false)
  }, [])

  if (isChecking) {
    return <div>Loading...</div> // Add a loading state
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default UserRoutes