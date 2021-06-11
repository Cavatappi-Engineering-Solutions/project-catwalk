import React from 'react'
import Characteristic from './characteristic.jsx'

const Characteristics = ({ characteristics }) => {
  const components = []
  for (const key in characteristics) {
    const component = <Characteristic name={key} value={characteristics[key].value} key={characteristics[key].id} />
    components.push(component)
  }

  return <div id="characteristics">{components}</div>
}

export default Characteristics
