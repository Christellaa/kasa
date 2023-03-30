import StarListItem from './StarListItem'

function StarsList({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <>
      {stars.map((star, id) => (
        <StarListItem
          key={id}
          className={`${
            rating >= star
              ? 'fullStar fa-solid fa-star'
              : 'emptyStar fa-solid fa-star'
          }`}
        />
      ))}
    </>
  )
}

export default StarsList
