import React from 'react'

const Helpful = ({ helpfulness }) => (
  <div className="tile-helpful-report">
    <span className="tile-helpful">Helpful?</span>
    <span className="tile-yes">Yes</span>
    <span className="tile-helpfulness">({helpfulness})</span>
    <span className="tile-report">Report</span>
  </div>
)

export default Helpful
