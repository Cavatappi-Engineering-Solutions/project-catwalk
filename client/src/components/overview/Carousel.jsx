import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'
import Enlarge from '../../assets/icons/enlarge.png'
import Unavailable from '../../assets/icons/unavailable.png'

const Carousel = ({ currentStylePhotos, previousStyle, nextStyle, length, changeView, changeMainPhoto, start, end, downArrow, upArrow }) => {
  const matchingProductStyle = currentStylePhotos
    ? currentStylePhotos.reduce(
      (acc, photo, index) => {
        if (index === length) acc = photo
        return acc
      },
      null
    )
    : {}
  const thumbnailImagesAtGivenTime = currentStylePhotos && currentStylePhotos.length > 7
    ? currentStylePhotos.slice(start, end)
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
            {currentStylePhotos.length >= 7
              ? <FaArrowAltCircleUp className='carousel_up_arrow' onClick={() => { upArrow() }}/>
              : <br/>}
            {currentStylePhotos.length <= 7
              ? currentStylePhotos.map((photo, index) => (
                <div key={index}>
                  {photo.thumbnail_url !== null
                    ? <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='carousel_product_thumbnail_url' alt='Thumbnail Of Alternate Product Style'/>
                    : <img src={Unavailable} className="carousel_product_thumbnail_url" alt='Unavailable Icon'/>}
                </div>))
              : thumbnailImagesAtGivenTime.map((photo, index) => (
                <div key={index}>
                  {photo.thumbnail_url !== null
                    ? <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='carousel_product_thumbnail_url' alt='Thumbnail Of Alternate Product Style'/>
                    : <img src={Unavailable} className="carousel_product_thumbnail_url" alt='Unavailable Icon'/>}
                </div>))}
            {currentStylePhotos.length >= 7
              ? <FaArrowAltCircleDown className='carousel_down_arrow' onClick={() => { downArrow() }}/>
              : <br/>}
          </div>
      </section>
  )
}

export default Carousel
