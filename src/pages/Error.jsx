import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Error() {
  return (
    <div>
      <div className="error container">
        <Header />
        <div className="error__content">
          <h1>404</h1>
          <p className="size-secondary">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="links ">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>{' '}
      <Footer />
    </div>
  )
}

export default Error
