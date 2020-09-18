import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getWeatherForecastAction,
  toggleUnitsAction,
} from "../actions/weatherForecast";
import { GET_WEATHER_FORECAST_START } from "../constants/weatherForecast";
import {
  weatherForecastStateSelector,
  getWeatherInfoSelector,
} from "../selectors";

export const useWeatherForecast = () => {
  const dispatch = useDispatch();

  const dispatchGetWeatherForecast = useCallback(() => {
    dispatch(getWeatherForecastAction());
  }, [dispatch]);

  const dispatchToggleUnits = useCallback(
    (units) => {
      dispatch(toggleUnitsAction(units));
    },
    [dispatch]
  );

  const { units, action, error, data } = useSelector(
    weatherForecastStateSelector
  );
  const weatherInfo = useSelector(getWeatherInfoSelector);

  const isLoading = GET_WEATHER_FORECAST_START === action;

  return {
    dispatchGetWeatherForecast,
    dispatchToggleUnits,
    units,
    weatherInfo,
    data,
    action,
    error,
    isLoading,
  };
};
