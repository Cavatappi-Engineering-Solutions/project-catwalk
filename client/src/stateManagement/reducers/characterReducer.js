const characterReducer = (characteristics = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTER':
      return action.payload
    default:
      return characteristics
  }
}

export default characterReducer
