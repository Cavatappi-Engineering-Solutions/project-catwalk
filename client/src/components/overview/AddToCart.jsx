import React from 'react'
import Heart from '../../assets/icons/heart.png'
import Star from '../../assets/icons/star.png'

const AddToCart = ({ changeSKU, quantity, currentStyle, icon, changeIcon, addToCartClick }) => {
  const quantityArray = (quantity) => {
    let array = []
    if (!quantity) { array = ['_'] }
    if (quantity > 15) { quantity = 15 }
    for (let i = 1; i <= quantity; i++) { array.push(i) }
    return array
  }
  return (
    !currentStyle
      ? <section className='selection'>PLEASE WAIT</section>
      : <section className='selection'>
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
            (!inventory
              ? <option>OUT OF STOCK</option>
              : <option key={index}>{inventory}</option>))}
        </select>
        <button className='cart' aria-label="add to cart" onClick={() => addToCartClick()}>Add To Cart</button>
        {icon
          ? <button onClick={() => changeIcon()} className='heart_button' aria-label="heart">
              <img src={ Heart } className='heart_icon' alt='Heart Icon'/>
            </button>
          : <button onClick={() => changeIcon()} className='star_button' aria-label="star">
              <img src={ Star } className='star_icon' alt='Star Icon'/>
            </button>}
      </section>
  )
}

export default AddToCart
