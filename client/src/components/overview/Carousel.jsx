import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Enlarge from '../../assets/icons/enlarge.png'

const Carousel = ({ currentStylePhotos, previousStyle, nextStyle, length, changeView, changeMainPhoto }) => {
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
      ? <section className='carousel'>PLEASE WAIT</section>
      : <section className='carousel'>
          <button onClick={() => { changeView() }} className='carousel_expand_view_button' aria-label="enlarge" alt='Carousel Enlarge Icon'>
            <img src={Enlarge} className='carousel_enlarge_button'/>
          </button>
          <div className='left_right_arrow_wrap'>
            <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
            <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
          </div>
          <div className='carousel_display'>
            {matchingProductStyle
              ? <div>
                  <img src={`${matchingProductStyle.url}`} className="carousel_current_display_photo" alt='Current Carousel Product Image'/>
                </div>
              : <span>Unable to Load Image</span>}
          </div>
          <div className='carousel_product_thumbnail_url_photos'>
            {currentStylePhotos.map((photo, index) => (
              <div key={index}>
                <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='carousel_product_thumbnail_url' alt='Thumbnail Of Alternate Product Style'/>
              </div>))}
          </div>
      </section>
  )
}

export default Carousel
