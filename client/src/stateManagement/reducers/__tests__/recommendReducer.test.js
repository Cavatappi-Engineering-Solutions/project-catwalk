/* eslint-disable no-undef */
import recommendReducer from '../recommendReducer.js'

describe('Each case should return a properly formatted object', () => {
  it('should return initial state', () => {
    const result = recommendReducer(undefined, {})
    expect(result).toEqual({})
  })

  it('should return payload with an empty state', () => {
    const result = recommendReducer(undefined, { type: 'GET_RECOMMEND', payload: { true: '5', false: '2' } })
    expect(result.true).toBe('5')
    expect(result.false).toBe('2')
  })

  it('should replace an existing state', () => {
    const result = recommendReducer({ true: '5', false: '2' }, { type: 'GET_RECOMMEND', payload: { true: '10' } })
    expect(result.true).toBe('10')
    expect(result.false).toBeUndefined()
  })
})
