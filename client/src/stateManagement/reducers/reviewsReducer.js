const initialState = {
  reviews: [],
  sort: 'relevant',
  count: '2'
}

const reviewsReducer = (reviews = initialState, action) => {
  switch (action.type) {
    case 'GET_REVIEWS': {
      const newState = Object.assign({}, reviews)
      newState.reviews = action.payload
      return newState
    }
    case 'CHANGE_SORT': {
      const newState = Object.assign({}, reviews)
      newState.sort = action.payload
      return newState
    }
    default:
      return reviews
  }
}

export default reviewsReducer
