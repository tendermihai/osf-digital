import React, { useState } from "react";

const ChildComponent = () => {
  const [childState, setChildState] = useState("Initial Value");

  const handleButtonClick = () => {
    setChildState("New Value");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Child State: {childState}</p>
      <button onClick={handleButtonClick}>Update State</button>
    </div>
  );
};

export default ChildComponent;
