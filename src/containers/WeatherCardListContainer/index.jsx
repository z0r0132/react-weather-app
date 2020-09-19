import React, { useEffect } from "react";

import TemperatureToggle from "../../components/TemperatureToggle";
import WeatherCardList from "../../components/WeatherCardList";
import WeatherSegmentsBarChart from "../../components/WeatherSegmentsBarChart";

import { useWeatherForecast } from "../../hooks/useWeatherForecast";

const WeatherCardListContainer = () => {
  const {
    units,
    chartData,
    weatherInfo,
    data,
    isLoading,
    dispatchGetWeatherForecast,
    dispatchToggleUnits,
    dispatchDateChange,
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
        onDateChange={dispatchDateChange}
      />
      <WeatherSegmentsBarChart units={units} chartData={chartData} />
    </>
  );
};

export default WeatherCardListContainer;
