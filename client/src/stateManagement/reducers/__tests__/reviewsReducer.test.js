/* eslint-disable no-undef */
import reviewsReducer from '../reviewsReducer.js'

describe('Each case should return a properly formatted state', () => {
  it('should return initial state', () => {
    const result = reviewsReducer(undefined, {})
    expect(result.reviews).toEqual([])
    expect(result.count).toBe('2')
    expect(result.sort).toBe('relevant')
  })

  it('should add the array of reviews', () => {
    const result = reviewsReducer(undefined, { type: 'GET_REVIEWS', payload: [{ review_id: 1234 }, { review_id: 5678 }] })
    expect(result.reviews).toContainEqual({ review_id: 1234 })
    expect(result.reviews).toContainEqual({ review_id: 5678 })
  })

  it('should change the sort propertry', () => {
    const result = reviewsReducer(undefined, { type: 'CHANGE_SORT', payload: 'newSort' })
    expect(result.sort).toBe('newSort')
  })

  it('should increment the sort propertry on the correct review', () => {
    const result = reviewsReducer(
      { reviews: [{ review_id: 1234, helpfulness: 2 }, { review_id: 5678, helpfulness: 6 }] },
      { type: 'INCREMENT_HELPFUL', payload: '1234' })
    expect(result.reviews[0].helpfulness).toBe(3)
    expect(result.reviews[1].helpfulness).toBe(6)
  })
})
