import React from 'react'
import NumeralRating from './CopyOfNumeralRating.jsx'
import StarRating from './CopyOfStarRating.jsx'

const Product = ({ product, ratings, total }) => (
  <div>
    <section>
      <h2 className='product_name'>{product.name}</h2>
      <section id='ratings' className='container'>
        <div className='container-row'>
        <NumeralRating ratings={ ratings }/>
        <StarRating ratings={ ratings } total={ total }/>
        <section className='read_all_reviews'>
          <a href="#">Read all Reviews</a>
        </section>
        </div>
      </section>
      <h4 className='product_category'>{product.category}</h4>
    </section>
  </div>
)

export default Product
