import React from 'react'

const ProductDescription = ({ product }) => (
  <div className='product_slogan_description'>
    <h3 className='product_slogan'>{product.slogan}</h3>
    <p className='product_description'>{product.description}</p>
  </div>
)

export default ProductDescription