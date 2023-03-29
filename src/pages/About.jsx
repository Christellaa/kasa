import Header from '../components/Header'
import Banner from '../components/Banner'
import aboutBanner from '../assets/aboutBanner.png'
import about from '../data/about.json'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <div className="container">
        <Header />
        <Banner img={aboutBanner} />
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
