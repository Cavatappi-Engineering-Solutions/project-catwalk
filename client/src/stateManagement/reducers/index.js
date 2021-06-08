import { combineReducers } from 'redux';
import productReducer from './product';
import productStylesReducer from './selectStyles';

export default combineReducers({
  product: productReducer,
  productStyles: productStylesReducer
});