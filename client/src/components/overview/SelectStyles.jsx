import React from 'react'

const ProductStyles = ({ productStyles, changeSelectedStyle, currentStyle }) => (
  !currentStyle
    ? <div className='product_styles'>PLEASE WAIT</div>
    : <div className='product_styles'>
        <div className='style_price'>{currentStyle.sale_price
          ? <div className='sale_price'>{`Price: $${currentStyle.sale_price}/ $${currentStyle.original_price}`}</div>
          : <div className='default_price'>{`Price: $${currentStyle.original_price}`}</div>}
          <div className='style_name'>{`Style: ${currentStyle.name}`}</div>
        </div>
        <section className='styles_container'>
          {productStyles.results.map((style, index) => (
              <div className='select_styles' key={index}>
                {<img
                src={style.photos[0].thumbnail_url}
                className='select_styles'
                onClick={() => { changeSelectedStyle(index) }}
                />}
              </div>))}
          </section>
      </div>
)

export default ProductStyles
