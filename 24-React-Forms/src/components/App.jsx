import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [headingText, changeHeading] = useState("");

  function handleChange(event) {
    // console.log("Change Detected");
    setName(event.target.value);
  }

  // function handleClick() {
  //   changeHeading(name);
  // }

  function handleClick(event) {
    changeHeading(name);

    event.preventDefault();
  }

  //   return (
  //     <div className="container">
  //       <h1>Hello {headingText}</h1>
  //       <input
  //         onChange={handleChange}
  //         type="text"
  //         placeholder="What's your name?"
  //         value={name}
  //       />
  //       <button onClick={handleClick}>Submit</button>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
