const getProductRatings = (productRatings) => ({
  type: 'GET_RATINGS',
  payload: productRatings
})

const getProductRecommended = (productRecommended) => ({
  type: 'GET_RECOMMEND',
  payload: productRecommended
})

const getProductCharacteristics = (productCharacteristics) => ({
  type: 'GET_CHARACTER',
  payload: productCharacteristics
})

export { getProductRatings, getProductRecommended, getProductCharacteristics }
