import { groupWeatherDataByDate } from "../utils/helpers";

export const weatherForecastStateSelector = (state) => state.weatherForecast;

export const getWeatherInfoSelector = (state) => {
  const {
    data: { list = [] },
  } = weatherForecastStateSelector(state);
  return groupWeatherDataByDate(list);
};

export const getChartDataSelector = (state) => {
  const { date } = weatherForecastStateSelector(state);
  const weatherInfo = getWeatherInfoSelector(state);
  return weatherInfo[date] || weatherInfo[Object.keys(weatherInfo)[0]];
};
