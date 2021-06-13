import React from 'react'

const NumeralRating = ({ ratings }) => {
  let total = 0
  let sum = 0
  for (const key in ratings) {
    sum += key * ratings[key]
    total += Number(ratings[key])
  }
  console.log('total: ', total, 'sum: ', sum)
  const weightedAvg = sum / total
  const roundedRating = Math.round((weightedAvg + Number.EPSILON) * 10) / 10

  return <span className="numeral-rating">{roundedRating ? roundedRating.toString() : ''}</span>
}

export default NumeralRating
