import React from 'react'

const SKU = ({ productStyles, currentSelectedStyle }) => (
  !productStyles.results
    ? <div className='carousel'>PLEASE WAIT</div>
    : <div className='carousel'>
      <select>
        {Object.values(productStyles.results[currentSelectedStyle].skus).map(({ quantity, size }, index) => (
          <option key={index}>{size}</option>
        ))}
      </select>
    </div>
)

export default SKU
