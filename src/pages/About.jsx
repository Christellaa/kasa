import Header from '../components/Header'
import Banner from '../components/Banner'
import aboutBanner from '../assets/aboutBanner.png'
import aboutData from '../data/aboutData.json'
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
        {aboutData.map((content, id) => (
          <Collapse key={id} title={content.title} text={content.text} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default About
