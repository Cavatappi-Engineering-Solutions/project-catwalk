import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import rootReducer from './stateManagement/reducers'
import { OverviewContainer } from './stateManagement/containers/overview'
import RatingsAndReviews from './stateManagement/containers/reviews/ratingsAndReviewsContainer.js'
import QuestionsAndAnswersContainer from './stateManagement/containers/questions/questionsContainer.js'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path='/:id' render={({ match }) =>
          <OverviewContainer id={match.params.id}/>}
        />
          <RatingsAndReviews />
          <QuestionsAndAnswersContainer />
      </Router>
    </React.Fragment>
  )
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
