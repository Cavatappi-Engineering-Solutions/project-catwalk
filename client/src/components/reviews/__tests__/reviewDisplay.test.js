/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ReviewDisplay from '../reviewDisplay.jsx'

it('renders two review tiles correctly', () => {
  const tree = renderer.create(<ReviewDisplay
    reviews={[{
      rating: 5,
      summary: 'summary',
      body: 'body',
      recommend: true,
      response: 'response',
      helpfulness: 4,
      review_id: 1234,
      date: 'date',
      reviewer_name: 'John Smith'
    },
    {
      rating: 54,
      summary: 'summary',
      body: 'body',
      recommend: true,
      response: 'response',
      helpfulness: 7,
      review_id: 5678,
      date: 'date',
      reviewer_name: 'Keisha'
    }]}
  count={2}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly if there are no reviews', () => {
  const { getByText } = render(<ReviewDisplay reviews={[]} />)
  getByText('There are no reviews that match')
})
