import React from "react";
import { mount } from "enzyme";
import TemperatureToggle from ".";

const wrap = (props = {}) => mount(<TemperatureToggle {...props} />);

it("renders correctly", () => {
  const wrapper = wrap();
  expect(wrapper.contains("Fahrenheit")).toBeTruthy();
  expect(wrapper.contains("Celsius")).toBeTruthy();
});
