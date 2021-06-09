import {connect} from 'react-redux';
import RatingsAndReviews from '../../../components/reviews/ratingsAndReviews.jsx';
import {getProductReviews, updateProductReviews} from '../../actions/reviewsActions.js'
import {getProductRatings, updateProductRatings} from '../../actions/ratingsActions.js'
// Check that this reference is accurate once Andrew has product stored in state
const mapState = (state) => ({product_id: 11001})

const mapDispatch = {getProductRatings, getProductReviews}

export default connect(mapState, mapDispatch)(RatingsAndReviews);