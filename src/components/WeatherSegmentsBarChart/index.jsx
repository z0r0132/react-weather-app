import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";

import { convertDataForChart } from "../../utils/helpers";

import styles from "./styles";

const useStyles = makeStyles(styles);

const WeatherSegmentsBarChart = ({ units, chartData }) => {
  const classes = useStyles();

  const data = useMemo(() => convertDataForChart(units, chartData), [
    chartData,
    units,
  ]);

  return (
    <div className={classes.root}>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default WeatherSegmentsBarChart;
