import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeatherForecastAction } from "../actions/weatherForecast";
import { GET_WEATHER_FORECAST_START } from "../constants/weatherForecast";
import { weatherForecastStateSelector } from "../selectors";

export const useWeatherForecast = () => {
  const dispatch = useDispatch();

  const dispatchGetWeatherForecast = useCallback(() => {
    dispatch(getWeatherForecastAction());
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
