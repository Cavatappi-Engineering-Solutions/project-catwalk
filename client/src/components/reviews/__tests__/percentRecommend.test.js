/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import PercentRecommend from '../percentRecommend.jsx'

it('renders correctly with recommendations', () => {
  const { getByText } = render(<PercentRecommend recommended={{ true: '4', false: '1' }} />)
  getByText('80% of reviews recommend this product')
})

it('renders correctly without recommendations', () => {
  const tree = renderer.create(<PercentRecommend recommended={{ false: '3' }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
