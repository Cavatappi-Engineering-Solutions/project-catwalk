/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import NumeralRating from '../numeralRating.jsx'

it('renders correctly with data', () => {
  const { getByText } = render(<NumeralRating ratings={{ 5: '1', 1: '1' }} total={2} />)
  getByText('3')
})

it('renders correctly without data', () => {
  const { getByText } = render(<NumeralRating ratings={{}} total={0} />)
  getByText('-')
})
