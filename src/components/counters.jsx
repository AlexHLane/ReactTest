import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
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

  handleIncrement = (counter) => {
    //console.log(counter);

    //clones the array into a new one, not sure why they don't just go into the state
    //is it because we have to reset the array with the new changes?
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleAdd = () => {
    console.log("adding handler called, curr Index: ", this.state.nextIndex);
    const counters = this.state.counters;
    counters.push({ id: this.state.nextIndex, value: 0 });

    this.setState({ nextIndex: this.state.nextIndex + 1 });

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    //console.log("inside counters render");
    return (
      <div>
        <button
          onClick={this.handleAdd}
          className="btn btn-outline-primary btn-sm m-4"
        >
          Add Item
        </button>

        <button
          onClick={this.handleReset}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
          >
            <h4>Title thingy: {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
