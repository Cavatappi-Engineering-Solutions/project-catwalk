import React from 'react'
import StarRating from './starRating.jsx'
import Helpful from './helpful.jsx'

const Review = ({ data, markHelpful }) => (
  <div className="review-tile">
    <div className="tile-header">
      <StarRating ratings={{ [data.rating]: '1' }} total={1} />
      <span className="tile-date">{`${data.reviewer_name}, ${data.date.slice(0, 10)}`}</span>
    </div>
    <p className="tile-summary">{data.summary}</p>
    <p className="tile-body">{data.body}</p>
    <p className="tile-recommend">{data.recommend}</p>
    <p className="tile-response">{data.response}</p>
    <Helpful
      helpfulness={data.helpfulness}
      id={data.review_id}
      markHelpful={markHelpful}
    />
  </div>
)

export default Review
