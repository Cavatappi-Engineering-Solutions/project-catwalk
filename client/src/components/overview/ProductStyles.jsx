import React from 'react';

class ProductStyles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.styles();
    }

    render() {
        return(
            <div className='product_information'>
                {console.log(this.props.productStyles)}
            </div>
        )
    }
}

export default ProductStyles;