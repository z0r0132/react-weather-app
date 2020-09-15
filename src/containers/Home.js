import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="body1">Today's weather</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Home);
