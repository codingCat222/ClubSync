// src/pages/public/Clubs/Clubs.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import ClubGrid from '../../../Components/club/ClubGrid/ClubGrid'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import './Club.css'

function Clubs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

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
      deliveryTime: 15
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
      deliveryTime: 20
    },
    {
      id: 3,
      name: "Sky High Club",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Nightclub",
      rating: 4.3,
      reviewCount: 312,
      address: "789 Sky Tower, Business District",
      isOpen: false,
      deliveryTime: 25
    },
    {
      id: 4,
      name: "The Jazz Cellar",
      image: "https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Jazz Bar",
      rating: 4.8,
      reviewCount: 189,
      address: "321 Music Lane, Arts District",
      isOpen: true,
      deliveryTime: 10
    },
    {
      id: 5,
      name: "Rooftop Paradise",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Rooftop",
      rating: 4.6,
      reviewCount: 217,
      address: "555 High Street, Sky District",
      isOpen: true,
      deliveryTime: 30
    },
    {
      id: 6,
      name: "Whiskey & Co.",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Whiskey Bar",
      rating: 4.4,
      reviewCount: 143,
      address: "777 Bourbon Road, Old Town",
      isOpen: true,
      deliveryTime: 18
    }
  ]

  return (
    <div className="clubs-page">
      <div className="clubs-header">
        <div className="container">
          <h1 className="page-title">Discover Clubs</h1>
          <p className="page-subtitle">Find your favorite spots and order drinks instantly</p>
          
          <div className="search-section">
            <div className="search-container">
              <Input
                type="text"
                placeholder="Search clubs by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={faSearch}
                className="search-input"
              />
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="filter-button"
              >
                <FontAwesomeIcon icon={faFilter} />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="filters-panel slide-up">
                <div className="filter-group">
                  <label>Category</label>
                  <div className="filter-options">
                    <button className="filter-option active">All</button>
                    <button className="filter-option">Lounge</button>
                    <button className="filter-option">Bar</button>
                    <button className="filter-option">Nightclub</button>
                    <button className="filter-option">Rooftop</button>
                  </div>
                </div>
                <div className="filter-group">
                  <label>Sort By</label>
                  <div className="filter-options">
                    <button className="filter-option active">Rating</button>
                    <button className="filter-option">Delivery Time</button>
                    <button className="filter-option">Name</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="clubs-content">
        <div className="container">
          <ClubGrid clubs={mockClubs} />
        </div>
      </div>
    </div>
  )
}

export default Clubs