import React, { useEffect } from "react";

import TemperatureToggle from "../../components/TemperatureToggle";
import WeatherCardList from "../../components/WeatherCardList";

import { useWeatherForecast } from "../../hooks/useWeatherForecast";

const WeatherCardListContainer = () => {
  const {
    units,
    weatherInfo,
    data,
    isLoading,
    dispatchGetWeatherForecast,
    dispatchToggleUnits,
  } = useWeatherForecast();

  useEffect(() => {
    dispatchGetWeatherForecast();
  }, [dispatchGetWeatherForecast]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TemperatureToggle units={units} onToggleUnits={dispatchToggleUnits} />
      <WeatherCardList
        units={units}
        weatherInfo={weatherInfo}
        data={data}
        isLoading={isLoading}
      />
    </>
  );
};

export default WeatherCardListContainer;
