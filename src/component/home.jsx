import React, { Component } from "react";
import "../css/home.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomizedInputSet from "./textBoxCompo";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={"parent"}>
          <CustomizedInputSet />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
