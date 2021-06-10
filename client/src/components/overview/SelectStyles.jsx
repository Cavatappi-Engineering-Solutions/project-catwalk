import React from 'react'

const ProductStyles = ({ productStyles, currentSelectedStyle, changeSelectedStyle }) => (
  !productStyles.results
    ? <div className='product_styles'>PLEASE WAIT</div>
    : <div className='product_styles'>
        {productStyles.results.map((style, index) => (
            <div className='select_styles' key={index}>
              {currentSelectedStyle !== index &&
              (<img
              src={`${style.photos[0].thumbnail_url}`}
              className='product_url'
              onClick={() => { changeSelectedStyle(index) }}/>
              )
              }
            </div>
        ))}
        </div>
)

export default ProductStyles
