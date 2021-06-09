import {connect} from 'react-redux';
import NumeralRating from '../../../components/reviews/numeralRating.jsx';

const mapState = (state) => ({ratings: state.ratings})

export default connect(mapState)(NumeralRating);