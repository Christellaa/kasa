import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="font-primary">
      <div className="container">
        <Header />
        <HomeBanner />
      </div>
      <Footer />
    </div>
  )
}

export default Home
