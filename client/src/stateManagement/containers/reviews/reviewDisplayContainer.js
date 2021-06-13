import { connect } from 'react-redux'
import ReviewDisplay from '../../../components/reviews/reviewDisplay.jsx'

const mapStateToProps = (state) => ({ reviews: state.reviews })

export default connect(mapStateToProps)(ReviewDisplay)
