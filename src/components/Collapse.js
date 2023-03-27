import { useState } from 'react'

function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  function Toggle() {
    setOpen(!open)
  }

  return (
    <div>
      <div onClick={Toggle}>
        <h2>{title}</h2>
        <div>
          <i class="fa-solid fa-chevron-down"></i>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      {open && <p>{text}</p>}
    </div>
  )
}

export default Collapse
