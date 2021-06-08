import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY} from '../../../../config.js';
import Ratings from './ratings.jsx';
import Reviews from './reviews.jsx';

const RatingsAndReviews = ({product_id, getProductReviews, getProductRatings}) => {
  const reviewConfig = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/',
    headers: {Authorization: API_KEY},
    params: {product_id}
  }
  const ratingConfig = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/',
    headers: {Authorization: API_KEY},
    params: {product_id}
  }
  axios.all([axios(reviewConfig), axios(ratingConfig)])
    .then(axios.spread((...res) => {
      const reviews = res[0].data.results;
      const ratings = res[1].data.ratings;

      getProductReviews(reviews);
      getProductRatings(ratings);
    }))
    .catch((err) => console.log(err))

  return (
    <section id="ratings-reviews">
      <h2>Ratings &amp; Reviews</h2>
      <Ratings />
      <Reviews />
    </section>
  )
}

export default RatingsAndReviews;