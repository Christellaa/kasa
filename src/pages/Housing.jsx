import { useParams } from 'react-router-dom'
import housings from '../data/housings.json'
import Error from './Error'
import Header from '../components/Header'
import Housing from '../components/Housing'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

function Housings() {
  const params = useParams()
  const housing = housings.find((housing) => housing.id === params.id)
  if (housing === undefined) {
    return <Error />
  }

  const {
    id,
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = housing

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
          <Collapse title="Description" text={description} />
          <Collapse
            title="Équipements"
            text={equipments.map((equipment) => (
              <li>{equipment}</li>
            ))}
          />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Housings
