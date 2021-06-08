import {combineReducers} from 'redux';
import reviewsReducer from './reviewsReducer.js'
import ratingsReducer from './ratingsReducer.js'

export default combineReducers({
  reviews: reviewsReducer,
  ratings: ratingsReducer
});