import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the count value by 1
  function increment() {
    setCount(count + 1); // Increase the count by 1
  }

  // arrow funtion

  const decreament = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <>
    {/* Display the current count */}
    <h2>Count is {count}</h2>
      <div className="btns">
        {/* Button that increments the counter when clicked */}
        <button onClick={increment}>Increment</button>

        <button onClick={decreament}>decreament</button>

        <button onClick={reset}>reset</button>
      </div>
      <hr />
    </>
  );
}

export default Counter;
