import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Item extends PureComponent {
//   static propTypes = {
//   }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    )
  }
}
