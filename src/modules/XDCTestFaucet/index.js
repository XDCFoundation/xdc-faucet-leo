import React from "react";
import BaseComponent from "../baseComponent";
import XDCTestFaucet from "./XDCTestFaucet";

class Main extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <XDCTestFaucet />;
  }
}

export default Main;
