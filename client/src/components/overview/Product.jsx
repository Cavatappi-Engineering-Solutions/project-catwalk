import React from 'react'
import StarRating from '../reviews/starRating.jsx'

const Product = ({ product, ratings, total }) => (
  <div>
    <h1 className='product_name'>{product.name}</h1>
    <section id='products' className='container'>
      <div className='container-row'>
        <StarRating ratings={ ratings } total={ total }/>
      <section className='read_all_reviews'>
        <a href="#">Read all Reviews</a>
      </section>
      </div>
    </section>
    <h4 className='product_category'>{product.category}</h4>
  </div>
)

export default Product
