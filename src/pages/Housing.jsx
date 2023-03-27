import { useParams } from 'react-router-dom'
import housings from '../data/housings.json'
import Error from './Error'
import Header from '../components/Header'
import Housing from '../components/Housing'
import Footer from '../components/Footer'

function Housings() {
  const params = useParams()
  const housing = housings.find((housing) => housing.id === params.id)
  if (housing === undefined) {
    return <Error />
  }

  const id = housing.id
  const title = housing.title
  //const pictures = housing.pictures
  //const description = housing.description
  const host = housing.host
  const rating = housing.rating
  const location = housing.location
  //const equipments = housing.equipments
  const tags = housing.tags

  return (
    <div className="font-primary">
      <div className="container">
        <Header />
        <main>
          <Housing
            id={id}
            title={title}
            location={location}
            tags={tags}
            host={host}
            rating={rating}
          />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Housings
