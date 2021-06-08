import {combineReducers} from 'redux';
import reviewsReducer from './reviewsReducer.js'

export default combineReducers({
  reviews: reviewsReducer
});