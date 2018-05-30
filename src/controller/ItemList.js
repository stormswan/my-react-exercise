import React, { Component } from 'react'
import ItemList from '../UI/ItemList'
import SearchInput from './SearchInput'

import { connect } from 'react-redux'
import { updateKeyWords } from '../reduxjs/actions'


//<ItemList items = {this.props.items} keyWords = {this.state.searchKeyWords} />
const mapStateToPropsList = (state, props) => 
  ({
    items: props.items,
    keyWords: state.keyWords
  })

const mapDispatchToPropsList = disptach => 
  ({  }) 




export default connect(mapStateToPropsList,mapDispatchToPropsList)(ItemList)
