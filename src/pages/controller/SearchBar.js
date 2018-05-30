import React, { Component } from 'react'
import ItemList from './ItemList'
import SearchInput from './SearchInput'



export class SearchBar extends Component {
  render() {
    return (
      <div>
        <SearchInput/>
        <ItemList items = {this.props.items}/>
      </div>
    )
  }
}


export default SearchBar
