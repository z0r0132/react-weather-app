export const weatherData = [
  {
    main: {
      temp: 71.67,
    },
    dt_txt: "2020-09-17 15:00:00",
  },
  {
    main: {
      temp: 64.24,
    },
    dt_txt: "2020-09-17 18:00:00",
  },
  {
    main: {
      temp: 74.27,
    },
    dt_txt: "2020-09-18 15:00:00",
  },
  {
    main: {
      temp: 68.64,
    },
    dt_txt: "2020-09-18 18:00:00",
  },
];

export const groupedByDateData = {
  "2020-09-17": [
    {
      main: {
        temp: 71.67,
      },
      dt_txt: "2020-09-17 15:00:00",
    },
    {
      main: {
        temp: 64.24,
      },
      dt_txt: "2020-09-17 18:00:00",
    },
  ],
  "2020-09-18": [
    {
      main: {
        temp: 74.27,
      },
      dt_txt: "2020-09-18 15:00:00",
    },
    {
      main: {
        temp: 68.64,
      },
      dt_txt: "2020-09-18 18:00:00",
    },
  ],
};

export const chartData = {
  labels: ["15:00:00", "18:00:00", "15:00:00", "18:00:00"],
  datasets: [
    {
      label: `Weather on 17 Sep 20 (per 3 hours)`,
      data: [72, 64, 74, 69],
    },
  ],
};
