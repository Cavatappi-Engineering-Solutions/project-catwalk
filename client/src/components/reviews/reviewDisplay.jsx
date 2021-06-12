import React from 'react'
import Review from './reviewTile.jsx'

const ReviewDisplay = ({ reviews }) => (
  <div>
    {reviews.map((review) => (<Review data={review} key={review.review_id} />))}
  </div>
)

export default ReviewDisplay
