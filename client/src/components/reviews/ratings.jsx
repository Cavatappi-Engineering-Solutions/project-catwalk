import React from 'react'
import NumeralRating from '../../stateManagement/containers/reviews/numeralRatingContainer.js'
import StarRating from '../../stateManagement/containers/reviews/starRatingContainer.js'
import PercentRecommend from './percentRecommend.jsx'
import BarGraph from './barGraph.jsx'
import Characteristics from './characteristics.jsx'

const Ratings = (props) => (
  <section id="ratings">
    <NumeralRating />
    <StarRating />
    <PercentRecommend />
    <BarGraph />
    <Characteristics />
  </section>
)

export default Ratings
