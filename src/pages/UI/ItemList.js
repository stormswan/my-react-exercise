import React, { Component } from 'react'
import Item from './Item'

export default class ItemList extends Component {
  render() {
    var rows = []
    this.props.items.forEach(item => {
        if(!this.props.keyWords || item.name.toLowerCase().includes(this.props.keyWords)){
            rows.push(<Item key={item.id} name={item.name} price={item.price}/>)
        }
    });
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
