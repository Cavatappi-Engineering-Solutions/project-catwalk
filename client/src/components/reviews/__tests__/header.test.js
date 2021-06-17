/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Header from '../header.jsx'

it('renders correctly', () => {
  const { getByText, getByLabelText } = render(<Header total={2} />)
  getByLabelText('2 total reviews, sorted by', { exact: false })
  getByText('relevance')
  getByText('helpfulness')
  getByText('most recent')
})
