/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import BarGraph from '../barGraph.jsx'

it('always renders 5 bars', () => {
  const { getByText } = render(<BarGraph ratings={{ 5: '1', 1: '1' }} total={2} />)
  getByText('5 Stars')
  getByText('4 Stars')
  getByText('3 Stars')
  getByText('2 Stars')
  getByText('1 Stars')
})
