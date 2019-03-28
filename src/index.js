import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/store';

const Index = () =>
  <Provider store={store}>
    <App />
  </Provider>;

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
