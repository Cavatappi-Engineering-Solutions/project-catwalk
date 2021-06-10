import React from 'react'

const Product = ({ product }) => (
  <div className='product_information'>
    <section>
      <h2 className='product_name'>{product.name}</h2>
      <h2 className='product_name'>{product.category}</h2>
      <p className='product_name'>{product.default_price}</p>
      <h3 className='product_name'>{product.slogan}</h3>
      <p className='product_name'>{product.description}</p>
    </section>
  </div>
)

export default Product
