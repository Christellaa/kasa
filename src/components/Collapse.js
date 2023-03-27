import { useState } from 'react'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)
  function Toggle() {
    setIsOpen(!isOpen)
  }

  return (
          {!isOpen ? (
            //show chevron-down when not opened, otherwise show chevron-up
            <i class="fa-solid fa-chevron-down"></i>
          ) : (
            <i class="fa-solid fa-chevron-up"></i>
          )}
        </div>
      </div>
      {isOpen && <p className="collapse-content size-primary">{text}</p>}
    </div>
  )
}

export default Collapse
