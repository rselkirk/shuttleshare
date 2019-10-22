import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addShuttle } from './actions/shuttles';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addShuttle({ 
  origin: 'Rossland',
  destination: 'Neptune Creek',
  date: moment(),
  time: moment(),
  spots: 3,
  cost: 5 }));

const state = store.getState();

console.log("test");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
