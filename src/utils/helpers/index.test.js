import {
  groupWeatherDataByDate,
  formatTemp,
  formatDate,
  convertDataForChart,
} from ".";
import { weatherData, groupedByDateData, chartData } from "./dummyData";

describe("helper functions", () => {
  it("should return the grouped by Date data from weatherData", () => {
    expect(groupWeatherDataByDate(weatherData)).toMatchObject(
      groupedByDateData
    );
  });

  it("should show temperature in fahrenheit when units is in fahrenheit", () => {
    expect(formatTemp(71.33, "fahrenheit")).toEqual("71F");
  });

  it("should show temperature in celsius when units is in celsius", () => {
    expect(formatTemp(71.33, "celsius")).toEqual("22C");
  });

  it("should show formatted date correctly", () => {
    expect(formatDate("2020-09-17 15:00:00")).toEqual("17 Sep 20");
  });

  it("should convert to bar chart required dataset correctly", () => {
    expect(convertDataForChart("fahrenheit", weatherData)).toMatchObject(
      chartData
    );
  });
});
