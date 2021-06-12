import { connect } from 'react-redux'
import Header from '../../../components/reviews/header.jsx'

const mapStateToProps = (state) => ({ reviews: state.reviews })

export default connect(mapStateToProps)(Header)
