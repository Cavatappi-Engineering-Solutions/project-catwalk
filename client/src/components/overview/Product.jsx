import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieve();
    }

    render() {
        return(
            <div className='product_information'>
            </div>
        )
    }       
}

export default Product;