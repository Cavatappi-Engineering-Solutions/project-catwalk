/* eslint-disable no-undef */
import { getProductRatings, getProductRecommended, getProductCharacteristics } from '../ratingsActions.js'

describe('Each action creator should return a properly formatted object', () => {
  it('should return an object with a type GET_RATINGS', () => {
    const result = getProductRatings('values')
    expect(result.type).toBe('GET_RATINGS')
    expect(result.payload).toBe('values')
  })

  it('should return an object with a type GET_RECOMMEND', () => {
    const result = getProductRecommended('values')
    expect(result.type).toBe('GET_RECOMMEND')
    expect(result.payload).toBe('values')
  })

  it('should return an object with a type GET_CHARACTER', () => {
    const result = getProductCharacteristics('values')
    expect(result.type).toBe('GET_CHARACTER')
    expect(result.payload).toBe('values')
  })
})
