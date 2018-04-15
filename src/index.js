import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/style.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = configureStore();
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
