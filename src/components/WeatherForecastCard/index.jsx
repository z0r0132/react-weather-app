import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { formatTemp, formatDate } from "../../utils/helpers";
import styles from "./styles";

const useStyles = makeStyles(styles);

const WeatherForecastCard = ({
  id,
  forecast,
  units,
  date: activeDate,
  onDateChange,
}) => {
  const classes = useStyles({
    id: formatDate(id),
    activeDate: formatDate(activeDate),
  });

  const {
    dt_txt: dt,
    main: { temp },
  } = forecast;

  const temperature = useMemo(() => formatTemp(temp, units), [temp, units]);
  const date = useMemo(() => formatDate(dt), [dt]);

  const handleClick = useCallback(() => {
    onDateChange(id);
  }, [id, onDateChange]);

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="cloudy sky"
        image="https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?cs=srgb&dl=pexels-pixabay-531756.jpg&fm=jpg"
        title="cloudy sky"
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.h2}
          gutterBottom
          variant="h2"
          component="h2"
          color="inherit"
        >
          {temperature}
        </Typography>
        <Typography
          className={classes.h5}
          gutterBottom
          variant="h5"
          component="h2"
          color="inherit"
        >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

WeatherForecastCard.propTypes = {
  id: PropTypes.string,
  forecast: PropTypes.object.isRequired,
  units: PropTypes.string,
  onDateChange: PropTypes.func,
};
export default WeatherForecastCard;
