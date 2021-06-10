import { connect } from 'react-redux'
import BarGraph from '../../../components/reviews/barGraph.jsx'

const mapState = (state) => ({ ratings: state.ratings })

export default connect(mapState)(BarGraph)
