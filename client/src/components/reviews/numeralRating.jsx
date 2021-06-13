import React from 'react'

const NumeralRating = ({ ratings, total }) => {
  let sum = 0
  for (const key in ratings) {
    sum += key * ratings[key]
  }
  const weightedAvg = sum / total
  const roundedRating = Math.round((weightedAvg + Number.EPSILON) * 10) / 10

  return <span id="numeral-rating">{roundedRating ? roundedRating.toString() : ''}</span>
}

export default NumeralRating
