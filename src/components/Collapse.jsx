import { useState } from 'react'
import CurrentLocation from './CurrentLocation'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  function Toggle() {
    setIsOpen(!isOpen)
  }

  const collapseClass = CurrentLocation(
    '/about',
    'collapse-content about_collapse',
    'collapse-content'
  )

  return (
    <div className="collapse-space">
      <div className="collapse" onClick={Toggle}>
        <h2>{title}</h2>
        <div className="chevrons">
          <i
            className={`${
              !isOpen ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'
            }`}
          ></i>
        </div>
      </div>
      {isOpen && <p className={collapseClass}>{text}</p>}
    </div>
  )
}

export default Collapse
