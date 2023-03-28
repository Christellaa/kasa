function Housing({ title, location, tags, host, rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="housing__info">
      <div className="housing__desc">
        <h3 className="size-primary">{title}</h3>
        <p>{location}</p>
        <ul className="housing__tags tag--size">
          {tags.map((tag, id) => (
            <li key={id} className="housing__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="housing__host">
        <div className="flex-row">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="stars">
          {stars.map((star, id) =>
            rating >= star ? (
              <i key={id} className="fullStar fa-solid fa-star"></i>
            ) : (
              <i key={id} className="emptyStar fa-solid fa-star"></i>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Housing
