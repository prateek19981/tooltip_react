import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Mainbutton extends Component {
  render() {
    return (
      <div className="btn-contain">
        <input
          type="button"
          value="click me"
          className="mbtn"
          onMouseOver={() => {
            console.log("mouse");
            this.props.mouseover();
          }}
          onMouseOut={() => {
            this.props.mouseout();
          }}
        />
      </div>
    );
  }
}

export default Mainbutton;
