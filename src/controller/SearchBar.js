import React, { Component } from 'react'
import ItemList from '../UI/ItemList'
import SearchInput from './SearchInput'

export class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {searchKeyWords: 'o'}
  }

  setSearchKeyWords = (keyWords) =>{
    this.setState({
      searchKeyWords: keyWords
    })
  }
  

  render() {
    return (
      <div>
        <SearchInput setSearchKeyWords={this.setSearchKeyWords}/>
        <ItemList items = {this.props.items} keyWords = {this.state.searchKeyWords} />
      </div>
    )
  }
}

export default SearchBar
