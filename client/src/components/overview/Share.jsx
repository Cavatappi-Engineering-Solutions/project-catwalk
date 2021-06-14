import React from 'react'
import Facebook from '../../assets/icons/facebook.png'
import Twitter from '../../assets/icons/twitter.png'
import Pinterest from '../../assets/icons/pinterest.png'

const Share = () => (
  <div className='share_social_media'>
      <a href='#' className='share'>Share</a>
      <a href='#' className='facebook'><img src={ Facebook }/></a>
      <a href='#' className='twitter'><img src={ Twitter }/></a>
      <a href='#' className='pinterest'><img src={ Pinterest }/></a>
  </div>
)

export default Share
