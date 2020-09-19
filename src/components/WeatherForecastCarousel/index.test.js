import React from "react";
import { shallow } from "enzyme";
import WeatherForecastCarousel, { NextArrow, PrevArrow } from ".";

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

it("renders NextArrow icon correctly", () => {
  const wrapper = shallow(<NextArrow />);
  expect(wrapper.find(".nextArrow").exists()).toBeTruthy();
});

it("renders PrevArrow icon correctly", () => {
  const wrapper = shallow(<PrevArrow />);
  expect(wrapper.find(".prevArrow").exists()).toBeTruthy();
});
