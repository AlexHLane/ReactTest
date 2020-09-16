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

    nextIndex: 5,
  };

  handleDelete = (counterId) => {
    console.log("delete handler called: ", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    console.log("adding handler called, curr Index: ", this.state.nextIndex);
    const counters = this.state.counters;
    counters.push({ id: this.state.nextIndex, value: 0 });

    this.setState({ nextIndex: this.state.nextIndex + 1 });

    this.setState({ counters });
  };

  render() {
    //console.log("inside counters render");
    return (
      <div>
        <button
          onClick={this.handleAdd}
          classname="btn btn-outline-primary btn-sm m-4"
        >
          Add Item
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            id={counter.id}
            value={counter.value}
          >
            <h4>Title thingy: {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
