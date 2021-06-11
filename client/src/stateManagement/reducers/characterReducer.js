const characterReducer = (characteristics = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTER': {
      const meanings = {
        Fit: { low: 'Poor', high: 'Perfect' },
        Size: { low: 'Too small', high: 'Too large' },
        Width: { low: 'Too narrrow', high: 'Too wide' },
        Length: { low: 'Too short', high: 'Too long' },
        Comfort: { low: 'Poor', high: 'Perfect' },
        Quality: { low: 'Poor', high: 'High' }
      }
      const charAndMeanings = {}
      for (const key in action.payload) {
        charAndMeanings[key] = Object.assign(action.payload[key], meanings[key])
      }
      return charAndMeanings
    }
    default:
      return characteristics
  }
}

export default characterReducer
