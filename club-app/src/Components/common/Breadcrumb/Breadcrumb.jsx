// src/components/common/Breadcrumb/Breadcrumb.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Breadcrumb.css'

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-separator" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb