import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const DefaultView = ({ productStyles, currentSelectedStyle, changeView, currentPhoto, changeMainPhoto, previousStyle, nextStyle, length }) => (
  !productStyles.results
    ? <div className='default_view'>PLEASE WAIT</div>
    : <div className='default_view'>
        <button onClick={() => { changeView() }}>O</button>
        <section className='default_view_photos'>
          <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
          <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
          {productStyles.results[currentSelectedStyle].photos.map((photo, index) => (
            <div key={index}>
              {index === length && (<img src={`${photo.url}`} className='current_photo'/>)}
            </div>
          )
          )}
          {productStyles.results[currentSelectedStyle].photos.map((photo, index) => (
            <div key={index}>
              <img src={`${photo.thumbnail_url}`} onClick={() => { changeMainPhoto(index) }} className='product_url'/>
            </div>
          )
          )}
        </section>
    </div>
)

export default DefaultView
