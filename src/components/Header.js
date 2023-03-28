import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="logo" />
      <nav>
        <Link to="/" className="links">
          Accueil
        </Link>
        <Link to="/about" className="links">
          À Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
