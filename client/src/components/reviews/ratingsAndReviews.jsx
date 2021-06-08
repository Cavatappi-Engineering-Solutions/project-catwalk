import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY} from '../../../../config.js';
import store from '../../index.jsx'
import Ratings from './ratings.jsx';
import Reviews from './reviews.jsx';
import {getProductReviews} from '../../stateManagement/actions/reviewsActions.js';

const RatingsAndReviews = ({product_id, reviewsReducer}) => {
  const config = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/',
    headers: {Authorization: API_KEY},
    params: {product_id}
  }
  axios(config)
    .then(({data}) => store.dispatch(getProductReviews(data.results)))
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