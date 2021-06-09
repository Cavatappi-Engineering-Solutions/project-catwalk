import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import RatingsAndReviews from './stateManagement/containers/reviews/ratingsAndReviewsContainer.js'
import rootReducer from './stateManagement/reducers'

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <RatingsAndReviews />
    </div>
  )
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));