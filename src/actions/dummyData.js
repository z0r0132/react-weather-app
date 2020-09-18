export const dummyWeatherForecastData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1600171200,
      main: {
        temp: 299.26,
        feels_like: 300.32,
        temp_min: 299.26,
        temp_max: 299.95,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 963,
        humidity: 55,
        temp_kf: -0.69,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.51,
        deg: 311,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-09-15 12:00:00",
    },
    {
      dt: 1600182000,
      main: {
        temp: 299.32,
        feels_like: 300.55,
        temp_min: 299.32,
        temp_max: 299.51,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 962,
        humidity: 55,
        temp_kf: -0.19,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.3,
        deg: 346,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-09-15 15:00:00",
    },
  ],
  city: {
    id: 2867714,
    name: "Munich",
    coord: {
      lat: 48.1374,
      lon: 11.5755,
    },
    country: "DE",
    population: 1260391,
    timezone: 7200,
    sunrise: 1600145468,
    sunset: 1600190803,
  },
};
