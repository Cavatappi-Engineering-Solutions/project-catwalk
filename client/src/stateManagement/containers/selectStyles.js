import { connect } from 'react-redux';
import { retrieveProductStyle } from '../actions/selectStyles';
import ProductStyles from '../../components/overview/ProductStyles.jsx';


const mapStateToProps = state => ({
    productStyles: state.productStyles
})

const mapDispatchToProps = dispatch => ({
    styles: () => {
        dispatch(retrieveProductStyle());
    }
})

const ProductStylesContainer = connect(mapStateToProps, mapDispatchToProps)(ProductStyles);

export default ProductStylesContainer;