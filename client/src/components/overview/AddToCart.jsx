import React from 'react'

const AddToCart = ({ productStyles, currentSelectedStyle, changeSKU, quantity }) => {
  const quantityArray = (quantity) => {
    let array = []
    if (!quantity) { array = ['_'] }
    if (quantity > 15) { quantity = 15 }
    for (let i = 1; i <= quantity; i++) { array.push(i) }
    return array
  }
  return (
    !productStyles.results
      ? <div className='carousel'>PLEASE WAIT</div>
      : <div className='carousel'>
        <select onChange={(e) => { changeSKU(e.target.value) }}>
          {Object.values(productStyles.results[currentSelectedStyle].skus).map(({ quantity, size }, index) => (
            <option value={quantity} key={index}>
              {size}
            </option>
          ))}
        </select>
        <select>
          {quantityArray(quantity).map((inventory, index) =>
          <option key={index}>
            {inventory}
          </option>)}
        </select>
        <button>Add To Cart</button>
      </div>
  )
}

export default AddToCart
