import React, { useMemo } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

import WeatherForecastCard from "../WeatherForecastCard";

import styles from "./styles";

const useStyles = makeStyles(styles);

const NextArrow = (props) => {
  const { slidesToShow, currentSlide, slideCount, onClick } = props;
  const classes = useStyles({ slidesToShow, currentSlide, slideCount });
  return (
    <div className={classNames(classes.arrow, "nextArrow")} onClick={onClick}>
      <ArrowForward color="inherit" fontSize="large" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { currentSlide, onClick } = props;
  const classes = useStyles({ currentSlide });
  return (
    <div className={classNames(classes.arrow, "prevArrow")} onClick={onClick}>
      <ArrowBack color="inherit" fontSize="large" />
    </div>
  );
};

function WeatherForecastCarousel({ carouselClass, units, weatherInfo, data }) {
  const classes = useStyles();

  const slidesToShow = useMemo(
    () => (window.matchMedia("(max-width: 750px)").matches ? 1 : 3),
    []
  );

  const settings = {
    slidesToShow,
    swipeToSlide: true,
    nextArrow: <NextArrow slidesToShow={slidesToShow} />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow,
        },
      },
    ],
  };
  if (!data?.list?.length) return null;
  return (
    <div className={carouselClass}>
      <Slider {...settings} className={classes.slider}>
        {Object.entries(weatherInfo).map(([key, value]) => (
          <WeatherForecastCard key={key} forecast={value[0]} units={units} />
        ))}
      </Slider>
    </div>
  );
}
export default WeatherForecastCarousel;
