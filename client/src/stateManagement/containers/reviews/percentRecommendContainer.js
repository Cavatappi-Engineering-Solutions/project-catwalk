import { connect } from 'react-redux'
import PercentRecommend from '../../../components/reviews/percentRecommend.jsx'

const mapState = (state) => ({ recommended: state.recommended })

export default connect(mapState)(PercentRecommend)
