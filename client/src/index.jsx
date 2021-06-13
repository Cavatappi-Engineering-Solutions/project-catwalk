import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './stateManagement/reducers'
import { OverviewContainer } from './stateManagement/containers/overview'
import RatingsAndReviews from './stateManagement/containers/reviews/ratingsAndReviewsContainer.js'
import QuestionsAndAnswersContainer from './stateManagement/containers/questions/questionsContainer.js'

const App = () => {
  return (
    <div>
      <OverviewContainer />
      <RatingsAndReviews />
      <QuestionsAndAnswersContainer />
    </div>
  )
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
