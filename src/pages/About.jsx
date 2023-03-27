import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import about from '../data/about.json'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="font-primary">
      <div className="container">
        <Header />
        <AboutBanner />
      </div>
      <main>
        {about.map((content) => (
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default About
