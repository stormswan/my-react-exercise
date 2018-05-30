import React, { Component } from 'react'


export default class SearchInput extends Component {

  updateSearchKeyWords = (e) =>{
    this.props.setSearchKeyWords(e.target.value);
  }
  

  render() {
    return (
      <div>
        <input type='text' onChange={this.updateSearchKeyWords}/>
      </div>
    )
  }
}
