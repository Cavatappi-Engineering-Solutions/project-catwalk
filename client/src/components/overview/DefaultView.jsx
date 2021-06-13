import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Enlarge from '../../assets/icons/enlarge.png'

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
      ? <div className='default_view'>PLEASE WAIT</div>
      : <div className='default_view'>
          <section className='default_view_photos'>
            <section className='expand_view_button_wrap'>
              <button onClick={() => { changeView() }} className='expand_view_button'><img src={Enlarge}/></button>
            </section>
            <section className='left_right_arrow_wrap'>
              <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
              <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
            </section>
              {matchingProductStyle
                ? <div>
                    <img src={`${matchingProductStyle.url}`} className="current_display_photo"/>
                  </div>
                : <span>Unable to Load Image</span>}
          </section>
          <section className='default_product_thumbnail_url_photos'>
            {currentStylePhotos.map((photo, index) => (
              <div key={index}>
                <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='default_product_thumbnail_url'/>
              </div>))}
          </section>
      </div>
  )
}

export default DefaultView
