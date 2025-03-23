import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const citrus = ["lime", "lemon"];
// // const fruits = ["apple", "banana", ...citrus];
// const fruits = ["apple", ...citrus, "banana"];

// console.log(fruits);

// const fullName = {
//   fName: "James",
//   lName: "Bond",
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007",
// };

// console.log(user);

root.render(<App />);
