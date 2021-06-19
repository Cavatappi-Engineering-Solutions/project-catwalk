import axios from 'axios'

const getProductReviews = (productReviews) => ({
  type: 'GET_REVIEWS',
  payload: productReviews
})

const changeSort = (sortParam) => ({
  type: 'CHANGE_SORT',
  payload: sortParam
})

const incrementHelpful = (review_id) => ({
  type: 'INCREMENT_HELPFUL',
  payload: review_id
})

const markReviewHelpful = (review_id) => {
  return (dispatch) => {
    const helpfulConfig = {
      method: 'PUT',
      url: `api/fec2/hrnyc/reviews/${review_id}/helpful`
    }
    axios(helpfulConfig)
      .then(() => dispatch(incrementHelpful(review_id)))
      .catch((err) =>
        console.log('There was an error marking this review as helpful: ', err)
      )
  }
}

export { getProductReviews, markReviewHelpful, incrementHelpful, changeSort }
