// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <div>
//       <img
//         src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"
//         alt="french-fries-and-burgers-image"
//         className="food-img"
//       />
//       <img
//         src="https://t4.ftcdn.net/jpg/09/76/94/83/360_F_976948359_rtVBTuf4BroTySr70mvosOlrA5etCO6v.jpg"
//         alt="jalebi-image"
//         className="food-img"
//       />
//       <img
//         src="https://lh3.googleusercontent.com/proxy/3M5fKmqCsyKjF6vxj75sFkYj29l2DoKJWbBFGph1eBeygd59_flsuVtof6fZVbiO_sB4a0Wz63Nrb0qKLt1q-8zg-t5LYWcBQA"
//         alt="chicken-loipops-image"
//         className="food-img"
//       />
//     </div>
//   </div>,
//   document.getElementById("root")
// );

//get random image from picsum and display
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>Random Image from PICSUM : </h1>
    <img src={img} />
    <img src={img + "?grayscale"} />
  </div>,

  document.getElementById("root")
);
