import { connect } from 'react-redux'
import ReviewDisplay from '../../../components/reviews/reviewDisplay.jsx'
import { markReviewHelpful } from '../../actions/reviewsActions.js'

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  count: state.reviews.count
})

const mapDispatchToProps = { markReviewHelpful }

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDisplay)
