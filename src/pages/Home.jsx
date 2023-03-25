import Banner from '../components/Banner.js'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="header">
      <Banner />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/housing">Housing</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Home
