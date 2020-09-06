import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const element = <h1>Heyyo world</h1>;
console.log(element);

ReactDOM.render(<Counter />, document.getElementById("root"));
//note to self, only 1 render works in here, the second and later ones get ignored
//ReactDOM.render(element, document.getElementById("root"));
