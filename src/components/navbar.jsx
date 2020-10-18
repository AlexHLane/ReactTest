import React, { Component } from "react";

import LoginButton from "./login";

//turned this into a stateless functional component
//in functional components, you need to pass props in as a parameter whereas in class components, you can get it automatically
//changed from class Navbar extends Component to a function call "NavBar" that returns a react element

//cannot have lifecycle hooks in a stateless functional component

// originally the argument was just (props)
//then with argument destructuring, because we only want the counter in this functional component, we changed it to ({totalItems}) which simplifies the code and avoids props.blah everywhere
const NavBar = ({ totalItems}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand text-light">Simply a Grocery Cart </a>

      <form className="form-inline">
        <span
          style={{ fontSize: 13 }}
          className="badge badge-pill badge-secondary m-4"
        >
          {totalItems}
        </span>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Looker Upper"
          aria-label="Looker Upper"
        ></input>
        <button className="btn btn-light" type="submit">
          Go!
        </button>
      </form>

      <LoginButton/>

    </nav>
  );
};

export default NavBar;
