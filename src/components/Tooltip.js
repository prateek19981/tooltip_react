import React, { Component } from "react";

class Tooltip extends Component {
  render() {
    let showTooltip;
    const { position } = this.props;
    if (position === "left") {
      console.log("position", position);
      showTooltip = (
        <div id="tooltip" className="left">
          <p>button</p>
        </div>
      );
    } else if (position === "right") {
      showTooltip = (
        <div id="tooltip" className="right">
          <p>button</p>
        </div>
      );
    } else if (position === "top") {
      showTooltip = (
        <div id="tooltip" className="top">
          <p>button</p>
        </div>
      );
    } else if (position === "bottom") {
      showTooltip = (
        <div id="tooltip" className="bottom">
          <p>button</p>
        </div>
      );
    }

    return <div>{showTooltip}</div>;
  }
}

export default Tooltip;
