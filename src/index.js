import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainManue from './MainManue'
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './reduxjs'
// import storeInitData from './reduxjs/initState'
import { Provider } from 'react-redux'


const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

var  storeInitData ={
    keyWords: '',
    selectedItems:[]
}

const store = storeFactory(storeInitData)
store.subscribe(saveState)

window.React = React
window.store = store


ReactDOM.render(  
<Provider store = {store}>
    <MainManue />
</Provider>, document.getElementById('root'));
registerServiceWorker();
