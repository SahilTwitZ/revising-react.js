import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
