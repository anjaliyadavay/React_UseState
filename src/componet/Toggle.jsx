import React, { useState } from "react";

function Toggle() {
  // Declare state variable for toggling, initially set to false
  const [isToggle, setIsToggle] = useState(false);

  // Function to toggle the value between true and false

  function handleToggle() {
    setIsToggle(!isToggle);
  }

  return (
    <>
      {/* Button that displays ON if isToggled is true, and OFF if false */}
      <div className="btns">
        <button onClick={handleToggle}>{isToggle ? "ON" : "OFF"}</button>
      </div>
      <hr />
    </>
  );
}

export default Toggle;
