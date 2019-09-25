import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addShuttle } from './actions/shuttles';

const store = configureStore();

store.dispatch(addShuttle({ 
  origin: 'Rossland',
  destination: 'Neptune Creek',
  date: 'Oct 1',
  time: '2pm',
  spots: 3,
  cost: 5 }));

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
