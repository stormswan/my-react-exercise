import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'

export default (initialState={}) => {
	console.log(initialState);
	var store = createStore(appReducer,initialState,applyMiddleware(thunk))
	console.log('store.getState()');
	console.log(store.getState());
	
	return store
}