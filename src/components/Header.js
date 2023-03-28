import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="logo" />
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
    </header>
  )
}

export default Header
