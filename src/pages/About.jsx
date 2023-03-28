import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import about from '../data/about.json'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <div className="container">
        <Header />
        <AboutBanner />
      </div>
      <main className="collapse-column">
        {about.map((content, id) => (
          <Collapse key={id} title={content.title} text={content.text} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default About
