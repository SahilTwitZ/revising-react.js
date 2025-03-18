// import React, { useState } from "react";

// function App() {
//   const [headText, setText] = useState("Hello");

//   function handleClick() {
//     setText("Submitted");
//   }

//   return (
//     <div className="container">
//       <h1>{headText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState("white");

  function handleClick() {
    setButtonText("Submitted");
  }

  function handleOver() {
    setButtonColor("black");
  }

  function handleOut() {
    setButtonColor("white");
  }

  return (
    <div className="container">
      <h1>{buttonText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        style={{ backgroundColor: buttonColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
