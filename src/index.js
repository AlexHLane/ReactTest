import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const element = <h1>Heyyo world</h1>;
console.log(element);

//now App contains all the major "sections" of the website, ie: the navbar and the counters
ReactDOM.render(<App />, document.getElementById("root"));

//note to self, only 1 render works in here, the second and later ones get ignored
//ReactDOM.render(element, document.getElementById("root"));
serviceWorker.unregister();

//shortcuts: imrc gives the import react component
//           cc gives us the class extending a component
//           stc creates stateless functional component template
