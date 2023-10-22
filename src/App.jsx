import React from "react";

function App() {
  const numbers = [50, 30, 25];
  return (
    <>
      <h1>In the name of god</h1>
      {numbers.map((number, key) => {
        return (
          <div
            key={key}
            style={{ border: "1px solid red", marginBottom: "3px" }}
          >
            {number}
          </div>
        );
      })}
    </>
  );
}

export default App;

// console.log("🚀 ~ file: App.jsx:8 ~ newNumbers ~ newNumbers:", newNumbers)
