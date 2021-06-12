import { connect } from 'react-redux'
import StarRating from '../../../components/reviews/starRating.jsx'

const mapStateToProps = (state) => ({
  ratings: state.ratings.ratings,
  total: state.ratings.total
})

export default connect(mapStateToProps)(StarRating)
