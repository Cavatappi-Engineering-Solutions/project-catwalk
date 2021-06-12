import { connect } from 'react-redux'
import NumeralRating from '../../../components/reviews/numeralRating.jsx'

const mapState = (state) => ({
  ratings: state.ratings.ratings,
  total: state.ratings.total
})

export default connect(mapState)(NumeralRating)
