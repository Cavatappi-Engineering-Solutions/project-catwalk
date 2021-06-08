import React from 'react';
import Ratings from './ratings.jsx';
import Reviews from './reviews.jsx';

const RatingsAndReviews = (props) => (
  <section id="ratings-reviews">
    <h2>Ratings &amp; Reviews</h2>
    <Ratings />
    <Reviews />
  </section>
)

export default RatingsAndReviews