import constants from './constants'
import { combineReducers } from 'redux'

export const keyWords = (state = '', action) => 
	(action.type === constants.UPDATE_SEARCH) ? 
		 action.payload :
     state


export const selectedItems = (state = [] , action) => 
  (action.type === constants.SELECT_ITEM) ? action.payload: state

export default combineReducers({
  keyWords: keyWords,
  selectedItems: selectedItems
})