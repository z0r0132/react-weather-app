import theme from "../../theme";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * This function accepts an temperature and units of weather data as an argument, and returns temperature(either in fahrenheit, or, celsius)
 * @param {number} temp
 * @param {string} units
 */
const convertTemperature = (temp, units) =>
  Math.round(units === "celsius" ? (5 / 9) * (temp - 32) : temp);

/**
 * This function accepts an array of weather data as an argument, and returns array of weather data grouped by date as a response
 * @param {array} list
 */
export const groupWeatherDataByDate = (list) => {
  return list.reduce((acc, value) => {
    const key = value["dt_txt"].split(" ")[0];
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(value);

    return acc;
  }, {});
};

/**
 * This function accepts an temperature and units of weather data as an argument, and returns formatted temperature as a response
 * @param {number} temp
 * @param {string} units
 */
export const formatTemp = (temp, units) =>
  `${convertTemperature(temp, units)}${units === "celsius" ? "C" : "F"}`;

/**
 * This function accepts date of weather data as an argument, and returns formatted date as a response
 * @param {string} dt
 */
export const formatDate = (dt) => {
  const d = new Date(dt);
  return `${d.getDate()} ${
    months[d.getMonth()]
  } ${d.getFullYear().toString().slice(2)}`;
};

/**
 * This function accepts units and chartData viz. weather data for a particular date as an argument, and returns bar chart required dataset
 * @param {string} units
 * * @param {array} chartData
 */
export const convertDataForChart = (units, chartData = []) => {
  if (chartData.length === 0) {
    return {};
  }
  const labels = [],
    data = [];
  chartData.forEach(({ dt_txt: dt, main: { temp } }) => {
    const time = dt.split(" ")[1];
    const temperature = convertTemperature(temp, units);
    labels.push(time);
    data.push(temperature);
  });

  return {
    labels,
    datasets: [
      {
        label: `Weather on ${formatDate(chartData[0].dt_txt)} (per 3 hours)`,
        backgroundColor: theme.palette.background.light,
        borderColor: theme.palette.background.dark,
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data,
      },
    ],
  };
};
