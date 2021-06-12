import React from 'react'
import Header from '../../stateManagement/containers/reviews/headerContainer.js'
import ReviewDisplay from '../../stateManagement/containers/reviews/reviewDisplayContainer.js'
import Buttons from '../../stateManagement/containers/reviews/buttonsContainer.js'

const Reviews = (props) => (
  <section id="reviews">
    <Header />
    <ReviewDisplay />
    <Buttons />
  </section>
)

export default Reviews
