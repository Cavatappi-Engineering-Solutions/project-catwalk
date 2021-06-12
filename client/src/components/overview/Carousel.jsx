import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const Carousel = ({ currentStylePhotos, productStyles, previousStyle, nextStyle, length, currentSelectedStyle, changeView }) => {
  const matchingProductStyle = currentStylePhotos
    ? currentStylePhotos.reduce(
      (acc, photo, index) => {
        if (index === length) acc = photo
        return acc
      },
      null
    )
    : {}
  return (
    !currentStylePhotos
      ? <div className='carousel'>PLEASE WAIT</div>
      : <div className='carousel'>
          <button onClick={() => { changeView() }}>O</button>
          <section className='product_urls'>
            <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
            <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
            {matchingProductStyle
              ? <div>
                  <img src={`${matchingProductStyle.url}`} className="current_display_photo"/>
                </div>
              : <span>Unable to Load Image</span>}
          </section>
      </div>
  )
}

export default Carousel
