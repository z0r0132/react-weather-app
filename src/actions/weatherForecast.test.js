import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  getWeatherForecastAction,
  toggleUnitsAction,
  dateChange,
} from "../actions/weatherForecast";
import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
  TOGGLE_TEMP_UNITS,
  DATE_CHANGE,
} from "../constants/weatherForecast";

import { dummyWeatherForecastData } from "./dummyData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const OPENWEATHERAPIKEY = "75f972b80e26f14fe6c920aa6a85ad57";

describe("weatherForecast actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates a GET_WEATHER_FORECAST_ERROR when an invalid statusCode is returned", () => {
    const location = "Munich,de";
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${OPENWEATHERAPIKEY}&units=imperial&cnt=40`;
    fetchMock.getOnce(openWeatherUrl, {
      status: 500,
      body: new Error("unexpected response"),
    });

    const expectedActions = [
      { type: GET_WEATHER_FORECAST_START },
      {
        type: GET_WEATHER_FORECAST_ERROR,
        payload: { error: new Error("unexpected response") },
      },
    ];

    const store = mockStore({ weatherForecast: {} });

    return store.dispatch(getWeatherForecastAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates a GET_WEATHER_FORECAST_SUCCESS when successfully fetched weather forecast", () => {
    const location = "Munich,de";
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${OPENWEATHERAPIKEY}&units=imperial&cnt=40`;
    fetchMock.getOnce(openWeatherUrl, {
      status: 200,
      body: dummyWeatherForecastData,
    });

    const expectedActions = [
      { type: GET_WEATHER_FORECAST_START },
      {
        type: GET_WEATHER_FORECAST_SUCCESS,
        payload: { data: dummyWeatherForecastData },
      },
    ];

    const store = mockStore({
      weatherForecast: {},
    });

    return store.dispatch(getWeatherForecastAction()).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });

  it("should create an action to toggle temperature units", () => {
    const units = "celsius";
    const expectedAction = {
      type: TOGGLE_TEMP_UNITS,
      payload: units,
    };
    expect(toggleUnitsAction(units)).toEqual(expectedAction);
  });

  it("should create an action to change date", () => {
    const date = "2020-09-18";
    const expectedAction = {
      type: DATE_CHANGE,
      payload: date,
    };
    expect(dateChange(date)).toEqual(expectedAction);
  });
});
