import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "@material-ui/core/styles";
import WeatherForecastCard from ".";

import theme from "../../theme";

const wrap = (props = {}) =>
  mount(
    <ThemeProvider theme={theme}>
      <WeatherForecastCard {...props} />
    </ThemeProvider>
  );

it("renders correctly", () => {
  const wrapper = wrap({
    forecast: {
      dt_txt: "2020-09-17 12:00:00",
      main: { temp: 72.54 },
    },
    units: "fahrenheit",
  });

  expect(wrapper.contains("17 Sep 20")).toBeTruthy();
});
