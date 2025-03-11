//OLD
// var React = require("react");
// var ReactDom = require("react-dom");

// ReactDom.render(<h1>Hello World!</h1>, document.getElementById("root"));

//LATEST
// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello World!</h1>);

//LASTEST
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello!</h1>
    <p>Hi...</p>
  </div>
);
