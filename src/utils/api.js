import { OPENWEATHERAPIKEY } from "./config";

/**
 * This function accepts an url and options of a API as an argument, and returns data response
 * @param {string} url
 * @param {object} options
 */
const callAPI = (url, options = {}) =>
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("unexpected response");
      }

      return response.json();
    })
    .then((responseJSON) => responseJSON);

/**
 * This function accepts an location(e.g city), and returns data response
 * @param {string} location
 */
export const fetchWeatherForecast = (location = "Munich,de") => {
  const openWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${OPENWEATHERAPIKEY}&cnt=40`;
  return callAPI(openWeatherUrl);
};
