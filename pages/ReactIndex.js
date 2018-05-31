import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainManue from './MainManue'
// import registerServiceWorker from './registerServiceWorker';
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
var rootDoc;
 class ReactIndex extends Component {
   
    componentDidMount = () => {
      window.React = React
        window.store = store
        rootDoc = document.getElementById('root')

    }

  render() {
    return (
        ReactDOM.render(  
            <Provider store = {store}>
                <MainManue />
            </Provider>,rootDoc )
    )
  }
}


export default ReactIndex