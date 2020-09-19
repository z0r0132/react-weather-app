import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getWeatherForecastAction,
  toggleUnitsAction,
  dateChange,
} from "../actions/weatherForecast";
import { GET_WEATHER_FORECAST_START } from "../constants/weatherForecast";
import {
  weatherForecastStateSelector,
  getWeatherInfoSelector,
  getChartDataSelector,
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

  const dispatchDateChange = useCallback(
    (date) => {
      dispatch(dateChange(date));
    },
    [dispatch]
  );

  const { date, units, action, error, data } = useSelector(
    weatherForecastStateSelector
  );
  const weatherInfo = useSelector(getWeatherInfoSelector);
  const chartData = useSelector(getChartDataSelector);

  const isLoading = GET_WEATHER_FORECAST_START === action;

  return {
    dispatchGetWeatherForecast,
    dispatchToggleUnits,
    dispatchDateChange,
    date,
    units,
    chartData,
    weatherInfo,
    data,
    action,
    error,
    isLoading,
  };
};
