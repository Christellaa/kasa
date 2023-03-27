function Housing({ title, location, tags, host, rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
        {tags.map((tag) => (
          <ul>
            <li>{tag}</li>
          </ul>
        ))}
      </div>
      <div>
        <p>{host.name}</p>
        <img src={host.picture} alt={host.name} />
        <div>
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
