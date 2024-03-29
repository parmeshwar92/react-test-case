import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import List from "./list";

configure({adapter :new Adapter()});

describe('List Component',() => {

  it('renders list-items',() => {
    const items = ['one', 'two', 'three'];
    const component = shallow(<List items={items} />);
    const wrapper = component.find('.list-items');
    // Expect the wrapper object to be defined
    expect(wrapper).toBeDefined();
    expect(component.find('.list')).toBeDefined();
  })

 it('render correct text in item',() => {
  const items = ['thor','iron man','spiderman'];
  const wrapper = mount(<List  items ={items}/>);
  console.log(wrapper.debug());
   // Expect the wrapper object to be defined
   expect(wrapper.find('.list-items')).toBeDefined();
   expect(wrapper.find('.item')).toHaveLength(items.length);

 })

 it('render a list items',() =>{
  const items = ['thor','iron man','spiderman'];
  const component = shallow(<List  items ={items}/>);
  const wrapper = component.contains(<li key='thor' className='item'>thor</li>)
  expect(wrapper);
})
})
