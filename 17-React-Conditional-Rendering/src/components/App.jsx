// import React from "react";

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Login from "./Login";

const isLoggedIn = false;

const currTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}

      {/* {currTime > 12 ? <h1>Why are you still working...</h1> : null} */}

      {currTime > 12 && <h1>Why are you still working...</h1>}
    </div>
  );
}

export default App;
