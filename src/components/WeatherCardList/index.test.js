import React from "react";
import { shallow } from "enzyme";
import WeatherCardList from ".";

const wrap = (props = {}) => shallow(<WeatherCardList {...props} />);

it("renders WeatherForecastCarousel when isLoading is true", () => {
  const wrapper = wrap({ isLoading: true });
  expect(wrapper.contains("Loading...")).toBeTruthy();
});

it("renders WeatherForecastCarousel when isLoading is false", () => {
  const wrapper = wrap({ isLoading: false });
  expect(wrapper.find("WeatherForecastCarousel")).toHaveLength(1);
});
