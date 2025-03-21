import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [headingFirstName, setHeadingFirst] = useState("");
  const [headingLastName, setHeadingLast] = useState("");

  function handleChange(event) {
    setFirstName(event.target.value);
  }

  function handleChange2(event) {
    setLastName(event.target.value);
  }

  function handleClick(event) {
    setHeadingFirst(firstName);
    setHeadingLast(lastName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {headingFirstName} {headingLastName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={handleChange2}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
