import React from 'react'
import Review from './reviewTile.jsx'

const ReviewDisplay = ({ reviews, count, markReviewHelpful }) => {
  if (reviews.length < 1) {
    return <div>There are no reviews that match</div>
  } else {
    const reviewList = []
    for (let i = 0; i < count; i++) {
      reviewList.push((<Review
        data={reviews[i]}
        key={reviews[i].review_id}
        markHelpful={markReviewHelpful}
      />))
    }

    return (
    <div>
      {reviewList}
    </div>
    )
  }
}

export default ReviewDisplay
