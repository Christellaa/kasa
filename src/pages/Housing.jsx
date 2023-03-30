import { useParams } from 'react-router-dom'
import housingData from '../data/housingData.json'
import Error from './Error'
import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Housing from '../components/Housing'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

function Housings() {
  const params = useParams()
  const housing = housingData.find((housing) => housing.id === params.id)
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
    <div>
      <div className="container">
        <Header />
        <main>
          <Carrousel pictures={pictures} />
          <Housing
            id={id}
            title={title}
            location={location}
            tags={tags}
            host={host}
            rating={rating}
          />
          <div className="housing__collapse">
            <Collapse title="Description" text={description} />
            <Collapse
              title="Équipements"
              text={equipments.map((equipment, id) => (
                <li key={id}>{equipment}</li>
              ))}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Housings
