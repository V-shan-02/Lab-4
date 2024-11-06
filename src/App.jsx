import React from "react";
import FakeApiApp from "./Components/FakeApiApp";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <FakeApiApp />
    </div>
  );
}

export default App;
