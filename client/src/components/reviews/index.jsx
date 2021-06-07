import React from 'react';
import Ratings from './ratings.jsx';
import Reviews from './reviews.jsx';

const RatingsAndReviews = (props) => (
  <section id="ratings-reviews">
    <Ratings />
    <Reviews />
  </section>
)

export default RatingsAndReviews