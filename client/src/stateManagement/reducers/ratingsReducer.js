const ratingsReducer = (ratings = { ratings: {}, total: 0 }, action) => {
  switch (action.type) {
    case 'GET_RATINGS': {
      const allRatings = { ratings: action.payload }

      // get total number of ratings
      allRatings.total = Object.values(allRatings.ratings).reduce((sum, ratings) => (sum + Number(ratings)), 0)

      // remove invalid ratings
      for (const key in allRatings.ratings) {
        if (key < 1 || key > 5) {
          delete allRatings.ratings[key]
        }
      }
      return allRatings
    }
    default:
      return ratings
  }
}

export default ratingsReducer
