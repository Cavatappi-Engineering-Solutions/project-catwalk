import React from 'react'

const BarGraph = ({ ratings, total }) => {
  const starRatings = [
    { stars5: ratings['5'] },
    { stars4: ratings['4'] },
    { stars3: ratings['3'] },
    { stars2: ratings['2'] },
    { stars1: ratings['1'] }
  ]
  return (
    <div id="bar-graph">
      <h4>Rating Breakdown</h4>
        {starRatings.map((rating) => {
          const starCount = Object.keys(rating).join().slice(-1)
          const numOfRatings = Object.values(rating).join() || '0'
          const percent = numOfRatings / total * 100
          return (
            <div id={`row-for-${starCount}stars`} className="graph-row" key={starCount}>
              <span>{starCount} Stars</span>
              <div className="bar" style={{ '--bar-size': `${percent}%` }}></div>
              <span>{numOfRatings}</span>
            </div>
          )
        })}
    </div>
  )
}

export default BarGraph
