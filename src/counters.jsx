import React, { Component } from "react";
import Counter from "./counter";
import Logo from "./logo";

const counters = [
  { id: 0, count: 0, steps: 1 },
  { id: 1, count: 0, steps: 2 },
  { id: 2, count: 0, steps: 3 },
  { id: 3, count: 0, steps: 4 },
];

export default class Counters extends Component {
  state = {
    counters,
    total: 0,
  };

  changeTotal = (type, id, steps) => {
    this.setState((prevState) => {
      if (type === "increment") {
        return { total: prevState.total + steps };
      } else if (
        type === "decrement" &&
        prevState.total > 0 &&
        this.state.counters[id].count >= steps
      ) {
        return { total: prevState.total - steps };
      }
    });
  };
  increment = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) =>
          item.id === id ? { ...item, count: item.count + +steps } : item
        ),
      };
    });
    this.changeTotal("increment", id, steps);
  };
  decrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) =>
          item.id === id && item.count >= item.steps
            ? { ...item, count: item.count - +steps }
            : item
        ),
      };
    });
    this.changeTotal("decrement", id, steps);
  };

  render() {
    return (
      <div>
        <Logo />
        {this.state.counters.map((item) => {
          return (
            <Counter
              key={item.id}
              {...item}
              increment={this.increment}
              decrement={this.decrement}
            />
          );
        })}
        <div className="total">{this.state.total}</div>
      </div>
    );
  }
}
