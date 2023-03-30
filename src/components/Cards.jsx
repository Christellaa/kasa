import housingData from '../data/housingData.json'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <div className="gallery">
      {housingData.map(({ id, title, cover }) => (
        <Link key={id} to={`/housing/${id}`}>
          <article>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default Cards
