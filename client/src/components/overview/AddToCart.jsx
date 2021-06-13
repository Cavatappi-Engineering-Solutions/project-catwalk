import React from 'react'

const AddToCart = ({ changeSKU, quantity, currentStyle }) => {
  const quantityArray = (quantity) => {
    let array = []
    if (!quantity) { array = ['_'] }
    if (quantity > 15) { quantity = 15 }
    for (let i = 1; i <= quantity; i++) { array.push(i) }
    return array
  }
  return (
    !currentStyle
      ? <div className='selection'>PLEASE WAIT</div>
      : <div className='selection'>
        <select onChange={(e) => { changeSKU(e.target.value) }} className='size_dropdown'>
          <option hidden>SELECT SIZE</option>
          {Object.values(currentStyle.skus).map(({ quantity, size }, index) => (
            <option value={quantity} key={index}>
              {size}
            </option>
          ))}
        </select>
        <select className='quantity_dropdown'>
          <option hidden>_</option>
          {quantityArray(quantity).map((inventory, index) =>
          <option key={index}>
            {inventory}
          </option>)}
        </select>
        <section className='cart_icon'>
          <button className='cart'>Add To Cart</button>
        </section>
          <button className='heart_star_icon'>X</button>
      </div>
  )
}

export default AddToCart
