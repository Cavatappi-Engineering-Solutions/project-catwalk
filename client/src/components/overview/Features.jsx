import React from 'react'
import Checkmark from '../../assets/icons/checkmark.png'

const Features = ({ productFeatures }) => (
  !productFeatures
    ? <div className='features'>PLEASE WAIT</div>
    : <div className='features'>
        {productFeatures.map((feature, index) =>
          <div key={index} className='all_features'><img src={ Checkmark } className='checkmark'/>{`${feature.feature}: ${feature.value}`}</div>)}
    </div>
)

export default Features
