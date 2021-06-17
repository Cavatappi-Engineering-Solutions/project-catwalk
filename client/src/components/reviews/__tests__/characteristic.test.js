/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import Characteristic from '../characteristic.jsx'

it('renders correctly', () => {
  const tree = renderer.create(<Characteristic
    name={'test'}
    characteristics={{ value: 0, low: 'low', high: 'high' }}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
