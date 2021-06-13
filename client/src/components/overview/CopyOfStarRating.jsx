import React from 'react'

const StarRating = ({ ratings, total }) => {
  let sum = 0
  for (const key in ratings) {
    sum += key * ratings[key]
  }
  const weightedAvg = sum / total
  const roundedRating = Math.round((weightedAvg + Number.EPSILON) * 4) / 4
  const percentage = (roundedRating / 5) * 100

  return <div className="star-rating" style={{ '--rating': percentage + '%' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
}

export default StarRating
