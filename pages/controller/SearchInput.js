import React, { Component } from 'react'
import SearchInput from '../UI/SearchInput'
import  withRedux  from 'next-redux-wrapper'
// import { connect } from 'react-redux'
import { updateKeyWords } from '../reduxjs/actions'

const mapStateToProps = (state, props) => 
  ({
  })

const mapDispatchToProps = disptach => 
  ({
    setSearchKeyWords(keyWords) {
      disptach(
        updateKeyWords(keyWords)
      )
    }
  }) 

export default withRedux(mapStateToProps,mapDispatchToProps)(SearchInput)//SearchBar
