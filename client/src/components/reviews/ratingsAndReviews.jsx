import React from 'react'
import axios from 'axios'
import { API_KEY } from '../../../../config.js'
import Ratings from './ratings.jsx'
import Reviews from './reviews.jsx'

const RatingsAndReviews = ({ product_id, sort, getProductReviews, getProductRatings, getProductRecommended, getProductCharacteristics }) => {
  product_id = product_id || 0
  const reviewConfig = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/',
    headers: { Authorization: API_KEY },
    params: { product_id, sort }
  }
  const ratingConfig = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/',
    headers: { Authorization: API_KEY },
    params: { product_id }
  }
  axios.all([axios(reviewConfig), axios(ratingConfig)])
    .then(axios.spread((...res) => {
      const reviews = res[0].data.results
      const ratings = res[1].data.ratings
      const recommends = res[1].data.recommended
      const characters = res[1].data.characteristics

      getProductReviews(reviews)
      getProductRatings(ratings)
      getProductRecommended(recommends)
      getProductCharacteristics(characters)
    }))
    .catch((err) => console.log(err))

  return (
    <section id="ratings-reviews">
      <h3 id="ratings-reviews-title">Ratings &amp; Reviews</h3>
      <div className="container-row">
        <Ratings />
        <Reviews />
      </div>
    </section>
  )
}

export default RatingsAndReviews
