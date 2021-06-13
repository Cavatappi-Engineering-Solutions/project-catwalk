import { connect } from 'react-redux'
import RatingsAndReviews from '../../../components/reviews/ratingsAndReviews.jsx'
import { getProductReviews, updateProductReviews } from '../../actions/reviewsActions.js'
import { getProductRatings, getProductRecommended, getProductCharacteristics } from '../../actions/ratingsActions.js'

const mapState = (state) => ({
  product_id: 11001,
  sort: state.reviews.sort
})

const mapDispatch = {
  getProductRatings,
  getProductReviews,
  getProductRecommended,
  getProductCharacteristics
}

export default connect(mapState, mapDispatch)(RatingsAndReviews)
