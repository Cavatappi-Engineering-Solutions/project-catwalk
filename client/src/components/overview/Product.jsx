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
                {console.log(this.props.product)}
            </div>
        )
    }       
}

export default Product;