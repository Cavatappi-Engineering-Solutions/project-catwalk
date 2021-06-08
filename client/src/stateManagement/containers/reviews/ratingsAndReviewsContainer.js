import {connect} from 'react-redux';
import RatingsAndReviews from '../../../components/reviews/ratingsAndReviews.jsx';
import reviewsReducer from '../../reducers/reviewsReducer.js'
// Check that this reference is accurate once Andrew has product stored in state
const mapState = (state) => ({product_id: 11001})

const mapDispatch = {reviewsReducer}

export default connect(mapState, mapDispatch)(RatingsAndReviews);