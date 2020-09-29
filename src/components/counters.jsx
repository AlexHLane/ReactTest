import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //console.log("inside counters render");
    return (
      <React.Fragment>
        <main classname="container">
          <button
            onClick={this.props.onAdd}
            className="btn btn-outline-primary btn-sm m-4"
          >
            Add Item
          </button>

          <button
            onClick={this.props.onReset}
            className="btn btn-warning btn-sm m-2"
          >
            Reset
          </button>
        </main>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          >
            <h4>Title thingy: {counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
