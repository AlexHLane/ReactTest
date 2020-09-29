import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand text-light">Simply a Grocery Cart</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Looker Upper"
            aria-label="Looker Upper"
          ></input>
          <button class="btn btn-light" type="submit">
            Go!
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
