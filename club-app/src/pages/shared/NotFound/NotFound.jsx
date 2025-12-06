// src/pages/shared/NotFound/NotFound.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../Components/common/Button/Button'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-message">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="error-actions">
            <Button variant="primary" as={Link} to="/">
              <FontAwesomeIcon icon={faHome} />
              Go Home
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <FontAwesomeIcon icon={faArrowLeft} />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound