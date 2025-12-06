// src/pages/user/Home/Home.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faStar, faClock, faTags } from '@fortawesome/free-solid-svg-icons'
import ClubGrid from '../../../Components/club/ClubGrid/ClubGrid'
import Card from '../../../Components/common/Card/Card'
import './Home.css'

function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const mockClubs = [
    {
      id: 1,
      name: "Midnight Lounge",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Lounge",
      rating: 4.5,
      reviewCount: 128,
      address: "123 Night Street, City Center",
      isOpen: true,
      deliveryTime: 15,
      isTrending: true
    },
    {
      id: 2,
      name: "Blue Velvet Bar",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Bar",
      rating: 4.7,
      reviewCount: 256,
      address: "456 Velvet Avenue, Downtown",
      isOpen: true,
      deliveryTime: 20,
      isTrending: true
    },
    {
      id: 3,
      name: "The Jazz Cellar",
      image: "https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Jazz Bar",
      rating: 4.8,
      reviewCount: 189,
      address: "321 Music Lane, Arts District",
      isOpen: true,
      deliveryTime: 10,
      hasOffer: true
    },
    {
      id: 4,
      name: "Rooftop Paradise",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Rooftop",
      rating: 4.6,
      reviewCount: 217,
      address: "555 High Street, Sky District",
      isOpen: true,
      deliveryTime: 30
    }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: faFire },
    { id: 'trending', name: 'Trending', icon: faFire },
    { id: 'top-rated', name: 'Top Rated', icon: faStar },
    { id: 'fast', name: 'Fast Delivery', icon: faClock },
    { id: 'offers', name: 'Offers', icon: faTags }
  ]

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">What's your vibe tonight?</h1>
            <p className="hero-subtitle">
              Discover amazing clubs and order drinks with zero wait time
            </p>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Near You</h2>
            <p className="section-subtitle">Most popular clubs in your area</p>
          </div>
          <ClubGrid clubs={mockClubs.filter(club => club.isTrending)} />
        </div>
      </div>

      <div className="quick-actions">
        <div className="container">
          <div className="actions-grid">
            <Card hoverable className="action-card">
              <div className="action-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your drinks in minutes</p>
            </Card>
            <Card hoverable className="action-card">
              <div className="action-icon">🎁</div>
              <h3>Exclusive Deals</h3>
              <p>Special offers for members</p>
            </Card>
            <Card hoverable className="action-card">
              <div className="action-icon">⭐</div>
              <h3>Top Rated</h3>
              <p>Best clubs by user reviews</p>
            </Card>
            <Card hoverable className="action-card">
              <div className="action-icon">🆕</div>
              <h3>New Arrivals</h3>
              <p>Recently added clubs</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="all-clubs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Clubs</h2>
            <p className="section-subtitle">Browse all available clubs</p>
          </div>
          <ClubGrid clubs={mockClubs} />
        </div>
      </div>
    </div>
  )
}

export default Home