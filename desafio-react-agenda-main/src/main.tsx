import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApiProvider } from './context/ApiContext';
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
