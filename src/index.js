import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/store';

/**
 * You should wrap your App component in a provider to give it access to redux
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
 */

const Index = () =>
    <App />;

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
