import React, { useEffect, useState } from "react";
import "./App.css";
import School from "./components/School";
import { notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  // Function that increases the number
  // function addNumber() {
  //   return setNumber(number + 1);
  // }

  // Function that decreases the number
  // function decreaseNumber() {
  //   return setNumber(number - 1);
  // }

  // useEffect(() => {
  //   console.log("Number has increased by one");
  // }, [number]);
  function submitForm(event) {
    event.preventDefault();
    // alert(`Hello ${name} your password is ${password}`);
  }

  function display() {
    // notifications.show({
    // title: "Testing Notifications",
    // message: `Hello ${name}`,
    // });
    notifications.show({
      title: "Testing Notifications",
      message: `Hello ${name}`,
      color: "red",
      autoClose: 2000,
    });
  }
  return (
    <div>
      {/* <h1>{number}</h1>
      <button onClick={addNumber}>Add</button>
      <br />
      <button onClick={decreaseNumber}>Decrease</button> */}
      {/* <School /> */}
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
          required
        />

        {/* Input for password */}
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={display}>Display notification</button>
    </div>
  );
}

export default App;
