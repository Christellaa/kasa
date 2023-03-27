function Housing({ title, location, tags, host, rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="housing__info">
      <div className="housing__desc">
        <h3 className="size-tertiary font-primary">{title}</h3>
        <p className="size-primary">{location}</p>
        <ul className="housing__tags tag--size">
          {tags.map((tag) => (
            <li className="housing__tag">{tag}</li>
          ))}
        </ul>
      </div>
      <div className="housing__host">
        <div className="flex-row">
          <p className="size-primary">{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="stars">
          {stars.map((star) =>
            rating >= star ? (
              <i class="fullStar fa-solid fa-star"></i>
            ) : (
              <i class="emptyStar fa-solid fa-star"></i>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Housing
