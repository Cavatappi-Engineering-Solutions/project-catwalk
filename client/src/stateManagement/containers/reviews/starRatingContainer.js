import { connect } from 'react-redux'
import StarRating from '../../../components/reviews/starRating.jsx'

const mapState = (state) => ({ ratings: state.ratings })

export default connect(mapState)(StarRating)
