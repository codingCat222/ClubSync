import './Card.css'

function Card({ children, className = '', hoverable = false, padding = 'medium', onClick }) {
  const cardClasses = `card card-${padding} ${hoverable ? 'card-hoverable' : ''} ${className}`

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card