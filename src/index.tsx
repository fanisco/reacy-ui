import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Popups} from 'reacy-ui';

import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {AppContainer} from './containers/AppContainer';
import {rootReducer} from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Popups.Provider>
        <Router>
          <AppContainer/>
        </Router>
      </Popups.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
