const recommendReducer = (recommended = {}, action) => {
  switch (action.type) {
    case 'GET_RECOMMEND':
      return action.payload
    default:
      return recommended
  }
}

export default recommendReducer
