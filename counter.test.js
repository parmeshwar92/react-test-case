import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./counter";
configure({ adapter: new Adapter() });

describe("Counter Component", () => {
  it("Render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("adding 2 and 2 equal 4", () => {
    expect(2 + 2).toBe(4);
  });
  //it and test both are equal
  it("start with counter o", () => {
    const component = shallow(<Counter />);
    const text = component.find("p").text();
    expect(text).toEqual("Count: 0");
  });
  it("increments count by 1 when the increment button is clicked", () => {
    const component = shallow(<Counter />);
    const wrapper = component.find("button.increment");
    wrapper.simulate("click");
    const text = component.find("p").text();
    expect(text).toEqual("Count: 1");
  });
  it("decrement count by 1 when the decrement button is clicked", () => {
    const component = shallow(<Counter />);
    const wrapper = component.find("button.decrement");
    wrapper.simulate("click");
    const text = component.find("p").text();
    console.log(wrapper.debug());
    expect(text).toEqual("Count: -1");
  });
  
});
