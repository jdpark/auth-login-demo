import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProtectedComponent from './ProtectedComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProtectedComponent />, document.getElementById('root'));
registerServiceWorker();
