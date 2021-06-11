import React from 'react'
import Product from './Product.jsx'
import SelectStyles from './SelectStyles.jsx'
import Carousel from './Carousel.jsx'
import AddToCart from './AddToCart.jsx'
import DefaultView from './DefaultView.jsx'
import NumeralRating from '../reviews/numeralRating.jsx'
import StarRating from '../reviews/starRating.jsx'

class Overview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: false,
      currentProduct: '',
      currentPhoto: 0,
      currentSelectedStyle: 0,
      length: 0,
      quantity: ''
      // sizeSelected: false,
    }
    this.previousStyle = this.previousStyle.bind(this)
    this.nextStyle = this.nextStyle.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
    this.imageGallery = this.imageGallery.bind(this)
    this.changeView = this.changeView.bind(this)
    this.changeSKU = this.changeSKU.bind(this)
    this.changeMainPhoto = this.changeMainPhoto.bind(this)
  }

  componentDidMount () {
    const { retrieveProducts, retrieveStyles } = this.props
    retrieveProducts()
    retrieveStyles()
  }

  imageGallery () {
    const { view, length, currentSelectedStyle, currentPhoto } = this.state
    const { productStyles } = this.props
    if (view) {
      return <Carousel
      productStyles={ productStyles }
      previousStyle={ this.previousStyle }
      nextStyle={ this.nextStyle }
      length={ length }
      currentSelectedStyle= { currentSelectedStyle }
      changeView={ this.changeView }
      />
    } else {
      return <DefaultView
      productStyles={ productStyles }
      currentSelectedStyle={ currentSelectedStyle }
      currentPhoto={ currentPhoto }
      changeView={ this.changeView }
      changeMainPhoto={ this.changeMainPhoto }
      length={ length }
      previousStyle={ this.previousStyle }
      nextStyle={ this.nextStyle }
      />
    }
  }

  changeMainPhoto (index) {
    this.setState({ currentPhoto: index, length: index })
  }

  changeSKU (quantity) {
    this.setState({ quantity: quantity })
  }

  changeView () {
    this.setState({ view: !this.state.view })
  }

  changeSelectedStyle (index) {
    this.setState({ currentSelectedStyle: index, length: 0 })
  }

  previousStyle () {
    const { length, currentSelectedStyle } = this.state
    const { productStyles } = this.props
    if (length > 0) {
      this.setState({ length: Math.abs(length) - 1 })
    } else {
      this.setState({ length: productStyles.results[currentSelectedStyle].photos.length - 1 })
    }
  }

  nextStyle () {
    const { length, currentSelectedStyle } = this.state
    const { productStyles } = this.props
    if (length < productStyles.results[currentSelectedStyle].photos.length - 1) {
      this.setState({ length: length + 1 })
    } else {
      this.setState({ length: 0 })
    }
  }

  render () {
    const { currentSelectedStyle, quantity } = this.state
    const { product, productStyles, ratings } = this.props
    return (
      <div>
        <section id='view'>
          { this.imageGallery() }
        </section>
        <section id='ratings' className='container'>
          <div className='container-row'>
          <NumeralRating ratings={ ratings }/>
          <StarRating ratings={ ratings }/>
          </div>
        </section>
        <section id='product_information'>
          <Product product={ product }/>
        </section>
        <section id='product_styles'>
          <SelectStyles
          productStyles={ productStyles }
          currentSelectedStyle= { currentSelectedStyle }
          changeSelectedStyle={ this.changeSelectedStyle }
          />
        </section>
        <section id='add_to_cart'>
          <AddToCart
          quantity={ quantity }
          productStyles={ productStyles }
          currentSelectedStyle= { currentSelectedStyle }
          changeSKU={ this.changeSKU }
          />
        </section>
      </div>
    )
  }
}

export default Overview
