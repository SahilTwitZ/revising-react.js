//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const date = new Date();
const hours = date.getHours();

let greeting = "";
const customStyles = {
  color: "",
};

// Determine greeting and styles based on hours
if (hours < 12) {
  greeting = "Good Morning";
  customStyles.color = "red";
} else if (hours < 18) {
  greeting = "Good Afternoon";
  customStyles.color = "green";
} else {
  greeting = "Good Evening";
  customStyles.color = "blue";
}

root.render(<h1 style={customStyles}> {greeting} </h1>);
