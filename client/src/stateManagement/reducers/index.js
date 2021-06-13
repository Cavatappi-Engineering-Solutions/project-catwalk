import { combineReducers } from 'redux';
import productReducer from './product';
import productStylesReducer from './selectStyles';
import reviewsReducer from './reviewsReducer.js'
import ratingsReducer from './ratingsReducer.js'
import questionsReducer from './QuestionsReducer.js';
import answersReducer from './AnswersReducer.js';

export default combineReducers({
  product: productReducer,
  productStyles: productStylesReducer,
  reviews: reviewsReducer,
  ratings: ratingsReducer,
  questions: questionsReducer,
  answers: answersReducer
});