import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Person from "./components/Person";

function App() {
  const schools = [
    { name: "Everest", location: "Nairobi" },
    { name: "Alliance", location: "Kiambu" },
  ];
  return (
    <div>
      <Navbar />

      {schools.map((school, index) => {
        return (
          <Person key={index} school={school.name} location={school.location} />
        );
      })}

      {/* <img
        src="https://images.unsplash.com/photo-1668383184143-3896b060259a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="nature.png"
      /> */}
    </div>
  );
}

export default App;
