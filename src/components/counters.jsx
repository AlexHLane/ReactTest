import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 20 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    //console.log("inside counters render");
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title thingy</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
