import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
} from "../constants/weatherForecast";

import { fetchWeatherForecast } from "../utils/api";

export const getWeatherForecastsRequest = () => ({
  type: GET_WEATHER_FORECAST_START,
});

export const getWeatherForecastSuccess = (weatherForecast) => ({
  type: GET_WEATHER_FORECAST_SUCCESS,
  payload: weatherForecast,
});

export const getWeatherForecastError = (error) => ({
  type: GET_WEATHER_FORECAST_ERROR,
  payload: error,
});

export const getWeatherForecastAction = () => async (dispatch) => {
  try {
    dispatch(getWeatherForecastsRequest());
    const data = await fetchWeatherForecast();
    dispatch(getWeatherForecastSuccess({ data }));
  } catch (error) {
    dispatch(getWeatherForecastError({ error }));
  }
};
