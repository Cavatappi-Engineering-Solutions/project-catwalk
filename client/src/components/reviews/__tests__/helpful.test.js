/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Helpful from '../helpful.jsx'

it('renders correctly', () => {
  const { getByText } = render(<Helpful helpfulness={2} />)
  getByText('Helpful?')
  getByText('Yes')
  getByText('Report')
  getByText('(2)')
})
