import { useState } from 'react'

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const picturesLength = pictures.length

  //if current slide is the last one, we change to the first one, otherwise we change to the next slide
  function nextSlide() {
    setCurrentSlide(currentSlide === picturesLength - 1 ? 0 : currentSlide + 1)
  }

  //if current slide is the first one, we change to the last one, otherwwise we change to the previous slide
  function previousSlide() {
    setCurrentSlide(currentSlide === 0 ? picturesLength - 1 : currentSlide - 1)
  }

  return (
    <div className="carrousel">
      <div>
        <img
          className="carrousel__slide"
          src={pictures[currentSlide]}
          alt="Photographie du logement"
        />
      </div>
      {picturesLength > 1 && (
        <div className="carrousel__arrows">
          <i
            onClick={previousSlide}
            className="carrousel__arrow-left fa-solid fa-chevron-left"
          ></i>
          <i
            onClick={nextSlide}
            className="carrousel__arrow-right fa-solid fa-chevron-right"
          ></i>
        </div>
      )}
    </div>
  )
}

export default Carrousel
