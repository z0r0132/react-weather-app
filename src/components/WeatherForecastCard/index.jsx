import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { formatTemp, formatDate } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    color: theme.palette.common.white,
    minWidth: 200,
    position: "relative",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  h2: {
    fontWeight: 400,
  },
  h5: {
    textTransform: "capitalize",
  },
}));

const WeatherForecastCard = ({ forecast, units }) => {
  const classes = useStyles();
  const {
    dt_txt: dt,
    main: { temp },
  } = forecast;

  const temperature = useMemo(() => formatTemp(temp, units), [temp, units]);
  const date = useMemo(() => formatDate(dt), [dt]);

  return (
    <Card className={classes.card}>
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
  forecast: PropTypes.object.isRequired,
};
export default WeatherForecastCard;
