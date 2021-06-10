import { combineReducers } from 'redux'
import productReducer from './product'
import productStylesReducer from './selectStyles'
import reviewsReducer from './reviewsReducer.js'
import ratingsReducer from './ratingsReducer.js'
import recommendReducer from './recommendReducer.js'
import characterReducer from './characterReducer.js'

export default combineReducers({
  product: productReducer,
  productStyles: productStylesReducer,
  reviews: reviewsReducer,
  ratings: ratingsReducer,
  recommended: recommendReducer,
  characteristics: characterReducer
})
