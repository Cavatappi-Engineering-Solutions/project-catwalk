import { connect } from 'react-redux'
import NumeralRating from '../../../components/reviews/numeralRating.jsx'

const mapStateToProps = (state) => ({
  ratings: state.ratings.ratings,
  total: state.ratings.total
})

export default connect(mapStateToProps)(NumeralRating)
