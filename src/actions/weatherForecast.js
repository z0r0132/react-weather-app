import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
} from "../constants/weatherForecast";

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
