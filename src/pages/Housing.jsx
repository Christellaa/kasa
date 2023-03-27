import { useParams } from 'react-router-dom'
import housings from '../data/housings.json'
function Housings() {
  const params = useParams()
  const housing = housings.find((housing) => housing.id === params.id)
  if (housing === undefined) {
    return <Error />
  }
  return (
    <div>
      <h1>Housings</h1>
    </div>
  )
}

export default Housing
