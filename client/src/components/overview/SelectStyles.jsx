import React from 'react'
// import circleCheck from '../../assets/icons/circleCheck.png'

const ProductStyles = ({ productStyles, changeSelectedStyle, currentStyle, changeCheckMark, checkMark }) => (
  !currentStyle
    ? <div className='product_styles'>PLEASE WAIT</div>
    : <div className='product_styles'>
        <div className='style_price'>{currentStyle.sale_price
          ? <div>
              <div className='discount_price'>{`Discount Price: $${currentStyle.sale_price}`}</div>
              <div className='original_price'>{`Original Price: $${currentStyle.original_price}`}</div>
            </div>
          : <div className='default_price'>{`Price: $${currentStyle.original_price}`}</div>}
          <div className='style_name'>{`Style: ${currentStyle.name}`}</div>
        </div>
        <section className='styles_container'>
          {productStyles.results.map((style, index) => (
              <div key={index}>
                <img
                src={style.photos[0].thumbnail_url}
                className='select_styles'
                onClick={() => { changeSelectedStyle(index); changeCheckMark() }}
                />
                {/* {checkMark ? <img src={ circleCheck } className='checkmark_select_styles'/> : <div></div>} */}
              </div>))}
          </section>
      </div>
)

export default ProductStyles
