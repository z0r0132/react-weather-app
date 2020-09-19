import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

import WeatherForecastCarousel from "../WeatherForecastCarousel";

import styles from "./styles";

const useStyles = makeStyles(styles);

const WeatherCardList = (props) => {
  const { units, weatherInfo, data, onDateChange } = props;

  const classes = useStyles();

  return (
    <WeatherForecastCarousel
      carouselClass={classes.carousel}
      units={units}
      weatherInfo={weatherInfo}
      data={data}
      onDateChange={onDateChange}
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
