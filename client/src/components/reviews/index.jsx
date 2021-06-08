import React, {Component} from 'react';
import Ratings from './ratings.jsx';
import Reviews from './reviews.jsx';

class RatingsAndReviews extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="ratings-reviews">
        <h2>Ratings &amp; Reviews</h2>
        <Ratings />
        <Reviews />
      </section>
    )
  }
}

export default RatingsAndReviews;