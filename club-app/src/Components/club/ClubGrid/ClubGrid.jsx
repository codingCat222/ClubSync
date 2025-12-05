// src/components/club/ClubGrid/ClubGrid.jsx
import ClubCard from '../ClubCard/ClubCard'
import './ClubGrid.css'

function ClubGrid({ clubs }) {
  if (!clubs || clubs.length === 0) {
    return (
      <div className="empty-grid">
        <p>No clubs found</p>
      </div>
    )
  }

  return (
    <div className="club-grid">
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  )
}

export default ClubGrid