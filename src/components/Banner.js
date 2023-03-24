import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Kasa" className="logo" />
    </div>
  )
}

export default Banner
