import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, serviceWorker } from 'state-template';

import 'state-template/dist/style/core/css/cagov.core.min.css';
import 'state-template/dist/style/core/css/colorscheme-oceanside.min.css';

import App from './components/App';
import { reducer as home, saga as homeSaga } from './components/HomePage';
import { reducer as campus, saga as campusSaga } from './components/Campus';

const reducers = {
  home,
  campus,
};

const sagas = [
  homeSaga,
  campusSaga,
];

const store = configureStore({ reducers, sagas });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
