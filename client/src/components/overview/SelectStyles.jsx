import React from 'react'

const ProductStyles = ({ productStyles, currentSelectedStyle, changeSelectedStyle, currentStyle }) => (
  !currentStyle
    ? <div className='product_styles'>PLEASE WAIT</div>
    : <div className='product_styles'>
        <div className='style_name'>{currentStyle.name}</div>
        <div className='style_price'>{currentStyle.sale_price
          ? <div className='sale_price'>{`${currentStyle.sale_price}/ ${currentStyle.original_price}`}</div>
          : <div className='default_price'>{currentStyle.original_price}</div>}
      </div>
        {productStyles.results.map((style, index) => (
            <div className='select_styles' key={index}>
              {currentSelectedStyle !== index &&
              (<img
              src={`${style.photos[0].thumbnail_url}`}
              className='select_styles'
              onClick={() => { changeSelectedStyle(index) }}/>
              )}
            </div>
        ))}
        </div>
)

export default ProductStyles
