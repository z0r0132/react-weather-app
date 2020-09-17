import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { getWeatherForecastAction } from "../actions/weatherForecast";
import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
} from "../constants/weatherForecast";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const OPENWEATHERAPIKEY = "75f972b80e26f14fe6c920aa6a85ad57";

const dummyWeatherForecastData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1600171200,
      main: {
        temp: 299.26,
        feels_like: 300.32,
        temp_min: 299.26,
        temp_max: 299.95,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 963,
        humidity: 55,
        temp_kf: -0.69,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.51,
        deg: 311,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-09-15 12:00:00",
    },
    {
      dt: 1600182000,
      main: {
        temp: 299.32,
        feels_like: 300.55,
        temp_min: 299.32,
        temp_max: 299.51,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 962,
        humidity: 55,
        temp_kf: -0.19,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.3,
        deg: 346,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-09-15 15:00:00",
    },
  ],
  city: {
    id: 2867714,
    name: "Munich",
    coord: {
      lat: 48.1374,
      lon: 11.5755,
    },
    country: "DE",
    population: 1260391,
    timezone: 7200,
    sunrise: 1600145468,
    sunset: 1600190803,
  },
};

describe("async weatherForecast actions", () => {
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
});
