import { connect } from 'react-redux'
import BarGraph from '../../../components/reviews/barGraph.jsx'

const mapStateToProps = (state) => ({
  ratings: state.ratings.ratings,
  total: state.ratings.total
})

export default connect(mapStateToProps)(BarGraph)
