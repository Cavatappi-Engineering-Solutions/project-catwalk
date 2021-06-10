import React from 'react'

const PercentRecommend = ({ recommended }) => {
  recommended.true = recommended.true || 0
  let total = 0
  for (const key in recommended) {
    total += Number(recommended[key])
  }
  const percent = Math.round((recommended.true / total) * 100)

  return <div id="percent-recommend">{percent || ''}% of reviews recommend this product</div>
}

export default PercentRecommend
