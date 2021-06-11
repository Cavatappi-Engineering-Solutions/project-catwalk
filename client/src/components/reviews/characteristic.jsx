import React from 'react'

const Characteristic = ({ name, characteristics }) => (
  <div className="characteristic">
    <span className="char-name">{name}</span>
      <div>
        <div className="char-bar"></div>
        <div className="char-marker" style={{ '--marker-position': `${(characteristics.value / 5 * 100) - 3}%` }}>&#9660;</div>
      </div>
    <div className="char-meaning">
      <span className="char-meaning-low">{characteristics.low}</span>
      <span className="char-meaning-high">{characteristics.high}</span>
    </div>
  </div>
)

export default Characteristic
