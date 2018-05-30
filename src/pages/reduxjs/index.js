import {thunMiddleware} from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'

export default (initialState={}) => {
	console.log(initialState);
	var store = createStore(appReducer,initialState,composeWithDevTools(applyMiddleware(thunMiddleware)))
	console.log('store.getState()');
	console.log(store.getState());
	
	return store
}