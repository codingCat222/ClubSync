// src/components/common/Loader/Loader.jsx
import './Loader.css'

function Loader({ size = 'medium', color = 'primary' }) {
  return (
    <div className={`loader loader-${size} loader-${color}`}>
      <div className="loader-spinner"></div>
    </div>
  )
}

export default Loader