import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])
  return (
    <nav>
      <Link
        to="/"
        className={`${currentPath === '/' ? 'links currentLink' : 'links'}`}
      >
        Accueil
      </Link>
      <Link
        to="/about"
        className={`${
          currentPath === '/about' ? 'links currentLink' : 'links'
        }`}
      >
        À Propos
      </Link>
    </nav>
  )
}

export default Navbar
