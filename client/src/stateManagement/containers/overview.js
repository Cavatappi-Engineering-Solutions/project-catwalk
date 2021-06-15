import { connect } from 'react-redux'
import { retrieveProduct } from '../actions/product'
import { retrieveProductStyle } from '../actions/selectStyles'
import Overview from '../../components/overview/Overview.jsx'

const mapStateToProps = state => ({
  product: state.product,
  productStyles: state.productStyles,
  ratings: state.ratings
})

const mapDispatchToProps = dispatch => ({
  retrieveProducts: (id) => {
    dispatch(retrieveProduct(id))
  },
  retrieveStyles: (id) => {
    dispatch(retrieveProductStyle(id))
  }
})

export const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview)
