import { useState } from 'react'

function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  function Toggle() {
    setOpen(!open)
  }

  return (
    <div>
      <div onClick={Toggle}>
        <i class="fa-solid fa-chevron-down"></i>
        <i class="fa-solid fa-chevron-up"></i>
      </div>
      {open && <h1>{title}</h1> && <p>{text}</p>}
    </div>
  )
}

export default Collapse
