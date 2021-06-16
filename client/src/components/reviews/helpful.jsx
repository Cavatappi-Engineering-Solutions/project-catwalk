import React from 'react'

const Helpful = ({ helpfulness, id, markHelpful }) => (
  <div className="tile-helpful-report">
    <span className="tile-helpful">Helpful?</span>
    <span
      id={`yes-${id}`}
      className="tile-yes"
      onClick={(e) => markHelpful(e.target.id.slice(4))}
    >Yes</span>
    <span className="tile-helpfulness">({helpfulness})</span>
    <span className="tile-report">Report</span>
  </div>
)

export default Helpful
