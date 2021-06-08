const getProductRatings = (productRatings) => ({
  type: 'GET_RATINGS',
  payload: productRatings
})

const updateProductRatings = (productRatings) => ({
  type: 'UPDATE_RATINGS',
  payload: productRatings
})

export {getProductRatings, updateProductRatings};