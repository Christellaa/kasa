import { useState } from 'react'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  function Toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse-space">
      <div className="collapse" onClick={Toggle}>
        <h2 className="font-primary">{title}</h2>
        <div className="chevrons">
          {!isOpen ? (
            //show chevron-down when not opened, otherwise show chevron-up
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </div>
      </div>
      {isOpen && <p className="collapse-content size-primary">{text}</p>}
    </div>
  )
}

export default Collapse
