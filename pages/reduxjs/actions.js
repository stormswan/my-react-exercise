import constants from './constants'


export const updateKeyWords = (keyWords) => {
  return {
      type: constants.UPDATE_SEARCH,
      payload: keyWords
  }
}


export const selectItems = (selectedItems) => {
  return{
      type: constants.SELECT_ITEM,
      payload: selectedItems
  }
}

