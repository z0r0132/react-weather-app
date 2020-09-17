import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

import WeatherForecastCarousel from "../WeatherForecastCarousel";

import styles from "./styles";

const useStyles = makeStyles(styles);

const WeatherCardList = (props) => {
  const { units, weatherInfo, data, isLoading, onGetWeatherForecast } = props;

  const classes = useStyles();

  useEffect(() => {
    onGetWeatherForecast();
  }, [onGetWeatherForecast]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <WeatherForecastCarousel
      carouselClass={classes.carousel}
      units={units}
      weatherInfo={weatherInfo}
      data={data}
    />
  );
};

WeatherCardList.defaultProps = {
  weatherInfo: {},
};

WeatherCardList.propTypes = {
  units: PropTypes.string,
  weatherInfo: PropTypes.object.isRequired,
};

export default WeatherCardList;
