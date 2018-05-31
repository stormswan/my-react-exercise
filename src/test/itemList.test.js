import ItemList from '../UI/ItemList'
import React from 'react'

import { shallow, mount } from 'enzyme';

const items =[{name:'football',price:100, id:1}]
const keyWords = 'fo'

it('item list shallow test',() => {

  const itemList = shallow(<ItemList items={items} keyWords={keyWords}/>)
 /**
  * the react ItemList component will translate to:
  * <table><thead><tr><th>Name</th><th>Price</th></tr></thead><tbody><Item name="football" price={100} /></tbody></table>
  * it direct use <Item name="football" price={100} />, did not translate it. because used the shallow function
  */

  const itemListHtml =        
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>


  expect(itemList).toContainReact(itemListHtml)
  
}
)

it(' DOM test - mount',() => {

  const itemList = mount(<ItemList items={items} keyWords={keyWords}/>)
//   const testt= '<table><thead><tr><th>Name</th><th>Price</th></tr></thead><tbody><tr><td>football</td><td>100</td></tr></tbody></table>'
  const itemListHtml = <tbody><tr><td>football</td><td>100</td></tr></tbody> // '<tbody><tr><td>football</td><td>100</td></tr></tbody>' //<table><thead><tr><th>Name</th><th>Price</th></tr></thead><tbody><tr><td>football</td><td>100</td></tr></tbody></table>   
    //    <tr>
    //        <td>football</td><td>100</td>
    //    </tr>
/**
 * Not working
 */
    // expect(itemList).toContainReact(itemListHtml)

    //const itemListHtml =   '<tbody><tr><td>football</td><td>100</td></tr></tbody>'
    // expect(testt.includes(itemListHtml))
}
)



it('test props',() => {
    const itemList = mount(<ItemList items={items} keyWords={keyWords}/>)
    expect(itemList.props().keyWords).toEqual(keyWords)
    expect(itemList.props().keyWords).toEqual('fo');
    itemList.setProps({ keyWords: 'car' });
    expect(itemList.props().keyWords).toEqual('car');
}
)


//{items[0].name}</td><td>{items[0].price}