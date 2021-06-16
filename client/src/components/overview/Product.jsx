import React from 'react'
import StarRating from '../reviews/starRating.jsx'
import { Link } from 'react-scroll'

const Product = ({ product, ratings, total }) => (
  <div>
    <h2 className='product_name'>{product.name}</h2>
    <section id='products' className='container'>
      <div className='container-row'>
        <StarRating ratings={ ratings } total={ total }/>
        <div className='read_all_reviews'>
          <Link
            to='ratings-reviews'
            activeClass='active'
            spy={true}
            smooth={true}
            className='read_all_reviews_link'>
              {`Read all ${total} Reviews`}
          </Link>
        </div>
      </div>
    </section>
    <p className='product_category'>{product.category}</p>
  </div>
)

export default Product
