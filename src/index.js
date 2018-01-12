import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/styles/style.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
