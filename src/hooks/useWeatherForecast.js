import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getWeatherForecastsRequest,
  getWeatherForecastSuccess,
  getWeatherForecastError,
} from "../actions/weatherForecast";
import { GET_WEATHER_FORECAST_START } from "../constants/weatherForecast";
import { weatherForecastStateSelector } from "../selectors";

import { fetchWeatherForecast } from "../utils/api";

export const useWeatherForecast = () => {
  const dispatch = useDispatch();

  const dispatchGetWeatherForecast = useCallback(async () => {
    try {
      dispatch(getWeatherForecastsRequest());
      const data = await fetchWeatherForecast();
      dispatch(getWeatherForecastSuccess({ data }));
    } catch (error) {
      dispatch(getWeatherForecastError({ error }));
    }
  }, [dispatch]);

  const { action, error, data } = useSelector(weatherForecastStateSelector);

  const isLoading = GET_WEATHER_FORECAST_START === action;

  return {
    dispatchGetWeatherForecast,
    data,
    action,
    error,
    isLoading,
  };
};
