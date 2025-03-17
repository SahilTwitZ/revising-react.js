// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./../public/styles.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// var count = 0;

// function increase() {
//   count++;
//   // console.log(count);

//   //need to render again and again to update on UI
//   root.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

// root.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//   </div>
// );

// using useState Hook
import App from "./components/App";

import React from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
