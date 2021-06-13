import React from 'react'
import Product from './Product.jsx'
import SelectStyles from './SelectStyles.jsx'
import Carousel from './Carousel.jsx'
import SKU from './SKU.jsx'

class Overview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProduct: '',
      currentSelectedStyle: 0,
      length: 0
    }
    this.previousStyle = this.previousStyle.bind(this)
    this.nextStyle = this.nextStyle.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
  }

  componentDidMount () {
    const { retrieveProducts, retrieveStyles } = this.props
    retrieveProducts()
    retrieveStyles()
  }

  changeSelectedStyle (index) {
    this.setState({ currentSelectedStyle: index, length: 0 })
  }

  previousStyle () {
    if (this.state.length > 0) {
      this.setState({ length: Math.abs(this.state.length) - 1 })
    } else {
      this.setState({ length: this.props.productStyles.results[this.state.currentSelectedStyle].photos.length - 1 })
    }
  }

  nextStyle () {
    if (this.state.length < this.props.productStyles.results[this.state.currentSelectedStyle].photos.length - 1) {
      this.setState({ length: this.state.length + 1 })
    } else {
      this.setState({ length: 0 })
    }
  }

  render () {
    const { product, productStyles } = this.props

    return (
      <div>
        <Carousel
        productStyles={ productStyles }
        previousStyle={ this.previousStyle }
        nextStyle={ this.nextStyle }
        length={ this.state.length }
        currentSelectedStyle= { this.state.currentSelectedStyle }
        />
        <Product
        product={ product }
        />
        <SelectStyles
        productStyles={ productStyles }
        currentSelectedStyle= { this.state.currentSelectedStyle }
        changeSelectedStyle={ this.changeSelectedStyle }
        />
        <SKU
        productStyles={ productStyles }
        currentSelectedStyle= { this.state.currentSelectedStyle }
        />
      </div>
    )
  }
}

export default Overview
