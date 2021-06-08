import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stateManagement/reducers'
import ProductsContainer from './stateManagement/containers/product';
import ProductStyleContainer from './stateManagement/containers/selectStyles';

const App = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ProductsContainer />
      <ProductStyleContainer />
    </div>
  )
}

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));