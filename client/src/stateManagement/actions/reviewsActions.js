import axios from 'axios'
import { API_KEY } from '../../../../config.js'

const getProductReviews = (productReviews) => ({
  type: 'GET_REVIEWS',
  payload: productReviews
})

const changeSort = (sortParam) => ({
  type: 'CHANGE_SORT',
  payload: sortParam
})

const markReviewHelpful = (review_id) => {
  return () => {
    const helpfulConfig = {
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${review_id}/helpful`,
      headers: { Authorization: API_KEY }
    }
    axios(helpfulConfig)
      .then()
      .catch((err) => console.log('There was an error marking this review as helpful: ', err))
  }
}

export { getProductReviews, markReviewHelpful, changeSort }
