import React from 'react'
import { render } from '@testing-library/react'
import StarRating from '../starRating'

it('renders correctly', () => {
  const { getByText } = render(<StarRating />)
  getByText('★★★★★')
})