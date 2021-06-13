import { connect } from 'react-redux'
import Header from '../../../components/reviews/header.jsx'
import { changeSort } from '../../actions/reviewsActions.js'

const mapStateToProps = (state) => ({
  total: state.ratings.total,
  sort: state.reviews.sort
})

const mapDispatchToProps = {
  handleSort: changeSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
