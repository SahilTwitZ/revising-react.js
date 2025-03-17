import React from "react";

function App() {
  // let time = new Date().toLocaleTimeString();
  // console.log(time);

  //1.
  const [time, setTime] = React.useState();
  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  //2.
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
