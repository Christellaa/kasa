import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import about from '../data/about.json'
import Collapse from '../components/Collapse'
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
          <Collapse title={content.title} text={content.text} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default About
