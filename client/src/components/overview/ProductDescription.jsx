import React from 'react'

const ProductDescription = ({ product }) => (
  <section className='product_slogan_description'>
    <p className='product_slogan'>{product.slogan}</p>
    <p className='product_description'>{product.description}</p>
  </section>
)

export default ProductDescription
