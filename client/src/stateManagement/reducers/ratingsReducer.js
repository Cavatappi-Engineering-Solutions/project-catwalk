const ratingsReducer = (ratings = [], action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return action.payload;
    default:
      return ratings;
  }
}

export default ratingsReducer;