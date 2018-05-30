import React, { Component } from 'react'
import SearchInput from '../UI/SearchInput'

import { connect } from 'react-redux'
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchInput)//SearchBar
