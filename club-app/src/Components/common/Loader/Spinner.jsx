// src/components/common/Loader/Spinner.jsx
import './Loader.css'

function Spinner({ size = 'medium', color = 'primary' }) {
  return (
    <div className={`spinner spinner-${size} spinner-${color}`}>
      <div className="spinner-circle"></div>
    </div>
  )
}

export default Spinner