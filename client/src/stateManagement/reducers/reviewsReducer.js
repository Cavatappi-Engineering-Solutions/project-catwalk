const reviewsReducer = (reviews = [], action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return action.payload;
    default:
      return reviews;
  }
}

export default reviewsReducer;