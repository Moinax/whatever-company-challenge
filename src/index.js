import React from 'react';
import ReactDOM from 'react-dom';
import StyledApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StyledApp />, document.getElementById('root'));
registerServiceWorker();
