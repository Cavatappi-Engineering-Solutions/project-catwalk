const getProductReviews = (productReviews) => ({
  type: 'GET_REVIEWS',
  payload: productReviews
})

const updateProductReviews = (productReviews) => ({
  type: 'UPDATE_REVIEWS',
  payload: productReviews
})

const changeSort = (sortParam) => ({
  type: 'CHANGE_SORT',
  payload: sortParam
})

export { getProductReviews, updateProductReviews, changeSort }
