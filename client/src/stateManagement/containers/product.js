import { connect } from 'react-redux';
import { retrieveProduct } from '../actions/product';
import Product from '../../components/overview/Product.jsx';


const mapStateToProps = state => ({
    product: state.product
})

const mapDispatchToProps = dispatch => ({
    retrieve: () => {
        dispatch(retrieveProduct());
    }
})

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;