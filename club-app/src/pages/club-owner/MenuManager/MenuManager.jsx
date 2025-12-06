// src/pages/club-owner/MenuManager/MenuManager.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faSearch, 
  faFilter,
  faGlassMartiniAlt,
  faBeer,
  faWineGlassAlt,
  faCocktail
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import Modal from '../../../Components/common/Modal/Modal'
import './MenuManager.css'

function MenuManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All', icon: faGlassMartiniAlt, count: 24 },
    { id: 'cocktails', name: 'Cocktails', icon: faCocktail, count: 12 },
    { id: 'beer', name: 'Beer', icon: faBeer, count: 6 },
    { id: 'wine', name: 'Wine', icon: faWineGlassAlt, count: 4 },
    { id: 'spirits', name: 'Spirits', icon: faGlassMartiniAlt, count: 8 }
  ]

  const menuItems = [
    { 
      id: 1, 
      name: 'Blue Lagoon', 
      category: 'cocktails', 
      price: '₦4,000', 
      description: 'Vodka, blue curaçao, lemon juice', 
      available: true,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 2, 
      name: 'Mojito', 
      category: 'cocktails', 
      price: '₦3,500', 
      description: 'White rum, mint, lime, soda', 
      available: true,
      image: 'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 3, 
      name: 'Heineken', 
      category: 'beer', 
      price: '₦1,200', 
      description: 'Premium lager beer', 
      available: true,
      image: 'https://images.unsplash.com/photo-1586993453037-5c7a5f2c4e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 4, 
      name: 'Merlot', 
      category: 'wine', 
      price: '₦8,500', 
      description: 'Red wine glass', 
      available: false,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 5, 
      name: 'Old Fashioned', 
      category: 'cocktails', 
      price: '₦4,500', 
      description: 'Whiskey, bitters, sugar', 
      available: true,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132a7ef242?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 6, 
      name: 'Tequila Shot', 
      category: 'spirits', 
      price: '₦2,500', 
      description: 'Premium tequila', 
      available: true,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const handleAddItem = () => {
    setShowAddModal(true)
  }

  const handleEditItem = (item) => {
    setSelectedItem(item)
    setShowAddModal(true)
  }

  const handleDeleteItem = (item) => {
    setSelectedItem(item)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    console.log('Deleting item:', selectedItem)
    setShowDeleteModal(false)
    setSelectedItem(null)
  }

  const filteredItems = menuItems.filter(item => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  return (
    <div className="menu-manager-page">
      <div className="menu-manager-header">
        <div className="header-content">
          <h1 className="page-title">Menu Management</h1>
          <p className="page-subtitle">Manage your drink menu and pricing</p>
        </div>
        <div className="header-actions">
          <Button variant="primary" onClick={handleAddItem}>
            <FontAwesomeIcon icon={faPlus} />
            Add New Item
          </Button>
        </div>
      </div>

      <div className="menu-manager-content">
        <div className="content-sidebar">
          <Card className="categories-card">
            <div className="categories-header">
              <h3>Categories</h3>
            </div>
            <div className="categories-list">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="category-icon">
                    <FontAwesomeIcon icon={category.icon} />
                  </div>
                  <div className="category-info">
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count} items</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="stats-card">
            <h3>Menu Statistics</h3>
            <div className="stats-list">
              <div className="stat-item">
                <span>Total Items</span>
                <strong>24</strong>
              </div>
              <div className="stat-item">
                <span>Available</span>
                <strong>20</strong>
              </div>
              <div className="stat-item">
                <span>Out of Stock</span>
                <strong>4</strong>
              </div>
              <div className="stat-item">
                <span>Best Seller</span>
                <strong>Blue Lagoon</strong>
              </div>
            </div>
          </Card>
        </div>

        <div className="content-main">
          <Card className="search-filter-card">
            <div className="search-section">
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={faSearch}
                className="search-input"
              />
              <Button variant="outline">
                <FontAwesomeIcon icon={faFilter} />
                Filter
              </Button>
            </div>
          </Card>

          <div className="menu-items-grid">
            {filteredItems.map(item => (
              <Card key={item.id} className="menu-item-card hover-lift">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="item-status">
                    <span className={`status-badge ${item.available ? 'available' : 'unavailable'}`}>
                      {item.available ? 'Available' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                <div className="menu-item-content">
                  <div className="item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="item-category">
                    <span>{item.category}</span>
                  </div>
                  <div className="item-actions">
                    <Button 
                      variant="outline" 
                      size="small"
                      onClick={() => handleEditItem(item)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                      Edit
                    </Button>
                    <Button 
                      variant="danger" 
                      size="small"
                      onClick={() => handleDeleteItem(item)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false)
          setSelectedItem(null)
        }}
        title={selectedItem ? 'Edit Menu Item' : 'Add New Menu Item'}
        size="large"
      >
        <div className="add-item-form">
          <div className="form-row">
            <Input
              label="Item Name"
              type="text"
              placeholder="Enter item name"
              defaultValue={selectedItem?.name}
            />
            <Input
              label="Price"
              type="text"
              placeholder="₦0.00"
              defaultValue={selectedItem?.price}
            />
          </div>
          <Input
            label="Description"
            type="text"
            placeholder="Enter item description"
            defaultValue={selectedItem?.description}
          />
          <div className="form-row">
            <div className="form-group">
              <label className="input-label">Category</label>
              <select className="category-select" defaultValue={selectedItem?.category}>
                <option value="">Select category</option>
                <option value="cocktails">Cocktails</option>
                <option value="beer">Beer</option>
                <option value="wine">Wine</option>
                <option value="spirits">Spirits</option>
                <option value="non-alcoholic">Non-Alcoholic</option>
              </select>
            </div>
            <div className="form-group">
              <label className="input-label">Availability</label>
              <select className="category-select" defaultValue={selectedItem?.available ? 'true' : 'false'}>
                <option value="true">Available</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="input-label">Item Image</label>
            <div className="image-upload">
              <div className="upload-preview">
                {selectedItem?.image ? (
                  <img src={selectedItem.image} alt="Preview" />
                ) : (
                  <div className="upload-placeholder">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Upload Image</span>
                  </div>
                )}
              </div>
              <input type="file" className="file-input" accept="image/*" />
            </div>
          </div>
          <div className="modal-actions">
            <Button variant="outline" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              {selectedItem ? 'Update Item' : 'Add Item'}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Menu Item"
        size="small"
      >
        <div className="delete-confirmation">
          <p>Are you sure you want to delete <strong>{selectedItem?.name}</strong>?</p>
          <p className="warning-text">This action cannot be undone.</p>
          <div className="modal-actions">
            <Button variant="outline" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MenuManager