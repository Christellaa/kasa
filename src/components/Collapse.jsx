import { useState } from 'react'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  function Toggle() {
    setIsOpen(!isOpen)
  }

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
      {isOpen && <p className="collapse-content">{text}</p>}
    </div>
  )
}

export default Collapse
