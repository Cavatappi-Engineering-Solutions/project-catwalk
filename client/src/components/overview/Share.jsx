import React from 'react'
import Facebook from '../../assets/icons/facebook.png'
import Twitter from '../../assets/icons/twitter.png'
import Pinterest from '../../assets/icons/pinterest.png'

const Share = () => (
  <section className='share_social_media'>
    <a className='facebook'>
      <img src={ Facebook } className='facebook_icon' alt='Facebook Icon'/>
    </a>
    <a className='twitter'>
      <img src={ Twitter } className='twitter_icon' alt='Twitter Icon'/>
    </a>
    <a className='pinterest'>
      <img src={ Pinterest } className='pinterest_icon' alt='Pinterest Icon'/>
    </a>
  </section>
)

export default Share
