import { groupWeatherDataByDate } from "../utils/helpers";

export const weatherForecastStateSelector = (state) => state.weatherForecast;

export const getWeatherInfoSelector = (state) => {
  const {
    data: { list = [] },
  } = weatherForecastStateSelector(state);
  return groupWeatherDataByDate(list);
};
