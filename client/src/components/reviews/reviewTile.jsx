import React from 'react'
import StarRating from './starRating.jsx'

const Review = ({ data }) => (
  <div className="review-tile container-col">
    <div className="tile-header container-row">
      <StarRating ratings={{ [data.rating]: '1' }} total={1} />
      <span>{`${data.reviewer_name}, ${data.date}`}</span>
    </div>
    <div className="tile-summary">{data.summary}</div>
    <div className="tile-body">{data.body}</div>
    <div className="tile-recommend">{data.recommend}</div>
    <div className="tile-response">{data.response}</div>
    <div className="tile-helpful"></div>
  </div>
)

export default Review
