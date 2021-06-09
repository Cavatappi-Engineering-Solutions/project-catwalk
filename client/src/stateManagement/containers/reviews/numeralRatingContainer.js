import {connect} from 'react-redux';
import NumeralRating from '../../../components/reviews/numeralRating.jsx';

// state.meta.ratings
const mapState = (state) => ({ratings: {
  "0": "3",
  "1": "1",
  "3": "2",
  "4": "15",
  "5": "5"}
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(NumeralRating);