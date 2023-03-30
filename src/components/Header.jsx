import logo from '../assets/logo.png'
import Navbar from '../components/Navbar'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="logo" />
      <Navbar />
    </header>
  )
}

export default Header
