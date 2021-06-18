import React from 'react'
import Checkmark from '../../assets/icons/checkmark.png'

const Features = ({ productFeatures }) => (
  !productFeatures
    ? <section className='features'>PLEASE WAIT</section>
    : <section className='features'>
        {productFeatures.map((feature, index) =>
          <div key={index} className='all_features'>
            <img src={ Checkmark } className='checkmark' alt='Features Check Icon'/>{feature.value}
          </div>)}
    </section>
)

export default Features
