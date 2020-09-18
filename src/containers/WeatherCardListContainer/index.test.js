import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";

import WeatherCardListContainer from ".";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  weatherForecast: {
    units: "fahrenheit",
    action: "",
    error: null,
    data: { list: [] },
  },
});

const wrap = (props = {}) =>
  mount(
    <Provider store={store}>
      <WeatherCardListContainer {...props} />
    </Provider>
  );

it("renders correctly", () => {
  const wrapper = wrap();
  expect(wrapper.contains("Fahrenheit")).toBeTruthy();
});
