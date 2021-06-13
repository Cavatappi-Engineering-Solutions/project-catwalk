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
            </div>
        )
    }
}

export default ProductStyles;