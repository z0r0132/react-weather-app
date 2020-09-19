import React from "react";
import { shallow } from "enzyme";
import WeatherSegmentsBarChart from ".";

const wrap = (props = {}) => shallow(<WeatherSegmentsBarChart {...props} />);

it("renders correctly", () => {
  const wrapper = wrap();
  expect(wrapper.find("Bar").exists()).toBeTruthy();
});
