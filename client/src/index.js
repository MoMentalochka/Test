import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {compose, createStore,applyMiddleware} from 'redux';
import {rootReducer} from './redux/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

/**
 * Создаем стор объединяя редюсеры и подключая мидлвар для ассинхронных событий, а также тулзы для мониторинга состояний
 *
 */
 export const store = createStore(rootReducer, compose(
   applyMiddleware(
     thunk
   ),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ))
const app = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
