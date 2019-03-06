import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap Components
import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/popper.js/dist/popper.min.js';

import './styles/css/master.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
