/* eslint-disable no-undef */
import React from 'react'
import { render } from '../__test-utils__/customRender.js'
import Reviews from '../reviews.jsx'

it('renders the component with initial state', () => {
  const { getByText } = render(<Reviews />, { initialState: { product: { id: '11001' } } })
  getByText('There are no reviews that match')
})
