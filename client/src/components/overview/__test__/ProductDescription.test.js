import React from 'react'
import renderer from 'react-test-renderer'
import ProductDescription from '../ProductDescription.jsx'

it('renders correctly', () => {
  const tree = renderer.create(<ProductDescription
    product={{
      campus: 'hrnyc',
      category: 'Pants',
      created_at: '2021-01-12T21:17:59.200Z',
      default_price: '40.00',
      description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      features: [{}, {}],
      id: 11003,
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      updated_at: '2021-01-12T21:17:59.200Z'
    }}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
