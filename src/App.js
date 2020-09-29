import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  //got rid of this from counters.jsx because we needed to "lift the state" up to the nearest parent that is above the components using it. Since both navbar and the counters use it, the parent is this: App
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
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
