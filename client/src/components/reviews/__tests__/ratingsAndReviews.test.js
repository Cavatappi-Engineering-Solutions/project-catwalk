/* eslint-disable no-undef */
import React from 'react'
import { render } from '../__test-utils__/customRender.js'
import RatingsAndReviews from '../../../stateManagement/containers/reviews/ratingsAndReviewsContainer.js'

it('renders the component with initial state', () => {
  const { getByText } = render(<RatingsAndReviews />, { initialState: { product: { id: '11001' } } })
  getByText('There are no reviews that match')
  getByText('helpfulness')
  getByText('There are no reviews that match')
  getByText('-')
})
