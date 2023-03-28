import homeBanner from '../assets/homeBanner.png'

function HomeBanner() {
  return (
    <div className="banner">
      <img src={homeBanner} alt="Bannière" className="banner__img" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default HomeBanner
