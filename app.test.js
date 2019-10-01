import React from "react";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  it("it should render without error", () => {
    const component = shallow(<App />);
    const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1);
  });
});
