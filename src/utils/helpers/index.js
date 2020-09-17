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
  `${Math.round(units === "celsius" ? (5 / 9) * (temp - 32) : temp)}${
    units === "celsius" ? "C" : "F"
  }`;

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
