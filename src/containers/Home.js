import React from "react";
import { connect } from "react-redux";

import WeatherCardListContainer from "./WeatherCardListContainer";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WeatherCardListContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Home);
