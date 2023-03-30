import TagListItem from './TagListItem'

function TagsList({ tags }) {
  return (
    <>
      {tags.map((tag, id) => (
        <TagListItem key={id} text={tag} />
      ))}
    </>
  )
}

export default TagsList
