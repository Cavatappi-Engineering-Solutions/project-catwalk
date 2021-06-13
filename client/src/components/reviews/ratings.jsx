import React from 'react'
import NumeralRating from '../../stateManagement/containers/reviews/numeralRatingContainer.js'
import StarRating from '../../stateManagement/containers/reviews/starRatingContainer.js'
import PercentRecommend from '../../stateManagement/containers/reviews/percentRecommendContainer.js'
import BarGraph from '../../stateManagement/containers/reviews/barGraphContainer.js'
import Characteristics from '../../stateManagement/containers/reviews/characteristicsContainer.js'

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
