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
    case 'INCREMENT_HELPFUL': {
      const newState = Object.assign({}, reviews)
      newState.reviews.forEach((review) => {
        if (Number(review.review_id) === Number(action.payload)) {
          review.helpfulness += 1
        }
      })
      return newState
    }
    default:
      return reviews
  }
}

export default reviewsReducer
