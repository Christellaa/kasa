import TagsList from './TagsList'
import StarsList from './StarsList'

function Housing({ title, location, tags, host, rating }) {
  return (
    <div className="housing__info">
      <div className="housing__desc">
        <h3>{title}</h3>
        <p>{location}</p>
        <ul className="housing__tags tag--size">
          <TagsList tags={tags} />
        </ul>
      </div>
      <div className="housing__host">
        <div className="flex-row">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="stars">
          <StarsList rating={rating} />
        </div>
      </div>
    </div>
  )
}

export default Housing
