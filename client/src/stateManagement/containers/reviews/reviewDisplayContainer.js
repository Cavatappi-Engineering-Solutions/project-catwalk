import { connect } from 'react-redux'
import ReviewDisplay from '../../../components/reviews/reviewDisplay.jsx'

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  count: state.reviews.count
})

export default connect(mapStateToProps)(ReviewDisplay)
