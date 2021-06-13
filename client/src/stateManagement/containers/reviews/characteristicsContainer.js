import { connect } from 'react-redux'
import Characteristics from '../../../components/reviews/characteristics.jsx'

const mapState = (state) => ({ characteristics: state.characteristics })

export default connect(mapState)(Characteristics)
