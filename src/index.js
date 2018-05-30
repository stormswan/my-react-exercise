import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainManue from './MainManue'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(  
    <MainManue />
, document.getElementById('root'));
registerServiceWorker();
