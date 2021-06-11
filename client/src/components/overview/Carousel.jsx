import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const Carousel = ({ productStyles, previousStyle, nextStyle, length, currentSelectedStyle, changeView }) => (
  !productStyles.results
    ? <div className='carousel'>PLEASE WAIT</div>
    : <div className='carousel'>
        <button onClick={() => { changeView() }}>O</button>
        <section className='product_urls'>
          <FaArrowAltCircleLeft className='left_arrow' onClick={() => { previousStyle() }}/>
          <FaArrowAltCircleRight className='right_arrow' onClick={() => { nextStyle() }}/>
          {productStyles.results[currentSelectedStyle].photos.map((photo, index) => (
            <div key={index}>
              {index === length && (<img src={`${photo.url}`} className='product_url'/>)}
            </div>
          )
          )}
        </section>
    </div>
)

export default Carousel
