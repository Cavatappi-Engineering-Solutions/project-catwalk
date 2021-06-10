import { connect } from 'react-redux'
import { retrieveProduct } from '../actions/product'
import { retrieveProductStyle } from '../actions/selectStyles'
import Overview from '../../components/overview/Overview.jsx'

const mapStateToProps = state => ({
  product: state.product,
  productStyles: state.productStyles
})

const mapDispatchToProps = dispatch => ({
  retrieveProducts: () => {
    dispatch(retrieveProduct())
  },
  retrieveStyles: () => {
    dispatch(retrieveProductStyle())
  }
})

export const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview)