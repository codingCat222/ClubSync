// src/components/club/ClubCard/ClubCard.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import Card from '../../common/Card/Card'
import Button from '../../common/Button/Button'
import './ClubCard.css'

function ClubCard({ club }) {
  const {
    id,
    name,
    image,
    category,
    rating,
    reviewCount,
    address,
    isOpen,
    deliveryTime
  } = club

  return (
    <Card hoverable className="club-card zoom-in">
      <Link to={`/clubs/${id}`} className="club-card-link">
        <div className="club-card-image">
          <img 
            src={image || `https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
            alt={name}
          />
          <div className="club-status">
            <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
              {isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
          <div className="club-category">
            <span>{category}</span>
          </div>
        </div>

        <div className="club-card-content">
          <div className="club-header">
            <h3 className="club-name">{name}</h3>
            <div className="club-rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <span>{rating.toFixed(1)}</span>
              <span className="review-count">({reviewCount})</span>
            </div>
          </div>

          <div className="club-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="truncate">{address}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faClock} />
              <span>{deliveryTime} min</span>
            </div>
          </div>

          <div className="club-actions">
            <Button variant="primary" size="small" fullWidth>
              View Menu
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default ClubCard