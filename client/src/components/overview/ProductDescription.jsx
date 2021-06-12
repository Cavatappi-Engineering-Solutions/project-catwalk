import React from 'react'

const ProductDescription = ({ product }) => (
  <div className='product_info'>
    <section>
      <h3 className='product_name'>{product.slogan}</h3>
      <p className='product_name'>{product.description}</p>
    </section>
  </div>
)

export default ProductDescription
