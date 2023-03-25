import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="font-primary">
      <div className="container">
        <Header />
        <AboutBanner />
      </div>
      <Footer />
    </div>
  )
}

export default About
