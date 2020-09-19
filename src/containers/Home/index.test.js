import React from "react";
import { shallow } from "enzyme";
import Home from ".";

const wrap = (props = {}) => shallow(<Home {...props} />);

it("renders correctly", () => {
  const wrapper = wrap();
  expect(wrapper.find("WeatherCardListContainer").exists()).toBeTruthy();
});
