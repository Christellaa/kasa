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
          <p className="size-primary">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="links link__back-home">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
