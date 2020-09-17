import React from "react";
import { shallow } from "enzyme";
import WeatherForecastCarousel from ".";

const wrap = (props = {}) => shallow(<WeatherForecastCarousel {...props} />);

it("renders correctly", () => {
  const wrapper = wrap({
    carouselClass: "carousel",
    data: { list: ["sampleData"] },
    weatherInfo: { sampleKey: [{}] },
  });
  expect(wrapper.find(".carousel").exists()).toBeTruthy();
});

it("renders null when list is empty", () => {
  const wrapper = wrap({
    carouselClass: "carousel",
    data: { list: [] },
    weatherInfo: { sampleKey: [{}] },
  });
  expect(wrapper.find(".carousel").exists()).toBeFalsy();
});
