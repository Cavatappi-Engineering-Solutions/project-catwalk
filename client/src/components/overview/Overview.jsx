import React from 'react'
import Product from './Product.jsx'
import SelectStyles from './SelectStyles.jsx'
import Carousel from './Carousel.jsx'
import AddToCart from './AddToCart.jsx'
import DefaultView from './DefaultView.jsx'
import ProductDescription from './ProductDescription.jsx'
import Features from './Features.jsx'
import Share from './Share.jsx'
import Cavatappi from '../../assets/icons/cavatappi.png'

class Overview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: false,
      icon: false,
      quantity: '',
      currentProduct: '',
      currentSelectedStyle: 0,
      length: 0,
      checkMark: false
    }
    this.imageGallery = this.imageGallery.bind(this)
    this.changeMainPhoto = this.changeMainPhoto.bind(this)
    this.changeSKU = this.changeSKU.bind(this)
    this.changeView = this.changeView.bind(this)
    this.changeIcon = this.changeIcon.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
    this.previousStyle = this.previousStyle.bind(this)
    this.nextStyle = this.nextStyle.bind(this)
    this.changeCheckMark = this.changeCheckMark.bind(this)
    this.addToCartClick = this.addToCartClick.bind(this)
  }

  componentDidMount () {
    console.log(this.props)
    const { retrieveProducts, retrieveStyles, id } = this.props
    retrieveProducts(id)
    retrieveStyles(id)
  }

  imageGallery () {
    const { view, length, currentSelectedStyle } = this.state
    const { productStyles } = this.props
    if (view) {
      return <Carousel
      productStyles={ productStyles }
      currentSelectedStyle= { currentSelectedStyle }
      length={ length }
      currentStylePhotos={ productStyles.results?.[currentSelectedStyle].photos }
      previousStyle={ this.previousStyle }
      nextStyle={ this.nextStyle }
      changeView={ this.changeView }
      changeMainPhoto={ this.changeMainPhoto }
      />
    } else {
      return <DefaultView
      productStyles={ productStyles }
      currentSelectedStyle={ currentSelectedStyle }
      currentStylePhotos={ productStyles.results?.[currentSelectedStyle].photos }
      changeView={ this.changeView }
      changeMainPhoto={ this.changeMainPhoto }
      length={ length }
      previousStyle={ this.previousStyle }
      nextStyle={ this.nextStyle }
      />
    }
  }

  changeMainPhoto (index) {
    this.setState({ length: index })
  }

  changeSKU (quantity) {
    this.setState({ quantity: quantity })
  }

  changeView () {
    this.setState({ view: !this.state.view })
  }

  changeIcon () {
    this.setState({ icon: !this.state.icon })
  }

  changeSelectedStyle (index) {
    this.setState({ currentSelectedStyle: index, length: 0 })
  }

  changeCheckMark () {
    this.setState({ checkMark: !this.state.checkMark })
  }

  addToCartClick () {
    window.alert('Items Has Been Added To Your Cart')
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
    const { currentSelectedStyle, quantity, icon, checkMark } = this.state
    const { product, productStyles, ratings } = this.props
    return (
      <main>
        <h1 id='logo'><img src={ Cavatappi } className='cavatappi_logo' alt='Cavatappi Logo'/>CAVATAPPI</h1>
        <div id='overview'>
          <div id='combined_top_bottom'>
            <div id='combined_view_product_information'>
              <div id='view'>
                { this.imageGallery() }
              </div>
              <div id='product_information'>
                <div id='product_info'>
                  <Product
                  product={ product }
                  ratings={ ratings.ratings }
                  total={ ratings.total }
                  />
                </div>
                <div id='product_styles'>
                  <SelectStyles
                  productStyles={ productStyles }
                  currentSelectedStyle= { currentSelectedStyle }
                  changeSelectedStyle={ this.changeSelectedStyle }
                  currentStyle={ productStyles.results?.[currentSelectedStyle] }
                  checkMark={ checkMark }
                  changeCheckMark={ this.changeCheckMark }
                  />
                </div>
                <div id='add_to_cart'>
                  <AddToCart
                  quantity={ quantity }
                  productStyles={ productStyles }
                  currentSelectedStyle= { currentSelectedStyle }
                  changeSKU={ this.changeSKU }
                  currentStyle={ productStyles.results?.[currentSelectedStyle] }
                  icon={ icon }
                  changeIcon={ this.changeIcon }
                  addToCartClick={ this.addToCartClick }
                  />
                </div>
                <div>
                  <Share />
                </div>
              </div>
            </div>
            <div id='product_description_feature'>
              <div id='product_description'>
                <ProductDescription product={ product }/>
              </div>
              <div id='product_features'>
                <Features productFeatures={ product.features }/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Overview
