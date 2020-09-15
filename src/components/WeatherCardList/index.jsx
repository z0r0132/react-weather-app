import React, { useEffect } from "react";

const WeatherCardList = (props) => {
  const { data, isLoading, onGetWeatherForecast } = props;

  useEffect(() => {
    onGetWeatherForecast();
  }, [onGetWeatherForecast]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.list.map(({ dt, visibility }) => (
          <li key={dt}>{visibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherCardList;
