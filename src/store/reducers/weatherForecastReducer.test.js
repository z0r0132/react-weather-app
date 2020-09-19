import weatherForecastReducer, { initialState } from "./weatherForecastReducer";

import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
  TOGGLE_TEMP_UNITS,
  DATE_CHANGE,
} from "../../constants/weatherForecast";

describe("weatherForecast reducer", () => {
  it("should return the initial state", () => {
    expect(weatherForecastReducer(undefined, {})).toMatchObject(initialState);
  });

  it("should handle GET_WEATHER_FORECAST_START", () => {
    expect(
      weatherForecastReducer(undefined, {
        type: GET_WEATHER_FORECAST_START,
      })
    ).toMatchObject({ ...initialState, action: GET_WEATHER_FORECAST_START });
  });

  it("should handle GET_WEATHER_FORECAST_SUCCESS", () => {
    expect(
      weatherForecastReducer(undefined, {
        type: GET_WEATHER_FORECAST_SUCCESS,
        payload: { data: "Dummy weather data" },
      })
    ).toMatchObject({
      ...initialState,
      action: GET_WEATHER_FORECAST_SUCCESS,
      data: "Dummy weather data",
    });
  });

  it("should handle GET_WEATHER_FORECAST_ERROR", () => {
    expect(
      weatherForecastReducer(undefined, {
        type: GET_WEATHER_FORECAST_ERROR,
        payload: { error: new Error("unexpected response") },
      })
    ).toMatchObject({
      ...initialState,
      action: GET_WEATHER_FORECAST_ERROR,
      error: new Error("unexpected response"),
    });
  });

  it("should handle TOGGLE_TEMP_UNITS", () => {
    expect(
      weatherForecastReducer(undefined, {
        type: TOGGLE_TEMP_UNITS,
        payload: "celsius",
      })
    ).toMatchObject({
      ...initialState,
      action: TOGGLE_TEMP_UNITS,
      units: "celsius",
    });
  });

  it("should handle DATE_CHANGE", () => {
    expect(
      weatherForecastReducer(undefined, {
        type: DATE_CHANGE,
        payload: "2020-09-18",
      })
    ).toMatchObject({
      ...initialState,
      action: DATE_CHANGE,
      date: "2020-09-18",
    });
  });
});
