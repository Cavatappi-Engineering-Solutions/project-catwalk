import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Enlarge from '../../assets/icons/enlarge.png'
import Unavailable from '../../assets/icons/unavailable.png'

const DefaultView = ({ currentStylePhotos, changeView, changeMainPhoto, previousStyle, nextStyle, length }) => {
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
      ? <section className='default_view'>PLEASE WAIT</section>
      : <section className='default_view'>
          <div className='default_view_photos'>
            <div className='expand_view_button_wrap'>
              <button onClick={() => { changeView() }} className='expand_view_button' aria-label="strink">
                <img src={Enlarge} className='expand_enlarge_button' alt='Default Enlarge Icon'/>
              </button>
            </div>
            <div className='left_right_arrow_wrap'>
              <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
              <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
            </div>
              {matchingProductStyle.url !== null
                ? <div>
                    <img src={`${matchingProductStyle.url}`} className="current_display_photo" alt='Current Default Product Image'/>
                  </div>
                : <div>
                    <img src={Unavailable} className="current_display_photo" alt='Unavailable Icon'/>
                  </div>}
          </div>
          <div className='default_product_thumbnail_url_photos'>
            {currentStylePhotos.map((photo, index) => (
              <div key={index}>
                <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='default_product_thumbnail_url' alt='Thumbnail Of Alternate Product Style'/>
              </div>))}
          </div>
      </section>
  )
}

export default DefaultView
