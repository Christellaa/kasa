import { Link } from 'react-router-dom'
import CurrentLocation from './CurrentLocation'

function Navbar() {
  return (
    <nav>
      <Link
        to="/"
        className={CurrentLocation('/', 'links currentLink', 'links')}
      >
        Accueil
      </Link>
      <Link
        to="/about"
        className={CurrentLocation('/about', 'links currentLink', 'links')}
      >
        À Propos
      </Link>
    </nav>
  )
}

export default Navbar
