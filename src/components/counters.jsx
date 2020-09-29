import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //using object destructuring, so I don't use this.props.blah everywhere, not really sure how it matches up to props under the hood, but keeping naming conventions will help
    const {
      onReset,
      counters,
      onAdd,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;

    //console.log("inside counters render");
    return (
      <React.Fragment>
        <main classname="container">
          <button
            onClick={onAdd}
            className="btn btn-outline-primary btn-sm m-4"
          >
            Add Item
          </button>

          <button onClick={onReset} className="btn btn-warning btn-sm m-2">
            Reset
          </button>
        </main>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
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
