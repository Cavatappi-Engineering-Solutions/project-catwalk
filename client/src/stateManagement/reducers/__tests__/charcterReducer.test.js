/* eslint-disable no-undef */
import characterReducer from '../characterReducer.js'

describe('Each case should return a properly formatted object', () => {
  it('should return an empty object', () => {
    const result = characterReducer(undefined, {})
    expect(result).toEqual({})
  })

  it('should return an object with characteristics and meanings', () => {
    const result = characterReducer(undefined, { type: 'GET_CHARACTER', payload: { Quality: {} } })
    expect(result).toEqual({ Quality: { low: 'Poor', high: 'Perfect' } })
  })
})
