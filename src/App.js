import React, { Component } from "react";
import LineGraph from "./component/Novi_line";
import PieGraph from "./component/Novi_pie";
import SankeyGraph from "./component/Novi_sankey";
import SparkGraph from "./component/Novi_sparkline";


class App extends Component {
  render() {
    return (
      <div>
        <LineGraph />
        <PieGraph />
        <SparkGraph />
        <SankeyGraph />
      </div>
    )
  }
}

export default App
