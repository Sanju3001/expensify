import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import totalExpenses from './selectors/expenses-total';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './playground/promises';

const store = configureStore();
// console.log('test');

// store.dispatch(addExpense({ description: 'Water Bill', amount: 10000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 15000, createdAt: 10000000000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
const total = totalExpenses(state.expenses);

// console.log(total);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));







