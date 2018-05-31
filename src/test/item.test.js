import Item from '../UI/Item'

import React from 'react';
import {
    shallow, mount
} from 'enzyme';
import App from '../App';
// import sinon from 'sinon';

const inputName = 'football'
const inputPrice = 100

it('renders without crashing', () => {
    shallow( <App /> );
});

/**
 * Unlike the previous smoke test using ReactDOM.render(), this test only renders <App> and doesn’t go deeper. 
 * For example, even if <App> itself renders a <Button> that throws, this test will pass. Shallow rendering is 
 * great for isolated unit tests, but you may still want to create some full rendering tests to ensure the
 * components integrate correctly. Enzyme supports full rendering with mount(), and you can also use it for
 * testing state changes and component lifecycle.
 */
it('test item component - shallow', () => {
    //   const div =document.createElement('div')
    //   ReactDOM.render()

    const itemCon = shallow( <Item name={inputName} price={inputPrice}/>);
    const itemHtml = <tr><td>{inputName}</td><td>{inputPrice}</td></tr>
    //  expect(itemCon.contains(itemHtml)).toEqual(true)
    expect(itemCon).toContainReact(itemHtml) //use 'jest-enzyme', as same as above
})


it('test props',() => {
    const itemCon = mount( <Item name={inputName} price={inputPrice}/>);
    expect(itemCon.props().name).toEqual(inputName)
}
)