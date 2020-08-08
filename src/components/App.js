import "../App.css";
import Tooltip from "./Tooltip";
import Mainbutton from "./Mainbutton";

import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      position: "",
    };
  }
  handleChangePosition = (pos) => {
    this.setState({ position: pos });
  };

  handleMouseOver = () => {
    console.log("mouseover");
    this.setState({
      showTooltip: !this.state.showTooltip,
    });
  };
  handleMouseOut = () => {
    console.log("mouseout");
    this.setState({
      showTooltip: !this.state.showTooltip,
    });
  };

  render() {
    const options = ["top", "bottom", "left", "right"];
    const defaultOption = options[0];
    return (
      <div>
        <Dropdown
          options={options}
          value={this.state.position}
          placeholder="Select an option"
          onChange={(e) => {
            console.log("value", e.value);
            this.handleChangePosition(e.value);
          }}
        />
        <Mainbutton
          mouseover={this.handleMouseOver}
          mouseout={this.handleMouseOut}
        />
        {this.state.showTooltip ? (
          <Tooltip position={this.state.position} />
        ) : null}
      </div>
    );
  }
}

export default App;
