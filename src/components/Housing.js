function Housing({ title, location, tags, host, rating }) {
  return (
    <div>
      <div>
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
            <p>stars</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Housing
