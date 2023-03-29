function Banner({ img, text }) {
  return (
    <div className="banner">
      <img src={img} alt="Bannière" className="banner__img" />
      {text !== null ? <h1>{text}</h1> : null}
    </div>
  )
}

export default Banner
