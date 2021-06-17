/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import Characteristics from '../characteristics.jsx'

it('renders correctly', () => {
  const tree = renderer.create(<Characteristics
    name={'test'}
    characteristics={{
      Size: { id: 36850 },
      Width: { id: 36851 },
      Comfort: { id: 36852 }
    }}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
