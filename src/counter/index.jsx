import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="count">{this.props.count}</div>
        <div
          className="increment"
          onClick={() => this.props.increment(this.props.id, this.props.steps)}
        >
          +
        </div>
        <div
          className="decrement"
          onClick={() => this.props.decrement(this.props.id, this.props.steps)}
        >
          -
        </div>
      </div>
    );
  }
}
