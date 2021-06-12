const characterReducer = (characteristics = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTER': {
      const meanings = {
        Fit: { low: 'Runs tight', high: 'Runs long' },
        Size: { low: 'A size too small', high: 'A size too large' },
        Width: { low: 'Too narrrow', high: 'Too wide' },
        Length: { low: 'Runs short', high: 'Runs long' },
        Comfort: { low: 'Uncomfortable', high: 'Perfect' },
        Quality: { low: 'Poor', high: 'Perfect' }
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
