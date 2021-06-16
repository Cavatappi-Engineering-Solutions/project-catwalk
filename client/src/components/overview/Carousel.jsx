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
      ? <div className='carousel'>PLEASE WAIT</div>
      : <div className='carousel'>
          <button onClick={() => { changeView() }} className='carousel_expand_view_button'><img src={Enlarge}/></button>
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
          <section className='carousel_product_thumbnail_url_photos'>
            {currentStylePhotos.map((photo, index) => (
              <div key={index}>
                <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='carousel_product_thumbnail_url'/>
              </div>))}
          </section>
      </div>
  )
}

export default Carousel
