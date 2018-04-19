import React from 'react';
import ReactDOM from 'react-dom';
import RentalApp from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<RentalApp /> , document.getElementById('root'));
registerServiceWorker();
