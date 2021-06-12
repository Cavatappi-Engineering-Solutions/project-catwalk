import React from 'react'

const Features = ({ productFeatures }) => (
  !productFeatures
    ? <div className='features'>PLEASE WAIT</div>
    : <div className='features'>
      <section className='feature_value'>
        {productFeatures.map((feature, index) =>
          <div key={index}>{`${feature.feature}: ${feature.value}`}</div>)}
        </section>
    </div>
)

export default Features
