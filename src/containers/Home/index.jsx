import React from "react";

import WeatherCardListContainer from "../WeatherCardListContainer";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <WeatherCardListContainer />
    </div>
  );
};

export default Home;
