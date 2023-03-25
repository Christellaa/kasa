import Header from '../components/Header'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div>
      <div className="error font-primary container">
        <Header />
        <div className="error__content">
          <h1>404</h1>
          <p className="size-tertiary">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="links size-primary">
            Retourner sur la page d’accueil
          </Link>
        </div>
    </div>
  )
}

export default Error
