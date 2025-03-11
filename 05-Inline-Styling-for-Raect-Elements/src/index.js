import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


const customStyles = {
    color: "red",
    fontSize: "20px", //camelCase->front-size -> fontSize
    border: "2px solid green" //passed as a string
}

//advantage
customStyles.border = "1px solid blue";
customStyles.fontSize = "40px";

root.render(
    <div>
        {/* <h1 style = {{color: "red"}}>Hello Inline Styling for React Elements</h1> */}
        <h1 style = {customStyles}>Hello Inline Styling for React Elements</h1>
    </div>
);
