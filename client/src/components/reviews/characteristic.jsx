import React from 'react'

const Characteristic = ({ name, value }) => (
  <div className="characteristic">
    <span className="char-name">{name}</span>
      <div>
        <div className="char-bar"></div>
        <span className="char-marker" style={{ '--marker-position': `${(value / 5 * 100) - 3}%` }}>&#9660;</span>
      </div>
    <div className="char-meaning">
      <span></span>
      <span></span>
    </div>
  </div>
)

export default Characteristic
