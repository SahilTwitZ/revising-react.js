import React from "react";
import ReactDOM from "react-dom/client";
// import pi, { doublePI, triplePI } from "./math.js";
import * as pie from "./math.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <ul>
//     <li>{pi}</li>
//     <li>2</li>
//     <li>3</li>
//     <li>{doublePI()}</li>
//     <li>{triplePI()}</li>
//   </ul>
// );


root.render(
  <ul>
    <li>{pie.default}</li>
    <li>2</li>
    <li>3</li>
    <li>{pie.doublePI()}</li>
    <li>{pie.triplePI()}</li>
  </ul>
);