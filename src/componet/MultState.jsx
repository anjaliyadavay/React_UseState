import React from 'react'
import { useState } from 'react';

function MultState() {

    // Declare state variables for name and age
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // Function to handle changes in the name input field
  function handleNameChange(e) {
    setName(e.target.value); // Update name state with the input value
  }

  // Function to handle changes in the age input field
  function handleAgeChange(e) {
    setAge(e.target.value); // Update age state with the input value
  }

  return (
    <>
    <div className="input">
      {/* Input fields for name and age */}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter your age"
      />
      {/* Display the name and age values */}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
    <hr />
    </>
  )
}

export default MultState