import React, { Component } from "react";
import WantToRead from "./wantToRead";
import CurrentlyReading from "./currentlyReading";
import Read from "./read";

class main extends Component {
  state = {};
  render() {
    return (
      <div>
        <WantToRead />
        <CurrentlyReading />
        <Read />
      </div>
    );
  }
}

export default main;
