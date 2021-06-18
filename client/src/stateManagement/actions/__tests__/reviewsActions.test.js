/* eslint-disable no-undef */
import { getProductReviews, changeSort, incrementHelpful } from '../reviewsActions.js'

describe('Each action creator should return a properly formatted object', () => {
  it('should return an object with a type GET_REVIEWS', () => {
    const result = getProductReviews('values')
    expect(result.type).toBe('GET_REVIEWS')
    expect(result.payload).toBe('values')
  })

  it('should return an object with a type CHANGE_SORT', () => {
    const result = changeSort('values')
    expect(result.type).toBe('CHANGE_SORT')
    expect(result.payload).toBe('values')
  })

  it('should return an object with a type INCREMENT_HELPFUL', () => {
    const result = incrementHelpful('values')
    expect(result.type).toBe('INCREMENT_HELPFUL')
    expect(result.payload).toBe('values')
  })
})
