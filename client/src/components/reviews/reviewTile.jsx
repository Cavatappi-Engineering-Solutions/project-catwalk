import React from 'react'
import StarRating from './starRating.jsx'

const Review = ({ data }) => (
  <div className="review-tile container-col">
    <div className="tile-header">
      <StarRating ratings={{ [data.rating]: '1' }} total={1} />
      <span>{`${data.reviewer_name}, ${data.date}`}</span>
    </div>
    <span className="tile-summary">{data.summary}</span>
    <p className="tile-body">{data.body}</p>
    <span className="tile-recommend">{data.recommend}</span>
    <p className="tile-response">{data.response}</p>
    <span className="tile-helpful"></span>
  </div>
)

export default Review
