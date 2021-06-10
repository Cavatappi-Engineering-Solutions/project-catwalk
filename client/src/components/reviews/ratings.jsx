import React from 'react'
import NumeralRating from '../../stateManagement/containers/reviews/numeralRatingContainer.js'
import StarRating from '../../stateManagement/containers/reviews/starRatingContainer.js'
import PercentRecommend from '../../stateManagement/containers/reviews/percentRecommendContainer.js'
import BarGraph from './barGraph.jsx'
import Characteristics from './characteristics.jsx'

const Ratings = (props) => (
  <section id="ratings" className="container">
    <div className="container-row">
      <NumeralRating />
      <StarRating />
    </div>
    <PercentRecommend />
    <BarGraph />
    <Characteristics />
  </section>
)

export default Ratings
