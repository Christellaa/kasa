import Header from '../components/Header'
import Banner from '../components/Banner'
import homeBanner from '../assets/homeBanner.png'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className="container">
        <Header />
        <Banner img={homeBanner} text={'Chez vous, partout et ailleurs'} />
        <main>
          <Cards />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
