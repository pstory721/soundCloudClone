import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import PlayerProvider from './context/playerContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
    <Provider store={store}>
        <App />
      </Provider>
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
