import * as React from "react";

import WeatherCardList from "../components/WeatherCardList";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

const WeatherCardListContainer = () => {
  const {
    units,
    weatherInfo,
    data,
    isLoading,
    dispatchGetWeatherForecast,
  } = useWeatherForecast();

  return (
    <WeatherCardList
      units={units}
      weatherInfo={weatherInfo}
      data={data}
      isLoading={isLoading}
      onGetWeatherForecast={dispatchGetWeatherForecast}
    />
  );
};

export default WeatherCardListContainer;
