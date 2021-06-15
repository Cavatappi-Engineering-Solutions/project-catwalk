import React from 'react'
import Heart from '../../assets/icons/heart.png'
import Star from '../../assets/icons/star.png'

const AddToCart = ({ changeSKU, quantity, currentStyle, icon, changeIcon }) => {
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
            (!inventory
              ? <option>OUT OF STOCK</option>
              : <option key={index}>{inventory}</option>))}
        </select>
        <section className='cart_icon'>
          <button className='cart'>Add To Cart</button>
        </section>
        {icon
          ? <button onClick={() => changeIcon()} className='heart_icon'><img src={ Heart }/></button>
          : <button onClick={() => changeIcon()} className='star_icon'><img src={ Star }/></button>}
      </div>
  )
}

export default AddToCart
