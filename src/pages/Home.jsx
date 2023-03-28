import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className="container">
        <Header />
        <HomeBanner />
        <main>
          <Cards />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
