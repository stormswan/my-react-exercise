import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers'

export default (initialState={}) => {
	console.log(initialState);
	var store = createStore(appReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
	console.log('store.getState()');
	console.log(store.getState());
	
	return store
}