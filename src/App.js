import React from 'react';
import './App.css';

import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';

import { Provider } from 'react-redux';
import Header from './components/header';

import { initStore } from './store';
const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
