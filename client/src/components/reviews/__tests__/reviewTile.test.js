/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'
import Review from '../reviewTile.jsx'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Review
        data={{
          rating: 5,
          summary: 'summary',
          body: 'body',
          recommend: true,
          response: 'response',
          helpfulness: 4,
          review_id: 1234,
          date: '2021-06-19T00:00:00.000Z'
        }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
