import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Enlarge from '../../assets/icons/enlarge.png'

const Carousel = ({ currentStylePhotos, previousStyle, nextStyle, length, changeView }) => {
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
          <section className='expand_view_button_wrap'>
            <button onClick={() => { changeView() }} className='carousel_expand_view_button'><img src={Enlarge}/></button>
          </section>
          <section className='left_right_arrow_wrap'>
            <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
            <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
          </section>
          <section className='carousel_display'>
            {matchingProductStyle
              ? <div>
                  <img src={`${matchingProductStyle.url}`} className="carousel_current_display_photo"/>
                </div>
              : <span>Unable to Load Image</span>}
          </section>
      </div>
  )
}

export default Carousel
