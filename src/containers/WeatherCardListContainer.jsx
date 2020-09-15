import * as React from "react";

import WeatherCardList from "../components/WeatherCardList";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

const WeatherCardListContainer = () => {
  const { data, isLoading, dispatchGetWeatherForecast } = useWeatherForecast();

  return (
    <WeatherCardList
      data={data}
      isLoading={isLoading}
      onGetWeatherForecast={dispatchGetWeatherForecast}
    />
  );
};

export default WeatherCardListContainer;
