const getProductReviews = (productReviews) => ({
  type: 'GET_REVIEWS',
  payload: productReviews
})

const updateProductReviews = (productReviews) => ({
  type: 'UPDATE_REVIEWS',
  payload: productReviews
})

export {getProductReviews, updateProductReviews}