import React, { useState } from "react";

function App() {
  function increase() {
    // count++;
    setCount(count + 1);
  }

  function decrease() {
    // count++;
    setCount(count - 1);
  }

  // const state = useState(1);

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
