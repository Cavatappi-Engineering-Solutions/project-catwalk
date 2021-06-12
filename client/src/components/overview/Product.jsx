import React from 'react'

const Product = ({ product }) => (
  <div className='product_info'>
    <section>
      <h2 className='product_name'>{product.category}</h2>
      <h2 className='product_name'>{product.name}</h2>
    </section>
  </div>
)

export default Product
