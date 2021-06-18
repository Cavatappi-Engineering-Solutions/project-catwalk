/* eslint-disable no-undef */
import ratingsReducer from '../ratingsReducer.js'

describe('Each case should return a properly formatted object', () => {
  it('should return initial state', () => {
    const result = ratingsReducer(undefined, {})
    expect(result.ratings).toEqual({})
    expect(result.total).toBe(0)
  })

  it('should add the total of ratings', () => {
    const result = ratingsReducer(undefined, { type: 'GET_RATINGS', payload: { 5: '5', 4: '5' } })
    expect(result.total).toBe(10)
  })

  it('should remove invalid ratings after counting total', () => {
    const result = ratingsReducer(undefined, { type: 'GET_RATINGS', payload: { 6: '5', 4: '5', 0: '5' } })
    expect(result.total).toBe(15)
    expect(result.ratings['6']).toBeUndefined()
    expect(result.ratings['0']).toBeUndefined()
  })
})
